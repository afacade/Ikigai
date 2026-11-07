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
        a: 'no, you can just walk in, any day of the week. the only thing we book out is the whole space, and that lives on the book us page.',
      },
      {
        q: 'can i work from here?',
        a: 'mornings, yes, and the wifi is free. ask at the bar for the password. we do ask for laptops away after 17:00 on weekdays and all day sunday, because that’s when the room gets loud. which is rather the point of it.',
      },
      {
        q: 'how do i pay?',
        a: 'you can pay by card or phone from the first euro. we don’t take cash.',
      },
      {
        q: 'is the space step-free?',
        a: 'there’s one step at the door. past it, the room and the toilet are level. say hello and we’ll give you a hand with it.',
      },
      {
        q: 'can i bring my dog?',
        a: 'yes, if they’re calm in a full room. there’s water by the door.',
      },
    ],
  },
  {
    name: 'the tea',
    items: [
      {
        q: 'what makes it ceremonial grade?',
        a: 'the leaves are first harvest from one farm in uji, shaded before picking and ground slowly. it’s sweeter and less astringent than culinary grade, which is why we whisk it rather than bake with it.',
      },
      {
        q: 'how much caffeine is in a matcha?',
        a: 'a latte sits around 60–70mg, so about a single espresso, though it comes on more gently and lasts longer. hojicha is closer to 20mg.',
      },
      {
        q: 'what milk do you have?',
        a: 'oat is the default, and whole or almond cost nothing extra if you ask.',
      },
      {
        q: 'do you have anything without caffeine?',
        a: 'there is genmaicha and a seasonal herbal pot, though both are decaf-ish rather than properly decaf. ask us and we’ll point you at the gentlest thing on the counter.',
      },
      {
        q: 'can i buy matcha to take home?',
        a: 'yes, we sell the same 30g tin we use behind the bar, along with whisks, sifters and bowls from the potters we host at pop-ups.',
      },
      {
        q: 'are there allergens i should know about?',
        a: 'the pastries come from [bakery name] and contain gluten, egg and nuts. they’re made in a kitchen that handles all three. tell us what you’re avoiding and we’ll read you the list.',
      },
    ],
  },
  {
    name: 'clubs & events',
    items: [
      {
        q: 'how do i join the run club?',
        a: 'we meet at the door on sundays at 10:00 and run 5k, deliberately slowly. there is no sign-up and no fee, and an iced matcha afterwards comes with it.',
      },
      {
        q: 'and the chess club?',
        a: 'we start at 18:00 on thursdays and the boards are already out. all levels turn up, and nobody minds explaining the rules. there is no entry fee.',
      },
      {
        q: 'where do you announce things?',
        a: 'instagram first, then the newsletter, which is one email a month. the coming up list on this site is the same calendar.',
      },
      {
        q: 'can i host something here?',
        a: 'yes. workshops, pop-ups, collabs and private gatherings all live on the book us page, with what each one costs and how much notice we need.',
      },
    ],
  },
];
