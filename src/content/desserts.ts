/**
 * Dessert / cake-and-drink gallery content. The photos are the client's own
 * images (`public/images/dessert-*.jpg`, drawn from the shoot's cake, drink and
 * food series). Ordered for contrast — dark next to bright, close next to wide,
 * sweet next to savory. No dish names or prices by request: this block is
 * pictures plus a line of text. The copy is PLACEHOLDER — confirm wording
 * before launch. See CONTENT-TO-CONFIRM.md.
 */
export interface GalleryPhoto {
  src: string;
  alt: string;
}

export const DESSERTS_EYEBROW = 'cake, drinks, and a little food';
export const DESSERTS_HEADING = 'a little something sweet';
export const DESSERTS_INTRO =
  'baked in-house and whisked to order — cakes, cold and hot matcha, and a few savoury things, here until they’re gone.';

export const DESSERT_GALLERY: GalleryPhoto[] = [
  { src: '/images/dessert-1.jpg', alt: 'a slice of matcha crepe cake on a wooden board' },
  { src: '/images/dessert-8.jpg', alt: 'a pink-and-green layered iced matcha seen from above' },
  { src: '/images/dessert-7.jpg', alt: 'a hot matcha latte in a dark cup beside an iced one' },
  { src: '/images/dessert-3.jpg', alt: 'a whole matcha cake with a glossy green top' },
  { src: '/images/dessert-9.jpg', alt: 'two black-rice onigiri on a plate' },
  { src: '/images/dessert-2.jpg', alt: 'a matcha latte topped with foam and black sesame' },
  { src: '/images/dessert-10.jpg', alt: 'a scoop of ice cream with mango and matcha cake' },
  { src: '/images/dessert-4.jpg', alt: 'iced matcha drinks in ikigai cups on a tray' },
  { src: '/images/dessert-11.jpg', alt: 'bowls of matcha powder, dried flowers and a whisk' },
  { src: '/images/dessert-5.jpg', alt: 'a cake slice served with a scoop of ice cream' },
  { src: '/images/dessert-6.jpg', alt: 'a matcha latte in a glass with sesame foam' },
];
