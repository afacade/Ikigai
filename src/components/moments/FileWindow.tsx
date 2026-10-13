import Image from 'next/image';
import type { ArchiveEvent } from '@/content/types';

/**
 * A past event as a file on the board.
 *
 * The title bar is both the drag handle and the open button: the pointer logic
 * lives in Board, and `open ↗` is a real button so the modal is reachable from
 * the keyboard too.
 */
export default function FileWindow({
  event,
  left,
  top,
  z,
  dimmed,
  onBarPointerDown,
  onOpen,
}: {
  event: ArchiveEvent;
  left: string;
  top: string;
  z: number;
  dimmed: boolean;
  onBarPointerDown: (e: React.PointerEvent) => void;
  onOpen: () => void;
}) {
  return (
    <div
      data-file
      style={{ left, top, zIndex: z, transform: `rotate(${event.rot}deg)` }}
      className={`absolute w-[clamp(150px,14.5vw,210px)] overflow-hidden rounded-lg bg-window-body shadow-[var(--shadow-window)] transition-opacity duration-250 motion-reduce:transition-none ${
        dimmed ? 'opacity-[0.22]' : 'opacity-100'
      }`}
    >
      <div
        onPointerDown={onBarPointerDown}
        className="flex cursor-grab touch-none select-none items-center justify-between gap-1.5 bg-window-chrome px-[9px] py-1.5 text-ink"
      >
        <span className="t-mono-file overflow-hidden text-ellipsis whitespace-nowrap">
          {event.file}
        </span>
        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onOpen}
          className="t-mono-hint flex-none cursor-pointer"
        >
          open ↗<span className="sr-only"> {event.title}</span>
        </button>
      </div>
      <div className="relative" style={{ aspectRatio: event.ratio }}>
        <Image src={event.src} alt={event.alt} fill sizes="210px" className="object-cover" />
        {event.media === 'video' && (
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 right-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--play-badge)]"
          >
            <span className="ml-[3px] h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-ink" />
          </span>
        )}
      </div>
    </div>
  );
}
