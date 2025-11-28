import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Exclude backup directories from build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Ensure app-backup is not included
  experimental: {
    // Keep the default
  },
};

export default nextConfig;
