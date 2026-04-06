import Image from "next/image";
import styles from './HeroPhoto.module.css';

interface HeroPhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function HeroPhoto({ src, alt, width, height }: HeroPhotoProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />
      <div className={`${styles.card} glass-card`}>
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
