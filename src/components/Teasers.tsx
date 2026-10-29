import Image from 'next/image';
import Link from 'next/link';
import { EVENTS } from '@/content/events';
import { DRINKS_PHOTO, HOST_PHOTOS } from '@/content/photos';

/**
 * Home page: three doors into the category pages, so the first screen does not
 * have to carry the whole site. The client's note — everything on one page is
 * too much to navigate.
 */
const TEASERS = [
  {
    href: '/our-matcha',
    label: 'our matcha',
    line: 'one farm in uji, stone-ground, whisked by hand to order.',
    photo: DRINKS_PHOTO,
  },
  {
    href: '/events',
    label: 'events',
    line: 'workshops, run club, chess nights and the odd pop-up.',
    photo: { src: EVENTS[1].src, alt: EVENTS[1].alt },
  },
  {
    href: '/book-us',
    label: 'book us',
    line: 'take the room for a workshop, a launch or a long table.',
    photo: HOST_PHOTOS[0],
  },
];

export default function Teasers() {
  return (
    <section className="bg-cream px-[var(--section-x)] pb-[clamp(80px,10vw,140px)] text-matcha-deep">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-8 gap-y-14">
        {TEASERS.map((t) => (
          <Link key={t.href} href={t.href} data-reveal className="group no-underline">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={t.photo.src}
                alt={t.photo.alt}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="t-card-title">{t.label}</h2>
              <span aria-hidden className="t-body text-matcha">
                →
              </span>
            </div>
            <p className="t-body-sm m-0 mt-2 max-w-[34ch] text-matcha-text-2">{t.line}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
