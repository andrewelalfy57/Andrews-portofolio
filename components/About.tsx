"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10K+", label: "Users Served" },
  { value: "20+", label: "Projects Shipped" },
  { value: "99.9%", label: "Uptime Delivered" },
];

const highlights = [
  {
    icon: Code2,
    title: "Enterprise Scale",
    desc: "Built systems serving 10K+ users across UAE, UK, and Egypt",
  },
  {
    icon: Globe,
    title: "Full-Stack Mastery",
    desc: "From React & Next.js frontends to Node.js & Java Spring Boot backends",
  },
  {
    icon: Cpu,
    title: "Mobile & AR",
    desc: "React Native apps and Augmented Reality experiences for real-world impact",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    desc: "60% data fetching reduction, 40% performance gains — metrics matter",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };

export default function About() {
  return (
    <section id="about" className="section-padding mesh-gradient">
      <div className="max-container">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-sm text-[rgb(var(--accent-light))] tracking-widest">
              01.
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              About Me
            </h2>
            <div className="flex-1 h-px bg-[rgb(var(--border))]" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-[rgb(var(--muted))]">
                I&apos;m a{" "}
                <span className="text-[rgb(var(--foreground))] font-semibold">
                  Senior Software Engineer
                </span>{" "}
                currently at{" "}
                <span className="text-gradient font-semibold">Emaar, Dubai</span>, where I
                build enterprise web and mobile applications that streamline operations for
                tens of thousands of users.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed text-[rgb(var(--muted))]">
                I graduated with a B.Sc. in Computer Science Engineering from the{" "}
                <span className="text-[rgb(var(--foreground))]">
                  German University in Cairo
                </span>{" "}
                and have since worked across three continents — building pharma SaaS at Veeva
                Systems in London, optimizing databases in Dubai, and pioneering AR experiences
                for the restaurant industry.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base leading-relaxed text-[rgb(var(--muted))]">
                I speak Arabic, English, and German (B1), and I thrive in cross-functional,
                globally distributed teams. I believe in writing code that&apos;s fast,
                clean, and built to last.
              </p>
            </FadeIn>
          </div>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass rounded-2xl p-6 border border-[rgb(var(--border))]/50 hover:border-[rgb(var(--accent))]/30 transition-all"
                >
                  <div className="text-3xl font-extrabold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[rgb(var(--muted))]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 border border-[rgb(var(--border))]/40 hover:border-[rgb(var(--accent))]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgb(var(--accent))]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(var(--accent))]/20 transition-colors">
                  <item.icon size={20} className="text-[rgb(var(--accent-light))]" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[rgb(var(--muted))] leading-relaxed">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
