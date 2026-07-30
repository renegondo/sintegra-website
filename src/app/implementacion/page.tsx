import { Metadata } from "next";
import ImplementacionPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Implementación y Soporte | Sintegra",
  description:
    "Tecnología acompañada de una implementación ordenada. Fases de diagnóstico, configuración, preparación de datos, piloto, capacitación y soporte.",
};

export default function Page() {
  return <ImplementacionPageContent />;
}
