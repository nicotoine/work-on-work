"use client";

import { useState, useEffect } from "react";
import NavLogo from "./navbar/NavLogo";
import NavLinks from "./navbar/NavLinks";
import HamburgerButton from "./navbar/HamburgerButton";
import MobileMenu from "./navbar/MobileMenu";
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#specificite", label: "Ma spécificité" },
    { href: "#parcours", label: "Mon parcours" },
    { href: "#formations", label: "Formations" },
    { href: "#interventions", label: "Mes interventions" },
    { href: "#preparation-mentale", label: "Préparation mentale" },
    { href: "#emdr", label: "EMDR" },
  ];

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navDefault}`}
    >
      <div className={styles.inner}>
        <NavLogo />
        <NavLinks links={links} />
        <HamburgerButton open={open} onClick={() => setOpen(!open)} />
      </div>
      {open && <MobileMenu links={links} onClose={() => setOpen(false)} />}
    </nav>
  );
}
