import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SchemaOrg } from "@/components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sistemasintegrados.online"),
  title: {
    default: "Sintegra | Sistemas Integrales para Gobierno",
    template: "%s | Sintegra",
  },
  description: "Sintegra desarrolla plataformas web y móviles que ayudan a las instituciones públicas a mejorar su recaudación, coordinar equipos, atender reportes ciudadanos y supervisar operaciones en tiempo real.",
  keywords: ["gobierno digital", "software para gobierno", "recaudación municipal", "tesorería municipal", "sistemas integrales", "transformación digital pública"],
  authors: [{ name: "Sintegra" }],
  creator: "Sintegra",
  publisher: "Sintegra",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://sistemasintegrados.online",
    siteName: "Sintegra",
    title: "Sintegra | Tecnología que integra. Gobierno que responde.",
    description: "Sistemas robustos de tesorería y gestión institucional para aumentar la recaudación y digitalizar procesos gubernamentales.",
    images: [
      {
        url: "/images/ecosystem-hero.png",
        width: 1200,
        height: 630,
        alt: "Sintegra Ecosystem Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sintegra | Tecnología para Gobierno",
    description: "Plataformas web y móviles para conectar la recaudación, la atención ciudadana y la supervisión ejecutiva.",
    images: ["/images/ecosystem-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SchemaOrg />
        <MotionProvider>
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

