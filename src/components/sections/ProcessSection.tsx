import { GlassCard } from "@/components/ui/GlassCard";
import { ClipboardCheck, PenLine, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Consultation",
    description: "We visit your home in Guelph, Kitchener, Waterloo, or Cambridge to understand your vision, assess the space, and discuss your goals for the project.",
  },
  {
    icon: PenLine,
    step: "02",
    title: "Custom Design",
    description: "Our team creates detailed plans tailored to your specifications, including material selections, finishes, and a transparent timeline with accurate pricing.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Expert Installation",
    description: "Our skilled craftsmen bring your vision to life with meticulous attention to detail. We work efficiently while maintaining the highest standards of quality.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Final Walkthrough",
    description: "We conduct a thorough inspection with you to ensure every detail meets your expectations. Your satisfaction is our measure of success.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How We Bring Your{" "}
            <span className="text-gradient-gold">Vision</span>{" "}
            to Life
          </h2>
          <p className="text-muted-foreground text-lg">
            From the initial consultation to the final walkthrough, our proven four-step process 
            ensures a seamless experience and exceptional results for every finish carpentry project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <GlassCard
              key={step.title}
              className="animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10">
                {step.step}
              </div>
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
