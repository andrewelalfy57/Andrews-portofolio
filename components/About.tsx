"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import FadeUp from "./FadeUp";

const stats = [
  { value: 4, suffix: "+", label: "Years building production software" },
  { value: 10, suffix: "K+", label: "Daily active users I've shipped to" },
  { value: 5, suffix: "", label: "Enterprise apps shipped at Emaar" },
  { value: 99.9, suffix: "%", label: "Uptime on FDA-compliant SaaS", decimals: 1 },
];

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-soft">
      <div className="max-container">
        <FadeUp className="mb-16">
          <div className="mono-label">About</div>
        </FadeUp>

        {/* Big statement + identity block side by side */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
          <div className="md:col-span-8">
            <FadeUp>
              <h2 className="display text-[clamp(2rem,5.5vw,5rem)] max-w-4xl">
                I build software that ships, scales, and stays out of its own way.
              </h2>
            </FadeUp>
          </div>

          {/* Portrait — large circular */}
          <FadeUp delay={0.1} className="md:col-span-4">
            <div className="relative aspect-square rounded-full overflow-hidden border border-mid">
              <Image
                src="/andrew.png"
                alt="Andrew Ayman Alfy"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "50% 22%" }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[rgb(var(--foreground))]/10 rounded-full pointer-events-none" />
              {/* Floating caption pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[rgb(var(--background))]/85 backdrop-blur border border-mid mono-label">
                Andrew · Dubai
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Prose */}
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <FadeUp className="md:col-span-6 md:col-start-1">
            <p className="text-base md:text-lg leading-[1.7] text-[rgb(var(--muted))]">
              <span className="text-[rgb(var(--foreground))]">Born and raised in Egypt</span>,
              trained in Germany&apos;s engineering tradition at the German University in
              Cairo, and now writing software in Dubai. The last four years have taken me
              from media agency work in Cairo, through database engineering on ABGA&apos;s
              Cross-Region Data Management platform, into FDA grade pharma SaaS at Veeva
              in London (Network / OpenData and Vault), and currently into Emaar
              Properties, where I lead full-stack work on the{" "}
              <span className="text-[rgb(var(--foreground))]">Address Hotels, Armani Hotels, and Emaar Entertainment Group</span>{" "}
              websites alongside the internal platforms behind Emaar&apos;s hospitality and entertainment divisions.
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-6">
            <p className="text-base md:text-lg leading-[1.7] text-[rgb(var(--muted))]">
              I work end-to-end and prefer it that way.{" "}
              <span className="text-[rgb(var(--foreground))]">Next.js (App Router)</span> and
              React Native on the front. <span className="text-[rgb(var(--foreground))]">
                Node.js, Java Spring Boot, GraphQL</span> in the middle.{" "}
              <span className="text-[rgb(var(--foreground))]">PostgreSQL and Redis</span> at
              the bottom. Delivered through GitHub Actions, Docker, AWS. Production
              first, abstractions later, and I optimize hard only when profilers say to.
            </p>
          </FadeUp>
        </div>

        {/* Bio facts — different layout from prose: tabular */}
        <div className="grid md:grid-cols-3 gap-y-10 gap-x-12 py-10 border-y border-mid mb-20">
          <FadeUp>
            <div className="mono-label mb-3">Education</div>
            <div className="font-semibold mb-1">B.Sc. Computer Science Engineering</div>
            <div className="text-sm text-[rgb(var(--muted))]">
              German University in Cairo · 2016&nbsp;–&nbsp;2021
            </div>
            <div className="text-sm text-[rgb(var(--muted))] mt-1">
              Grade 1.6 / 5.0 (near Excellent) · Pre-Masters Track
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="mono-label mb-3">Languages</div>
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">Arabic</span>
                <span className="text-sm text-[rgb(var(--muted))]">Native</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-medium">English</span>
                <span className="text-sm text-[rgb(var(--muted))]">Bilingual</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-medium">German</span>
                <span className="text-sm text-[rgb(var(--muted))]">B1</span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div className="mono-label mb-3">Currently</div>
            <div className="font-semibold mb-1">Senior Software Engineer</div>
            <div className="text-sm text-[rgb(var(--muted))]">
              Emaar Properties · Dubai
            </div>
            <div className="text-sm text-[rgb(var(--muted))] mt-1">
              Hospitality · Entertainment · Luxury Brands
            </div>
          </FadeUp>
        </div>

        {/* Stats — full-width row, big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06}>
              <div className="display text-[clamp(2.75rem,6vw,5.5rem)] leading-none mb-3">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="text-xs text-[rgb(var(--muted))] leading-snug max-w-[20ch]">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
