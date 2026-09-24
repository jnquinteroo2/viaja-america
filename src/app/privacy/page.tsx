import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales | Viaja América",
  description:
    "Política de Tratamiento de Datos Personales de Viaja América (Planea Representaciones Viajes y Eventos S.A.S.) conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.",
};

const EMAIL = "administrativo1@viajaamerica.com.co";
const PHONE = "+57 318 708 0678";

// PDFs servidos desde /public/documentos
const DOCUMENTS = [
  {
    code: "PTDP-01",
    title: "Política de Tratamiento de Datos Personales",
    description: "Documento completo de la política, con anexos de autorización y aviso de privacidad.",
    href: "/documentos/01_Politica_Tratamiento_Datos_Personales_PTDP-01.pdf",
  },
  {
    code: "ODP-01",
    title: "Acta de Designación del Oficial de Protección de Datos",
    description: "Designación formal y funciones del Oficial de Protección de Datos Personales.",
    href: "/documentos/02_Acta_Designacion_Oficial_Proteccion_Datos_ODP-01.pdf",
  },
  {
    code: "PR-IDP-01",
    title: "Procedimiento de Gestión de Incidentes de Seguridad",
    description: "Cómo reportamos y atendemos incidentes que afecten datos personales.",
    href: "/documentos/03_Procedimiento_Incidentes_Datos_Personales_PR-IDP-01.pdf",
  },
  {
    code: "PR-AUD-01",
    title: "Procedimiento de Auditoría y Control",
    description: "Revisiones periódicas del programa de protección de datos personales.",
    href: "/documentos/04_Procedimiento_Auditoria_Control_PR-AUD-01.pdf",
  },
];

type Section = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
  after?: string[];
};

const SECTIONS: Section[] = [
  {
    title: "1. Responsable del tratamiento",
    paragraphs: [
      `PLANEA REPRESENTACIONES VIAJES Y EVENTOS S.A.S., identificada con NIT 900.546.983 y nombre comercial Viaja América, con domicilio en Funza, Cundinamarca, Colombia, es la responsable del tratamiento de los datos personales que usted comparte a través de este sitio web, WhatsApp, correo electrónico, redes sociales y nuestras oficinas.`,
      `Correo: ${EMAIL} · Teléfono / WhatsApp: ${PHONE} · Sitio web: www.viajamerica.com`,
    ],
  },
  {
    title: "2. Marco legal y alcance",
    paragraphs: [
      `Esta política se adopta en cumplimiento del artículo 15 de la Constitución Política, la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, compilado en el Decreto Único Reglamentario 1074 de 2015. Aplica a todas las bases de datos físicas y digitales de la compañía y es de obligatorio cumplimiento para colaboradores, contratistas y proveedores.`,
      `Cuando tratamos datos entregados por un cliente corporativo (por ejemplo, datos de sus empleados viajeros), actuamos como Encargado del Tratamiento: usamos la información solo por cuenta del cliente, según sus instrucciones y para prestar el servicio contratado.`,
    ],
  },
  {
    title: "3. Principios",
    paragraphs: [
      `Aplicamos los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad (artículo 4 de la Ley 1581 de 2012).`,
    ],
  },
  {
    title: "4. Datos que recopilamos",
    items: [
      "Clientes y viajeros: nombre, tipo y número de documento, pasaporte, fecha de nacimiento, nacionalidad, teléfono, correo, dirección, itinerarios, fechas, preferencias de viaje y datos de facturación.",
      "Clientes corporativos: nombre, cargo, correo y teléfono de los contactos.",
      "Proveedores y aliados: datos de identificación, contacto, tributarios y bancarios.",
      "Colaboradores y aspirantes: datos de identificación, contacto, hoja de vida y datos laborales.",
      "Visitantes del sitio web: datos enviados en formularios y datos técnicos básicos de navegación (cookies).",
    ],
  },
  {
    title: "5. Finalidades del tratamiento",
    items: [
      "Cotizar, reservar y emitir tiquetes, alojamiento, vehículos, paquetes y eventos.",
      "Cumplir requisitos de aerolíneas, hoteles, operadores turísticos y autoridades migratorias.",
      "Brindar atención al cliente antes, durante y después del viaje, y atender peticiones, quejas y reclamos.",
      "Facturar, gestionar pagos y cumplir obligaciones legales, contables y tributarias.",
      "Enviar información comercial sobre nuestros servicios, solo cuando usted lo autorice.",
      "Elaborar estadísticas de uso del sitio web.",
    ],
    after: [
      "No vendemos ni cedemos sus datos a terceros para fines distintos a los aquí descritos. Cualquier nueva finalidad requerirá una nueva autorización.",
    ],
  },
  {
    title: "6. Autorización, datos sensibles y datos de menores",
    paragraphs: [
      `Solicitamos su autorización previa, expresa e informada al momento de recolectar sus datos y conservamos prueba de ella. No se requiere autorización en los casos del artículo 10 de la Ley 1581 de 2012 (orden de autoridad, datos públicos, urgencias médicas, entre otros).`,
      `Solo tratamos datos sensibles (por ejemplo, necesidades de asistencia médica o movilidad reducida durante un viaje) cuando es estrictamente necesario y con su autorización explícita. Usted no está obligado a autorizar el tratamiento de datos sensibles.`,
      `Los datos de niñas, niños y adolescentes se tratan únicamente cuando son necesarios para el servicio de viaje, respetando su interés superior y con autorización de su representante legal.`,
    ],
  },
  {
    title: "7. Derechos de los titulares",
    paragraphs: ["Usted, como titular de los datos, tiene derecho a:"],
    items: [
      "Conocer, actualizar y rectificar sus datos personales.",
      "Solicitar prueba de la autorización otorgada.",
      "Ser informado, previa solicitud, sobre el uso que se ha dado a sus datos.",
      "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC), una vez agotado el trámite de consulta o reclamo ante nosotros.",
      "Revocar la autorización y/o solicitar la supresión de sus datos, cuando no exista un deber legal o contractual de conservarlos.",
      "Acceder gratuitamente a sus datos personales.",
    ],
  },
  {
    title: "8. Quiénes pueden ejercer los derechos y deberes de los titulares",
    paragraphs: [
      `Los derechos pueden ejercerlos el titular (acreditando su identidad), sus causahabientes, su representante legal o apoderado (acreditando la representación) y quien actúe por estipulación a favor de otro. Los derechos de menores de edad se ejercen por quienes estén facultados para representarlos.`,
      `Los titulares y sus representantes deben suministrar información veraz y actualizada, acreditar su identidad o representación al presentar solicitudes e informar oportunamente cualquier cambio en sus datos.`,
    ],
  },
  {
    title: "9. Oficial de Protección de Datos Personales",
    paragraphs: [
      `La atención de consultas y reclamos está a cargo de nuestra Oficial de Protección de Datos Personales, Norma Consuelo Linares Buitrago, Directora de Seguridad de la Información (CISO). Puede contactarla en ${EMAIL} (asunto: "Protección de datos personales") o al ${PHONE}.`,
    ],
  },
  {
    title: "10. Procedimiento de consultas",
    ordered: true,
    items: [
      "Envíe su consulta indicando nombre, documento de identidad, lo que desea consultar y un medio de contacto.",
      "Respondemos en un máximo de diez (10) días hábiles desde su recibo.",
      "Si no es posible responder en ese plazo, le informaremos el motivo y la nueva fecha, que no superará cinco (5) días hábiles adicionales.",
    ],
  },
  {
    title: "11. Procedimiento de reclamos",
    paragraphs: [
      "Aplica cuando usted considere que sus datos deben corregirse, actualizarse o suprimirse, o advierta un posible incumplimiento de la ley.",
    ],
    ordered: true,
    items: [
      "El reclamo debe incluir su identificación, la descripción de los hechos, una dirección o correo de notificación y los documentos que quiera hacer valer.",
      "Si el reclamo está incompleto, le pediremos subsanarlo dentro de los cinco (5) días hábiles siguientes. Si pasan dos (2) meses sin respuesta, se entenderá que desistió.",
      "Una vez completo, marcaremos sus datos con la leyenda \"reclamo en trámite\" en máximo dos (2) días hábiles.",
      "Resolvemos en un máximo de quince (15) días hábiles. Si no es posible, le informaremos el motivo y la nueva fecha, que no superará ocho (8) días hábiles adicionales.",
    ],
  },
  {
    title: "12. Transmisión y transferencia de datos",
    paragraphs: [
      `Para prestar el servicio de viaje compartimos los datos necesarios con aerolíneas, hoteles, operadores turísticos, arrendadoras de vehículos, aseguradoras de viaje, sistemas de reservas y autoridades migratorias, dentro y fuera de Colombia. Las transferencias internacionales se realizan conforme al artículo 26 de la Ley 1581 de 2012, cuando son necesarias para ejecutar el contrato con el titular o con su autorización. Con nuestros encargados suscribimos contratos de transmisión de datos personales.`,
    ],
  },
  {
    title: "13. Seguridad de la información",
    items: [
      "Control de acceso por perfil, usuarios individuales y contraseñas robustas.",
      "Conexiones cifradas (HTTPS/TLS) en el sitio web y las plataformas de reserva.",
      "Acuerdos de confidencialidad con colaboradores y cláusulas de protección de datos con proveedores.",
      "Copias de seguridad periódicas y resguardo de documentos físicos bajo llave.",
      "Capacitación anual del personal en protección de datos personales.",
    ],
  },
  {
    title: "14. Gestión de incidentes y auditoría",
    paragraphs: [
      `Contamos con un procedimiento de gestión de incidentes de seguridad: los incidentes se reportan internamente de inmediato, se contienen y evalúan, se notifican a los clientes corporativos afectados y se reportan a la Superintendencia de Industria y Comercio dentro de los plazos establecidos. Además, realizamos revisiones trimestrales, auditorías internas semestrales y una revisión anual del programa de protección de datos.`,
    ],
  },
  {
    title: "15. Cookies",
    paragraphs: [
      `Este sitio puede usar cookies técnicas necesarias para su funcionamiento y, de forma opcional, cookies de analítica. Puede configurar su navegador para bloquear o eliminar cookies en cualquier momento.`,
    ],
  },
  {
    title: "16. Vigencia y cambios",
    paragraphs: [
      `Esta política rige desde el 25 de septiembre de 2026. Las bases de datos se conservan mientras se mantenga la finalidad del tratamiento o exista una obligación legal o contractual. Cualquier cambio sustancial será publicado en esta página e informado oportunamente.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="container mx-auto max-w-3xl px-6 md:px-12">
        <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight md:text-5xl">
          Política de Tratamiento de Datos Personales
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Versión 1.0 · Vigente desde el 25 de septiembre de 2026 · Ley 1581 de 2012 y Decreto 1074 de 2015
        </p>

        <div className="space-y-10">
          {SECTIONS.map((section) => {
            const List = section.ordered ? "ol" : "ul";
            return (
              <section key={section.title}>
                <h2 className="mb-3 font-heading text-xl font-semibold text-primary">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs?.map((p) => (
                    <p key={p} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  {section.items && (
                    <List
                      className={`space-y-2 pl-5 leading-relaxed text-muted-foreground ${
                        section.ordered ? "list-decimal" : "list-disc"
                      }`}
                    >
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </List>
                  )}
                  {section.after?.map((p) => (
                    <p key={p} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            );
          })}

          <section>
            <h2 className="mb-3 font-heading text-xl font-semibold text-primary">
              17. Documentos del programa de protección de datos
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Consulte o descargue los documentos oficiales:
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {DOCUMENTS.map((doc) => (
                <li key={doc.code}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col rounded-2xl border border-border bg-secondary/30 p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {doc.code}
                    </span>
                    <span className="mt-1 block font-heading font-semibold text-foreground">
                      {doc.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {doc.description}
                    </span>
                    <span className="mt-auto block pt-3 text-sm font-medium text-primary">
                      Ver documento →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/30 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            ¿Tienes preguntas sobre el tratamiento de tus datos? Escríbenos a{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:underline">
              {EMAIL}
            </a>{" "}
            o visita nuestra página de{" "}
            <a href="/contact" className="font-medium text-primary hover:underline">
              contacto
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
