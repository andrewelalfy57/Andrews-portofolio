"use client";

import { motion } from "framer-motion";
import FadeUp from "./FadeUp";

type Project = {
  num: string;
  title: string;
  company: string;
  year: string;
  context: string;
  challenge: string;
  approach: string;
  impact: string[];
  stack: string[];
  posterText: string;
  private?: boolean;
  href?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    posterText: "EMAAR",
    title: "Emaar Internal Platform",
    company: "Emaar Properties · Dubai",
    year: "2025",
    context:
      "Five enterprise full-stack apps spanning Hotels, Communities, and Construction — the connective tissue between 10,000+ Emaar employees and their daily workflows.",
    challenge:
      "Legacy tools were siloed per division, slow on field devices, impossible to integrate. Field managers were keying data into spreadsheets while approvals routed through email.",
    approach:
      "Next.js (App Router) front-ends backed by GraphQL, sourced from tuned PostgreSQL and Strapi CMS. Shared design system. Server components where data is heavy, client components only where interactivity demands it.",
    impact: ["10,000+ daily users", "60% lower fetch latency", "20% ahead of sprint", "85%+ coverage"],
    stack: ["Next.js", "GraphQL", "TypeScript", "PostgreSQL", "Strapi"],
    private: true,
  },
  {
    num: "02",
    posterText: "FIELD\nOPS",
    title: "Field Operations Mobile App",
    company: "Emaar Properties · Dubai",
    year: "2025",
    context:
      "Cross-platform React Native app powering on-site inspections, invoice tracking, and Permit-to-Work workflows for Emaar's construction and community teams.",
    challenge:
      "Field workers were on partial-signal sites with bursty connectivity. Real-time-only architectures broke. Paper backups defeated the point of digitizing.",
    approach:
      "Offline-first architecture — optimistic local writes, conflict-aware sync on reconnect, GraphQL subscriptions when bandwidth permits. Native camera integration for inspection evidence.",
    impact: ["45% efficiency lift", "Zero data loss in field tests", "All three divisions"],
    stack: ["React Native", "GraphQL", "Redux", "Offline Sync"],
    private: true,
  },
  {
    num: "03",
    posterText: "VEEVA\nVAULT",
    title: "Vault Clinical Integrations",
    company: "Veeva Systems · London",
    year: "2024 — 2025",
    context:
      "Enterprise SaaS modules bridging Veeva Vault with third-party clinical-trial systems for 500+ pharmaceutical clients — full FDA 21 CFR Part 11 compliance throughout.",
    challenge:
      "Pharma clients couldn't move trial data between systems without manual transfer — a multi-day delay per study. Every integration also had to satisfy a regulator who could shut down a trial for a missing audit trail.",
    approach:
      "REST and microservice integrations on Java Spring Boot with React control panels. Compliance baked in — immutable audit logs, role-aware access, replayable event streams. PostgreSQL tuning plus Redis caching for read-heavy paths.",
    impact: ["500+ pharma clients", "99.9% uptime", "65% faster processing", "40% throughput boost"],
    stack: ["React", "Java Spring Boot", "Node.js", "PostgreSQL", "Redis"],
    private: true,
  },
  {
    num: "04",
    posterText: "AR\nMENU",
    title: "AR Restaurant Menu Platform",
    company: "Freelance · MENA region",
    year: "2020 — Present",
    context:
      "Augmented-reality menu that lets diners scan a QR code and view 3D models of dishes in real-world space. Used by restaurants across the Middle East and North Africa.",
    challenge:
      "Restaurants needed a marketing differentiator that didn't require a native app install. WebAR alone had compatibility gaps; native AR added friction. The bridge had to work on any phone with a camera.",
    approach:
      "Unity-built AR pipeline targeting ARKit and ARCore via per-platform builds, triggered by QR codes that link to lightweight installer flows. Asset pipeline optimized for sub-10MB downloads per dish.",
    impact: ["Production with multiple MENA clients", "Higher menu engagement", "Five years continuous operation"],
    stack: ["Unity", "ARKit", "ARCore", "C#"],
    private: false,
    href: "https://github.com/andrewelalfy57",
    featured: true,
  },
];

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 md:py-24 border-t border-soft"
    >
      <div
        className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Poster — typographic visual, no images needed */}
        <div className="md:col-span-5">
          <div className="poster flex items-center justify-center">
            <div className="absolute top-6 left-6 mono-label">{project.num}</div>
            <div className="absolute top-6 right-6 mono-label">{project.year}</div>
            <div className="display text-[clamp(3rem,8vw,7rem)] text-[rgb(var(--foreground))] text-center leading-[0.85] whitespace-pre-line">
              {project.posterText}
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div className="mono-label !text-[rgb(var(--foreground))]/60 truncate">
                {project.company.split("·")[0]?.trim()}
              </div>
              {project.featured && (
                <div className="mono-label !text-[rgb(var(--foreground))]">★ Featured</div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 space-y-6">
          <div>
            <div className="mono-label mb-3">{project.company}</div>
            <h3 className="display-tight text-[clamp(1.75rem,4vw,3rem)] leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-base md:text-lg leading-[1.6] text-[rgb(var(--muted))] max-w-2xl">
            {project.context}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 pt-2 max-w-2xl">
            <div>
              <div className="mono-label mb-2">Challenge</div>
              <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="mono-label mb-2">Approach</div>
              <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">
                {project.approach}
              </p>
            </div>
          </div>

          <div>
            <div className="mono-label mb-3">Impact</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.impact.map((m) => (
                <div
                  key={m}
                  className="text-sm text-[rgb(var(--foreground))] flex items-baseline gap-2"
                >
                  <span className="text-[rgb(var(--foreground))]/40">—</span>
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 items-center">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full border border-mid text-[rgb(var(--muted))]"
              >
                {t}
              </span>
            ))}
            {project.private ? (
              <span className="mono-label ml-auto">Private · NDA</span>
            ) : (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-link text-sm !text-[rgb(var(--foreground))]"
              >
                View source <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-soft">
      <div className="max-container">
        <div className="mb-12 flex items-end justify-between gap-8 flex-wrap">
          <FadeUp>
            <div className="mono-label mb-6">— Selected work</div>
            <h2 className="display text-[clamp(2.5rem,7vw,7rem)] max-w-3xl">
              Most of it&apos;s under NDA.
            </h2>
            <h2 className="display text-[clamp(2.5rem,7vw,7rem)] text-[rgb(var(--muted))] max-w-3xl">
              Here&apos;s what I can show.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="text-sm text-[rgb(var(--muted))] max-w-xs">
              Enterprise systems built across Dubai, London, and Cairo — plus a five-year AR side project running across the MENA region.
            </p>
          </FadeUp>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectBlock key={p.title} project={p} index={i} />
          ))}
        </div>

        <FadeUp delay={0.1} className="pt-12 flex justify-end">
          <a
            href="https://github.com/andrewelalfy57"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm !text-[rgb(var(--foreground))]"
          >
            All public work on GitHub <span aria-hidden>→</span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
