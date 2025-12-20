import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Basic Static Website",
    price: "₹3,499",
    description: "Perfect for personal portfolios and simple business pages",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "5-day delivery",
    ],
    popular: false,
  },
  {
    name: "Premium Static Website",
    price: "₹4,999",
    description: "Ideal for businesses wanting to make a strong impression",
    features: [
      "Up to 5 pages",
      "Premium design & animations",
      "Mobile-responsive design",
      "Contact form + WhatsApp integration",
      "Full SEO optimization",
      "Image gallery",
      "2 rounds of revisions",
      "7-day delivery",
    ],
    popular: true,
  },
  {
    name: "Custom / WordPress",
    price: "Let's Discuss",
    description: "For complex requirements and dynamic websites",
    features: [
      "Custom design & features",
      "WordPress CMS setup",
      "Blog or e-commerce",
      "Admin panel training",
      "Ongoing support options",
      "Tailored to your needs",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-4">
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full gap-2 ${
                    plan.popular ? "" : "variant-outline"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a
                    href="https://wa.me/919606664929"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * WordPress and custom project pricing varies based on requirements
        </p>
      </div>
    </section>
  );
};
