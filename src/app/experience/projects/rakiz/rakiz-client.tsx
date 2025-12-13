"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaServer, FaDatabase, FaDocker, FaReact, FaNodeJs, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Card from "@/components/card";

export default function RakizClient() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="w-full min-h-screen pt-32 pb-20 px-6 md:px-10">
      <div className="w-full max-w-[900px] mx-auto">
        <Link href="/experience/projects" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground mb-8 transition-colors">
          <FaArrowLeft /> Back to Projects
        </Link>
        
        <motion.div variants={container} initial="hidden" animate="show">
            {/* Header */}
            <motion.div variants={item} className="mb-12 flex flex-col md:flex-row gap-6 md:items-start justify-between">
               <div className="flex-1">
                 <div className="flex items-center gap-4 mb-4">
                    {/* Light Mode Logo */}
                    <img src="/images/projects/rakiz-light.png" alt="Rakiz Logo" className="w-16 h-16 object-contain bg-white/10 rounded-2xl p-2 dark:hidden" />
                    {/* Dark Mode Logo */}
                    <img src="/images/projects/rakiz-dark.png" alt="Rakiz Logo" className="w-16 h-16 object-contain bg-white/10 rounded-2xl p-2 hidden dark:block" />
                    
                    <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Rakiz</h1>
                 </div>
                 <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
                   A comprehensive SaaS solution for gym management, engineered to modernize the fitness industry in Egypt.
                 </p>
               </div>
               
               <motion.a 
                 href="https://xn--rkiz-qsa.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-xl font-bold shadow-lg shadow-teal-500/20 flex items-center gap-2 shrink-0 h-fit"
               >
                 <FaArrowUpRightFromSquare /> Visit Live Site
               </motion.a>
            </motion.div>

            {/* Screenshots / Interface Gallery - Moved to Top */}
            <motion.div variants={item} className="mb-16">
               <h2 className="text-2xl font-bold mb-6">Interface Gallery</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dashboard Screenshot */}
                  <div className="aspect-video bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center justify-center overflow-hidden transform transition-transform hover:scale-[1.02] duration-300 shadow-sm relative group">
                    <img src="/images/projects/rakiz-dashboard-light.png" alt="Rakiz Dashboard" className="absolute inset-0 w-full h-full object-cover dark:hidden" />
                    <img src="/images/projects/rakiz-dashboard-dark.png" alt="Rakiz Dashboard" className="absolute inset-0 w-full h-full object-cover hidden dark:block" />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-medium">Dashboard Analytics</span>
                    </div>
                  </div>
                  
                  {/* Landing Screenshot */}
                   <div className="aspect-video bg-foreground/5 rounded-2xl border border-foreground/10 flex items-center justify-center overflow-hidden transform transition-transform hover:scale-[1.02] duration-300 shadow-sm relative group">
                    <img src="/images/projects/rakiz-landing-light.png" alt="Rakiz Landing Page" className="absolute inset-0 w-full h-full object-cover dark:hidden" />
                    <img src="/images/projects/rakiz-landing-dark.png" alt="Rakiz Landing Page" className="absolute inset-0 w-full h-full object-cover hidden dark:block" />
                     <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-medium">Landing Page</span>
                    </div>
                   </div>
               </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
               <motion.div variants={item} className="lg:col-span-2 space-y-12">
                  <Section title="The Challenge">
                    <p>Local gyms in Egypt have long struggled with fragmented operations—relying on manual paper records, facing revenue leakage from lost membership data, and suffering from inefficient check-in processes. Rakiz was built to digitize these operations into a unified, reliable cloud platform that puts control back in the hands of business owners.</p>
                  </Section>
                   <Section title="The Solution">
                    <p>We engineered a robust multi-tenant SaaS architecture that allows gym owners to seamlessly manage member lifecycles, track subscription analytics, and visualize revenue streams through an intuitive dashboard. Crucially, the system features hardware integration with turnstiles, enabling automated, secure access control via dynamic QR codes.</p>
                  </Section>
               </motion.div>

               <motion.div variants={item} className="space-y-8">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
                     <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                        <FaServer className="text-teal-500"/> Technical Architecture
                     </h3>
                     
                     <div className="space-y-6">
                        <TechCategory title="Frontend Core">
                            <TechRow icon={<FaReact />} name="React & Next.js" desc="SSR & Interactive UI" />
                        </TechCategory>

                        <TechCategory title="Backend & Data">
                            <TechRow icon={<FaNodeJs />} name="Node.js & Express" desc="Scalable API Layer" />
                            <TechRow icon={<FaDatabase />} name="MongoDB" desc="Flexible Data Schema" />
                            <TechRow icon={<FaDatabase />} name="Redis" desc="High-speed Caching" />
                        </TechCategory>

                        <TechCategory title="DevOps">
                            <TechRow icon={<FaDocker />} name="Docker" desc="Containerization" />
                        </TechCategory>
                     </div>
                  </div>
               </motion.div>
            </div>
        </motion.div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-teal-500">{title}</h2>
      <div className="text-foreground/80 leading-relaxed text-lg">
        {children}
      </div>
    </div>
  );
}

function TechCategory({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3 pl-1">{title}</h4>
            <div className="space-y-2">
                {children}
            </div>
        </div>
    )
}

function TechRow({ icon, name, desc }: { icon: React.ReactNode; name: string, desc: string }) {
    return (
        <div className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 text-lg shrink-0 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <div className="font-bold text-sm text-foreground">{name}</div>
                <div className="text-xs text-foreground/50">{desc}</div>
            </div>
        </div>
    )
}
