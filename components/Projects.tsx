"use client";
import Image from "next/image";

const projects = [
  {
    title: "Neural-Sync",
    tagline: "Merge Resolution Extension",
    description: "Engineered the frontend architecture for an intelligent tool designed to automatically resolve complex semantic merge conflicts in Git workflows.",
    tags: ["TypeScript", "React", "Node.js", "Tailwind CSS", "VS Code API"],
    image: "/neural-sync.png",
    links: { github: "https://github.com/Shivani2524/neuralsync", live: "#" },
    accent: "#A855F7"
  },
  {
    title: "Project Sentry",
    tagline: "Deterministic SOAR System",
    description: "Architected a Security Orchestration, Automation, and Response system to automate incident triaging and threat mitigation.",
    tags: ["Python", "Security", "REST APIs"],
    image: "/project-sentry.png",
    links: { github: "https://github.com/Shivani2524/Sentry", live: "#" },
    accent: "#22D3EE"
  },
  {
    title: "EcoScan AI",
    tagline: "Computer Vision Agent",
    description: "Developed an AI agent using real-time camera feeds to identify waste materials and generate sustainable recycling workflows.",
    tags: ["Python", "OpenCV", "TensorFlow", "HTML5", "CSS3"],
    image: "/ecoscan-ai.png",
    links: { github: "https://github.com/Shivani2524/EcoScan-AI", live: "#" },
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent z-10 pointer-events-none" />
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Glowing border line at bottom of img */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--purple)] to-transparent opacity-50 z-20" />
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
                <div className="flex items-center justify-center pt-6 border-t border-white/10 mt-auto">
                   <a 
                     href={project.links.github} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="w-full text-center py-3 rounded-xl border border-[var(--purple)]/30 hover:border-[var(--purple)] bg-white/[0.02] hover:bg-[var(--purple)]/10 text-white font-mono text-[11px] font-bold tracking-[0.2em] transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 group/btn"
                   >
                      VIEW SOURCE CODE <span className="text-[var(--purple)] group-hover/btn:text-white transition-colors">↗</span>
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
