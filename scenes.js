(() => {
  'use strict';
  const scenes=window.GENSOKYO_SCENES;
  const viewer=document.querySelector('#scene-viewer');
  const name=id=>window.CHARACTERS.find(c=>c.id===id)?.name||id;
  const placeName=id=>window.GENSOKYO_ATLAS.places.find(p=>p.id===id)?.name||id;
  const mapLink=(s,expanded=false)=>s.place? `<button class="${expanded?'scene-visit':'scene-map-link'}" data-visit-place="${s.place}">${s.id==='palanship'?'去后来建立的命莲寺':s.id==='cemetery-moon'?'回看命莲寺周边线索':(expanded?'在地图中查看':'地图 · ')+placeName(s.place)} →</button>`:'<span class="scene-map-note">独立图页 · 暂未收入地图册</span>';
  const number=i=>String(i+1).padStart(2,'0');
  const people=ids=>ids.map(id=>`<button data-open="${id}">${name(id)} ↗</button>`).join('');
  let current=0,lastOpener=null;
  document.querySelector('#scene-grid').innerHTML=scenes.map((s,i)=>`<article class="scene-card" data-scene-id="${s.id}"><button class="scene-image-button" data-scene-open="${s.id}" aria-label="展开${s.title}场景大图"><img src="assets/${s.image}.webp" alt="${s.alt}" width="1536" height="1024" loading="lazy"><span class="scene-image-label">展开图页 ↗</span></button><div class="scene-card-caption"><div class="scene-card-heading"><span class="scene-number">景 / ${number(i)}</span><span>${s.tag}</span></div><button class="scene-title-button" data-scene-open="${s.id}"><h3>${s.title}</h3></button><p>${s.lead}</p><div class="scene-card-bottom"><div class="scene-people">${people(s.people)}</div>${mapLink(s)}</div></div></article>`).join('');
  const newestBatch=Math.max(...scenes.map(s=>Number(s.batch)||0));
  const newSceneIds=new Set(scenes.filter(s=>Number(s.batch)===newestBatch).map(s=>s.id));
  function filterScenes(value){
    let count=0;
    document.querySelectorAll('.scene-card').forEach(card=>{card.hidden=value==='new'&&!newSceneIds.has(card.dataset.sceneId);if(!card.hidden)count++;});
    document.querySelectorAll('[data-scene-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.sceneFilter===value)));
    document.querySelector('#scene-result-count').textContent='共 '+count+' 幅场景';
  }
  document.querySelectorAll('[data-scene-filter]').forEach(button=>button.addEventListener('click',()=>filterScenes(button.dataset.sceneFilter)));
  filterScenes('all');
  function updateUrl(id){
    const url=new URL(location.href);
    if(id){url.searchParams.set('scene',id);url.searchParams.delete('character');url.hash='scenes';}
    else url.searchParams.delete('scene');
    history.replaceState(id?{...history.state,gensokyoCharacter:false}:history.state,'',url);
  }
  function render(){
    const s=scenes[current];
    document.querySelector('#scene-share-status').textContent='';
    document.querySelector('#scene-viewer-title').textContent=s.title;
    const img=document.querySelector('#scene-viewer-image');img.src=`assets/${s.image}.png`;img.alt=s.alt;
    document.querySelector('#scene-viewer-copy').innerHTML=`<div class="eyebrow">SCENE ${number(current)} / ${s.tag}</div><p class="scene-viewer-en">${s.en}</p><h3>${s.lead}</h3><p>${s.text}</p><span class="scene-people-label">沿着人物继续读</span><div class="scene-people">${people(s.people)}</div>${mapLink(s,true)}<details class="scene-sources"><summary>原作线索与绘制说明</summary><p>${s.basis}</p>${s.sources.map(([title,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a>`).join('')}</details>`;
    document.querySelector('#scene-viewer-position').textContent=`${number(current)} / ${String(scenes.length).padStart(2,'0')}`;
    const download=document.querySelector('#scene-viewer-download');download.href=`assets/${s.image}.png`;download.download=`幻想乡场景-${s.title}.png`;
    document.querySelector('#scene-share-url').hidden=true;
  }
  function open(id,{sync=true}={}){
    const index=scenes.findIndex(s=>s.id===id);if(index<0)return;
    if(!viewer.open)lastOpener=document.activeElement;
    const character=document.querySelector('#character-dialog');if(character.open)character.close('visit-place');
    current=index;render();if(sync)updateUrl(id);
    if(!viewer.open){viewer.returnValue='';viewer.showModal();}
    document.body.classList.add('scene-view-open');
  }
  function move(step){current=(current+step+scenes.length)%scenes.length;render();updateUrl(scenes[current].id);}
  document.addEventListener('click',event=>{const button=event.target.closest('[data-scene-open]');if(button)open(button.dataset.sceneOpen);});
  // Close before document-level character and atlas handlers receive the click.
  viewer.addEventListener('click',event=>{if(event.target.closest('[data-open],[data-visit-place]')){updateUrl(null);viewer.close('follow-link');}});
  document.querySelector('#scene-viewer-close').addEventListener('click',()=>viewer.close());
  document.querySelector('#scene-viewer-prev').addEventListener('click',()=>move(-1));
  document.querySelector('#scene-viewer-next').addEventListener('click',()=>move(1));
  viewer.addEventListener('keydown',event=>{if(event.target.matches('input'))return;if(event.key==='ArrowLeft'){event.preventDefault();event.stopPropagation();move(-1);}if(event.key==='ArrowRight'){event.preventDefault();event.stopPropagation();move(1);}});
  viewer.addEventListener('close',()=>{document.body.classList.remove('scene-view-open');updateUrl(null);if(viewer.returnValue!=='follow-link'&&!document.querySelector('#character-dialog').open&&lastOpener?.isConnected)lastOpener.focus({preventScroll:true});});
  viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
  document.querySelector('#scene-viewer-share').addEventListener('click',async()=>{
    const url=new URL(location.pathname,location.origin);url.searchParams.set('scene',scenes[current].id);url.hash='scenes';
    const message=document.querySelector('#scene-share-status');
    try{await navigator.clipboard.writeText(url.href);message.textContent='场景链接已复制';}
    catch{const input=document.querySelector('#scene-share-url');input.hidden=false;input.value=url.href;input.focus();input.select();message.textContent='可复制下方场景链接';}
  });
  viewer.addEventListener('close',()=>document.querySelector('#scene-share-status').textContent='');
  const params=new URLSearchParams(location.search),id=params.get('scene');
  if(scenes.some(s=>s.id===id)&&!params.has('character'))requestAnimationFrame(()=>{document.querySelector('#scenes').scrollIntoView({behavior:'instant'});open(id,{sync:false});});
  else if(location.hash==='#scenes'){
    const align=()=>requestAnimationFrame(()=>{if(location.hash==='#scenes'&&!viewer.open)document.querySelector('#scenes').scrollIntoView({behavior:'instant'});});
    align();if(document.readyState!=='complete')addEventListener('load',align,{once:true});
  }
})();
