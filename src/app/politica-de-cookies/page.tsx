import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Política de Cookies | Sintegra",
};

export default function Page() {
  return (
    <LegalPageContent title="Política de Cookies">
      <p>
        Este es un documento de marcador de posición.
      </p>
      <h2>Uso de cookies técnicas</h2>
      <p>
        Nuestras plataformas operativas utilizan cookies técnicas estrictamente necesarias para mantener la sesión segura del usuario (autenticación) y garantizar la correcta distribución de la carga de red. No utilizamos cookies de rastreo comercial en los portales operativos.
      </p>
    </LegalPageContent>
  );
}
