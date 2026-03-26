"use client";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Shivani2524",
    icon: (
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shivani-sirisilla-67034929b/",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    ),
  },
  {
    label: "Mail",
    href: "mailto:shivanisirisilla@gmail.com",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    ),
    stroke: true,
  },
];

export default function Nav() {
  const [active, setActive] = useState("Home");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(link); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <>
      {/* ── Logo top-left ── */}
      <div className="fixed top-6 left-8 z-50">
        <span
          className="font-display font-800 text-xl tracking-wider cursor-pointer"
          onClick={() => scrollTo("Home")}
        >
          <span className="text-white">SS</span>
          <span style={{ color: "var(--purple)" }}>.</span>
        </span>
      </div>

      {/* ── Right vertical sidebar ── */}
      <aside className="fixed right-0 top-0 h-full z-50 hidden lg:flex flex-col items-center justify-between py-8 px-4 w-16"
        style={{ borderLeft: "1px solid rgba(168,85,247,0.08)" }}
      >
        {/* Nav links — written vertically */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              title={link}
              style={{
                writingMode: "vertical-rl",
                color: active === link ? "var(--purple)" : "var(--text-muted)",
                textShadow: active === link ? "0 0 12px rgba(168,85,247,0.6)" : "none",
                transition: "color 0.3s ease, text-shadow 0.3s ease",
              }}
              className="text-[10px] font-mono tracking-[0.2em] uppercase hover:text-white transition-colors duration-300 rotate-180"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Separator line */}
        <div className="flex-1 my-4 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.3), transparent)" }} />

        {/* Social icons */}
        <div className="flex flex-col items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="text-[var(--text-muted)] hover:text-[var(--purple)] transition-all duration-300 hover:scale-110"
              style={{ filter: "drop-shadow(0 0 0px transparent)" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 6px rgba(168,85,247,0.6))")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)")}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill={s.stroke ? "none" : "currentColor"} stroke={s.stroke ? "currentColor" : "none"}>
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </aside>

      {/* ── Mobile top bar (small screens) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex lg:hidden items-center justify-between px-6 py-4"
        style={{ background: "rgba(3,3,3,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(168,85,247,0.1)" }}
      >
        <span className="font-display font-800 text-lg">
          <span className="text-white">SS</span>
          <span style={{ color: "var(--purple)" }}>.</span>
        </span>
        <nav className="flex items-center gap-4">
          {["About", "Projects", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--purple)] transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>
      </header>
    </>
  );
}
