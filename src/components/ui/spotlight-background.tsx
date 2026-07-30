"use client";

import { useEffect, useRef } from "react";

type SpotlightBackgroundProps = {
  className?: string;
};

export function SpotlightBackground({
  className = "",
}: SpotlightBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const coarsePointer = window.matchMedia(
      "(pointer: coarse)",
    ).matches;

    /*
     * En móviles o con movimiento reducido dejamos
     * los gradientes en su animación ambiental.
     */
    if (reducedMotion || coarsePointer) {
      return;
    }

    let targetX = container.clientWidth * 0.7;
    let targetY = container.clientHeight * 0.25;

    let currentX = targetX;
    let currentY = targetY;

    let animationFrame = 0;

    const updatePointer = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();

      const pointerInsideHero =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!pointerInsideHero) {
        return;
      }

      targetX = event.clientX - bounds.left;
      targetY = event.clientY - bounds.top;
    };

    const animateSpotlight = () => {
      /*
       * Interpolación suave para evitar que la luz
       * se pegue bruscamente al cursor.
       */
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;

      container.style.setProperty(
        "--spotlight-x",
        `${currentX}px`,
      );

      container.style.setProperty(
        "--spotlight-y",
        `${currentY}px`,
      );

      animationFrame = window.requestAnimationFrame(
        animateSpotlight,
      );
    };

    window.addEventListener("pointermove", updatePointer, {
      passive: true,
    });

    animationFrame = window.requestAnimationFrame(
      animateSpotlight,
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        updatePointer,
      );

      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Fondo crema principal */}
      <div className="absolute inset-0 bg-[#f7f5ef]" />

      {/* Luz principal que sigue al cursor */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(
              650px circle at var(--spotlight-x, 70%) var(--spotlight-y, 24%),
              rgba(212, 180, 105, 0.38),
              rgba(212, 180, 105, 0.14) 32%,
              transparent 68%
            )
          `,
        }}
      />

      {/* Luz vino secundaria */}
      <div
        className="spotlight-wine absolute -left-[18%] top-[5%] h-[560px] w-[560px] rounded-full opacity-70 blur-[10px]"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(124, 34, 67, 0.20) 0%,
              rgba(124, 34, 67, 0.08) 42%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Luz azul petróleo */}
      <div
        className="spotlight-blue absolute -right-[15%] top-[15%] h-[600px] w-[600px] rounded-full opacity-70 blur-[12px]"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(66, 113, 126, 0.20) 0%,
              rgba(66, 113, 126, 0.07) 45%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Resplandor superior */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent,
              rgba(198, 159, 74, 0.65),
              transparent
            )
          `,
        }}
      />

      {/* Velo para mantener el fondo limpio */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-[#f7f5ef]/80" />

      {/* Viñeta lateral muy tenue */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(247, 245, 239, 0.82) 0%,
              rgba(247, 245, 239, 0.15) 46%,
              rgba(247, 245, 239, 0.28) 100%
            )
          `,
        }}
      />
    </div>
  );
}
