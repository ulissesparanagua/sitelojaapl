import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="py-12 lg:py-0">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
              Assistência Técnica Especializada
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Seu equipamento em{" "}
              <span className="text-primary">boas mãos</span>
            </h1>
            
            <p className="text-background/70 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Especialistas em manutenção e reparo de computadores, notebooks e periféricos. 
              Soluções rápidas e eficientes para você e sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="lg" className="group">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
              >
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 text-background/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Atendimento imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Orçamento grátis</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Técnico de informática trabalhando" 
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/95 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-bold text-lg">+5.000 clientes</p>
                    <p className="text-muted-foreground text-sm">satisfeitos em todo Brasil</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-primary font-bold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
