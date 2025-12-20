import { MessageCircle, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8">
            Ready to get your business online? Have questions about my services?
            I'd love to hear from you.
          </p>

          {/* Primary CTA */}
          <Button asChild size="lg" className="gap-2 px-8 mb-8">
            <a
              href="https://wa.me/9606664929"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
          </Button>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a
              href="mailto:prathap.v5214@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">prathap,v5214@gmail.com</span>
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
          </div>

          {/* Availability Note */}
          <p className="text-xs text-muted-foreground mt-8">
            Usually respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
