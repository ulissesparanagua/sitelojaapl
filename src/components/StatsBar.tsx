const StatsBar = () => {
  const stats = [
    { value: "15+", label: "Anos de Experiência" },
    { value: "5.000+", label: "Clientes Atendidos" },
    { value: "98%", label: "Taxa de Satisfação" },
    { value: "24h", label: "Tempo Médio de Reparo" },
  ];

  return (
    <section className="bg-primary py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
