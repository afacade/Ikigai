import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono, Instrument_Serif, Shippori_Mincho } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

/** Variable, with the width axis — the Host headline needs wdth 125%. */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

/**
 * Google's metadata only declares `latin` / `latin-ext` subsets for Shippori
 * Mincho, and a latin-only request drops the kana and kanji this site sets in
 * it. Omitting `subsets` fetches every unicode-range the family publishes —
 * which requires `preload: false`, a fair trade for two short decorative lines.
 */
const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500'],
  preload: false,
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
  title: 'ikigai · matcha tea bar in Berlin Mitte',
  description:
    'A matcha tea bar and a third place at Kronenstraße 66, Berlin Mitte. Run club on Sundays, chess on Thursdays, a seat for you any day.',
  openGraph: {
    title: 'ikigai · matcha tea bar in Berlin Mitte',
    description:
      'Ceremonial matcha, whisked to order. Run clubs, chess nights and workshops in Berlin Mitte.',
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
      <body>{children}</body>
    </html>
  );
}
