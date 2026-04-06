import styles from './IconBox.module.css';

export default function IconBox({
  icon,
  size = "md",
}: {
  icon: string;
  size?: "sm" | "md";
}) {
  const boxClass = size === "sm" ? styles.boxSm : styles.boxMd;
  const svgClass = size === "sm" ? styles.svgSm : styles.svgMd;

  return (
    <div className={boxClass}>
      <svg
        className={svgClass}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d={icon}
        />
      </svg>
    </div>
  );
}
