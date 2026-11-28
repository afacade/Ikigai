'use client';

import { useEffect, useState } from 'react';
import Image from '@/components/Img';
import { HOURS } from '@/content/hours';
import { DOORWAY } from '@/content/photos';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

/**
 * Today's row from HOURS, by the bar's own clock rather than the visitor's.
 * A row's `days` is either one day ('sun') or a range ('mon – thu').
 */
function hoursToday(): string | null {
  const short = new Intl.DateTimeFormat('en-GB', { weekday: 'short', timeZone: 'Europe/Berlin' })
    .format(new Date())
    .toLowerCase();
  const today = DAYS.indexOf(short);
  for (const row of HOURS) {
    const [from, to = from] = row.days.split(/\s*[–-]\s*/).map((d) => DAYS.indexOf(d.trim()));
    if (from < 0 || to < 0) continue;
    const inRange = from <= to ? today >= from && today <= to : today >= from || today <= to;
    if (inRange) return row.hours;
  }
  return null;
}

/**
 * The shop window hero: the bar's interior seen through a framed front window,
 * the name lettered across the glass like gold-leaf signage, and a small
 * hanging sign with today's opening hours.
 *
 * It has no `#top`, so the nav sits in its scrolled (paper) state from the
 * start — the window begins below it.
 */
export default function ShopWindowHero() {
  // Filled in after mount: the static export cannot know what day it is.
  const [hours, setHours] = useState<string | null>(null);
  useEffect(() => setHours(hoursToday()), []);

  return (
    <header className="h-[100svh] min-h-[540px] px-[var(--section-x-narrow)] pb-[clamp(16px,3vh,32px)] pt-[88px] text-ink">
      <div className="relative h-full overflow-hidden rounded-[22px] border-[8px] border-espresso sm:border-[10px]">
        <Image
          src={DOORWAY.src}
          alt={DOORWAY.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(20,14,10,0.32)]" />
        {/* A darker band down the top edge so the hanging sign, its line and the
            nav always sit on shadow rather than on a pale ceiling. */}
        <div className="absolute inset-x-0 top-0 h-[clamp(140px,22vh,240px)] bg-gradient-to-b from-[rgba(20,14,10,0.5)] to-transparent" />

        <h1
          className="absolute inset-0 m-0 flex flex-col items-center justify-center text-center font-normal text-[#e6c98a]"
          style={{
            textShadow:
              '0 1px 0 rgba(60, 40, 10, 0.55), 0 0 24px rgba(20, 14, 10, 0.5), 0 2px 52px rgba(20, 14, 10, 0.6)',
          }}
        >
          <span className="hero-settle font-serif text-[clamp(72px,13vw,190px)] leading-[0.9]">
            ikigai
          </span>
          <span className="hero-settle mt-3 text-[clamp(10px,1.3vw,16px)] uppercase tracking-[0.5em] [animation-delay:160ms] [text-indent:0.5em]">
            tea bar · berlin mitte
          </span>
        </h1>

        <div
          className={`absolute left-[7%] top-0 flex flex-col items-center transition-[opacity,transform] duration-700 [transition-delay:300ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:left-[6%] motion-reduce:transition-none motion-reduce:[transition-delay:0ms] ${hours ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 motion-reduce:translate-y-0'}`}
        >
          <div className="h-8 w-px bg-cream/85 sm:h-10" />
          <div className="-rotate-2 rounded-[5px] bg-cream px-5 py-3 text-center shadow-[0_16px_32px_-12px_rgba(0,0,0,0.8)] ring-1 ring-espresso/15">
            <div className="t-eyebrow text-espresso">open today</div>
            <div className="mt-1 font-serif text-[26px] leading-none text-ink">
              {hours ?? '00:00 – 00:00'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
