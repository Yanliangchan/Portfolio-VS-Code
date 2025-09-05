/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
    unoptimized: true,
  },
  // Add this line to transpile the problematic package
  transpilePackages: ['react-github-calendar'],
};

module.exports = nextConfig;
