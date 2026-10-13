'use client';

import { useEffect, useRef } from 'react';

/**
 * One scroll pass for the whole page.
 *
 * Every scroll-driven effect on the site registers a callback here. A single
 * passive listener schedules one requestAnimationFrame, and that frame reads
 * the viewport once and lets each pass write transforms straight to its nodes.
 * Scroll position never enters React state — at 280vh of hero that would
 * re-render the page sixty times a second.
 */
export type ScrollPass = (vw: number, vh: number) => void;

const passes = new Set<ScrollPass>();
let frame = 0;
let listening = false;

function runAll() {
  frame = 0;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  passes.forEach((pass) => pass(vw, vh));
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(runAll);
}

function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

/** easeInOutQuad — the hero's easing. */
export const easeInOutQuad = (p: number) =>
  p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

interface Options {
  /**
   * Run even when the visitor asked for reduced motion. For passes that set
   * colour or state rather than movement — the nav's three states, for one.
   */
  ignoreReducedMotion?: boolean;
}

export function useScrollPass(pass: ScrollPass, options: Options = {}) {
  const latest = useRef(pass);
  latest.current = pass;

  const { ignoreReducedMotion = false } = options;

  useEffect(() => {
    if (!ignoreReducedMotion && prefersReducedMotion()) return;

    const run: ScrollPass = (vw, vh) => latest.current(vw, vh);
    passes.add(run);
    listen();
    runAll();
    // Fonts and remote images land after first paint and move things.
    const settle = window.setTimeout(schedule, 400);

    return () => {
      window.clearTimeout(settle);
      passes.delete(run);
      if (passes.size === 0) stopListening();
    };
  }, [ignoreReducedMotion]);
}
