import styles from './MobileMenu.module.css';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={onClose}
            className={styles.link}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={onClose}
          className={styles.contactButton}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
