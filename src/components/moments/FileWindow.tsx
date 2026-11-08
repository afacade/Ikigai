import Image from '@/components/Img';
import type { ArchiveEvent } from '@/content/types';

/**
 * A past event as a file on the board.
 *
 * The whole window is the drag handle and the open button: press anywhere,
 * drag to move it, release without travelling and it opens. The pointer logic
 * lives in Board. `open ↗` stays a real button so the modal is reachable from
 * the keyboard too.
 *
 * Touch action differs by region on purpose. The title bar takes the gesture
 * outright (`touch-none`) so a file can be dragged in any direction by its bar.
 * Over the picture the browser keeps vertical panning, so a thumb swiping down
 * the page scrolls instead of dragging the file — that pan fires pointercancel,
 * which Board treats as "not a click".
 */
export default function FileWindow({
  event,
  left,
  top,
  z,
  dimmed,
  onDragStart,
  onOpen,
}: {
  event: ArchiveEvent;
  left: string;
  top: string;
  z: number;
  dimmed: boolean;
  onDragStart: (e: React.PointerEvent) => void;
  onOpen: () => void;
}) {
  return (
    <div
      data-file
      onPointerDown={onDragStart}
      style={{ left, top, zIndex: z, transform: `rotate(${event.rot}deg)` }}
      className={`absolute w-[clamp(150px,14.5vw,210px)] cursor-grab select-none overflow-hidden rounded-lg bg-window-body shadow-[var(--shadow-window)] transition-opacity duration-250 active:cursor-grabbing motion-reduce:transition-none ${
        dimmed ? 'opacity-[0.22]' : 'opacity-100'
      }`}
    >
      <div className="flex touch-none items-center justify-between gap-1.5 bg-window-chrome px-[9px] py-1.5 text-ink">
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
      <div className="relative touch-pan-y" style={{ aspectRatio: event.ratio }}>
        <Image
          src={event.src}
          alt={event.alt}
          fill
          sizes="210px"
          draggable={false}
          className="object-cover"
        />
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
