"use client";

import Image from "next/image";

const socials = [
  { label: "GitHub", href: "https://github.com/andrewelalfy57" },
  { label: "LinkedIn", href: "https://linkedin.com/in/andrew-alalfy/" },
  { label: "Email", href: "mailto:andrew78041@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-soft">
      <div className="max-container py-12">
        {/* Portrait + giant signature row */}
        <div className="flex items-center gap-6 md:gap-10 mb-12 flex-wrap">
          <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border border-mid flex-shrink-0">
            <Image
              src="/andrew.png"
              alt="Andrew Ayman Alfy"
              fill
              sizes="96px"
              style={{ objectFit: "cover", objectPosition: "50% 25%" }}
            />
          </div>
          <div className="display text-[clamp(2rem,10vw,9rem)] leading-[0.9]">
            Andrew Ayman Alfy.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-end pt-10 border-t border-soft">
          <div className="md:col-span-4">
            <div className="mono-label mb-2">Currently</div>
            <div className="text-sm">Senior Software Engineer · Emaar, Dubai</div>
          </div>

          <div className="md:col-span-4">
            <div className="mono-label mb-2">Elsewhere</div>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-link text-sm !text-[rgb(var(--foreground))]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="mono-label mb-2">© {year}</div>
            <a href="#hero" className="text-link text-sm !text-[rgb(var(--foreground))]">
              Back to top <span aria-hidden>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
