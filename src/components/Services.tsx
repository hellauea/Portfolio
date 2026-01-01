import { Globe, Palette, LayoutDashboard, Bot, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional sites that convert visitors into customers",
  },
  {
    icon: Palette,
    title: "Premium Brand Websites",
    description: "Stunning designs that elevate your brand identity",
  },
  {
    icon: LayoutDashboard,
    title: "Web Apps & Dashboards",
    description: "Interactive applications with powerful functionality",
  },
  {
    icon: Bot,
    title: "AI-Powered Websites",
    description: "Smart sites with chatbots, automation & intelligence",
  },
  {
    icon: Settings,
    title: "Custom Systems",
    description: "Tailored solutions for unique business needs",
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display-sm md:text-display-md text-center font-bold mb-4">
          What I Can Build
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 md:mb-16">
          If it exists on the internet — I can build it.
        </p>

        <div className="space-y-4 md:space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group p-6 md:p-8 rounded-2xl bg-card border border-border transition-all duration-500 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
