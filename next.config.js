/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
    unoptimized: true, // Required for static file hosting
  },
};
export default nextConfig;
