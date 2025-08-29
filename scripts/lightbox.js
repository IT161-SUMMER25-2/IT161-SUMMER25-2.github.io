(() => {
  const SELECTOR = '[data-lightbox="gallery"] a';
  const links = Array.from(document.querySelectorAll(SELECTOR));
  if (!links.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML = `
    <div class="lb-backdrop" data-lb-close></div>
    <figure class="lb-dialog" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="lb-close" aria-label="Close" data-lb-close>&times;</button>
      <img class="lb-img" alt="">
      <figcaption class="lb-caption"></figcaption>
      <button class="lb-prev" aria-label="Previous image">&#10094;</button>
      <button class="lb-next" aria-label="Next image">&#10095;</button>
    </figure>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('.lb-img');
  const caption = overlay.querySelector('.lb-caption');
  const prevBtn = overlay.querySelector('.lb-prev');
  const nextBtn = overlay.querySelector('.lb-next');

  let index = 0;
  let lastFocus = null;

  function open(i) {
    index = i;
    const a = links[index];
    const full = a.getAttribute('href');
    const cap = a.dataset.caption || a.querySelector('img')?.alt || '';
    img.src = full;
    img.alt = cap;
    caption.textContent = cap;
    lastFocus = document.activeElement;
    overlay.classList.add('is-open');
    nextBtn.focus();
    document.addEventListener('keydown', onKey);
  }

  function close() {
    overlay.classList.remove('is-open');
    document.removeEventListener('keydown', onKey);
    if (lastFocus) lastFocus.focus();
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'Tab') {
      const focusables = [prevBtn, nextBtn, overlay.querySelector('.lb-close')];
      const i = focusables.indexOf(document.activeElement);
      if (e.shiftKey) {
        if (i <= 0) { e.preventDefault(); focusables[focusables.length-1].focus(); }
      } else {
        if (i === focusables.length-1) { e.preventDefault(); focusables[0].focus(); }
      }
    }
  }

  function go(delta) {
    index = (index + delta + links.length) % links.length;
    const a = links[index];
    const full = a.getAttribute('href');
    const cap = a.dataset.caption || a.querySelector('img')?.alt || '';
    img.src = full;
    img.alt = cap;
    caption.textContent = cap;
  }

  overlay.addEventListener('click', (e) => {
    if (e.target.closest('[data-lb-close]')) close();
  });
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  links.forEach((a, i) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      open(i);
    });
  });
})();
