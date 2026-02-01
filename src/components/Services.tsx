import { 
  Monitor, 
  Laptop, 
  HardDrive, 
  Wifi, 
  Shield, 
  Wrench,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Manutenção de Computadores",
      description: "Diagnóstico, reparo e upgrade de desktops. Limpeza interna e otimização de desempenho.",
    },
    {
      icon: Laptop,
      title: "Reparo de Notebooks",
      description: "Troca de tela, teclado, bateria, e reparos na placa-mãe. Atendimento para todas as marcas.",
    },
    {
      icon: HardDrive,
      title: "Recuperação de Dados",
      description: "Recuperação de arquivos em HDs, SSDs e pendrives danificados ou formatados.",
    },
    {
      icon: Wifi,
      title: "Redes e Conectividade",
      description: "Instalação e configuração de redes Wi-Fi, cabeamento estruturado e roteadores.",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Remoção de vírus, instalação de antivírus e proteção contra ameaças online.",
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Planos de manutenção para empresas. Evite problemas antes que aconteçam.",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Soluções completas em <span className="text-gradient">informática</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades tecnológicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
