"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import RevealText from "./RevealText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-container w-full flex-1 flex flex-col justify-center pt-28 pb-24"
      >
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mono-label mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available · Dubai, UAE
        </motion.div>

        {/* Name + Portrait side by side */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-14">
          <div className="md:col-span-9 order-2 md:order-1">
            <h1 className="display text-[clamp(3rem,13vw,13rem)] -ml-1">
              <RevealText as="span" className="block">
                Andrew
              </RevealText>
              <RevealText as="span" className="block" delay={0.18}>
                Ayman&nbsp;Alfy.
              </RevealText>
            </h1>
          </div>

          {/* Circular portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <motion.div
              style={{ scale: portraitScale }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-full md:max-w-[280px] md:aspect-square rounded-full overflow-hidden border border-mid"
            >
              <Image
                src="/andrew.jpg"
                alt="Andrew Ayman Alfy"
                fill
                priority
                sizes="(max-width: 768px) 208px, 280px"
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[rgb(var(--foreground))]/10 rounded-full pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>

        {/* Subhead + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-12 gap-10 items-end"
        >
          <p className="md:col-span-7 text-lg md:text-xl leading-[1.45] text-[rgb(var(--foreground))] max-w-2xl">
            Senior Software Engineer based in Dubai. Currently at{" "}
            <span className="text-[rgb(var(--foreground))] font-semibold">Emaar Properties</span>{" "}
            — shipping the systems that 10,000 employees use to run hotels, communities, and construction.
          </p>

          <div className="md:col-span-5 md:justify-self-end flex flex-wrap items-center gap-x-10 gap-y-4">
            <a href="#projects" className="text-link text-sm !text-[rgb(var(--foreground))]">
              View work <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="text-link text-sm !text-[rgb(var(--foreground))]">
              Get in touch <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-container w-full pb-8 flex items-center justify-between mono-label"
      >
        <span>Senior Software Engineer · 2026</span>
        <span className="hidden md:inline">Next.js · React Native · GraphQL · PostgreSQL</span>
        <a href="#about" className="text-link !text-[rgb(var(--muted))]">
          Scroll <span aria-hidden>↓</span>
        </a>
      </motion.div>
    </section>
  );
}
