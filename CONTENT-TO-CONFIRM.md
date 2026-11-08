# Content to confirm

Everything on this list is placeholder copy written to be plausible, not true. It exists so the
pages can be built and reviewed; none of it should go live unchecked. Grouped by how much it costs
to be wrong.

## Must be verified — wrong is harmful, not just inaccurate

| Item | Where | Why it matters |
|---|---|---|
| Wolt listing URL | `src/content/site.ts` → `wolt` | Written to Wolt's usual URL shape and **never opened**. A wrong slug sends customers to another venue's checkout. |
| Delivery areas | `site.ts` → `woltAreas` | Currently "mitte, prenzlauer berg and kreuzberg". Must match the real Wolt radius. |
| "there is one step at the door" | `faqs.ts` → visiting | An access answer that turns out to be wrong strands someone on the pavement. Measure it. |
| "we don't take cash" | `faqs.ts` → visiting | Operational, and a common reason for a bad first visit. |
| Allergens, and `[bakery name]` | `faqs.ts` → the tea | Legally sensitive in Germany. The real supplier and their real allergen list, or cut the answer. |
| Caffeine figures (60–70mg / ~20mg) | `faqs.ts` → the tea | Plausible, uncited. Either source them or soften to "about an espresso". |
| `hello@ikigai-teabar.de` | `site.ts` | Inherited from the handoff. Still unconfirmed, and it now also carries booking enquiries. |
| Imprint and privacy pages | `src/app/imprint`, `src/app/privacy` | Still bracketed placeholders. Legally required, and both need a lawyer and a German version. |

## Needs the client's numbers

| Item | Placeholder | Where |
|---|---|---|
| Workshop | 8–16 guests · 90 min · from € 45pp | `booking.ts` |
| Brand pop-up | up to 60 standing · evening from 19:00 · from € 1,200 | `booking.ts` |
| Food collab | revenue share or flat fee | `booking.ts` |
| Private gathering | up to 35 seated · 2–3 h · from € 600 | `booking.ts` |
| Lead times | 3 weeks workshops, 6 weeks pop-ups | `booking.ts` → `BOOKING_NOTES` |
| Curfew | room ours until 22:00 on weeknights | `booking.ts` → `BOOKING_NOTES` |
| Reply time | within two working days | `booking.ts` → `BOOKING_NOTES` |
| Take-home tin | 30g, about twenty bowls | `matcha.ts` |

Prices are on the book us page on purpose. The menu came off the site at the client's request, but
an enquiry page with no indication of cost wastes both sides' time. If they would rather show none,
cut the `price` field — the layout holds without it.

## Needs the client's words

- **`[farm name]`** — the uji farm. `matcha.ts`. Everything around it (first harvest, three weeks
  shaded, stone-ground, bought twice a year, kept cold) is realistic for ceremonial grade but is
  written on their behalf.
- **`[bakery name]`** — the pastry supplier. `faqs.ts`.
- **The laptop rule** — "laptops away after 17:00 on weekdays and all day sunday" is invented. It
  is a real policy question for a third place, and worth them deciding properly.
- **Run club and chess club details** — sunday 10:00, 5k, free, iced matcha included; thursday from
  18:00, boards provided, no fee. Taken from the handoff's hero copy and filled in.

## Still outstanding from the original handoff

- Real photography — mostly done. The client's own images now fill the home, our-matcha, book-us
  and events-archive slots (`public/images/`). **Still on Pexels placeholders:** the run club and
  chess subjects (home intro circles + the `run club` / `chess club` event cards) — no run-club or
  chess photography exists in the asset set yet. Replace when it does.
- Event videos — two added (`public/videos/bakery-collab.mp4`, `brand-launch.mp4`) on the bakery and
  pop-up cards. The two run-club video cards have no `video` yet (see above) and fall back to their
  poster. Source clips are trimmed to ~14s, muted, 720p.
- Event archive titles/dates (`events.ts`) are still placeholder copy; only the media was replaced,
  so e.g. "matcha croissant day" now shows a matcha cake. Align the copy with the real events.
- Drink prices (`drinks.ts`) are no longer rendered anywhere. The file stays until they confirm
  prices are never coming back.
- Booking flow for "save a spot" on upcoming events — still points at Instagram.
- Dessert gallery on the our-matcha page (`DessertGallery`, `content/desserts.ts`) —
  the photos are the client's own (cakes, drinks, savoury food), but the heading,
  eyebrow and the one-line intro are placeholder copy. Confirm wording, and confirm
  these dishes are actually on offer, before launch. No dish names or prices by
  request.
- Newsletter provider.

## Decisions, not content

- **Does "visit" stay a nav item?** The four categories they gave don't include it. Proposal:
  address, hours and map in the footer of every page, plus a visit block on the home page.
- **Lower case and proper nouns.** `berlin mitte`, `kronenstraße 66`, `wolt`, `instagram` are all
  lowercased in the new copy. `kronenstraße` is grammatically wrong in German lower case — it is a
  style choice, so worth saying out loud before it ships.
- **The mobile nav button still says "menu."** With no food menu on the site, that label misleads.
