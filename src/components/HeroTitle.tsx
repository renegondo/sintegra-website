"use client";

import { motion } from "motion/react";

export function HeroTitle() {
  const line = {
    hidden: {
      opacity: 0,
      y: 55,
      rotateX: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.13,
            delayChildren: 0.15,
          },
        },
      }}
      style={{ perspective: 800 }}
      className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-slate-900"
    >
      <motion.span variants={line} className="hero-line">
        Sistemas integrales para
      </motion.span>
      <motion.span variants={line} className="hero-line">
        una gestión pública
      </motion.span>
      <motion.span variants={line} className="hero-line hero-accent">
        más conectada.
      </motion.span>
    </motion.h1>
  );
}
