(() => {
  'use strict';
  const characters = window.CHARACTERS;
  const grid = document.querySelector('#character-grid');
  const search = document.querySelector('#search');
  const dialog = document.querySelector('#character-dialog');
  const filters = [...document.querySelectorAll('.filter')];
  const sort = document.querySelector('#catalog-sort');
  const allIds = characters.map(c=>c.id);
  let favorites;
  try { const saved=JSON.parse(localStorage.getItem('gensokyo-favorites')||'[]');favorites=new Set(Array.isArray(saved)?saved.filter(id=>allIds.includes(id)):[]); } catch { favorites = new Set(); }
  let currentFilter = 'all';
  let currentId = null;
  let toastTimer;
  let lastOpener;
  let visibleIds = [...allIds];
  let detailIds = [...allIds];
  let syncingHistory = false;
  const sourceUrl = c => c.reference || `https://danmaku.jp/archive/character/${c.source}/`;
  const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const number = c => String(characters.indexOf(c) + 1).padStart(2,'0');
  const latestBatch = Math.max(...characters.map(c=>Number(c.batch)||1));
  document.querySelector('[data-filter="all"] sup').textContent = String(characters.length).padStart(2,'0');
  document.querySelector('[data-filter="new"] sup').textContent = String(characters.filter(c=>Number(c.batch)===latestBatch).length).padStart(2,'0');
  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const visible = characters.filter(c => (currentFilter === 'all' || (currentFilter === 'favorites' ? favorites.has(c.id) : currentFilter === 'new' ? Number(c.batch) === latestBatch : c.group === currentFilter)) && [c.name,c.fullName,c.jp,c.en,c.title,c.species,c.place,c.ability,c.keywords].filter(Boolean).join(' ').toLocaleLowerCase().includes(query));
    if(sort.value==='recent')visible.sort((a,b)=>(Number(b.batch)||1)-(Number(a.batch)||1)||characters.indexOf(a)-characters.indexOf(b));
    if(sort.value==='name')visible.sort((a,b)=>(a.fullName||a.name).localeCompare(b.fullName||b.name,'zh-CN'));
    visibleIds=visible.map(c=>c.id);
    grid.innerHTML = visible.map(c => `<article class="character-card" style="--character-color:${c.color}"><button class="favorite-button" data-favorite="${c.id}" aria-pressed="${favorites.has(c.id)}" aria-label="${favorites.has(c.id)?'取消收藏':'收藏'}${c.name}">${favorites.has(c.id)?'♥':'♡'}</button><button class="character-open" data-open="${c.id}" aria-label="查看${c.fullName||c.name}的插图与介绍"><div class="card-picture"><span class="card-number">NO. ${number(c)}${Number(c.batch)===latestBatch?'<small class="new-resident">新入册</small>':''}</span><img src="assets/${c.artwork||c.id}.webp" alt="${c.name}的淡彩铅笔 Q 版全身插图" loading="lazy" width="700" height="700"><span class="card-expand" aria-hidden="true">↗</span></div><div class="card-meta"><span>${c.title}</span><span class="place-tag">${c.place}</span></div><h3>${c.name}</h3><p class="character-en">${c.en.toUpperCase()}</p></button><p class="character-intro">${c.intro}</p><div class="card-foot"><i aria-hidden="true"></i>${c.species}<span aria-hidden="true"> / </span>${c.ability.replace('程度的能力','')}</div></article>`).join('');
    document.querySelector('#result-count').textContent = `共 ${visible.length} 位住民`;
    document.querySelector('#empty-state').hidden = visible.length > 0;
    const onlyFavorites = currentFilter === 'favorites' && !query;
    document.querySelector('#empty-title').textContent = onlyFavorites?'收藏册还空着':'还没有遇见这位住民';
    document.querySelector('#empty-copy').textContent = onlyFavorites?'点亮角色插图上的爱心，把喜欢的她留在这里。':'换个名字，或到其他地方找找吧。';
    filters.forEach(button=>{const key=button.dataset.filter;const count=key==='all'?characters.length:key==='new'?characters.filter(c=>Number(c.batch)===latestBatch).length:key==='favorites'?favorites.size:characters.filter(c=>c.group===key).length;let badge=button.querySelector('sup');if(!badge){badge=document.createElement('sup');button.append(' ',badge);}badge.textContent=String(count).padStart(2,'0');});
    const label=document.querySelector('.filter.active')?.childNodes[0]?.textContent.trim()||'全部住民';
    document.querySelector('#catalog-context').textContent=query?`${label} · 搜索“${search.value.trim()}”`:`${label} · 点开一位，沿着这组结果继续翻阅。`;
    document.querySelector('#clear-catalog').hidden=currentFilter==='all'&&!query;
  }
  function toast(message) {
    const el = document.querySelector('#toast');
    clearTimeout(toastTimer); el.textContent=message; el.classList.add('show');
    toastTimer=setTimeout(() => el.classList.remove('show'),2200);
  }
  function toggleFavorite(id) {
    const c=characters.find(c=>c.id===id);
    if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
    try { localStorage.setItem('gensokyo-favorites', JSON.stringify([...favorites])); } catch { /* Browsers may disable local persistence; this session still works. */ }
    render();
    if(dialog.open && currentId===id) renderDetail(c);
    toast(favorites.has(id)?`已将${c.name}收入收藏册`:`已取消收藏${c.name}`);
  }
  function designDetail(c){
    if(!c.design)return '';
    const d=c.design;
    return `<details class="detail-design"><summary>原作造型对照 <span aria-hidden="true">＋</span></summary><div><p class="design-work">${d.work}</p><ul>${d.checks.map(item=>`<li>${item}</li>`).join('')}</ul><p>${d.note}</p><a href="${d.source}" target="_blank" rel="noopener noreferrer">查看原作立绘索引 ↗</a></div></details>`;
  }
  function readingDetail(c) {
    const route=window.GENSOKYO?.characterLinks[c.id];
    if(!route)return '';
    const place=window.GENSOKYO_ATLAS?.places.find(p=>p.id===route.place)||window.GENSOKYO.places.find(p=>p.id===route.place);
    const book=window.GENSOKYO.books.find(b=>b.id===route.work);
    return `<div class="detail-related">${route.related.map(id=>`<button data-open="${id}">认识${characters.find(c=>c.id===id).name} ↗</button>`).join('')}</div>${place?`<button class="detail-visit" data-visit-place="${place.id}">去${place.name}走一走 →</button>`:'<p class="detail-map-note">居所尚未收入地图册，暂不标注位置。</p>'}${window.GENSOKYO_SCENES?.some(s=>s.people.includes(c.id))?`<div class="detail-scenes">${window.GENSOKYO_SCENES.filter(s=>s.people.includes(c.id)).map(s=>`<button data-scene-open="${s.id}">翻看场景 · ${s.title} ↗</button>`).join('')}</div>`:''}<div class="detail-gallery-links"><button data-gallery-character="${c.id}">查看相关画廊作品 ↗</button><button data-gallery-submit data-gallery-character="${c.id}">投稿这位角色 ＋</button></div><div class="detail-reading"><span>沿着这段故事，继续翻页</span><p>${route.line}</p><a href="${book.reference}" target="_blank" rel="noopener noreferrer">《${book.name}》 · 中文资料 ↗</a></div>`;
  }
  function renderDetail(c) {
    document.querySelector('#detail-content').innerHTML = `<div class="detail-layout" style="--character-color:${c.color}"><div class="detail-picture"><img src="assets/${c.artwork||c.id}.png" alt="${c.name}完整手绘插图" width="1024" height="1024"></div><div class="detail-copy"><div class="eyebrow">住民录 / NO. ${number(c)}</div><h2 id="detail-name">${c.fullName||c.name}</h2><div class="jp-name">${c.jp} · ${c.en}</div><p class="detail-title">${c.title}</p><div class="detail-facts"><span>种族 · ${c.species}</span><span>居所 / 活动 · ${c.place}</span></div><p class="detail-story">${c.story}</p><div class="ability"><span>角色能力</span><strong>${c.ability}</strong></div><div class="detail-extra"><p><b>画中记号</b><br>${c.motif}</p><p><b>相识的人</b><br>${c.relation}</p></div>${designDetail(c)}${readingDetail(c)}<div class="detail-actions"><button data-favorite="${c.id}" aria-pressed="${favorites.has(c.id)}">${favorites.has(c.id)?'♥ 已收入收藏':'♡ 收入收藏册'}</button><a href="assets/${c.artwork||c.id}.png" download="${c.name}-手绘原图.png">保存插图 ↓</a><a href="${sourceUrl(c)}" target="_blank" rel="noopener noreferrer">资料出处 ↗</a></div></div></div>`;
    const scoped=detailIds.length!==characters.length||detailIds.some((id,i)=>id!==allIds[i]);
    document.querySelector('#dialog-position').textContent=scoped?`这组结果 ${detailIds.indexOf(c.id)+1} / ${detailIds.length} · 全册 ${number(c)} / ${characters.length}`:`全册 ${number(c)} / ${characters.length}`;
    document.querySelector('#dialog-scope-toggle').hidden=!scoped;
    document.querySelector('#dialog-scope-toggle').textContent=`改为浏览全册 ${characters.length} 位`;
    document.querySelector('#previous-character').disabled=detailIds.length<2;
    document.querySelector('#next-character').disabled=detailIds.length<2;
    const actions=document.querySelector('.detail-actions');
    const share=document.createElement('button');share.dataset.shareCharacter=c.id;share.textContent='复制人物链接 ↗';actions.append(share);
    const fallback=document.createElement('input');fallback.id='character-share-url';fallback.readOnly=true;fallback.hidden=true;fallback.setAttribute('aria-label','人物分享链接');actions.after(fallback);
  }
  function updateCharacterUrl(id,mode='replace'){
    const url=new URL(location.href);if(id)url.searchParams.set('character',id);else url.searchParams.delete('character');
    const state={...history.state};if(id){if(mode==='push')state.gensokyoCharacter=true;state.gensokyoScope=[...detailIds];}else{delete state.gensokyoCharacter;delete state.gensokyoScope;}
    history[mode==='push'?'pushState':'replaceState'](state,'',url);
  }
  function openCharacter(id,{scope,historyMode}={}) {
    const c=characters.find(c=>c.id===id); if(!c)return;
    const wasOpen=dialog.open;
    if(scope)detailIds=scope.filter(key=>allIds.includes(key));
    else if(!wasOpen||!detailIds.includes(id))detailIds=[...allIds];
    if(!detailIds.includes(id))detailIds=[...allIds];
    currentId=id; renderDetail(c);
    if(!wasOpen){ lastOpener=document.activeElement;dialog.returnValue=''; dialog.showModal();document.body.classList.add('dialog-open'); }
    if(historyMode!=='none')updateCharacterUrl(id,historyMode||(wasOpen?'replace':'push'));
    dialog.scrollTop=0;
  }
  function moveCharacter(direction) {if(detailIds.length<2)return;const index=detailIds.indexOf(currentId);openCharacter(detailIds[(index+direction+detailIds.length)%detailIds.length],{scope:detailIds,historyMode:'replace'});}
  function setFilter(value) {currentFilter=value;filters.forEach(button=>{const active=button.dataset.filter===value;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});render();}
  filters.forEach(button=>button.addEventListener('click',()=>setFilter(button.dataset.filter)));
  search.addEventListener('input',render);
  sort.addEventListener('change',render);
  document.querySelector('#clear-catalog').addEventListener('click',()=>{search.value='';setFilter('all');search.focus();});
  document.addEventListener('click',async event=>{const favorite=event.target.closest('[data-favorite]');if(favorite){toggleFavorite(favorite.dataset.favorite);return;}const share=event.target.closest('[data-share-character]');if(share){const url=new URL(location.pathname,location.origin);url.searchParams.set('character',share.dataset.shareCharacter);url.hash='characters';try{await navigator.clipboard.writeText(url.href);toast('人物链接已复制');}catch{const input=document.querySelector('#character-share-url');input.hidden=false;input.value=url.href;input.focus();input.select();toast('可复制下方人物链接');}return;}const open=event.target.closest('[data-open]');if(open)openCharacter(open.dataset.open,{scope:open.closest('#character-grid')?[...visibleIds]:undefined});});
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(syncingHistory)syncingHistory=false;else if(history.state?.gensokyoCharacter&&dialog.returnValue!=='visit-place')history.back();else updateCharacterUrl(null);if(lastOpener?.isConnected)lastOpener.focus({preventScroll:true});else document.querySelector('.filter.active').focus({preventScroll:true});});
  addEventListener('popstate',()=>{const id=new URLSearchParams(location.search).get('character');if(allIds.includes(id))openCharacter(id,{scope:history.state?.gensokyoScope||allIds,historyMode:'none'});else if(dialog.open){syncingHistory=true;dialog.close();}});
  document.querySelector('#dialog-scope-toggle').addEventListener('click',()=>{detailIds=[...allIds];renderDetail(characters.find(c=>c.id===currentId));updateCharacterUrl(currentId);});
  document.querySelector('#previous-character').addEventListener('click',()=>moveCharacter(-1));
  document.querySelector('#next-character').addEventListener('click',()=>moveCharacter(1));
  document.querySelector('#reset-filters').addEventListener('click',()=>{search.value='';setFilter('all');});
  document.querySelector('#random-character').addEventListener('click',()=>openCharacter(characters[Math.floor(Math.random()*characters.length)].id));
  document.addEventListener('keydown',event=>{if(dialog.open){if(event.key==='ArrowRight'){event.preventDefault();moveCharacter(1);}if(event.key==='ArrowLeft'){event.preventDefault();moveCharacter(-1);}return;}if(event.key==='/'&&!document.querySelector('dialog[open]')&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){event.preventDefault();search.focus();}});
  document.querySelector('#source-links').innerHTML=characters.map(c=>`<a href="${sourceUrl(c)}" target="_blank" rel="noopener noreferrer">${escape(c.name)} · 角色资料 ↗</a>`).join('');
  render();
  const initialCharacter=new URLSearchParams(location.search).get('character');
  if(allIds.includes(initialCharacter))requestAnimationFrame(()=>{if(location.hash==='#characters')document.querySelector('#characters').scrollIntoView({behavior:'instant'});openCharacter(initialCharacter,{scope:allIds,historyMode:'none'});});
  else if(initialCharacter){updateCharacterUrl(null);toast('这位人物尚未收录，已返回全册');}
})();
