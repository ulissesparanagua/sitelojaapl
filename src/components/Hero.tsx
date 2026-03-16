import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-gaming-laptop.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      
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
              Especialistas em manutenção e reparo de computadores, notebooks e impressoras. 
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
                (71) 99313-6222
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

          {/* Right - Stats Card */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="p-8 bg-background/10 backdrop-blur-md rounded-3xl border border-background/20">
              <div className="text-center">
                <p className="text-background font-bold text-5xl mb-2">+5.000</p>
                <p className="text-background/70 text-lg">clientes satisfeitos</p>
              </div>
              <div className="mt-6 flex justify-center -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-primary/30 border-2 border-background/50 flex items-center justify-center text-background font-bold"
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
