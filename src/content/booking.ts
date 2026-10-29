import type { BookingFormat } from './types';

/**
 * "book us" page — placeholder copy.
 *
 * Every capacity, duration and price below is invented to be plausible for a
 * room this size in mitte. All of it needs the client's numbers before launch;
 * see CONTENT-TO-CONFIRM.md. Prices here are deliberate: the client took the
 * drinks menu off the site, but an enquiry page with no indication of cost
 * wastes everyone's time.
 */
export const BOOKING_EYEBROW = 'for teams, brands & bakeries';

export const BOOKING_HEADING = 'bring\nyour\npeople.';

export const BOOKING_INTRO =
  'book a private matcha workshop, take over the space for a pop-up, or cook up a collab with us. ' +
  'we bring the whisks, the playlist and the warm welcome.';

export const BOOKING_FORMATS: BookingFormat[] = [
  {
    id: 'workshop',
    name: 'matcha workshop',
    line: 'whisking, tasting and the story behind the bowl. no slides.',
    capacity: '8 – 16 guests',
    duration: '90 minutes',
    price: 'from € 45 per person',
    includes: [
      'a whisking session with your own bowl and chasen',
      'two drinks each, matcha or hojicha',
      'a 30g tin to take home',
    ],
  },
  {
    id: 'popup',
    name: 'brand pop-up',
    line: 'the whole room, after hours, for a launch or a showing.',
    capacity: 'up to 60 standing',
    duration: 'an evening, from 19:00',
    price: 'from € 1,200 for the evening',
    includes: [
      'the full space and the bar',
      'two of us behind it all evening',
      'a drink on arrival for every guest',
      'a custom drink built with you',
    ],
  },
  {
    id: 'collab',
    name: 'food collab',
    line: 'you bake, we pour. one day or a weekend.',
    capacity: 'open to the public',
    duration: 'one or two days',
    price: 'revenue share, or a flat fee',
    includes: [
      'counter space and the window',
      'the run club and chess club crowd',
      'we post it, you post it',
    ],
  },
  {
    id: 'private',
    name: 'private gathering',
    line: 'birthdays, book launches, small company dinners.',
    capacity: 'up to 35 seated',
    duration: '2 – 3 hours',
    price: 'from € 600, drinks by consumption',
    includes: [
      'the long table and the back room',
      'music you choose, within reason',
      'tea service for the whole table',
    ],
  },
];

export const BOOKING_NOTES = [
  'three weeks’ notice for a workshop, six for a pop-up. ask anyway if it’s sooner.',
  'we don’t serve alcohol, and we’re not set up for external catering.',
  'the room is ours until 22:00 on weeknights — the neighbours sleep above us.',
  'we reply to every enquiry within two working days.',
];

export const BOOKING_CTA = 'send an inquiry →';

/** Prefilled so the first email already answers the first three questions. */
export const BOOKING_MAIL_SUBJECT = 'event enquiry';
export const BOOKING_MAIL_BODY = [
  'hello ikigai,',
  '',
  'what we have in mind:',
  'date(s):',
  'how many people:',
  'what kind of thing:',
  '',
  'thanks!',
].join('\n');
