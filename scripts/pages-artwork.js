(() => {
  const { rawBase, external } = window.pagesArtworkConfig;
  const remote = new Set(external);
  window.pagesArtwork = {
    preview(stem) {
      return 'assets/' + stem + (remote.has(stem + '.png') ? '.webp' : '.png');
    },
    original(stem) {
      const name = stem + '.png';
      return (remote.has(name) ? rawBase : 'assets/') + name;
    },
  };

  document.addEventListener('click', async event => {
    if (event.defaultPrevented || event.button !== 0 ||
        event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const link = event.target.closest('a[download]');
    if (!link || !link.href.startsWith(rawBase)) return;
    event.preventDefault();
    if (link.hasAttribute('aria-busy')) return;
    link.setAttribute('aria-busy', 'true');
    const url = link.href;
    const filename = link.download;
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(25000) });
      if (!response.ok) throw Error('Original download returned ' + response.status);
      const objectURL = URL.createObjectURL(await response.blob());
      const download = document.createElement('a');
      download.href = objectURL;
      download.download = filename;
      document.body.append(download);
      download.click();
      download.remove();
      setTimeout(() => URL.revokeObjectURL(objectURL), 60000);
    } catch {
      location.assign(url);
    } finally {
      link.removeAttribute('aria-busy');
    }
  });
})();
