import Link from 'next/link';
import { HOURS } from '@/content/hours';
import { SITE } from '@/content/site';

/**
 * The footer on every page. The client's four categories leave no room for
 * "visit", so the address, the hours and the way in live down here on every
 * page instead, with the fuller visit block kept for the home page.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-cream px-[var(--section-x-narrow)] pb-6 pt-[clamp(56px,7vw,96px)] text-matcha-deep">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-10 gap-y-12 border-t border-[var(--hairline-cream)] pt-[clamp(40px,5vw,64px)]">
        <div>
          <div className="t-wordmark-md">ikigai</div>
          <div className="t-eyebrow mt-2">tea bar</div>
        </div>

        <address className="t-body-sm not-italic">
          {SITE.street}
          <br />
          {SITE.city}
          <br />
          <a
            href={SITE.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block underline [text-underline-offset:4px] hover:text-matcha"
          >
            directions
          </a>
        </address>

        <dl className="t-body-sm m-0 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 self-start">
          {HOURS.map((h) => (
            <div key={h.days} className="col-span-2 grid grid-cols-subgrid">
              <dt>{h.days}</dt>
              <dd className="m-0">{h.hours}</dd>
            </div>
          ))}
        </dl>

        <div className="t-body-sm flex flex-col items-start gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="underline [text-underline-offset:4px] hover:text-matcha"
          >
            {SITE.instagramHandle}
          </a>
          <a
            href={SITE.wolt}
            target="_blank"
            rel="noreferrer"
            className="underline [text-underline-offset:4px] hover:text-matcha"
          >
            order on wolt
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="underline [text-underline-offset:4px] hover:text-matcha"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="t-footer-label mx-auto mt-[clamp(40px,5vw,64px)] flex max-w-[1400px] flex-wrap justify-between gap-3 border-t border-[var(--hairline-cream-soft)] pt-6">
        <span>© {new Date().getFullYear()} ikigai tea bar</span>
        <span className="flex gap-3">
          {/* Both are legally required in Germany and stay in normal case. */}
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
