"use client";

import { useState, useEffect, useRef, type RefObject } from "react";
import styles from "./Reveal.module.css";

function useScrollReveal<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px"
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

export type RevealVariant =
  | "fade-up"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "clip-up"
  | "clip-left"
  | "rise"
  | "flip";

const variantMap: Record<RevealVariant, string> = {
  "fade-up": styles.fadeUp,
  fade: styles.fade,
  "slide-left": styles.slideLeft,
  "slide-right": styles.slideRight,
  scale: styles.scale,
  "clip-up": styles.clipUp,
  "clip-left": styles.clipLeft,
  rise: styles.rise,
  flip: styles.flip,
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const variantClass = variantMap[variant];

  return (
    <div ref={ref} className={className}>
      <div
        className={`${variantClass} ${visible ? styles.visible : ""}`}
        style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── Stagger wrapper — auto-staggers direct children ─── */

export type StaggerVariant = "default" | "scale";

export function Stagger({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: StaggerVariant;
}) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.08, "0px 0px -40px 0px");

  const base = variant === "scale" ? styles.staggerScale : styles.stagger;
  const visibleClass = variant === "scale" ? styles.staggerScaleVisible : styles.staggerVisible;

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? visibleClass : ""} ${className}`}
    >
      {children}
    </div>
  );
}
