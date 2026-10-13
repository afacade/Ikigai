'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { ArchiveEvent } from '@/content/types';

/**
 * The detail window. Closes on backdrop click and on Escape, and moves focus to
 * the close button so a keyboard visitor is not left behind on the board.
 *
 * A video event plays its file here with the still as the poster. No placeholder
 * video files exist yet, so until `event.video` is filled in the poster is all
 * there is to show.
 */
export default function EventModal({
  event,
  onClose,
}: {
  event: ArchiveEvent;
  onClose: () => void;
}) {
  const close = useRef<HTMLButtonElement>(null);
  const returnTo = useRef<Element | null>(null);

  useEffect(() => {
    returnTo.current = document.activeElement;
    close.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      (returnTo.current as HTMLElement | null)?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-300 flex items-center justify-center bg-[var(--scrim)] p-5 backdrop-blur-[4px]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-[min(820px,100%)] overflow-auto rounded-xl bg-window-body text-ink shadow-[var(--shadow-modal)]"
      >
        <div className="t-mono-modal flex items-center justify-between bg-window-chrome px-3 py-[9px]">
          <span>{event.file}</span>
          <button
            ref={close}
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full bg-ink px-3 py-1 text-window-body"
          >
            close ×
          </button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          <div className="relative aspect-[4/5] bg-terracotta-card">
            {event.media === 'video' && event.video ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={event.src}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={event.video} />
              </video>
            ) : (
              <Image
                src={event.src}
                alt={event.alt}
                fill
                sizes="(max-width: 820px) 100vw, 410px"
                className="object-cover"
              />
            )}
          </div>

          <div className="flex flex-col gap-3.5 p-7">
            <div className="t-mono-meta flex justify-between text-wood">
              <span>{event.cat}</span>
              <span>{event.date}</span>
            </div>
            <h3 id="event-modal-title" className="t-event-title">
              {event.title}
            </h3>
            <p className="t-body m-0 text-modal-text">{event.line}</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="t-fine rounded-full bg-window-chrome px-3 py-1.5">
                {event.guests}
              </span>
              <span className="t-fine rounded-full bg-window-chrome px-3 py-1.5">
                {event.media === 'video' ? '▶ video' : 'photo'}
              </span>
            </div>
            <a
              href="#host"
              onClick={onClose}
              className="pill pill-dark mt-auto self-start"
            >
              plan something like this →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
