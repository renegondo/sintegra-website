"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";

interface LegalPageContentProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalPageContent({ title, lastUpdated = "Octubre 2026", children }: LegalPageContentProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={container} className="min-h-screen flex flex-col relative bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="layer depth-1">
          <motion.div style={{ y: orbY }} className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px]" />
        </div>
      </div>

      <main className="flex-1 relative z-10">
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">{title}</h1>
              <p className="text-slate-500 font-medium border-b border-slate-200 pb-8 mb-8">
                Última actualización: {lastUpdated}
              </p>
            </Reveal>
            
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-electric hover:prose-a:text-electric-hover prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-xl">
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
