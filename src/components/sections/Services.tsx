import { Globe, Sparkles, Code2, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Basic Static Websites",
    description:
      "Clean, fast-loading websites perfect for small businesses, portfolios, and personal brands. Mobile-responsive and SEO-friendly.",
  },
  {
    icon: Sparkles,
    title: "Premium Static Websites",
    description:
      "Enhanced designs with custom animations, advanced layouts, and premium features. Ideal for businesses wanting to stand out.",
  },
  {
    icon: Code2,
    title: "WordPress Websites",
    description:
      "Dynamic, content-managed websites with WordPress. Easy to update yourself with blog, gallery, and e-commerce options.",
  },
  {
    icon: Wrench,
    title: "Website Redesign & Fixes",
    description:
      "Revamp your outdated website or fix issues with performance, mobile responsiveness, and user experience.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish a professional online presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-background"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
