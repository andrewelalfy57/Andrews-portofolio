"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeUp from "./FadeUp";
import { useTheme } from "./ThemeProvider";

const experiences = [
  {
    year: "2025",
    title: "Senior Software Engineer",
    company: "Emaar Properties",
    location: "Dubai, UAE",
    period: "Apr 2025 — Present",
    current: true,
    image: "/emaarblack.webp",
    imageLight: "/EMAAR.png",
    imageFit: "contain" as const,
    summary:
      "Address Hotels, Armani Hotels, Emaar Entertainment Group — luxury brand portals + enterprise platforms.",
    bullets: [
      "Led full-stack development of the Address Hotels and Armani Hotels websites — flagship consumer portals for Emaar Hospitality Group's luxury brands — owning the project end-to-end from architecture and implementation to direct business-stakeholder coordination.",
      "Led the Emaar Entertainment Group website as Senior Developer — translated business requirements into engineering tasks, coordinated delivery across the dev team, and gated all releases through code review and QA before go-live.",
      "Architected and shipped 5 enterprise full-stack applications on Next.js (App Router), TypeScript, React, and GraphQL — serving 10,000+ internal users across Emaar's hospitality and entertainment divisions.",
      "Built cross-platform React Native mobile apps powering field operations (inspections, invoice tracking, Permit-to-Work) — improved on-site efficiency by 45% with offline-first sync and real-time data capture.",
      "Designed GraphQL APIs over tuned PostgreSQL and MySQL — cut data-fetch latency by 60% and unified Strapi CMS, internal microservices, and frontend clients.",
      "Led a focused 2-engineer team with full delivery ownership and direct stakeholder alignment — consistently shipped 20% ahead of sprint commitments with >85% test coverage.",
    ],
    stack: ["Next.js", "React Native", "GraphQL", "TypeScript", "PostgreSQL", "Strapi"],
  },
  {
    year: "2024",
    title: "Full-Stack Developer (Contract)",
    company: "Veeva Systems",
    location: "London, UK · Remote",
    period: "Oct 2024 — Apr 2025",
    image: "/london.png",
    summary: "Global HCP data platform (Veeva Network / OpenData) + Veeva Vault — serving 500+ pharma clients.",
    bullets: [
      "Contributed to Veeva Network / OpenData — a global Healthcare Professional (HCP) data platform consolidating physician profiles worldwide (specialties, credentials, affiliations, current/historical work locations) used by pharma companies for compliant outreach, territory planning, and clinical-trial recruitment.",
      "Engineered solutions on Veeva Vault — Veeva's regulated content-management platform — built document-workflow features, automated audit-ready record handling, and supported FDA 21 CFR Part 11 compliance.",
      "Designed REST APIs and microservices integrating Veeva Vault and the HCP data platform with pharmaceutical CRM and clinical-trial systems — cut data-processing time by 65% for 500+ pharmaceutical clients.",
      "Optimized PostgreSQL queries and introduced Redis caching — 40% throughput boost for 10,000+ life-sciences professionals with 99.9% uptime.",
      "Collaborated across 3 time zones in a distributed Agile team — delivered 20+ feature releases with zero critical production incidents.",
    ],
    stack: ["React", "Node.js", "Java Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    year: "2024",
    title: "Database Engineer (Contract)",
    company: "ABGA Systems & Software",
    location: "Dubai, UAE · Remote",
    period: "Feb 2024 — Oct 2024",
    textLogo: "ABGA",
    summary: "Data infrastructure powering ABGA's CRDMS, Training Mgmt, Product Tracking, and Sales Force Monitor platforms.",
    bullets: [
      "Built and maintained database infrastructure for ABGA's enterprise product suite — including the Cross-Region Data Management System (CRDMS), a platform consolidating geographically distributed data from multiple regional offices into a single, queryable layer.",
      "Designed MySQL and MongoDB schemas powering ABGA's Training Management, Product Tracking, and Sales Force Monitor platforms — modelled for multi-tenant isolation, multi-region replication, and audit traceability.",
      "Tuned slow queries, added missing indexes, and eliminated N+1 access patterns across reporting and admin dashboards — turned timed-out workflows into ones that loaded in real time.",
      "Set up automated backup, replication, and Prometheus-driven monitoring with alerting — surfaced data issues before customers reported them; partnered with backend devs across healthcare, e-commerce, and education clients.",
    ],
    stack: ["MySQL", "MongoDB", "Prometheus", "Multi-Region", "Replication"],
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Media Pan Arab FZE",
    location: "Cairo, Egypt",
    period: "May 2022 — Nov 2022",
    image: "/mediapan-dark.svg",
    imageLight: "/mediapan.svg",
    imageFit: "contain" as const,
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
  const { theme } = useTheme();

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
              className={`grid md:grid-cols-12 gap-8 md:gap-12 py-14 ${i !== 0 ? "border-t border-soft" : ""
                }`}
            >
              {/* Year + circular city thumbnail as visual anchor */}
              <div className="md:col-span-3">
                <div className="md:sticky md:top-32 flex md:block items-center gap-6">
                  <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border border-mid flex-shrink-0 mb-0 md:mb-6 flex items-center justify-center bg-[rgb(var(--background))]">
                    {"textLogo" in exp && exp.textLogo ? (
                      <span className="font-mono font-bold text-sm md:text-base tracking-widest text-[rgb(var(--foreground))]">
                        {exp.textLogo}
                      </span>
                    ) : (
                      <Image
                        src={theme === "dark" ? (exp as { image: string }).image : ((exp as { imageLight?: string; image: string }).imageLight ?? (exp as { image: string }).image)}
                        alt={exp.location}
                        fill
                        sizes="(max-width: 768px) 80px, 128px"
                        style={{
                          objectFit: "imageFit" in exp && (exp as { imageFit?: string }).imageFit ? (exp as { imageFit: "cover" | "contain" }).imageFit : "cover",
                        }}
                      />
                    )}
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
