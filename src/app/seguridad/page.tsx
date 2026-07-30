import { Metadata } from "next";
import SeguridadPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Seguridad | Sintegra",
  description:
    "Control de acceso, trazabilidad, protección de información, verificación pública y desarrollo seguro en nuestras plataformas gubernamentales.",
};

export default function Page() {
  return <SeguridadPageContent />;
}
