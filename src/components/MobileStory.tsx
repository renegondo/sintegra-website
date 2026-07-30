// components/MobileStory.tsx
"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

const steps = [
  {
    title: "Recibos verificables",
    description:
      "Emite comprobantes digitales con folio, código QR y sello de autenticidad.",
    image: "/images/app-screen-1.jpg",
  },
  {
    title: "Cobranza desde cualquier lugar",
    description:
      "Registra operaciones de campo incluso cuando la conexión no está disponible.",
    image: "/images/app-screen-2.jpg",
  },
  {
    title: "Control del cobrador",
    description:
      "Consulta ingresos, pendientes y cortes desde una sola pantalla.",
    image: "/images/app-screen-3.jpg",
  },
  {
    title: "Búsqueda inmediata",
    description:
      "Localiza conceptos, contribuyentes y adeudos sin procesos manuales.",
    image: "/images/app-screen-4.jpg",
  },
  {
    title: "Captura estructurada",
    description:
      "Obtén todos los datos necesarios para cada trámite y concepto.",
    image: "/images/app-screen-5.jpg",
  },
];

export function MobileStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      steps.length - 1,
      Math.floor(value * steps.length)
    );
    setActiveStep(index);
  });

  return (
    <section ref={sectionRef} className="mobile-story">
      <div className="mobile-story-sticky">
        {/* Left column: copy */}
        <div className="mobile-copy">
          <span className="section-label">ECOSISTEMA MÓVIL</span>

          <h2>
            Cobranza en terreno.
            <br />
            <span>Sin excusas.</span>
          </h2>

          <div className="story-steps">
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <motion.div
                  key={step.title}
                  className={`story-step ${isActive ? "is-active" : ""}`}
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    x: isActive ? 0 : 10,
                  }}
                >
                  <span className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right column: phone mockup */}
        <div className="phone-area">
          <motion.div
            className="story-progress"
            style={{ scaleY: progress }}
          />

          <motion.div
            className="phone-glow"
            animate={{
              scale: [1, 1.07, 1],
              opacity: [0.45, 0.7, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <div className="phone-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={steps[activeStep].image}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                initial={{
                  opacity: 0,
                  y: 34,
                  scale: 0.96,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  scale: 1.02,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.48,
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
