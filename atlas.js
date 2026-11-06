(() => {
  'use strict';
  const data=window.GENSOKYO_ATLAS;
  const characters=window.CHARACTERS;
  const scenes=window.GENSOKYO_SCENES;
  const chapters=window.GENSOKYO_LORE;
  const trails=window.GENSOKYO.trails;
  // These three locations share a reading theme, even without a matching scene in the route.
  const bookTrailPlaces=new Set(['village','suzunaan','kourindou']);
  const $=selector=>document.querySelector(selector);
  const workspace=$('#atlas-workspace'),viewport=$('#atlas-viewport'),scene=$('#atlas-scene');
  const pins=$('#atlas-pins'),miniImage=$('#atlas-mini-image'),miniWindow=$('#atlas-mini-window');
  const zoomIn=$('#atlas-zoom-in'),zoomOut=$('#atlas-zoom-out'),zoomValue=$('#atlas-zoom-value');
  const originalLink=$('#atlas-original');
  let image=$('#atlas-image'),detailImage=null,pinPositions=[];
  const regionTabs=$('#atlas-region-tabs'),list=$('#atlas-place-list'),search=$('#atlas-search');
  const regions=new Map(data.regions.map(r=>[r.id,r])),places=new Map(data.places.map(p=>[p.id,p]));
  const scenesByPlace=new Map(data.places.map(p=>[
    p.id,scenes.filter(s=>s.place===p.id).sort((a,b)=>Number(b.batch||0)-Number(a.batch||0))
  ]));
  const peopleByPlace=new Map(data.places.map(p=>[p.id,placePeople(p,scenesByPlace.get(p.id))]));
  const volumes=['壹','贰','叁','肆','伍','陆'];
  const views=new Map(),lastSelections=new Map();
  const state={region:'village',place:'village',zoom:1,x:0,y:0,width:0,height:0,viewportWidth:0,viewportHeight:0,ready:false,labels:!matchMedia('(max-width:760px)').matches,wheel:false};
  let positionAfterLoad=null,drag=null,pinch=null,suppressClickUntil=0;
  const pointers=new Map();
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
  const entries=regionId=>data.places.filter(p=>p.region===regionId);
  const localNumber=p=>String(entries(p.region).findIndex(item=>item.id===p.id)+1).padStart(2,'0');
  const allControls=[zoomIn,zoomOut,$('#atlas-reset')];
  const originalImage=region=>region.image.replace(/\.webp$/,'.png');
  function updateDetail(scaledWidth){
    const enoughPixels=scaledWidth*(window.devicePixelRatio||1)>=image.naturalWidth*.75;
    const showDetail=enoughPixels&&(state.zoom>=1.65||document.fullscreenElement===workspace);
    if(!detailImage&&showDetail){
      const layer=new Image();
      detailImage=layer;
      layer.className='atlas-map-detail';
      layer.alt='';
      layer.draggable=false;
      layer.hidden=true;
      layer.decoding='async';
      layer.addEventListener('load',()=>{if(detailImage===layer)draw();},{once:true});
      layer.src=regions.get(state.region).detailImage;
      scene.append(layer);
    }
    if(detailImage)detailImage.hidden=!(showDetail&&detailImage.naturalWidth);
  }
  function draw(){
    if(!state.ready||!state.width||!state.height)return;
    const width=viewport.clientWidth,height=viewport.clientHeight;
    const scaledW=state.width*state.zoom,scaledH=state.height*state.zoom;
    state.x=scaledW<=width?(width-scaledW)/2:clamp(state.x,width-scaledW-12,12);
    state.y=scaledH<=height?(height-scaledH)/2:clamp(state.y,height-scaledH-12,12);
    const left=Math.round(state.x),top=Math.round(state.y);
    Object.assign(scene.style,{width:`${scaledW}px`,height:`${scaledH}px`,transform:`translate(${left}px,${top}px)`});
    for(const {button,x,y} of pinPositions){
      const pinX=Math.round(left+x*scaledW),pinY=Math.round(top+y*scaledH);
      button.style.left=`${pinX}px`;
      button.style.top=`${pinY}px`;
      button.tabIndex=pinX>=0&&pinX<=width&&pinY>=0&&pinY<=height?0:-1;
    }
    updateDetail(scaledW);
    const zoomLabel=`${Math.round(state.zoom*100)}%`;if(zoomValue.textContent!==zoomLabel)zoomValue.textContent=zoomLabel;
    zoomIn.disabled=state.zoom>=4;
    zoomOut.disabled=state.zoom<=1;
    const minX=clamp(-left/scaledW,0,1),maxX=clamp((width-left)/scaledW,0,1);
    const minY=clamp(-top/scaledH,0,1),maxY=clamp((height-top)/scaledH,0,1);
    Object.assign(miniWindow.style,{left:`${minX*100}%`,top:`${minY*100}%`,width:`${(maxX-minX)*100}%`,height:`${(maxY-minY)*100}%`});
  }
  function viewCenter(){
    return {cx:(state.viewportWidth/2-state.x)/(state.width*state.zoom),cy:(state.viewportHeight/2-state.y)/(state.height*state.zoom)};
  }
  function centerOn(cx,cy){
    state.x=state.viewportWidth/2-cx*state.width*state.zoom;
    state.y=state.viewportHeight/2-cy*state.height*state.zoom;
  }
  function saveView(){if(state.ready)views.set(state.region,{zoom:state.zoom,...viewCenter()});}
  function resize(preserve=true){
    if(!state.ready||!image.naturalWidth||!viewport.clientWidth||!viewport.clientHeight)return;
    const {cx,cy}=preserve&&state.width?viewCenter():{cx:.5,cy:.5};
    state.viewportWidth=viewport.clientWidth;state.viewportHeight=viewport.clientHeight;
    const fit=Math.min(state.viewportWidth/image.naturalWidth,state.viewportHeight/image.naturalHeight);
    state.width=image.naturalWidth*fit;state.height=image.naturalHeight*fit;
    centerOn(cx,cy);draw();
  }
  function zoomTo(value,anchorX=viewport.clientWidth/2,anchorY=viewport.clientHeight/2){
    if(!state.ready)return;
    const next=clamp(value,1,4),ratio=next/state.zoom;
    state.x=anchorX-(anchorX-state.x)*ratio;state.y=anchorY-(anchorY-state.y)*ratio;state.zoom=next;draw();
  }
  function reset(){if(!state.ready)return;state.zoom=1;centerOn(.5,.5);draw();}
  function locate(p){if(!state.ready){positionAfterLoad=p.id;return;}state.zoom=Math.max(2.2,state.zoom);centerOn(p.x/100,p.y/100);draw();}
  function renderTabs(){
    regionTabs.innerHTML=data.regions.map((r,i)=>`<button class="atlas-region-tab" style="--region-color:${r.color}" id="atlas-tab-${r.id}" role="tab" aria-selected="${r.id===state.region}" aria-controls="atlas-workspace" tabindex="${r.id===state.region?0:-1}" data-atlas-region="${r.id}"><span aria-hidden="true">${r.mark}</span><span><small>VOL. ${String(i+1).padStart(2,'0')}</small>${r.name}</span></button>`).join('');
    workspace.setAttribute('role','tabpanel');workspace.setAttribute('aria-labelledby',`atlas-tab-${state.region}`);
    viewport.classList.toggle('labels-hidden',!state.labels);$('#atlas-label-toggle').setAttribute('aria-pressed',String(state.labels));
  }
  function renderDirectory(){
    const query=search.value.trim().toLocaleLowerCase();
    const matched=query?data.places.filter(p=>[p.name,p.en,p.world,p.type,regions.get(p.region).name,...peopleByPlace.get(p.id).map(([name])=>name)].join(' ').toLocaleLowerCase().includes(query)):entries(state.region);
    $('#atlas-place-count').textContent=`${entries(state.region).length} 处`;
    $('#atlas-result-label').textContent=query?`全册搜索 · ${matched.length} 处结果`:`${regions.get(state.region).scope} · 点选即可定位`;
    list.innerHTML=matched.length?matched.map(p=>`<button class="atlas-place-item" data-atlas-location="${p.id}" aria-label="定位${p.name}" aria-pressed="${state.place===p.id}"><i>${localNumber(p)}</i><span>${p.name}<small>${query?regions.get(p.region).name+' / ':''}${p.type}</small></span><b aria-hidden="true">↗</b></button>`).join(''):'<div class="atlas-no-result">没有找到这个地点。<button data-atlas-clear>清除搜索</button></div>';
  }
  function renderPins(){
    const region=regions.get(state.region);
    const locations=entries(state.region);
    pins.innerHTML=locations.map(p=>`<button class="atlas-pin" style="--region-color:${region.color}" data-atlas-pin="${p.id}" aria-label="地图地点：${p.name}" aria-pressed="${state.place===p.id}" aria-controls="atlas-place-detail"><i>${localNumber(p)}</i><span>${p.name}</span></button>`).join('');
    pinPositions=locations.map((p,i)=>({button:pins.children[i],x:p.x/100,y:p.y/100}));
  }
  function placePeople(place,placeScenes){
    const linked=new Set();
    const known=[...new Set(place.people)].map(name=>{
      const baseName=name.replace(/（[^（）]+）$/u,'');
      const character=characters.find(c=>c.fullName===baseName)||characters.find(c=>c.name===baseName);
      if(character)linked.add(character.id);
      return [name,character?.id];
    });
    const scenePeople=placeScenes.flatMap(s=>s.people);
    const extra=[...new Set([...place.residents,...scenePeople])]
      .filter(id=>!linked.has(id))
      .map(id=>characters.find(c=>c.id===id))
      .filter(Boolean)
      .map(c=>[c.fullName||c.name,c.id]);
    return [...extra,...known];
  }
  function renderPeople(place){
    const all=peopleByPlace.get(place.id).map(([name,id])=>id
      ?`<button data-open="${id}">${escape(name)} ↗</button>`
      :`<span>${escape(name)}</span>`);
    return `<div class="atlas-people-tags">${all.slice(0,6).join('')}</div>${
      all.length>6?`<details class="atlas-reading-more"><summary>展开其余 ${all.length-6} 位</summary><div class="atlas-people-tags">${all.slice(6).join('')}</div></details>`:''
    }`;
  }
  function renderSceneLinks(placeScenes){
    const featured=placeScenes.slice(0,2).map(s=>
      `<button class="atlas-reading-scene" data-scene-open="${s.id}"><img src="assets/${s.image}.webp" width="96" height="64" alt="" loading="lazy"><span>${escape(s.title)} ↗</span></button>`
    ).join('');
    const additional=placeScenes.slice(2).map(s=>
      `<button class="atlas-reading-link" data-scene-open="${s.id}">${escape(s.title)} ↗</button>`
    ).join('');
    if(!featured)return '<p class="atlas-reading-note">本地点暂无关联画页。</p>';
    return `${featured}${
      additional?`<details class="atlas-reading-more"><summary>展开其余 ${placeScenes.length-2} 幅</summary>${additional}</details>`:''
    }`;
  }
  function renderReading(place,placeScenes){
    const sceneIds=new Set(placeScenes.map(s=>s.id));
    const relatedTrails=trails.filter(t=>t.scenes.some(id=>sceneIds.has(id))||
      (t.id==='book-visitors'&&bookTrailPlaces.has(place.id)));
    const relatedChapters=chapters.filter(chapter=>chapter.places.includes(place.id));
    const readingLinks=[
      ...relatedTrails.map(t=>`<a class="atlas-reading-link" href="?trail=${t.id}#guide"><small>主题导读</small>${escape(t.name)} ↗</a>`),
      ...relatedChapters.map(c=>`<a class="atlas-reading-link" href="?lore=${c.id}#worldview"><small>世界手帖</small>${escape(c.name)} ↗</a>`)
    ];
    const reading=readingLinks.length?`${readingLinks.slice(0,3).join('')}${
      readingLinks.length>3?`<details class="atlas-reading-more"><summary>展开其余 ${readingLinks.length-3} 篇</summary>${readingLinks.slice(3).join('')}</details>`:''
    }`:'<p class="atlas-reading-note">可从下方的地点资料继续阅读。</p>';
    return `<div class="atlas-place-reading">
      <section><h4>相关人物</h4>${renderPeople(place)}</section>
      <section><h4>关联画页</h4>${renderSceneLinks(placeScenes)}</section>
      <section><h4>延伸阅读</h4>${reading}</section>
    </div>`;
  }
  function renderDetail(){
    const p=places.get(state.place),region=regions.get(p.region);
    const placeScenes=scenesByPlace.get(p.id);
    $('#atlas-place-detail').innerHTML=`<div class="atlas-detail-title"><div class="atlas-detail-kicker">${region.name} / PLACE ${localNumber(p)}</div><h3 id="atlas-place-name">${p.name}</h3><div class="atlas-detail-en">${p.en.toUpperCase()}</div><div class="atlas-location-tags"><span>${p.type}</span><span>${p.world}</span></div><div class="atlas-location-actions"><button data-atlas-locate-current>放大看这里 ⌕</button><button data-atlas-share>复制地点链接 ↗</button></div><input class="atlas-copy-url" aria-label="当前地点的分享链接" readonly hidden></div><div class="atlas-detail-copy"><h4>${p.summary}</h4><p>${p.detail}</p><div class="atlas-known-relation"><b>资料中的关系</b>${p.relation}</div></div>
      ${renderReading(p,placeScenes)}
      <div class="atlas-place-footer">
        <div class="atlas-place-sources"><a class="atlas-source-link" href="${p.source}" target="_blank" rel="noopener noreferrer">查看${p.name}的资料出处 ↗</a><p>${p.work} · ${p.basis}</p></div>
        <div class="atlas-place-actions"><button class="atlas-gallery-link" data-gallery-place="${p.id}">浏览地点投稿 ↗</button><button class="atlas-gallery-link" data-gallery-submit data-gallery-place="${p.id}">投稿这处风景 ＋</button><a class="atlas-source-link" href="${originalImage(region)}" download="幻想乡地图册-${region.name}.png">保存本册原图 ↓</a></div>
      </div>`;
  }
  function activateRegion(id,{placeId,focus=false,locatePlace=false,clearSearch=true}={}){
    const region=regions.get(id);if(!region)return;
    if(state.region===id&&state.ready){selectPlace(placeId||lastSelections.get(id)||region.defaultPlace,{locatePlace,focus});if(clearSearch){search.value='';renderDirectory();}return;}
    saveView();state.ready=false;state.region=id;state.place=placeId||lastSelections.get(id)||region.defaultPlace;
    lastSelections.set(id,state.place);positionAfterLoad=locatePlace?state.place:null;
    if(clearSearch)search.value='';
    pointers.clear();drag=null;pinch=null;viewport.classList.remove('is-dragging');
    $('#atlas-volume').textContent=`卷${volumes[data.regions.indexOf(region)]}`;$('#atlas-region-title').textContent=region.name;
    $('#atlas-region-note').textContent=region.note;$('#atlas-scope').textContent=region.scope;
    $('#atlas-loading').hidden=false;$('#atlas-image-error').hidden=true;
    pins.hidden=true;
    originalLink.href=originalImage(region);
    allControls.forEach(button=>button.disabled=true);
    renderTabs();renderPins();renderDirectory();renderDetail();
    detailImage?.remove();detailImage=null;
    const overview=new Image();
    overview.id='atlas-image';
    overview.alt=`${region.name}独立精绘图页，具体方位与建筑细部为意象设计`;
    overview.draggable=false;
    image.replaceWith(overview);image=overview;
    function loaded(){
      if(image!==overview||!overview.naturalWidth||state.ready)return;
      state.ready=true;state.zoom=1;resize(false);
      const saved=views.get(id);if(saved){state.zoom=saved.zoom;centerOn(saved.cx,saved.cy);}
      $('#atlas-loading').hidden=true;pins.hidden=false;allControls.forEach(button=>button.disabled=false);
      if(positionAfterLoad){const p=places.get(positionAfterLoad);positionAfterLoad=null;locate(p);}else draw();
      if(focus)viewport.focus({preventScroll:true});
    }
    const original=originalImage(region);
    overview.addEventListener('load',loaded);
    overview.addEventListener('error',()=>{
      if(image!==overview)return;
      if(overview.getAttribute('src')!==original){overview.src=original;miniImage.src=original;return;}
      $('#atlas-loading').hidden=true;$('#atlas-image-error').hidden=false;
    });
    overview.src=region.image;miniImage.src=region.image;
    if(overview.complete&&overview.naturalWidth)loaded();
  }
  function selectPlace(id,{locatePlace=false,focus=false}={}){
    const p=places.get(id);if(!p)return;
    if(p.region!==state.region){activateRegion(p.region,{placeId:id,locatePlace,focus,clearSearch:false});return;}
    state.place=id;lastSelections.set(p.region,id);
    for(const {button} of pinPositions)button.setAttribute('aria-pressed',String(button.dataset.atlasPin===id));
    renderDirectory();renderDetail();
    if(locatePlace)locate(p);if(focus)viewport.focus({preventScroll:true});
  }
  regionTabs.addEventListener('click',event=>{const button=event.target.closest('[data-atlas-region]');if(button)activateRegion(button.dataset.atlasRegion);});
  regionTabs.addEventListener('keydown',event=>{
    const button=event.target.closest('[data-atlas-region]');if(!button)return;
    let index=data.regions.findIndex(r=>r.id===button.dataset.atlasRegion);
    if(event.key==='ArrowRight')index=(index+1)%data.regions.length;else if(event.key==='ArrowLeft')index=(index-1+data.regions.length)%data.regions.length;else if(event.key==='Home')index=0;else if(event.key==='End')index=data.regions.length-1;else return;
    event.preventDefault();activateRegion(data.regions[index].id);$(`#atlas-tab-${data.regions[index].id}`).focus();
  });
  search.addEventListener('input',renderDirectory);
  list.addEventListener('click',event=>{const button=event.target.closest('[data-atlas-location]');if(button)selectPlace(button.dataset.atlasLocation,{locatePlace:true});if(event.target.closest('[data-atlas-clear]')){search.value='';renderDirectory();search.focus();}});
  pins.addEventListener('click',event=>{const button=event.target.closest('[data-atlas-pin]');if(button)selectPlace(button.dataset.atlasPin);});
  zoomIn.addEventListener('click',()=>zoomTo(state.zoom*1.3));
  zoomOut.addEventListener('click',()=>zoomTo(state.zoom/1.3));
  $('#atlas-reset').addEventListener('click',reset);
  $('#atlas-label-toggle').addEventListener('click',event=>{state.labels=!state.labels;event.currentTarget.setAttribute('aria-pressed',String(state.labels));viewport.classList.toggle('labels-hidden',!state.labels);});
  $('#atlas-wheel-toggle').addEventListener('click',event=>{state.wheel=!state.wheel;event.currentTarget.setAttribute('aria-pressed',String(state.wheel));});
  $('#atlas-retry').addEventListener('click',()=>activateRegion(state.region,{placeId:state.place,clearSearch:false}));
  $('#atlas-fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await workspace.requestFullscreen();}catch{$('#atlas-fullscreen').textContent='浏览器未允许全屏';}});
  document.addEventListener('fullscreenchange',()=>{$('#atlas-fullscreen').textContent=document.fullscreenElement?'退出全屏 ↙':'全屏 ↗';$('#atlas-fullscreen').setAttribute('aria-label',document.fullscreenElement?'退出地图全屏':'全屏查看地图');requestAnimationFrame(()=>resize());});
  function pointerPoint(event){const rect=viewport.getBoundingClientRect();return {x:event.clientX-rect.left,y:event.clientY-rect.top};}
  function beginPinch(){const a=[...pointers.values()];const cx=(a[0].x+a[1].x)/2,cy=(a[0].y+a[1].y)/2;pinch={distance:Math.max(1,Math.hypot(a[1].x-a[0].x,a[1].y-a[0].y)),zoom:state.zoom,worldX:(cx-state.x)/state.zoom,worldY:(cy-state.y)/state.zoom};drag=null;}
  viewport.addEventListener('pointerdown',event=>{
    if(!state.ready||event.button!==0||event.target.closest('button'))return;
    viewport.focus({preventScroll:true});const point=pointerPoint(event);pointers.set(event.pointerId,point);viewport.setPointerCapture(event.pointerId);viewport.classList.add('is-dragging');
    if(pointers.size===2)beginPinch();else drag={id:event.pointerId,x:point.x,y:point.y,startX:point.x,startY:point.y,moved:false};
  });
  viewport.addEventListener('pointermove',event=>{
    if(!pointers.has(event.pointerId))return;const point=pointerPoint(event);pointers.set(event.pointerId,point);
    if(pointers.size>=2&&pinch){const a=[...pointers.values()];const cx=(a[0].x+a[1].x)/2,cy=(a[0].y+a[1].y)/2;state.zoom=clamp(pinch.zoom*Math.hypot(a[1].x-a[0].x,a[1].y-a[0].y)/pinch.distance,1,4);state.x=cx-pinch.worldX*state.zoom;state.y=cy-pinch.worldY*state.zoom;suppressClickUntil=performance.now()+200;draw();}
    else if(drag&&drag.id===event.pointerId){state.x+=point.x-drag.x;state.y+=point.y-drag.y;drag.x=point.x;drag.y=point.y;if(Math.hypot(point.x-drag.startX,point.y-drag.startY)>5)drag.moved=true;draw();}
  });
  function endPointer(event){
    if(!pointers.has(event.pointerId))return;if(drag?.moved||pinch)suppressClickUntil=performance.now()+200;pointers.delete(event.pointerId);pinch=null;
    if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId);
    if(pointers.size===1){const [id,point]=[...pointers.entries()][0];drag={id,x:point.x,y:point.y,startX:point.x,startY:point.y,moved:false};}else{drag=null;viewport.classList.remove('is-dragging');}
  }
  viewport.addEventListener('pointerup',endPointer);viewport.addEventListener('pointercancel',endPointer);
  viewport.addEventListener('click',event=>{if(performance.now()<suppressClickUntil){event.preventDefault();event.stopImmediatePropagation();}},true);
  viewport.addEventListener('dblclick',event=>{if(event.target.closest('button'))return;event.preventDefault();const point=pointerPoint(event);zoomTo(state.zoom*1.5,point.x,point.y);});
  viewport.addEventListener('wheel',event=>{if(!state.ready||!(state.wheel||event.ctrlKey||event.metaKey))return;event.preventDefault();const point=pointerPoint(event);zoomTo(state.zoom*Math.exp(-event.deltaY*.0018),point.x,point.y);},{passive:false});
  viewport.addEventListener('keydown',event=>{
    if(event.target!==viewport)return;const amount=event.shiftKey?120:45;
    if(event.key==='+'||event.key==='=')zoomTo(state.zoom*1.25);else if(event.key==='-')zoomTo(state.zoom/1.25);else if(event.key==='0')reset();else if(event.key==='ArrowLeft'){state.x+=amount;draw();}else if(event.key==='ArrowRight'){state.x-=amount;draw();}else if(event.key==='ArrowUp'){state.y+=amount;draw();}else if(event.key==='ArrowDown'){state.y-=amount;draw();}else return;event.preventDefault();
  });
  $('#atlas-minimap').addEventListener('click',event=>{
    if(!state.ready)return;const rect=miniImage.getBoundingClientRect();const point=event.detail===0?{x:.5,y:.5}:{x:clamp((event.clientX-rect.left)/rect.width,0,1),y:clamp((event.clientY-rect.top)/rect.height,0,1)};
    centerOn(point.x,point.y);draw();
  });
  document.addEventListener('click',async event=>{
    if(event.target.closest('[data-atlas-locate-current]')){locate(places.get(state.place));viewport.focus({preventScroll:true});}
    if(event.target.closest('[data-atlas-share]')){
      const url=new URL(location.href);url.searchParams.set('atlas',state.region);url.searchParams.set('place',state.place);url.hash='journey';
      const button=event.target.closest('[data-atlas-share]');
      try{await navigator.clipboard.writeText(url.href);button.textContent='地点链接已复制 ✓';}catch{const input=$('.atlas-copy-url');input.hidden=false;input.value=url.href;input.select();button.textContent='请复制下方链接';}
    }
    const visit=event.target.closest('[data-visit-place]');if(visit){const dialog=$('#character-dialog');if(dialog.open)dialog.close('visit-place');selectPlace(visit.dataset.visitPlace,{locatePlace:true});requestAnimationFrame(()=>$('#journey').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'}));}
  });
  new ResizeObserver(()=>{if(state.ready)resize();}).observe(viewport);
  const params=new URLSearchParams(location.search),initialPlace=places.get(params.get('place'));
  const initialRegion=initialPlace?.region||(regions.has(params.get('atlas'))?params.get('atlas'):'village');
  activateRegion(initialRegion,{placeId:initialPlace?.id,locatePlace:!!initialPlace});
  // Dynamic character and atlas content changes the initial anchor position.
  if(location.hash==='#journey')requestAnimationFrame(()=>$('#journey').scrollIntoView({behavior:'instant'}));
})();
