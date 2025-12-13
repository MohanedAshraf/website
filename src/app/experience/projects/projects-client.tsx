"use client";
import { motion } from "framer-motion";
import Card from "@/components/card";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";

export default function ProjectsClient() {
  const projects = [
    {
      title: "Rakiz",
      slug: "rakiz",
      description: "A specialized SaaS platform empowering local gyms in Egypt to streamline operations and manage memberships.",
      tags: ["React.js", "Next.js", "Express", "Node.js", "Docker", "Redis"],
      color: "from-blue-600 to-indigo-600",
      logoUrl: "/images/projects/rakiz-light.png",
      logoUrlDark: "/images/projects/rakiz-dark.png",
      isMvp: true
    }
  ];

  return (
    <main className="w-full min-h-screen pt-32 pb-20 px-6 md:px-10">
      <div className="w-full max-w-[900px] mx-auto">
        <motion.div
           className="mb-12"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
              Featured Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
            A collection of technical challenges I've solved and products I've built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/experience/projects/${project.slug}`} className="block h-full group">
                <Card variant="glass" className="h-full flex flex-col hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                  <div className="p-6 flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent dark:from-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-white/10 p-2 flex items-center justify-center shadow-lg overflow-hidden shrink-0`}>
                          {(project as any).logoUrl ? (
                             <>
                               {/* Light Mode Logo */}
                               <img 
                                 src={(project as any).logoUrl} 
                                 alt={project.title} 
                                 className={`w-full h-full object-contain ${(project as any).logoUrlDark ? 'dark:hidden' : ''}`} 
                               />
                               {/* Dark Mode Logo (if available) */}
                               {(project as any).logoUrlDark && (
                                 <img 
                                   src={(project as any).logoUrlDark} 
                                   alt={project.title} 
                                   className="w-full h-full object-contain hidden dark:block" 
                                 />
                               )}
                             </>
                          ) : (
                             <div className={`w-full h-full flex items-center justify-center text-white bg-gradient-to-br ${project.color} rounded-xl`}>
                                <FaCode className="w-6 h-6" />
                             </div>
                          )}
                        </div>
                        {(project as any).isMvp && (
                            <span className="px-2 py-1 rounded-md bg-foreground/5 text-foreground/60 text-xs font-medium border border-foreground/5">
                                MVP Project
                            </span>
                        )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-foreground/70 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 rounded-md bg-foreground/5 text-foreground/60 text-xs font-medium border border-foreground/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-500 group-hover:translate-x-1 transition-transform mt-auto">
                      View Details &rarr;
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
