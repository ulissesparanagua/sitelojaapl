import { Star, Quote } from "lucide-react";
import logoApl from "@/assets/logo-apl.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dj Nestor Azevedo",
      role: "Local Guide • Google",
      content: "A melhor oficina de computadores de Lauro de Freitas. Recomendo. Nota 1000.",
      rating: 5,
    },
    {
      name: "Luciano Aleixo",
      role: "Cliente • Google",
      content: "APL eh referência em valores, qualidade... a mais de 20 anos no mesmo endereço... sou fã da loja e dos proprietários pelo valor que eles entregam.",
      rating: 5,
    },
    {
      name: "Naiana Souza Laborda",
      role: "Local Guide • Google",
      content: "Ótimo atendimento, qualidade e boa orientação.",
      rating: 5,
    },
    {
      name: "Fábio Oliveira",
      role: "Local Guide • Google",
      content: "Pessoal muito competente.",
      rating: 5,
    },
    {
      name: "Robson Teles",
      role: "Cliente • Google",
      content: "Excelente serviço.",
      rating: 5,
    },
    {
      name: "Íngara Lorena",
      role: "Local Guide • Google",
      content: "A loja existe há anos. Atendimento de qualidade, funcionam de segunda a sábado e possuem atendimento via whatsapp.",
      rating: 4,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-foreground overflow-hidden">
      {/* Faded circular logo background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <img
          src={logoApl}
          alt=""
          className="w-[480px] md:w-[640px] lg:w-[760px] max-w-none opacity-[0.06] rounded-full select-none"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-background mt-2 mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-background/70 text-lg">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-background/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-background font-semibold">{testimonial.name}</p>
                  <p className="text-background/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
