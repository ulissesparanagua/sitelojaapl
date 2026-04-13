import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoApl from "@/assets/logo-apl.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Manutenção de PC", href: "#servicos" },
      { name: "Reparo de Notebook", href: "#servicos" },
      { name: "Recuperação de Dados", href: "#servicos" },
      { name: "Redes e Wi-Fi", href: "#servicos" },
      { name: "Segurança Digital", href: "#servicos" },
    ],
    company: [
      { name: "Sobre nós", href: "#sobre" },
      { name: "Nossos Serviços", href: "#servicos" },
      { name: "Depoimentos", href: "#" },
      { name: "Contato", href: "#contato" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-background mb-2">
                Receba nossas novidades
              </h3>
              <p className="text-background/70">
                Dicas de manutenção e ofertas exclusivas direto no seu e-mail.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="h-12 bg-background/10 border-background/20 text-background placeholder:text-background/50 md:w-64"
              />
              <Button variant="hero" size="lg">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <img 
                src={logoApl} 
                alt="APL Informática" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="flex items-baseline gap-1">
                <span className="font-brand text-xl tracking-widest text-primary font-black">APL</span>
                <span className="font-brand text-base tracking-[0.15em] uppercase text-background font-bold">Informática</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Há mais de 25 anos oferecendo soluções completas em informática. 
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg text-background mb-4">Serviços</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-background mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Av. Brigadeiro Mário Epinghaus, nº 329<br />Centro - Lauro de Freitas-BA<br />CEP: 42703-640</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(71) 3378-9497</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>WhatsApp: (71) 99313-6222</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>apl.informatica9497@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} APL Informática. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
