import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o prazo médio para conserto de um notebook?",
      answer: "O prazo médio varia de 24 a 72 horas, dependendo da complexidade do problema e disponibilidade de peças. Para reparos simples, como troca de tela ou teclado, geralmente entregamos em 24 horas.",
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer: "Sim! Todos os nossos serviços possuem garantia de 90 dias. Peças substituídas têm garantia do fabricante, que pode variar de 6 meses a 1 ano.",
    },
    {
      question: "É possível recuperar dados de um HD formatado?",
      answer: "Na maioria dos casos, sim. Utilizamos ferramentas profissionais de recuperação de dados que conseguem restaurar arquivos mesmo após formatação. A taxa de sucesso depende do estado do dispositivo.",
    },
    {
      question: "Vocês atendem empresas com contrato mensal?",
      answer: "Sim! Oferecemos planos de manutenção preventiva para empresas, com visitas periódicas, suporte prioritário e descontos em peças e serviços.",
    },
    {
      question: "Como funciona o orçamento?",
      answer: "O orçamento é gratuito e sem compromisso. Você pode trazer o equipamento até nossa loja ou solicitar uma visita técnica. Após a análise, enviamos o orçamento detalhado por WhatsApp ou e-mail.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Respostas para suas{" "}
              <span className="text-primary">dúvidas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Reunimos as perguntas mais comuns dos nossos clientes. 
              Se não encontrar o que procura, entre em contato conosco.
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Fale conosco →
            </a>
          </div>

          {/* Right - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
