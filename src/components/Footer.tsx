import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="relative w-40 h-10">
              <Image 
                src="/images/new-logo-3.png" 
                alt="Sintegra Logo" 
                fill 
                className="object-contain object-left md:object-center brightness-0 invert" 
              />
            </div>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">Nuestra Empresa</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Seguridad</Link>
            <Link href="mailto:contacto@sintegra.com" className="text-gray-400 hover:text-white transition-colors">Soporte Corporativo</Link>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} Sintegra Systems. Tecnología que transforma.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Privacidad</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
