"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function IntroLoader() {
  const container = useRef<HTMLDivElement>(null);
  const wordmark = useRef<HTMLDivElement>(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShouldShow(true);
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  }, []);

  useGSAP(() => {
    if (!shouldShow || !container.current || !wordmark.current) return;

    // Bloquear scroll durante la intro
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        document.body.style.overflow = '';
        if (container.current) {
          container.current.style.display = 'none';
        }
      }
    });

    tl.from(wordmark.current, {
      opacity: 0,
      yPercent: 40,
      duration: 1,
      ease: "power2.out"
    })
    .to(wordmark.current, {
      // Calculamos la esquina superior izquierda del header (aproximado)
      x: () => {
         const padding = 16;
         // En el header, el logo está pegado a la izquierda del container
         const leftEdge = padding;
         // Movimiento desde el centro hacia la izquierda, compensando el tamaño
         return -(window.innerWidth / 2) + leftEdge + 60; 
      },
      y: () => {
         // Movimiento hacia arriba, al centro del header (altura 80px)
         return -(window.innerHeight / 2) + 40;
      },
      scale: 0.15, // Reducir a un tamaño que encaje en el header
      duration: 1.2,
    }, "+=0.2")
    .to(container.current, {
      opacity: 0,
      duration: 0.5,
    }, "-=0.3");
    
  }, { scope: container, dependencies: [shouldShow] });

  // Evitar hydration mismatch
  if (!isMounted || !shouldShow) return null;

  return (
    <div 
      ref={container} 
      className="fixed inset-0 z-[110] flex items-center justify-center bg-background"
    >
      <div 
        ref={wordmark}
        className="flex flex-col items-center justify-center text-center origin-center"
      >
        <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-none mb-2 md:mb-4">
          SINTEGRA
        </h1>
        <span className="text-xl md:text-3xl font-light text-slate-500 tracking-wide">
          Sistemas Integrales
        </span>
      </div>
    </div>
  );
}
