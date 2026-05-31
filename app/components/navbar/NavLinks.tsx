import Link from 'next/link';
import styles from './NavLinks.module.css';

interface NavLink {
  href: string;
  label: string;
}

interface NavLinksProps {
  links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <div className={styles.wrapper}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={styles.link}
        >
          {l.label}
        </Link>
      ))}
      <Link
        href="/#contact"
        className={styles.contactButton}
      >
        Contact
      </Link>
    </div>
  );
}
