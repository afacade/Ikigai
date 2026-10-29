import type { MatchaBlock } from './types';

/**
 * "our matcha" page — placeholder copy.
 *
 * Written to be realistic, not true. The farm, the harvest details and the
 * caffeine figures are invented and have to come from the client before this
 * goes live; see CONTENT-TO-CONFIRM.md. Lower case throughout, per their note
 * of 27 Oct. No prices: the client asked for the menu to come off the site and
 * for wolt to carry ordering instead.
 */
export const MATCHA_EYEBROW = 'from uji, whisked here';

export const MATCHA_HEADING = 'one tea,\ndone properly.';

export const MATCHA_INTRO =
  'we serve one thing seriously. ceremonial-grade matcha from a single family farm in uji, ' +
  'stone-ground in small batches and whisked to order — never pre-mixed, never sitting in a jug ' +
  'waiting for you.';

export const MATCHA_BLOCKS: MatchaBlock[] = [
  {
    label: 'where it comes from',
    heading: 'one farm, twice a year',
    body:
      'our tea comes from [farm name], a third-generation farm in uji, kyoto. first-harvest ' +
      'leaves, shaded for about three weeks before picking, then stone-ground slowly enough that ' +
      'the powder never warms up. we buy twice a year and keep it cold until it goes in the bowl.',
  },
  {
    label: 'how we whisk it',
    heading: 'ninety seconds, by hand',
    body:
      'sifted first, so there are no lumps to hide. water just off the boil, rested to about 80°c ' +
      '— hotter than that and it turns bitter. then a bamboo whisk, by hand, until the foam holds. ' +
      'about ninety seconds from your order to your cup.',
  },
  {
    label: 'what to drink',
    heading: 'start where you like',
    body:
      'new to matcha: have it as a latte, oat by default, whole and almond on request. want the ' +
      'tea itself: order usucha, which is matcha and water and nowhere to hide. want the taste ' +
      'without the lift: hojicha is roasted, toasty and low in caffeine.',
  },
  {
    label: 'take some home',
    heading: 'the same tin we use',
    body:
      'we sell the tin we pull from behind the bar, 30g, enough for about twenty bowls. whisks, ' +
      'sifters and chawan too — most of the bowls are made by the potters we host at pop-ups.',
  },
];

/** The wolt block that replaces the old drinks list. */
export const DELIVERY = {
  label: 'can’t make it in',
  heading: 'we’re on wolt',
  body:
    'delivery across [delivery areas], every day we’re open. lattes travel better than you would ' +
    'think — we whisk them the same way and send them iced.',
  cta: 'order on wolt →',
};
