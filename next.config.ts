import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'ap-south-1.graphassets.com',
      'static.wixstatic.com',
      'images.unsplash.com',
      'droppe.com',
      'www.ovobelfoods.com'
      // add other allowed domains here if needed
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;