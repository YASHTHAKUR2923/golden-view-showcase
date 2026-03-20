const VisionSection = () => (
  <section className="py-24 lg:py-32 bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">Vision</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
            Globally <span className="text-gradient-gold">Recognized</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To be a globally recognized handicrafts export house, showcasing the richness of Indian craftsmanship through innovative designs and superior quality products.
          </p>
        </div>

        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">Mission</p>
          <h2 className="font-display text-3xl lg:text-4xl font-light mb-6">
            Quality <span className="text-gradient-gold">Commitment</span>
          </h2>
          <ul className="space-y-3">
            {[
              "Create and export high-quality handcrafted products meeting global standards",
              "Support and empower skilled artisans while preserving traditional craftsmanship",
              "Deliver innovative designs aligned with international trends",
              "Ensure timely delivery, competitive pricing, and customer satisfaction",
              "Follow sustainable and ethical manufacturing practices",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default VisionSection;
