(() => {
  'use strict';
  document.addEventListener('error',event=>{
    const image=event.target;
    if(image instanceof HTMLImageElement&&/^assets\/[a-z0-9-]+\.png$/.test(image.getAttribute('src')||'')){
      image.src=image.getAttribute('src').replace(/\.png$/,'.webp');
    }
  },true);
  const regionDetails=document.querySelector('#catalog-regions');
  const regionLabel=document.querySelector('#catalog-region-label');
  const updateRegion=()=>{
    const active=regionDetails.querySelector('.filter.active');
    regionLabel.textContent=active?active.childNodes[0].textContent.trim():'按地区与主题';
    regionDetails.classList.toggle('has-selection',Boolean(active));
  };
  document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
    updateRegion();
    regionDetails.open=false;
    if(regionDetails.contains(button)){
      regionDetails.querySelector('summary').focus({preventScroll:true});
    }
  }));
  regionDetails.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&regionDetails.open){regionDetails.open=false;regionDetails.querySelector('summary').focus();}
  });
  document.addEventListener('click',event=>{if(!regionDetails.contains(event.target))regionDetails.open=false;});
  document.querySelector('#search').addEventListener('focus',()=>{regionDetails.open=false;});
  function shelf({id,selector,size,unit,key}){
    const grid=document.getElementById(id);
    let limit=size,lastKey=key();
    const bar=document.createElement('div');bar.className='reading-shelf';
    const title=({'character-grid':'角色图鉴','scene-grid':'场景手札','bond-grid':'相识录','book-grid':'作品入口','character-routes':'人物线索'})[id];
    bar.setAttribute('role','group');bar.setAttribute('aria-label',title+'展开控制');
    const status=document.createElement('p');status.setAttribute('role','status');
    const actions=document.createElement('div');
    const more=document.createElement('button'),all=document.createElement('button'),less=document.createElement('button');
    more.textContent=`继续展开 ${size} ${unit} ↓`;all.textContent='全部展开';less.textContent='收起这册 ↑';
    all.setAttribute('aria-label','全部展开'+title);less.setAttribute('aria-label','收起'+title);
    for(const button of [more,all,less]){button.type='button';button.setAttribute('aria-controls',id);actions.append(button);}
    bar.append(status,actions);grid.after(bar);
    const eligible=()=>[...grid.querySelectorAll(selector)].filter(el=>!el.hidden);
    function update(){
      const nextKey=key();if(nextKey!==lastKey){limit=size;lastKey=nextKey;}
      const items=eligible();
      grid.querySelectorAll(selector).forEach(el=>el.classList.remove('is-shelved'));
      items.forEach((el,index)=>el.classList.toggle('is-shelved',index>=limit));
      const shown=Math.min(limit,items.length);
      status.textContent=`已展开 ${shown} / ${items.length} ${unit}`;
      bar.hidden=items.length<=size;
      more.hidden=all.hidden=shown>=items.length;
      less.hidden=limit<=size;
      more.textContent=`继续展开 ${Math.min(size,Math.max(0,items.length-shown))} ${unit} ↓`;
      updateRegion();
    }
    const focusItem=index=>{
      const item=eligible()[index];if(!item)return;
      item.querySelector('button,a')?.focus({preventScroll:true});
      item.scrollIntoView({block:'start',behavior:'instant'});
    };
    more.addEventListener('click',()=>{const start=limit;limit+=size;update();focusItem(start);});
    all.addEventListener('click',()=>{const start=limit;limit=eligible().length;update();focusItem(start);});
    less.addEventListener('click',()=>{limit=size;update();focusItem(0);});
    new MutationObserver(update).observe(grid,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden']});
    update();
  }
  shelf({id:'character-grid',selector:'.character-card',size:16,unit:'位住民',key:()=>[document.querySelector('.filter.active')?.dataset.filter,document.querySelector('#search').value,document.querySelector('#catalog-sort').value].join('|')});
  shelf({id:'scene-grid',selector:'.scene-card',size:6,unit:'幅风景',key:()=>[document.querySelector('[data-scene-filter][aria-pressed="true"]')?.dataset.sceneFilter,document.querySelector('#scene-search')?.value,document.querySelector('#scene-region')?.value].join('|')});
  shelf({id:'bond-grid',selector:'.bond-card',size:6,unit:'组相识',key:()=>''});
  shelf({id:'book-grid',selector:'.book-card',size:6,unit:'个作品',key:()=>''});
  shelf({id:'character-routes',selector:'.character-route',size:8,unit:'条人物线索',key:()=>''});
})();
