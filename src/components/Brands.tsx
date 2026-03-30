const brands = [
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png" },
  { name: "Vaio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VAIO_logo.svg/200px-VAIO_logo.svg.png" },
  { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/200px-ASUS_Logo.svg.png" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png" },
  { name: "ThinkPad", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_ThinkPad_logo_%282021%29.svg/200px-Lenovo_ThinkPad_logo_%282021%29.svg.png" },
  { name: "Positivo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Logo_Positivo_Tecnologia.svg/200px-Logo_Positivo_Tecnologia.svg.png" },
  { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png" },
  { name: "STI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/STI_logo.svg/200px-STI_logo.svg.png" },
  { name: "Avell", logo: "https://avell.com.br/media/logo/stores/1/logo-avell.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png" },
];

const Brands = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Marcas Atendidas
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Trabalhamos com as <span className="text-primary">principais marcas</span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
