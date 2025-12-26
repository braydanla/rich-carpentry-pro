import { GlassCard } from "@/components/ui/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "The crown molding transformed our living room completely. The attention to detail was incredible—every corner, every joint was perfect. Truly exceptional work.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    content: "I've worked with many carpenters, but Live Rich stands out. Their custom cabinetry work exceeded my client's expectations. Highly professional from start to finish.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    content: "From the first consultation to final installation, the experience was seamless. Our built-in entertainment center is now the centerpiece of our home.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="text-gradient-gold">Clients</span>{" "}
            Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it—hear from homeowners who've experienced 
            the Live Rich difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard
              key={testimonial.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
