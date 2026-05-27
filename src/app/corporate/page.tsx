import { Metadata } from "next";
import Image from "next/image";
import { Building2, PlaneTakeoff, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Viajes Corporativos | Viaja América",
  description: "Soluciones empresariales y gestión de viajes B2B. Optimizamos tu presupuesto de viaje.",
};

const benefits = [
  { icon: Building2, title: "Gestión Integral", desc: "Administramos todos los aspectos de tus viajes de negocios: vuelos, hoteles, traslados y seguros." },
  { icon: ShieldCheck, title: "Seguridad y Respaldo", desc: "Seguro de viaje corporativo y asistencia en destino las 24 horas del día, los 7 días de la semana." },
  { icon: PlaneTakeoff, title: "Tarifas Corporativas", desc: "Acceso a tarifas preferenciales con aerolíneas y cadenas hoteleras a nivel mundial." },
  { icon: Clock, title: "Ahorro de Tiempo", desc: "Optimización de itinerarios y procesos de reserva rápidos para que te enfoques en tu negocio." },
];

export default function CorporatePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6 leading-tight">
              Viajes <span className="text-primary">Corporativos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              En Viaja América entendemos que el tiempo es dinero. Por eso ofrecemos soluciones integrales para la gestión de los viajes de tu empresa, garantizando eficiencia, ahorro y comodidad para tus ejecutivos.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Organización de congresos y convenciones.",
                "Viajes de incentivo para empleados.",
                "Gestión de visados y documentación.",
                "Reportes detallados de gastos de viaje."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-bold bg-[#f4c45c] text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-[#f0b830] hover:shadow-xl active:scale-[0.98]">Contactar a un Asesor Corporativo</Button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Reunión de negocios"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">¿Por qué elegirnos como tu agencia B2B?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-background rounded-2xl p-6 shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
