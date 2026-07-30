import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sintegra | Plataforma Administrativa Automatizada",
  description: "Sistemas robustos de tesorería y gestión institucional para aumentar la recaudación y erradicar la opacidad.",
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

