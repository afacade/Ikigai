'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CATEGORIES, EVENTS } from '@/content/events';
import type { EventCategory } from '@/content/types';
import Board from './Board';
import EventCard from './EventCard';
import EventModal from './EventModal';

const LIST_BELOW = 760;

/**
 * Measuring has to happen before the browser paints, or a phone shows a frame
 * of the board — which at that width is a pile of files cut off by the board's
 * own overflow — before the grid replaces it. On the server there is nothing to
 * measure and useLayoutEffect would warn, so fall back to useEffect there.
 */
const useMeasureEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * The event portfolio.
 *
 * Two views of one data set: a draggable desktop board, and a filtered card
 * grid. The grid is forced below 760px of *container* width — the board's room
 * is what matters, not the viewport's.
 */
export default function Moments() {
  const wrap = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<'desktop' | 'list'>('desktop');
  const [narrow, setNarrow] = useState(false);
  const [filter, setFilter] = useState<EventCategory | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useMeasureEffect(() => {
    const el = wrap.current;
    if (!el) return;

    // Read the width directly rather than waiting to be told it. A
    // ResizeObserver only delivers at the end of a rendered frame, and a page
    // that is not being rendered — a background tab, a hidden panel — never
    // gets one, which used to leave the board up at any width.
    const measure = () => setNarrow(el.getBoundingClientRect().width < LIST_BELOW);
    measure();

    // The observer is still what catches the container changing width without
    // the window doing so; the resize listener covers it while frames are scarce.
    const ro =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    ro?.observe(el);
    window.addEventListener('resize', measure);

    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const desktop = view === 'desktop' && !narrow;
  const open = EVENTS.find((e) => e.id === openId) ?? null;
  const listed = filter ? EVENTS.filter((e) => e.cat === filter) : EVENTS;

  const toggleFolder = (cat: EventCategory) =>
    setFilter((current) => (current === cat ? null : cat));

  return (
    <section
      id="moments"
      className="bg-terracotta px-[var(--section-x-narrow)] py-[clamp(80px,10vw,130px)] text-on-dark-100"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="t-mono-eyebrow text-on-dark-300">
              the archive · {EVENTS.length} files
            </div>
            <h2 className="t-h2-moments mt-3">
              things we&rsquo;ve <span className="italic">hosted</span>
            </h2>
          </div>

          <div
            role="group"
            aria-label="Archive view"
            className="flex gap-1 rounded-full border-[1.5px] border-on-dark-100 p-1"
          >
            <button
              type="button"
              aria-pressed={desktop}
              onClick={() => setView('desktop')}
              disabled={narrow}
              className={`t-caption cursor-pointer rounded-full px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                desktop ? 'bg-on-dark-100 text-ink' : 'text-on-dark-100'
              }`}
            >
              desktop
            </button>
            <button
              type="button"
              aria-pressed={!desktop}
              onClick={() => setView('list')}
              className={`t-caption cursor-pointer rounded-full px-4 py-2 ${
                !desktop ? 'bg-on-dark-100 text-ink' : 'text-on-dark-100'
              }`}
            >
              all events
            </button>
          </div>
        </div>

        <div ref={wrap}>
          {desktop ? (
            <Board filter={filter} onFilter={toggleFolder} onOpen={setOpenId} />
          ) : (
            <div>
              <div className="mb-8 flex flex-wrap gap-2">
                <button
                  type="button"
                  aria-pressed={filter === null}
                  onClick={() => setFilter(null)}
                  className="pill pill-chip"
                >
                  all
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={filter === cat}
                    onClick={() => setFilter(cat)}
                    className="pill pill-chip"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-x-5 gap-y-10">
                {listed.map((event) => (
                  <EventCard key={event.id} event={event} onOpen={() => setOpenId(event.id)} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {open && <EventModal event={open} onClose={() => setOpenId(null)} />}
    </section>
  );
}
