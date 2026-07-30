import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Términos de Uso | Sintegra",
};

export default function TerminosPage() {
  return (
    <LegalPageContent title="Términos de Uso">
      <p className="text-sm text-slate-500 mb-8"><strong>Última actualización: 30 de julio de 2026</strong></p>

      <h2>1. Aceptación</h2>
      <p>
        Estos Términos de uso regulan el acceso y utilización del sitio <code>sistemasintegrados.online</code>, sus contenidos, demostraciones públicas y canales digitales. El sitio es operado bajo el nombre comercial <strong>Sintegra — Sistemas Integrales</strong> por <strong>[RAZÓN SOCIAL O NOMBRE DEL TITULAR]</strong>, con domicilio en <strong>[DOMICILIO COMPLETO]</strong>.
      </p>
      <p>
        Al utilizar el sitio, la persona usuaria reconoce haber leído y aceptado estos términos. Cuando no esté de acuerdo, deberá abstenerse de utilizarlo.
      </p>

      <h2>2. Finalidad del sitio</h2>
      <p>El sitio tiene carácter corporativo, informativo y comercial. Su finalidad es presentar:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Información sobre Sintegra.</li>
        <li>Soluciones tecnológicas.</li>
        <li>Sistemas de Tesorería Municipal.</li>
        <li>Bebot Ayuntamiento.</li>
        <li>Servicios de desarrollo.</li>
        <li>Integraciones.</li>
        <li>Procesos de implementación.</li>
        <li>Recursos y materiales informativos.</li>
        <li>Entornos de demostración.</li>
        <li>Formas de contacto.</li>
      </ul>
      <p>
        La información publicada no constituye por sí sola una propuesta contractual definitiva, licitación, certificación, garantía de resultados ni compromiso de implementación. Cualquier contratación estará sujeta a una propuesta y contrato independiente.
      </p>

      <h2>3. Entornos de demostración</h2>
      <p>Sintegra puede poner a disposición credenciales o ambientes de demostración para evaluar determinadas funciones. La persona usuaria se obliga a:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Utilizar el entorno únicamente con fines de evaluación.</li>
        <li>No introducir datos personales reales.</li>
        <li>No introducir información confidencial.</li>
        <li>No cargar documentos institucionales auténticos.</li>
        <li>No utilizar nombres reales de ciudadanos.</li>
        <li>No realizar operaciones que puedan confundirse con trámites oficiales.</li>
        <li>No intentar acceder a información fuera del entorno autorizado.</li>
        <li>No interferir con la disponibilidad del servicio.</li>
        <li>No automatizar accesos sin autorización.</li>
        <li>No intentar identificar vulnerabilidades mediante ataques.</li>
        <li>No utilizar la demostración para actividades ilícitas.</li>
      </ul>
      <p>
        La información almacenada en una demostración puede ser restablecida o eliminada sin previo aviso. Las credenciales públicas de demostración no conceden derechos sobre el software, la infraestructura o los datos.
      </p>

      <h2>4. Conductas prohibidas</h2>
      <p>Queda prohibido:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Acceder sin autorización a cuentas, sistemas o servidores.</li>
        <li>Eludir controles de seguridad.</li>
        <li>Introducir código malicioso.</li>
        <li>Ejecutar ataques de fuerza bruta.</li>
        <li>Realizar pruebas de penetración sin autorización escrita.</li>
        <li>Extraer información de forma automatizada y masiva.</li>
        <li>Saturar los servicios.</li>
        <li>Suplantar identidades.</li>
        <li>Alterar registros.</li>
        <li>Utilizar el sitio para fraude.</li>
        <li>Publicar material ilícito.</li>
        <li>Utilizar el contenido para engañar a terceros.</li>
        <li>Presentar una demostración como sistema oficial en producción.</li>
        <li>Copiar o redistribuir el código fuente.</li>
        <li>Descompilar o realizar ingeniería inversa, salvo en los casos expresamente permitidos por la ley.</li>
      </ul>
      <p>
        Sintegra podrá bloquear accesos cuando detecte un uso contrario a estos términos o un riesgo para la seguridad.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>Los siguientes elementos pueden estar protegidos por derechos de autor, propiedad industrial u otros derechos:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Nombre Sintegra.</li>
        <li>Logotipos.</li>
        <li>Identidad visual.</li>
        <li>Código fuente.</li>
        <li>Interfaces.</li>
        <li>Diseños.</li>
        <li>Textos.</li>
        <li>Gráficos.</li>
        <li>Diagramas.</li>
        <li>Videos.</li>
        <li>Fotografías.</li>
        <li>Documentos.</li>
        <li>Bases de datos.</li>
        <li>Estructuras de navegación.</li>
        <li>Manuales.</li>
        <li>Material comercial.</li>
        <li>Componentes de software.</li>
      </ul>
      <p>
        El acceso al sitio no transmite derechos de propiedad ni concede una licencia general para reproducir, modificar, distribuir o explotar dichos elementos. Puede compartirse un enlace al contenido público siempre que:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>No se altere.</li>
        <li>No se atribuya falsamente.</li>
        <li>No se utilice con fines engañosos.</li>
        <li>No se sugiera una relación comercial inexistente.</li>
      </ul>
      <p>Las marcas, tecnologías y componentes de terceros pertenecen a sus respectivos titulares.</p>

      <h2>6. Información técnica y comercial</h2>
      <p>Las descripciones de productos representan funcionalidades generales o proyectadas. La disponibilidad real de cada módulo dependerá de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>El alcance contratado.</li>
        <li>La configuración.</li>
        <li>Las integraciones.</li>
        <li>La infraestructura.</li>
        <li>Las licencias de terceros.</li>
        <li>El tipo de institución.</li>
        <li>La fase de implementación.</li>
      </ul>
      <p>
        Sintegra podrá modificar nombres, interfaces, arquitectura o funcionalidades sin que la información histórica constituya una obligación de mantenerlas. No deberán interpretarse expresiones comerciales como garantía absoluta de:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Ausencia de errores.</li>
        <li>Disponibilidad ininterrumpida.</li>
        <li>Inviolabilidad.</li>
        <li>Cumplimiento normativo automático.</li>
        <li>Resultados financieros determinados.</li>
        <li>Validez jurídica de cualquier documento.</li>
        <li>Compatibilidad con todo dispositivo o proveedor.</li>
      </ul>

      <h2>7. Información sobre seguridad</h2>
      <p>Los contenidos de seguridad tienen carácter general. La seguridad efectiva de una implementación depende, entre otros factores, de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Configuración.</li>
        <li>Contraseñas.</li>
        <li>Permisos.</li>
        <li>Infraestructura.</li>
        <li>Actualizaciones.</li>
        <li>Dispositivos.</li>
        <li>Procedimientos del cliente.</li>
        <li>Capacitación.</li>
        <li>Gestión de incidentes.</li>
      </ul>
      <p>
        La publicación de expresiones como “verificación mediante QR”, “trazabilidad” o “control por roles” no significa que cualquier implementación esté exenta de riesgos.
      </p>

      <h2>8. Disponibilidad</h2>
      <p>Sintegra busca mantener el sitio disponible, pero puede suspenderlo por:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Mantenimiento.</li>
        <li>Actualizaciones.</li>
        <li>Fallas de infraestructura.</li>
        <li>Incidentes de seguridad.</li>
        <li>Causas de fuerza mayor.</li>
        <li>Problemas con proveedores.</li>
        <li>Cambios técnicos.</li>
      </ul>
      <p>
        No se garantiza que el sitio público o las demostraciones permanezcan disponibles de manera continua. Los niveles de servicio de una plataforma contratada se regirán exclusivamente por el contrato correspondiente.
      </p>

      <h2>9. Exactitud de la información</h2>
      <p>
        Sintegra procura mantener información clara y actualizada. Sin embargo, pueden existir errores, omisiones o contenido desactualizado. Antes de adoptar una decisión técnica, administrativa, jurídica o comercial, deberá solicitarse confirmación formal.
      </p>

      <h2>10. Enlaces y servicios de terceros</h2>
      <p>El sitio puede enlazar servicios externos. Sintegra no controla:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Su disponibilidad.</li>
        <li>Sus políticas.</li>
        <li>Sus contenidos.</li>
        <li>Sus medidas de seguridad.</li>
        <li>Sus prácticas de privacidad.</li>
      </ul>
      <p>El acceso a sitios externos se realiza bajo responsabilidad de la persona usuaria.</p>

      <h2>11. Privacidad</h2>
      <p>
        El tratamiento de datos personales se describe en el <strong>Aviso de privacidad</strong>. El uso de identificadores de navegación se describe en la <strong>Política de cookies</strong>.
      </p>

      <h2>12. Limitación de responsabilidad</h2>
      <p>En la medida permitida por la legislación aplicable, Sintegra no será responsable por daños derivados de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Uso indebido del sitio.</li>
        <li>Introducción de datos reales en demostraciones.</li>
        <li>Interrupciones temporales.</li>
        <li>Dependencia de información no confirmada.</li>
        <li>Servicios de terceros.</li>
        <li>Equipos o redes de la persona usuaria.</li>
        <li>Actividades realizadas sin autorización.</li>
        <li>Pérdida de información de prueba.</li>
        <li>Interpretación incorrecta de contenidos.</li>
      </ul>
      <p>Esta limitación no excluirá responsabilidades que legalmente no puedan renunciarse o limitarse.</p>

      <h2>13. Relación contractual</h2>
      <p>El uso del sitio no crea automáticamente:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Relación laboral.</li>
        <li>Sociedad.</li>
        <li>Mandato.</li>
        <li>Representación.</li>
        <li>Exclusividad.</li>
        <li>Contrato de licencia.</li>
        <li>Contrato de prestación de servicios.</li>
      </ul>
      <p>
        Las obligaciones relacionadas con licencias, implementación, soporte, niveles de servicio, propiedad de datos, pagos y confidencialidad deberán formalizarse por separado.
      </p>

      <h2>14. Reporte de vulnerabilidades</h2>
      <p>Las vulnerabilidades deberán comunicarse de forma responsable a: <a href="mailto:SEGURIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">SEGURIDAD@SISTEMASINTEGRADOS.ONLINE</a>. El reporte deberá incluir una descripción suficiente para reproducir el problema, evitando:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Acceder a datos reales.</li>
        <li>Descargar información.</li>
        <li>Interrumpir servicios.</li>
        <li>Modificar registros.</li>
        <li>Publicar la vulnerabilidad antes de su atención.</li>
      </ul>
      <p>El envío de un reporte no autoriza actividades invasivas ni garantiza una compensación económica.</p>

      <h2>15. Modificaciones</h2>
      <p>Sintegra puede modificar estos términos cuando cambien:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Los servicios.</li>
        <li>Las funcionalidades.</li>
        <li>La legislación.</li>
        <li>Las prácticas de seguridad.</li>
        <li>La operación del sitio.</li>
      </ul>
      <p>La versión aplicable será la publicada en esta página con su fecha de actualización.</p>

      <h2>16. Legislación y jurisdicción</h2>
      <p>
        Estos términos se regirán por las leyes aplicables de los Estados Unidos Mexicanos. Para cualquier controversia, las partes procurarán primero una solución de buena fe. Cuando no sea posible, serán competentes las autoridades y tribunales que correspondan en <strong>[CIUDAD Y ESTADO DEL DOMICILIO LEGAL]</strong>, salvo que una disposición obligatoria determine una jurisdicción diferente.
      </p>

      <h2>17. Contacto</h2>
      <p>
        <strong>Sintegra — Sistemas Integrales</strong><br />
        <strong>Responsable legal:</strong> [RAZÓN SOCIAL]<br />
        <strong>Correo:</strong> <a href="mailto:CONTACTO@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">CONTACTO@SISTEMASINTEGRADOS.ONLINE</a><br />
        <strong>Teléfono:</strong> [TELÉFONO]<br />
        <strong>Domicilio:</strong> [DOMICILIO]
      </p>
    </LegalPageContent>
  );
}
