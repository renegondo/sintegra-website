"use client";

import { useRef } from "react";
import { Code, CheckCircle2, ChevronRight, Layout, Database, Smartphone, GitMerge, FileCheck2, LineChart, Cpu, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function DesarrolloPageContent() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={container} className="min-h-screen flex flex-col relative bg-background">
      <main className="flex-1 relative z-10">
        {/* HERO */}
        <section className="scene pt-32 pb-24 md:pt-40 md:pb-32 relative isolate overflow-hidden bg-[#f7f5ef]" data-scene="hero">
          <SpotlightBackground />
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-bold tracking-wide text-electric mb-10 shadow-[0_0_20px_rgba(37,99,235,0.1)] uppercase">
                Software a la medida
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Cuando el proceso es único,</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">la solución también debe serlo.</motion.span>
            </motion.h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Diseñamos sistemas web y móviles adaptados a los flujos, usuarios, documentos e indicadores de cada institución.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Nuestros Servicios</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Análisis de procesos", icon: <LineChart /> },
                { name: "Diseño de experiencia", icon: <Layout /> },
                { name: "Plataformas administrativas", icon: <TerminalSquare /> },
                { name: "Aplicaciones móviles", icon: <Smartphone /> },
                { name: "Dashboards", icon: <LineChart /> },
                { name: "Sistemas de expedientes", icon: <FileCheck2 /> },
                { name: "Automatización documental", icon: <Cpu /> },
                { name: "Portales públicos", icon: <Layout /> },
                { name: "Integraciones", icon: <GitMerge /> },
                { name: "Migración de información", icon: <Database /> },
                { name: "Soporte y evolución", icon: <CheckCircle2 /> }
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-electric/30 transition-all h-full">
                    <div className="text-electric mb-4">{s.icon}</div>
                    <span className="font-semibold text-slate-700">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">Proceso de desarrollo</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Descubrimiento", desc: "Análisis inicial de la necesidad." },
                { step: "02", title: "Requerimientos", desc: "Levantamiento detallado de flujos y reglas." },
                { step: "03", title: "Prototipo", desc: "Diseño de interfaces antes de programar." },
                { step: "04", title: "Desarrollo", desc: "Construcción iterativa del software." },
                { step: "05", title: "Pruebas", desc: "Aseguramiento de calidad y seguridad." },
                { step: "06", title: "Implementación", desc: "Despliegue en producción." },
                { step: "07", title: "Capacitación", desc: "Formación de usuarios operativos." },
                { step: "08", title: "Soporte", desc: "Mantenimiento y evolución continua." }
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-electric/20 mb-4">{step.step}</div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative z-20 bg-background">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="max-w-4xl mx-auto bg-electric p-1 md:p-[2px] rounded-[2.5rem] shadow-[0_20px_80px_rgba(37,99,235,0.3)] relative">
                <div className="relative bg-electric text-white p-10 md:p-16 rounded-[2.5rem] text-center overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Cuéntanos qué proceso necesitas digitalizar.</h2>
                  <Link href="/contacto" className="inline-flex h-14 mt-8 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-electric transition-transform hover:scale-105 shadow-xl">
                    Hablar sobre mi proyecto
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </div>
  );
}
