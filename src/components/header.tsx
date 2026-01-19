"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/logo";
import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const activeStyle = {
    background:
      "linear-gradient(90deg, hsl(var(--haze-amber) / 0.20), hsl(var(--haze-teal) / 0.20))",
  } as const;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-6 md:px-10 py-4 md:py-6 pointer-events-none">
        <div className="w-full max-w-[700px] mx-auto flex items-center justify-between pointer-events-auto">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href}>
                {pathname === link.href ? (
                  <Link
                    href={link.href}
                    className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-foreground/10 hover:ring-foreground/20 bg-background/50 backdrop-blur-md"
                    style={activeStyle}
                  >
                    <motion.span
                       animate={{ y: [0, -2, 0] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {link.label}
                    </motion.span>
                  </Link>
                ) : (
                  <Link href={link.href} className="text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md ring-1 ring-foreground/10 text-foreground"
            aria-label="Open Menu"
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[101] bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 text-foreground"
              aria-label="Close Menu"
            >
              <FaXmark className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-8 items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className={`text-3xl font-bold tracking-tight ${pathname === link.href ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-teal-500' : 'text-foreground'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Mobile Footer/Socials could go here */}
            <motion.div 
               className="mt-auto pb-10 text-center text-foreground/40 text-sm"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
            >
              © {new Date().getFullYear()} Mohaned Metawea
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
