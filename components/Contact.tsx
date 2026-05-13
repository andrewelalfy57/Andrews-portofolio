"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "andrew78041@gmail.com",
    href: "mailto:andrew78041@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 50 198 2257",
    href: "tel:+971501982257",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
    href: "https://maps.google.com/?q=Dubai,UAE",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "andrew-alalfy",
    href: "https://linkedin.com/in/andrew-alalfy/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "andrewelalfy57",
    href: "https://github.com/andrewelalfy57",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // EmailJS or similar integration can be added here
    // For now, simulate a successful send after 1.5s
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setTimeout(() => {
      setFormState("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding mesh-gradient">
      <div className="max-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent-light))] tracking-widest">
            05.
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
          <div className="flex-1 h-px bg-[rgb(var(--border))]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[rgb(var(--muted))] mb-12 max-w-lg"
        >
          Whether you have a project in mind, a role to fill, or just want to chat about
          tech — my inbox is always open.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 glass rounded-xl border border-[rgb(var(--border))]/40 hover:border-[rgb(var(--accent))]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgb(var(--accent))]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(var(--accent))]/20 transition-colors">
                  <item.icon size={18} className="text-[rgb(var(--accent-light))]" />
                </div>
                <div>
                  <div className="text-xs text-[rgb(var(--muted))] font-mono">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-[rgb(var(--border))]/40 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[rgb(var(--muted))] uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--card))]/60 border border-[rgb(var(--border))]/60 focus:border-[rgb(var(--accent))]/50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]/10 text-sm transition-all placeholder-[rgb(var(--muted))]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[rgb(var(--muted))] uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--card))]/60 border border-[rgb(var(--border))]/60 focus:border-[rgb(var(--accent))]/50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]/10 text-sm transition-all placeholder-[rgb(var(--muted))]/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[rgb(var(--muted))] uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--card))]/60 border border-[rgb(var(--border))]/60 focus:border-[rgb(var(--accent))]/50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]/10 text-sm transition-all placeholder-[rgb(var(--muted))]/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[rgb(var(--muted))] uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--card))]/60 border border-[rgb(var(--border))]/60 focus:border-[rgb(var(--accent))]/50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]/10 text-sm transition-all placeholder-[rgb(var(--muted))]/50 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState === "sending" || formState === "success"}
                whileHover={{ scale: formState === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: formState === "idle" ? 0.98 : 1 }}
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  formState === "success"
                    ? "bg-emerald-600 text-white"
                    : formState === "error"
                    ? "bg-red-600 text-white"
                    : "bg-[rgb(var(--accent))] text-white hover:bg-[rgb(var(--accent-light))] shadow-lg shadow-[rgb(var(--accent))]/20"
                }`}
              >
                <AnimatePresence mode="wait">
                  {formState === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </motion.span>
                  )}
                  {formState === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </motion.span>
                  )}
                  {formState === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Message Sent!
                    </motion.span>
                  )}
                  {formState === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle size={16} />
                      Error. Try again.
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
