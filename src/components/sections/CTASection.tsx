import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { BookingModal } from "@/components/BookingModal";

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
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how premium finish 
            carpentry can transform your space. No obligation, just expert advice.
          </p>
          <p className="text-muted-foreground text-base mb-10 max-w-2xl mx-auto">
            During your consultation, we'll visit your home in Guelph, Kitchener, Waterloo, 
            or Cambridge to discuss your vision, take measurements, and provide a detailed 
            estimate. Most consultations take about 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal>
              <Button variant="hero" size="xl">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </BookingModal>
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
