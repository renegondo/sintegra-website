import { Metadata } from "next";
import HomePageContent from "./page-content";

export const metadata: Metadata = {
  title: "Sintegra | Sistemas integrales para gobiernos municipales",
  description:
    "Plataformas web y móviles para recaudación, atención ciudadana, coordinación de áreas, trazabilidad y supervisión de gobiernos municipales.",
  openGraph: {
    title: "Sintegra | Sistemas integrales para gobiernos municipales",
    description:
      "Plataformas web y móviles para recaudación, atención ciudadana, coordinación de áreas, trazabilidad y supervisión de gobiernos municipales.",
    url: "https://sistemasintegrados.online",
    siteName: "Sintegra",
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <HomePageContent />;
}
