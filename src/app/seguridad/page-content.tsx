"use client";

import { useRef } from "react";
import { Lock, FileSignature, ShieldCheck, CheckCircle2, Shield, QrCode, Code2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function SeguridadPageContent() {
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
                Arquitectura de Seguridad
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Seguridad, trazabilidad</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">y control de acceso.</motion.span>
            </motion.h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Diseñamos cada solución para que usuarios, roles, datos y movimientos puedan administrarse de acuerdo con las responsabilidades de cada institución.
              </p>
            </Reveal>
          </div>
        </section>

        {/* POLÍTICAS DE SEGURIDAD */}
        <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Control de acceso",
                  icon: <Lock />,
                  items: ["Autenticación segura", "Roles y Permisos granulares", "Separación de funciones", "Suspensión de cuentas", "Sesiones controladas"]
                },
                {
                  title: "Trazabilidad",
                  icon: <FileSignature />,
                  items: ["Registro de usuario responsable", "Marcas de fecha y hora", "Historial de estados", "Registro de cancelaciones y motivos", "Evidencias inmutables"]
                },
                {
                  title: "Protección de información",
                  icon: <ShieldCheck />,
                  items: ["Transmisión segura", "Políticas estrictas de acceso", "Respaldos y recuperación", "Retención controlada", "Gestión segura de archivos"]
                },
                {
                  title: "Verificación pública",
                  icon: <QrCode />,
                  items: ["Consultas limitadas y seguras", "Identificadores no predecibles", "Validación estricta de estado", "Protección de datos personales", "Registro de consultas"]
                },
                {
                  title: "Desarrollo seguro",
                  icon: <Code2 />,
                  items: ["Revisión de dependencias", "Gestión de secretos", "Validación estricta de entradas", "Registro de errores (Logs)", "Actualizaciones continuas"]
                }
              ].map((policy, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full group hover:border-electric/30 transition-all">
                    <div className="text-electric mb-6 bg-electric/10 w-12 h-12 rounded-xl flex items-center justify-center">{policy.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{policy.title}</h3>
                    <ul className="space-y-3">
                      {policy.items.map((item, j) => (
                        <li key={j} className="text-slate-600 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* REPORTE DE VULNERABILIDADES */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <Reveal>
              <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 flex flex-col items-center text-center">
                <Shield className="w-16 h-16 text-electric mb-6" />
                <h2 className="text-3xl font-bold mb-4">Reporte de Vulnerabilidades</h2>
                <p className="text-slate-300 leading-relaxed max-w-2xl mb-8 text-lg font-light">
                  La seguridad es un proceso continuo. Si eres un investigador de seguridad o usuario y has encontrado un fallo potencial en alguno de nuestros sistemas, te pedimos informarlo de manera responsable.
                </p>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 mb-8 inline-flex items-center gap-3">
                  <span className="font-mono text-electric-hover font-bold">seguridad@sistemasintegrados.online</span>
                </div>
                <p className="text-slate-400 text-sm max-w-xl">
                  Agradecemos reportes que incluyan pasos claros para reproducir el problema. No compartiremos detalles del fallo hasta que haya sido completamente mitigado.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </div>
  );
}
