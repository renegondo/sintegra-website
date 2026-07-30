"use client";

import { useRef } from "react";
import { Check, X, Building2, MessageSquare, Code, Link as LinkIcon, ChevronRight, Database } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function SolucionesPageContent() {
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
                Soluciones Sintegra
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
                Un ecosistema de soluciones
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 55, rotateX: 18 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="hero-line hero-accent"
              >
                para la gestión pública.
              </motion.span>
            </motion.h1>
            
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Plataformas especializadas que pueden implementarse de forma independiente o conectarse como parte de una estrategia integral de transformación digital.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── 2. PRODUCT CARDS OVERVIEW ─── */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal>
                <Link href="/soluciones/tesoreria-municipal" className="block group">
                  <motion.div whileHover={{ y: -8 }} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl h-full transition-all group-hover:border-electric/40 group-hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-electric/5 rounded-bl-full transition-colors group-hover:bg-electric/10" />
                    
                    <div className="bg-electric/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 text-electric">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-slate-900 relative z-10 group-hover:text-electric transition-colors">Sintegra Tesorería</h3>
                    <p className="text-slate-600 text-lg leading-relaxed relative z-10 mb-8">
                      Sistema Integral de Recaudación Municipal. Digitaliza el cobro en ventanilla y en campo con control absoluto y trazabilidad.
                    </p>
                    <span className="inline-flex items-center text-electric font-bold">
                      Conocer plataforma <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.div>
                </Link>
              </Reveal>
              
              <Reveal delay={0.1}>
                <Link href="/soluciones/bebot-ayuntamiento" className="block group">
                  <motion.div whileHover={{ y: -8 }} className="bg-slate-900 p-10 rounded-[2rem] border border-slate-800 shadow-xl h-full transition-all group-hover:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full" />
                    
                    <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 text-white">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Bebot Ayuntamiento</h3>
                    <p className="text-slate-400 text-lg leading-relaxed relative z-10 mb-8">
                      Atención Ciudadana y Gestión Operativa. Convierte conversaciones en tickets, proyectos y resultados verificables.
                    </p>
                    <span className="inline-flex items-center text-white font-bold group-hover:text-blue-300 transition-colors">
                      Conocer plataforma <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </motion.div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 3. COMPARADOR ─── */}
        <section className="py-24 relative z-10 bg-slate-50 mt-12 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Compara nuestras plataformas</h2>
              <p className="text-slate-600">Encuentra el enfoque adecuado para la necesidad específica de tu institución.</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm md:text-base">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="py-5 px-6 font-semibold text-slate-500 w-1/3">Capacidad</th>
                      <th className="py-5 px-6 font-bold text-slate-900 w-1/3">Sintegra Tesorería</th>
                      <th className="py-5 px-6 font-bold text-slate-900 w-1/3">Bebot Ayuntamiento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { cap: "Recaudación municipal", tes: true, beb: false },
                      { cap: "Aplicación móvil de campo", tes: true, beb: "Opcional" },
                      { cap: "Impresión térmica", tes: true, beb: false },
                      { cap: "Comprobantes con QR", tes: true, beb: "Oficios con QR" },
                      { cap: "Atención por WhatsApp", tes: false, beb: true },
                      { cap: "Reportes ciudadanos", tes: false, beb: true },
                      { cap: "Proyectos y tareas", tes: false, beb: true },
                      { cap: "Oficios interdepartamentales", tes: false, beb: true },
                      { cap: "Dashboard ejecutivo", tes: true, beb: true },
                      { cap: "Evidencias y ubicación", tes: true, beb: true },
                      { cap: "Roles y permisos", tes: true, beb: true },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 text-slate-600 font-medium">{row.cap}</td>
                        <td className="py-4 px-6">
                          {row.tes === true ? <Check className="w-5 h-5 text-green-500" /> : row.tes === false ? <X className="w-5 h-5 text-slate-300" /> : <span className="text-slate-600">{row.tes}</span>}
                        </td>
                        <td className="py-4 px-6">
                          {row.beb === true ? <Check className="w-5 h-5 text-green-500" /> : row.beb === false ? <X className="w-5 h-5 text-slate-300" /> : <span className="text-slate-600">{row.beb}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 4. MENSAJE DE INTEGRACIÓN Y OTROS SERVICIOS ─── */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            
            <Reveal>
              <div className="max-w-3xl mx-auto mb-24">
                <div className="w-16 h-16 mx-auto bg-electric/10 rounded-full flex items-center justify-center mb-6">
                  <LinkIcon className="w-8 h-8 text-electric" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Un ecosistema diseñado para conectarse</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Las soluciones pueden compartir una misma estrategia de identidad, soporte, capacitación e infraestructura, reduciendo la dispersión de herramientas dentro de la institución.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Reveal>
                <Link href="/soluciones/desarrollo-a-la-medida" className="block group">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors h-full">
                    <Code className="w-10 h-10 text-slate-700 mb-6" />
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Desarrollo a la medida</h4>
                    <p className="text-slate-600 mb-6">¿Tu institución tiene un proceso único? Construimos módulos, aplicaciones e integraciones específicas para necesidades que no pueden resolverse con software genérico.</p>
                    <span className="text-slate-900 font-bold group-hover:text-electric transition-colors flex items-center">
                      Explorar desarrollo a la medida <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
              
              <Reveal delay={0.1}>
                <Link href="/soluciones/integraciones" className="block group">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors h-full">
                    <Database className="w-10 h-10 text-slate-700 mb-6" />
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Integraciones</h4>
                    <p className="text-slate-600 mb-6">Conectamos nuestras plataformas con tus sistemas contables, almacenamiento, impresoras térmicas, pasarelas de pago y directorios institucionales.</p>
                    <span className="text-slate-900 font-bold group-hover:text-electric transition-colors flex items-center">
                      Conocer más sobre integraciones <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
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
