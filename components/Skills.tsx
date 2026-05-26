"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

const categories = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C / C++"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "App Router", "React Native", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Java Spring Boot", "GraphQL", "REST", "Microservices", "Strapi CMS"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query optimization", "Indexing"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS", "Docker", "GitHub Actions", "CircleCI", "Heroku", "Ansible", "Prometheus", "CI/CD"],
  },
  {
    label: "Specialties",
    items: ["AR / Unity", "ARKit", "ARCore", "Performance", "Agile / Scrum", "Test planning", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-soft">
      <div className="max-container">
        {/* Eyebrow */}
        <FadeUp className="mb-16">
          <div className="mono-label">— Stack</div>
        </FadeUp>

        {/* Poster-style headline + image accent */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-24">
          <FadeUp className="md:col-span-9">
            <h2 className="display text-[clamp(2.5rem,8vw,8rem)] max-w-[16ch]">
              Tools chosen for production scale.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="md:col-span-3">
            <div className="relative aspect-square rounded-full overflow-hidden border border-mid max-w-[260px] mx-auto md:ml-auto">
              <Image
                src="/code.jpg"
                alt="Developer working on code"
                fill
                sizes="(max-width: 768px) 260px, 260px"
                style={{ objectFit: "cover", filter: "grayscale(0.4) contrast(1.05)" }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[rgb(var(--foreground))]/10 rounded-full pointer-events-none" />
            </div>
          </FadeUp>
        </div>

        {/* Card grid — visually distinct from About/Experience */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgb(var(--foreground))]/8 border border-mid">
          {categories.map((cat, i) => (
            <FadeUp
              key={cat.label}
              delay={i * 0.05}
              className="bg-[rgb(var(--background))] p-8 md:p-10 min-h-[260px] flex flex-col group hover:bg-[rgb(var(--surface))] transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="display-tight text-2xl">{cat.label}</span>
                <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm md:text-base text-[rgb(var(--muted))] group-hover:text-[rgb(var(--foreground))] transition-colors duration-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Footer line — a single emphatic stat */}
        <FadeUp delay={0.2} className="mt-16 pt-10 border-t border-soft">
          <p className="text-base md:text-lg text-[rgb(var(--muted))] max-w-3xl">
            Every tool above has earned its place in production — not on a résumé. I optimize for what scales, what stays maintainable, and what the team behind me can ship without my help.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
