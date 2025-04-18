/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'upload.wikimedia.org'], // อนุญาต external image domains
  },
};

module.exports = nextConfig;