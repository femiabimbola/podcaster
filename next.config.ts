import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname:'little-butterfly-831.convex.cloud'
    }
  ]
 }
};

export default nextConfig;
