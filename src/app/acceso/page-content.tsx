"use client";

import { useRef } from "react";
import { Building2, MessageSquare, ExternalLink, QrCode, FileText, PlaySquare, Headphones } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function AccesoPageContent() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={container} className="min-h-screen flex flex-col relative bg-background">
      <main className="flex-1 relative z-10">
        
        {/* HERO */}
        <section className="scene pt-32 pb-12 md:pt-40 md:pb-16 relative isolate overflow-hidden bg-[#f7f5ef]" data-scene="hero">
          <SpotlightBackground />
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-bold tracking-wide text-electric mb-8 shadow-[0_0_20px_rgba(37,99,235,0.1)] uppercase">
                Portales Operativos
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Acceso a plataformas</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">Sintegra.</motion.span>
            </motion.h1>
          </div>
        </section>

        {/* ACCESOS PRINCIPALES */}
        <section className="py-12 md:py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* PLATAFORMAS OPERATIVAS */}
              <Reveal delay={0}>
                <a href="https://tesoreria.sistemasintegrados.online/login" target="_blank" rel="noopener noreferrer" className="block group h-full">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-electric/40 hover:shadow-lg transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-electric transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Sintegra Tesorería</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">Acceso para administradores, tesoreros y personal de ventanilla.</p>
                    <span className="text-electric font-bold text-sm">Iniciar sesión</span>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.1}>
                <a href="#" className="block group h-full">
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 hover:shadow-lg transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Bebot Ayuntamiento</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">Acceso a la bandeja de atención, proyectos y tickets ciudadanos.</p>
                    <span className="text-white font-bold text-sm">Iniciar sesión</span>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <a href="#" className="block group h-full">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                        <PlaySquare className="w-6 h-6" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-slate-700 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Portal de Demostraciones</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">Acceso a entornos seguros de prueba para instituciones evaluando el sistema.</p>
                    <span className="text-slate-700 font-bold text-sm">Acceder a Demo</span>
                  </div>
                </a>
              </Reveal>

              {/* SERVICIOS PÚBLICOS / SOPORTE */}
              <Reveal delay={0.3}>
                <Link href="#" className="block group h-full">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                        <QrCode className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Verificar comprobante</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">Consulta ciudadana para validar el estado de un recibo municipal.</p>
                    <span className="text-green-600 font-bold text-sm">Validar folio</span>
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={0.4}>
                <Link href="#" className="block group h-full">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Verificar oficio</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">Consulta institucional para validar la autenticidad de un documento interno.</p>
                    <span className="text-purple-600 font-bold text-sm">Validar documento</span>
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={0.5}>
                <Link href="#" className="block group h-full">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                        <Headphones className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Centro de soporte</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">Mesa de ayuda y levantamiento de tickets técnicos para usuarios activos.</p>
                    <span className="text-slate-700 font-bold text-sm">Ir a Soporte</span>
                  </div>
                </Link>
              </Reveal>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
