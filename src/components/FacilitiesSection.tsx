import { Factory, Flame, Sparkles, Shield, Package, Wrench, Search } from "lucide-react";

const facilities = [
  { icon: Factory, label: "Moulding" },
  { icon: Flame, label: "Casting" },
  { icon: Wrench, label: "Welding" },
  { icon: Sparkles, label: "Polishing & Grinding" },
  { icon: Shield, label: "Powder Coating & Electroplating" },
  { icon: Search, label: "Self Inspection" },
  { icon: Package, label: "Customized Packaging" },
];

const materials = ["Aluminium", "Glass", "Iron", "Marble"];

const FacilitiesSection = () => (
  <section id="facilities" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">Our Capabilities</p>
        <h2 className="font-display text-4xl lg:text-5xl font-light">
          Production <span className="text-gradient-gold">Facilities</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {facilities.map((f) => (
          <div key={f.label} className="p-6 bg-card border border-border rounded text-center hover:border-primary/30 hover:glow-gold transition-all duration-300">
            <f.icon className="mx-auto mb-4 text-primary" size={28} strokeWidth={1.5} />
            <p className="text-sm tracking-wider uppercase text-foreground">{f.label}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Materials We Work With</p>
        <div className="flex flex-wrap justify-center gap-4">
          {materials.map((m) => (
            <span key={m} className="px-6 py-2 border border-primary/20 rounded text-primary text-sm tracking-wider">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
