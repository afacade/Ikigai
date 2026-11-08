/**
 * Prefix a root-absolute asset path (e.g. '/videos/foo.mp4') with the
 * configured basePath so it resolves on GitHub Pages, where the site is served
 * from /Ikigai. Needed for plain-HTML asset references (the <video> poster and
 * source in the event modal) AND for next/image: the Pages build sets
 * `images.unoptimized`, and in that mode next/image emits the raw src without
 * basePath, so images go through the Img wrapper (components/Img.tsx), which
 * calls this. Absolute URLs and non-'/'-rooted paths are returned untouched.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
