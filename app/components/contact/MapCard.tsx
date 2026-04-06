import styles from "./MapCard.module.css";

export default function MapCard({
  src,
  title,
  venueName,
  address,
}: {
  src: string;
  title: string;
  venueName: string;
  address: string;
}) {
  return (
    <div className={styles.card}>
      <iframe
        src={src}
        width="100%"
        height="220"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
      <div className={styles.body}>
        <p className={styles.venueName}>
          {venueName}
        </p>
        <p className={styles.address}>{address}</p>
      </div>
    </div>
  );
}
