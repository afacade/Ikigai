import Image from 'next/image';
import { DRINKS } from '@/content/drinks';
import { DRINKS_PHOTO } from '@/content/photos';

/** The short menu, beside a photograph that stays put while the list scrolls. */
export default function Drinks() {
  return (
    <section
      id="drinks"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] bg-cream text-matcha-deep"
    >
      <div className="relative min-h-screen">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Image
            src={DRINKS_PHOTO.src}
            alt={DRINKS_PHOTO.alt}
            fill
            sizes="(max-width: 840px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-[var(--column-x)] py-[clamp(80px,10vw,150px)]">
        <div data-reveal className="t-eyebrow">
          What&rsquo;s in the cup
        </div>
        <h2 data-reveal className="t-h2-drinks mt-5">
          Short menu.
          <br />
          <span className="italic">Done properly.</span>
        </h2>

        <div className="mt-14">
          {DRINKS.map((d) => (
            <div
              data-reveal
              key={d.name}
              className="border-t border-[var(--hairline-cream)] py-[26px]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="t-item-name">{d.name}</span>
                <span className="t-price flex-none">{d.price}</span>
              </div>
              <p className="t-body-sm m-0 mt-2 text-matcha-text-2">{d.note}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="t-aside mt-9">
          Full menu &amp; pastries in store.
        </div>
      </div>
    </section>
  );
}
