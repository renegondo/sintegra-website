import { Metadata } from "next";
import EmpresaPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Empresa | Sintegra Sistemas Integrales",
  description:
    "Conoce a Sintegra, empresa especializada en el desarrollo e implementación de sistemas tecnológicos para instituciones públicas.",
  openGraph: {
    title: "Empresa | Sintegra Sistemas Integrales",
    description:
      "Conoce a Sintegra, empresa especializada en el desarrollo e implementación de sistemas tecnológicos para instituciones públicas.",
    url: "https://sistemasintegrados.online/empresa",
    siteName: "Sintegra",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <EmpresaPageContent />;
}
