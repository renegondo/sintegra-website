"use client";

import { useRef } from "react";
import { ShieldCheck, Zap, Server, ChevronRight, BarChart3, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function NosotrosPage() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Hero Animation
    const titleLines = gsap.utils.toArray('.hero-title-line');
    gsap.fromTo(titleLines, 
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      }
    );

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );

    // 2. Values Card Stack
    const cards = gsap.utils.toArray('.value-card');
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 3. Scroll Lighting for the Story
    const storyText = gsap.utils.toArray('.scroll-light-text');
    storyText.forEach((text: any) => {
      gsap.fromTo(text,
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          }
        }
      );
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen flex flex-col overflow-hidden relative">
      
      {/* Background Depth Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="layer depth-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="layer depth-1">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px]" />
        </div>
      </div>

      <main className="flex-1 relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="scene pt-32 pb-24 md:pt-48 md:pb-32" data-scene="hero">
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
            
            <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-medium text-electric mb-10 shadow-[0_0_20px_rgba(0,102,255,0.15)]">
              Sobre Sintegra
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              <div className="hero-title-line overflow-hidden">Nuestra Misión:</div>
              <div className="hero-title-line overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-300">
                Erradicar la Burocracia.
              </div>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-gray-400 max-w-[48rem] leading-relaxed mb-12 font-light">
              No solo desarrollamos software; somos el socio tecnológico de instituciones y gobiernos que exigen transparencia absoluta y eficiencia sin excusas.
            </p>
          </div>
        </section>

        {/* 2. LA HISTORIA (StoryBrand) */}
        <section className="py-32 relative bg-surface-dark/30 border-y border-white/5">
          <div className="container mx-auto px-4 max-w-4xl text-center md:text-left flex flex-col gap-12">
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                <span className="text-electric block mb-4">El Origen</span>
                Nacimos para resolver el dolor de las administraciones modernas.
              </h2>
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl font-light text-gray-400">
              <p className="scroll-light-text leading-relaxed">
                Durante años, vimos cómo gobiernos locales y empresas perdían millones por culpa de <strong className="text-white">sistemas obsoletos, procesos manuales y hojas de Excel</strong>.
              </p>
              <p className="scroll-light-text leading-relaxed">
                El problema no era la falta de voluntad, sino la falta de herramientas adecuadas. Los sistemas tradicionales son lentos, inseguros y fomentan la opacidad.
              </p>
              <p className="scroll-light-text leading-relaxed">
                Por eso creamos <strong className="text-electric">Sintegra</strong>. Construimos plataformas de tesorería y gestión en la nube que garantizan auditoría en tiempo real, trazabilidad incorruptible y una experiencia superior tanto para el operador como para el ciudadano.
              </p>
            </div>

          </div>
        </section>

        {/* 3. NUESTROS VALORES (Card Stack) */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nuestros Pilares</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Los valores que sostienen cada línea de código que escribimos y cada sistema que implementamos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="value-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-electric/10 p-4 rounded-2xl shrink-0">
                  <ShieldCheck className="w-10 h-10 text-electric" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Transparencia Radical</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    La confianza institucional no se negocia. Diseñamos módulos donde la trazabilidad de cada acción, usuario y monto es inmutable y siempre auditable.
                  </p>
                </div>
              </div>
              
              <div className="value-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-electric/10 p-4 rounded-2xl shrink-0">
                  <Server className="w-10 h-10 text-electric" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Seguridad como Prioridad</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Manejamos datos críticos financieros y ciudadanos. Operamos bajo estándares de encriptación bancaria y arquitectura escalable en la nube (AWS).
                  </p>
                </div>
              </div>
              
              <div className="value-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-electric/10 p-4 rounded-2xl shrink-0">
                  <Zap className="w-10 h-10 text-electric" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Innovación Pragmática</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    No creamos tecnología por moda. Desarrollamos soluciones que automatizan horas de trabajo manual en segundos de procesamiento inteligente.
                  </p>
                </div>
              </div>

              <div className="value-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-electric/10 p-4 rounded-2xl shrink-0">
                  <Users className="w-10 h-10 text-electric" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Éxito del Cliente</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Nuestro trabajo no termina en la entrega del software. Somos el aliado tecnológico continuo que capacita y soporta a tu equipo 24/7.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="py-32 relative z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-electric p-1 md:p-[2px] rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,102,255,0.4)] relative">
              <div className="relative bg-electric text-white p-10 md:p-16 rounded-[2.5rem] text-center overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Listo para transformar tu institución?</h2>
                  <p className="text-white/80 mb-10 text-xl leading-relaxed max-w-2xl mx-auto font-light">
                    Agenda una llamada con nuestro equipo de expertos y descubre cómo podemos adaptar nuestras soluciones a los retos específicos de tu administración.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="mailto:contacto@sintegra.com"
                      className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-lg font-bold text-electric transition-all hover:scale-105 shadow-xl"
                    >
                      Contactar Ventas
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link 
                      href="/#demo-access"
                      className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-white/20 bg-transparent px-8 text-lg font-bold text-white transition-all hover:bg-white/10"
                    >
                      Ver Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
