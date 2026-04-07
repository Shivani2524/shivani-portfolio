"use client";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "AI Tools",
    skills: ["Cursor", "Antigravity", "Claude", "Gemini"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-8 lg:pr-24 bg-[var(--bg)] overflow-hidden">
      {/* Background Heading */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0 flex justify-center">
        <h2 className="text-outlined font-display font-900 opacity-[0.03] whitespace-nowrap text-center"
          style={{ fontSize: "clamp(10rem, 20vw, 20rem)" }}>
          SKILLS
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-[var(--cyan)]" />
            <span className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--cyan)]">Expertise</span>
            <span className="w-12 h-px bg-[var(--cyan)]" />
          </div>
          <h3 className="font-display text-5xl lg:text-6xl font-800 text-white">
            Technical <span style={{ color: "var(--purple)" }} className="purple-text-glow">Stack</span>
          </h3>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="relative">
              <div className="glass-card p-10 rounded-3xl border border-[var(--purple)]/15 relative overflow-hidden">
                 {/* Ambient orb */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-10" style={{ background: "var(--cyan)" }} />
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[80px] opacity-10" style={{ background: "var(--purple)" }} />
                 
                 <h4 className="font-display text-2xl font-800 text-white mb-8 text-center border-b border-white/5 pb-4">
                    <span style={{ color: "var(--cyan)" }}>{category.title}</span>
                 </h4>

                 <div className="flex flex-wrap justify-center gap-4">
                    {category.skills.map((tech) => (
                      <div 
                        key={tech}
                        className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--purple)]/30 hover:purple-glow transition-all duration-300 flex flex-col items-center gap-3 min-w-[120px]"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--purple)] transition-colors">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <span className="text-[12px] font-mono tracking-widest text-[var(--text-secondary)] uppercase group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
