import { CheckCircle, Users, Clock, Award, Monitor, ThumbsUp } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Agilidade no Atendimento",
      description: "Diagnóstico em tempo hábil e prazos cumpridos. Respeitamos seu tempo.",
    },
    {
      icon: ThumbsUp,
      title: "Garantia de Qualidade",
      description: "Todos os serviços possuem garantia. Sua satisfação é nossa prioridade.",
    },
    {
      icon: Monitor,
      title: "Suporte via Remoto",
      description: "Atendimento personalizado do início ao fim. Estamos sempre disponíveis.",
    },
  ];

  const stats = [
    { value: "25+", label: "Anos de experiência" },
    { value: "5000+", label: "Clientes atendidos" },
    { value: "98%", label: "Taxa de satisfação" },
    { value: "48h", label: "Tempo médio de reparo" },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Confiança e qualidade em cada{" "}
              <span className="text-gradient">atendimento</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Na APL Informática, combinamos experiência técnica com atendimento humanizado. 
              Cada cliente é único e merece soluções personalizadas para suas necessidades.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card text-center group hover:shadow-hover transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
