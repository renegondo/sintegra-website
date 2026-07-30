import { Metadata } from "next";
import DesarrolloPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Desarrollo a la medida | Sintegra",
  description:
    "Diseñamos sistemas web y móviles adaptados a los flujos, usuarios, documentos e indicadores de cada institución.",
};

export default function Page() {
  return <DesarrolloPageContent />;
}
