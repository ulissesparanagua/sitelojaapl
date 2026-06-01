import dellLogo from "@/assets/brands/dell.svg";
import hpLogo from "@/assets/brands/hp.svg";
import asusLogo from "@/assets/brands/asus.svg";
import lenovoLogo from "@/assets/brands/lenovo.svg";
import acerLogo from "@/assets/brands/acer.svg";
import samsungLogo from "@/assets/brands/samsung.svg";
import lgLogo from "@/assets/brands/lg.svg";
import appleLogo from "@/assets/brands/apple.svg";
import toshibaLogo from "@/assets/brands/toshiba.svg";
import sonyLogo from "@/assets/brands/sony.svg";
import thinkpadLogo from "@/assets/brands/thinkpad.png.asset.json";

const brands = [
  { name: "Dell", logo: dellLogo },
  { name: "HP", logo: hpLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "Asus", logo: asusLogo },
  { name: "Acer", logo: acerLogo },
  { name: "Apple", logo: appleLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "LG", logo: lgLogo },
  { name: "Toshiba", logo: toshibaLogo },
  { name: "Sony Vaio", logo: sonyLogo },
  { name: "ThinkPad", logo: thinkpadLogo },
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
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            Atendimento especializado para notebooks de todos os fabricantes
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="h-10 md:h-12 w-auto object-contain"
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
