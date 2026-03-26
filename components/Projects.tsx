"use client";
import Image from "next/image";

const projects = [
  {
    title: "SV-Code-Extension",
    tagline: "Productivity Powerhouse",
    description: "A custom VS Code extension designed to streamline development workflows and automate repetitive tasks for developers.",
    tags: ["TypeScript", "VS Code API", "Node.js"],
    image: "/project-vscode.jpg", // Replace with actual if available
    links: { github: "https://github.com/Shivani2524/SV-Code-Extension", live: "#" },
    accent: "#A855F7"
  },
  {
    title: "Computer Vision Agent",
    tagline: "AI Surveillance",
    description: "An intelligent security system that detects and tracks objects in real-time, providing automated alerts and analysis.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    image: "/project-cv.jpg",
    links: { github: "https://github.com/Shivani2524", live: "#" },
    accent: "#22D3EE"
  },
  {
    title: "Personal Portfolio",
    tagline: "Modern UI Showcase",
    description: "This high-fidelity portfolio featuring Three.js animations, glassmorphism, and neon-themed cyber aesthetics.",
    tags: ["Next.js", "Three.js", "Three Fiber"],
    image: "/project-portfolio.jpg",
    links: { github: "https://github.com/Shivani2524/Sentry", live: "#" },
    accent: "#A855F7"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-8 lg:pr-24 bg-[var(--bg)]">
      {/* Background Heading */}
      <div className="absolute top-10 right-0 overflow-hidden pointer-events-none z-0">
        <h2 className="text-outlined font-display font-900 opacity-[0.03] rotate-90 origin-bottom-right"
          style={{ fontSize: "clamp(10rem, 15vw, 15rem)" }}>
          WORKS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-[var(--purple)]" />
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--purple)]">Portfolio</span>
            </div>
            <h3 className="font-display text-5xl lg:text-6xl font-800 text-white">
              Selected <span style={{ color: "var(--purple)" }} className="purple-text-glow">Projects</span>
            </h3>
          </div>
          <p className="max-w-md text-[var(--text-secondary)] font-mono text-sm leading-relaxed text-right">
             / Focusing on AI architectures, VS Code tooling, and seamless human-computer interaction.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:purple-glow"
              style={{ 
                border: `1px solid rgba(168, 85, 247, 0.15)`,
                animationDelay: `${idx * 0.1}s` 
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />
                <div className="w-full h-full bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--text-muted)] text-4xl">
                   {/* Placeholder for project image */}
                   <span className="opacity-20">{project.title.charAt(0)}</span>
                </div>
                {/* Glowing border line at bottom of img */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--purple)] to-transparent opacity-50" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                   <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 text-[var(--text-secondary)]">
                     {project.tagline}
                   </span>
                </div>
                
                <h4 className="font-display text-xl font-700 text-white mb-3 group-hover:text-[var(--purple)] transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-[var(--cyan)] border border-[var(--cyan)]/20 px-2 py-0.5 rounded uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer / Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                   <a href={project.links.github} target="_blank" className="text-xs font-mono text-[var(--text-secondary)] hover:text-white flex items-center gap-2">
                      CODE <span className="text-[var(--purple)]">↗</span>
                   </a>
                   <a href={project.links.live} className="px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest text-white transition-all bg-[var(--purple)] hover:neon-border-anim">
                      LIVE VIEW
                   </a>
                </div>
              </div>

              {/* Hover highlight border */}
              <div className="absolute inset-0 border-2 border-[var(--purple)]/0 group-hover:border-[var(--purple)]/40 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* See more CTA */}
        <div className="mt-16 flex justify-center">
           <a href="https://github.com/Shivani2524" target="_blank" className="group flex items-center gap-4 px-8 py-4 rounded-full glass-card border-[var(--purple)]/30 text-white font-mono text-sm hover:scale-105 transition-all">
              <span>EXPLORE ALL REPOSITORIES</span>
              <span className="text-[var(--purple)] group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </div>
      </div>
    </section>
  );
}
