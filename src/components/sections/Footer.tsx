export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} V Prathap. All rights reserved.
          </p>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
