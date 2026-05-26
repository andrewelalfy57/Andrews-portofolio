"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeUp from "./FadeUp";

const experiences = [
  {
    year: "2025",
    title: "Senior Software Engineer",
    company: "Emaar Properties",
    location: "Dubai, UAE",
    period: "Apr 2025 — Present",
    current: true,
    image: "/dubai.jpg",
    summary:
      "Hospitality & real-estate — Hotels, Communities, Construction divisions.",
    bullets: [
      "Architected and shipped 5 enterprise full-stack applications on Next.js (App Router), TypeScript, React, and GraphQL — serving 10,000+ internal users across Hotels, Communities, and Construction teams.",
      "Built cross-platform React Native mobile apps powering field operations (inspections, invoice tracking, Permit-to-Work) — improved on-site efficiency by 45% with offline-first sync and real-time data capture.",
      "Designed GraphQL APIs over tuned PostgreSQL and MySQL — cut average data-fetch latency by 60% and unified Strapi CMS, internal microservices, and frontend clients.",
      "Delivered consumer-facing portals and admin dashboards for premium hospitality brands (luxury hotel portals, F&B platforms, residential community apps) — strong focus on performance, accessibility, SEO.",
      "Drove delivery in a 6-engineer Scrum team — consistently shipped 20% ahead of sprint commitments with >85% test coverage.",
    ],
    stack: ["Next.js", "React Native", "GraphQL", "TypeScript", "PostgreSQL", "Strapi"],
  },
  {
    year: "2024",
    title: "Full-Stack Developer (Contract)",
    company: "Veeva Systems",
    location: "London, UK · Remote",
    period: "Oct 2024 — Apr 2025",
    image: "/london.jpg",
    summary: "Pharma SaaS for 500+ clinical-trial clients.",
    bullets: [
      "Built and deployed enterprise SaaS modules for 500+ pharmaceutical clients on React, Node.js, and Java Spring Boot — 99.9% uptime, full FDA 21 CFR Part 11 compliance.",
      "Designed REST APIs and microservices integrating Veeva Vault with third-party clinical-trial systems — cut data-processing time by 65%.",
      "Optimized PostgreSQL queries and introduced Redis caching — 40% throughput boost for 10,000+ life-sciences professionals.",
      "Collaborated across 3 time zones in a distributed Agile team — delivered 20+ feature releases with zero critical production incidents.",
    ],
    stack: ["React", "Node.js", "Java Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    year: "2024",
    title: "Database Engineer",
    company: "ABGA Systems & Software",
    location: "Dubai, UAE · Remote",
    period: "Feb 2024 — Oct 2024",
    image: "/dubai.jpg",
    summary: "High-availability data infrastructure for mission-critical apps.",
    bullets: [
      "Designed and deployed high-availability MySQL and MongoDB schemas — maintained zero unplanned downtime across the engagement.",
      "Optimized SQL queries, indexing, and aggregation pipelines — reduced query response time by ~40% across analytics workloads.",
      "Implemented automated backup, replication, and Prometheus-driven monitoring — hardened data integrity and disaster-recovery posture.",
      "Refactored data-access layers with backend engineers — eliminated N+1 patterns, improved API response times by ~30%.",
    ],
    stack: ["MySQL", "MongoDB", "Prometheus", "Replication"],
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Media Pan Arab FZE",
    location: "Cairo, Egypt",
    period: "May 2023 — Nov 2023",
    image: "/cairo.jpg",
    summary: "Production web apps for media and marketing clients.",
    bullets: [
      "Built full-stack web applications with React and Node.js / Express — delivered production features for media and marketing clients.",
      "Deployed services to AWS and Heroku with automated CI/CD via GitHub Actions — cut average deployment time by ~50%.",
      "Authored and executed unit and integration test suites — raised code coverage and reduced regression bugs.",
      "Worked with designers and product owners in Agile — translated UX wireframes into responsive, production-ready interfaces.",
    ],
    stack: ["React", "Node.js", "Express", "AWS", "GitHub Actions"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-soft">
      <div className="max-container">
        {/* Eyebrow + headline */}
        <div className="mb-20 flex items-end justify-between flex-wrap gap-6">
          <FadeUp>
            <div className="mono-label mb-6">— Experience</div>
            <h2 className="display text-[clamp(2.25rem,6vw,5.5rem)] max-w-3xl">
              Four years. Three&nbsp;continents. Real&nbsp;work.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="text-sm text-[rgb(var(--muted))] max-w-xs">
              From pharma SaaS in London to hospitality platforms in Dubai — every role pushed me deeper into both scale and craft.
            </p>
          </FadeUp>
        </div>

        {/* Roles */}
        <div>
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 py-14 ${
                i !== 0 ? "border-t border-soft" : ""
              }`}
            >
              {/* Year + circular city thumbnail as visual anchor */}
              <div className="md:col-span-3">
                <div className="md:sticky md:top-32 flex md:block items-center gap-6">
                  <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border border-mid flex-shrink-0 mb-0 md:mb-6">
                    <Image
                      src={exp.image}
                      alt={exp.location}
                      fill
                      sizes="(max-width: 768px) 80px, 128px"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[rgb(var(--foreground))]/10 rounded-full pointer-events-none" />
                  </div>
                  <div>
                    <div className="display text-[clamp(2rem,5vw,4rem)] leading-none text-[rgb(var(--foreground))]/12 mb-2">
                      {exp.year}
                    </div>
                    <div className="mono-label">{exp.period}</div>
                  </div>
                </div>
              </div>

              {/* Role content */}
              <div className="md:col-span-9">
                <div className="mb-6">
                  <h3 className="display-tight text-[clamp(1.5rem,3vw,2.5rem)] mb-2">
                    {exp.title}
                    {exp.current && (
                      <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 align-middle font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Current
                      </span>
                    )}
                  </h3>
                  <div className="text-sm mb-2">
                    <span className="text-[rgb(var(--foreground))] font-medium">{exp.company}</span>
                    <span className="text-[rgb(var(--muted))]"> · {exp.location}</span>
                  </div>
                  <p className="text-sm text-[rgb(var(--muted))] italic">{exp.summary}</p>
                </div>

                <ul className="space-y-3 max-w-3xl mb-6">
                  {exp.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex gap-4 text-[0.9375rem] leading-relaxed text-[rgb(var(--muted))]"
                    >
                      <span className="text-[rgb(var(--foreground))]/30 mt-1 flex-shrink-0 text-xs">
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-mid text-[rgb(var(--muted))]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
