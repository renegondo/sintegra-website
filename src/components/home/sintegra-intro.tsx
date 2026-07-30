"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { RetroGrid } from "@/components/ui/retro-grid";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SintegraIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntroHero");
    if (!hasSeenIntro) {
      setShouldShowLoader(true);
      sessionStorage.setItem("hasSeenIntroHero", "true");
    }
  }, []);

  useGSAP(
    () => {
      if (!isMounted) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".intro-grid-wrapper",
            ".intro-kicker",
            ".intro-title-line",
            ".intro-description",
            ".intro-actions",
            ".intro-panel",
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }
        );
        return;
      }

      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Si debemos mostrar el loader (logo), lo agregamos a la secuencia
      if (shouldShowLoader) {
        // Bloqueamos el scroll durante el loader inicial
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);

        introTimeline
          .from(".loader-logo", {
            opacity: 0,
            yPercent: 30,
            duration: 1,
            ease: "power2.out",
          })
          .to(
            ".loader-logo",
            {
              // Calculamos la posición del header (esquina superior izquierda)
              x: () => {
                const padding = 16;
                return -(window.innerWidth / 2) + padding + 80;
              },
              y: () => {
                return -(window.innerHeight / 2) + 40;
              },
              scale: 0.3,
              duration: 1.2,
              ease: "power3.inOut",
            },
            "+=0.2"
          )
          .to(
            ".loader-container",
            {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                document.body.style.overflow = "";
                const loader = document.querySelector(".loader-container") as HTMLElement;
                if (loader) loader.style.display = "none";
              },
            },
            "-=0.3"
          );
      } else {
        // Asegurarnos de ocultarlo si no debe mostrarse
        gsap.set(".loader-container", { display: "none" });
      }

      // Animación de los elementos del Hero (Retro Grid)
      // Ajustamos el tiempo de inicio dependiendo de si hubo loader o no
      const startDelay = shouldShowLoader ? "-=0.2" : "+=0";

      introTimeline
        .fromTo(
          ".intro-grid-wrapper",
          {
            opacity: 0,
            y: 120,
            scale: 1.15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.7,
            ease: "power3.inOut",
          },
          startDelay
        )
        .from(
          ".intro-horizon",
          {
            opacity: 0,
            scaleX: 0.25,
            duration: 1.1,
          },
          "-=1.1"
        )
        .from(
          ".intro-kicker",
          {
            opacity: 0,
            y: 18,
            filter: "blur(8px)",
            duration: 0.7,
          },
          "-=0.75"
        )
        .from(
          ".intro-title-line",
          {
            opacity: 0,
            yPercent: 115,
            rotateX: 15,
            stagger: 0.12,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          ".intro-description",
          {
            opacity: 0,
            y: 25,
            filter: "blur(7px)",
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".intro-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.45"
        )
        .from(
          ".intro-panel",
          {
            opacity: 0,
            y: 45,
            scale: 0.96,
            filter: "blur(10px)",
            duration: 1,
          },
          "-=0.75"
        );

      /* ScrollTrigger para el paralaje */
      gsap.to(".intro-grid-wrapper", {
        yPercent: 18,
        scale: 1.08,
        opacity: 0.2, // Reducido para tema claro
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".intro-content", {
        yPercent: 12,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".intro-panel", {
        yPercent: -8,
        rotateX: 3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [shouldShowLoader, isMounted],
    }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* OVERLAY LOADER */}
      <div 
        className="loader-container fixed inset-0 z-[110] flex items-center justify-center bg-white pointer-events-none"
        style={{ display: isMounted && shouldShowLoader ? "flex" : "none" }}
      >
        <div className="loader-logo relative w-64 h-20 md:w-96 md:h-28 origin-center">
          <Image
            src="/images/new-logo-3.png"
            alt="Sintegra Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* HERO SECTION */}
      <section
        ref={sectionRef}
        className="relative isolate flex min-h-[90vh] overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-200"
      >
        {/* Fondo base (Adaptado a tema claro con colores institucionales) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_70%_25%,rgba(37,99,235,0.08),transparent_36%),radial-gradient(circle_at_20%_70%,rgba(37,99,235,0.05),transparent_34%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_55%,#e2e8f0_100%)]"
        />

        {/* Resplandor de horizonte */}
        <div
          aria-hidden="true"
          className="intro-horizon pointer-events-none absolute inset-x-[5%] top-[48%] -z-10 h-px origin-center bg-gradient-to-r from-transparent via-electric/30 to-transparent shadow-[0_0_45px_8px_rgba(37,99,235,0.15)]"
        />

        {/* Retro Grid */}
        <div
          aria-hidden="true"
          className="intro-grid-wrapper pointer-events-none absolute inset-x-[-20%] top-[40%] -z-20 h-[85%] overflow-hidden opacity-80"
        >
          <RetroGrid
            angle={67}
            cellSize={72}
            opacity={0.4}
            lightLineColor="#64748b"
            darkLineColor="#64748b"
            className="absolute inset-0"
          />
        </div>

        {/* Oscurecimiento/Aclaramiento para legibilidad en tema claro */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,250,252,0.95)_0%,rgba(248,250,252,0.8)_37%,rgba(248,250,252,0.2)_70%,rgba(248,250,252,0.5)_100%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[45%] bg-gradient-to-t from-slate-100 via-slate-100/70 to-transparent"
        />

        {/* Contenido */}
        <div className="mx-auto grid min-h-[90vh] w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="intro-content relative z-10 max-w-2xl">
            <div className="intro-kicker mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-electric">
              <span className="h-px w-10 bg-current" />
              Sistemas integrales para gobierno
            </div>

            <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">
              <span className="block overflow-hidden pb-2">
                <span className="intro-title-line block">Tecnología</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="intro-title-line block text-electric">
                  que integra.
                </span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="intro-title-line block">Gobierno</span>
              </span>

              <span className="block overflow-hidden">
                <span className="intro-title-line block">que responde.</span>
              </span>
            </h1>

            <p className="intro-description mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Desarrollamos plataformas web y móviles para conectar la
              recaudación, la atención ciudadana, la operación de las
              direcciones y la supervisión ejecutiva.
            </p>

            <div className="intro-actions mt-10 flex flex-wrap gap-4">
              <Link
                href="/soluciones"
                className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-electric px-8 text-sm font-bold text-white transition-all shadow-lg shadow-electric/25 hover:bg-electric-hover hover:-translate-y-0.5"
              >
                Conocer soluciones
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/solicitar-demo"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/50 px-8 text-sm font-bold text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-electric/50 hover:bg-white hover:shadow-sm"
              >
                Solicitar demostración
              </Link>
            </div>
          </div>

          {/* Panel visual */}
          <div className="intro-panel relative z-10 hidden perspective-[1200px] lg:block">
            <div className="relative mx-auto aspect-[4/3] max-w-[650px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/60 p-4 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.08),transparent_35%)]" />

              <div className="relative grid h-full grid-cols-[0.36fr_1fr] overflow-hidden rounded-[1.4rem] border border-slate-100 bg-white/90 shadow-inner">
                <aside className="border-r border-slate-100 p-5 bg-slate-50/50">
                  <div className="mb-10 h-7 w-24 rounded-md bg-electric/10 border border-electric/20" />

                  <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="size-7 rounded-md bg-slate-200" />
                        <div className="h-2.5 flex-1 rounded-full bg-slate-100" />
                      </div>
                    ))}
                  </div>
                </aside>

                <main className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="mb-2 h-3 w-32 rounded-full bg-slate-200" />
                      <div className="h-2 w-48 rounded-full bg-slate-100" />
                    </div>

                    <div className="size-9 rounded-full border border-electric/20 bg-electric/5" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <div className="mb-5 size-8 rounded-lg bg-electric/10" />
                        <div className="mb-2 h-5 w-16 rounded bg-slate-200" />
                        <div className="h-2 w-20 rounded bg-slate-100" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 h-[48%] rounded-xl border border-slate-100 bg-[linear-gradient(180deg,rgba(37,99,235,0.03),transparent)] p-5">
                    <div className="flex h-full items-end gap-3">
                      {[38, 55, 42, 75, 61, 87, 68, 94].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-blue-300 to-electric"
                          style={{
                            height: `${height}%`,
                            opacity: 0.6 + index * 0.05,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-400 md:flex">
          Explorar
          <span className="h-10 w-px bg-gradient-to-b from-slate-400 to-transparent" />
        </div>
      </section>
    </div>
  );
}
