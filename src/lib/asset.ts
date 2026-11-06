/**
 * Prefix a root-absolute asset path (e.g. '/videos/foo.mp4') with the
 * configured basePath so it resolves on GitHub Pages, where the site is served
 * from /Ikigai. `next/image` applies basePath on its own, so this is only
 * needed for plain-HTML asset references (the <video> poster and source in the
 * event modal). Absolute URLs and non-'/'-rooted paths are returned untouched.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
