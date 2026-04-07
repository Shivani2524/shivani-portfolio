"use client";

const experiences = [
  {
    company: "YugaYatra Retail OPC Private Limited",
    role: "Software Engineer Intern",
    period: "Mar 2026 - Present",
    description: "Engineering web applications and integrating backend services with Firebase Studio for scalable digital solutions. Utilizing AI development tools to gain real-world web development experience.",
    tech: ["Cursor AI", "Firebase Studio", "AI Technologies"],
    type: "Internship"
  },
  {
    company: "HackForge National Level Hackathon",
    role: "4th Place Winner",
    period: "Mar 2026",
    description: "Developed Neural-Sync, a VS Code extension utilizing AI and Abstract Syntax Trees (ASTs) for intelligent, semantic merge conflict resolution.",
    tech: ["AI", "ASTs", "VS Code Extension API"],
    type: "Achievement"
  }
];

const education = [
  {
    school: "Swami Vivekananda Institute of Technology",
    degree: "B.Tech in Computer Science",
    period: "Sept 2023 - May 2027",
    gpa: "8.1 / 10.0",
    details: "Coursework: Data Structures, Computer Networking, Operating Systems, DBMS, Data Analytics"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-8 lg:pr-24 bg-[var(--bg)]">
      {/* Background Heading */}
      <div className="absolute top-20 right-0 overflow-hidden pointer-events-none z-0">
        <h2 className="text-outlined font-display font-900 opacity-[0.03] rotate-[-90deg] origin-top-right translate-x-12 translate-y-24"
          style={{ fontSize: "clamp(8rem, 15vw, 15rem)" }}>
          JOURNEY
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[var(--purple)]" />
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--purple)]">Timeline</span>
        </div>
        <h3 className="font-display text-5xl lg:text-6xl font-800 text-white mb-20 text-center lg:text-left">
          Experience & <span style={{ color: "var(--purple)" }} className="purple-text-glow">Education</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ── Left: Experience Timeline ── */}
          <div className="relative pl-8">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-bottom from-[var(--purple)] via-[var(--cyan)] to-transparent opacity-30" />
            
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-10 top-2 w-4 h-4 rounded-full border-2 border-[var(--purple)] bg-[var(--bg)] purple-glow z-10 group-hover:scale-125 transition-transform" />
                  
                  <div className="glass-card p-8 rounded-2xl border border-[var(--purple)]/10 group-hover:border-[var(--purple)]/40 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="font-display text-2xl font-800 text-white">{exp.role}</h4>
                        <span className="text-[var(--purple)] font-mono text-sm tracking-widest uppercase">{exp.company}</span>
                      </div>
                      <span className="font-mono text-[10px] text-[var(--text-muted)] bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {exp.tech.map(t => (
                         <span key={t} className="text-[10px] font-mono text-[var(--text-muted)] border border-white/10 px-2 py-0.5 rounded">
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Education ── */}
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className="glass-card p-10 rounded-3xl border border-[var(--cyan)]/10 group-hover:border-[var(--cyan)]/40 transition-all overflow-hidden relative">
                   {/* Background badge icon */}
                   <span className="absolute -top-6 -right-6 text-[10rem] opacity-[0.03] pointer-events-none">🎓</span>

                   <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)] mb-6">Education</div>
                   
                   <h4 className="font-display text-2xl lg:text-3xl font-800 text-white mb-2 leading-tight">
                     {edu.degree}
                   </h4>
                   <p className="text-[var(--text-secondary)] font-500 mb-8">{edu.school}</p>

                   <div className="flex items-center gap-12 pt-8 border-t border-white/5">
                      <div>
                         <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">GPA</div>
                         <div className="text-2xl font-display font-800 text-[var(--purple)] purple-text-glow">{edu.gpa}</div>
                      </div>
                      <div>
                         <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">Period</div>
                         <div className="text-lg font-display font-700 text-white">{edu.period}</div>
                      </div>
                   </div>

                   <div className="mt-8 bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-[var(--text-secondary)] leading-relaxed italic">
                      {edu.details}
                   </div>
                </div>
              </div>
            ))}

            {/* Resume Button */}
            <div className="pt-8">
               <a 
                 href="/resume.pdf" 
                 target="_blank" 
                 className="flex items-center justify-between w-full p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-[var(--purple)]/10 hover:border-[var(--purple)]/40 hover:purple-glow transition-all group"
               >
                  <div className="flex flex-col text-left">
                     <span className="font-display text-xl font-800 text-white">Download My Resume</span>
                     <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--purple)]">PDF · 128 KB</span>
                  </div>
                  <span className="text-3xl group-hover:translate-x-1 transition-transform">⬇️</span>
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
