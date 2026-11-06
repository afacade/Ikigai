/**
 * Section photography. Most entries are now the client's own images, served
 * from `public/images`. Two subjects — the run club and chess — have no
 * photography yet, so those stay on their Pexels placeholder (the `pexels`
 * helper below) until real media exists. See CONTENT-TO-CONFIRM.md.
 */
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export interface Photo {
  src: string;
  alt: string;
}

export const DOORWAY: Photo = {
  src: '/images/doorway.jpg',
  alt: 'inside the tea bar: plants, the counter and wooden tables in warm light',
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
    src: '/images/circle-matcha.jpg',
    alt: 'a bowl of matcha whisked to a fine foam, seen from above',
    left: '56%',
    top: '30%',
    size: 'clamp(170px, 26vw, 400px)',
    speed: 0.22,
  },
  {
    src: '/images/circle-whisk.jpg',
    alt: 'a bamboo whisk resting on a bowl',
    left: '26%',
    top: '46%',
    size: 'clamp(130px, 19vw, 300px)',
    speed: 0.4,
  },
  {
    // Stock placeholder: no run-club photography exists yet.
    src: pexels(17789703),
    alt: 'the run club out on the street',
    left: '5%',
    top: '64%',
    size: 'clamp(150px, 22vw, 340px)',
    speed: 0.12,
  },
  {
    src: '/images/circle-table.jpg',
    alt: 'the long table at a matcha workshop',
    left: '43%',
    top: '70%',
    size: 'clamp(130px, 18vw, 290px)',
    speed: 0.3,
  },
  {
    // Stock placeholder: no chess photography exists yet.
    src: pexels(6817705),
    alt: 'chess pieces mid-game',
    left: '74%',
    top: '62%',
    size: 'clamp(150px, 22vw, 340px)',
    speed: 0.18,
  },
];

export const DRINKS_PHOTO: Photo = {
  src: '/images/drinks-pour.jpg',
  alt: 'matcha being poured over milk',
};

export const VISIT_PHOTO: Photo = {
  src: '/images/visit.jpg',
  alt: 'inside the tea bar: plants, the counter and wooden tables by the window',
};

export const HOST_PHOTOS: (Photo & { file: string; ratio: string })[] = [
  {
    src: '/images/host-workshop.jpg',
    alt: 'a matcha workshop led around the table',
    file: 'team_workshop.jpg',
    ratio: '4/5',
  },
  {
    src: '/images/host-popup.jpg',
    alt: 'a ceramics pop-up set up in the space',
    file: 'popup_setup.jpg',
    ratio: '1/1',
  },
];
