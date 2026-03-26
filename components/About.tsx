"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-8 lg:pr-24 overflow-hidden bg-[var(--bg)]"
    >
      {/* ── Background Outlined Text ── */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none z-0">
        <h2
          className="text-outlined font-display font-900 leading-none whitespace-nowrap opacity-[0.03]"
          style={{ fontSize: "clamp(10rem, 20vw, 18rem)" }}
        >
          ABOUT ME?
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ── Left: Portrait Area ── */}
          <div className="lg:w-1/3 relative group">
            {/* Glow backing */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"
              style={{ background: "var(--purple)" }}
            />
            
            <div className="relative aspect-[3/4] w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden glass-card p-2 border-2"
              style={{ borderColor: "rgba(168,85,247,0.2)" }}
            >
              <div className="relative h-full w-full rounded-xl overflow-hidden grayscale contrast-110">
                <Image
                  src="/profile.jpg"
                  alt="Shivani Sirisilla"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Visual filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--purple)]/20 to-transparent mix-blend-overlay" />
              </div>
            </div>

            {/* Decorative tag */}
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg border border-[var(--purple)]/30 purple-glow">
               <span className="font-mono text-xs text-white">Full-Stack AI</span>
            </div>
          </div>

          {/* ── Right: Content Area ── */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
              <span className="w-12 h-px bg-gradient-to-r from-[var(--purple)] to-transparent" />
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--purple)]">Who am I</span>
            </div>

            <h3 className="font-display text-4xl lg:text-5xl font-800 text-white mb-8 leading-tight">
               Passionate about building <br/>
               <span style={{ color: "var(--purple)" }} className="purple-text-glow">Intelligent Systems</span>
            </h3>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg max-w-2xl">
              <p>
                I am <span className="text-white font-600">Shivani Sirisilla</span>, a final-year CS student at Sri Venkateshwara Institute of Technology. 
                My journey in tech is driven by a deep fascination with how code can transform raw data into intelligent human-centric experiences.
              </p>
              <p>
                With a strong foundation in <span className="text-[var(--cyan)] font-mono">React</span>, <span className="text-[var(--cyan)] font-mono">Node.js</span>, and <span className="text-[var(--cyan)] font-mono">Python</span>, 
                I specialize in developing full-stack applications that leverage AI to solve complex problems. 
                I&apos;ve built everything from VS Code productivity tools to sophisticated Computer Vision surveillance systems.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {[
                { label: "Education", val: "B.Tech CSE", sub: "SVIT '25", icon: "🎓" },
                { label: "Experience", val: "Internship", sub: "YugaYatra", icon: "💼" },
                { label: "Community", val: "Hackathons", sub: "HackForge Host", icon: "🏆" },
              ].map((card) => (
                <div 
                  key={card.label}
                  className="glass-card p-5 rounded-2xl flex flex-col gap-3 group hover:-translate-y-1 transition-all"
                  style={{ border: "1px solid rgba(168,85,247,0.15)" }}
                >
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono mb-1">{card.label}</div>
                    <div className="text-sm font-700 text-white transition-colors group-hover:text-[var(--purple)]">{card.val}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
