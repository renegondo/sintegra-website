import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-44 h-10">
                <Image 
                  src="/images/new-logo-3.png" 
                  alt="Sintegra Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Sintegra desarrolla sistemas integrales para digitalizar, conectar y supervisar procesos de gobierno. Tecnología que integra. Gobierno que responde.
            </p>
          </div>

          {/* Columna Sintegra */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Sintegra</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/empresa" className="text-slate-500 hover:text-electric transition-colors">Empresa</Link></li>
              <li><Link href="/implementacion" className="text-slate-500 hover:text-electric transition-colors">Implementación</Link></li>
              <li><Link href="/seguridad" className="text-slate-500 hover:text-electric transition-colors">Seguridad</Link></li>
              <li><Link href="/contacto" className="text-slate-500 hover:text-electric transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna Soluciones */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Soluciones</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/soluciones/tesoreria-municipal" className="text-slate-500 hover:text-electric transition-colors">Sintegra Tesorería</Link></li>
              <li><Link href="/soluciones/bebot-ayuntamiento" className="text-slate-500 hover:text-electric transition-colors">Bebot Ayuntamiento</Link></li>
              <li><Link href="/soluciones/desarrollo-a-la-medida" className="text-slate-500 hover:text-electric transition-colors">Desarrollo a la medida</Link></li>
              <li><Link href="/soluciones/integraciones" className="text-slate-500 hover:text-electric transition-colors">Integraciones</Link></li>
            </ul>
          </div>

          {/* Columna Recursos */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/recursos" className="text-slate-500 hover:text-electric transition-colors">Blog</Link></li>
              <li><Link href="/casos-de-uso" className="text-slate-500 hover:text-electric transition-colors">Casos de uso</Link></li>
              <li><Link href="/recursos#faq" className="text-slate-500 hover:text-electric transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="/acceso" className="text-slate-500 hover:text-electric transition-colors">Soporte y Accesos</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Sintegra — Sistemas Integrales. Todos los derechos reservados.
          </p>
          
          {/* Columna Legal */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/aviso-de-privacidad" className="text-slate-400 hover:text-slate-600 transition-colors">Aviso de privacidad</Link>
            <Link href="/terminos" className="text-slate-400 hover:text-slate-600 transition-colors">Términos de uso</Link>
            <Link href="/politica-de-cookies" className="text-slate-400 hover:text-slate-600 transition-colors">Política de cookies</Link>
            <Link href="/accesibilidad" className="text-slate-400 hover:text-slate-600 transition-colors">Accesibilidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
