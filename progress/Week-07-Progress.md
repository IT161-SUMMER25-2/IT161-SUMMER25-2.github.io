# Weeks 5–7 Progress — IT161 Static Site

**Live site:** https://it161-summer25-2.github.io/  
**Repo:** https://github.com/IT161-SUMMER25-2/IT161-SUMMER25-2.github.io

## Project Overview
Static site demonstrating semantic HTML, accessibility basics, and a small vanilla JS lightbox for image galleries.

## My Role
Solo implementation — HTML/CSS layout, image galleries, accessibility polish, and deployment.

## Work Completed (Weeks 5–7)
- **Lightbox**: Added `scripts/lightbox.js`; used containers with `data-lightbox="gallery"`; wrapped images in `<a href="...">` so only images trigger the overlay.
- **Content**: Added Monsters & Weapons images with captions; updated filename to `Nergigante(1).jpg`.
- **Accessibility & Structure**: Added skip link (`<a class="skip-link" href="#main">`), `<main id="main">`, `aria-current="page"`, and ensured images have `alt` + `loading="lazy"`.
- **Finish Work**: Added basic metadata + favicon; created `404.html`; updated `README.md`.
- **Verification**: Confirmed lightbox works only on image links (buttons/links like Homepage/Portfolio no longer trigger it).

## Visuals / Links
- **Monsters:** https://it161-summer25-2.github.io/monsters.html  
- **Weapons:** https://it161-summer25-2.github.io/weapons.html  
- **Class:** https://it161-summer25-2.github.io/class.html

> (Optional) Add screenshots and embed here:
> `![Weapons page](images/screenshots/weapons.png)`

## Challenges & Solutions
- **Lightbox hooking wrong links** → Limited to anchors with images inside a `data-lightbox="gallery"` container; moved non-image links outside.
- **Paths & case sensitivity** → Standardized to `images/...` and verified on GitHub Pages.

## Key Learnings
- Small a11y improvements (skip link, `alt`, `aria-current`) add professional polish.
- Keeping JS minimal with semantic HTML makes debugging and grading easier.
Week-07-Progress.md
