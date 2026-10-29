import Image from 'next/image';
import {
  BOOKING_CTA,
  BOOKING_FORMATS,
  BOOKING_INTRO,
  BOOKING_MAIL_BODY,
  BOOKING_MAIL_SUBJECT,
  BOOKING_NOTES,
} from '@/content/booking';
import { HOST_PHOTOS } from '@/content/photos';
import { SITE } from '@/content/site';

const mailto = `mailto:${SITE.bookingEmail}?subject=${encodeURIComponent(
  BOOKING_MAIL_SUBJECT,
)}&body=${encodeURIComponent(BOOKING_MAIL_BODY)}`;

/** The book us page: what can be booked, what it costs, how to ask. */
export default function BookUs() {
  const [workshop, popup] = HOST_PHOTOS;

  return (
    <section className="bg-espresso px-[var(--section-x)] pb-[clamp(80px,10vw,140px)] text-beige">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-14">
          <div>
            <h2 data-reveal className="t-headline-bring">
              bring
              <br />
              your
              <br />
              people.
            </h2>
            <p data-reveal className="t-body m-0 mt-7 max-w-[420px] text-on-dark-400">
              {BOOKING_INTRO}
            </p>
            <a data-reveal href={mailto} className="pill pill-cta t-cta-label mt-9">
              {BOOKING_CTA}
            </a>
          </div>

          <div className="relative aspect-square w-full max-w-[560px] justify-self-center">
            <div className="absolute left-0 top-[6%] w-[62%] -rotate-[4deg] overflow-hidden rounded-[10px] bg-window-body shadow-[var(--shadow-window-host)]">
              <div className="t-mono-hint bg-window-chrome px-2.5 py-[7px] text-ink">
                {workshop.file}
              </div>
              <div className="relative" style={{ aspectRatio: workshop.ratio }}>
                <Image
                  src={workshop.src}
                  alt={workshop.alt}
                  fill
                  sizes="(max-width: 900px) 60vw, 350px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-[4%] right-0 w-[56%] rotate-[5deg] overflow-hidden rounded-[10px] bg-window-body shadow-[var(--shadow-window-host)]">
              <div className="t-mono-hint bg-window-chrome px-2.5 py-[7px] text-ink">
                {popup.file}
              </div>
              <div className="relative" style={{ aspectRatio: popup.ratio }}>
                <Image
                  src={popup.src}
                  alt={popup.alt}
                  fill
                  sizes="(max-width: 900px) 55vw, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(64px,8vw,120px)]">
          {BOOKING_FORMATS.map((f) => (
            <div
              data-reveal
              key={f.id}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-10 gap-y-5 border-t border-[var(--hairline-dark)] py-[clamp(26px,3vw,40px)]"
            >
              <div>
                <h3 className="t-item-name m-0">{f.name}</h3>
                <p className="t-body-sm m-0 mt-3 max-w-[340px] text-on-dark-400">{f.line}</p>
                <div className="t-mono-meta mt-5 flex flex-wrap gap-x-5 gap-y-1 text-matcha-light">
                  <span>{f.capacity}</span>
                  <span>{f.duration}</span>
                  <span>{f.price}</span>
                </div>
              </div>
              <ul className="t-body-sm m-0 list-none p-0 text-on-dark-400">
                {f.includes.map((i) => (
                  <li key={i} className="border-b border-[var(--hairline-dark)] py-2 last:border-0">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul
          data-reveal
          className="t-caption m-0 mt-[clamp(40px,5vw,72px)] grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6 p-0 text-on-dark-400"
        >
          {BOOKING_NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
