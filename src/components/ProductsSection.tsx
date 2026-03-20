import candleholdersCone from "@/assets/products/candleholders-cone.jpg";
import elephants from "@/assets/products/elephants.jpg";
import vases from "@/assets/products/vases.jpg";
import leafTrays from "@/assets/products/leaf-trays.jpg";
import organicBowls from "@/assets/products/organic-bowls.jpg";
import trays from "@/assets/products/trays.jpg";
import bowls from "@/assets/products/bowls.jpg";
import candlesticks from "@/assets/products/candlesticks.jpg";
import sculptureDancers from "@/assets/products/sculpture-dancers.jpg";

const products = [
  { name: "Conical Candle Holders", category: "", image: candleholdersCone },
  { name: "Decorative Vases", category: "", image: vases },
  { name: "Elephant Figurines", category: "Décor Accents", image: elephants },
  { name: "Leaf Platters", category: "", image: leafTrays },
  { name: "Organic Bowls", category: "", image: organicBowls },
  { name: "Serving Trays", category: "", image: trays },
  { name: "Artisan Bowls", category: "", image: bowls },
  { name: "Beaded Candlesticks", category: "", image: candlesticks },
  { name: "Bronze Sculpture", category: "Art & Sculpture", image: sculptureDancers },
];

const ProductsSection = () => (
  <section id="products" className="py-24 lg:py-32 bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">Our Collection</p>
        <h2 className="font-display text-4xl lg:text-5xl font-light">
          Handcrafted <span className="text-gradient-gold">Products</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Explore our range of , glass, and iron home accessories — each piece crafted with precision and artistry.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="group relative overflow-hidden rounded bg-card border border-border hover:border-primary/30 transition-all duration-500"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-primary text-xs tracking-widest uppercase mb-1">{p.category}</p>
              <h3 className="font-display text-xl text-foreground">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#contact"
          className="bg-gradient-gold text-primary-foreground px-8 py-3.5 text-sm font-semibold tracking-widest uppercase rounded inline-block hover:opacity-90 transition-all"
        >
          Enquire About Products
        </a>
      </div>
    </div>
  </section>
);

export default ProductsSection;
