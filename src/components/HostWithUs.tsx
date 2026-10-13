import Image from 'next/image';
import { HOST_PHOTOS } from '@/content/photos';
import { SITE } from '@/content/site';

const TAGS = ['team workshops', 'brand pop-ups', 'food collabs', 'private gatherings'];

/** The inquiry pitch — the one place the sans goes display. */
export default function HostWithUs() {
  const [workshop, popup] = HOST_PHOTOS;

  return (
    <section
      id="host"
      className="bg-espresso px-[var(--section-x)] py-[clamp(80px,10vw,140px)] text-beige"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-14">
        <div>
          <div data-reveal className="t-mono-eyebrow text-matcha-light">
            for teams, brands &amp; bakeries
          </div>
          <h2 data-reveal className="t-headline-bring mt-4">
            Bring
            <br />
            your
            <br />
            people.
          </h2>
          <p data-reveal className="t-body m-0 mt-7 max-w-[420px] text-on-dark-400">
            Book a private matcha workshop, take over the space for a pop-up, or cook up a collab
            with us. We bring the whisks, the playlist and the warm welcome.
          </p>
          <div data-reveal className="mt-7 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span key={t} className="pill pill-tag">
                {t}
              </span>
            ))}
          </div>
          <a data-reveal href={`mailto:${SITE.email}`} className="pill pill-cta t-cta-label mt-9">
            send an inquiry →
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
    </section>
  );
}
