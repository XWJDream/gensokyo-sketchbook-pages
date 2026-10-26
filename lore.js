(() => {
  'use strict';
  const chapters=window.GENSOKYO_LORE;
  const $=s=>document.querySelector(s);
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const viewer=$('#lore-viewer');
  let active=chapters.findIndex(c=>c.id===new URLSearchParams(location.search).get('lore'));
  if(active<0)active=0;
  let opener=null;
  function fillViewer(){
    const c=chapters[active];
    $('#lore-viewer-title').textContent=c.name+' · 场景插图';
    $('#lore-viewer-image').src=`assets/${c.image}.png`;
    $('#lore-viewer-image').alt=c.alt;
    $('#lore-viewer-caption').textContent=c.caption;
    $('#lore-viewer-download').href=`assets/${c.image}.png`;
    $('#lore-viewer-download').download=`幻想乡世界手帖-${c.name}.png`;
    $('#lore-viewer-position').textContent=`${active+1} / ${chapters.length}`;
  }
  function render({focus=false,updateUrl=false}={}){
    const c=chapters[active];
    $('#lore-tabs').innerHTML=chapters.map((item,i)=>`<button id="lore-tab-${item.id}" class="lore-tab" role="tab" aria-controls="lore-panel" aria-selected="${i===active}" tabindex="${i===active?0:-1}" data-lore="${item.id}" style="--chapter-color:${item.color}"><span aria-hidden="true">${item.mark}</span><span>${item.name}<small>${item.en}</small></span></button>`).join('');
    const panel=$('#lore-panel');
    panel.setAttribute('aria-labelledby',`lore-tab-${c.id}`);
    panel.style.setProperty('--chapter-color',c.color);
    const people=c.people.map(id=>{const person=window.CHARACTERS.find(p=>p.id===id);return `<button data-open="${id}">${escape(person.name)} ↗</button>`;}).join('');
    const places=c.places.map(id=>{const place=window.GENSOKYO_ATLAS.places.find(p=>p.id===id);return `<button data-visit-place="${id}">${escape(place.name)} →</button>`;}).join('');
    panel.innerHTML=`<div class="lore-spread"><figure class="lore-figure"><button id="lore-art-open" class="lore-art-open" aria-label="放大查看${escape(c.name)}插图"><img src="assets/${c.image}.webp" alt="${escape(c.alt)}" width="1536" height="1024" loading="lazy"><span>展开画页 ↗</span></button><figcaption>${escape(c.caption)}</figcaption><div class="lore-under-image"><span>本章相识的人</span><div>${people}</div>${places?`<span>沿着地点继续读</span><div>${places}</div>`:''}</div></figure><div class="lore-essay"><div class="lore-page-label">世界手帖 / ${String(active+1).padStart(2,'0')} — ${String(chapters.length).padStart(2,'0')}</div><h3 id="lore-chapter-title">${escape(c.title)}</h3><p class="lore-lead">${escape(c.lead)}</p>${c.paragraphs.map(p=>`<p>${escape(p)}</p>`).join('')}<dl class="lore-facts">${c.facts.map(([term,meaning])=>`<div><dt>${escape(term)}</dt><dd>${escape(meaning)}</dd></div>`).join('')}</dl><div class="lore-correction"><b>读到这里，分清一件事</b><p>${escape(c.correction)}</p></div></div></div><details class="lore-footnotes"><summary>原作线索与叙述视角 <span aria-hidden="true">＋</span></summary><div><p>${escape(c.perspective)}</p><ul>${c.sources.map(([label,url])=>`<li><a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a></li>`).join('')}</ul><p class="lore-reference-note">正文为中文概述。Wiki 链接用于查看原作摘录、翻译与作品索引；解释和画面中的想象均有单独说明。</p></div></details><div class="lore-turning"><button data-lore-step="-1">← 上一章</button><span>也可以接着读 ${c.related.map(id=>{const next=chapters.find(c=>c.id===id);return `<button data-lore="${id}">${next.name} ↗</button>`;}).join('')}</span><button data-lore-step="1">下一章 →</button></div><div class="lore-share"><button id="lore-share">复制本章链接 ↗</button><span id="lore-share-status" role="status"></span><input id="lore-share-url" aria-label="本章分享链接" readonly hidden></div>`;
    if(focus)$(`#lore-tab-${c.id}`).focus({preventScroll:true});
    if(updateUrl){const url=new URL(location.href);url.searchParams.set('lore',c.id);history.replaceState(null,'',url);}
    if(viewer.open)fillViewer();
  }
  function select(id,options={}){const i=chapters.findIndex(c=>c.id===id);if(i<0)return;active=i;render({updateUrl:true,...options});}
  document.querySelector('#worldview').addEventListener('click',async event=>{
    const tab=event.target.closest('[data-lore]');if(tab){select(tab.dataset.lore);return;}
    const step=event.target.closest('[data-lore-step]');if(step){select(chapters[(active+Number(step.dataset.loreStep)+chapters.length)%chapters.length].id);return;}
    if(event.target.closest('#lore-art-open')){opener=$('#lore-art-open');fillViewer();viewer.showModal();document.body.classList.add('lore-view-open');return;}
    if(event.target.closest('#lore-share')){
      const url=new URL(location.href);url.searchParams.set('lore',chapters[active].id);url.hash='worldview';
      try{await navigator.clipboard.writeText(url.href);$('#lore-share-status').textContent='本章链接已复制';}
      catch{const input=$('#lore-share-url');input.hidden=false;input.value=url.href;input.focus();input.select();$('#lore-share-status').textContent='可选中下方链接复制';}
    }
  });
  $('#lore-tabs').addEventListener('keydown',event=>{
    let index=active;
    if(['ArrowDown','ArrowRight'].includes(event.key))index=(active+1)%chapters.length;
    else if(['ArrowUp','ArrowLeft'].includes(event.key))index=(active-1+chapters.length)%chapters.length;
    else if(event.key==='Home')index=0;else if(event.key==='End')index=chapters.length-1;else return;
    event.preventDefault();select(chapters[index].id,{focus:true});
  });
  $('#lore-viewer-close').addEventListener('click',()=>viewer.close());
  viewer.addEventListener('close',()=>{document.body.classList.remove('lore-view-open');if(opener?.isConnected)opener.focus({preventScroll:true});else $('#lore-art-open').focus({preventScroll:true});});
  viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
  function turnImage(direction){active=(active+direction+chapters.length)%chapters.length;render({updateUrl:true});}
  $('#lore-viewer-prev').addEventListener('click',()=>turnImage(-1));
  $('#lore-viewer-next').addEventListener('click',()=>turnImage(1));
  viewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();turnImage(-1);}else if(event.key==='ArrowRight'){event.preventDefault();turnImage(1);}});
  render();
  if(location.hash==='#worldview')requestAnimationFrame(()=>$('#worldview').scrollIntoView({behavior:'instant'}));
})();
