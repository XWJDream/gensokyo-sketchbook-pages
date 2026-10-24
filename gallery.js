(() => {
 'use strict';
 const $ = s => document.querySelector(s);
 const base = 'https://gensokyo-sketchbook.silverjoy8.chatgpt.site/';
 const dialog = $('#gallery-submit-dialog');
 let opener = null;
 const urlFor = ({character, place, kind, submit = false, art} = {}) => {
   const url = new URL(base);
   url.hash = 'gallery';
   if (submit) url.searchParams.set('gallery', 'submit');
   if (character) url.searchParams.set('galleryCharacter', character);
   if (place) url.searchParams.set('galleryPlace', place);
   if (kind) url.searchParams.set('galleryKind', kind);
   if (art) url.searchParams.set('art', art);
   return url.href;
 };
 for (const selector of ['.gallery-toolbar','.gallery-count-row','#gallery-loading','#gallery-error','#gallery-grid','#gallery-more']) $(selector).hidden = true;
 $('#gallery-title').textContent = '画册在这里，创作在那一页。';
 $('.gallery-intro p').textContent = '这里可以浏览全部人物、地图与场景。同人作品浏览、登录与投稿，请前往完整版画廊。';
 $('.gallery-kicker-note').textContent = '完整版画廊 · 在新窗口打开';
 $('.gallery-intro [data-gallery-submit]').textContent = '打开完整版画廊 ↗';
 $('#gallery-empty').hidden = false;
 $('#gallery-empty-title').textContent = '把你的作品，送到完整版画廊。';
 $('#gallery-empty-copy').textContent = '当前是 GitHub 浏览版，尚未提供独立的作品上传服务。完整版的访问情况取决于你的网络。';
 $('.gallery-footnote').textContent = '角色收藏保存在本机浏览器。作品投稿与账号收藏在完整版中使用；两个站点的收藏记录不会自动同步。';
 $('#gallery-submit-title').textContent = '前往完整版画廊';
 $('#gallery-login-heading').textContent = '这一页，连接到完整版。';
 $('#gallery-login-needed p').textContent = 'GitHub 浏览版可以翻阅图鉴；作品浏览、登录与投稿在完整版中进行。点击下方入口，在新窗口继续。';
 $('#gallery-login-needed').hidden = false;
 $('#gallery-submit-form').hidden = true;
 $('#gallery-login-link').textContent = '打开完整版画廊 ↗';
 $('#gallery-login-link').target = '_blank';
 $('#gallery-login-link').rel = 'noopener noreferrer';
 function openNotice(context = {}) {
   opener = document.activeElement;
   for (const selector of ['#character-dialog','#scene-viewer','#lore-viewer']) {
     const other = $(selector); if (other?.open) other.close(selector === '#character-dialog' ? 'visit-place' : 'follow-link');
   }
   $('#gallery-login-link').href = urlFor(context);
   dialog.returnValue = '';
   if (!dialog.open) dialog.showModal();
   document.body.classList.add('gallery-dialog-open');
 }
 $('#gallery-submit-close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('close', () => {
   document.body.classList.remove('gallery-dialog-open');
   if (opener?.isConnected) opener.focus({preventScroll:true});
 });
 dialog.addEventListener('click', e => {
   if (e.target !== dialog) return;
   const r = dialog.getBoundingClientRect();
   if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
 });
 document.addEventListener('click', event => {
   const b = event.target.closest('[data-gallery-submit],[data-gallery-character],[data-gallery-place]');
   if (!b) return;
   openNotice({character:b.dataset.galleryCharacter, place:b.dataset.galleryPlace, kind:b.dataset.galleryKind, submit:b.hasAttribute('data-gallery-submit') && !b.closest('.gallery-intro')});
 });
 const params = new URLSearchParams(location.search);
 if (params.get('gallery') === 'submit' || params.get('art')) openNotice({character:params.get('galleryCharacter'), place:params.get('galleryPlace'), kind:params.get('galleryKind'), submit:true, art:params.get('art')});
})();
