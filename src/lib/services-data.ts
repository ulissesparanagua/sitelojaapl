import servicePC from "@/assets/service-pc.jpg";
import serviceNotebook from "@/assets/service-notebook-new.jpg";
import serviceData from "@/assets/service-data.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceCartridge from "@/assets/service-cartridge.jpg";
import servicePrinter from "@/assets/service-printer.jpg";
import detailPC from "@/assets/detail-pc.jpg";
import detailNotebook from "@/assets/service-notebook-new.jpg";
import detailData from "@/assets/detail-data.jpg";
import detailSecurity from "@/assets/detail-security.jpg";
import detailCartridge from "@/assets/detail-cartridge.jpg";
import detailPrinter from "@/assets/detail-printer.jpg";

export interface ServiceData {
  slug: string;
  image: string;
  detailImage: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "manutencao-de-computadores",
    image: servicePC,
    detailImage: detailPC,
    title: "Manutenção de Computadores",
    description: "Diagnóstico, reparo e upgrade de desktops. Limpeza interna e otimização.",
    fullDescription: "Oferecemos serviços completos de manutenção de computadores desktop, desde diagnóstico avançado até reparos complexos em hardware e software. Nossa equipe com mais de 25 anos de experiência garante soluções eficientes para manter seu computador funcionando com máximo desempenho.",
    features: [
      "Diagnóstico completo de hardware e software",
      "Troca e upgrade de processador, memória RAM e HD/SSD",
      "Substituição de fonte de alimentação e placa-mãe",
      "Limpeza interna e troca de pasta térmica",
      "Formatação e instalação de sistema operacional",
      "Otimização de desempenho e inicialização",
      "Instalação e configuração de periféricos",
      "Montagem de computadores sob medida",
    ],
  },
  {
    slug: "reparo-de-notebooks",
    image: serviceNotebook,
    detailImage: detailNotebook,
    title: "Reparo de Notebooks",
    description: "Troca de tela, teclado, bateria, reparos na placa-mãe, recuperação de carcaça e dobradiças.",
    fullDescription: "Somos especialistas em reparo de notebooks de todas as marcas. Realizamos desde trocas simples de componentes até reparos avançados em placa-mãe com micro-soldagem. Trabalhamos com peças originais e compatíveis de alta qualidade.",
    features: [
      "Troca de tela LCD/LED e touchscreen",
      "Substituição de teclado e touchpad",
      "Troca e recondicionamento de bateria",
      "Reparo e micro-soldagem de placa-mãe",
      "Recuperação de carcaça e dobradiças",
      "Troca de conector de carga (DC Jack)",
      "Upgrade de memória RAM e armazenamento SSD",
      "Limpeza do sistema de refrigeração e troca de cooler",
    ],
  },
  {
    slug: "recuperacao-de-dados",
    image: serviceData,
    detailImage: detailData,
    title: "Recuperação de Dados",
    description: "Recuperação de arquivos em HDs, SSDs e pendrives danificados.",
    fullDescription: "Recuperamos seus dados perdidos em HDs, SSDs, pendrives e cartões de memória. Utilizamos ferramentas profissionais e técnicas avançadas para recuperar arquivos de dispositivos com falhas mecânicas, lógicas ou danos físicos.",
    features: [
      "Recuperação de HD com defeito mecânico",
      "Recuperação de SSD com falha lógica",
      "Recuperação de dados de pendrives e cartões SD",
      "Recuperação após formatação acidental",
      "Recuperação de arquivos deletados",
      "Recuperação de dados de RAID e servidores",
      "Diagnóstico gratuito do dispositivo",
      "Sigilo total dos dados recuperados",
    ],
  },
  {
    slug: "seguranca-digital",
    image: serviceSecurity,
    detailImage: detailSecurity,
    title: "Segurança Digital",
    description: "Remoção de vírus e proteção contra ameaças online.",
    fullDescription: "Proteja seus dispositivos e dados contra vírus, malwares, ransomware e outras ameaças digitais. Oferecemos soluções completas de segurança para residências e empresas, incluindo instalação de antivírus, firewalls e políticas de segurança.",
    features: [
      "Remoção completa de vírus e malwares",
      "Instalação e configuração de antivírus profissional",
      "Proteção contra ransomware e phishing",
      "Configuração de firewall e rede segura",
      "Backup automatizado de dados importantes",
      "Consultoria em segurança digital para empresas",
      "Recuperação de sistemas infectados",
      "Orientação sobre práticas seguras na internet",
    ],
  },
  {
    slug: "recarga-de-cartuchos",
    image: serviceCartridge,
    detailImage: detailCartridge,
    title: "Recarga de Cartuchos de Tinta e Toner",
    description: "Recarga de cartuchos HP 667 e toner HP 85A, 105A e 505A com qualidade garantida.",
    fullDescription: "Realizamos recarga de cartuchos de tinta HP 667 e toner HP 85A, 105A e 505A, além de outros modelos das marcas HP, Canon e Brother. Utilizamos insumos de alta qualidade que garantem impressões nítidas e duráveis, com economia de até 70% em relação aos cartuchos originais novos.",
    features: [
      "Recarga de cartuchos de tinta HP, Canon e Brother",
      "Recarga de toner para impressoras laser",
      "Insumos de alta qualidade e procedência garantida",
      "Economia de até 70% comparado ao original",
      "Teste de qualidade de impressão após recarga",
      "Troca de chip e peças de desgaste quando necessário",
      "Garantia na recarga realizada",
      "Atendimento rápido com entrega no mesmo dia",
    ],
  },
  {
    slug: "assistencia-tecnica-impressoras",
    image: servicePrinter,
    detailImage: detailPrinter,
    title: "Assistência Técnica em Impressoras",
    description: "Manutenção, reparo e configuração de impressoras de todas as marcas.",
    fullDescription: "Prestamos assistência técnica completa em impressoras jato de tinta, laser e multifuncionais de todas as marcas. Desde manutenção preventiva até reparos complexos, garantimos que sua impressora funcione com qualidade e eficiência.",
    features: [
      "Reparo de impressoras jato de tinta e laser",
      "Manutenção de multifuncionais e copiadoras",
      "Troca de cabeça de impressão e fusores",
      "Configuração de impressoras em rede",
      "Instalação de drivers e software",
      "Limpeza e calibração de qualidade de impressão",
      "Substituição de peças e componentes",
      "Atendimento para marcas como: HP, Canon, Brother, Samsung",
    ],
  },
];
