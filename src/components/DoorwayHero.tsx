'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { DOORWAY } from '@/content/photos';
import { clamp, easeInOutQuad, useScrollPass } from '@/lib/scroll';

/**
 * The doorway hero: 280vh of scroll, a sticky viewport, and an arch-shaped
 * clip that grows into a full-bleed photograph.
 *
 * At p = 0 the clip is a bottom-centred arch whose top radius is exactly half
 * its width — a semicircle. At p = 1 it is the whole viewport, square. The
 * inline clip-path below is that start state, so the first paint is already
 * right before the scroll pass has run once.
 */
export default function DoorwayHero() {
  const hero = useRef<HTMLElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const late = useRef<HTMLDivElement>(null);

  useScrollPass((vw, vh) => {
    const el = hero.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
    const e = easeInOutQuad(p);

    if (img.current) {
      const w0 = Math.min(440, vw * 0.7);
      const h0 = Math.min(600, vh * 0.72);
      const w = w0 + (vw - w0) * e;
      const h = h0 + (vh - h0) * e;
      const rad = (w0 / 2) * (1 - e);
      const side = (vw - w) / 2;
      const top = vh - h;
      img.current.style.clipPath = `inset(${top.toFixed(1)}px ${side.toFixed(1)}px 0px ${side.toFixed(1)}px round ${rad.toFixed(1)}px ${rad.toFixed(1)}px 0px 0px)`;
    }

    const fadeOut = String(1 - clamp(p * 2.2, 0, 1));
    el.querySelectorAll<HTMLElement>('[data-fade]').forEach((node) => {
      node.style.opacity = fadeOut;
    });

    if (late.current) {
      const q = clamp((p - 0.62) / 0.28, 0, 1);
      late.current.style.opacity = String(q);
      late.current.style.transform = `translateY(${((1 - q) * 20).toFixed(1)}px)`;
    }
  });

  return (
    <header ref={hero} id="top" className="hero relative h-[280vh] bg-paper text-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={img}
          className="hero-img absolute inset-0"
          style={{
            clipPath:
              'inset(28% calc(50% - 220px) 0 calc(50% - 220px) round 220px 220px 0 0)',
          }}
        >
          <Image
            src={DOORWAY.src}
            alt={DOORWAY.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          data-fade
          className="hero-fade t-hero pointer-events-none absolute left-[clamp(20px,5vw,64px)] top-[clamp(170px,32vh,280px)]"
        >
          come
          <br />
          <span className="italic text-matcha">in.</span>
        </div>

        <div
          data-fade
          lang="ja"
          className="hero-fade t-jp-vertical pointer-events-none absolute right-[clamp(20px,5vw,72px)] top-[clamp(110px,18vh,150px)] text-wood"
        >
          いらっしゃい
        </div>

        <p
          data-fade
          className="hero-fade t-body-sm pointer-events-none absolute bottom-14 right-[clamp(20px,5vw,64px)] m-0 max-w-[270px]"
        >
          A matcha tea bar and a third place in Berlin Mitte. Run club on Sundays, chess on
          Thursdays, a seat for you any day.
        </p>

        <div
          ref={late}
          className="hero-late t-late pointer-events-none absolute bottom-[clamp(40px,9vh,90px)] left-[clamp(20px,5vw,64px)] text-cream opacity-0"
        >
          Welcome in.
          <br />
          <span className="italic">Stay a while.</span>
        </div>
      </div>
    </header>
  );
}
