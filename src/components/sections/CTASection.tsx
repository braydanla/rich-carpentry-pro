import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

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

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Ready to Start?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Something{" "}
            <span className="text-gradient-gold">Beautiful</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how premium finish 
            carpentry can transform your space. No obligation, just expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={openCalendly}>
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:+15198275789">
                <Phone className="mr-2 h-5 w-5" />
                (519) 827-5789
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
