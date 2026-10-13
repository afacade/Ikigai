# Handoff: Ikigai Tea Bar — marketing website (single page)

## Overview
One-page website for **ikigai**, a matcha tea bar and community "third place" at Kronenstraße 66, 10117 Berlin. Goals, in order: get people to visit, show off the event history (portfolio for companies/partners), and drive event inquiries. Tone: warm, minimal, editorial, slow. Language: English.

**Chosen hero: "The doorway" (2d).** The "bowl" hero in the reference file is an unused alternative. Ignore it and the hero switcher pill in the bottom-left corner; neither ships.

## About the design files
`Ikigai Website.dc.html` is a **design reference built in HTML**: a prototype of the intended look and behaviour, not production code. Rebuild it in the target stack. If there's no codebase yet, we recommend **Next.js (App Router) or Astro + Tailwind (or CSS modules)**, with a small scroll-progress hook (or Framer Motion / GSAP ScrollTrigger) for the motion. Open the file in a browser to see it. It needs the sibling `support.js` and `image-slot.js` (prototype-only runtime pieces; don't port them).

## Fidelity
**High-fidelity.** Colours, type, spacing, copy and motion are final unless the client says otherwise. The photos are Pexels stock **placeholders** (see Assets). Product data (drink prices, past events, upcoming dates, email) is placeholder copy the client must confirm.

---

## Global

### Design tokens
| Token | Hex | Use |
|---|---|---|
| cream | `#F7F1E6` | main page background (intro, drinks, visit) |
| paper | `#EFE6D6` | doorway hero background |
| beige | `#EEE5D5` | "Coming up" background |
| ink | `#2A1E16` | darkest brown text, dark buttons |
| matcha-deep | `#2F4A2A` | primary text on cream, primary buttons |
| matcha | `#4F6B33` | italic accents ("in.") |
| matcha-text-2 | `#4A5E42` | secondary text on cream |
| matcha-light | `#C9D6A0` | highlight/active chips, CTA on dark |
| wood | `#6B4630` | small labels, vertical Japanese text |
| wood-2 | `#5A4232` | secondary text on beige |
| terracotta | `#6B3B2A` | "Moments" section background |
| terracotta-board | `#5E3324` | desktop board surface |
| espresso | `#3D2B1F` | "Host with us" background |
| folder-tan | `#D9C29C` / tab `#C2A77D` | folder icons (active: `#C9D6A0` / `#A9BD78`) |
| window-chrome | `#E4D7C1` | file-window title bars |
| window-body | `#F6F1E7` / polaroid `#F8F4EC` | window/polaroid fills |
| light-on-dark | `#F2E9DA`, `#E8D9C3`, `#E3C9A8`, `#D8CBB6` | text on terracotta/espresso |

Hairlines: `rgba(47,74,42,.22)` on cream, `rgba(242,233,218,.25)` on dark.

### Typography (Google Fonts)
- **Instrument Serif** (400, normal + italic): all display type, wordmark, item names. Italic is used as the accent voice ("in.", "Stay a while.").
- **Archivo** (variable `wdth 62–125`, `wght 300–900`): body and UI. Small-caps labels: 11px, `letter-spacing .26–.32em`, uppercase, weight 600 for section eyebrows. The big date numerals in "Coming up" use weight 800 and `font-stretch 120%`. The "Bring your people." headline uses weight 900 and `font-stretch 125%`.
- **Shippori Mincho** (400/500): Japanese text only (いらっしゃい, 生き甲斐).
- **IBM Plex Mono** (400/500): file names, metadata in the event portfolio only.

Display sizes use `clamp()`. Hero "come in." is `clamp(76px,10vw,132px)` at line-height .92. Section H2s are `clamp(46px,5.2–5.6vw,80–88px)` at line-height ~1. Body is 15–18px at line-height 1.55–1.65.

### Spacing
Section padding `clamp(80px,10vw,140px)` vertical and `clamp(20px,5vw,72px)` horizontal. Max content width 1100–1400px depending on section. Use `gap` everywhere for groups.

### Radii / shadows
Pills `999px`. File windows `8–10px`. Window shadow `0 20px 40px -18px rgba(0,0,0,.65)` on dark and `0 18px 40px -18px rgba(42,30,22,.45)` on light.

### Nav (fixed, top)
A 3-column grid (`1fr auto 1fr`), padding `20px clamp(20px,4vw,56px)`. Left: **Drinks**, **Moments**. Centre: wordmark "ikigai" (Instrument Serif 28px). Right: **Host with us**, **Visit**. Links are 11px uppercase, `letter-spacing .26em`, anchors to section ids.
- While over the doorway hero: transparent background, text `#2F4A2A`. Once the arch photo fills more than ~60% of the screen, text switches to `#F7F1E6`.
- After the hero has scrolled past (hero bottom < 90px from top): background `rgba(247,241,230,.94)` + `backdrop-filter: blur(10px)`, text `#2F4A2A`, `box-shadow 0 1px 0 rgba(47,74,42,.12)`. Transition `.4s`.
- Mobile: collapse links into a simple menu button (not designed; keep it minimal: cream sheet, serif links).

---

## Sections (top → bottom)

### 1. Hero — "The doorway" (`#top`)
A **scroll-driven, sticky** hero.
- Outer `<header>`: `height: 280vh`, background `#EFE6D6`.
- Inner: `position: sticky; top: 0; height: 100vh; overflow: hidden`.
- **Arch photo**: a full-bleed image layer clipped with `clip-path: inset(top side 0 side round r r 0 0)`.
  - Start (p=0): width `w0 = min(440px, 70vw)`, height `h0 = min(600px, 72vh)`, bottom-centred, top corners radius `w0/2` (a semicircular arch).
  - End (p=1): full viewport, radius 0.
  - `p` = scroll progress through the header = `clamp(-rect.top / (rect.height - innerHeight), 0, 1)`, eased with easeInOutQuad.
  - `w = lerp(w0, vw, e)`, `h = lerp(h0, vh, e)`, `side = (vw - w)/2`, `top = vh - h`, `r = (w0/2)*(1-e)`.
- **"come in."**: left `clamp(20px,5vw,64px)`, top `clamp(170px,32vh,280px)`. "come" in Instrument Serif, a line break, then "in." in italic `#4F6B33`. Colour `#2A1E16`.
- **いらっしゃい**: vertical (`writing-mode: vertical-rl`), Shippori Mincho `clamp(28px,3vw,40px)`, `letter-spacing .3em`, `#6B4630`, right `clamp(20px,5vw,72px)`, top `clamp(110px,18vh,150px)`.
- **Blurb**: bottom-right, max-width 270px, 15px/1.55: "A matcha tea bar and a third place in Berlin Mitte. Run club on Sundays, chess on Thursdays, a seat for you any day."
- The three items above fade out: `opacity = 1 - clamp(p*2.2, 0, 1)`.
- **Late line**: fades in once the photo is full. Bottom-left, `#F7F1E6`, Instrument Serif `clamp(44px,6vw,96px)`/1.02, `text-shadow 0 2px 30px rgba(20,14,10,.45)`. Copy: "Welcome in." then "*Stay a while.*" (italic). `q = clamp((p-.62)/.28, 0, 1)`; opacity q, `translateY((1-q)*20px)`.
- `prefers-reduced-motion`: show the full-bleed photo with the late line, and skip the arch animation.

### 2. Intro — floating circles
Cream `#F7F1E6`, text `#2F4A2A`, `min-height 140vh`, overflow hidden.
- Statement (reveal on scroll), Instrument Serif `clamp(34px,4.4vw,66px)`/1.08, max-width 1000px:
  "Ceremonial matcha, whisked to order / Run clubs, chess nights & workshops / *A third place in Berlin Mitte*"
- 5 soft-edged circular photos, absolutely positioned (left/top in %, size in `clamp(130–170px, 18–26vw, 290–400px)`), with a feathered edge: `mask-image: radial-gradient(circle, #000 56%, transparent 70%)`. Each one moves with **parallax**: `translateY(-(elementCentre - viewportCentre) * speed)`, with speeds .22 / .4 / .12 / .3 / .18. Positions: (56%,30%), (26%,46%), (5%,64%), (43%,70%), (74%,62%).

### 3. Statement — "What we do"
Centred, cream. Wordmark "ikigai" (serif `clamp(48px,5vw,76px)`) + 生き甲斐 (Shippori 17px, `letter-spacing .4em`). Eyebrow "A REASON FOR BEING". H2 "Come for the matcha. Stay for the people." Paragraph: "Stone-ground matcha, a long wooden table and a calendar full of things to do together. Whoever you are, there's a seat for you." Buttons: **Menu** (filled `#2F4A2A`, cream text, 17×40px padding, 11px uppercase `.3em`) → `#drinks`, and **Events** (1px outline `rgba(47,74,42,.4)`) → `#moments`. Every block reveals on scroll.

### 4. Drinks (`#drinks`)
Two-column grid (`repeat(auto-fit, minmax(min(100%,420px),1fr))`). Left: a **sticky** full-height photo (`position: sticky; top:0; height:100vh`). Right column, padded: eyebrow "WHAT'S IN THE CUP", H2 "Short menu. / *Done properly.*", then a list of rows (top border hairline, padding 26px 0): name (serif `clamp(28px,2.6vw,38px)`) with the price on the right (14px), then a note (15px `#4A5E42`). Footer line, italic serif 26px: "Full menu & pastries in store."
Placeholder data: Usucha €5.0 · Matcha Latte €5.8 · Strawberry Cloud €6.5 · Hojicha Latte €5.5 (notes in the file).

### 5. Moments — event portfolio (`#moments`)
Background `#6B3B2A`, text `#F2E9DA`. Header: mono eyebrow "THE ARCHIVE · {n} FILES", H2 "Things we've *hosted*". On the right, a segmented toggle (`desktop` / `all events`), outlined pill, with the active segment filled `#F2E9DA`.

**Desktop view** (default when the container is ≥ 760px wide): an 860px-tall board `#5E3324`, radius 14px.
- **Folder icons** (left column, at `left 2%` and `top 4/20/36/52/68%`): Workshops, Run club, Chess club, Pop-ups, Bakery collabs. Each folder is a 76×58 CSS shape with a tab, and its label sits below. Clicking a folder toggles the filter: non-matching files fade to opacity .22 and other folders to .5. The active folder turns matcha-light.
- **File windows** (10): width `clamp(150px,14.5vw,210px)`, slightly rotated (−4..4°). Title bar `#E4D7C1` with mono file name (e.g. `runclub_sunday.mov`) and "open ↗". Thumbnail aspect ratio varies (4/5, 1/1, 4/3). Videos show a 34px cream play badge.
  - **Drag** by the title bar (pointer events; the window clicked comes to the front). If the pointer moves < 4px, treat it as a **click → open the detail modal**. Store positions as % of the board. Default x is never less than 130px, to clear the folder column.
- Hint, bottom-right, mono 11px: "drag by the bar · click the bar to open · folders filter".

**List view** (forced when the container is < 760px wide): filter chips (All + 5 categories) and a responsive grid of cards (`minmax(250px,1fr)`). Each card: a 4/5 image, a media badge (photo / ▶ video), a mono row with category + date, a serif title (28px), and a one-line description. Clicking a card opens the modal.

**Detail modal**: fixed overlay `rgba(42,30,22,.55)` + blur 4px. Window `min(820px,100%)`, radius 12px, mono title bar with "close ×". Two columns: a 4/5 photo (in production this should be a **video player** for video events) and details: category/date, title (serif 44px), description, chips (guest count, media type), and CTA "plan something like this →" (→ `#host`). Close on backdrop click and on Esc.

Event data model: `{ id, cat, title, date, media: 'photo'|'video', file, line, guests, src, x, y, rot, ratio }`. Ten placeholder entries are in the file. This should come from a CMS (the client will add a lot of events, with photos and videos).

### 6. Coming up (toggleable)
Beige `#EEE5D5`. H2 "Coming *up*". Rows (top border 1.5px `#2A1E16`, padding 26px 0), a 3-column grid `minmax(80px,130px) 1fr auto`: big day numeral (Archivo 800, stretch 120%, `clamp(30px,3.4vw,46px)`) with a mono month/weekday line below it, then the title (serif) + a meta line, then an outlined pill "save a spot" (links to Instagram for now; booking flow TBD).

### 7. Host with us (`#host`)
Espresso `#3D2B1F`. Left: eyebrow "FOR TEAMS, BRANDS & BAKERIES" (matcha-light), headline "Bring / your / people." (Archivo 900, stretch 125%, uppercase, `clamp(46px,6.6vw,96px)`/.88), a paragraph, 4 outline tag pills (team workshops, brand pop-ups, food collabs, private gatherings), and CTA "send an inquiry →" (filled `#C9D6A0`, ink text, 16×28px, weight 600; `mailto:` placeholder `hello@ikigai-teabar.de`). Right: two overlapping rotated file windows (`team_workshop.mov`, `popup_setup.jpg`).

### 8. Visit + newsletter (`#visit`)
Cream, a two-column split. Left: a photo with parallax (speed .12, overscanned ±12%). Right: "ikigai" (serif 40px), H2 "More than a café, / *a place to belong.*", eyebrow "WHERE TO FIND US", copy "A few minutes from Stadtmitte. Walk in any day of the week — no reservation, no rush.", italic serif links **Directions** (Google Maps) and **Instagram** (`https://www.instagram.com/ikigai.teabar/`), address in italic serif 28px, hours grid:
- Mon – Thu 11:30 – 19:00
- Fri – Sat 11:30 – 19:30
- Sun 12:00 – 19:00

Newsletter: eyebrow "STAY IN THE LOOP", an underline-only email input + "Join →" text button. On submit, replace it with "*See you at the next one.*". Hook this up to the client's email provider. Small print: "One email a month. Events first."
Footer bar: "© 2026 ikigai tea bar · @ikigai.teabar · Imprint · Privacy" (11px uppercase `.22em`). **Imprint and Privacy pages are legally required in Germany**; link them.

---

## Interactions & motion (summary)
- **Reveal on scroll** (`[data-reveal]` in the file): opacity 0→1 and translateY 36px→0 as the element's top goes from the bottom of the viewport to 28% above it. Scrubbed, not a one-shot transition. An IntersectionObserver-triggered transition (600ms, ease-out) is an acceptable alternative.
- **Parallax** (`[data-speed]`): translateY = −(centre offset from viewport centre) × speed. Apply it to an inner element so the measured parent isn't transformed.
- **Doorway hero**: see §1.
- Hover: nav links have no change. Buttons: Menu → `#3F6136`, outline → border `#2F4A2A`. Moments chips/folders use the opacity/colour states above.
- Respect `prefers-reduced-motion`: disable parallax and scrubbed reveals (show the final state).
- Use one rAF-throttled scroll listener (or a library). Never re-render React on every scroll; write transforms directly or use motion values.

## State
- `filter: Category | null`, `view: 'desktop' | 'list'` (auto `list` below 760px container width), `positions: Record<id, {x,y}>`, `zOrder`, `openEventId | null`, `subscribed: boolean`.
- Data: events (CMS), upcoming events (CMS or Instagram/Eventbrite), drinks menu (CMS), opening hours.

## Assets
All photos are **Pexels placeholders** (free licence) and must be replaced with the client's own photos and videos:
- Doorway: pexels 28947779 · Intro circles: 32695045, 7144920, 17789703, 34164459, 6817705 · Drinks: 32972501 · Visit: 28947779 · Host: 5946632, 8890516 · Events: 5946632, 17789703, 6817705, 30593915, 8474082, 8329642, 29684376, 28730004, 32972501.
URL pattern: `https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg`.
No logo has been supplied yet: the wordmark is Instrument Serif "ikigai". There are no icons beyond the CSS play triangle and the CSS folder shapes.

## Files
- `Ikigai Website.dc.html`: the full design reference (hero set to the doorway). Inline styles hold all the exact values. The logic class at the bottom holds the scroll math (`tick()`), drag logic and data arrays.
- `support.js`, `image-slot.js`: prototype runtime only; do not port.
