import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Declaración de Accesibilidad | Sintegra",
};

export default function AccesibilidadPage() {
  return (
    <LegalPageContent title="Declaración de Accesibilidad">
      <p className="text-sm text-slate-500 mb-8"><strong>Última actualización: 30 de julio de 2026</strong></p>

      <h2>1. Compromiso</h2>
      <p>Sintegra busca que <code>sistemasintegrados.online</code> pueda ser utilizado por el mayor número posible de personas, independientemente de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Sus capacidades.</li>
        <li>El dispositivo utilizado.</li>
        <li>La tecnología de apoyo.</li>
        <li>La velocidad de conexión.</li>
        <li>La forma de navegación.</li>
      </ul>
      <p>La accesibilidad se considera una parte continua del diseño, desarrollo, contenido y mantenimiento del sitio.</p>

      <h2>2. Objetivo de conformidad</h2>
      <p>El objetivo técnico del sitio es avanzar hacia el cumplimiento de las <strong>Pautas de Accesibilidad para el Contenido Web WCAG 2.2, nivel AA</strong>.</p>
      <p>
        Esta declaración representa un compromiso y un objetivo de mejora. No deberá interpretarse como una certificación independiente mientras no se realice una auditoría integral.
      </p>

      <h2>3. Medidas implementadas o previstas</h2>
      <p>Sintegra trabajará para incorporar:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Estructura semántica de encabezados.</li>
        <li>Navegación mediante teclado.</li>
        <li>Enlace para saltar al contenido.</li>
        <li>Indicadores visibles de enfoque.</li>
        <li>Etiquetas comprensibles en formularios.</li>
        <li>Mensajes de error claros.</li>
        <li>Alternativas textuales para imágenes.</li>
        <li>Contraste suficiente.</li>
        <li>Tamaños de texto adaptables.</li>
        <li>Diseño responsivo.</li>
        <li>Compatibilidad con lectores de pantalla.</li>
        <li>Contenido comprensible sin depender del color.</li>
        <li>Botones y enlaces con nombres descriptivos.</li>
        <li>Áreas de interacción de tamaño adecuado.</li>
        <li>Respeto por la preferencia de movimiento reducido.</li>
        <li>Subtítulos o transcripciones para contenido audiovisual relevante.</li>
        <li>Evitar destellos que puedan provocar molestias.</li>
        <li>Avisos comprensibles para cambios importantes de contexto.</li>
      </ul>

      <h2>4. Animaciones y movimiento</h2>
      <p>
        El sitio puede utilizar animaciones mediante CSS, GSAP u otras tecnologías para presentar la marca y explicar los sistemas. Estas animaciones deberán:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Respetar <code>prefers-reduced-motion</code>.</li>
        <li>Evitar destellos intensos.</li>
        <li>No impedir la navegación.</li>
        <li>No ocultar información indispensable.</li>
        <li>Permitir que el contenido continúe siendo comprensible sin animación.</li>
        <li>Evitar desplazamientos inesperados.</li>
        <li>Mantener controles accesibles mediante teclado.</li>
      </ul>
      <p>Cuando una animación sea decorativa, deberá ocultarse de las tecnologías de asistencia.</p>

      <h2>5. Fondos visuales</h2>
      <p>Elementos decorativos como Retro Grid, Spotlight, gradientes y luces:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>No deberán contener información esencial.</li>
        <li>No deberán reducir el contraste del texto.</li>
        <li>Deberán ignorarse por lectores de pantalla.</li>
        <li>Deberán reducir o detener movimiento cuando el dispositivo lo solicite.</li>
        <li>No deberán bloquear botones ni campos.</li>
      </ul>

      <h2>6. Formularios</h2>
      <p>Los formularios deberán incluir:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Etiqueta visible para cada campo.</li>
        <li>Instrucciones claras.</li>
        <li>Identificación de campos obligatorios.</li>
        <li>Mensajes de error asociados al campo correspondiente.</li>
        <li>Navegación por teclado.</li>
        <li>Confirmación después del envío.</li>
        <li>Tiempo suficiente para completar la información.</li>
        <li>Alternativas accesibles cuando se utilicen mecanismos contra abuso.</li>
      </ul>
      <p>No deberá utilizarse únicamente el color rojo para señalar errores.</p>

      <h2>7. Compatibilidad</h2>
      <p>El sitio se diseñará para funcionar con versiones recientes de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Google Chrome.</li>
        <li>Microsoft Edge.</li>
        <li>Mozilla Firefox.</li>
        <li>Safari.</li>
        <li>Navegadores móviles compatibles.</li>
      </ul>
      <p>
        También se buscará compatibilidad con tecnologías de asistencia comunes. La experiencia puede variar según el navegador, sistema operativo, configuración o tecnología de apoyo.
      </p>

      <h2>8. Contenido de terceros</h2>
      <p>Algunos contenidos externos pueden estar fuera del control directo de Sintegra, por ejemplo:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Mapas.</li>
        <li>Reproductores de video.</li>
        <li>Widgets.</li>
        <li>Documentos incrustados.</li>
        <li>Plataformas de mensajería.</li>
        <li>Entornos de demostración.</li>
        <li>Servicios de proveedores.</li>
      </ul>
      <p>Sintegra procurará seleccionar alternativas accesibles y proporcionar información equivalente cuando sea razonablemente posible.</p>

      <h2>9. Documentos descargables</h2>
      <p>Los PDF, manuales y materiales descargables deberán prepararse progresivamente con:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Texto seleccionable.</li>
        <li>Etiquetas.</li>
        <li>Orden de lectura.</li>
        <li>Encabezados.</li>
        <li>Descripciones de imágenes.</li>
        <li>Contraste adecuado.</li>
        <li>Títulos de documento.</li>
      </ul>
      <p>Cuando un documento no sea accesible, podrá solicitarse una versión alternativa.</p>

      <h2>10. Limitaciones conocidas</h2>
      <p>Mientras continúan las mejoras, pueden existir limitaciones en:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Animaciones complejas.</li>
        <li>Componentes de terceros.</li>
        <li>Documentos históricos.</li>
        <li>Capturas de sistemas.</li>
        <li>Videos sin descripción detallada.</li>
        <li>Determinadas vistas de demostración.</li>
        <li>Diagramas técnicos.</li>
      </ul>
      <p>Estas limitaciones no deben impedir el acceso a la información esencial. Sintegra trabajará para proporcionar alternativas razonables.</p>

      <h2>11. Reportar un problema</h2>
      <p>Cuando encuentre una barrera de accesibilidad, puede escribir a: <a href="mailto:ACCESIBILIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">ACCESIBILIDAD@SISTEMASINTEGRADOS.ONLINE</a>. Incluya, cuando sea posible:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Página o sección.</li>
        <li>Descripción del problema.</li>
        <li>Dispositivo.</li>
        <li>Navegador.</li>
        <li>Tecnología de asistencia utilizada.</li>
        <li>Formato alternativo requerido.</li>
        <li>Medio para recibir respuesta.</li>
      </ul>
      <p>No es necesario informar una discapacidad para solicitar asistencia.</p>

      <h2>12. Atención de solicitudes</h2>
      <p>Sintegra analizará los reportes de accesibilidad y buscará:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Confirmar la recepción.</li>
        <li>Reproducir el problema.</li>
        <li>Proporcionar una alternativa temporal.</li>
        <li>Corregir la barrera cuando sea técnicamente viable.</li>
        <li>Incorporar el hallazgo en futuras revisiones.</li>
      </ul>

      <h2>13. Evaluación continua</h2>
      <p>La accesibilidad deberá evaluarse mediante una combinación de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Herramientas automáticas.</li>
        <li>Revisión manual.</li>
        <li>Navegación mediante teclado.</li>
        <li>Pruebas de ampliación.</li>
        <li>Pruebas con lectores de pantalla.</li>
        <li>Revisión de contraste.</li>
        <li>Pruebas con movimiento reducido.</li>
        <li>Comentarios de personas usuarias.</li>
      </ul>
      <p>Las herramientas automáticas por sí solas no garantizan la accesibilidad completa.</p>

      <h2>14. Fecha de revisión</h2>
      <p>Esta declaración deberá revisarse:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Después de cambios importantes de diseño.</li>
        <li>Al incorporar nuevas plataformas.</li>
        <li>Al modificar la navegación.</li>
        <li>Después de auditorías.</li>
        <li>Al recibir reportes relevantes.</li>
        <li>Por lo menos una vez al año.</li>
      </ul>
    </LegalPageContent>
  );
}
