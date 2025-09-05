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
  transpilePackages: ['react-github-calendar'],
};

// Use export default for ES Modules
export default nextConfig;
