'use client';

import { clamp, useScrollPass } from '@/lib/scroll';

/**
 * The two page-wide scroll effects: scrubbed reveals and parallax.
 *
 * Both are driven by position rather than triggered once, so scrolling back up
 * plays them backwards. Mounted once in the layout; it renders nothing.
 */
const offsets = new WeakMap<Element, number>();

export default function MotionRoot() {
  useScrollPass((_vw, vh) => {
    document.querySelectorAll<HTMLElement>('[data-speed]').forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      const centre = r.top + r.height / 2 - vh / 2;
      const speed = parseFloat(el.dataset.speed ?? '0');
      el.style.transform = `translate3d(0, ${(-centre * speed).toFixed(1)}px, 0)`;
    });

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      // Measure in untransformed space by subtracting the offset we last wrote.
      const top = el.getBoundingClientRect().top - (offsets.get(el) ?? 0);
      const p = clamp((vh - top) / (vh * 0.28), 0, 1);
      const ty = (1 - p) * 36;
      offsets.set(el, ty);
      el.style.opacity = String(p);
      el.style.transform = `translateY(${ty.toFixed(1)}px)`;
    });
  });

  return null;
}
