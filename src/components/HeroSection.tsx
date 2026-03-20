import heroImg from "@/assets/products/vases.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Handcrafted metal vases" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-28 pb-20">
      <div className="max-w-2xl">
        <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
          Indian Craftsmanship · Global Delivery
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Artisan Metal{" "}
          <span className="text-gradient-gold font-medium">Décor</span>{" "}
          for the World
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Beautifully crafted home accessories in , iron, and glass — designed in India, delivered worldwide.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#products"
            className="bg-gradient-gold text-primary-foreground px-8 py-3.5 text-sm font-semibold tracking-widest uppercase rounded transition-all hover:opacity-90"
          >
            View Collection
          </a>
          <a
            href="#contact"
            className="border border-gold/30 text-primary px-8 py-3.5 text-sm font-semibold tracking-widest uppercase rounded hover:bg-primary/10 transition-all"
          >
            Send Enquiry
          </a>
        </div>
      </div>
    </div>

    {/* Decorative line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  </section>
);

export default HeroSection;
