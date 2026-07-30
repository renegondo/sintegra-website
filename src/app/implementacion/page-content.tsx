"use client";

import { useRef } from "react";
import { Search, Settings, Database, PlayCircle, GraduationCap, Rocket, Clock, Headphones, RefreshCw, ShieldAlert } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function ImplementacionPageContent() {
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
                Implementación y Soporte
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Tecnología acompañada de</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">una implementación ordenada.</motion.span>
            </motion.h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Un sistema produce resultados cuando está correctamente configurado, el personal comprende su uso y existe seguimiento después de la puesta en marcha.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FASES DE IMPLEMENTACION */}
        <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">Fases del Proyecto</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Diagnóstico", icon: <Search />, items: ["Entrevistas", "Identificación de usuarios", "Revisión de procesos", "Catálogos", "Documentos", "Fuentes de información"] },
                { num: "2", title: "Configuración", icon: <Settings />, items: ["Áreas", "Roles y Permisos", "Conceptos", "Estados", "Flujos", "Plantillas"] },
                { num: "3", title: "Preparación de datos", icon: <Database />, items: ["Limpieza", "Normalización", "Migración", "Validación"] },
                { num: "4", title: "Piloto", icon: <PlayCircle />, items: ["Grupo controlado", "Casos reales", "Registro de incidencias", "Ajustes"] },
                { num: "5", title: "Capacitación", icon: <GraduationCap />, items: ["Administradores", "Operadores", "Directivos", "Manuales", "Material audiovisual"] },
                { num: "6", title: "Puesta en marcha", icon: <Rocket />, items: ["Activación", "Acompañamiento inicial", "Seguimiento", "Mesa de ayuda"] }
              ].map((fase, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full relative overflow-hidden group hover:border-electric/30 transition-all">
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 group-hover:text-electric/[0.02] transition-colors">{fase.num}</div>
                    <div className="relative z-10">
                      <div className="text-electric mb-6 bg-electric/10 w-12 h-12 rounded-xl flex items-center justify-center">{fase.icon}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{fase.title}</h3>
                      <ul className="space-y-2">
                        {fase.items.map((item, j) => (
                          <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                            <span className="text-electric font-bold">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOPORTE */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Soporte Continuo</h2>
              <p className="text-xl text-slate-600 font-light">Nuestro compromiso no termina el día del lanzamiento.</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal>
                <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl">
                  <Clock className="w-8 h-8 text-electric shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Horario y Canales</h4>
                    <p className="text-slate-600">Ofrecemos soporte a través de tickets en nuestra plataforma, correo electrónico y línea telefónica, operando en horarios definidos para garantizar disponibilidad durante tu jornada administrativa.</p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl">
                  <Headphones className="w-8 h-8 text-electric shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Niveles de Prioridad y Escalamiento</h4>
                    <p className="text-slate-600">Cada incidente se clasifica (bajo, medio, alto, crítico) para asegurar que los problemas que detienen la operación reciban atención inmediata mediante un protocolo claro de escalamiento.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl">
                  <RefreshCw className="w-8 h-8 text-electric shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Mantenimiento y Actualizaciones</h4>
                    <p className="text-slate-600">Aplicamos actualizaciones funcionales y parches de seguridad de forma programada, notificando con antelación para no interferir con la operación crítica de la institución.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl">
                  <ShieldAlert className="w-8 h-8 text-electric shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Respaldos</h4>
                    <p className="text-slate-600">Configuramos estrategias automatizadas de respaldo de datos, garantizando que la información municipal se encuentre protegida y disponible ante cualquier eventualidad.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
