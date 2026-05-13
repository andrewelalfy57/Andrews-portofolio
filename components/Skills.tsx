"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Languages",
    color: "from-indigo-500 to-indigo-700",
    accent: "rgb(99 102 241)",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C/C++"],
  },
  {
    label: "Frontend",
    color: "from-sky-500 to-sky-700",
    accent: "rgb(14 165 233)",
    skills: ["React", "Next.js", "React Native", "Redux", "HTML", "CSS", "Tailwind"],
  },
  {
    label: "Backend & APIs",
    color: "from-violet-500 to-violet-700",
    accent: "rgb(139 92 246)",
    skills: ["Node.js", "GraphQL", "REST APIs", "Java Spring Boot", "Microservices"],
  },
  {
    label: "Databases",
    color: "from-emerald-500 to-emerald-700",
    accent: "rgb(16 185 129)",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "DevOps & Cloud",
    color: "from-orange-500 to-orange-700",
    accent: "rgb(249 115 22)",
    skills: ["AWS", "CircleCI", "Ansible", "Prometheus", "CI/CD", "Git", "GitHub"],
  },
  {
    label: "Specialties",
    color: "from-pink-500 to-pink-700",
    accent: "rgb(236 72 153)",
    skills: ["Augmented Reality", "Unity", "Agile / Scrum", "Performance Optimization", "Testing"],
  },
];

const proficiencies = [
  { label: "React / Next.js", level: 95 },
  { label: "TypeScript", level: 90 },
  { label: "React Native", level: 88 },
  { label: "GraphQL", level: 85 },
  { label: "Node.js", level: 85 },
  { label: "Java / Spring Boot", level: 75 },
  { label: "AWS / Cloud", level: 70 },
  { label: "Python", level: 68 },
];

function SkillBar({ skill, delay }: { skill: { label: string; level: number }; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.label}</span>
        <span className="font-mono text-[rgb(var(--muted))]">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[rgb(var(--border))]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-secondary))]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="section-padding mesh-gradient">
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent-light))] tracking-widest">
            03.
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skills</h2>
          <div className="flex-1 h-px bg-[rgb(var(--border))]" />
        </motion.div>

        {/* Skill chips grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-[rgb(var(--border))]/40 hover:border-[rgb(var(--accent))]/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`}
                />
                <h3 className="font-bold text-sm tracking-wide uppercase text-[rgb(var(--muted))]">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                    className="text-xs px-3 py-1.5 rounded-full font-mono font-medium"
                    style={{
                      background: `${cat.accent}15`,
                      border: `1px solid ${cat.accent}30`,
                      color: cat.accent,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border border-[rgb(var(--border))]/40"
        >
          <h3 className="font-bold mb-8 text-lg">Core Proficiencies</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {proficiencies.map((skill, i) => (
              <SkillBar key={skill.label} skill={skill} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 glass rounded-2xl p-6 border border-[rgb(var(--border))]/40"
        >
          <h3 className="font-bold mb-4 text-sm uppercase tracking-widest text-[rgb(var(--muted))]">
            Spoken Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: "Arabic", level: "Native" },
              { lang: "English", level: "Native / Bilingual" },
              { lang: "German", level: "B1" },
            ].map((l) => (
              <div
                key={l.lang}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgb(var(--border))]/50"
              >
                <span className="font-semibold">{l.lang}</span>
                <span className="text-xs text-[rgb(var(--muted))]">· {l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
