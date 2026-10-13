'use client';

import { useEffect, useRef, useState } from 'react';
import { clamp, easeInOutQuad, prefersReducedMotion, useScrollPass } from '@/lib/scroll';

const LINKS = [
  { label: 'Drinks', href: '#drinks' },
  { label: 'Moments', href: '#moments' },
  { label: 'Host with us', href: '#host' },
  { label: 'Visit', href: '#visit' },
];

const LEFT = LINKS.slice(0, 2);
const RIGHT = LINKS.slice(2);

/**
 * The fixed nav, in one of three colour states.
 *
 * It reads the hero's rect itself in the shared scroll pass and writes its own
 * styles, so hero progress never has to travel through React.
 *
 * Under 640px the four links collapse into a menu button and a cream sheet —
 * the handoff leaves that undesigned and asks for the minimal version.
 */
export default function Nav() {
  const nav = useRef<HTMLElement>(null);
  const mark = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollPass(
    (_vw, vh) => {
      const el = nav.current;
      if (!el) return;

      const hero = document.getElementById('top');
      const reduced = prefersReducedMotion();
      let past = true;
      let onPhoto = false;

      if (hero) {
        const r = hero.getBoundingClientRect();
        const p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
        past = r.bottom < 90;
        // With reduced motion the photo is full-bleed from the start, so the
        // nav has to be light the whole way down the hero.
        onPhoto = reduced ? !past : easeInOutQuad(p) > 0.6;
      }

      el.style.background = past ? 'var(--nav-scrolled)' : 'transparent';
      el.style.color = past
        ? 'var(--color-matcha-deep)'
        : onPhoto
          ? 'var(--color-cream)'
          : 'var(--color-matcha-deep)';
      el.style.backdropFilter = past ? 'blur(10px)' : 'none';
      el.style.boxShadow = past ? 'var(--shadow-nav)' : 'none';
      if (mark.current) mark.current.style.opacity = past ? '1' : '0';
    },
    { ignoreReducedMotion: true },
  );

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={nav}
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-200 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-5 px-[var(--section-x-narrow)] py-5 text-matcha-deep transition-[background,color,box-shadow] duration-400 motion-reduce:transition-none"
      >
        <div className="hidden flex-wrap gap-x-8 gap-y-2 sm:flex">
          {LEFT.map((l) => (
            <a key={l.href} href={l.href} className="t-nav-link no-underline">
              {l.label}
            </a>
          ))}
        </div>
        <a
          ref={mark}
          href="#top"
          aria-label="ikigai — back to top"
          className="t-wordmark-nav col-start-2 opacity-0 no-underline transition-opacity duration-400 motion-reduce:transition-none"
        >
          ikigai
        </a>
        <div className="col-start-3 hidden flex-wrap justify-end gap-x-8 gap-y-2 sm:flex">
          {RIGHT.map((l) => (
            <a key={l.href} href={l.href} className="t-nav-link no-underline">
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="t-nav-link col-start-3 cursor-pointer justify-self-end sm:hidden"
        >
          Menu
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-250 flex flex-col bg-cream px-[var(--section-x-narrow)] py-5 text-matcha-deep sm:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="t-wordmark-nav">ikigai</span>
            <button
              type="button"
              autoFocus
              onClick={() => setMenuOpen(false)}
              className="t-nav-link cursor-pointer"
            >
              Close
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="t-editorial not-italic no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
