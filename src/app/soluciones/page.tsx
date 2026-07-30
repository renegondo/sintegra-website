import { Metadata } from "next";
import SolucionesPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Soluciones | Sintegra Sistemas Integrales",
  description:
    "Un ecosistema de soluciones para la gestión pública. Plataformas web y móviles para recaudación y atención ciudadana.",
  openGraph: {
    title: "Soluciones | Sintegra Sistemas Integrales",
    description:
      "Un ecosistema de soluciones para la gestión pública. Plataformas web y móviles para recaudación y atención ciudadana.",
    url: "https://sistemasintegrados.online/soluciones",
    siteName: "Sintegra",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <SolucionesPageContent />;
}
