"use client";

import { useRef } from "react";
import { Link as LinkIcon, MessageCircle, Mail, Database, Printer, Map, QrCode, Calculator, Users, CreditCard, Code, Server, AlertCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function IntegracionesPageContent() {
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
                Conectividad y API
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Conectamos herramientas</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">para evitar la dispersión.</motion.span>
            </motion.h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed font-light">
                Un ecosistema eficiente no trabaja aislado. Estudiamos e implementamos conexiones seguras con las herramientas tecnológicas que tu institución ya utiliza.
              </p>
            </Reveal>
          </div>
        </section>

        {/* LISTA DE INTEGRACIONES */}
        <section className="py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Servicios de mensajería", icon: <MessageCircle /> },
                { name: "Correo electrónico", icon: <Mail /> },
                { name: "Almacenamiento en la nube", icon: <Database /> },
                { name: "Impresoras térmicas Bluetooth", icon: <Printer /> },
                { name: "Mapas y geolocalización", icon: <Map /> },
                { name: "Generación de códigos QR", icon: <QrCode /> },
                { name: "Sistemas contables", icon: <Calculator /> },
                { name: "Directorios institucionales", icon: <Users /> },
                { name: "Plataformas de pagos", icon: <CreditCard /> },
                { name: "APIs gubernamentales*", icon: <Code /> },
                { name: "Sistemas heredados (Legacy)", icon: <Server /> },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-electric/30 transition-all h-full">
                    <div className="text-slate-600 mb-4">{s.icon}</div>
                    <span className="font-semibold text-slate-700 text-sm md:text-base">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-16 flex items-start gap-4 p-6 bg-amber-50 border border-amber-200 rounded-xl max-w-3xl mx-auto">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Evaluación técnica requerida:</strong> Todas las integraciones con sistemas de terceros, en especial APIs gubernamentales y plataformas de pago, están sujetas a un análisis de factibilidad. No implementamos conexiones sin antes comprobar documentación, accesos, cumplimiento de licencias y viabilidad técnica y de seguridad.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
