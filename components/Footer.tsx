"use client";
import { useState } from "react";

export default function Footer() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <footer id="contact" className="relative py-24 px-8 lg:pr-24 bg-[var(--bg)] overflow-hidden">
      {/* Background Heading */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none z-0">
        <h2 className="text-outlined font-display font-900 leading-none opacity-[0.03] text-center"
          style={{ fontSize: "clamp(8rem, 15vw, 15rem)" }}>
          LET&apos;S TALK
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* ── Left: Contact Info ── */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-[var(--purple)]" />
              <span className="font-mono text-xs tracking-[0.4em] uppercase text-[var(--purple)]">Contact</span>
            </div>
            <h3 className="font-display text-5xl lg:text-6xl font-800 text-white mb-10">
              Have a piece of <br/> 
              <span style={{ color: "var(--purple)" }} className="purple-text-glow">Mind?</span>
            </h3>
            
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md mb-12">
               I&apos;m currently looking for new opportunities and collaborations. 
               Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              {[
                { label: "Email", val: "shivanisirisilla@gmail.com", link: "mailto:shivanisirisilla@gmail.com" },
                { label: "Location", val: "Hyderabad, India", link: "#" }
              ].map(item => (
                <div key={item.label} className="group">
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">{item.label}</div>
                  <a href={item.link} className="text-xl font-display font-700 text-white group-hover:text-[var(--purple)] transition-colors">
                    {item.val}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Web3Forms Contact Form ── */}
          <div className="relative">
             <div className="glass-card p-10 rounded-3xl border border-[var(--purple)]/20 relative">
                
                {formState === "success" ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-up">
                    <div className="w-20 h-20 rounded-full bg-[var(--purple)]/10 flex items-center justify-center text-4xl mb-6 purple-glow">
                      ✨
                    </div>
                    <h4 className="text-2xl font-display font-800 text-white mb-2">Message Sent!</h4>
                    <p className="text-[var(--text-secondary)]">I&apos;ll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="mt-8 text-[var(--purple)] font-mono text-xs tracking-widest uppercase hover:underline"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    
                    <div>
                      <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 px-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[var(--purple)]/50 focus:bg-white/[0.06] transition-all" 
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 px-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        placeholder="yourname@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[var(--purple)]/50 focus:bg-white/[0.06] transition-all" 
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-2 px-1">Your Message</label>
                      <textarea 
                        required 
                        name="message"
                        rows={5}
                        placeholder="How can I help you?"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-[var(--purple)]/50 focus:bg-white/[0.06] transition-all resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === "loading"}
                      className="w-full py-5 rounded-xl bg-[var(--purple)] text-white font-mono font-bold tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-95 transition-all purple-glow neon-border-anim disabled:opacity-50"
                    >
                      {formState === "loading" ? "SENDING..." : "SEND MESSAGE →"}
                    </button>

                    {formState === "error" && (
                      <p className="text-red-400 text-xs font-mono text-center">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
             </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-12 border-t border-white/5 flex justify-center pb-8">
          <div className="flex gap-6">
             <a 
               href="https://github.com/Shivani2524" 
               target="_blank"
               rel="noopener noreferrer"
               className="px-10 py-4 bg-white/[0.03] rounded-xl border-2 border-[var(--cyan)] text-[var(--cyan)] font-mono text-sm sm:text-base tracking-[0.2em] font-bold uppercase transition-all duration-200 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(34,211,238,0.3)] shadow-[0_6px_0_rgba(34,211,238,0.8)] active:translate-y-1 active:shadow-[0_0px_0_rgba(34,211,238,0.8)] relative"
             >
               GITHUB ↗
             </a>
             <a 
               href="https://linkedin.com/in/shivani-sirisilla-67034929b/" 
               target="_blank"
               rel="noopener noreferrer"
               className="px-10 py-4 bg-white/[0.03] rounded-xl border-2 border-[var(--purple)] text-[var(--purple)] font-mono text-sm sm:text-base tracking-[0.2em] font-bold uppercase transition-all duration-200 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.3)] shadow-[0_6px_0_rgba(168,85,247,0.8)] active:translate-y-1 active:shadow-[0_0px_0_rgba(168,85,247,0.8)] relative"
             >
               LINKEDIN ↗
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
