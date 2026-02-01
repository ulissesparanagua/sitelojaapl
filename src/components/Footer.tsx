import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoApl from "@/assets/logo-apl.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Manutenção de PC", href: "#servicos" },
      { name: "Reparo de Notebook", href: "#servicos" },
      { name: "Recuperação de Dados", href: "#servicos" },
      { name: "Redes e Wi-Fi", href: "#servicos" },
    ],
    company: [
      { name: "Sobre nós", href: "#sobre" },
      { name: "Contato", href: "#contato" },
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <img 
                src={logoApl} 
                alt="APL Informática" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold">
                APL <span className="text-primary">Informática</span>
              </span>
            </a>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              Há mais de 15 anos oferecendo soluções completas em informática. 
              Sua confiança é nossa maior conquista.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
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
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} APL Informática. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-sm">
            Desenvolvido com 💙 em São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
