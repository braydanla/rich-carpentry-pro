import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-carpentry.jpg";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const openCalendly = () => {
  window.Calendly?.initPopupWidget({ url: 'https://calendly.com/sean_golley/30min' });
};

const heroFeatures = [
  "Premium craftsmanship",
  "Licensed & insured",
  "Free consultations",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-glow overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium custom cabinetry and finish carpentry work"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Precision Finish Carpentry</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-delay-1">
            Craftsmanship That{" "}
            <span className="text-gradient-gold">Enriches</span>{" "}
            Your Space
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in-delay-2">
            Transform your home with premium finish carpentry. From custom cabinetry to 
            elegant trim work, we deliver meticulous craftsmanship that reflects the richness 
            of your vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-3">
            <Button variant="hero" size="xl" onClick={openCalendly}>
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/services">
                See What We Do
              </Link>
            </Button>
          </div>

          {/* Feature List */}
          <div className="flex flex-wrap gap-6 animate-fade-in-delay-3">
            {heroFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
