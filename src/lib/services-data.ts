import servicePC from "@/assets/service-pc.jpg";
import serviceNotebook from "@/assets/service-notebook.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import servicePrinter from "@/assets/service-printer.jpg";

export interface ServiceData {
  slug: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export const services: ServiceData[] = [
  {
    slug: "manutencao-de-computadores",
    image: servicePC,
    title: "Manutenção de Computadores",
    description: "Diagnóstico, reparo e upgrade de desktops. Limpeza interna e otimização.",
    longDescription:
      "Oferecemos um serviço completo de manutenção de computadores desktop, desde o diagnóstico preciso de problemas até reparos avançados e upgrades de hardware. Nossa equipe com mais de 25 anos de experiência garante que seu equipamento volte a funcionar com desempenho máximo.",
    features: [
      "Diagnóstico completo de hardware e software",
      "Limpeza interna e troca de pasta térmica",
      "Upgrade de memória RAM, SSD e placa de vídeo",
      "Formatação e instalação de sistema operacional",
      "Otimização de desempenho e velocidade",
      "Substituição de fontes e componentes danificados",
    ],
  },
  {
    slug: "reparo-de-notebooks",
    image: serviceNotebook,
    title: "Reparo de Notebooks",
    description: "Troca de tela, teclado, bateria, reparos na placa-mãe, recuperação de carcaça e dobradiças.",
    longDescription:
      "Somos especialistas em reparo de notebooks de todas as marcas e modelos. Realizamos desde trocas simples de componentes até reparos complexos na placa-mãe, sempre utilizando peças de qualidade e garantindo o melhor custo-benefício para nossos clientes.",
    features: [
      "Troca de tela LCD/LED e touch screen",
      "Substituição de teclado e touchpad",
      "Troca e calibração de bateria",
      "Reparo e reballing de placa-mãe",
      "Recuperação de carcaça e dobradiças",
      "Limpeza interna e troca de cooler",
    ],
  },
  {
    slug: "recuperacao-de-dados",
    image: serviceData,
    title: "Recuperação de Dados",
    description: "Recuperação de arquivos em HDs, SSDs e pendrives danificados.",
    longDescription:
      "Perdeu arquivos importantes? Nossa equipe utiliza ferramentas profissionais e técnicas avançadas para recuperar dados de dispositivos danificados, formatados ou com falhas mecânicas. Trabalhamos com HDs, SSDs, pendrives e cartões de memória.",
    features: [
      "Recuperação de HDs com defeito mecânico",
      "Recuperação de SSDs e pendrives",
      "Resgate de dados após formatação acidental",
      "Recuperação de partições perdidas",
      "Backup e migração de dados",
      "Diagnóstico gratuito do dispositivo",
    ],
  },
  {
    slug: "seguranca-digital",
    image: serviceSecurity,
    title: "Segurança Digital",
    description: "Remoção de vírus e proteção contra ameaças online.",
    longDescription:
      "Proteja seus dados e equipamentos contra vírus, malwares, ransomwares e outras ameaças digitais. Oferecemos soluções completas de segurança, desde a remoção de ameaças até a implementação de sistemas de proteção contínua para residências e empresas.",
    features: [
      "Remoção completa de vírus e malwares",
      "Instalação e configuração de antivírus",
      "Proteção contra ransomware",
      "Configuração de firewall",
      "Consultoria em segurança digital",
      "Backup seguro de dados sensíveis",
    ],
  },
  {
    slug: "manutencao-preventiva",
    image: serviceMaintenance,
    title: "Manutenção Preventiva",
    description: "Planos de manutenção para empresas. Evite problemas.",
    longDescription:
      "Prevenir é sempre melhor que remediar. Nossos planos de manutenção preventiva são ideais para empresas que dependem de seus equipamentos no dia a dia. Realizamos visitas periódicas, limpezas, atualizações e monitoramento para evitar paradas inesperadas.",
    features: [
      "Planos mensais e trimestrais para empresas",
      "Limpeza e otimização periódica",
      "Atualização de software e drivers",
      "Monitoramento de desempenho",
      "Relatórios técnicos detalhados",
      "Atendimento prioritário em emergências",
    ],
  },
  {
    slug: "assistencia-tecnica-impressoras",
    image: servicePrinter,
    title: "Assistência Técnica em Impressoras",
    description: "Manutenção, reparo e configuração de impressoras de todas as marcas.",
    longDescription:
      "Oferecemos assistência técnica completa para impressoras jato de tinta, laser e multifuncionais de todas as marcas. Desde a instalação e configuração até reparos complexos, garantimos que sua impressora funcione perfeitamente.",
    features: [
      "Reparo de impressoras jato de tinta e laser",
      "Configuração e instalação em rede",
      "Troca de cabeça de impressão",
      "Limpeza e manutenção preventiva",
      "Configuração de drivers e software",
      "Suporte para impressoras multifuncionais",
    ],
  },
];
