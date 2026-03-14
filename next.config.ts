import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.bio.site',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/go',
        destination: 'https://vsl-minddigital.vercel.app/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
