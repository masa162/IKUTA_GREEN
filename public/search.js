// static/search.js（修正済み）

window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.search-input');
  if (!input) return;

  fetch('/index.json')
    .then(res => res.json())
    .then(pages => {
      const fuseInstance = new Fuse(pages, {
        keys: ['title', 'content'],
        threshold: 0.3
      });

      input.addEventListener('input', e => {
        const results = fuseInstance.search(e.target.value);
        console.log(results);
      });
    });
});
