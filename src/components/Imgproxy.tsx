import { StaticImageData } from "next/image";
import { generateImageUrl, type IGenerateImageUrl } from "@imgproxy/imgproxy-node";

import styles from "./Imgproxy.module.css";

type Options = NonNullable<IGenerateImageUrl["options"]>;
type Format = Options["format"];

type ImgproxyProps = {
  className?: string;
  src: string | StaticImageData;
  alt?: string;
  fill?: boolean;
} & Omit<Options, "resize" | "size" | "resize_type" | "dpr" | "format">;

// The address of your imgproxy server
const imgproxyEndpoint = process.env.NEXT_PUBLIC_IMGPROXY_ENDPOINT || "http://localhost:8080";
// The address of your Next.js server.
// This is used to resolve relative image URLs.
const imgproxyBaseUrl = process.env.NEXT_PUBLIC_IMGPROXY_BASE_URL || "http://host.docker.internal:8100";

export const Imgproxy = ({
  className,
  src,
  alt,
  width,
  height,
  fill = false,
  ...imgproxyOptions
}: ImgproxyProps) => {
  const resolvedSrc = typeof src === "string" ? src : src.src;
  const fullSrc = new URL(resolvedSrc, imgproxyBaseUrl).toString();

  const imagproxyUrl = (format: Format, dpr: number) => (
    generateImageUrl({
      endpoint: imgproxyEndpoint,
      url: {
        value: fullSrc,
        displayAs: "plain",
      },
      options: {
        resize: {
          width,
          height,
          resizing_type: fill ? "fill-down" : "fit",
        },
        format,
        dpr,
        ...imgproxyOptions
      },
    })
  );

  const srcSet = (format?: Format) => [
    `${imagproxyUrl(format, 1)} 1x`,
    `${imagproxyUrl(format, 2)} 2x`,
  ].join(", ");

  const classNames = [
    className,
    fill ? styles.fill : styles.fit,
  ].filter(Boolean).join(" ");

  return (
    <picture>
      <source srcSet={srcSet("avif")} type="image/avif" />
      <source srcSet={srcSet("webp")} type="image/webp" />
      <img
        src={imagproxyUrl("webp", 2)}
        alt={alt}
        className={classNames}
        width={width || undefined}
        height={height || undefined}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};
