# AGENTS.md

## Project identity
Project name: huahkwang-history-site

This project is a small multi-page static website for the Huah Kwang Temple history section.
All naming must use `huah kwang`; avoid legacy alternate spellings.

## Project goal
Build a clean, dignified, responsive history mini-site in Traditional Chinese.

This mini-site has:
- one history homepage
- three detailed reading pages

The homepage is summary-first.
Each main topic has:
- a short summary
- a clear “延伸閱讀” link
- a dedicated detail page

## Site structure
Root pages:
- `index.html`
- `history-background.html`
- `founding-monk.html`
- `construction-process.html`

Shared assets:
- `assets/css/style.css`
- `assets/js/script.js`
- `assets/images/`

Content files:
- `content_manifest.md`
- `docs/final_copy_home.md`
- `docs/final_copy_history-background.md`
- `docs/final_copy_founding-monk.md`
- `docs/final_copy_construction-process.md`

## Content source of truth
Use these files as the source of truth:
- `content_manifest.md`
- `docs/final_copy_home.md`
- `docs/final_copy_history-background.md`
- `docs/final_copy_founding-monk.md`
- `docs/final_copy_construction-process.md`

Do not invent historical facts, names, years, or events that are not supported by these files.

## Page roles

### `index.html`
This is the homepage of the history mini-site.
It should include:
- hero section
- page intro
- short summary for:
  - 歷史背景
  - 創寺法師
  - 籌建過程
- clear “延伸閱讀” links to the detail pages
- short historical significance section
- footer

### `history-background.html`
Detailed reading page for 歷史背景.

### `founding-monk.html`
Detailed reading page for 創寺法師.

### `construction-process.html`
Detailed reading page for 籌建過程.

## Navigation rules
Each detail page must have:
- a clear “回歷史沿革” link back to `index.html`
- a reserved secondary back link for future upper-level site integration:
  - label: `回上一層主頁`
  - keep it visually present or lightly reserved, but do not wire it to a real upper site yet unless asked

Homepage summary links:
- 歷史背景 → `history-background.html`
- 創寺法師 → `founding-monk.html`
- 籌建過程 → `construction-process.html`

## Path rules
This site will be deployed on GitHub Pages.

Therefore:
- use relative paths everywhere
- do not use root-absolute paths like `/assets/...`
- CSS path from root pages:
  - `assets/css/style.css`
- JS path from root pages:
  - `assets/js/script.js`
- image paths from root pages:
  - `assets/images/...`

All pages must work as a static GitHub Pages project site.

## Design reference
Use this site as visual inspiration only:
https://fagushan.ddm.org.tw/

Do not copy the source code or duplicate the layout exactly.

Capture these qualities instead:
- calm Buddhist cultural atmosphere
- dignified and restrained presentation
- clear section hierarchy
- elegant whitespace
- readable Traditional Chinese typography
- banner / hero area with clear title presence
- image-supported layout without overpowering the text
- structured homepage blocks and clean navigation

## Design direction
Keywords:
- dignified
- serene
- restrained
- readable
- historical atmosphere
- elegant whitespace
- soft temple-like color palette

Preferred color feeling:
- off-white
- beige
- light stone
- warm gray
- muted wood / earth tone accents
- very restrained gold-brown accents if needed

Avoid:
- flashy animation
- strong commercial marketing feeling
- overly bright color blocks
- decorative fonts that reduce readability
- overcrowded layouts
- copying the reference site too literally

## Typography and layout
- prioritize readability in Traditional Chinese
- use semantic HTML
- maintain clear heading hierarchy
- keep generous spacing between sections
- support desktop and mobile well
- keep code beginner-friendly and easy to maintain

## Image handling
Use images from `assets/images/`.

Guidelines:
- preserve image dignity and clarity
- do not crop historical inscriptions or portraits aggressively
- if an image is too weak for a hero section, use it as a supporting image instead
- captions may be used when helpful
- do not invent captions beyond the provided content intent

## Implementation constraints
- static site only
- no frameworks required
- plain HTML/CSS/JS is preferred
- keep structure simple
- do not over-engineer
- do not create unnecessary build tooling unless explicitly requested

## Playwright checking rules
- This is the Huah Kwang Temple static website project.
- After modifying HTML, CSS, or JS, prioritize running the Playwright checks.
- After each website change, check desktop and mobile layouts.
- Confirm there is no horizontal overflow.
- Confirm the browser console has no errors.
- Confirm the main navigation links remain clickable.
- Keep the site style simple, restrained, dignified, and calm.
- Do not significantly refactor the website structure unless Walter explicitly asks.
- Do not delete existing content or images unless Walter explicitly asks.
- After finishing changes, list the files changed and explain how Walter can test them.

## What done means
The task is complete only if:
1. all four pages exist and render correctly
2. homepage links to all three detail pages
3. each detail page links back to homepage
4. all CSS/JS/image paths work
5. layout is responsive
6. Traditional Chinese content is readable and well-spaced
7. the site is ready for GitHub Pages deployment

## Before finishing
Please verify:
- no broken links
- no broken image paths
- no legacy alternate naming remains in new file names, visible headings, comments, or guidance
- all historical content follows the provided markdown files
