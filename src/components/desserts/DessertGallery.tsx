import Image from 'next/image';
import {
  DESSERT_GALLERY,
  DESSERTS_EYEBROW,
  DESSERTS_HEADING,
  DESSERTS_INTRO,
} from '@/content/desserts';

/**
 * Cake-and-drink gallery: pictures of the sweets and matcha with a line of
 * copy, no dish names or prices. A masonry-ish grid gives the photos some
 * rhythm; two tiles run taller than the rest.
 */
const SPANS = [
  'md:row-span-3',
  'md:row-span-2',
  'md:row-span-2',
  'md:row-span-2',
  'md:row-span-3',
  'md:row-span-2',
  'md:row-span-2',
  'md:row-span-2',
  'md:row-span-3',
  'md:row-span-2',
  'md:row-span-2',
];

export default function DessertGallery() {
  return (
    <section className="bg-cream px-[var(--section-x)] py-[clamp(70px,9vw,120px)] text-matcha-deep">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[640px]">
          <p className="t-eyebrow">{DESSERTS_EYEBROW}</p>
          <h2 className="t-h2-upcoming mt-4">{DESSERTS_HEADING}</h2>
          <p className="t-body-lg m-0 mt-6 text-matcha-text-2">{DESSERTS_INTRO}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 [grid-auto-rows:150px] md:mt-16 md:grid-cols-3 md:[grid-auto-rows:140px]">
          {DESSERT_GALLERY.map((p, i) => (
            <div
              key={p.src}
              data-reveal
              className={`relative row-span-2 overflow-hidden rounded-xl bg-window-body ${SPANS[i] ?? ''}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 700px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
