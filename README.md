# Rachel Sun — Personal Website

This version keeps the artwork as a normal image file instead of embedding it inside `index.html`. That makes the site easy to maintain for years.

## The file you will usually replace

`assets/body-map.png`

When you make a newer version of the illustration:

1. Export it as PNG.
2. Name it exactly `body-map.png`.
3. Replace the existing file inside the `assets` folder.
4. Keep the rest of the website unchanged.

If the new artwork has the same crop/composition and roughly the same 3:4 aspect ratio, the clickable regions should stay aligned. The pixel dimensions can be larger or smaller.

If you substantially move the eyes, face, hands, torso, feet, or blue symbol, the clickable hotspot coordinates in `index.html` will need a small adjustment.

## Main files

- `index.html` — interactive illustrated homepage
- `styles.css` — all visual styling
- `script.js` — mobile menu and small interactions
- `assets/body-map.png` — homepage artwork
- `about.html`, `research.html`, `writing.html`, `projects.html`, `now.html`, `cv.html`, `contact.html` — interior pages

## Current body-map links

- Left eye → Research
- Right eye → Writing
- Face/head → About
- Hands/chest → Projects
- Torso → Now
- Feet → CV
- Blue form on the right → Contact

## Long-term recommendation

Keep this whole folder in Git (GitHub, GitLab, or another repository) and back up the `assets` folder separately. The site has no framework or build step, so it can be moved to another host at any time.
