import { MapPin } from "lucide-react";

const ADDRESS = "Av. Brigadeiro Mário Epinghaus, 329, Centro, Lauro de Freitas - BA";

const Location = () => {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

  return (
    <section id="localizacao" className="py-16 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2">
            <MapPin className="w-5 h-5" />
            <span>Onde Estamos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Localização da Loja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {ADDRESS} — CEP 42703-640
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-soft border border-border max-w-4xl mx-auto">
          <div className="bg-muted px-4 py-2 font-semibold text-foreground">Mapa</div>
          <iframe
            title="Mapa da loja APL Informática"
            src={mapSrc}
            className="w-full h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-8">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-soft hover:shadow-hover transition-shadow"
          >
            <MapPin className="w-5 h-5" />
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
