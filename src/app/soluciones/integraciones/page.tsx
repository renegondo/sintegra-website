import { Metadata } from "next";
import IntegracionesPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Integraciones | Sintegra",
  description:
    "Conectamos herramientas para evitar información aislada. Integraciones con mensajería, correo, almacenamiento, impresoras y pagos.",
};

export default function Page() {
  return <IntegracionesPageContent />;
}
