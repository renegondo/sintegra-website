import { Metadata } from "next";
import AccesoPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Acceso a plataformas | Sintegra",
  description:
    "Accede a los sistemas operativos de Sintegra Tesorería, Bebot Ayuntamiento, Portales de demostración y Verificación ciudadana.",
};

export default function Page() {
  return <AccesoPageContent />;
}
