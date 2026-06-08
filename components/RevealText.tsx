"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  stagger?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  inViewMargin?: string;
};

export default function RevealText({
  children,
  className = "",
  as: Tag = "h2",
  stagger = 0.055,
  delay = 0,
  duration = 1.05,
  once = true,
  inViewMargin = "0px 0px -15% 0px",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    margin: inViewMargin as `${number}${"px" | "%"}` | `${number}px ${number}px ${number}px ${number}px`,
  });

  const words = children.split(" ");

  return (
    <Tag ref={ref as unknown as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="reveal-mask">
          <motion.span
            initial={{ y: "115%" }}
            animate={inView ? { y: "0%" } : { y: "115%" }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
