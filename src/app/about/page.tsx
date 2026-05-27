import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nosotros | Viaja América",
  description: "Conoce nuestra historia, visión y compromiso con la excelencia en turismo.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Avión" width={800} height={512} className="rounded-2xl object-cover h-64 w-full" />
              <Image src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Viajera" width={800} height={512} className="rounded-2xl object-cover h-64 w-full mt-8" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-primary font-medium tracking-wider uppercase mb-4 text-sm">Quiénes Somos</h4>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6">Nuestra Historia</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En <strong className="text-foreground">Viaja América</strong>, con sede en Funza, Cundinamarca, somos una agencia de viajes comprometida con hacer realidad los sueños de nuestros clientes. Durante años, hemos operado con una filosofía basada en la confianza, la excelencia y la atención al detalle.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ya sea que busque unas vacaciones familiares relajantes, una aventura en destinos exóticos o requiera la gestión impecable de los viajes corporativos de su empresa, nuestro equipo de expertos asesores está listo para diseñar la experiencia perfecta.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-2">+10 Años</h3>
                <p className="text-muted-foreground">De experiencia en el sector turístico</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-2">+50k</h3>
                <p className="text-muted-foreground">Viajeros felices y satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
