const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif text-lg font-bold text-gradient-gold">
              SEM Coffee
            </span>
            <p className="font-sans text-xs text-muted-foreground mt-1">
              PT. Sukses Ekspor Mandiri — Direct Coffee Exporter, Indonesia
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              About
            </a>
            <a href="#products" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              Products
            </a>
            <a href="#process" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              Process
            </a>
            <a href="#contact" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} PT. Sukses Ekspor Mandiri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
