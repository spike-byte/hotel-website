/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'dimg04.c-ctrip.com',
      'cdn-icons-png.flaticon.com',
      'png.pngtree.com',
      'img.ixintu.com',
    ],
  },
}

module.exports = nextConfig

