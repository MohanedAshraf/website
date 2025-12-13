"use client";
import { motion } from "framer-motion";
import Card from "@/components/card";
import { FaLaptop, FaMobile, FaHeadphones } from "react-icons/fa6";
import Link from "next/link";

export default function AboutClient() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
        <div className="w-full max-w-[900px] mx-auto relative z-10">
          {/* Editorial Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500">
                Story & Craft
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              A glimpse into who I am beyond the code. A developer, a problem solver, and a lifelong learner driven by curiosity.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Left Column (Main Content) */}
            <div className="md:col-span-7 flex flex-col gap-8">
              <motion.div variants={item}>
                <Card variant="glass" className="h-full">
                  <div className="p-8 md:p-10 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold tracking-tight">The Journey</h2>
                    <div className="space-y-6 text-base leading-relaxed text-foreground/80">
                      <p>
                        I’m a software engineer from Cairo with over <span className="font-bold text-amber-600 dark:text-amber-400">3 years of experience</span> contributing to <span className="underline decoration-teal-500/30 decoration-2 underline-offset-2 hover:decoration-teal-500 transition-all">scalable enterprise products</span>. I bridge the gap between complex engineering and effortless user experiences.
                      </p>
                      <p>
                        Off the keyboard, I’m obsessed with high performance. Whether I’m prioritizing <span className="font-bold text-teal-600 dark:text-teal-400">fitness</span>, playing <span className="font-bold text-amber-600 dark:text-amber-400">football</span>, or grinding <span className="font-bold text-indigo-500">Fortnite</span>, I bring the same competitive energy and focus to everything I do.
                      </p>
                       <div className="pt-4 flex flex-col gap-2.5 text-sm font-medium text-foreground/60">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                           Building <Link href="/experience/projects/rakiz" className="text-foreground hover:underline decoration-teal-500/50 underline-offset-4">Rakiz</Link>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="shrink-0 w-2 h-2 rounded-full bg-amber-500" />
                           Learning <span className="text-foreground">Rust</span> 🦀
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="shrink-0 w-2 h-2 rounded-full bg-amber-500" />
                           Preparing for relocation to the US 🇺🇸
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Column (Sidebar/Details) */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <motion.div variants={item}>
                <Card variant="glass">
                  <div className="p-8 w-full h-full flex flex-col items-start">
                    <h3 className="text-lg font-bold mb-6 text-foreground">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                       {[
                         { name: "Programming", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400" },
                         { name: "F1", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
                         { name: "Fortnite", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400" },
                         { name: "Football", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
                         { name: "Coffee", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400" },
                         { name: "Nature", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
                         { name: "Healthy Lifestyle", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400" }
                       ].map((h) => (
                        <span key={h.name} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${h.color}`}>
                          {h.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card variant="glass">
                   <div className="p-8 w-full h-full flex flex-col items-start">
                    <h3 className="text-lg font-bold mb-6 text-foreground text-left">Daily Drivers</h3>
                    <ul className="space-y-3 w-full">
                      <li className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-foreground/5 transition-colors">
                        <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/70">
                          <FaLaptop className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider mb-0.5">Computer</span>
                          <span className="text-sm font-semibold text-foreground">MacBook Air M4</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-foreground/5 transition-colors">
                        <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/70">
                          <FaMobile className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider mb-0.5">Mobile</span>
                          <span className="text-sm font-semibold text-foreground">Pixel 6a</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 p-3 -mx-3 rounded-2xl hover:bg-foreground/5 transition-colors">
                        <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/70">
                          <FaHeadphones className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider mb-0.5">Audio</span>
                          <span className="text-sm font-semibold text-foreground">Beats Studio Pro</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
