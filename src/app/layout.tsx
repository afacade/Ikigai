import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import MotionRoot from '@/components/MotionRoot';
import Nav from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

/** Variable, with the width axis — the book us headline needs wdth 125%. */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

/**
 * Shippori Mincho, cut to the nine glyphs this site actually sets in it:
 * いらっしゃい and 生き甲斐. 2.5 KB.
 *
 * Google's metadata declares no `japanese` subset for this family, so
 * next/font/google can only fetch latin (which drops the kana outright) or the
 * whole unsubsetted family — about two thousand files, which stalls the build
 * for over ten minutes on a cold cache and would do the same on every CI run.
 * See src/fonts/README.md for how to regenerate the subset if the copy changes.
 */
const shipporiMincho = localFont({
  src: '../fonts/shippori-mincho-subset.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-shippori-mincho',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ikigai tea bar · berlin mitte',
    template: '%s · ikigai tea bar',
  },
  description:
    'a matcha tea bar and a third place at kronenstraße 66, berlin mitte. run club on sundays, chess on thursdays, a seat for you any day.',
  openGraph: {
    title: 'ikigai tea bar · berlin mitte',
    description:
      'ceremonial matcha, whisked to order. run clubs, chess nights and workshops in berlin mitte.',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${archivo.variable} ${shipporiMincho.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <MotionRoot />
        <Nav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
