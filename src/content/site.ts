/**
 * Single place for the details the client still has to confirm.
 *
 * Copy is lower case throughout, per the client's note of 27 Oct. The imprint
 * and privacy pages are the exception and stay in normal case: they are legal
 * text, and German nouns are capitalised.
 */
export const SITE = {
  name: 'ikigai',
  fullName: 'ikigai tea bar',
  tagline: 'a matcha tea bar and a third place in berlin mitte.',
  street: 'kronenstraße 66',
  city: '10117 berlin',
  /** Normal case, for the imprint and privacy pages only. */
  legalStreet: 'Kronenstraße 66',
  legalCity: '10117 Berlin',
  /** Placeholder address — confirm with the client. */
  email: 'hello@ikigai-teabar.de',
  /** Booking enquiries. Same inbox until the client says otherwise. */
  bookingEmail: 'hello@ikigai-teabar.de',
  instagram: 'https://www.instagram.com/ikigai.teabar/',
  instagramHandle: '@ikigai.teabar',
  maps: 'https://maps.google.com/?q=Kronenstra%C3%9Fe+66+10117+Berlin',
  /**
   * UNVERIFIED. This is Wolt's standard venue URL shape, not a listing anyone
   * has opened. Replace it with the real link from the client's Wolt dashboard
   * before this ships — a wrong slug here points customers at another venue.
   */
  wolt: 'https://wolt.com/en/deu/berlin/restaurant/ikigai-tea-bar',
  /** Placeholder delivery zone — confirm against the actual Wolt radius. */
  woltAreas: 'mitte, prenzlauer berg and kreuzberg',
} as const;
