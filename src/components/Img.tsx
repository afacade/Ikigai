import NextImage, { type ImageProps } from 'next/image';
import { asset } from '@/lib/asset';

/**
 * A next/image wrapper that routes a root-absolute `src` (e.g. '/images/x.jpg')
 * through asset() so it carries the basePath on GitHub Pages.
 *
 * It is needed because the Pages build sets `images.unoptimized`, and in that
 * mode next/image emits the raw `src` WITHOUT applying basePath — so
 * '/images/x.jpg' resolves to the domain root and 404s under /Ikigai. asset()
 * adds the prefix; absolute URLs (e.g. Pexels) and non-'/'-rooted paths pass
 * through untouched, and in dev (basePath '') nothing changes.
 *
 * Use this in place of `next/image` for any image that may have a local src.
 */
export default function Img({ src, ...rest }: ImageProps) {
  const resolved = typeof src === 'string' ? asset(src) : src;
  return <NextImage src={resolved} {...rest} />;
}
