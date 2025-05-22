import Image from "next/image";
import styles from "./page.module.css";

import TestImage from "@/public/test.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js + imgproxy Example
        </h1>

        <p>
          These images are processed with imgproxy using the <code>Image</code> component
          and a custom image loader.
        </p>

        <code>{`<Image src={...} width={180} />`}</code>
        <Image
          src={TestImage}
          alt="Test Image"
          width={180}
        />

        <code>{`<Image src={...} width={360} />`}</code>
        <Image
          src={TestImage}
          alt="Test Image"
          width={360}
        />

        <code>{`<Image src={...} width={360} quality={1} />`}</code>
        <Image
          src={TestImage}
          alt="Test Image"
          width={360}
          quality={1}
        />
      </main>
    </div>
  );
}
