"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./scroll-reveal.module.css";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "article";
};

export default function ScrollReveal({ children, className, id, as: Component = "div" }: ScrollRevealProps) {
  const element = useRef<HTMLDivElement & HTMLElement>(null);

  useEffect(() => {
    const target = element.current;
    if (!target || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        target.classList.add(styles.revealed);
        observer.unobserve(target);
      }
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <Component ref={element} id={id} className={`${styles.reveal} ${className ?? ""}`}>{children}</Component>;
}
