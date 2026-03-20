import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "(not provided)";
    const email = formData.get("email")?.toString().trim() || "(not provided)";
    const company = formData.get("company")?.toString().trim() || "(not provided)";
    const country = formData.get("country")?.toString().trim() || "(not provided)";
    const message = formData.get("message")?.toString().trim() || "(not provided)";

    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0ACountry: ${country}%0A%0AMessage:%0A${message}`
    );

    const recipient = "info@vashishthami.in";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-[0.4em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light">
            Send an <span className="text-gradient-gold">Enquiry</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Interested in our products? Share your requirements and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4 items-start">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">info@vashishthami.in</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground text-sm">+919289507845</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">vasant vihar near radhika farm house khushalpur, delhi road moradabad ,India</p>
              </div>
            </div>

            <div className="border border-border rounded p-6 mt-8">
              <p className="text-xs tracking-widest uppercase text-primary mb-3">Business Terms</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="text-foreground">MOQ:</span> 50 pcs</p>
                <p><span className="text-foreground">MOV:</span> $10,000 USD</p>
                <p><span className="text-foreground">Sampling:</span> 25-30 days</p>
                <p><span className="text-foreground">Production:</span> 90-120 days</p>
                <p><span className="text-foreground">Payment:</span> 30% advance, 70% T/T</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-card border border-border rounded p-12 text-center">
                <div>
                  <p className="text-primary text-2xl font-display mb-2">Thank You!</p>
                  <p className="text-muted-foreground text-sm">We'll respond to your enquiry shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your enquiry — products of interest, quantities, customization needs..."
                  className="w-full bg-card border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary-foreground py-3.5 text-sm font-semibold tracking-widest uppercase rounded hover:opacity-90 transition-all"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
