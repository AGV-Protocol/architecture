import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['thirdweb'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;