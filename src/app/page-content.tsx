"use client";

import { useRef } from "react";

import Link from "next/link";
import { ArrowDown, ShieldCheck, Zap, BarChart3, ChevronRight, Lock, Server, Users, Settings, Database, Code, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroTitle } from "@/components/HeroTitle";
import { Reveal } from "@/components/Reveal";
import { SintegraIntro } from "@/components/home/sintegra-intro";

export default function HomePageContent() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={container} className="bg-background text-foreground">
      <SintegraIntro />



      {/* ─── SEC 2. MENSAJE DE POSICIONAMIENTO ─── */}
      <section className="py-32 relative z-10 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-slate-900">
              La transformación digital no consiste solamente en instalar software.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-xl md:text-2xl font-light text-slate-600 leading-relaxed">
              <p>
                Consiste en conectar personas, procesos e información para que cada área pueda trabajar mejor y cada autoridad pueda tomar decisiones con datos confiables.
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Sintegra</strong> reúne herramientas administrativas, operación en campo, seguimiento ciudadano y supervisión ejecutiva dentro de plataformas diseñadas para las necesidades reales de las instituciones públicas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SEC 3. SOLUCIONES ─── */}
      <section id="soluciones" className="py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              Soluciones que conectan toda la operación municipal
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <Reveal delay={0}>
              <motion.article whileHover={{ y: -8 }} className="feature-card h-full flex flex-col justify-between">
                <div>
                  <div className="bg-electric/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <BarChart3 className="w-8 h-8 text-electric" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Sintegra Tesorería</h3>
                  <p className="text-electric font-medium mb-4">Recaudación municipal con control, movilidad y trazabilidad.</p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Digitaliza el cobro en ventanilla y en campo mediante un dashboard administrativo, punto de venta web, aplicación Android, impresión térmica y comprobantes verificables mediante código QR.
                  </p>
                </div>
                <Link href="/soluciones/tesoreria-municipal" className="inline-flex items-center text-electric font-bold hover:text-electric-hover group">
                  Conocer Tesorería <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            </Reveal>

            {/* Tarjeta 2 */}
            <Reveal delay={0.1}>
              <motion.article whileHover={{ y: -8 }} className="feature-card h-full flex flex-col justify-between border-electric/20 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)]">
                <div>
                  <div className="bg-electric w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-electric/30">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Bebot Ayuntamiento</h3>
                  <p className="text-electric font-medium mb-4">Atención ciudadana y coordinación interna en una sola plataforma.</p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Centraliza conversaciones, reportes ciudadanos, tickets, proyectos, tareas, evidencias, oficios digitales y monitoreo ejecutivo.
                  </p>
                </div>
                <Link href="/soluciones/bebot-ayuntamiento" className="inline-flex items-center text-electric font-bold hover:text-electric-hover group">
                  Conocer Bebot <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            </Reveal>

            {/* Tarjeta 3 */}
            <Reveal delay={0.2}>
              <motion.article whileHover={{ y: -8 }} className="feature-card h-full flex flex-col justify-between">
                <div>
                  <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <Code className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Sistemas a la medida</h3>
                  <p className="text-slate-600 font-medium mb-4">Tecnología adaptada a los procesos de cada institución.</p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Diseñamos módulos, aplicaciones e integraciones para necesidades que no pueden resolverse con sistemas genéricos.
                  </p>
                </div>
                <Link href="/soluciones/desarrollo-a-la-medida" className="inline-flex items-center text-slate-700 font-bold hover:text-electric group">
                  Explorar desarrollo a la medida <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SEC 4. DIFERENCIADORES ─── */}
      <section className="py-24 relative z-10 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(37,99,235,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Diseñados alrededor de la operación real
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Web y móvil",
                desc: "Herramientas para personal administrativo, directivos y equipos de campo."
              },
              {
                title: "Roles y permisos",
                desc: "Cada usuario accede únicamente a la información y las funciones necesarias para su trabajo."
              },
              {
                title: "Trazabilidad",
                desc: "Las operaciones conservan responsable, fecha, estado, evidencias y movimientos asociados."
              },
              {
                title: "Trabajo en campo",
                desc: "Aplicaciones preparadas para capturar información, ubicación, fotografías y comprobantes fuera de la oficina."
              },
              {
                title: "Información centralizada",
                desc: "Los datos se sincronizan para ofrecer una visión actualizada de la operación."
              },
              {
                title: "Implementación acompañada",
                desc: "Configuración, capacitación, puesta en marcha y soporte durante la adopción."
              }
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div>
                  <div className="h-0.5 w-12 bg-electric mb-6 rounded-full"></div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEC 5. CÓMO TRABAJA SINTEGRA ─── */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              De un proceso disperso a un sistema conectado
            </h2>
          </Reveal>

          <div className="space-y-6">
            {[
              { num: "01", title: "Diagnóstico", desc: "Conocemos la operación, roles, documentos y necesidades." },
              { num: "02", title: "Configuración", desc: "Adaptamos catálogos, permisos, flujos y áreas." },
              { num: "03", title: "Migración", desc: "Organizamos e incorporamos la información disponible." },
              { num: "04", title: "Implementación", desc: "Realizamos pruebas, piloto y puesta en marcha." },
              { num: "05", title: "Capacitación", desc: "Preparamos a administradores, operadores y directivos." },
              { num: "06", title: "Acompañamiento", desc: "Damos seguimiento a incidencias y nuevas necesidades." }
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="text-4xl font-black text-electric/20">{step.num}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-lg text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEC 6. SEGURIDAD ─── */}
      <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> Arquitectura Segura
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                  Control y seguridad desde el diseño
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  Las soluciones Sintegra incorporan autenticación, permisos por rol, bitácoras operativas, historial de movimientos y mecanismos de verificación. Cada implementación se configura de acuerdo con las responsabilidades y necesidades de la institución.
                </p>
                <Link
                  href="/seguridad"
                  className="inline-flex items-center text-electric font-bold text-lg hover:text-electric-hover group"
                >
                  Conocer nuestro enfoque de seguridad <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
            <div className="flex-1 w-full">
              <Reveal delay={0.2}>
                <div className="aspect-square max-w-md mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl p-8 flex flex-col justify-center gap-6 relative overflow-hidden">
                  {/* Decorative elements representing security layers */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-bl-full" />
                  
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Lock className="w-6 h-6 text-electric" />
                    <span className="font-semibold text-slate-700">Autenticación por roles</span>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Database className="w-6 h-6 text-electric" />
                    <span className="font-semibold text-slate-700">Bitácoras operativas</span>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Settings className="w-6 h-6 text-electric" />
                    <span className="font-semibold text-slate-700">Configuración institucional</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEC 7. SECTORES ─── */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-slate-900">
              Tecnología para diferentes áreas de gobierno
            </h2>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Tesorerías municipales",
              "Presidencias y secretarías particulares",
              "Atención ciudadana",
              "Obras Públicas",
              "Servicios Municipales",
              "Comercio",
              "Limpia Pública",
              "Alumbrado",
              "Contraloría",
              "Organismos descentralizados"
            ].map((sector, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <span className="inline-block px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-full text-slate-700 font-medium hover:border-electric/50 hover:shadow-md transition-all cursor-default">
                  {sector}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEC 8. LLAMADA FINAL ─── */}
      <section className="py-32 relative z-20 bg-background">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-5xl mx-auto bg-electric p-1 md:p-[2px] rounded-[2.5rem] shadow-[0_20px_80px_rgba(37,99,235,0.3)] relative group">
              <div className="relative bg-electric text-white p-10 md:p-20 rounded-[2.5rem] text-center overflow-hidden">
                
                {/* Decorative background lines */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Conecta la operación de tu institución.</h2>
                  <p className="text-white/90 mb-12 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
                    Conoce cómo Sintegra puede adaptar sus soluciones a los procesos, áreas y objetivos de tu gobierno.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/solicitar-demo"
                      className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-electric transition-transform hover:scale-105 shadow-xl"
                    >
                      Solicitar demostración
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-white/20 bg-transparent px-10 text-lg font-bold text-white transition-colors hover:bg-white/10"
                    >
                      Hablar con un especialista
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
