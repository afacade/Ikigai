/**
 * Section photography. Every entry is a Pexels placeholder under the free
 * licence and must be replaced with the client's own photography before
 * launch — see the handoff's "Assets" section.
 */
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export interface Photo {
  src: string;
  alt: string;
}

export const DOORWAY: Photo = {
  src: pexels(28947779),
  alt: 'The view in through the entrance of the tea bar, warm interior light',
};

/** The five feathered circles, in document order with their parallax speeds. */
export const INTRO_CIRCLES: (Photo & {
  /** left / top as a % of the section. */
  left: string;
  top: string;
  /** The clamp() that sizes the square. */
  size: string;
  speed: number;
})[] = [
  {
    src: pexels(32695045),
    alt: 'Matcha powder close up',
    left: '56%',
    top: '30%',
    size: 'clamp(170px, 26vw, 400px)',
    speed: 0.22,
  },
  {
    src: pexels(7144920),
    alt: 'A bamboo whisk resting on a bowl',
    left: '26%',
    top: '46%',
    size: 'clamp(130px, 19vw, 300px)',
    speed: 0.4,
  },
  {
    src: pexels(17789703),
    alt: 'The run club out on the street',
    left: '5%',
    top: '64%',
    size: 'clamp(150px, 22vw, 340px)',
    speed: 0.12,
  },
  {
    src: pexels(34164459),
    alt: 'The long wooden table',
    left: '43%',
    top: '70%',
    size: 'clamp(130px, 18vw, 290px)',
    speed: 0.3,
  },
  {
    src: pexels(6817705),
    alt: 'Chess pieces mid-game',
    left: '74%',
    top: '62%',
    size: 'clamp(150px, 22vw, 340px)',
    speed: 0.18,
  },
];

export const DRINKS_PHOTO: Photo = {
  src: pexels(32972501),
  alt: 'Matcha being poured over milk',
};

export const VISIT_PHOTO: Photo = {
  src: pexels(28947779),
  alt: 'Inside the tea bar: lanterns, the wooden table, window light',
};

export const HOST_PHOTOS: (Photo & { file: string; ratio: string })[] = [
  {
    src: pexels(5946632),
    alt: 'A team workshop around the table',
    file: 'team_workshop.mov',
    ratio: '4/5',
  },
  {
    src: pexels(8890516),
    alt: 'A brand pop-up set up in the space',
    file: 'popup_setup.jpg',
    ratio: '1/1',
  },
];
