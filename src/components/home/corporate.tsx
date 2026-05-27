import Image from "next/image";
import { ArrowRight, Briefcase, Globe, Shield, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "573007980870";
const WA_MESSAGE = encodeURIComponent(
  "Hola, estoy interesado en una propuesta comercial para viajes corporativos"
);

export function CorporateSection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: "#101726" }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px] shadow-2xl">
              <div className="absolute inset-0 z-10 bg-black/30 mix-blend-multiply" />
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Travel"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute bottom-8 left-8 right-8 z-20 backdrop-blur-md p-6 rounded-xl border shadow-xl"
                style={{
                  backgroundColor: "#1c2739",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "rgba(36,117,158,0.15)" }}
                  >
                    <Briefcase className="w-6 h-6" style={{ color: "#24759e" }} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-white">
                    Soluciones B2B
                  </h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  Optimizamos el presupuesto de viajes de su empresa con tarifas corporativas exclusivas y gestión integral.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2
              className="font-medium tracking-wider uppercase mb-4 text-sm"
              style={{ color: "#24759e" }}
            >
              Viajes Corporativos
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-white mb-6">
              El socio estratégico para su empresa
            </h3>
            <p
              className="text-lg mb-10 leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              En Viaja América entendemos que los viajes de negocios son una inversión. Brindamos asesoría personalizada, control de gastos y asistencia 24/7 para garantizar el éxito de sus objetivos corporativos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 shrink-0" style={{ color: "#24759e" }} />
                <div>
                  <h5 className="font-semibold mb-2 text-white">Alcance Global</h5>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    Conexiones directas y convenios con las principales aerolíneas mundiales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 shrink-0" style={{ color: "#24759e" }} />
                <div>
                  <h5 className="font-semibold mb-2 text-white">Seguridad</h5>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    Seguros de viaje corporativos y asistencia en destino inmediata.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 shrink-0" style={{ color: "#24759e" }} />
                <div>
                  <h5 className="font-semibold mb-2 text-white">Atención 24/7</h5>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    Ejecutivos dedicados disponibles en todo momento para su tranquilidad.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full h-14 px-8 text-base font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#24759e", color: "#ffffff" }}
            >
              Solicitar Propuesta Comercial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
