import { MessageSquare, Zap, Receipt, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "No middlemen or confusing chains. You work directly with me throughout the project for faster decisions and clearer understanding.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "I value your time. Most projects are completed within 5-7 business days, so you can launch your online presence quickly.",
  },
  {
    icon: Receipt,
    title: "Simple Pricing",
    description:
      "Transparent, fixed pricing with no hidden costs. You know exactly what you're paying before we start.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Launch Support",
    description:
      "I don't disappear after delivery. Get continued support for updates, fixes, and guidance as your business grows.",
  },
];

export const WhyChooseMe = () => {
  return (
    <section id="why-me" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What sets my service apart from agencies and DIY builders
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <reason.icon
                  size={26}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
