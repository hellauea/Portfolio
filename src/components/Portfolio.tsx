import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Twinkling Petals",
    url: "https://twinklingpetals.com",
    description: "A beautiful floral brand website with elegant design",
  },
  {
    name: "Little Junior DPS",
    url: "https://littlejuniordps.com",
    description: "Professional school website with modern functionality",
  },
];

const Portfolio = () => {
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
    <section className="py-20 md:py-28 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display-sm md:text-display-md text-center font-bold mb-4">
          Past Work
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 md:mb-16">
          Real projects. Real results.
        </p>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative overflow-hidden rounded-2xl bg-card border border-border p-6 md:p-8 transition-all duration-500 hover:border-primary/50 hover:glow-subtle ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <p className="mt-2 text-sm text-primary/80">{project.url}</p>
                  </div>
                  <div className="shrink-0 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
