import type { NextConfig } from 'next';

/**
 * GitHub Pages serves static files only, from https://afacade.github.io/Ikigai.
 * The deploy workflow sets GITHUB_PAGES=true; `npm run dev` and a plain
 * `npm run build` stay at the root with image optimization on.
 */
const isPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // There is an unrelated lockfile above this directory; pin the trace root.
  outputFileTracingRoot: __dirname,
  ...(isPages
    ? {
        output: 'export',
        basePath: '/Ikigai',
        // /imprint/ → imprint/index.html, which Pages serves without a redirect.
        trailingSlash: true,
      }
    : {}),
  images: {
    // No Image Optimization API on static hosting: ship the sources as they are.
    unoptimized: isPages,
    // Temporary placeholder photography. Replace with the client's own assets
    // (and this host) before launch — see the design handoff's "Assets".
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/photos/**' },
    ],
  },
};

export default nextConfig;
