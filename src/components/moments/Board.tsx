'use client';

import { useRef, useState } from 'react';
import { CATEGORIES, EVENTS } from '@/content/events';
import type { ArchiveEvent, EventCategory } from '@/content/types';
import { clamp } from '@/lib/scroll';
import FileWindow from './FileWindow';
import FolderIcon from './FolderIcon';

interface Point {
  x: number;
  y: number;
}

/**
 * The desktop: folders down the left, ten draggable files on top.
 *
 * Dragging writes left/top straight to the node and only commits to state on
 * release. If the pointer travels less than 4px it was a click, and the file
 * opens instead — that one threshold is what lets the title bar be both a
 * handle and a button.
 */
export default function Board({
  filter,
  onFilter,
  onOpen,
}: {
  filter: EventCategory | null;
  onFilter: (c: EventCategory) => void;
  onOpen: (id: string) => void;
}) {
  const board = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Record<string, Point>>({});
  const [zOrder, setZOrder] = useState<Record<string, number>>({});
  const topZ = useRef(10);

  const raise = (id: string) => {
    topZ.current += 1;
    const z = topZ.current;
    setZOrder((prev) => ({ ...prev, [id]: z }));
  };

  const startDrag = (e: React.PointerEvent, event: ArchiveEvent) => {
    if (e.button > 0) return;
    const boardEl = board.current;
    const win = (e.currentTarget as HTMLElement).closest<HTMLElement>('[data-file]');
    if (!boardEl || !win) return;

    e.preventDefault();
    const rect = boardEl.getBoundingClientRect();
    const start = positions[event.id] ?? { x: event.x, y: event.y };
    const sx = e.clientX;
    const sy = e.clientY;
    let moved = false;
    let next = start;

    raise(event.id);

    const move = (m: PointerEvent) => {
      const dx = m.clientX - sx;
      const dy = m.clientY - sy;
      if (!moved && Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      if (!moved) return;
      next = {
        x: clamp(start.x + (dx / rect.width) * 100, -6, 94),
        y: clamp(start.y + (dy / rect.height) * 100, -2, 92),
      };
      win.style.left = `${next.x}%`;
      win.style.top = `${next.y}%`;
    };

    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      if (moved) setPositions((prev) => ({ ...prev, [event.id]: next }));
      else onOpen(event.id);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  };

  return (
    <div
      ref={board}
      className="relative h-[860px] overflow-hidden rounded-[14px] bg-terracotta-board shadow-[inset_0_0_0_1px_var(--hairline-board)]"
    >
      {CATEGORIES.map((cat, i) => (
        <FolderIcon
          key={cat}
          label={cat}
          active={filter === cat}
          dimmed={!!filter && filter !== cat}
          onClick={() => onFilter(cat)}
          style={{ left: '2%', top: `${4 + i * 16}%` }}
        />
      ))}

      {EVENTS.map((event) => {
        const moved = positions[event.id];
        const p = moved ?? { x: event.x, y: event.y };
        return (
          <FileWindow
            key={event.id}
            event={event}
            // Until it has been dragged, a file keeps clear of the folder column.
            left={moved ? `${p.x}%` : `max(130px, ${p.x}%)`}
            top={`${p.y}%`}
            z={zOrder[event.id] ?? 2}
            dimmed={!!filter && event.cat !== filter}
            onBarPointerDown={(e) => startDrag(e, event)}
            onOpen={() => onOpen(event.id)}
          />
        );
      })}

      <p className="t-mono-hint pointer-events-none absolute bottom-3.5 right-[18px] m-0 text-on-dark-300">
        drag by the bar · click the bar to open · folders filter
      </p>
    </div>
  );
}
