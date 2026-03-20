import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo new.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="VMI Logo" className="h-12 w-12 object-contain rounded" />
          <div>
            <span className="text-gradient-gold font-display text-xl font-semibold tracking-wider">
              Vashishtha Metals
            </span>
            <span className="block text-xs text-muted-foreground tracking-[0.3em] uppercase">Impex</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded transition-all hover:opacity-90"
        >
          Enquire Now
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-gold/10 animate-fade-in">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
