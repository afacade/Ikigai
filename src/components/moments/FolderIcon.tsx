import type { EventCategory } from '@/content/types';

/**
 * A category filter drawn as a manila folder: a 76 × 58 body with a tab, both
 * in CSS. Clicking the active folder clears the filter — it toggles.
 */
export default function FolderIcon({
  label,
  active,
  dimmed,
  onClick,
  style,
}: {
  label: EventCategory;
  active: boolean;
  dimmed: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      style={style}
      className={`absolute w-[110px] cursor-pointer text-center transition-opacity duration-200 motion-reduce:transition-none ${
        dimmed ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <span aria-hidden className="relative mx-auto block h-[58px] w-[76px]">
        <span
          className={`absolute left-0 top-0 h-3 w-[34px] rounded-t-[5px] ${
            active ? 'bg-folder-tab-active' : 'bg-folder-tab'
          }`}
        />
        <span
          className={`absolute inset-x-0 bottom-0 top-2 rounded-[3px_6px_6px_6px] shadow-[var(--shadow-folder)] ${
            active ? 'bg-folder-body-active' : 'bg-folder-body'
          }`}
        />
      </span>
      <span className="t-fine mt-2 block text-on-dark-100 [text-shadow:0_1px_6px_rgba(0,0,0,.4)]">
        {label}
      </span>
    </button>
  );
}
