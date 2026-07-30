import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Sintegra",
};

export default function Page() {
  return (
    <LegalPageContent title="Aviso de Privacidad">
      <p>
        Este es un documento de marcador de posición. Los textos legales definitivos deben ser redactados y revisados por un especialista en cumplimiento normativo antes del lanzamiento comercial.
      </p>
      <h2>Tratamiento de datos corporativos</h2>
      <p>
        Sintegra — Sistemas Integrales recaba información a través de los formularios de contacto y solicitud de demostración con la finalidad exclusiva de atender su petición comercial.
      </p>
      <h2>Tratamiento de datos ciudadanos</h2>
      <p>
        Sintegra actúa como encargado del tratamiento tecnológico. Cada Ayuntamiento o Institución Pública actúa como responsable de los datos personales de la ciudadanía y debe emitir y publicar su propio Aviso de Privacidad en apego a la legislación mexicana aplicable.
      </p>
    </LegalPageContent>
  );
}
