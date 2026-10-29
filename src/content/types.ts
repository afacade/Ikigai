/**
 * Content types for the ikigai site.
 *
 * Everything in `src/content` is placeholder data that a CMS is expected to
 * replace. Keep these shapes and the view layer needs no changes: the
 * components format nothing and fetch nothing.
 */

export type EventCategory =
  | 'workshops'
  | 'run club'
  | 'chess club'
  | 'pop-ups'
  | 'bakery collabs';

export type MediaKind = 'photo' | 'video';

/** A 4/5, 1/1 or 4/3 thumbnail — the archive board needs the variety. */
export type Ratio = '4/5' | '1/1' | '4/3';

export interface ArchiveEvent {
  id: string;
  cat: EventCategory;
  title: string;
  /** Free text, not a Date: 'Mar 2026', 'every Sunday'. */
  date: string;
  media: MediaKind;
  /** Mono file name shown in the window title bar. */
  file: string;
  /** One-line description. */
  line: string;
  /** Free text: '24 guests', '300 croissants', '2 days'. */
  guests: string;
  /** Poster / thumbnail image. */
  src: string;
  /** Short alt text for the image. */
  alt: string;
  /**
   * The video file for a `media: 'video'` event, played in the detail modal
   * with `src` as its poster. No placeholder videos exist yet, so this is
   * undefined for every seeded event and the modal falls back to the poster.
   */
  video?: string;
  /** Starting position on the desktop board, as a % of the board. */
  x: number;
  y: number;
  /** Resting rotation in degrees, −4..4. */
  rot: number;
  ratio: Ratio;
}

export interface Drink {
  name: string;
  /** Pre-formatted, with the space: '€ 5.8'. */
  price: string;
  note: string;
}

export interface UpcomingEvent {
  /** Day of the month: '18'. */
  day: string;
  /** Month and weekday: 'oct · sun'. */
  mon: string;
  title: string;
  meta: string;
  /** Where "save a spot" goes. Instagram until a booking flow exists. */
  href: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

/* ---------------------------------------------------------------------------
 * The pages the client asked for on 27 Oct: our matcha, events, book us, faqs.
 * Everything below is placeholder copy written to be realistic, not true.
 * See CONTENT-TO-CONFIRM.md for the line-by-line checklist.
 * ------------------------------------------------------------------------ */

/** One block on the "our matcha" page. */
export interface MatchaBlock {
  /** Small-caps label above the block. */
  label: string;
  /** Serif heading, one line. */
  heading: string;
  body: string;
}

/** A bookable format on the "book us" page. */
export interface BookingFormat {
  id: string;
  name: string;
  /** One line, what it is. */
  line: string;
  /** '8 – 16 guests', 'up to 60 standing'. */
  capacity: string;
  /** '90 minutes', 'an evening'. */
  duration: string;
  /** Pre-formatted and prefixed: 'from € 45 per person'. */
  price: string;
  /** What the price covers. */
  includes: string[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  /** Section heading on the faqs page. */
  name: string;
  items: Faq[];
}
