/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@sarvabazaar/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
