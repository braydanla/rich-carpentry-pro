import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Home, Layers, PenTool } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Crown Molding",
    description: "Elegant crown molding installations that add architectural beauty and value to any room.",
  },
  {
    icon: Home,
    title: "Custom Cabinetry",
    description: "Handcrafted cabinets designed to maximize space and complement your unique style.",
  },
  {
    icon: Layers,
    title: "Trim & Baseboards",
    description: "Precision trim work that provides the perfect finishing touch to your interiors.",
  },
  {
    icon: PenTool,
    title: "Built-in Solutions",
    description: "Custom built-ins, shelving, and entertainment centers tailored to your needs.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Premium Finish Carpentry{" "}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we deliver exceptional craftsmanship that transforms 
            ordinary spaces into extraordinary living environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <GlassCard
              key={service.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
