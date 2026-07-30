import { Metadata } from "next";
import SolicitarDemoPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Solicitar demostración | Sintegra",
  description:
    "Conoce la plataforma con un escenario adaptado a tu operación. Solicita una demo de nuestros sistemas para gobierno.",
};

export default function Page() {
  return <SolicitarDemoPageContent />;
}
