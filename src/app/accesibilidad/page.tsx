import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Accesibilidad | Sintegra",
};

export default function Page() {
  return (
    <LegalPageContent title="Declaración de Accesibilidad">
      <p>
        En Sintegra — Sistemas Integrales nos esforzamos por garantizar que nuestras herramientas tecnológicas sean utilizables por la mayor cantidad de personas posible, independientemente de sus capacidades tecnológicas o físicas.
      </p>
      <h2>Estándares</h2>
      <p>
        Trabajamos orientados hacia las pautas de accesibilidad WCAG 2.2. Nuestras plataformas incluyen soporte técnico para navegación por teclado, alto contraste, y componentes con roles y etiquetas ARIA adecuados para lectores de pantalla.
      </p>
    </LegalPageContent>
  );
}
