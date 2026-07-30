import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Política de Cookies | Sintegra",
};

export default function PoliticaCookiesPage() {
  return (
    <LegalPageContent title="Política de Cookies">
      <p className="text-sm text-slate-500 mb-8"><strong>Última actualización: 30 de julio de 2026</strong></p>

      <h2>1. Objeto</h2>
      <p>
        Esta política explica cómo <code>sistemasintegrados.online</code> utiliza cookies, almacenamiento local, píxeles, etiquetas y tecnologías similares. Debe leerse junto con el Aviso de privacidad.
      </p>

      <h2>2. ¿Qué son las cookies?</h2>
      <p>Las cookies son pequeños archivos que un sitio puede guardar en el navegador o dispositivo. Permiten recordar información relacionada con:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Una sesión.</li>
        <li>Preferencias.</li>
        <li>Seguridad.</li>
        <li>Funcionamiento.</li>
        <li>Medición del sitio.</li>
        <li>Consentimiento.</li>
      </ul>
      <p>Tecnologías como <code>localStorage</code>, <code>sessionStorage</code> o identificadores semejantes pueden cumplir funciones similares.</p>

      <h2>3. Tipos de cookies</h2>
      
      <h3>Cookies estrictamente necesarias</h3>
      <p>Permiten el funcionamiento básico del sitio y pueden utilizarse para:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Mantener la seguridad.</li>
        <li>Procesar formularios.</li>
        <li>Prevenir abuso.</li>
        <li>Recordar la elección de privacidad.</li>
        <li>Distribuir correctamente el tráfico.</li>
        <li>Mantener una sesión solicitada.</li>
      </ul>
      <p>
        Estas tecnologías no deben utilizarse con finalidades publicitarias. Cuando resulten indispensables, no pueden desactivarse desde el panel sin afectar el funcionamiento del sitio, aunque pueden bloquearse desde el navegador.
      </p>

      <h3>Cookies de preferencias</h3>
      <p>Permiten recordar decisiones como:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Idioma.</li>
        <li>Apariencia.</li>
        <li>Preferencia de movimiento reducido.</li>
        <li>Estado de determinados elementos.</li>
        <li>Configuración visual.</li>
      </ul>
      <p>Podrán activarse con el consentimiento correspondiente.</p>

      <h3>Cookies de análisis</h3>
      <p>Ayudan a conocer de manera agregada:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Número de visitas.</li>
        <li>Páginas consultadas.</li>
        <li>Dispositivos.</li>
        <li>Rendimiento.</li>
        <li>Errores.</li>
        <li>Interacciones generales.</li>
      </ul>
      <p>Las cookies analíticas no esenciales deberán permanecer desactivadas hasta que la persona usuaria las acepte.</p>

      <h3>Cookies de publicidad o seguimiento</h3>
      <p>Podrían utilizarse para medir campañas o personalizar publicidad.</p>
      <p>
        Sintegra no deberá instalar cookies publicitarias sin consentimiento previo y una explicación clara dentro del centro de preferencias. Cuando no existan herramientas publicitarias activas, esta categoría permanecerá deshabilitada.
      </p>

      <h2>4. Cookies propias y de terceros</h2>
      <p>Las cookies pueden ser:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Propias:</strong> administradas directamente por Sintegra o por la infraestructura utilizada para operar el sitio.</li>
        <li><strong>De terceros:</strong> administradas por proveedores externos, como herramientas de analítica, video, mapas, mensajería o soporte.</li>
      </ul>
      <p>La activación de servicios externos puede implicar que el tercero reciba información técnica del dispositivo.</p>

      <h2>5. Centro de preferencias</h2>
      <p>Al ingresar al sitio por primera vez, se presentará un panel que permita:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Aceptar todas las categorías.</li>
        <li>Rechazar las cookies no esenciales.</li>
        <li>Configurar preferencias.</li>
        <li>Consultar esta política.</li>
      </ul>
      <p>
        Rechazar cookies no esenciales deberá ser tan accesible como aceptarlas. La decisión será almacenada durante un periodo razonable y podrá modificarse posteriormente mediante el enlace: <strong>“Configurar cookies”</strong> ubicado en el footer del sitio.
      </p>

      <h2>6. Relación de cookies</h2>
      <p>La relación exacta de cookies activas debe mostrarse dentro del centro de preferencias e indicar:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Nombre.</li>
        <li>Proveedor.</li>
        <li>Finalidad.</li>
        <li>Categoría.</li>
        <li>Duración.</li>
        <li>Si es propia o de un tercero.</li>
      </ul>
      <p>La siguiente información deberá actualizarse después de cada cambio técnico o incorporación de proveedores:</p>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse border border-slate-200">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-slate-900">Categoría</th>
              <th className="border border-slate-200 px-4 py-2 text-slate-900">Finalidad</th>
              <th className="border border-slate-200 px-4 py-2 text-slate-900">Activación</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Necesarias</td>
              <td className="border border-slate-200 px-4 py-2">Seguridad, formularios y preferencias de consentimiento</td>
              <td className="border border-slate-200 px-4 py-2">Automática cuando resulten indispensables</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Preferencias</td>
              <td className="border border-slate-200 px-4 py-2">Recordar decisiones de interfaz</td>
              <td className="border border-slate-200 px-4 py-2">Con consentimiento, cuando corresponda</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Analítica</td>
              <td className="border border-slate-200 px-4 py-2">Medición agregada de uso y rendimiento</td>
              <td className="border border-slate-200 px-4 py-2">Solo después de aceptar</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Publicidad</td>
              <td className="border border-slate-200 px-4 py-2">Medición o personalización comercial</td>
              <td className="border border-slate-200 px-4 py-2">Solo después de aceptar</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p>
        Los entornos de Tesorería, Bebot y otras plataformas pueden utilizar cookies propias de autenticación y seguridad. Dichas tecnologías deberán describirse en los avisos y políticas aplicables a cada plataforma.
      </p>

      <h2>7. Cómo retirar el consentimiento</h2>
      <p>La persona usuaria puede modificar o retirar su consentimiento mediante:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>El enlace “Configurar cookies”.</li>
        <li>La configuración del navegador.</li>
        <li>La eliminación del almacenamiento del sitio.</li>
        <li>El bloqueo de cookies de terceros.</li>
      </ul>
      <p>La retirada no afecta la licitud del tratamiento realizado antes de retirar el consentimiento.</p>

      <h2>8. Consecuencias de bloquear cookies</h2>
      <p>El bloqueo de cookies necesarias puede impedir:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Enviar formularios.</li>
        <li>Mantener una sesión.</li>
        <li>Recordar preferencias.</li>
        <li>Acceder a demostraciones.</li>
        <li>Utilizar determinadas funciones.</li>
      </ul>
      <p>El rechazo de analítica o publicidad no debe impedir el acceso al contenido público esencial.</p>

      <h2>9. Señales de privacidad del navegador</h2>
      <p>
        Cuando técnicamente resulte posible, Sintegra podrá considerar señales como <code>Do Not Track</code> o <code>Global Privacy Control</code>. La interpretación de estas señales puede variar según el navegador y los estándares disponibles.
      </p>

      <h2>10. Actualizaciones</h2>
      <p>Esta política podrá modificarse cuando:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Se incorporen nuevos proveedores.</li>
        <li>Cambien las cookies activas.</li>
        <li>Se modifique el sitio.</li>
        <li>Cambie la legislación.</li>
        <li>Cambie la duración o finalidad de una tecnología.</li>
      </ul>
      <p>La fecha de la última actualización aparecerá en la parte superior.</p>

      <h2>11. Contacto</h2>
      <p>Para preguntas sobre cookies y privacidad:</p>
      <p><strong>Correo:</strong> <a href="mailto:PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE</a></p>
    </LegalPageContent>
  );
}
