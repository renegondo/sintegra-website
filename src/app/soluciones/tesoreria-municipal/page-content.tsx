"use client";

import { useRef } from "react";
import { Link as LinkIcon, Building2, WifiOff, Smartphone, QrCode, ArrowDown, Users, CheckCircle2, AlertTriangle, Printer, Navigation2 } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { MobileStory } from "@/components/MobileStory";
import { SpotlightBackground } from "@/components/ui/spotlight-background";

export default function TesoreriaPageContent() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={container} className="min-h-screen flex flex-col relative bg-background">
      
      <main className="flex-1 relative z-10">
        
        {/* ─── 1. HERO SECTION ─── */}
        <section className="scene pt-32 pb-24 md:pt-40 md:pb-32 relative isolate overflow-hidden bg-[#f7f5ef]" data-scene="hero">
          <SpotlightBackground />
          <div className="layer depth-4 container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
            
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-bold tracking-wide text-electric mb-10 shadow-[0_0_20px_rgba(37,99,235,0.1)] uppercase">
                Control de Ingresos Municipales
              </div>
            </Reveal>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
              }}
              style={{ perspective: 800 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] text-[#10272e]"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 55, rotateX: 18 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="hero-line"
              >
                Recaudación en ventanilla y en
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 55, rotateX: 18 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="hero-line hero-accent"
              >
                campo, conectada.
              </motion.span>
            </motion.h1>
            
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-[#40555b] max-w-[54rem] leading-relaxed mb-12 font-light">
                Sintegra Tesorería digitaliza la emisión de recibos municipales mediante un dashboard administrativo, un punto de cobro web, una aplicación móvil Android y un portal ciudadano de verificación.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/solicitar-demo"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-electric px-8 text-base font-bold text-white transition-all shadow-lg shadow-electric/30 hover:bg-electric-hover"
                >
                  Solicitar demostración
                </Link>
                <Link
                  href="#funcionamiento"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-[#10272e] border border-slate-200 transition-all hover:bg-slate-50"
                >
                  Ver funcionamiento
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 2. EL PROBLEMA ─── */}
        <section className="py-24 relative bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                    Cuando el cobro está disperso, también lo está el control.
                  </h2>
                  <p className="text-xl text-slate-600 font-light mb-8">
                    Los procesos manuales y los sistemas genéricos generan puntos ciegos en la recaudación.
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  {[
                    "Recibos difíciles de verificar.",
                    "Información distribuida en hojas o sistemas aislados.",
                    "Cortes de caja tardíos.",
                    "Falta de evidencia sobre cobros realizados en campo.",
                    "Poca visibilidad sobre el rendimiento de los agentes.",
                    "Dificultad para detectar cancelaciones irregulares.",
                    "Imposibilidad de operar en lugares sin conexión."
                  ].map((issue, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{issue}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 3. LA SOLUCIÓN (Ecosistema) ─── */}
        <section id="funcionamiento" className="py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900">Un ecosistema conectado en tiempo real</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Dashboard administrativo", desc: "Permite consultar recaudación, recibos, categorías, agentes, padrones, cancelaciones y métricas.", icon: <Building2 className="w-6 h-6" /> },
                { title: "Punto de cobro web", desc: "Facilita la operación en ventanillas con acceso desde computadora.", icon: <LinkIcon className="w-6 h-6" /> },
                { title: "Aplicación móvil Android", desc: "Permite realizar cobros en campo, capturar evidencias, registrar ubicación y emitir comprobantes.", icon: <Smartphone className="w-6 h-6" /> },
                { title: "Portal ciudadano", desc: "Permite consultar el estado y los datos básicos de un recibo mediante su código QR.", icon: <QrCode className="w-6 h-6" /> },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all h-full">
                    <div className="bg-electric/10 text-electric p-4 rounded-xl h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. ROLES ─── */}
        <section className="py-32 relative bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <Reveal className="mb-20 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Herramientas diseñadas para cada rol</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Reveal delay={0.1}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-electric mb-2">Tesorero o administrador</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li>• Consulta la recaudación global</li>
                    <li>• Supervisa cobradores</li>
                    <li>• Administra conceptos y padrones</li>
                    <li>• Revisa evidencias</li>
                    <li>• Autoriza cancelaciones</li>
                    <li>• Configura permisos e indicadores</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-electric mb-2">Cobrador</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li>• Busca o registra contribuyentes</li>
                    <li>• Selecciona conceptos</li>
                    <li>• Registra cobros y captura fotos</li>
                    <li>• Registra ubicación</li>
                    <li>• Imprime tickets</li>
                    <li>• Consulta caja y sincroniza cobros</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-electric mb-2">Ciudadano</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li>• Escanea el QR del ticket</li>
                    <li>• Consulta si el registro existe</li>
                    <li>• Verifica fecha, monto y estado</li>
                    <li>• Detecta recibos cancelados</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── 5. FUNCIONES PRINCIPALES (Features list) ─── */}
        <section className="py-24 relative z-10 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Building2 />, title: "Recaudación en tiempo real", desc: "Dashboard con totales, categorías, fechas, agentes y formas de cobro." },
                { icon: <WifiOff />, title: "Cobro offline", desc: "La aplicación conserva operaciones pendientes y las sincroniza al recuperar conexión." },
                { icon: <Printer />, title: "Impresión Bluetooth", desc: "Conexión con impresoras térmicas portátiles compatibles." },
                { icon: <Navigation2 />, title: "Evidencias de campo", desc: "Fotografías y coordenadas asociadas al movimiento de cobro." },
                { icon: <Building2 />, title: "Catálogo configurable", desc: "Conceptos, importes sugeridos y campos requeridos configurables." },
                { icon: <Users />, title: "Permisos por cobrador", desc: "Restricción de conceptos disponibles para cada agente en terreno." },
                { icon: <AlertTriangle />, title: "Cancelaciones trazables", desc: "Proceso autorizado conservando responsable, fecha y motivo." },
                { icon: <QrCode />, title: "Verificación mediante QR", desc: "Consulta segura de un registro público limitado y su estado." },
              ].map((f, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full hover:shadow-md transition-shadow">
                    <div className="text-electric mb-4 bg-electric/10 w-12 h-12 rounded-xl flex items-center justify-center">{f.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. MOBILE STORY (Animación interactiva del celular) ─── */}
        <MobileStory />

        {/* ─── 6.5. ACCESOS DE PRUEBA ─── */}
        <section className="py-24 relative z-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-orange-600 mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] uppercase">
                Entorno de Demostración
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Explora el sistema de Tesorería</h2>
              <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                Accede a nuestro entorno de pruebas para conocer de primera mano la interfaz administrativa y el punto de cobro. Los datos se reinician periódicamente.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Reveal delay={0.1}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-electric" />
                    Panel Administrativo
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">URL de Acceso</span>
                      <a href="https://demo.sistemasintegrados.online" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline font-medium">demo.sistemasintegrados.online</a>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Usuario (Admin)</span>
                      <code className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm text-slate-700 block w-fit font-mono">admin@sintegra.com</code>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Contraseña</span>
                      <code className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm text-slate-700 block w-fit font-mono">SintegraDemo123!</code>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-electric" />
                    Punto de Cobro
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">URL de Acceso</span>
                      <a href="https://demo.sistemasintegrados.online" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline font-medium">demo.sistemasintegrados.online</a>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Usuario (Cobrador)</span>
                      <code className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm text-slate-700 block w-fit font-mono">cobrador@sintegra.com</code>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Contraseña</span>
                      <code className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm text-slate-700 block w-fit font-mono">DemoCobrador123!</code>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <Reveal delay={0.3}>
              <div className="mt-12 bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 text-left">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Aviso:</strong> Por favor, no introduzcas datos personales reales ni información confidencial. Es un ambiente de prueba público regido por nuestros <Link href="/terminos" className="underline font-bold">Términos de Uso</Link>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 7. FLUJO VISUAL ─── */}
        <section className="py-24 relative z-10 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Reveal>
              <h2 className="text-3xl font-bold mb-16 text-slate-900">Flujo de operación</h2>
            </Reveal>
            
            <div className="space-y-4">
              {[
                "Administrador configura conceptos y permisos",
                "Cobrador selecciona contribuyente y concepto",
                "Captura monto, evidencia y ubicación",
                "Sistema genera recibo",
                "Aplicación imprime ticket con QR",
                "Ciudadano consulta el portal de verificación",
                "Tesorería visualiza la operación en su dashboard"
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center">
                    <div className="px-6 py-3 bg-slate-900 text-white rounded-lg shadow-md font-medium text-lg w-full max-w-lg">
                      {step}
                    </div>
                    {i !== 6 && <ArrowDown className="text-slate-300 w-6 h-6 my-2" />}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. PREGUNTAS FRECUENTES ─── */}
        <section className="py-24 relative bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <Reveal>
              <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Preguntas Frecuentes</h2>
            </Reveal>
            
            <div className="space-y-6">
              {[
                { q: "¿Se puede adaptar a los conceptos de cada municipio?", a: "Sí. Los catálogos, campos requeridos, importes sugeridos y permisos se configuran según la operación de cada institución." },
                { q: "¿Funciona sin internet?", a: "La aplicación móvil está diseñada para mantener operaciones pendientes y sincronizarlas cuando recupera conexión." },
                { q: "¿El cobrador puede consultar toda la recaudación?", a: "No. Su vista debe limitarse a su propia operación. La información global corresponde a perfiles administrativos autorizados." },
                { q: "¿Se pueden borrar recibos?", a: "La política recomendada es no eliminar movimientos. Las correcciones deben realizarse mediante cancelaciones trazables." },
                { q: "¿El código QR contiene información personal?", a: "El QR debe dirigir a una consulta segura y mostrar únicamente la información necesaria para verificar el comprobante." }
              ].map((faq, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. CTA FINAL ─── */}
        <section className="py-24 relative z-20 bg-background">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="max-w-4xl mx-auto bg-electric p-1 md:p-[2px] rounded-[2.5rem] shadow-[0_20px_80px_rgba(37,99,235,0.3)] relative">
                <div className="relative bg-electric text-white p-10 md:p-16 rounded-[2.5rem] text-center overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Moderniza la recaudación sin perder el control.</h2>
                  <p className="text-white/90 mb-10 text-xl leading-relaxed max-w-2xl mx-auto font-light">
                    Solicita una demostración de Sintegra Tesorería y conoce cómo puede configurarse para tu municipio.
                  </p>
                  <Link
                    href="/solicitar-demo"
                    className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-electric transition-transform hover:scale-105 shadow-xl"
                  >
                    Solicitar demostración
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </div>
  );
}
