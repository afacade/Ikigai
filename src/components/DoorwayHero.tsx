'use client';

import Image from '@/components/Img';
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
      // On a phone the arch has to leave the top of the screen free: the
      // headline and the lead sit above it on the paper, not over the picture.
      // The third term is what keeps that true on a short screen, where 46vh
      // alone would still reach up into the lead: the copy runs to about 350px
      // whatever the viewport height is, so the arch gives way instead.
      const narrow = vw < 640;
      const w0 = Math.min(440, vw * (narrow ? 0.78 : 0.7));
      const h0 = narrow
        ? Math.min(600, vh * 0.46, Math.max(160, vh - 380))
        : Math.min(600, vh * 0.72);
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
        {/* The p = 0 arch for the first paint lives in globals.css, where a
            media query can mirror the two w0/h0 pairs above. */}
        <div ref={img} className="hero-img absolute inset-0">
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
          className="hero-fade t-hero pointer-events-none absolute left-[clamp(20px,5vw,64px)] top-[clamp(88px,13vh,170px)] sm:top-[clamp(170px,32vh,280px)]"
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
          className="hero-fade t-body-sm pointer-events-none absolute left-[clamp(20px,5vw,64px)] top-[clamp(240px,32vh,320px)] m-0 max-w-[min(280px,62vw)] sm:bottom-14 sm:left-auto sm:right-[clamp(20px,5vw,64px)] sm:top-auto sm:max-w-[270px]"
        >
          we are a matcha tea bar in berlin mitte. there is run club on sundays and chess on
          thursdays.
        </p>

        <div
          ref={late}
          className="hero-late t-late pointer-events-none absolute bottom-[clamp(40px,9vh,90px)] left-[clamp(20px,5vw,64px)] text-cream opacity-0"
        >
          welcome in.
          <br />
          <span className="italic">stay a while.</span>
        </div>
      </div>
    </header>
  );
}
