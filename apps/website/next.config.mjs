/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@marvinho/ui',
    '@marvinho/config',
    '@marvinho/hooks',
    '@marvinho/types',
    '@marvinho/utils',
    '@marvinho/branding',
    '@marvinho/forms',
    '@marvinho/shared',
    '@marvinho/icons',
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
