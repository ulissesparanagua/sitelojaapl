import { ArrowRight, Monitor, Wrench, HardDrive, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "@/lib/services-data";

const quickServices = [
  {
    icon: Monitor,
    title: "Formatação",
    description: "Formatação completa com backup de arquivos, instalação de drivers e configuração de programas essenciais.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Limpeza interna, troca de pasta térmica, diagnóstico de hardware e otimização de desempenho.",
  },
  {
    icon: HardDrive,
    title: "Recuperação de Dados",
    description: "Recuperação de arquivos em HDs, SSDs e pendrives danificados ou com falhas lógicas.",
  },
  {
    icon: Download,
    title: "Instalação",
    description: "Instalação de programas, antivírus, impressoras, drivers e configuração de redes.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <Link
                to={`/servicos/${service.slug}`}
                className="block relative h-48 overflow-hidden"
                aria-label={`Ver detalhes do serviço ${service.title}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  <Link
                    to={`/servicos/${service.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/servicos/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Services Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Serviços <span className="text-primary">Rápidos</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
