import { Metadata } from "next";
import TesoreriaPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Sistema de Tesorería Municipal | Sintegra",
  description:
    "Sistema web y móvil para cobro municipal, operación offline, impresión térmica, control de agentes, evidencias y verificación de recibos mediante QR.",
  openGraph: {
    title: "Sistema de Tesorería Municipal | Sintegra",
    description:
      "Sistema web y móvil para cobro municipal, operación offline, impresión térmica, control de agentes, evidencias y verificación de recibos mediante QR.",
    url: "https://sistemasintegrados.online/soluciones/tesoreria-municipal",
    siteName: "Sintegra",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <TesoreriaPageContent />;
}
