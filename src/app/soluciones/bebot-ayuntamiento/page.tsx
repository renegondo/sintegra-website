import { Metadata } from "next";
import BebotPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Sistema de Atención Ciudadana y Gestión Municipal | Bebot",
  description:
    "Centraliza WhatsApp, reportes ciudadanos, tickets, proyectos, tareas, oficios internos, evidencias y monitoreo ejecutivo.",
  openGraph: {
    title: "Sistema de Atención Ciudadana y Gestión Municipal | Bebot",
    description:
      "Centraliza WhatsApp, reportes ciudadanos, tickets, proyectos, tareas, oficios internos, evidencias y monitoreo ejecutivo.",
    url: "https://sistemasintegrados.online/soluciones/bebot-ayuntamiento",
    siteName: "Sintegra",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <BebotPageContent />;
}
