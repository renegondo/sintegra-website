"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Link as LinkIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function ContactoPageContent() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
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
                Contacto
              </div>
            </Reveal>
            <motion.h1
              initial="hidden" animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1] text-[#10272e]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line">Conversemos sobre las</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 55, rotateX: 18 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }} className="hero-line hero-accent">necesidades de tu institución.</motion.span>
            </motion.h1>
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-[#40555b] leading-relaxed font-light">
                Cuéntanos qué proceso deseas mejorar. Nuestro equipo analizará tu solicitud para identificar la solución o el alcance más adecuado.
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
                          <Send className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Hemos recibido tu solicitud</h3>
                        <p className="text-slate-600 text-lg max-w-md mx-auto">
                          Un integrante de Sintegra se pondrá en contacto utilizando los datos proporcionados.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Nombre completo</label>
                            <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Juan Pérez" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Cargo</label>
                            <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Tesorero Municipal" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Institución</label>
                            <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="H. Ayuntamiento" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Municipio y estado</label>
                            <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Xalapa, Veracruz" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Correo institucional</label>
                            <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="juan.perez@municipio.gob.mx" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Teléfono</label>
                            <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="228 123 4567" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Solución de interés</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700">
                              <option value="">Selecciona una opción</option>
                              <option value="tesoreria">Sintegra Tesorería</option>
                              <option value="bebot">Bebot Ayuntamiento</option>
                              <option value="medida">Desarrollo a la medida</option>
                              <option value="integraciones">Integraciones</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Usuarios aproximados</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700">
                              <option value="">Selecciona un rango</option>
                              <option value="1-5">1 - 5 usuarios</option>
                              <option value="6-20">6 - 20 usuarios</option>
                              <option value="21-50">21 - 50 usuarios</option>
                              <option value="51+">Más de 50 usuarios</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Medio preferido de contacto</label>
                            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-slate-700">
                              <option value="correo">Correo electrónico</option>
                              <option value="telefono">Llamada telefónica</option>
                              <option value="whatsapp">WhatsApp</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Descripción de la necesidad</label>
                          <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all" placeholder="Describe brevemente el proceso que deseas mejorar..."></textarea>
                        </div>

                        <div className="flex items-start gap-3">
                          <input required type="checkbox" id="privacy" className="mt-1.5 w-4 h-4 text-electric border-slate-300 rounded focus:ring-electric" />
                          <label htmlFor="privacy" className="text-sm text-slate-600">
                            He leído y acepto el <a href="/aviso-de-privacidad" className="text-electric hover:underline">Aviso de Privacidad</a> para el tratamiento de mis datos de contacto con fines comerciales.
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-electric text-white font-bold py-4 rounded-xl hover:bg-electric-hover transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-electric/20"
                        >
                          {isSubmitting ? (
                            "Enviando..."
                          ) : (
                            <>
                              Enviar solicitud de contacto <Send className="w-5 h-5 ml-2" />
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
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-6">Información directa</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-electric/10 p-3 rounded-xl text-electric shrink-0"><Mail className="w-6 h-6" /></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Correo comercial</p>
                            <a href="mailto:ventas@sistemasintegrados.online" className="text-slate-600 hover:text-electric transition-colors">ventas@sistemasintegrados.online</a>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="bg-electric/10 p-3 rounded-xl text-electric shrink-0"><Phone className="w-6 h-6" /></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Línea telefónica / WhatsApp</p>
                            <a href="tel:+522280000000" className="text-slate-600 hover:text-electric transition-colors">+52 228 000 0000</a>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="bg-electric/10 p-3 rounded-xl text-electric shrink-0"><Clock className="w-6 h-6" /></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Horario de atención</p>
                            <p className="text-slate-600">Lunes a Viernes<br/>9:00 AM - 6:00 PM (Hora Centro)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="bg-electric/10 p-3 rounded-xl text-electric shrink-0"><MapPin className="w-6 h-6" /></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Ciudad</p>
                            <p className="text-slate-600">Xalapa, Veracruz</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="bg-electric/10 p-3 rounded-xl text-electric shrink-0"><LinkIcon className="w-6 h-6" /></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Redes Profesionales</p>
                            <a href="#" className="text-slate-600 hover:text-electric transition-colors">LinkedIn Sintegra</a>
                          </div>
                        </div>
                      </div>
                    </div>
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
