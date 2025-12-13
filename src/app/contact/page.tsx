"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa6";
import { useState } from "react";
import Card from "@/components/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mohaned.ashraf.elsayed@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="w-full min-h-screen overflow-auto">
      {/* Header removed */}

      <motion.section
        className="px-6 md:px-10 w-full min-h-screen pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="w-full max-w-[1000px] mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-teal-500/20 text-foreground ring-1 ring-foreground/10">
              <FaEnvelope className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Get In Touch</h1>
              <p className="mt-3 text-lg text-foreground/60 max-w-2xl mx-auto">
                Have a question or want to work together? I'm just a message away.
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://github.com/MohanedAshraf"
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <Card variant="glass" className="h-full hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full h-full p-8 flex flex-col items-start text-left">
                  <div className="mb-6 p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <FaGithub className="h-7 w-7 text-foreground/80 group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">GitHub</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">Check out my open source contributions and projects.</p>
                  <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-amber-600 dark:text-amber-500">
                    @MohanedAshraf <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/mohanedashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <Card variant="glass" className="h-full hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full h-full p-8 flex flex-col items-start text-left">
                  <div className="mb-6 p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                    <FaLinkedin className="h-7 w-7 text-foreground/80 group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">LinkedIn</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">Connect with me professionally and view my experience.</p>
                  <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-teal-600 dark:text-teal-500">
                    /mohanedashraf <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="mt-16 w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
              <h2 className="text-xl font-semibold text-foreground/80">Or send a message directly</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>

            <Card variant="glass" className="">
              <div className="w-full p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 ml-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-foreground/10 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-foreground placeholder-foreground/40"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 ml-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-foreground/10 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-foreground placeholder-foreground/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2 ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-foreground/10 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none text-foreground placeholder-foreground/40"
                      placeholder="Hi, I'd like to talk about..."
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-foreground/50 text-center md:text-left">
                      This will open your default email client with the message pre-filled.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30 active:scale-95"
                      style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" }}
                    >
                      <FaPaperPlane className="h-4 w-4" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
