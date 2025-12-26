import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Crown, Home, Layers, PenTool, Hammer, Ruler } from "lucide-react";

const services = [
  {
    id: "crown-molding",
    icon: Crown,
    title: "Crown Molding",
    description: "Elegant crown molding installations that add architectural beauty and sophistication to any room. Our expert craftsmen ensure seamless corners and flawless transitions.",
    features: ["Custom profiles", "Inside & outside corners", "Multi-piece installations", "Paint-grade & stain-grade options"],
  },
  {
    id: "cabinetry",
    icon: Home,
    title: "Custom Cabinetry",
    description: "Handcrafted cabinets designed to maximize space and complement your unique style. From kitchen to bathroom, we create storage solutions that are both beautiful and functional.",
    features: ["Kitchen cabinets", "Bathroom vanities", "Laundry rooms", "Custom finishes"],
  },
  {
    id: "trim",
    icon: Layers,
    title: "Trim & Baseboards",
    description: "Precision trim work that provides the perfect finishing touch to your interiors. Our attention to detail ensures clean lines and professional results every time.",
    features: ["Baseboard installation", "Door & window casing", "Chair rails", "Wainscoting"],
  },
  {
    id: "built-ins",
    icon: PenTool,
    title: "Built-in Solutions",
    description: "Custom built-ins, shelving, and entertainment centers tailored to your specific needs and space. Maximize your home's functionality with beautiful, integrated storage.",
    features: ["Entertainment centers", "Bookshelves", "Window seats", "Closet systems"],
  },
  {
    id: "millwork",
    icon: Hammer,
    title: "Custom Millwork",
    description: "From mantels to coffered ceilings, our custom millwork adds distinctive character to your home. Each piece is crafted with precision and artistry.",
    features: ["Fireplace mantels", "Coffered ceilings", "Decorative columns", "Custom moldings"],
  },
  {
    id: "restoration",
    icon: Ruler,
    title: "Wood Restoration",
    description: "Breathe new life into existing woodwork with our restoration services. We repair, refinish, and restore vintage and antique pieces to their original glory.",
    features: ["Antique restoration", "Refinishing", "Damage repair", "Color matching"],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Finish Carpentry",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Live Rich Finish Carpentry",
    "telephone": "+15198275789",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guelph",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Guelph" },
    { "@type": "City", "name": "Kitchener" },
    { "@type": "City", "name": "Waterloo" },
    { "@type": "City", "name": "Cambridge" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Finish Carpentry Services",
    "itemListElement": services.map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      }
    }))
  }
};

const Services = () => {
  return (
    <>
      <SEOHead
        title="Finish Carpentry Services Guelph | Cabinetry, Crown Molding, Trim"
        description="Expert finish carpentry services in Guelph, Kitchener & Waterloo. Custom cabinetry, crown molding, trim work, built-ins, millwork & restoration. Free quotes."
        keywords="finish carpentry services Guelph, custom cabinetry Kitchener, crown molding installation Waterloo, trim work Ontario, built-in shelves, custom millwork"
        canonicalUrl="https://liverichcarpentry.com/services"
        ogImage="https://liverichcarpentry.com/og-image.jpg"
        structuredData={structuredData}
      />
      <Layout>
        {/* Hero Section */}
        <section className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Premium Finish Carpentry{" "}
                <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                From elegant crown molding to custom cabinetry, we deliver exceptional 
                craftsmanship that transforms your space.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <GlassCard
                  key={service.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  hover={true}
                >
                  <div id={service.id} className="scroll-mt-24">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="glass-card p-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us for a free consultation and let's discuss your project.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Free Consultation
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

export default Services;
