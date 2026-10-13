# ikigai tea bar — site

Next.js (App Router) + TypeScript + Tailwind v4. One page, plus the two legal pages German
law requires.

```bash
npm install && npm run dev
```

`README.md` in this directory is the **design handoff** — the spec this site was built from.
`Ikigai Website.dc.html`, `support.js` and `image-slot.js` are the prototype it was rebuilt from;
none of them ship.

## Where things are

| Path | What |
|---|---|
| `src/content/*.ts` | Events, drinks, upcoming dates, hours, photography, site details. Typed, placeholder, CMS-ready. |
| `src/lib/scroll.ts` | The one rAF-throttled scroll pass every effect registers with. |
| `src/components/MotionRoot.tsx` | Page-wide scrubbed reveals (`data-reveal`) and parallax (`data-speed`). |
| `src/components/moments/` | The archive: board, draggable file windows, folders, cards, modal. |
| `src/app/globals.css` | Design tokens (`@theme`), the type scale as `.t-*` classes, pill variants. |

Scroll position never enters React state. Each pass writes `transform` / `opacity` / `clip-path`
straight to the node. `prefers-reduced-motion: reduce` shows every end state and skips the arch.

## Before launch

- **Photography** is Pexels placeholder. Replace it and drop `images.pexels.com` from
  `next.config.ts`, then remove the "Images" section of the privacy page.
- **Event videos** have no files yet. `ArchiveEvent.video` is wired to a `<video poster>` in the
  modal; until it is filled the modal shows the still.
- **Prices, past events, upcoming dates and `hello@ikigai-teabar.de`** are placeholders to confirm.
- **The newsletter** posts nowhere. Wire the provider in `src/components/Newsletter.tsx` (double
  opt-in), then name it on the privacy page.
- **`/imprint` and `/privacy`** are structured placeholders. Both are legally required, both need
  the client's real details, both should be reviewed by their lawyer and provided in German.
- **"save a spot"** links to Instagram. A booking flow is still to be decided.

## Deviations from the handoff

1. **Drag speed.** The prototype divides pointer travel by the *window's* width, so a file moves
   about five times as far as the pointer. The spec says positions are a percentage of the board,
   so the board's width is used and a drag tracks the pointer 1:1.
2. **Reduced motion.** The spec's end state is kept (full-bleed photo, late line, the "come in." /
   いらっしゃい / blurb trio hidden). The header is also shortened from 280vh to 100vh, since
   otherwise it is two viewports of scroll in which nothing happens. The blurb's text is still in
   the DOM for screen readers, but a sighted visitor with reduced motion does not see it — worth a
   decision from the client.
3. **Hero wordmark.** The handoff hides the nav wordmark while the hero is in view. The doorway
   hero never says the name anywhere else, so it stays visible as the masthead — `matcha-deep` on
   paper, `cream` once the photo fills.
4. **Mobile nav.** Undesigned in the handoff. Built minimal, as asked: under 640px the links
   collapse into a `Menu` button and a cream sheet of serif links.
5. **Keyboard access**, not specified: `open ↗` in a file window's title bar is a real button, list
   cards are buttons, the modal moves focus to `close ×` and restores it, and Escape closes the
   modal and the mobile sheet.
6. **`desktop` / `all events`.** Below 760px of container width the `desktop` segment is disabled
   rather than silently ignored.
7. **Coming up** has no on/off prop; it renders nothing when `UPCOMING` is empty.
8. **Grain.** The prototype's optional grain overlay is off by default and absent from the spec,
   so it was not ported.
9. **Shippori Mincho.** Google's metadata declares no `japanese` subset, and a latin-only request
   drops the kana. The family is fetched unsubsetted with `preload: false`.
