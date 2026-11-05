(() => {
  'use strict';
  const world=window.GENSOKYO;
  const characters=window.CHARACTERS;
  const char=id=>characters.find(c=>c.id===id);
  const num=index=>String(index+1).padStart(2,'0');
  const nameButtons=ids=>ids.map(id=>`<button data-open="${id}">${char(id).name} ↗</button>`).join('');
  document.querySelector('#bond-grid').innerHTML=world.bonds.map((b,i)=>`<article class="bond-card ${b.color}"><span class="bond-index">RELATION / ${num(i)}</span><div class="bond-portraits"><span class="bond-symbol" aria-hidden="true">${b.symbol}</span>${b.ids.map(id=>`<button class="bond-portrait" data-open="${id}" aria-label="相识录：查看${char(id).name}"><img src="assets/${char(id).artwork||id}.webp" alt="${char(id).name}手绘插图" loading="lazy" width="170" height="180"><span>${char(id).name}</span></button>`).join('')}</div><div class="bond-label">${b.label}</div><h3>${b.title}</h3><p class="bond-relation">${b.relation}</p><p class="bond-description">${b.description}</p><div class="bond-name-links">${nameButtons(b.ids)}</div></article>`).join('');
  document.querySelector('#book-grid').innerHTML=world.books.map((b,i)=>`<article class="book-card"><div class="book-cover ${b.theme}" aria-label="${b.name}故事意象设计，非官方封面"><div class="book-code"><span>${b.code||`TH ${b.number}`}</span><span>${b.year}</span></div><div class="book-mark" aria-hidden="true">${b.mark}</div><span class="book-doodle" aria-hidden="true">${['☽','❀','◯','風','焔'][i]||'✧'}</span><span class="book-jp">${b.jp}</span></div><div class="book-body"><div class="book-mood">${b.mood}</div><h3>${b.name}</h3><p class="book-english">${b.en}</p><p class="book-description">${b.description}</p><div class="book-cast">${nameButtons(b.ids)}</div><p class="book-caption">${b.caption}</p><div class="book-links"><a href="${b.url}" target="_blank" rel="noopener noreferrer">原作介绍 ↗</a><a href="${b.reference}" target="_blank" rel="noopener noreferrer">中文资料 ↗</a></div></div></article>`).join('');
  document.querySelector('#character-routes').innerHTML=characters.map(c=>{const route=world.characterLinks[c.id],book=world.books.find(b=>b.id===route.work);return `<article class="character-route"><button data-open="${c.id}" aria-label="入门线索：查看${c.name}"><img src="assets/${c.artwork||c.id}.webp" alt="${c.name}" loading="lazy" width="76" height="90"></button><div><h3>${c.name}</h3><p>${route.line}</p><a class="route-book" href="${book.reference}" target="_blank" rel="noopener noreferrer">去读《${book.name}》 ↗</a></div></article>`;}).join('');
  const trails=world.trails||[];
  const trailRoot=document.querySelector('#theme-trails');
  const trailDirectoryUrl='?guide=trails#guide';
  const trailUrl=id=>`?trail=${id}#guide`;
  const trailInUrl=()=>trails.find(t=>t.id===new URLSearchParams(location.search).get('trail'));
  let selectedTrail;
  const sceneById=id=>window.GENSOKYO_SCENES.find(s=>s.id===id);
  trailRoot.innerHTML=`<ul class="trail-directory" role="list" aria-label="主题路线目录">${trails.map(t=>`
    <li><a href="${trailUrl(t.id)}" data-trail-select="${t.id}" class="trail-directory-link">
      <img src="assets/${t.image}.webp" alt="" width="144" height="108" loading="lazy">
      <span class="trail-directory-copy"><span class="trail-kicker">路线 ${t.number} / ${t.tag}</span><strong>${t.name}</strong><span class="trail-directory-excerpt">${t.intro}</span></span>
      <span class="trail-directory-arrow" aria-hidden="true">↗</span>
    </a></li>`).join('')}</ul><div class="trail-reader" hidden></div>`;
  const trailDirectory=trailRoot.querySelector('.trail-directory');
  const trailReader=trailRoot.querySelector('.trail-reader');
  function renderTrail(t){
    selectedTrail=t;
    trailDirectory.hidden=Boolean(t);
    trailReader.hidden=!t;
    if(!t){trailReader.replaceChildren();return;}
    const chapter=window.GENSOKYO_LORE.find(c=>c.id===t.lore);
    const book=world.books.find(b=>b.id===t.work);
    trailReader.innerHTML=`
      <a class="trail-directory-back" href="${trailDirectoryUrl}" data-trail-directory>← 返回全部路线</a>
      <article class="theme-trail is-selected" data-trail-card="${t.id}" aria-labelledby="trail-title">
        <img class="trail-picture" src="assets/${t.image}.webp" alt="${t.name}主题路线意象" width="1672" height="941">
        <div class="trail-content">
          <div class="trail-kicker">路线 ${t.number} / ${t.tag}</div>
          <h4 id="trail-title" tabindex="-1">${t.name}</h4>
          <p class="trail-intro">${t.intro}</p>
          <ol class="trail-steps">${t.steps.map(([id,line])=>`<li><button data-open="${id}">${char(id).name} ↗</button><span>${line}</span></li>`).join('')}</ol>
          <div class="trail-scenes">
            <b>在画页中停一会儿</b>
            ${t.scenes.map(id=>`<button data-scene-open="${id}">${sceneById(id).title} ↗</button>`).join('')}
          </div>
          <div class="trail-links">
            <a href="?lore=${t.lore}#worldview">手帖 · ${chapter.name} ↗</a>
            <a href="${book.reference}" target="_blank" rel="noopener noreferrer">原作 · ${book.name} ↗</a>
            <a href="${trailUrl(t.id)}" aria-current="page">路线直达链接 ↗</a>
          </div>
          ${t.listening?.length?`<details class="trail-listening">
            <summary>沿着曲目继续读 <span aria-hidden="true">＋</span></summary>
            <p>查看原作音乐室资料；个人曲对应不同战斗分支。</p>
            <ol>${t.listening.map(([title,note,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${title} ↗</a><span>${note}</span></li>`).join('')}</ol>
          </details>`:''}
          <p class="trail-note">${t.note}</p>
        </div>
      </article>`;
  }
  function alignTrail(){
    if(selectedTrail&&!document.querySelector('dialog[open]'))trailReader.scrollIntoView({block:'start',behavior:'instant'});
  }
  renderTrail(trailInUrl());
  document.querySelector('#glossary').innerHTML=world.glossary.map((g,i)=>`<details${i===0?' open':''}><summary><span><span class="term-index">${num(i)}</span>${g.term}</span><span class="term-toggle" aria-hidden="true">＋</span></summary><div class="term-body"><p class="term-en">${g.en}</p><p>${g.text}</p><a href="${g.source}" target="_blank" rel="noopener noreferrer">继续阅读资料 ↗</a></div></details>`).join('');
  function showGuide(id,focus=false){
    document.querySelectorAll('[data-guide]').forEach(button=>{const active=button.dataset.guide===id;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;if(active&&focus)button.focus();});
    document.querySelectorAll('.guide-panel').forEach(panel=>panel.hidden=panel.id!==`guide-panel-${id}`);
  }
  document.querySelectorAll('[data-guide]').forEach(button=>{
    button.addEventListener('click',()=>showGuide(button.dataset.guide));
    button.addEventListener('keydown',event=>{const list=[...document.querySelectorAll('[data-guide]')];let index=list.indexOf(button);if(event.key==='ArrowRight')index=(index+1)%list.length;else if(event.key==='ArrowLeft')index=(index-1+list.length)%list.length;else if(event.key==='Home')index=0;else if(event.key==='End')index=list.length-1;else return;event.preventDefault();showGuide(list[index].dataset.guide,true);});
  });
  trailRoot.addEventListener('click',event=>{
    const link=event.target.closest('[data-trail-select],[data-trail-directory]');
    if(!link||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    const lastId=selectedTrail?.id;
    const trail=trails.find(t=>t.id===link.dataset.trailSelect);
    const url=new URL(link.href);
    const edition=new URLSearchParams(location.search).get('edition');
    if(edition)url.searchParams.set('edition',edition);
    history.pushState(null,'',url);
    renderTrail(trail);
    if(trail){
      trailReader.querySelector('#trail-title').focus({preventScroll:true});
      alignTrail();
    }else{
      const lastLink=trailDirectory.querySelector(`[data-trail-select="${lastId}"]`);
      lastLink?.focus({preventScroll:true});
      lastLink?.scrollIntoView({block:'center',behavior:'instant'});
    }
  });
  const guideDirectoryInUrl=()=>new URLSearchParams(location.search).get('guide')==='trails';
  if(selectedTrail||guideDirectoryInUrl())showGuide('trails');
  if(selectedTrail){
    requestAnimationFrame(alignTrail);
    if(document.readyState!=='complete')addEventListener('load',alignTrail,{once:true});
  }
  addEventListener('popstate',()=>{
    const trail=trailInUrl();
    if(trail!==selectedTrail)renderTrail(trail);
    if(trail||guideDirectoryInUrl())showGuide('trails');
  });
  const chapterLinks=[...document.querySelectorAll('.chapter-index a')];
  const sections=chapterLinks.map(a=>document.querySelector(a.getAttribute('href')));
  let scrollPending=false;
  function updateReading(){
    const length=document.documentElement.scrollHeight-innerHeight;
    document.querySelector('.reading-progress').style.width=`${length>0?Math.min(100,Math.max(0,scrollY/length*100)):0}%`;
    let active=sections[0];sections.forEach(section=>{if(section.getBoundingClientRect().top<=140)active=section;});
    chapterLinks.forEach(a=>{const current=a.getAttribute('href')===`#${active.id}`;a.classList.toggle('is-current',current);if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});scrollPending=false;
  }
  addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateReading);}},{passive:true});
  addEventListener('resize',updateReading);
  updateReading();
})();
