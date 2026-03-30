import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services } from "@/lib/services-data";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
            <Link to="/#servicos" className="text-primary font-semibold hover:underline">
              ← Voltar aos serviços
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[340px] md:h-[420px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <Link
                to="/#servicos"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar aos serviços
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Sobre o serviço
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    O que está incluído
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Solicite um orçamento
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Entre em contato conosco para um diagnóstico gratuito e orçamento sem compromisso.
                    </p>
                    <a
                      href={`https://wa.me/5571993136222?text=Olá! Gostaria de saber mais sobre o serviço de ${service.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Falar pelo WhatsApp
                    </a>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        📞 <a href="tel:7133789497" className="hover:text-primary transition-colors">71-3378.9497</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        📧 <a href="mailto:apl.informatica9497@gmail.com" className="hover:text-primary transition-colors">apl.informatica9497@gmail.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        🕐 Seg a Sex 9h às 18h | Sáb 9h às 12h
                      </p>
                    </div>
                  </div>

                  {/* Other services */}
                  <div className="rounded-2xl bg-card border border-border p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Outros serviços
                    </h3>
                    <div className="space-y-2">
                      {services
                        .filter((s) => s.slug !== slug)
                        .map((s) => (
                          <Link
                            key={s.slug}
                            to={`/servicos/${s.slug}`}
                            className="block text-muted-foreground hover:text-primary font-medium text-sm py-1.5 transition-colors"
                          >
                            → {s.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
