"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ShieldCheck, Zap, BarChart3, ChevronRight, Smartphone, Lock, Server } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

    gsap.fromTo('.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: "power3.out" }
    );

    // 2. Scroll Lighting for Problem Section
    const problemText = gsap.utils.toArray('.scroll-light-text');
    problemText.forEach((text: any) => {
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

    // 3. Card Stack Reveal
    const cards = gsap.utils.toArray('.benefit-card');
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

    // 4. Mobile Ecosystem Images Parallax
    const mobileImages = gsap.utils.toArray('.mobile-mockup');
    mobileImages.forEach((img: any, i) => {
      gsap.fromTo(img,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mobile-section",
            start: "top 70%",
            end: "top 20%",
            scrub: 1
          }
        }
      );
    });
    
    // Background Parallax
    gsap.to('.glow-orb-1', {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      
      {/* Background Depth Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="layer depth-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="layer depth-1">
          <div className="glow-orb-1 absolute top-0 left-[20%] w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-electric/5 rounded-full blur-[100px]" />
        </div>
      </div>



      <main className="flex-1 relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="scene pt-32 pb-24 md:pt-48 md:pb-32" data-scene="hero">
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
            
            <div className="hero-cta inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-medium text-electric mb-10 shadow-[0_0_20px_rgba(0,102,255,0.15)]">
              Sistemas de Gestión B2B y Gubernamental
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              <div className="hero-title-line overflow-hidden">Moderniza la Gestión.</div>
              <div className="hero-title-line overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Garantiza la Transparencia.
              </div>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-gray-400 max-w-[48rem] leading-relaxed mb-12 font-light">
              Desarrollamos ecosistemas de software robustos para tesorerías e instituciones. Centraliza tu padrón, automatiza la cobranza y audita cada movimiento en tiempo real.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
              <a 
                href="#solution" 
                className="group flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Conocer la Plataforma
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1 text-electric" />
              </a>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="w-full border-y border-white/5 bg-surface-dark/50 py-8 relative z-10">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 text-gray-500 font-medium text-sm md:text-base">
            <span className="flex items-center gap-2"><Lock className="w-5 h-5 text-electric/80" /> Encriptación Bancaria</span>
            <span className="flex items-center gap-2"><Server className="w-5 h-5 text-electric/80" /> Infraestructura Cloud AWS</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-electric/80" /> Auditoría en Tiempo Real</span>
          </div>
        </div>

        {/* 2. PROBLEM SECTION (Agitation) */}
        <section id="problem" className="py-32 relative">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight scroll-light-text mb-8">
              La opacidad y el descontrol financiero cuestan millones al año.
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-400 scroll-light-text leading-relaxed text-left md:text-center">
              Gestionar padrones masivos, emitir recibos físicos y realizar cortes de caja manuales genera <strong className="text-white">fugas de capital, errores contables y una pésima experiencia</strong> para el ciudadano o cliente. Tu institución necesita evolucionar.
            </p>
          </div>
        </section>

        {/* 3. SOLUTION / BENEFITS (Card Stack) */}
        <section id="solution" className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Plataforma de Control Total</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Sintegra reemplaza el caos administrativo con módulos diseñados para la máxima eficiencia y transparencia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="benefit-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl">
                <ShieldCheck className="w-14 h-14 text-electric mb-8" />
                <h3 className="text-2xl font-bold mb-4">Trazabilidad Incorruptible</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  El sistema registra inmutablemente la hora, el operador y el monto de cada transacción. Realiza cortes de caja exactos sin descuadres.
                </p>
              </div>
              
              <div className="benefit-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl">
                <Zap className="w-14 h-14 text-electric mb-8" />
                <h3 className="text-2xl font-bold mb-4">Validación Ciudadana</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Emite tickets y certificados digitales con un Código QR único. Cualquier persona puede verificar la autenticidad de un documento al instante.
                </p>
              </div>
              
              <div className="benefit-card bg-surface-dark p-10 rounded-3xl border border-white/10 hover:border-electric/50 transition-colors shadow-2xl">
                <BarChart3 className="w-14 h-14 text-electric mb-8" />
                <h3 className="text-2xl font-bold mb-4">Padrón Centralizado</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Unifica tu catálogo de conceptos, adeudos y usuarios. Aplica multas, recargos y descuentos programados sin depender del cálculo manual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. MOBILE ECOSYSTEM SECTION */}
        <section id="mobile" className="py-32 relative bg-surface-dark/30 border-y border-white/5 mobile-section overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content */}
              <div className="lg:w-1/3 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric border border-electric/20 mb-6">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-sm font-semibold">Ecosistema Móvil</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Cobranza en Terreno. Sin excusas.</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Empodera a tus operadores con la aplicación nativa para Android. Realiza cobros, busca en el padrón y sincroniza los ingresos con la tesorería central en tiempo real, desde cualquier lugar.
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-electric" /> Sincronización instantánea</li>
                  <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-electric" /> Emisión de comprobantes</li>
                  <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-electric" /> Historial de pagos integrado</li>
                </ul>
              </div>
              
              {/* Image Collage */}
              <div className="lg:w-2/3 relative h-[600px] w-full">
                {/* Center Main App Image */}
                <div className="mobile-mockup absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[240px] md:w-[280px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden border-4 border-black">
                  <Image src="/images/app-screen-1.jpg" alt="App Cobranza Inicio" width={400} height={800} className="w-full h-auto" />
                </div>
                
                {/* Left Floating Image */}
                <div className="mobile-mockup absolute left-0 md:left-[10%] top-[20%] z-20 w-[200px] md:w-[240px] shadow-2xl rounded-3xl overflow-hidden border-4 border-black opacity-80 -rotate-6">
                  <Image src="/images/app-screen-2.jpg" alt="App Cobranza Lista" width={400} height={800} className="w-full h-auto" />
                </div>
                
                {/* Right Floating Image */}
                <div className="mobile-mockup absolute right-0 md:right-[10%] top-[10%] z-20 w-[200px] md:w-[240px] shadow-2xl rounded-3xl overflow-hidden border-4 border-black opacity-80 rotate-6">
                  <Image src="/images/app-screen-3.jpg" alt="App Cobranza Detalle" width={400} height={800} className="w-full h-auto" />
                </div>

                {/* Bottom Left Floating Image */}
                <div className="mobile-mockup absolute left-[15%] md:left-[20%] bottom-[10%] z-10 w-[180px] md:w-[200px] shadow-2xl rounded-3xl overflow-hidden border-4 border-black opacity-60 -rotate-12">
                  <Image src="/images/app-screen-4.jpg" alt="App Cobranza Recibo" width={400} height={800} className="w-full h-auto" />
                </div>

                {/* Bottom Right Floating Image */}
                <div className="mobile-mockup absolute right-[15%] md:right-[20%] bottom-[5%] z-10 w-[180px] md:w-[200px] shadow-2xl rounded-3xl overflow-hidden border-4 border-black opacity-60 rotate-12">
                  <Image src="/images/app-screen-5.jpg" alt="App Cobranza Otra Vista" width={400} height={800} className="w-full h-auto" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. FINAL CTA / DEMO ACCESS (Bottom of the funnel) */}
        <section id="demo-access" className="py-32 relative z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-surface-dark to-black p-1 md:p-[2px] rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,102,255,0.15)] relative group">
              
              {/* Outer Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/50 via-transparent to-electric/20 rounded-[2.5rem] opacity-50"></div>

              <div className="relative bg-surface-dark/95 backdrop-blur-3xl p-10 md:p-16 rounded-[2.5rem] flex flex-col md:flex-row gap-12 items-center overflow-hidden">
                
                {/* Internal Lighting */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-electric/20 blur-[80px] rounded-full"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-electric/10 blur-[80px] rounded-full"></div>

                <div className="flex-1 relative z-10">
                  <h2 className="text-4xl font-bold mb-6 text-white">Comprueba el Poder de Sintegra</h2>
                  <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                    Hemos preparado un entorno de pruebas completo para que interactúes con el sistema administrativo. Usa las credenciales genéricas a continuación para acceder sin necesidad de registro.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="bg-black/60 p-5 rounded-2xl border border-white/5 flex-1 shadow-inner">
                      <span className="block text-xs uppercase tracking-wider text-electric font-bold mb-2">Usuario Demo</span>
                      <strong className="font-mono text-2xl text-white">admin</strong>
                    </div>
                    <div className="bg-black/60 p-5 rounded-2xl border border-white/5 flex-1 shadow-inner">
                      <span className="block text-xs uppercase tracking-wider text-electric font-bold mb-2">Contraseña Demo</span>
                      <strong className="font-mono text-2xl text-white">12345678</strong>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto relative z-10">
                  <a 
                    href="https://tesoreria-allstar.docploy.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-full md:w-56 h-56 rounded-3xl bg-white text-black hover:scale-105 hover:bg-gray-100 shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300 group/btn"
                  >
                    <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover/btn:bg-electric group-hover/btn:text-white transition-colors">
                      <ChevronRight className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-xl">Iniciar Sesión</span>
                    <span className="text-sm text-gray-500 mt-2">Plataforma Web</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>


    </div>
  );
}
