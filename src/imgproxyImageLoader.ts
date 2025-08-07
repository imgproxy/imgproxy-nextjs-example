import { type ImageLoaderProps } from "next/image";
import { generateUrl } from "@imgproxy/imgproxy-js-core";

// The address of your imgproxy server
const imgproxyEndpoint = process.env.NEXT_PUBLIC_IMGPROXY_ENDPOINT || "http://localhost:8080";
// The address of your Next.js server.
// This is used to resolve relative image URLs.
const imgproxyBaseUrl = process.env.NEXT_PUBLIC_IMGPROXY_BASE_URL || "http://host.docker.internal:8100";

export default ({ src, width, quality }: ImageLoaderProps) => {
  const fullSrc = new URL(src, imgproxyBaseUrl).toString();
  const escapedSrc = fullSrc.replace("%", "%25").replace("?", "%3F").replace("@", "%40");

  const path = generateUrl(
    { value: escapedSrc, type: "plain" },
    { width, quality },
  );

  return `${imgproxyEndpoint}/unsafe${path}`;
}
