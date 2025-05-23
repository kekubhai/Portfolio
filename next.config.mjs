/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      
      "www.assets.pinterest.com",
      "www.pinterest.com",
      "pbs.twimg.com",
      "cdn.hashnode.com",
      "i.pcmag.com",
      "res.cloudinary.com",
      "media.licdn.com",
      "miro.medium.com",
      "dev-to-uploads.s3.amazonaws.com",
      "avatars.githubusercontent.com",
      "ik.imagekit.io",
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
