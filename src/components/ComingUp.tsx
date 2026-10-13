import { UPCOMING } from '@/content/upcoming';

/**
 * The only forward-looking section. With nothing in the calendar it renders
 * nothing — better than an empty state.
 */
export default function ComingUp() {
  if (UPCOMING.length === 0) return null;

  return (
    <section className="bg-beige px-[var(--section-x)] py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto max-w-[1100px]">
        <h2 data-reveal className="t-h2-upcoming mb-10">
          Coming <span className="italic text-matcha">up</span>
        </h2>

        {UPCOMING.map((u) => (
          <div
            data-reveal
            key={`${u.day}-${u.title}`}
            className="grid grid-cols-[minmax(80px,130px)_minmax(0,1fr)_auto] items-center gap-x-7 gap-y-4 border-t-[1.5px] border-ink py-[26px]"
          >
            <div>
              <span className="t-numeral-day block">{u.day}</span>
              <span className="t-mono-hint mt-1.5 block tracking-[.1em] text-wood">{u.mon}</span>
            </div>
            <div>
              <div className="t-upcoming-title">{u.title}</div>
              <div className="t-caption mt-1.5 text-wood-2">{u.meta}</div>
            </div>
            <a
              href={u.href}
              target="_blank"
              rel="noreferrer"
              className="pill pill-outline-ink"
            >
              save a spot
              <span className="sr-only"> for {u.title}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
