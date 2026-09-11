import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Viaja América",
  description: "Condiciones de uso del sitio web y de los servicios de viaje de Viaja América.",
};

const SECTIONS = [
  {
    title: "1. Aceptación de los términos",
    body: `Al usar este sitio web o contratar los servicios de Viaja América (Funza, Cundinamarca, Colombia), usted acepta los presentes Términos y Condiciones. Si no está de acuerdo con ellos, le pedimos no utilizar el sitio ni contratar nuestros servicios.`,
  },
  {
    title: "2. Servicios ofrecidos",
    body: `Viaja América actúa como agencia de viajes, intermediando la venta de tiquetes aéreos, alojamiento, alquiler de vehículos, apartamentos amoblados, paquetes turísticos y servicios corporativos con proveedores y aerolíneas aliadas. La disponibilidad, tarifas e itinerarios están sujetos a confirmación con cada proveedor.`,
  },
  {
    title: "3. Cotizaciones, reservas y pagos",
    body: `Las cotizaciones enviadas por WhatsApp, correo o formulario web no constituyen una reserva confirmada hasta que se realice el pago correspondiente y se reciba la confirmación por parte de Viaja América. Los precios pueden variar según disponibilidad del proveedor hasta el momento del pago.`,
  },
  {
    title: "4. Cambios y cancelaciones",
    body: `Las políticas de cambio y cancelación dependen de las condiciones tarifarias de cada aerolínea, hotel o proveedor, las cuales se informan al cliente antes de confirmar la reserva. Viaja América acompaña la gestión de cualquier cambio o cancelación ante el proveedor correspondiente.`,
  },
  {
    title: "5. Responsabilidad",
    body: `Viaja América actúa como intermediario entre el cliente y los proveedores de servicios turísticos. La prestación final del servicio (vuelo, hotel, vehículo, evento) es responsabilidad del proveedor respectivo, conforme a sus propios términos y condiciones. Recomendamos a nuestros clientes contar con un seguro de viaje para imprevistos durante el itinerario.`,
  },
  {
    title: "6. Propiedad intelectual",
    body: `Los textos, imágenes, marca y demás contenidos de este sitio son propiedad de Viaja América o de sus respectivos titulares y están protegidos por las normas de propiedad intelectual vigentes en Colombia. Su reproducción total o parcial sin autorización está prohibida.`,
  },
  {
    title: "7. Ley aplicable",
    body: `Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia derivada del uso del sitio o de los servicios contratados se someterá a la jurisdicción de los jueces competentes en Colombia.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="container mx-auto max-w-3xl px-6 md:px-12">
        <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight md:text-5xl">
          Términos y Condiciones
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
            ¿Tienes dudas sobre estos términos? Escríbenos a{" "}
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
