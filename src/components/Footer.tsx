import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif text-lg font-bold text-gradient-gold">
              Coffee Supplier Indonesia
            </span>
            <p className="font-sans text-xs text-muted-foreground mt-1">
              {t("footer.company")}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              {t("nav.about")}
            </a>
            <a href="#product" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              {t("nav.product")}
            </a>
            <a href="#process" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              {t("nav.process")}
            </a>
            <a href="#contact" className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              {t("nav.contact")}
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
