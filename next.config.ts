import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // There is an unrelated lockfile above this directory; pin the trace root.
  outputFileTracingRoot: __dirname,
  images: {
    // Temporary placeholder photography. Replace with the client's own assets
    // (and this host) before launch — see design_handoff "Assets".
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/photos/**' },
    ],
  },
};

export default nextConfig;
