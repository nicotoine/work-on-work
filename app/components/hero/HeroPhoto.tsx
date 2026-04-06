import Image from "next/image";
import styles from "./HeroPhoto.module.css";

interface HeroPhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function HeroPhoto({ src, alt, width, height }: HeroPhotoProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ring} />
      <span className={styles.dotTop} />
      <span className={styles.dotBottom} />
      <span className={styles.dotMid} />
      <div className={styles.frame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photo}
          priority
        />
      </div>
    </div>
  );
}
