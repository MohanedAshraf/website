"use client";
import { motion } from "framer-motion";
import Card from "@/components/card";
import { FaBriefcase, FaGraduationCap, FaCode, FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function ExperienceClient() {
  const experience = [
    {
      role: "Software Developer · Frontend",
      company: "LXT",
      dates: "Oct 2024 – Present",
      description: "",
      skills: ["React", "TypeScript", "Nx"],
      logo: "L",
      logoUrl: "/images/experience/lxt_ai_logo.jpeg",
      color: "bg-blue-600"
    },
    {
      role: "Software Engineer · Automation",
      company: "TJM Labs",
      dates: "Apr 2025 – Aug 2025",
      description: "",
      skills: ["Python", "BotCity", "PyAutoGUI"],
      logo: "T",
      logoUrl: "/images/experience/tjm_labs_logo.jpeg",
      color: "bg-purple-600"
    },
    {
      role: "Full-Stack Session Lead",
      company: "Udacity",
      dates: "Sep 2022 – Present",
      description: "",
      skills: ["Mentorship", "Node.js", "Backend", "React.js"],
      logo: "U",
      logoUrl: "/images/experience/udacity_logo.png",
      color: "bg-blue-400"
    },
    {
      role: "Software Engineer · Full-Stack",
      company: "Viavi Solutions",
      dates: "Feb 2024 – Oct 2024",
      description: "",
      skills: ["React", "AngularJS", "Hapi.js"],
      logo: "V",
      logoUrl: "/images/experience/viavi_solutions.jpg",
      color: "bg-purple-900"
    },
    {
      role: "Software Engineer · Full-Stack",
      company: "Orange Business",
      dates: "Apr 2022 – Feb 2022",
      description: "",
      skills: ["Node.js", "Vue 2", "Docker", "Kubernetes", "Express"],
      logo: "O",
      logoUrl: "/images/experience/orange_business_logo.png",
      color: "bg-orange-500"
    },
  ];

  const education = [
    {
      school: "Misr University for Science And Technology",
      dates: "Sep 2016 – Jul 2020",
      degree: "B.Sc. Computer Science · GPA 3.81",
      description: "",
      skills: ["Algorithms", "Data Structures", "C++", "Problem Solving"],
      logo: "M",
      logoUrl: "/images/experience/must_logo.png",
      color: "bg-red-600"
    },
  ];

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
                Journey & Impact
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Building scalable solutions and creating seamless user experiences. A timeline of my professional growth and technical milestones.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Quick Links (Projects & Resume) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <motion.a variants={item} href="/experience/projects" className="block group">
                  <Card variant="glass" className="h-full transition-all duration-300 hover:ring-2 hover:ring-teal-500/20 hover:shadow-xl relative overflow-hidden group">
                      <div className="p-5 flex items-center gap-4 relative z-10 h-full">
                         
                         <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                <FaCode className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Projects</h3>
                                <p className="text-sm text-foreground/60 font-medium">View Portfolio</p>
                            </div>
                         </div>
                         <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shrink-0 bg-white/5 backdrop-blur-sm">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                         </div>
                      </div>
                  </Card>
               </motion.a>

               <motion.a variants={item} href="https://docs.google.com/document/d/1T69A3x7I8wO810ytBVwWRx2asFHIJPDLRu-_7-wICvw/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="block group">
                  <Card variant="glass" className="h-full transition-all duration-300 hover:ring-2 hover:ring-amber-500/20 hover:shadow-xl relative overflow-hidden group">
                      <div className="p-5 flex items-center gap-4 relative z-10 h-full">
                         
                         <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                <FaFilePdf className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Resume</h3>
                                <p className="text-sm text-foreground/60 font-medium">View Professional CV</p>
                            </div>
                         </div>
                         <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shrink-0 bg-white/5 backdrop-blur-sm">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                         </div>
                      </div>
                  </Card>
               </motion.a>
            </div>

            {/* Experience Section */}
            <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                   <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      <FaBriefcase className="w-4 h-4" />
                   </div>
                   <h2 className="text-xl font-bold text-foreground">Work Experience</h2>
                </div>
                
                {/* Timeline Line */}
                <div className="absolute left-[139px] top-[60px] bottom-0 w-px bg-foreground/10 hidden md:block" />

                <div className="space-y-12">
                  {experience.map((job, idx) => (
                    <motion.div variants={item} key={idx} className="relative">
                      <div className="md:grid md:grid-cols-[140px_1fr] md:gap-8">
                        
                        {/* Date Column (Desktop) */}
                        <div className="hidden md:flex flex-col items-end pt-5 relative">
                          <div className="text-sm font-bold text-foreground/80 pr-6 relative z-10">{job.dates}</div>
                          {/* Dot and Line Connector */}
                          <div className="absolute top-[28px] right-[-5px] w-2.5 h-2.5 rounded-full border-2 border-amber-500 bg-background z-20" />
                          <div className="absolute top-[32px] right-[-32px] w-8 h-px bg-amber-500/30 hidden" /> 
                        </div>

                        {/* Card Column */}
                        <div className="relative">
                           {/* Mobile Date */}
                           <div className="md:hidden text-xs font-semibold text-foreground/50 mb-2 pl-1 pb-2 border-l-2 border-amber-500/20 ml-2">{job.dates}</div>
                           
                           {/* Horizontal connector line for Desktop */}
                           <div className="hidden md:block absolute top-[28px] left-[-32px] w-8 h-px bg-foreground/10" />

                           <Card variant="glass" align="start" className="group hover:bg-white/40 dark:hover:bg-black/40 transition-colors">
                            <div className="p-6">
                              <div className="flex items-start gap-4">
                                {/* Company Logo (Image or Placeholder) */}
                                { (job as any).logoUrl ? (
                                   <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                                      <Image 
                                        src={(job as any).logoUrl} 
                                        alt={job.company} 
                                        width={48} 
                                        height={48} 
                                        className="w-full h-full object-contain"
                                      />
                                   </div>
                                ) : (
                                  <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-sm", job.color)}>
                                     {job.logo}
                                  </div>
                                )}
                                
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-lg font-bold text-foreground leading-tight">{job.role}</h3>
                                  <div className="text-foreground/70 font-medium text-sm mt-1">{job.company}</div>
                                </div>
                              </div>

                              <div className="mt-4 pl-0 md:pl-16">
                                {job.description && (
                                  <p className="text-sm leading-relaxed text-foreground/80 mb-5">
                                    {job.description}
                                  </p>
                                )}
                                
                                <div className="flex flex-wrap gap-2">
                                  {job.skills.map((skill, sIdx) => (
                                    <span 
                                      key={sIdx} 
                                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-foreground/5 text-foreground/70 ring-1 ring-foreground/10"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="pb-12 relative">
                 <div className="flex items-center gap-3 mb-8 pt-8">
                   <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500">
                      <FaGraduationCap className="w-4 h-4" />
                   </div>
                   <h2 className="text-xl font-bold text-foreground">Education</h2>
                </div>

                {/* Timeline Line */}
                <div className="absolute left-[139px] top-[100px] bottom-0 w-px bg-foreground/10 hidden md:block" />

                <div className="space-y-12">
                  {education.map((edu, idx) => (
                    <motion.div variants={item} key={idx}>
                      <div className="md:grid md:grid-cols-[140px_1fr] md:gap-8">
                         <div className="hidden md:flex flex-col items-end pt-5 relative">
                          <div className="text-sm font-bold text-foreground/80 pr-6 relative z-10">{edu.dates}</div>
                          <div className="absolute top-[28px] right-[-5px] w-2.5 h-2.5 rounded-full border-2 border-teal-500 bg-background z-20" />
                        </div>

                         <div className="relative">
                           <div className="md:hidden text-xs font-semibold text-foreground/50 mb-2 pl-1 pb-2 border-l-2 border-teal-500/20 ml-2">{edu.dates}</div>
                           <div className="hidden md:block absolute top-[28px] left-[-32px] w-8 h-px bg-foreground/10" />

                           <Card variant="glass" align="start" className="group hover:bg-white/40 dark:hover:bg-black/40 transition-colors">
                            <div className="p-6">
                              <div className="flex items-start gap-4">
                                { (edu as any).logoUrl ? (
                                   <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                                      <Image 
                                        src={(edu as any).logoUrl} 
                                        alt={edu.school} 
                                        width={48} 
                                        height={48} 
                                        className="w-full h-full object-contain"
                                      />
                                   </div>
                                ) : (
                                  <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-sm", edu.color)}>
                                     {edu.logo}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-lg font-bold text-foreground leading-tight">{edu.school}</h3>
                                  <div className="text-foreground/70 font-medium text-sm mt-1">{edu.degree}</div>
                                </div>
                              </div>
                              
                              <div className="mt-4 pl-0 md:pl-16">
                                {edu.description && (
                                  <p className="text-sm leading-relaxed text-foreground/80 mb-5">
                                    {edu.description}
                                  </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                  {edu.skills.map((skill, sIdx) => (
                                    <span 
                                      key={sIdx} 
                                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-foreground/5 text-foreground/70 ring-1 ring-foreground/10"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Card>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>

          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
