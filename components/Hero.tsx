"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ThreeBackground from "./ThreeBackground";

const roles = [
  "AI Engineer",
  "Software Engineer",
  "Full-Stack Developer",
  "Data Science Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanline"
    >
      {/* 3D Background */}
      <ThreeBackground />

      {/* Radial ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      {/* Main content — centered */}
      <div className="relative z-[2] w-full max-w-6xl mx-auto px-8 lg:pr-24 pt-20 flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* ── Left: text content ── */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting */}
          <p
            className="font-mono text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up"
            style={{ color: "var(--cyan)", animationDelay: "0s" }}
          >
            Hi! I&apos;m
          </p>

          {/* Name — Professional Solid Colors */}
          <h1
            className="font-sans leading-none mb-4 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s", fontFamily: "'Inter', 'Roboto', sans-serif" }}
          >
            <span
              className="block text-white"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                fontWeight: 800,
              }}
            >
              SHIVANI
            </span>
            <span
              className="block text-gray-400"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                fontWeight: 800,
              }}
            >
              SIRISILLA
            </span>
          </h1>

          {/* Role typewriter */}
          <div className="h-8 flex items-center mb-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="font-mono text-base" style={{ color: "var(--text-secondary)" }}>
              {displayed}
              <span className="animate-blink" style={{ color: "var(--purple)" }}>|</span>
            </span>
          </div>

          {/* Bio */}
          <p
            className="text-[var(--text-secondary)] text-base leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            CSE student at SVIT with a strong focus on Artificial Intelligence, 
            Data Science, and full-stack software development. Passionate about 
            writing clean code and leveraging modern tech stacks to solve complex, 
            real-world problems.
          </p>

          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-up"
            style={{
              background: "rgba(168,85,247,0.05)",
              borderColor: "rgba(168,85,247,0.3)",
              animationDelay: "0.35s",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--purple)" }} />
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--purple)" }}>
              Available for opportunities
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up mb-12" style={{ animationDelay: "0.4s" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-mono text-sm tracking-widest rounded-lg transition-all duration-300 hover:scale-105"
              style={{ 
                background: "linear-gradient(90deg, var(--purple) 0%, var(--cyan) 100%)", 
                color: "#fff", 
                fontWeight: 700,
                boxShadow: "0 0 20px rgba(34,211,238,0.4), inset 0 0 10px rgba(255,255,255,0.2)" 
              }}
            >
              RESUME 📄
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 font-mono text-sm tracking-wider rounded-lg transition-all duration-300 hover:scale-105 border glass-card"
              style={{ borderColor: "rgba(168,85,247,0.3)", color: "#fff" }}
            >
              Projects →
            </a>
            <a
              href="https://github.com/Shivani2524"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 font-mono text-sm tracking-wider rounded-lg border transition-all duration-300 hover:scale-105 glass-card"
              style={{ borderColor: "rgba(168,85,247,0.3)", color: "var(--text-secondary)" }}
            >
              GitHub ↗
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 pt-8 border-t animate-fade-up"
            style={{ borderColor: "rgba(168,85,247,0.15)", animationDelay: "0.5s" }}
          >
            {[
              { val: "3+", label: "Projects" },
              { val: "4th", label: "HackForge" },
              { val: "8.1", label: "GPA / 10" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-800 purple-text-glow" style={{ color: "var(--purple)" }}>
                  {s.val}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1 font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: grayscale portrait ── */}
        <div className="hidden lg:flex flex-col items-center gap-6 animate-fade-up flex-shrink-0" style={{ animationDelay: "0.2s" }}>
          {/* Profile photo — original color + simple hover effect */}
          <div className="relative group">
            {/* Outer neon ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-50 blur-xl neon-border-anim group-hover:opacity-80 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle, var(--purple) 0%, var(--cyan) 100%)" }}
            />
            <div
              className="relative w-60 h-60 rounded-full overflow-hidden border-2 shadow-xl"
              style={{
                borderColor: "rgba(168,85,247,0.5)",
                boxShadow: "0 0 40px rgba(168,85,247,0.2), 0 0 80px rgba(168,85,247,0.08)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Shivani Sirisilla"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Quick stats vertical */}
          <div className="flex flex-col gap-3 w-full">
            {[
              { icon: "🎓", text: "SVIT · B.Tech CSE" },
              { icon: "⚡", text: "SWE Intern @ YugaYatra" },
              { icon: "📍", text: "Hyderabad, India" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card text-sm font-mono"
              >
                <span>{item.icon}</span>
                <span className="text-[var(--text-secondary)]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[var(--text-muted)] uppercase">Scroll</span>
        <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, var(--purple), transparent)" }} />
      </div>
    </section>
  );
}
