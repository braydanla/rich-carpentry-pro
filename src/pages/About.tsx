import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Heart, Shield, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Inner Richness",
    description: "We believe true wealth comes from quality of life, not just material possessions. Our work enriches your daily living experience.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every cut, every joint, every finish is executed with meticulous attention to detail. We don't cut corners—we perfect them.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest pricing, transparent communication, and standing behind our work. Your trust is earned through our actions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you, not just for you. Your vision guides our hands, creating spaces that truly reflect who you are.",
  },
];

const timeline = [
  { step: "01", title: "Consultation", description: "We discuss your vision, needs, and budget in a free consultation." },
  { step: "02", title: "Design", description: "Our team creates detailed plans and specifications for your approval." },
  { step: "03", title: "Crafting", description: "Expert craftsmen bring your project to life with premium materials." },
  { step: "04", title: "Installation", description: "Precise installation with minimal disruption to your daily life." },
  { step: "05", title: "Perfection", description: "Final walkthrough ensures every detail meets our exacting standards." },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Live Rich Finish Carpentry | Guelph's Trusted Carpenters"
        description="Meet Guelph's premier finish carpentry team. 15+ years experience, 500+ projects completed. Licensed & insured craftsmen serving Kitchener-Waterloo region."
        keywords="finish carpentry company Guelph, trusted carpenters Ontario, experienced woodworkers Kitchener, quality craftsmanship Waterloo"
        canonicalUrl="https://liverichcarpentry.com/about"
        ogImage="https://liverichcarpentry.com/og-image.jpg"
      />
      <Layout>
        {/* Hero Section */}
        <section className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Crafting{" "}
                <span className="text-gradient-gold">Excellence</span>{" "}
                Since Day One
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Live Rich Finish Carpentry was founded on a simple belief: the spaces we 
                inhabit should reflect the richness of our inner lives. We're not just 
                carpenters—we're artisans dedicated to transforming houses into homes 
                that inspire.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "50+", label: "5-Star Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Our Values */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                  Our Values
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  What Drives Us
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <GlassCard
                    key={value.title}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className="animate-fade-in-up"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div id="process" className="scroll-mt-24">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                  Our Process
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  From Vision to Reality
                </h2>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
                
                <div className="space-y-8 lg:space-y-0">
                  {timeline.map((item, index) => (
                    <div
                      key={item.step}
                      className={`lg:flex items-center gap-8 ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                        <GlassCard className="inline-block w-full lg:max-w-md">
                          <div className="text-primary font-bold text-sm mb-2">Step {item.step}</div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </GlassCard>
                      </div>
                      <div className="hidden lg:flex w-10 h-10 rounded-full bg-primary items-center justify-center text-primary-foreground font-bold text-sm z-10">
                        {item.step}
                      </div>
                      <div className="lg:w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-24 text-center">
              <div className="glass-card p-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can bring your vision to life.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
