import { type ImageLoaderProps } from "next/image";
import { generateUrl } from "@imgproxy/imgproxy-js-core";

// The address of your imgproxy server
const imgproxyEndpoint = process.env.NEXT_PUBLIC_IMGPROXY_ENDPOINT || "http://localhost:8080";
// The address of your Next.js server.
// This is used to resolve relative image URLs.
const imgproxyBaseUrl = process.env.NEXT_PUBLIC_IMGPROXY_BASE_URL || "http://host.docker.internal:8100";

type Presets = Record<string, number>;

const presetsWidth: Presets = {
  w_200: 200,
  w_400: 400,
  w_600: 600,
  w_800: 800,
}

const presetsQuality: Presets = {
  q_1: 1,
  q_40: 40,
  q_80: 80,
}

const findPreset = (presets: Presets, value: number): string | undefined => {
  const sorted = Object.entries(presets).sort(([, a], [, b]) => a - b);
  return sorted.find(([, v]) => v >= value)?.[0] || sorted[sorted.length - 1]?.[0];
};

export default function myImageLoader({ src, width, quality }: ImageLoaderProps) {
  const fullSrc = new URL(src, imgproxyBaseUrl).toString();

  const presets = [
    findPreset(presetsWidth, width),
    quality ? findPreset(presetsQuality, quality) : undefined,
  ].filter((p) => p !== undefined);

  const path = generateUrl(
    { value: fullSrc, type: "plain"},
    { preset: presets },
    { onlyPresets: true },
  );

  return `${imgproxyEndpoint}/unsafe${path}`;
}
