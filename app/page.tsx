import styles from "./page.module.css";

import { Imgproxy } from "@/src/components/Imgproxy";

import TestImage from "@/public/test.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js + imgproxy Example
        </h1>

        <p>
          These images are processed with imgproxy using a custom <code>Imgproxy</code> server component.
        </p>

        <code>{`<Imgproxy src={...} width={180} />`}</code>
        <Imgproxy
          src={TestImage}
          alt="Test Image"
          width={180}
        />

        <code>{`<Imgproxy src={...} width={360} quality={1} />`}</code>
        <Imgproxy
          src={TestImage}
          alt="Test Image"
          width={360}
          quality={1}
        />

        <code>{`<Imgproxy src={...} width={200} height={200} fill />`}</code>
        <Imgproxy
          src={TestImage}
          alt="Test Image"
          width={200}
          height={200}
          fill
        />

        <code>{`<Imgproxy src={...} width={300} crop={{ width: 0.5, height: 0.5 }} gravity={{ type: "sm" }} />`}</code>
        <Imgproxy
          src={TestImage}
          alt="Test Image"
          width={600}
          height={400}
          fill
          crop={{ width: 0.5, height: 0.5 }}
          gravity={{ type: "sm" }}
        />

        <code>{`<Imgproxy src={...} width={600} height={400} fill watermark={{ opacity: 0.75, position: "re", x_offset: 30, y_offset: 20, scale: 0.2 }} />`}</code>
        <Imgproxy
          src={TestImage}
          alt="Test Image"
          width={600}
          height={400}
          fill
          watermark={{
            opacity: 0.75,
            position: "re",
            x_offset: 30,
            y_offset: 20,
            scale: 0.2,
          }}
        />

        <code>{`<Imgproxy src={...} width={600} height={400} fill blur={10} />`}</code>
        <Imgproxy
          src={TestImage}
          alt="Test Image"
          width={600}
          height={400}
          fill
          blur={10}
        />
      </main>
    </div>
  );
}
