// components/Reveal.tsx
"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
