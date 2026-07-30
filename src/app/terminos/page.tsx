import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Términos de uso | Sintegra",
};

export default function Page() {
  return (
    <LegalPageContent title="Términos de Uso">
      <p>
        Este es un documento de marcador de posición. Los términos legales definitivos deben ser redactados y revisados por un especialista en cumplimiento normativo antes del lanzamiento comercial.
      </p>
      <h2>Condiciones generales</h2>
      <p>
        El acceso y uso de las plataformas operativas de Sintegra está restringido al personal autorizado de las instituciones públicas contratantes, bajo las condiciones estipuladas en sus respectivos contratos de licenciamiento y prestación de servicios.
      </p>
    </LegalPageContent>
  );
}
