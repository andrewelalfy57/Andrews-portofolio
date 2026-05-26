"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "p" | "li" | "ul" | "h3" | "span";
  once?: boolean;
};

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.9,
  y = 28,
  className = "",
  as: Tag = "div",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });

  const Comp = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
