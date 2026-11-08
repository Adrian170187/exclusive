const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/exclusive' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: basePath,
  assetPrefix: isGithubActions ? '/exclusive/' : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
