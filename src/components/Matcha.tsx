import Image from 'next/image';
import DessertGallery from '@/components/desserts/DessertGallery';
import { DELIVERY, MATCHA_BLOCKS, MATCHA_INTRO } from '@/content/matcha';
import { DRINKS_PHOTO } from '@/content/photos';
import { SITE } from '@/content/site';

/**
 * The matcha page.
 *
 * Keeps the handoff's sticky-photo-beside-a-list layout, but the list is the
 * story of the tea rather than a price list: the client asked for the menu to
 * come off the site and for wolt to carry ordering instead.
 */
export default function Matcha() {
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] bg-cream text-matcha-deep">
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
          <p data-reveal className="t-body-lg m-0 max-w-[520px]">
            {MATCHA_INTRO}
          </p>

          <div className="mt-14">
            {MATCHA_BLOCKS.map((b) => (
              <div
                data-reveal
                key={b.label}
                className="border-t border-[var(--hairline-cream)] py-[26px]"
              >
                <div className="t-eyebrow">{b.label}</div>
                <h2 className="t-item-name mt-3">{b.heading}</h2>
                <p className="t-body-sm m-0 mt-3 max-w-[460px] text-matcha-text-2">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DessertGallery />

      <section className="bg-beige px-[var(--section-x)] py-[clamp(80px,10vw,130px)] text-ink">
        <div data-reveal className="mx-auto max-w-[1100px]">
          <div className="t-eyebrow text-wood">{DELIVERY.label}</div>
          <h2 className="t-h2-upcoming mt-4">{DELIVERY.heading}</h2>
          <p className="t-body m-0 mt-6 max-w-[520px] text-wood-2">{DELIVERY.body}</p>
          <a
            href={SITE.wolt}
            target="_blank"
            rel="noreferrer"
            className="pill pill-outline-ink mt-9"
          >
            {DELIVERY.cta}
          </a>
        </div>
      </section>
    </>
  );
}
