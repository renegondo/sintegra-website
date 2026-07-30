"use client";

import { useRef, useState } from "react";
import { Send, CalendarCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function SolicitarDemoPageContent() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div ref={container} className="min-h-screen flex flex-col relative bg-background">
      <main className="flex-1 relative z-10">
        
        {/* HERO */}
        <section className="scene pt-32 pb-12 md:pt-40 md:pb-16 relative isolate overflow-hidden bg-[#f7f5ef]" data-scene="hero">
          <SpotlightBackground />
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-bold tracking-wide text-electric mb-8 shadow-[0_0_20px_rgba(37,99,235,0.1)] uppercase">
                Demostración Técnica
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Conoce la plataforma con un</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">escenario adaptado a tu operación.</motion.span>
            </motion.h1>
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-[#40555b] leading-relaxed font-light">
                Nuestras presentaciones no son videos grabados. Preparamos un entorno de prueba basado en los retos específicos de tu administración.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-12 md:py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* COLUMNA FORMULARIO */}
              <div className="lg:col-span-2">
                <Reveal>
                  <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
                    {submitted ? (
                      <div className="text-center py-16">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Hemos recibido tu solicitud</h3>
                        <p className="text-slate-600 text-lg max-w-md mx-auto">
                          Un integrante de Sintegra se pondrá en contacto utilizando los datos proporcionados para agendar la fecha de tu presentación.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* DATOS DE CONTACTO */}
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">1</span> Datos de contacto
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Nombre completo</label>
                              <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Cargo</label>
                              <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Institución</label>
                              <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Correo institucional</label>
                              <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Teléfono</label>
                              <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" />
                            </div>
                          </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* DETALLES OPERATIVOS */}
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">2</span> Detalles operativos
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">¿Qué áreas participarían?</label>
                              <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Ej. Tesorería, Ingresos, Sistemas" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">¿Actualmente utiliza algún sistema?</label>
                              <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Mencionar si aplica" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">¿Requiere operación móvil en campo?</label>
                              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700">
                                <option value="si">Sí, es indispensable</option>
                                <option value="no">No por el momento</option>
                                <option value="talvez">No estoy seguro</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">¿Requiere trabajo sin conexión a internet?</label>
                              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700">
                                <option value="si">Sí, operamos en zonas sin señal</option>
                                <option value="no">No, siempre hay conexión</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">¿Cuántos usuarios aproximados tendría?</label>
                              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700">
                                <option value="1-5">1 - 5 usuarios</option>
                                <option value="6-20">6 - 20 usuarios</option>
                                <option value="21-50">21 - 50 usuarios</option>
                                <option value="51+">Más de 50 usuarios</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">Fecha sugerida para la presentación</label>
                              <input required type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">¿Qué problema principal busca resolver?</label>
                            <textarea required rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Describe brevemente los retos actuales..."></textarea>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 pt-4">
                          <input required type="checkbox" id="privacy" className="mt-1.5 w-4 h-4 text-electric border-slate-300 rounded focus:ring-electric" />
                          <label htmlFor="privacy" className="text-sm text-slate-600">
                            He leído y acepto el <a href="/aviso-de-privacidad" className="text-electric hover:underline">Aviso de Privacidad</a> para el tratamiento de mis datos de contacto.
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-electric text-white font-bold py-4 rounded-xl hover:bg-electric-hover transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-electric/20"
                        >
                          {isSubmitting ? (
                            "Procesando..."
                          ) : (
                            <>
                              Solicitar demostración <Send className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* COLUMNA INFO DIRECTA */}
              <div className="lg:col-span-1">
                <Reveal delay={0.2}>
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 sticky top-32">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">¿Qué incluye la demostración?</h3>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-lg border border-slate-200 text-electric shrink-0 shadow-sm"><ShieldCheck className="w-5 h-5" /></div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">Entorno seguro</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">Presentación en una instancia aislada sin usar datos reales comprometidos.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-lg border border-slate-200 text-electric shrink-0 shadow-sm"><CalendarCheck className="w-5 h-5" /></div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">Duración adaptada</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">Normalmente 45 minutos, con tiempo para resolver todas tus dudas técnicas.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
