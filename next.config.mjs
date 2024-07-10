/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-156292-4703703.cloudwaysapps.com',
      },
    ],
  },
};

export default nextConfig;
