import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Viaja América",
  description: "Cómo Viaja América recopila, usa y protege los datos personales de sus clientes.",
};

const SECTIONS = [
  {
    title: "1. Responsable del tratamiento",
    body: `Viaja América, con domicilio en Funza, Cundinamarca, Colombia, es la agencia de viajes responsable del tratamiento de los datos personales que usted comparte a través de este sitio web, nuestros canales de WhatsApp, correo electrónico o redes sociales. Puede contactarnos en administrativo1@viajaamerica.com.co o al +57 318 708 0678.`,
  },
  {
    title: "2. Datos que recopilamos",
    body: `Recopilamos la información que usted nos entrega voluntariamente al diligenciar formularios de contacto o cotización, solicitar reservas, o escribirnos por WhatsApp o correo: nombre, número de teléfono, correo electrónico, y los detalles de viaje que usted indique (destino, fechas, número de viajeros). También podemos recopilar información técnica básica de navegación (páginas visitadas, tipo de dispositivo) con fines estadísticos.`,
  },
  {
    title: "3. Finalidad del tratamiento",
    body: `Usamos sus datos para: responder cotizaciones y solicitudes de contacto, gestionar reservas de vuelos, alojamiento, vehículos, paquetes y eventos, brindar atención al cliente antes, durante y después del viaje, y enviarle información comercial sobre nuestros servicios cuando usted lo autorice. No vendemos ni compartimos sus datos con terceros para fines distintos a la prestación del servicio contratado, salvo obligación legal.`,
  },
  {
    title: "4. Sus derechos (Habeas Data)",
    body: `De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar la autorización otorgada para su tratamiento. Puede ejercer estos derechos en cualquier momento escribiendo a administrativo1@viajaamerica.com.co indicando su solicitud.`,
  },
  {
    title: "5. Conservación y seguridad de los datos",
    body: `Conservamos sus datos personales únicamente durante el tiempo necesario para cumplir las finalidades descritas en esta política o el tiempo exigido por la ley. Adoptamos medidas razonables, técnicas y administrativas para proteger su información contra pérdida, uso indebido o acceso no autorizado.`,
  },
  {
    title: "6. Cookies y tecnologías similares",
    body: `Este sitio puede usar cookies técnicas necesarias para su funcionamiento y, de forma opcional, cookies de analítica que nos ayudan a entender cómo se usa el sitio. Usted puede configurar su navegador para bloquear o eliminar cookies en cualquier momento.`,
  },
  {
    title: "7. Cambios a esta política",
    body: `Podemos actualizar esta política de tratamiento de datos periódicamente. Cualquier cambio será publicado en esta misma página con su fecha de actualización.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="container mx-auto max-w-3xl px-6 md:px-12">
        <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight md:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mb-12 text-sm text-muted-foreground">
          Última actualización: septiembre de 2026
        </p>

        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 font-heading text-xl font-semibold text-primary">
                {section.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/30 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            ¿Tienes preguntas sobre el tratamiento de tus datos? Escríbenos a{" "}
            <a href="mailto:administrativo1@viajaamerica.com.co" className="font-medium text-primary hover:underline">
              administrativo1@viajaamerica.com.co
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
