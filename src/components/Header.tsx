"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Building2, MessageSquare, Code, Link as LinkIcon } from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0)",
        borderBottomColor: scrolled
          ? "rgba(226, 232, 240, 1)"
          : "rgba(226, 232, 240, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35 }}
      className="sticky top-0 z-[100] w-full border-b"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 h-8 md:w-44 md:h-10 transition-transform duration-200 ease-out group-hover:scale-105">
              <Image 
                src="/images/new-logo-3.png" 
                alt="Sintegra Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-electric transition-colors">Inicio</Link>
          <Link href="/empresa" className="text-sm font-medium text-slate-600 hover:text-electric transition-colors">Empresa</Link>
          
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-electric transition-colors py-2">
              Soluciones
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180 text-electric" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[380px]"
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-3 overflow-hidden">
                    <Link href="/soluciones" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3 py-1 hover:text-electric">Ver todas las soluciones</Link>
                    
                    <div className="flex flex-col gap-1">
                      <Link href="/soluciones/tesoreria-municipal" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="bg-electric/10 p-2.5 rounded-lg text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-0.5">Sintegra Tesorería</div>
                          <div className="text-xs text-slate-500">Recaudación y control municipal</div>
                        </div>
                      </Link>
                      
                      <Link href="/soluciones/bebot-ayuntamiento" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="bg-electric/10 p-2.5 rounded-lg text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-0.5">Bebot Ayuntamiento</div>
                          <div className="text-xs text-slate-500">Atención ciudadana y gestión</div>
                        </div>
                      </Link>

                      <div className="h-px bg-slate-100 my-1 mx-3" />

                      <Link href="/soluciones/desarrollo-a-la-medida" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="bg-slate-100 p-2.5 rounded-lg text-slate-500 group-hover:bg-electric/10 group-hover:text-electric transition-colors">
                          <Code className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-0.5">Desarrollo a la medida</div>
                          <div className="text-xs text-slate-500">Tecnología adaptada a procesos únicos</div>
                        </div>
                      </Link>
                      
                      <Link href="/soluciones/integraciones" className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="bg-slate-100 p-2.5 rounded-lg text-slate-500 group-hover:bg-electric/10 group-hover:text-electric transition-colors">
                          <LinkIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 mb-0.5">Integraciones</div>
                          <div className="text-xs text-slate-500">Conectividad con otras herramientas</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/implementacion" className="text-sm font-medium text-slate-600 hover:text-electric transition-colors">Implementación</Link>
          <Link href="/seguridad" className="text-sm font-medium text-slate-600 hover:text-electric transition-colors">Seguridad</Link>
          <Link href="/recursos" className="text-sm font-medium text-slate-600 hover:text-electric transition-colors">Recursos</Link>
          <Link href="/contacto" className="text-sm font-medium text-slate-600 hover:text-electric transition-colors">Contacto</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/solicitar-demo" 
            className="text-sm font-bold bg-electric text-white px-6 py-2.5 rounded-lg hover:bg-electric-hover transition-colors shadow-lg shadow-electric/20 cursor-pointer"
          >
            Solicitar demostración
          </Link>
        </div>

      </div>
    </motion.header>
  );
}
