import { ArrowRight } from "lucide-react";
import servicePC from "@/assets/service-pc.jpg";
import serviceNotebook from "@/assets/service-notebook.jpg";
import serviceData from "@/assets/service-data.jpg";

import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import servicePrinter from "@/assets/service-printer.jpg";

const Services = () => {
  const services = [
    {
      image: servicePC,
      title: "Manutenção de Computadores",
      description: "Diagnóstico, reparo e upgrade de desktops. Limpeza interna e otimização.",
    },
    {
      image: serviceNotebook,
      title: "Reparo de Notebooks",
      description: "Troca de tela, teclado, bateria, e reparos na placa-mãe.",
    },
    {
      image: serviceData,
      title: "Recuperação de Dados",
      description: "Recuperação de arquivos em HDs, SSDs e pendrives danificados.",
    },
    {
      image: serviceSecurity,
      title: "Segurança Digital",
      description: "Remoção de vírus e proteção contra ameaças online.",
    },
    {
      image: serviceMaintenance,
      title: "Manutenção Preventiva",
      description: "Planos de manutenção para empresas. Evite problemas.",
    },
    {
      image: servicePrinter,
      title: "Assistência Técnica em Impressoras",
      description: "Manutenção, reparo e configuração de impressoras de todas as marcas.",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Soluções completas em{" "}
              <span className="text-primary">informática</span>
            </h2>
          </div>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ver todos os serviços
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
