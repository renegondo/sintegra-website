"use client";

import { useRef } from "react";
import { ShieldCheck, Zap, Server, ChevronRight, Users, CheckCircle2, Layout, Database, Phone, CheckSquare, Flag, Target, Eye, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function EmpresaPageContent() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={container} className="min-h-screen flex flex-col relative bg-background">
      
      <main className="flex-1 relative z-10">
        
        {/* ─── 1. HERO SECTION ─── */}
        <section className="scene pt-32 pb-24 md:pt-48 md:pb-32 relative isolate overflow-hidden bg-[#f7f5ef]" data-scene="hero">
          <SpotlightBackground />
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
            
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-bold tracking-wide text-electric mb-10 shadow-[0_0_20px_rgba(37,99,235,0.1)] uppercase">
                Sobre Sintegra
              </div>
            </Reveal>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
              }}
              style={{ perspective: 800 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#10272e]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 55, rotateX: 18 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="hero-line"
              >
                Tecnología creada para
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 55, rotateX: 18 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="hero-line hero-accent"
              >
                resolver procesos reales.
              </motion.span>
            </motion.h1>
            
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Sintegra desarrolla plataformas que conectan la administración, la operación en campo, la atención ciudadana y la supervisión institucional.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── 2. QUIÉNES SOMOS & CÓMO TRABAJAMOS ─── */}
        <section className="py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <Reveal>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">Quiénes somos</h2>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                    <p>
                      Somos una empresa de desarrollo tecnológico enfocada en crear sistemas integrales para gobiernos e instituciones.
                    </p>
                    <p>
                      Trabajamos a partir de una idea sencilla: cuando las áreas operan con información aislada, documentos dispersos y procesos manuales, resulta difícil supervisar, medir y mejorar. Por eso diseñamos plataformas capaces de reunir esas actividades en flujos claros y verificables.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-bl-full" />
                  <h2 className="text-2xl font-bold mb-6 text-slate-900 relative z-10">Nuestra forma de trabajar</h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light relative z-10">
                    No buscamos imponer un sistema genérico. Primero entendemos cómo trabaja la institución y después configuramos o desarrollamos la solución adecuada.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 3. LO QUE HACEMOS ─── */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Lo que hacemos</h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Layout />, title: "Desarrollo de plataformas web" },
                { icon: <Phone />, title: "Aplicaciones móviles" },
                { icon: <Server />, title: "Sistemas administrativos" },
                { icon: <CheckSquare />, title: "Dashboards ejecutivos" },
                { icon: <Zap />, title: "Automatización de procesos" },
                { icon: <Database />, title: "Integraciones externas" },
                { icon: <ShieldCheck />, title: "Verificación y portales públicos" },
                { icon: <Users />, title: "Capacitación y soporte" },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-electric/30 hover:shadow-md transition-all">
                    <div className="text-electric">{item.icon}</div>
                    <span className="font-semibold text-slate-700">{item.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. MISIÓN Y VISIÓN ─── */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal>
              <div className="grid grid-cols-12 gap-6">
                {/* Misión */}
                <div className="col-span-12 md:col-span-7 bg-white/70 backdrop-blur-md rounded-2xl p-10 space-y-6 relative overflow-hidden group hover:shadow-[0px_8px_16px_rgba(0,28,85,0.08)] transition-all duration-300 border border-slate-100 shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Flag className="w-48 h-48 text-slate-900" />
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-electric">
                      <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Nuestra Misión</h2>
                  </div>
                  <p className="text-xl md:text-2xl font-light text-slate-600 relative z-10 leading-relaxed max-w-lg">
                    Digitalizar y optimizar los procesos administrativos a nivel nacional, proveyendo herramientas seguras, escalables y de alta disponibilidad que garanticen la transparencia y la rapidez en la gestión pública.
                  </p>
                </div>

                {/* Visión */}
                <div className="col-span-12 md:col-span-5 bg-slate-900 rounded-2xl p-10 space-y-6 relative overflow-hidden group shadow-lg border border-slate-800 transition-all duration-300">
                  <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Eye className="w-56 h-56 text-white" />
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-electric">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Nuestra Visión</h2>
                  </div>
                  <p className="text-lg md:text-xl font-light text-slate-300 relative z-10 leading-relaxed">
                    Ser el estándar de excelencia en tecnología gubernamental en Latinoamérica, reconocidos por crear ecosistemas digitales que conectan sin fricción a los ciudadanos con sus instituciones.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 5. PRINCIPIOS ─── */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Nuestros Principios</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                Los valores que sostienen cada línea de código que escribimos y cada sistema que implementamos.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Integración",
                  desc: "Conectamos áreas, personas, información y procesos.",
                },
                {
                  title: "Trazabilidad",
                  desc: "Cada acción debe poder consultarse, verificarse y auditarse.",
                },
                {
                  title: "Usabilidad",
                  desc: "La tecnología debe facilitar el trabajo, no complicarlo.",
                },
                {
                  title: "Adaptabilidad",
                  desc: "Cada institución tiene procesos y necesidades diferentes.",
                },
                {
                  title: "Continuidad",
                  desc: "Diseñamos herramientas preparadas para operar tanto en oficina como en campo.",
                },
                {
                  title: "Transparencia",
                  desc: "Acercamos información verificable a autoridades y ciudadanía.",
                },
              ].map((val, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <motion.article
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ duration: 0.45 }}
                    className="feature-card flex flex-col gap-4 h-full"
                  >
                    <CheckCircle2 className="w-8 h-8 text-electric" />
                    <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. EQUIPO ─── */}
        <section className="py-24 relative bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">
                Un equipo multidisciplinario
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light mb-12">
                Cada proyecto integra análisis de procesos, diseño de experiencia, desarrollo de software, implementación, capacitación y soporte técnico.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {["Dirección general", "Desarrollo de software", "Implementación", "Soporte", "Diseño y experiencia de usuario"].map((role, i) => (
                  <span key={i} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm">
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </div>
  );
}
