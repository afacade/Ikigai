import Image from 'next/image';
import type { ArchiveEvent } from '@/content/types';

/** The same archive event as a card, for the list view. */
export default function EventCard({
  event,
  onOpen,
}: {
  event: ArchiveEvent;
  onOpen: () => void;
}) {
  return (
    <article className="text-on-dark-100">
      <button type="button" onClick={onOpen} className="block w-full cursor-pointer text-left">
        <div className="relative aspect-[4/5] bg-terracotta-card">
          <Image
            src={event.src}
            alt={event.alt}
            fill
            sizes="(max-width: 600px) 100vw, 250px"
            className="object-cover"
          />
          <span className="t-mono-meta pointer-events-none absolute left-2.5 top-2.5 rounded-full bg-on-dark-100 px-[9px] py-1 normal-case text-ink">
            {event.media === 'video' ? '▶ video' : 'photo'}
          </span>
        </div>
        <div className="t-mono-meta mt-3.5 flex justify-between gap-2.5 text-on-dark-300">
          <span>{event.cat}</span>
          <span>{event.date}</span>
        </div>
        <h3 className="t-card-title mt-1.5">{event.title}</h3>
        <p className="t-caption m-0 mt-1.5 text-on-dark-200">{event.line}</p>
      </button>
    </article>
  );
}
