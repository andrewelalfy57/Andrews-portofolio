"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Emaar",
    location: "Dubai, UAE",
    period: "Apr 2025 – Present",
    type: "work",
    current: true,
    bullets: [
      "Developed and launched 5 enterprise web applications using Next.js, GraphQL, and React, serving 10K+ internal users and streamlining business operations across multiple departments.",
      "Built responsive mobile applications with React Native that improved field operations efficiency by 45%, enabling real-time data collection and synchronization for Emaar managers.",
      "Designed and implemented GraphQL APIs with optimized SQL queries, reducing data fetching time by 60% and enabling seamless integration between frontend and backend services.",
      "Collaborated with a cross-functional team of 6 developers using Agile/Scrum, delivering projects 20% ahead of schedule while maintaining 85%+ code coverage.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Veeva Systems and Software",
    location: "London, England · Remote",
    period: "Oct 2024 – Apr 2025",
    type: "work",
    current: false,
    bullets: [
      "Developed and deployed enterprise SaaS applications for 500+ pharmaceutical clients using React, Node.js, and Java Spring Boot, ensuring 99.9% uptime and FDA 21 CFR Part 11 compliance.",
      "Led remote implementation of RESTful APIs and microservices that integrated Veeva Vault with third-party clinical systems, reducing data processing time by 65%.",
      "Collaborated across 3 time zones with distributed teams using Agile, delivering 20+ feature releases on schedule with zero critical production issues.",
      "Optimized PostgreSQL queries and implemented Redis caching that improved performance by 40% for 10,000+ life sciences professionals.",
    ],
  },
  {
    title: "Database Engineer",
    company: "ABGA Systems and Software",
    location: "Dubai, UAE · Remote",
    period: "Feb 2024 – Oct 2024",
    type: "work",
    current: false,
    bullets: [
      "Designed and implemented scalable, high-availability databases (MySQL & MongoDB) for mission-critical applications.",
      "Optimized SQL queries and indexing strategies, improving response times and system performance.",
      "Ensured zero downtime through proactive performance tuning and monitoring.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Media Pan Arab FZE",
    location: "Cairo, Egypt",
    period: "May 2023 – Nov 2023",
    type: "work",
    current: false,
    bullets: [
      "Created and managed full-stack web applications using React (frontend) and Node.js (backend).",
      "Deployed applications on AWS and Heroku with CI/CD pipelines, reducing deployment times and improving code quality.",
      "Designed, developed, and executed detailed test plans and test cases.",
    ],
  },
  {
    title: "B.Sc. Computer Science Engineering",
    company: "German University in Cairo",
    location: "Cairo, Egypt",
    period: "Sep 2016 – Jul 2021",
    type: "education",
    current: false,
    bullets: [
      "Graduated with a Bachelor of Science in Computer Science Engineering.",
      "Coursework in algorithms, data structures, databases, software engineering, and AI.",
    ],
  },
];

function TimelineItem({
  exp,
  index,
  isLast,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 300 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
            exp.current
              ? "bg-[rgb(var(--accent))] animate-pulse-glow"
              : exp.type === "education"
              ? "bg-emerald-600/20 border border-emerald-600/40"
              : "bg-[rgb(var(--card))] border border-[rgb(var(--border))]"
          }`}
        >
          {exp.type === "education" ? (
            <GraduationCap size={16} className="text-emerald-400" />
          ) : (
            <Briefcase
              size={16}
              className={exp.current ? "text-white" : "text-[rgb(var(--accent-light))]"}
            />
          )}
        </motion.div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[rgb(var(--border))] to-transparent min-h-6" />
        )}
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className={`glass rounded-2xl p-6 border mb-6 flex-1 ${
          exp.current
            ? "border-[rgb(var(--accent))]/30 shadow-lg shadow-[rgb(var(--accent))]/5"
            : "border-[rgb(var(--border))]/40 hover:border-[rgb(var(--border))]/70"
        } transition-all`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-lg">{exp.title}</h3>
              {exp.current && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[rgb(var(--accent))]/15 text-[rgb(var(--accent-light))] font-mono">
                  Current
                </span>
              )}
            </div>
            <div className="text-[rgb(var(--accent-light))] font-semibold">{exp.company}</div>
            <div className="text-sm text-[rgb(var(--muted))]">{exp.location}</div>
          </div>
          <span className="font-mono text-xs text-[rgb(var(--muted))] whitespace-nowrap mt-1">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-[rgb(var(--muted))] leading-relaxed">
              <span className="text-[rgb(var(--accent))] mt-1.5 flex-shrink-0">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" className="section-padding">
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent-light))] tracking-widest">
            02.
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Experience</h2>
          <div className="flex-1 h-px bg-[rgb(var(--border))]" />
        </motion.div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.company + exp.period}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
