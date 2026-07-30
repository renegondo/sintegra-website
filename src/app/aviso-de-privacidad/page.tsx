import { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Sintegra",
};

export default function AvisoPrivacidadPage() {
  return (
    <LegalPageContent title="Aviso de Privacidad Integral">
      <p className="text-sm text-slate-500 mb-8"><strong>Última actualización: 30 de julio de 2026</strong></p>

      <h2>1. Identidad del responsable</h2>
      <p>
        <strong>[RAZÓN SOCIAL O NOMBRE COMPLETO DEL RESPONSABLE]</strong>, quien opera comercialmente bajo el nombre <strong>Sintegra — Sistemas Integrales</strong>, con domicilio en <strong>[DOMICILIO COMPLETO, COLONIA, CÓDIGO POSTAL, MUNICIPIO, ESTADO, MÉXICO]</strong>, es responsable del tratamiento de los datos personales recabados mediante el sitio <code>sistemasintegrados.online</code>, sus formularios, canales de contacto, solicitudes de demostración y comunicaciones corporativas.
      </p>
      <p>Para asuntos relacionados con privacidad y protección de datos personales puede comunicarse mediante:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Correo electrónico:</strong> <a href="mailto:PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE</a></li>
        <li><strong>Teléfono:</strong> [NÚMERO TELEFÓNICO]</li>
        <li><strong>Horario de atención:</strong> [DÍAS Y HORARIOS]</li>
      </ul>
      <p>
        Este aviso se aplica al sitio corporativo de Sintegra. El tratamiento realizado dentro de sistemas contratados por Ayuntamientos, organismos públicos u otras instituciones se regirá por el aviso de privacidad de la institución correspondiente y por los contratos que determinen las responsabilidades de cada parte.
      </p>

      <h2>2. Datos personales que podemos recabar</h2>
      <p>Dependiendo de la forma en que interactúe con Sintegra, podremos tratar las siguientes categorías de información:</p>
      
      <h3>Datos de identificación</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Nombre y apellidos.</li>
        <li>Cargo o puesto.</li>
        <li>Nombre de la institución o empresa.</li>
        <li>Área o dirección de adscripción.</li>
      </ul>

      <h3>Datos de contacto</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Correo electrónico.</li>
        <li>Número telefónico.</li>
        <li>Medio preferido de contacto.</li>
        <li>Municipio, ciudad y estado.</li>
      </ul>

      <h3>Datos profesionales e institucionales</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Funciones profesionales.</li>
        <li>Número aproximado de usuarios de una institución.</li>
        <li>Procesos o áreas de interés.</li>
        <li>Necesidades administrativas u operativas.</li>
        <li>Información proporcionada durante reuniones, demostraciones o solicitudes de servicio.</li>
      </ul>

      <h3>Datos relacionados con comunicaciones</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Mensajes enviados mediante formularios.</li>
        <li>Correos electrónicos.</li>
        <li>Solicitudes de soporte.</li>
        <li>Comentarios, dudas y respuestas.</li>
        <li>Historial de seguimiento comercial.</li>
      </ul>

      <h3>Datos técnicos y de navegación</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Dirección IP.</li>
        <li>Tipo de navegador.</li>
        <li>Sistema operativo.</li>
        <li>Tipo de dispositivo.</li>
        <li>Fecha y hora de acceso.</li>
        <li>Páginas visitadas.</li>
        <li>Registros de seguridad.</li>
        <li>Identificadores técnicos.</li>
        <li>Preferencias de cookies.</li>
      </ul>
      <p>
        Sintegra no solicita intencionalmente datos personales sensibles mediante el sitio corporativo. Le pedimos no enviar información médica, biométrica, financiera, política, religiosa o de otra naturaleza sensible mediante formularios generales.
      </p>
      <p>
        Las demostraciones públicas no deben utilizarse para introducir datos personales reales, información confidencial, documentos oficiales ni información operativa de una institución.
      </p>

      <h2>3. Formas de obtención</h2>
      <p>Podemos obtener datos personales cuando usted:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Completa un formulario de contacto.</li>
        <li>Solicita una demostración.</li>
        <li>Envía un correo electrónico.</li>
        <li>Se comunica mediante teléfono o mensajería.</li>
        <li>Solicita información comercial.</li>
        <li>Participa en una reunión o presentación.</li>
        <li>Solicita soporte.</li>
        <li>Accede a un entorno de demostración.</li>
        <li>Navega por el sitio y acepta determinadas cookies.</li>
      </ul>

      <h2>4. Finalidades primarias</h2>
      <p>Los datos personales serán utilizados para finalidades necesarias relacionadas con la atención solicitada:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Identificar y atender a la persona interesada.</li>
        <li>Responder preguntas o solicitudes de información.</li>
        <li>Programar y realizar demostraciones.</li>
        <li>Analizar las necesidades de una institución.</li>
        <li>Elaborar propuestas técnicas o comerciales.</li>
        <li>Dar seguimiento a posibles proyectos.</li>
        <li>Brindar soporte y atención.</li>
        <li>Gestionar accesos autorizados a demostraciones.</li>
        <li>Prevenir usos indebidos, abusos o incidentes de seguridad.</li>
        <li>Mantener registros de comunicaciones.</li>
        <li>Administrar la relación contractual cuando exista.</li>
        <li>Cumplir obligaciones legales, administrativas, fiscales o judiciales.</li>
        <li>Proteger los derechos, sistemas e infraestructura de Sintegra.</li>
      </ul>
      <p>Estas finalidades son necesarias para gestionar la comunicación o relación solicitada.</p>

      <h2>5. Finalidades secundarias</h2>
      <p>Con su consentimiento, podremos utilizar los datos de contacto para:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Enviar noticias sobre Sintegra.</li>
        <li>Comunicar actualizaciones de productos.</li>
        <li>Compartir invitaciones a presentaciones o eventos.</li>
        <li>Enviar contenido relacionado con transformación digital.</li>
        <li>Realizar encuestas de satisfacción.</li>
        <li>Mantener comunicación comercial posterior.</li>
      </ul>
      <p>
        Puede oponerse a estas finalidades en cualquier momento enviando un mensaje a <a href="mailto:PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE</a> con el asunto: <strong>“Baja de comunicaciones comerciales”</strong>
      </p>
      <p>
        La negativa para estas finalidades no afectará la atención de solicitudes, demostraciones, soporte o servicios contratados.
      </p>

      <h2>6. Datos tratados por cuenta de clientes</h2>
      <p>
        Cuando Sintegra presta servicios tecnológicos a un Ayuntamiento, organismo público o institución, puede tratar determinados datos personales siguiendo las instrucciones del cliente.
      </p>
      <p>En estos casos, la calidad de responsable, encargado o proveedor tecnológico se determinará conforme a:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>La legislación aplicable.</li>
        <li>El contrato celebrado.</li>
        <li>El aviso de privacidad de la institución.</li>
        <li>Las instrucciones documentadas del cliente.</li>
        <li>La configuración y alcance del servicio.</li>
      </ul>
      <p>
        Las solicitudes relacionadas con datos ciudadanos almacenados dentro de una plataforma institucional deberán dirigirse inicialmente a la institución responsable indicada en su aviso de privacidad.
      </p>

      <h2>7. Transferencias y proveedores de servicios</h2>
      <p>Sintegra podrá apoyarse en proveedores que presten servicios de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Alojamiento de infraestructura.</li>
        <li>Almacenamiento.</li>
        <li>Bases de datos.</li>
        <li>Correo electrónico.</li>
        <li>Mensajería.</li>
        <li>Seguridad.</li>
        <li>Analítica.</li>
        <li>Soporte técnico.</li>
        <li>Generación de documentos.</li>
        <li>Administración de relaciones comerciales.</li>
      </ul>
      <p>
        Estos proveedores deberán tratar la información conforme a instrucciones, obligaciones de confidencialidad y medidas de seguridad aplicables.
      </p>
      <p>Los datos también podrán comunicarse:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Cuando exista una obligación legal.</li>
        <li>Cuando sean requeridos por una autoridad competente.</li>
        <li>Cuando resulte necesario para ejercer o defender un derecho.</li>
        <li>Cuando sea necesario para proteger a una persona ante una emergencia.</li>
        <li>En los demás supuestos permitidos por la legislación aplicable.</li>
      </ul>
      <p><strong>Sintegra no vende datos personales.</strong></p>

      <h2>8. Almacenamiento y servicios en la nube</h2>
      <p>
        La infraestructura tecnológica puede involucrar servicios de nube y proveedores ubicados dentro o fuera de México. Sintegra buscará que dichos servicios:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Mantengan medidas de seguridad razonables.</li>
        <li>Traten la información conforme a instrucciones.</li>
        <li>Impongan obligaciones de confidencialidad.</li>
        <li>Limiten el acceso a personal autorizado.</li>
        <li>Permitan eliminar o devolver información cuando corresponda.</li>
        <li>Notifiquen incidentes relevantes.</li>
        <li>No utilicen los datos para finalidades propias incompatibles.</li>
      </ul>

      <h2>9. Conservación de los datos</h2>
      <p>Los datos personales serán conservados durante el tiempo necesario para:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Atender la solicitud.</li>
        <li>Mantener la relación comercial o contractual.</li>
        <li>Proporcionar soporte.</li>
        <li>Cumplir obligaciones legales.</li>
        <li>Atender responsabilidades derivadas de la relación.</li>
        <li>Resolver controversias.</li>
        <li>Proteger la seguridad del servicio.</li>
      </ul>
      <p>
        Cuando los datos dejen de ser necesarios, serán eliminados, anonimizados o bloqueados durante los periodos legalmente aplicables. Las consultas comerciales que no se conviertan en una relación contractual podrán eliminarse después de un periodo razonable de inactividad, salvo que exista una obligación o interés legítimo para conservarlas.
      </p>

      <h2>10. Derechos ARCO</h2>
      <p>La persona titular puede ejercer los derechos de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Acceso:</strong> conocer qué datos personales conservamos y cómo los utilizamos.</li>
        <li><strong>Rectificación:</strong> solicitar la corrección de información inexacta, incompleta o desactualizada.</li>
        <li><strong>Cancelación:</strong> solicitar la eliminación o bloqueo de los datos cuando resulte procedente.</li>
        <li><strong>Oposición:</strong> solicitar que determinados tratamientos dejen de realizarse.</li>
      </ul>
      <p>
        La solicitud deberá enviarse a <a href="mailto:PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE</a> con el asunto: <strong>“Solicitud de derechos ARCO”</strong>. La solicitud deberá incluir:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Nombre de la persona titular.</li>
        <li>Medio para recibir notificaciones.</li>
        <li>Documentos que acrediten su identidad.</li>
        <li>En su caso, documentos que acrediten la representación legal.</li>
        <li>Descripción clara de los datos involucrados.</li>
        <li>Derecho que desea ejercer.</li>
        <li>Descripción concreta de la solicitud.</li>
        <li>Información que facilite la localización de los datos.</li>
        <li>En caso de rectificación, documentos que respalden la corrección solicitada.</li>
      </ul>
      <p>
        La documentación de identidad será utilizada únicamente para verificar la legitimidad de la solicitud y deberá protegerse adecuadamente. Sintegra comunicará la determinación adoptada en un plazo máximo de veinte días hábiles contado desde la recepción de la solicitud completa. Cuando resulte procedente, la solicitud se hará efectiva dentro de los quince días hábiles siguientes.
      </p>
      <p>
        Los plazos podrán ampliarse una sola vez por un periodo igual cuando las circunstancias lo justifiquen. El ejercicio de los derechos ARCO es gratuito. Únicamente podrán cobrarse, cuando corresponda, costos razonables de reproducción, copias o envío.
      </p>

      <h2>11. Revocación del consentimiento</h2>
      <p>
        Puede solicitar la revocación de su consentimiento mediante el mismo correo utilizado para los derechos ARCO. La revocación no tendrá efectos retroactivos y puede no resultar procedente cuando el tratamiento sea necesario para:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Cumplir una obligación legal.</li>
        <li>Ejecutar una relación contractual.</li>
        <li>Atender responsabilidades pendientes.</li>
        <li>Ejercer o defender un derecho.</li>
        <li>Proteger la seguridad de los sistemas.</li>
      </ul>

      <h2>12. Limitación de uso o divulgación</h2>
      <p>
        Puede solicitar que sus datos no sean utilizados para comunicaciones promocionales escribiendo a <a href="mailto:PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE" className="text-electric hover:underline">PRIVACIDAD@SISTEMASINTEGRADOS.ONLINE</a>. También podrá:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Cancelar su suscripción desde los correos que incluyan esa opción.</li>
        <li>Modificar las preferencias de cookies.</li>
        <li>Solicitar la baja de listas comerciales.</li>
        <li>Configurar su navegador para bloquear determinados identificadores.</li>
      </ul>

      <h2>13. Cookies y tecnologías similares</h2>
      <p>
        El sitio puede utilizar cookies y tecnologías semejantes para mantener funciones necesarias, recordar preferencias, proteger formularios, medir rendimiento y obtener estadísticas. Puede consultar más información en la <strong>Política de cookies</strong> y modificar sus preferencias mediante el centro de configuración disponible en el sitio.
      </p>

      <h2>14. Seguridad</h2>
      <p>Sintegra adopta medidas administrativas, técnicas y físicas razonables para proteger los datos contra:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Pérdida.</li>
        <li>Alteración.</li>
        <li>Destrucción.</li>
        <li>Uso indebido.</li>
        <li>Acceso no autorizado.</li>
        <li>Divulgación no autorizada.</li>
      </ul>
      <p>
        Ningún sistema conectado a internet puede considerarse completamente libre de riesgos. En caso de una vulneración que afecte significativamente los derechos de las personas titulares, se realizarán las comunicaciones que correspondan conforme a la legislación aplicable.
      </p>

      <h2>15. Menores de edad</h2>
      <p>
        El sitio corporativo y las demostraciones están dirigidos a representantes de instituciones, personal profesional y personas mayores de edad. Sintegra no recaba intencionalmente datos de menores mediante sus formularios comerciales. Cuando se identifique información enviada sin autorización, podrá eliminarse.
      </p>

      <h2>16. Enlaces externos</h2>
      <p>
        El sitio puede contener enlaces a plataformas, proveedores o sitios de terceros. Sintegra no controla sus prácticas de privacidad. Se recomienda consultar el aviso de privacidad del sitio externo antes de proporcionar información.
      </p>

      <h2>17. Cambios al aviso de privacidad</h2>
      <p>Sintegra puede modificar este aviso como consecuencia de:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Cambios legales.</li>
        <li>Nuevas funcionalidades.</li>
        <li>Modificaciones operativas.</li>
        <li>Cambios de proveedores.</li>
        <li>Nuevos tratamientos de información.</li>
      </ul>
      <p>
        Las modificaciones se publicarán en esta misma página indicando la fecha de actualización. Cuando el cambio sea sustancial, podrá comunicarse mediante un aviso destacado, correo electrónico u otro medio razonable.
      </p>

      <h2>18. Autoridad competente</h2>
      <p>
        Cuando considere que su derecho a la protección de datos personales ha sido vulnerado, podrá acudir ante la autoridad competente en materia de protección de datos personales en México, conforme a los procedimientos establecidos por la legislación vigente.
      </p>
    </LegalPageContent>
  );
}
