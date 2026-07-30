"use client";

import { useRef } from "react";
import { MessageSquare, LayoutDashboard, Ticket, FolderKanban, FileText, Settings, ArrowDown, Users, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function BebotPageContent() {
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
        <section className="scene pt-32 pb-24 md:pt-40 md:pb-32 relative isolate overflow-hidden bg-[#f7f5ef]" data-scene="hero">
          <SpotlightBackground />
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
            
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-bold tracking-wide text-electric mb-10 shadow-[0_0_20px_rgba(37,99,235,0.1)] uppercase">
                Atención, Coordinación y Seguimiento
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
                De un mensaje ciudadano a
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 55, rotateX: 18 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="hero-line hero-accent"
              >
                una acción verificable.
              </motion.span>
            </motion.h1>
            
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Bebot centraliza la atención por mensajería, convierte solicitudes en tickets, asigna responsabilidades a las direcciones y permite supervisar el avance de reportes, proyectos y oficios internos.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/solicitar-demo"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-electric px-8 text-base font-bold text-white transition-all shadow-lg shadow-electric/30 hover:bg-electric-hover"
                >
                  Solicitar demostración
                </Link>
                <Link
                  href="#modulos"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-[#10272e] border border-slate-200 transition-all hover:bg-slate-50"
                >
                  Explorar módulos
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 2. EL PROBLEMA ─── */}
        <section className="py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                    Los reportes ciudadanos no deberían perderse entre mensajes y llamadas.
                  </h2>
                  <p className="text-xl text-slate-600 font-light mb-8">
                    Cuando cada dirección trabaja de forma aislada pueden presentarse:
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  {[
                    "Conversaciones sin seguimiento.",
                    "Reportes que nunca llegan al área responsable.",
                    "Dificultad para conocer quién atiende cada solicitud.",
                    "Falta de evidencias.",
                    "Proyectos sin responsables o fechas claras.",
                    "Oficios internos dispersos.",
                    "Poca visibilidad para Presidencia.",
                    "Imposibilidad de medir tiempos de respuesta."
                  ].map((issue, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{issue}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 3. LA SOLUCIÓN (Módulos) ─── */}
        <section id="modulos" className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">
                Una plataforma que conecta ciudadanía, direcciones y nivel ejecutivo
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <MessageSquare />, 
                  title: "Bandeja de atención", 
                  items: ["Recepción de mensajes", "Historial de conversaciones", "Respuesta desde el panel", "Estados abiertos y cerrados"] 
                },
                { 
                  icon: <Ticket />, 
                  title: "Tickets ciudadanos", 
                  items: ["Conversión a reportes", "Asignación a direcciones", "Fotografías y evidencias", "Historial de movimientos"] 
                },
                { 
                  icon: <FolderKanban />, 
                  title: "Proyectos y tareas", 
                  items: ["Proyectos por dirección", "Fechas y responsables", "Tareas y subtareas", "Seguimiento de atrasos"] 
                },
                { 
                  icon: <FileText />, 
                  title: "Oficios interdepartamentales", 
                  items: ["Solicitudes entre áreas", "Asunto y descripción", "Generación de PDF con QR", "Historial de estados"] 
                },
                { 
                  icon: <LayoutDashboard />, 
                  title: "Centro de Control", 
                  items: ["Indicadores globales", "Tickets y proyectos", "Rendimiento por dirección", "Mapa de reportes"] 
                },
                { 
                  icon: <Settings />, 
                  title: "Administración", 
                  items: ["Alta de usuarios", "Asignación de roles", "Vinculación con direcciones", "Configuración general"] 
                },
              ].map((mod, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all h-full">
                    <div className="text-electric mb-6 bg-electric/10 w-14 h-14 rounded-xl flex items-center justify-center">{mod.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{mod.title}</h3>
                    <ul className="space-y-2">
                      {mod.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
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

        {/* ─── 4. ROLES ─── */}
        <section className="py-32 relative bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Herramientas diseñadas para cada rol</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-electric">Agente de atención</h3>
                  <p className="text-slate-400 italic">Convierte conversaciones en solicitudes organizadas.</p>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Recibe, responde y clasifica mensajes</li>
                    <li>• Genera tickets</li>
                    <li>• Asigna la dirección responsable</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-electric">Gestor de dirección</h3>
                  <p className="text-slate-400 italic">Coordina el trabajo operativo de su área.</p>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Recibe tickets y actualiza estados</li>
                    <li>• Adjunta evidencias</li>
                    <li>• Administra proyectos y tareas</li>
                    <li>• Envía oficios a otras direcciones</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-electric">Alcalde o nivel ejecutivo</h3>
                  <p className="text-slate-400 italic">Supervisa toda la operación sin intervenir en las tareas diarias.</p>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Consulta indicadores globales</li>
                    <li>• Identifica atrasos y cuellos de botella</li>
                    <li>• Revisa reportes por zona</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-electric">Administrador</h3>
                  <p className="text-slate-400 italic">Mantiene la estructura y los accesos del sistema.</p>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Crea cuentas y asigna roles</li>
                    <li>• Configura direcciones</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 5. FLUJOS DE OPERACIÓN ─── */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <Reveal>
                <div>
                  <h2 className="text-2xl font-bold mb-10 text-slate-900 text-center">Flujo de atención ciudadana</h2>
                  <div className="space-y-3">
                    {[
                      "Ciudadano envía un mensaje",
                      "Agente responde y clasifica",
                      "La conversación se convierte en ticket",
                      "El ticket se asigna a una dirección",
                      "La dirección trabaja y adjunta evidencia",
                      "El ticket cambia de estado",
                      "El nivel ejecutivo consulta avance y tiempos"
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="px-6 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium w-full text-center">
                          {step}
                        </div>
                        {i !== 6 && <ArrowDown className="text-slate-300 w-4 h-4 my-1" />}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <h2 className="text-2xl font-bold mb-10 text-slate-900 text-center">Flujo interdepartamental</h2>
                  <div className="space-y-3">
                    {[
                      "Una dirección solicita apoyo",
                      "Se crea una petición formal",
                      "Se genera el oficio y su folio",
                      "La dirección receptora responde",
                      "Ambas áreas registran acuerdos",
                      "El sistema conserva documentos y movimientos"
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium w-full text-center">
                          {step}
                        </div>
                        {i !== 5 && <ArrowDown className="text-slate-300 w-4 h-4 my-1" />}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 6. PREGUNTAS FRECUENTES ─── */}
        <section className="py-24 relative bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <Reveal>
              <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Preguntas Frecuentes</h2>
            </Reveal>
            
            <div className="space-y-6">
              {[
                { q: "¿Bebot es solamente un chatbot?", a: "No. La mensajería es el punto de entrada. La plataforma continúa el proceso mediante tickets, asignaciones, proyectos, evidencias, oficios y dashboards." },
                { q: "¿Cada dirección puede ver toda la información?", a: "El acceso debe configurarse de acuerdo con el rol y la dirección de cada usuario." },
                { q: "¿Se pueden adjuntar fotografías y documentos?", a: "Sí. Los tickets, tareas y solicitudes pueden incorporar archivos y evidencias según la configuración." },
                { q: "¿Los oficios pueden verificarse?", a: "Los documentos pueden incluir un código QR que dirija a una consulta pública limitada de autenticidad y estado." },
                { q: "¿Puede utilizarse sin el módulo de WhatsApp?", a: "La arquitectura puede permitir otros canales o el registro manual de reportes, según el alcance contratado." }
              ].map((faq, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. CTA FINAL ─── */}
        <section className="py-24 relative z-20 bg-background">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="max-w-4xl mx-auto bg-electric p-1 md:p-[2px] rounded-[2.5rem] shadow-[0_20px_80px_rgba(37,99,235,0.3)] relative">
                <div className="relative bg-electric text-white p-10 md:p-16 rounded-[2.5rem] text-center overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Convierte la atención ciudadana en resultados medibles.</h2>
                  <p className="text-white/90 mb-10 text-xl leading-relaxed max-w-2xl mx-auto font-light">
                    Conoce cómo Bebot puede conectar a la ciudadanía, las direcciones y el nivel ejecutivo de tu Ayuntamiento.
                  </p>
                  <Link
                    href="/solicitar-demo"
                    className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-electric transition-transform hover:scale-105 shadow-xl"
                  >
                    Solicitar demostración
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
