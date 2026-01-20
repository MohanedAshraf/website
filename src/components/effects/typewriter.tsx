"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // Seconds per character
  delay?: number; // Initial delay
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({
  text,
  speed = 0.05,
  delay = 0,
  className = "",
  cursor = true,
}: TypewriterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Calculate total duration for the cursor to stop blinking or vanish if needed
  // But here we'll just keep it simple
  
  const containerVars = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay },
    }),
  };

  const childVars: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 5,
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={containerVars}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={childVars}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block ml-0.5 w-[2px] h-[1em] bg-current align-middle"
        />
      )}
    </motion.div>
  );
}
