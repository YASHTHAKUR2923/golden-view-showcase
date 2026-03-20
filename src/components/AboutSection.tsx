import sculptureImg from "@/assets/products/horse face.jpeg";

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded">
            <img src={sculptureImg} alt="Bronze sculpture" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded hidden lg:block" />
        </div>

        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">Who We Are</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light mb-6">
            Crafting <span className="text-gradient-gold">Excellence</span> Since Generations
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are a reliable partner in providing beautifully crafted home accessories made in India and delivered worldwide. Our work is driven by a deep appreciation for skilled craftsmanship, detailed design, responsible manufacturing practices, and long-term business relationships.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Our brand is organized into two main divisions: <span className="text-foreground font-medium">Décor & Accent Furniture</span>, each focusing on specialized product categories. This structured approach strengthens our production capabilities and allows us to maintain high quality.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-display text-3xl text-gradient-gold font-semibold">50+</p>
              <p className="text-muted-foreground text-sm mt-1">Product Categories</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gradient-gold font-semibold">Global</p>
              <p className="text-muted-foreground text-sm mt-1">Export Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
