"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/logo";

export default function Header() {
  const pathname = usePathname();
  const activeStyle = {
    background:
      "linear-gradient(90deg, hsl(var(--haze-amber) / 0.20), hsl(var(--haze-teal) / 0.20))",
  } as const;

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-10 py-6 pointer-events-none">
      <div className="w-full max-w-[700px] mx-auto flex items-center justify-between pointer-events-auto">
        <Logo />
        
        <nav className="flex items-center gap-6">
          {pathname === "/" ? (
            <Link
              href="/"
              className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/10 hover:ring-foreground/20 bg-background/50 backdrop-blur-md"
              style={activeStyle}
            >
              <motion.span
                 animate={{ y: [0, -2, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                  Home
              </motion.span>
            </Link>
          ) : (
            <Link href="/" className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors">Home</Link>
          )}
          {pathname === "/about" ? (
            <Link
              href="/about"
              className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/10 hover:ring-foreground/20 bg-background/50 backdrop-blur-md"
              style={activeStyle}
            >
               <motion.span
                 animate={{ y: [0, -2, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                  About
              </motion.span>
            </Link>
          ) : (
            <Link href="/about" className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors">About</Link>
          )}
          {pathname === "/experience" ? (
            <Link
              href="/experience"
              className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/10 hover:ring-foreground/20 bg-background/50 backdrop-blur-md"
              style={activeStyle}
            >
               <motion.span
                 animate={{ y: [0, -2, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                  Experience
              </motion.span>
            </Link>
          ) : (
            <Link href="/experience" className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors">Experience</Link>
          )}
          {pathname === "/contact" ? (
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/10 hover:ring-foreground/20 bg-background/50 backdrop-blur-md"
              style={activeStyle}
            >
               <motion.span
                 animate={{ y: [0, -2, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                  Contact
              </motion.span>
            </Link>
          ) : (
            <Link href="/contact" className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
