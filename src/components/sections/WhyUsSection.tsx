import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Shield, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Satisfaction Rate" },
  { icon: Shield, value: "Licensed", label: "& Insured" },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Where Inner{" "}
              <span className="text-gradient-gold">Richness</span>{" "}
              Meets Craftsmanship
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Live Rich Finish Carpentry, we believe true wealth comes from 
              surrounding yourself with quality. Our name reflects our values—craftsmanship 
              that enriches your life, not just your home.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Meticulous attention to every detail",
                "Premium materials and techniques",
                "Transparent communication throughout",
                "On-time project completion",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                Learn Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-8 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
