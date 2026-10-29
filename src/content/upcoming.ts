import type { UpcomingEvent } from './types';
import { SITE } from './site';

/**
 * Placeholder dates. Empty this array and the "Coming up" section disappears —
 * better than an empty state.
 */
export const UPCOMING: UpcomingEvent[] = [
  {
    day: '18',
    mon: 'oct · sun',
    title: 'sunday 5k + iced matcha',
    meta: '10:00 · meet at the door · free',
    href: SITE.instagram,
  },
  {
    day: '22',
    mon: 'oct · thu',
    title: 'chess & matcha night',
    meta: '18:00 – 22:00 · all levels · boards provided',
    href: SITE.instagram,
  },
  {
    day: '31',
    mon: 'oct · sat',
    title: 'matcha 101 workshop',
    meta: '14:00 · 12 spots · € 35 incl. drinks',
    href: SITE.instagram,
  },
];
