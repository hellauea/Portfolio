import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Twinkling Petals",
    subtitle: "Pre School & Day Care",
    description:
      "A warm, inviting website designed to showcase the nurturing environment of Twinkling Petals. Features include program information, gallery, enrollment details, and parent testimonials—all presented with playful yet professional aesthetics that appeal to parents seeking quality early childhood education.",
    tags: ["Education", "Responsive", "Gallery"],
    url: "https://twinklingpetals.com",
  },
  {
    title: "Little Junior DPS",
    subtitle: "Pre School",
    description:
      "A modern, trustworthy website for Little Junior DPS that highlights their curriculum, facilities, and admission process. The clean design focuses on building parent confidence with clear navigation, staff profiles, and an easy-to-use contact system for inquiries.",
    tags: ["Education", "Professional", "Mobile-First"],
    url: "https://littlejuniordps.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Websites I've built for local businesses and institutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Clickable Project Preview */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 cursor-pointer"
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="text-primary" size={28} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      View Live Website
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-primary/15 blur-xl" />
              </a>

              <CardContent className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
