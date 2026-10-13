import type { UpcomingEvent } from './types';
import { SITE } from './site';

/**
 * Placeholder dates. Empty this array and the "Coming up" section disappears —
 * better than an empty state.
 */
export const UPCOMING: UpcomingEvent[] = [
  {
    day: '18',
    mon: 'OCT · SUN',
    title: 'Sunday 5K + iced matcha',
    meta: '10:00 · meet at the door · free',
    href: SITE.instagram,
  },
  {
    day: '22',
    mon: 'OCT · THU',
    title: 'Chess & Matcha Night',
    meta: '18:00 – 22:00 · all levels · boards provided',
    href: SITE.instagram,
  },
  {
    day: '31',
    mon: 'OCT · SAT',
    title: 'Matcha 101 Workshop',
    meta: '14:00 · 12 spots · € 35 incl. drinks',
    href: SITE.instagram,
  },
];
