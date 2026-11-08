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
  'we only really serve one thing. it is ceremonial-grade matcha from a single family farm in ' +
  'uji, stone-ground in small batches and whisked when you order it. nothing sits in a jug ' +
  'waiting for you.';

export const MATCHA_BLOCKS: MatchaBlock[] = [
  {
    label: 'how we whisk it',
    heading: 'ninety seconds, by hand',
    body:
      'we sift it first so you don’t get lumps. the water goes on just off the boil and rests to ' +
      'about 80°c, because anything hotter turns it bitter. then it is whisked by hand until the ' +
      'foam holds, which takes about ninety seconds.',
  },
  {
    label: 'what to drink',
    heading: 'start where you like',
    body:
      'new to matcha? start with a latte. we pour it with oat unless you ask for something else. ' +
      'if you want the tea on its own, order usucha. and hojicha is the one to get when you like ' +
      'the taste but not what the caffeine does to you.',
  },
  {
    label: 'take some home',
    heading: 'the same tin we use',
    body:
      'we sell the same 30g tin we pull from behind the bar, which is enough for about twenty ' +
      'bowls. we also keep whisks, sifters and chawan, and most of the bowls come from potters ' +
      'we’ve hosted at pop-ups.',
  },
];

/** The wolt block that replaces the old drinks list. */
export const DELIVERY = {
  label: 'can’t make it in',
  heading: 'we’re on wolt',
  body:
    'we deliver across [delivery areas] every day we’re open. the lattes are whisked the same ' +
    'way and sent iced, which holds up better than you’d expect.',
  cta: 'order on wolt →',
};
