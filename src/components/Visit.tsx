import Image from 'next/image';
import Link from 'next/link';
import { HOURS } from '@/content/hours';
import { VISIT_PHOTO } from '@/content/photos';
import { SITE } from '@/content/site';
import Newsletter from './Newsletter';

/** Where to find us, the hours, the newsletter and the footer bar. */
export default function Visit() {
  return (
    <footer id="visit" className="bg-cream text-matcha-deep">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        <div className="relative min-h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            {/* Overscanned ±12% so the parallax never exposes an edge. */}
            <div data-speed="0.12" className="absolute inset-x-0 -bottom-[12%] -top-[12%]">
              <Image
                src={VISIT_PHOTO.src}
                alt={VISIT_PHOTO.alt}
                fill
                sizes="(max-width: 840px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-[var(--column-x)] py-[clamp(72px,9vw,140px)]">
          <div data-reveal className="t-wordmark-md">
            ikigai
          </div>
          <h2 data-reveal className="t-h2-visit mt-7">
            More than a café,
            <br />
            <span className="italic">a place to belong.</span>
          </h2>

          <div data-reveal className="t-eyebrow mt-12">
            Where to find us
          </div>
          <p data-reveal className="t-body-visit m-0 mt-[18px] max-w-[460px]">
            A few minutes from Stadtmitte. Walk in any day of the week — no reservation, no rush.
          </p>

          <div data-reveal className="t-editorial mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={SITE.maps}
              target="_blank"
              rel="noreferrer"
              className="text-matcha-deep underline [text-underline-offset:6px] hover:text-matcha"
            >
              Directions
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-matcha-deep underline [text-underline-offset:6px] hover:text-matcha"
            >
              Instagram
            </a>
          </div>

          <div
            data-reveal
            className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7"
          >
            <address className="t-editorial not-italic">
              <span className="italic">
                {SITE.street}
                <br />
                {SITE.city}
              </span>
            </address>
            <dl className="t-body-sm m-0 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1">
              {HOURS.map((h) => (
                <div key={h.days} className="col-span-2 grid grid-cols-subgrid">
                  <dt>{h.days}</dt>
                  <dd className="m-0">{h.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Newsletter />
        </div>
      </div>

      <div className="t-footer-label flex flex-wrap justify-between gap-3 border-t border-[var(--hairline-cream-soft)] px-[var(--section-x-narrow)] py-6">
        <span>© {new Date().getFullYear()} ikigai tea bar</span>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:text-matcha"
        >
          {SITE.instagramHandle}
        </a>
        <span className="flex gap-3">
          <Link href="/imprint" className="hover:text-matcha">
            Imprint
          </Link>
          <span aria-hidden>·</span>
          <Link href="/privacy" className="hover:text-matcha">
            Privacy
          </Link>
        </span>
      </div>
    </footer>
  );
}
