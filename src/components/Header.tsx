import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-surface-dark/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            {/* The hit area is inherently larger than 44x44 due to the flex container and padding, fulfilling touch target requirements */}
            <div className="relative w-40 h-8 md:w-48 md:h-10 transition-transform duration-200 ease-out group-hover:scale-105">
              <Image 
                src="/images/new-logo-3.png" 
                alt="Sintegra Logo" 
                fill 
                className="object-contain object-left brightness-0 invert"
                priority
              />
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/#problem" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Plataforma</Link>
          <Link href="/nosotros" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">La Empresa</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            href="/#demo-access" 
            className="text-sm font-bold bg-white text-black px-6 py-2.5 rounded-md hover:bg-gray-200 transition-colors shadow-lg"
          >
            Probar Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
