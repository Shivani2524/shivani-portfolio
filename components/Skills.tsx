"use client";
import { useEffect, useState } from "react";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "JavaScript / TypeScript", level: 90, icon: "JS" },
      { name: "React / Next.js", level: 95, icon: "RX" },
      { name: "Node.js / Express", level: 85, icon: "ND" },
      { name: "Python / FastAPI", level: 80, icon: "PY" },
    ],
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "OpenCV / Computer Vision", level: 75, icon: "CV" },
      { name: "TensorFlow / PyTorch", level: 65, icon: "TF" },
      { name: "VS Code API", level: 85, icon: "VS" },
      { name: "Git / Docker", level: 80, icon: "GT" },
    ],
  },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "OpenCV", 
  "TensorFlow", "MongoDB", "PostgreSQL", "FastAPI", "TailwindCSS", "Framer Motion"
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills" className="relative py-24 px-8 lg:pr-24 bg-[var(--bg)] overflow-hidden">
      {/* Background Heading */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0">
        <h2 className="text-outlined font-display font-900 opacity-[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(12rem, 25vw, 22rem)" }}>
          SKILLS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-[var(--cyan)]" />
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--cyan)]">Expertise</span>
          </div>
          <h3 className="font-display text-5xl lg:text-6xl font-800 text-white">
            Technical <span style={{ color: "var(--purple)" }} className="purple-text-glow">Stack</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ── Left: Progress Bars ── */}
          <div className="space-y-12">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--purple)" }} />
                  {group.category}
                </h4>
                <div className="space-y-8">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="relative group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-700 text-white flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[10px] text-[var(--purple)] font-mono border-[var(--purple)]/20">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-[var(--purple)]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out purple-glow"
                          style={{ 
                            width: mounted ? `${skill.level}%` : '0%', 
                            background: "linear-gradient(90deg, var(--purple), var(--cyan))",
                            boxShadow: "0 0 10px rgba(168,85,247,0.4)"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Tech Cloud / Icon Grid ── */}
          <div className="relative">
            <div className="glass-card p-10 rounded-3xl border border-[var(--purple)]/15 relative overflow-hidden">
               {/* Ambient orb */}
               <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20" style={{ background: "var(--cyan)" }} />
               
               <h4 className="font-display text-2xl font-800 text-white mb-8">
                  Frameworks & <br/> <span style={{ color: "var(--cyan)" }}>Technologies</span>
               </h4>

               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {techStack.map((tech) => (
                    <div 
                      key={tech}
                      className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--purple)]/30 hover:purple-glow transition-all duration-300 flex flex-col items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--purple)] transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
               </div>

               <div className="mt-12 pt-8 border-t border-white/5 text-center">
                  <p className="font-mono text-xs text-[var(--text-muted)] italic">
                    &quot;Constantly exploring new tools and architectures...&quot;
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
