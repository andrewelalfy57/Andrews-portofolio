"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";

const channels = [
  { label: "Email", value: "andrew78041@gmail.com", href: "mailto:andrew78041@gmail.com" },
  { label: "Phone", value: "+971 50 198 2257", href: "tel:+971501982257" },
  { label: "LinkedIn", value: "andrew-alalfy", href: "https://linkedin.com/in/andrew-alalfy/" },
  { label: "GitHub", value: "andrewelalfy57", href: "https://github.com/andrewelalfy57" },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setTimeout(() => {
      setFormState("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-mid py-3 px-0 text-base text-[rgb(var(--foreground))] placeholder-[rgb(var(--dim))] focus:outline-none focus:border-[rgb(var(--foreground))] transition-colors";

  return (
    <section id="contact" className="section-padding border-t border-soft">
      <div className="max-container">
        <FadeUp className="mb-10">
          <div className="mono-label">Contact</div>
        </FadeUp>

        {/* Dominant headline + Dubai circular accent */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
          <FadeUp className="md:col-span-9">
            <h2 className="display text-[clamp(4rem,16vw,16rem)] leading-[0.88]">
              Let&apos;s
              <br />
              <span className="text-[rgb(var(--muted))]">talk.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="md:col-span-3">
            <div className="relative aspect-square rounded-full overflow-hidden border border-mid max-w-[240px] mx-auto md:ml-auto">
              <Image
                src="/dubai-skyline.jpg"
                alt="Dubai skyline"
                fill
                sizes="(max-width: 768px) 240px, 240px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[rgb(var(--foreground))]/10 rounded-full pointer-events-none" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 mono-label !text-white whitespace-nowrap">
                Based in Dubai
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Subline */}
        <FadeUp delay={0.1} className="mb-20">
          <p className="text-lg md:text-xl text-[rgb(var(--muted))] max-w-2xl leading-[1.5]">
            Hiring a senior engineer, scoping an enterprise app, or comparing notes on GraphQL performance my inbox is open. I read every message and respond within 48 hours.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5 space-y-1">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline justify-between py-5 border-b border-soft group"
              >
                <span className="mono-label">{c.label}</span>
                <span className="text-base md:text-lg text-[rgb(var(--foreground))] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1">
                  {c.value}
                </span>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="md:col-span-7 space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className={inputClass}
              />
            </div>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className={inputClass}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Your message…"
              className={`${inputClass} resize-none`}
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={formState === "sending" || formState === "success"}
                className="text-link text-sm !text-[rgb(var(--foreground))] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {formState === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send message <span aria-hidden>→</span>
                    </motion.span>
                  )}
                  {formState === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Sending…
                    </motion.span>
                  )}
                  {formState === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Message sent ✓
                    </motion.span>
                  )}
                  {formState === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Something went wrong try again
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
