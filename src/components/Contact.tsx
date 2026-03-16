import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Brigadeiro Mário Epinghaus, nº 329",
      subtitle: "Centro - Lauro de Freitas-BA | CEP: 42703-640",
    },
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(71) 3378-9497",
      subtitle: "WhatsApp: (71) 99313-6222",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "apl.informatica9497@gmail.com",
      subtitle: "",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg a Sex: 8h às 18h",
      subtitle: "Sáb: 8h às 12h",
    },
  ];

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left */}
          <div className="lg:col-span-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Fale <span className="text-primary">conosco</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Entre em contato para solicitar um orçamento ou tirar suas dúvidas.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                    {info.subtitle && (
                      <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Right */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit} 
              className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefone / WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Descreva seu problema ou o serviço que precisa..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Enviar Mensagem
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
