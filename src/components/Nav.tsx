'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { clamp, easeInOutQuad, prefersReducedMotion, useScrollPass } from '@/lib/scroll';

/**
 * The four categories the client asked for, in the order they gave them:
 * our matcha → events → book us → faqs. They sit together on the left, with the
 * wordmark on the right.
 */
const LINKS = [
  { label: 'home', href: '/' },
  { label: 'our matcha', href: '/our-matcha' },
  { label: 'events', href: '/events' },
  { label: 'book us', href: '/book-us' },
  { label: 'faqs', href: '/faqs' },
];

function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`block text-center ${className}`}>
      <span className="t-wordmark-nav block">ikigai</span>
      <span className="t-wordmark-sub block">tea bar</span>
    </span>
  );
}

/**
 * The fixed nav, in one of three colour states over the home hero.
 *
 * It reads the hero's rect itself in the shared scroll pass and writes its own
 * styles, so hero progress never has to travel through React. Pages without a
 * hero have no `#top`, so the pass settles straight into the scrolled state.
 */
export default function Nav() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
    },
    { ignoreReducedMotion: true },
  );

  // A route change unmounts nothing here, so close the sheet by hand.
  useEffect(() => setMenuOpen(false), [pathname]);

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

  const link = (l: { label: string; href: string }) => {
    const active = pathname === l.href || pathname === `${l.href}/`;
    return (
      <Link
        key={l.href}
        href={l.href}
        aria-current={active ? 'page' : undefined}
        className={`t-nav-link text-[14px] no-underline ${active ? 'underline [text-underline-offset:7px]' : ''}`}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <>
      <nav
        ref={nav}
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-200 flex items-center justify-between gap-6 px-[var(--section-x-narrow)] py-4 text-matcha-deep transition-[background,color,box-shadow] duration-400 motion-reduce:transition-none"
      >
        <div className="hidden flex-wrap gap-x-9 gap-y-2 sm:flex">{LINKS.map(link)}</div>

        {/* Not "menu": the site deliberately has no food menu on it. */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="t-nav-link cursor-pointer text-[14px] sm:hidden"
        >
          index
        </button>

        <Link href="/" aria-label="ikigai tea bar, home" className="no-underline">
          <Wordmark />
        </Link>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Pages"
          className="fixed inset-0 z-250 flex flex-col bg-cream px-[var(--section-x-narrow)] py-4 text-matcha-deep sm:hidden"
        >
          <div className="flex items-center justify-between">
            <Wordmark className="text-left" />
            <button
              type="button"
              autoFocus
              onClick={() => setMenuOpen(false)}
              className="t-nav-link cursor-pointer"
            >
              close
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="t-editorial not-italic no-underline"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
