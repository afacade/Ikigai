'use client';

import { clamp, easeOutCubic, useScrollPass } from '@/lib/scroll';

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
      // Scale needs no such correction: the start state pins transform-origin
      // to the top edge, so scaling never moves the top we measure.
      const top = el.getBoundingClientRect().top - (offsets.get(el) ?? 0);
      // data-reveal carries an optional stagger step, so siblings in a grid or
      // a list cascade instead of arriving together. Bare data-reveal is 0.
      const step = parseFloat(el.dataset.reveal || '0') || 0;
      const p = clamp((vh - top - step * vh * 0.045) / (vh * 0.28), 0, 1);
      const e = easeOutCubic(p);
      const ty = (1 - e) * 36;
      offsets.set(el, ty);
      el.style.opacity = String(e);
      // 0.985 → 1 exactly at e = 1, so text lands on whole pixels.
      el.style.transform = `translateY(${ty.toFixed(1)}px) scale(${(0.985 + 0.015 * e).toFixed(4)})`;
    });
  });

  return null;
}
