import type { FaqGroup } from './types';

/**
 * "faqs" page — placeholder copy.
 *
 * These are the questions a matcha bar in mitte actually gets, but every
 * answer is written on the client's behalf and several state operational facts
 * nobody has confirmed: card-only payment, the laptop rule, the step at the
 * door, dogs, and the caffeine figures. All of it needs sign-off before launch;
 * see CONTENT-TO-CONFIRM.md.
 *
 * The step-free answer in particular must be checked against the real doorway.
 * An access answer that turns out to be wrong strands someone outside.
 */
export const FAQ_EYEBROW = 'before you come';

export const FAQ_HEADING = 'questions,\nanswered.';

export const FAQS: FaqGroup[] = [
  {
    name: 'visiting',
    items: [
      {
        q: 'do you take reservations?',
        a: 'no — walk in any day of the week. the only thing we book out is the whole space, and that lives on the book us page.',
      },
      {
        q: 'can i work from here?',
        a: 'mornings, yes, and the wifi is free — ask at the bar for the password. we ask for laptops away after 17:00 on weekdays and all day sunday. that is when the room gets loud, which is the point of it.',
      },
      {
        q: 'how do i pay?',
        a: 'card and phone, from the first euro. we don’t take cash.',
      },
      {
        q: 'is the space step-free?',
        a: 'there is one step at the door. past it the room and the toilet are level. say hello and we will give you a hand with the step.',
      },
      {
        q: 'can i bring my dog?',
        a: 'yes, if they are calm with a full room. there is water by the door.',
      },
    ],
  },
  {
    name: 'the tea',
    items: [
      {
        q: 'what makes it ceremonial grade?',
        a: 'first-harvest leaves from one farm in uji, shaded before picking and stone-ground slowly. it is sweeter and less astringent than culinary grade, which is why we whisk it rather than bake with it.',
      },
      {
        q: 'how much caffeine is in a matcha?',
        a: 'a latte sits around 60–70mg, so about a single espresso, but it arrives more slowly and leaves more slowly. hojicha is closer to 20mg if you want the taste without the lift.',
      },
      {
        q: 'what milk do you have?',
        a: 'oat by default. whole and almond on request, at no extra charge.',
      },
      {
        q: 'do you have anything without caffeine?',
        a: 'genmaicha and a seasonal herbal pot, both decaf-ish rather than decaf. ask us and we will point you at the gentlest thing on the counter.',
      },
      {
        q: 'can i buy matcha to take home?',
        a: 'yes — the same 30g tin we use behind the bar, plus whisks, sifters and bowls from the potters we host at pop-ups.',
      },
      {
        q: 'are there allergens i should know about?',
        a: 'the pastries come from [bakery name] and contain gluten, egg and nuts; they are made in a kitchen that handles all three. tell us what you are avoiding and we will read you the list.',
      },
    ],
  },
  {
    name: 'clubs & events',
    items: [
      {
        q: 'how do i join the run club?',
        a: 'sundays at 10:00, meet at the door. 5k, slow on purpose, no sign-up and no fee. an iced matcha afterwards comes with it.',
      },
      {
        q: 'and the chess club?',
        a: 'thursdays from 18:00. boards are here, all levels are welcome, and nobody minds explaining. no entry fee.',
      },
      {
        q: 'where do you announce things?',
        a: 'instagram first, then the newsletter — one email a month, events first. the coming up list on this site is the same calendar.',
      },
      {
        q: 'can i host something here?',
        a: 'yes. workshops, pop-ups, collabs and private gatherings all live on the book us page, with what each one costs and how much notice we need.',
      },
    ],
  },
];
