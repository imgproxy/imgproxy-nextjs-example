import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/imageLoader.ts",
  },
};

export default nextConfig;
