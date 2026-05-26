"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useTheme as useNextThemes } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { resolvedTheme } = useNextThemes();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgb(var(--background))]/85 backdrop-blur-md border-b border-soft"
            : "border-b border-transparent"
        }`}
      >
        <div className="max-container flex items-center justify-between h-16">
          <a
            href="#"
            className="font-semibold tracking-tight text-sm text-[rgb(var(--foreground))]"
          >
            Andrew Alalfy
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))] transition-colors"
            >
              {resolvedTheme === "light" ? (
                <Moon size={16} strokeWidth={1.5} />
              ) : (
                <Sun size={16} strokeWidth={1.5} />
              )}
            </button>

            <a
              href="/andrew-alalfy-resume.pdf"
              download
              className="hidden md:inline-flex text-link text-sm !text-[rgb(var(--foreground))]"
            >
              Résumé <span aria-hidden>↓</span>
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden text-[rgb(var(--foreground))]"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgb(var(--background))] lg:hidden pt-24"
          >
            <div className="max-container flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-5 border-b border-soft display-tight text-4xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/andrew-alalfy-resume.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.04, duration: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="mt-8 text-sm text-link !text-[rgb(var(--foreground))]"
              >
                Download résumé <span aria-hidden>↓</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
