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
  const compact=matchMedia('(max-width: 760px)');
  function shelf({id,selector,size,compactSize=size,unit,key,title,expandAll=true}){
    const grid=document.getElementById(id);
    const batchSize=()=>compact.matches?compactSize:size;
    let batch=batchSize(),limit=batch,lastKey=key();
    const bar=document.createElement('div');bar.className='reading-shelf';
    bar.setAttribute('role','group');bar.setAttribute('aria-label',title+'展开控制');
    const status=document.createElement('p');status.setAttribute('role','status');
    const actions=document.createElement('div');
    const more=document.createElement('button'),all=document.createElement('button'),less=document.createElement('button');
    all.textContent='全部展开';less.textContent='收起这册 ↑';
    all.setAttribute('aria-label','全部展开'+title);less.setAttribute('aria-label','收起'+title);
    for(const button of [more,all,less]){button.type='button';button.setAttribute('aria-controls',id);actions.append(button);}
    bar.append(status,actions);grid.after(bar);
    const eligible=()=>[...grid.querySelectorAll(selector)].filter(el=>!el.hidden);
    function update(){
      const nextKey=key(),nextBatch=batchSize();
      if(nextKey!==lastKey||limit===batch){limit=nextBatch;lastKey=nextKey;}
      else limit=Math.max(limit,nextBatch);
      batch=nextBatch;
      const items=eligible();
      grid.querySelectorAll(selector+'[hidden]').forEach(el=>el.classList.remove('is-shelved'));
      items.forEach((el,index)=>el.classList.toggle('is-shelved',index>=limit));
      const shown=Math.min(limit,items.length);
      status.textContent=`已展开 ${shown} / ${items.length} ${unit}`;
      bar.hidden=items.length<=batch;
      more.hidden=shown>=items.length;
      all.hidden=!expandAll||more.hidden;
      less.hidden=limit<=batch;
      more.textContent=`继续展开 ${Math.min(batch,items.length-shown)} ${unit} ↓`;
      if(id==='character-grid')updateRegion();
    }
    const focusItem=index=>{
      const item=eligible()[index];if(!item)return;
      item.querySelector('button,summary,a')?.focus({preventScroll:true});
      item.scrollIntoView({block:'start',behavior:'instant'});
    };
    more.addEventListener('click',()=>{const start=limit;limit+=batch;update();focusItem(start);});
    all.addEventListener('click',()=>{const start=limit;limit=eligible().length;update();focusItem(start);});
    less.addEventListener('click',()=>{limit=batch;update();focusItem(0);});
    grid.addEventListener('reading-shelf-reveal',event=>{
      const index=eligible().indexOf(event.detail.closest(selector));
      if(index>=limit){limit=Math.ceil((index+1)/batch)*batch;update();}
    });
    grid.addEventListener('reading-shelf-filter',update);
    compact.addEventListener?.('change',update);
    new MutationObserver(update).observe(grid,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden']});
    update();
  }
  shelf({id:'character-grid',selector:'.character-card',title:'角色图鉴',size:16,compactSize:8,unit:'张图卡',key:()=>[document.querySelector('.filter.active')?.dataset.filter,document.querySelector('#search').value,document.querySelector('#catalog-sort').value].join('|')});
  shelf({id:'scene-grid',selector:'.scene-card',title:'场景手札',size:6,compactSize:4,unit:'幅风景',key:()=>[document.querySelector('[data-scene-filter][aria-pressed="true"]')?.dataset.sceneFilter,document.querySelector('#scene-search')?.value,document.querySelector('#scene-region')?.value].join('|')});
  shelf({id:'bond-grid',selector:'.bond-card',title:'相识录',size:6,compactSize:3,unit:'组相识',key:()=>''});
  shelf({id:'book-grid',selector:'.book-card',title:'作品入口',size:6,compactSize:3,unit:'个作品',key:()=>''});
  shelf({id:'character-routes',selector:'.character-route',title:'人物线索',size:8,compactSize:4,unit:'条人物线索',key:()=>''});
  shelf({id:'trail-directory-list',selector:'li',title:'主题路线',size:6,compactSize:4,unit:'条路线',key:()=>document.querySelector('#trail-search').value,expandAll:false});
  shelf({id:'glossary',selector:'details',title:'页边小词典',size:8,compactSize:6,unit:'个词条',key:()=>document.querySelector('#glossary-search').value,expandAll:false});
})();
