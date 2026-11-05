(() => {
  'use strict';
  const scenes=window.GENSOKYO_SCENES;
  const atlas=window.GENSOKYO_ATLAS;
  const charactersById=new Map(window.CHARACTERS.map(character=>[character.id,character]));
  const placesById=new Map(atlas.places.map(place=>[place.id,place]));
  const viewer=document.querySelector('#scene-viewer');
  const grid=document.querySelector('#scene-grid');
  const toolbar=document.querySelector('.scene-toolbar');
  const prev=document.querySelector('#scene-viewer-prev');
  const next=document.querySelector('#scene-viewer-next');
  const name=id=>charactersById.get(id)?.name||id;
  const placeName=id=>placesById.get(id)?.name||id;
  const mapLink=(s,expanded=false)=>s.place? `<button class="${expanded?'scene-visit':'scene-map-link'}" data-visit-place="${s.place}">${s.id==='palanship'?'去后来建立的命莲寺':s.id==='cemetery-moon'?'回看命莲寺周边线索':(expanded?'在地图中查看':'地图 · ')+placeName(s.place)} →</button>`:'<span class="scene-map-note">独立图页 · 暂未收入地图册</span>';
  const number=i=>String(i+1).padStart(2,'0');
  const people=ids=>ids.map(id=>`<button data-open="${id}">${name(id)} ↗</button>`).join('');
  let current=0,lastOpener=null,openerHash='',visibleScenes=scenes,viewerScenes=scenes;
  grid.innerHTML=scenes.map((s,i)=>`<article class="scene-card" data-scene-id="${s.id}"><button class="scene-image-button" data-scene-open="${s.id}" aria-label="展开${s.title}场景大图"><img src="assets/${s.image}.webp" alt="${s.alt}" width="1536" height="1024" loading="lazy"><span class="scene-image-label">展开图页 ↗</span></button><div class="scene-card-caption"><div class="scene-card-heading"><span class="scene-number">景 / ${number(i)}</span><span>${s.tag}</span></div><button class="scene-title-button" data-scene-open="${s.id}"><h3>${s.title}</h3></button><p>${s.lead}</p><div class="scene-card-bottom"><div class="scene-people">${people(s.people)}</div>${mapLink(s)}</div></div></article>`).join('');
  const cards=[...grid.children];
  const filters=[...toolbar.querySelectorAll('[data-scene-filter]')];
  const fields=document.createElement('div');
  fields.className='scene-filter-fields';
  fields.innerHTML='<label class="scene-filter-field"><span aria-hidden="true">⌕</span><input id="scene-search" type="search" aria-label="按人物、地点或场景名搜索" placeholder="搜人物、地点或场景名"></label><label class="scene-filter-field"><span>分册</span><select id="scene-region" aria-label="按地图分册筛选场景"><option value="">全部地区</option></select></label>';
  filters[0].parentElement.after(fields);
  const search=fields.querySelector('#scene-search');
  const region=fields.querySelector('#scene-region');
  for(const item of [...atlas.regions,{id:'independent',name:'地图之外'}]){
    const option=document.createElement('option');
    option.value=item.id;
    option.textContent=item.name;
    region.append(option);
  }
  const empty=document.createElement('div');
  empty.className='scene-empty';
  empty.id='scene-empty';
  empty.innerHTML='<p>没有找到匹配的画页。试试另一个名字或分册。</p><button id="scene-clear" type="button">清除筛选</button>';
  grid.after(empty);

  const newestBatch=Math.max(...scenes.map(s=>Number(s.batch)||0));
  const normalize=value=>value.normalize('NFKC').toLowerCase();
  const sceneEntries=scenes.map((scene,index)=>{
    const place=placesById.get(scene.place);
    const names=scene.people.flatMap(id=>{
      const character=charactersById.get(id);
      return [character?.name,character?.fullName,character?.jp,character?.en];
    });
    const searchText=normalize([scene.title,scene.en,scene.tag,scene.alt,place?.name,place?.en,place?.world,...names].filter(Boolean).join(' '));
    return {scene,card:cards[index],region:place?.region??'independent',searchText};
  });
  let activeFilter='all';
  function filterScenes(){
    const terms=normalize(search.value).match(/\S+/g)??[];
    visibleScenes=[];
    for(const entry of sceneEntries){
      const visible=(activeFilter==='all'||Number(entry.scene.batch)===newestBatch)
        &&(!region.value||entry.region===region.value)
        &&terms.every(term=>entry.searchText.includes(term));
      const hidden=!visible;
      if(entry.card.hidden!==hidden)entry.card.hidden=hidden;
      if(visible)visibleScenes.push(entry.scene);
    }
    empty.hidden=visibleScenes.length>0;
    document.querySelector('#scene-result-count').textContent='共 '+visibleScenes.length+' 幅场景';
  }
  function selectFilter(value){
    activeFilter=value;
    filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sceneFilter===value)));
    filterScenes();
  }
  filters.forEach(button=>button.addEventListener('click',()=>selectFilter(button.dataset.sceneFilter)));
  search.addEventListener('input',filterScenes);
  region.addEventListener('change',filterScenes);
  empty.querySelector('#scene-clear').addEventListener('click',()=>{
    search.value='';
    region.value='';
    selectFilter('all');
    search.focus();
  });
  filterScenes();
  function updateUrl(id){
    const url=new URL(location.href);
    if(id){url.searchParams.set('scene',id);url.searchParams.delete('character');url.hash='scenes';}
    else {
      if(!url.searchParams.has('scene'))return;
      url.searchParams.delete('scene');
      if(url.hash==='#scenes')url.hash=openerHash;
    }
    history.replaceState(id?{...history.state,gensokyoCharacter:false}:history.state,'',url);
  }
  function render(){
    const s=viewerScenes[current];
    document.querySelector('#scene-share-status').textContent='';
    document.querySelector('#scene-viewer-title').textContent=s.title;
    const img=document.querySelector('#scene-viewer-image');img.src=`assets/${s.image}.png`;img.alt=s.alt;
    document.querySelector('#scene-viewer-copy').innerHTML=`<div class="eyebrow">SCENE ${number(scenes.indexOf(s))} / ${s.tag}</div><p class="scene-viewer-en">${s.en}</p><h3>${s.lead}</h3><p>${s.text}</p><span class="scene-people-label">沿着人物继续读</span><div class="scene-people">${people(s.people)}</div>${mapLink(s,true)}<details class="scene-sources"><summary>原作线索与绘制说明</summary><p>${s.basis}</p>${s.sources.map(([title,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a>`).join('')}</details>`;
    const positionPrefix=viewerScenes.length<scenes.length?'本组 ':'';
    document.querySelector('#scene-viewer-position').textContent=`${positionPrefix}${number(current)} / ${String(viewerScenes.length).padStart(2,'0')}`;
    prev.disabled=next.disabled=viewerScenes.length<2;
    const download=document.querySelector('#scene-viewer-download');download.href=`assets/${s.image}.png`;download.download=`幻想乡场景-${s.title}.png`;
    document.querySelector('#scene-share-url').hidden=true;
  }
  function open(id,{sync=true,scope=scenes,opener=document.activeElement}={}){
    const index=scope.findIndex(s=>s.id===id);if(index<0)return;
    if(!viewer.open){
      lastOpener=opener;
      openerHash=location.hash;
    }
    const character=document.querySelector('#character-dialog');if(character.open)character.close('visit-place');
    viewerScenes=scope;
    current=index;render();if(sync)updateUrl(id);
    if(!viewer.open){viewer.returnValue='';viewer.showModal();}
    document.body.classList.add('scene-view-open');
  }
  function move(step){
    if(viewerScenes.length<2)return;
    current=(current+step+viewerScenes.length)%viewerScenes.length;
    render();
    viewer.scrollTop=0;
    updateUrl(viewerScenes[current].id);
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-scene-open]');
    if(button)open(button.dataset.sceneOpen,{scope:grid.contains(button)?visibleScenes:scenes,opener:button});
  });
  // Close before document-level character and atlas handlers receive the click.
  viewer.addEventListener('click',event=>{if(event.target.closest('[data-open],[data-visit-place]')){updateUrl(null);viewer.close('follow-link');}});
  document.querySelector('#scene-viewer-close').addEventListener('click',()=>viewer.close());
  prev.addEventListener('click',()=>move(-1));
  next.addEventListener('click',()=>move(1));
  viewer.addEventListener('keydown',event=>{if(event.target.matches('input'))return;if(event.key==='ArrowLeft'){event.preventDefault();event.stopPropagation();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();event.stopPropagation();move(1);}});
  viewer.addEventListener('close',()=>{
    if(viewer.open)return;
    document.body.classList.remove('scene-view-open');
    document.querySelector('#scene-share-status').textContent='';
    if(viewer.returnValue==='follow-link')return;
    updateUrl(null);
    if(!document.querySelector('#character-dialog').open&&lastOpener?.isConnected)lastOpener.focus({preventScroll:true});
  });
  viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
  document.querySelector('#scene-viewer-share').addEventListener('click',async()=>{
    const url=new URL(location.pathname,location.origin);url.searchParams.set('scene',viewerScenes[current].id);url.hash='scenes';
    const message=document.querySelector('#scene-share-status');
    try{await navigator.clipboard.writeText(url.href);message.textContent='场景链接已复制';}
    catch{const input=document.querySelector('#scene-share-url');input.hidden=false;input.value=url.href;input.focus();input.select();message.textContent='可复制下方场景链接';}
  });
  const params=new URLSearchParams(location.search),id=params.get('scene');
  if(scenes.some(s=>s.id===id)&&!params.has('character'))requestAnimationFrame(()=>{document.querySelector('#scenes').scrollIntoView({behavior:'instant'});open(id,{sync:false});});
  else if(location.hash==='#scenes'){
    const align=()=>requestAnimationFrame(()=>{if(location.hash==='#scenes'&&!viewer.open)document.querySelector('#scenes').scrollIntoView({behavior:'instant'});});
    align();if(document.readyState!=='complete')addEventListener('load',align,{once:true});
  }
})();
