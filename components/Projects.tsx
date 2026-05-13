"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Cpu, Lock, Smartphone } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: "Emaar Social Portal",
    company: "Emaar (Enterprise)",
    description:
      "Enterprise web application serving 10,000+ Emaar employees across departments. Features real-time collaboration, document management, and internal communications infrastructure built on Next.js + GraphQL.",
    tags: ["Next.js", "GraphQL", "React", "TypeScript", "SQL"],
    icon: Globe,
    color: "from-indigo-500/20 to-indigo-600/5",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
    private: true,
    metrics: ["10K+ Users", "20% Faster Delivery", "85%+ Coverage"],
  },
  {
    title: "Field Ops Mobile App",
    company: "Emaar (Enterprise)",
    description:
      "React Native application enabling real-time data collection and synchronization for Emaar field managers. Reduced field operations time by 45% with offline-first architecture and live sync.",
    tags: ["React Native", "GraphQL", "Redux", "Node.js"],
    icon: Smartphone,
    color: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20",
    iconColor: "text-sky-400",
    private: true,
    metrics: ["45% Efficiency Gain", "Offline-First", "Real-Time Sync"],
  },
  {
    title: "Veeva Vault Integration Platform",
    company: "Veeva Systems (SaaS)",
    description:
      "Enterprise SaaS system for 500+ pharmaceutical clients integrating Veeva Vault with third-party clinical trial systems. Full FDA 21 CFR Part 11 compliance with 99.9% uptime SLA.",
    tags: ["React", "Java Spring Boot", "Node.js", "PostgreSQL", "Redis", "Microservices"],
    icon: Cpu,
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    private: true,
    metrics: ["500+ Pharma Clients", "99.9% Uptime", "65% Faster Processing"],
  },
  {
    title: "AR Restaurant Experience",
    company: "Personal / Ongoing",
    description:
      "Augmented Reality platform for restaurants that turns QR codes into immersive 3D menu experiences. Customers scan a code and see food items in AR before ordering — bridging hospitality and spatial computing.",
    tags: ["Unity", "ARKit", "ARCore", "C#", "QR Integration"],
    icon: Cpu,
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
    private: false,
    github: "https://github.com/andrewelalfy57",
    metrics: ["3D AR Menus", "QR-Powered", "2020 – Present"],
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`relative glass rounded-2xl p-6 border ${project.border} bg-gradient-to-br ${project.color} transition-all hover:shadow-2xl hover:shadow-black/20 group`}
    >
      {project.featured && (
        <div className="absolute -top-3 right-6">
          <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-secondary))] text-white font-semibold">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl bg-[rgb(var(--card))]/50 flex items-center justify-center ${project.iconColor}`}
        >
          <project.icon size={22} />
        </div>
        <div className="flex items-center gap-2">
          {project.private ? (
            <span className="flex items-center gap-1 text-xs text-[rgb(var(--muted))]">
              <Lock size={11} />
              Private
            </span>
          ) : project.github ? (
              <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full glass text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
            >
              <GithubIcon size={16} />
            </motion.a>
          ) : null}
        </div>
      </div>

      <div className="mb-1 text-xs font-mono text-[rgb(var(--muted))]">{project.company}</div>
      <h3 className="text-lg font-bold mb-3">{project.title}</h3>
      <p className="text-sm text-[rgb(var(--muted))] leading-relaxed mb-4">{project.description}</p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.metrics.map((m) => (
          <span
            key={m}
            className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--card))]/60 font-mono text-[rgb(var(--foreground))]/70"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full text-[rgb(var(--muted))] border border-[rgb(var(--border))]/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="section-padding">
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent-light))] tracking-widest">
            04.
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Projects</h2>
          <div className="flex-1 h-px bg-[rgb(var(--border))]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[rgb(var(--muted))] mb-12 max-w-lg"
        >
          Most of my work is enterprise-grade and under NDA. Here&apos;s an overview of key
          systems I&apos;ve built, with publicly available work where possible.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/andrewelalfy57"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(var(--muted))] hover:text-[rgb(var(--accent-light))] transition-colors font-mono text-sm group"
          >
          <GithubIcon size={16} />
          View GitHub Profile
            <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
