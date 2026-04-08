import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
            <Link to="/#servicos">
              <Button variant="default">Voltar aos serviços</Button>
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
            src={service.detailImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <Link
                to="/#servicos"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar aos serviços
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">
                  O que oferecemos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl bg-card border border-border p-6 shadow-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Precisa deste serviço?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Entre em contato conosco para um diagnóstico gratuito e orçamento sem compromisso.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a href="https://wa.me/5571993136222" target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="lg" className="w-full">
                        Chamar no WhatsApp
                      </Button>
                    </a>
                    <a href="tel:7133789497">
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="w-4 h-4" />
                        Ligar agora
                      </Button>
                    </a>
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
