# IT161 — Static Site (Monsters • Weapons • Class)

**Live:** https://it161-summer25-2.github.io/

## Pages
- `/index.html` — landing
- `/class.html` — class cards + image lightbox
- `/monsters.html` — monster gallery (Gold Rathian, Silver Rathalos, Legiana, Nergigante)
- `/weapons.html` — weapons gallery (Dual Blades, Hunting Horn, Gunlance)
- `/about.html` — project details + image credits
- `/404.html` — not found

## Run locally
Open the HTML files directly, or use a local server (e.g., VS Code “Live Server”).
GitHub Pages serves the `main` branch at the URL above.

## Notes
- Images live in `/images/` (case-sensitive).
- Lightbox: add `data-lightbox="gallery"` to the container and wrap each image in an `<a href="FULL.jpg">…</a>`.
- Accessibility: all images have `alt`; pages use `<main id="main">` + a “Skip to content” link.
- Performance: images use `loading="lazy"` and `width/height`. Prefer WebP for large assets.
