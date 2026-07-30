import { Metadata } from "next";
import ContactoPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Contacto | Sintegra",
  description:
    "Conversemos sobre las necesidades de tu institución. Cuéntanos qué proceso deseas mejorar.",
};

export default function Page() {
  return <ContactoPageContent />;
}
