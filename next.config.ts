import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/imgproxyImageLoader.ts",
  },
};

export default nextConfig;
