import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="VMI" className="h-10 w-10 object-contain rounded" />
          <span className="text-gradient-gold font-display text-lg tracking-wider">Vashishtha Metals Impex</span>
        </div>
        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} Vashishtha Metals Impex. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
