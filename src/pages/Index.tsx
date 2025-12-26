import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Live Rich Finish Carpentry",
  "description": "Premium finish carpentry services in Guelph, Ontario. Custom cabinetry, crown molding, trim work, and built-ins crafted with precision.",
  "url": "https://liverichcarpentry.com",
  "telephone": "+15198275789",
  "email": "info@liverichfinishcarpentry.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "113 Bagot Street",
    "addressLocality": "Guelph",
    "addressRegion": "Ontario",
    "postalCode": "N1H 5T7",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.5448",
    "longitude": "-80.2482"
  },
  "areaServed": [
    { "@type": "City", "name": "Guelph", "containedInPlace": { "@type": "State", "name": "Ontario" } },
    { "@type": "City", "name": "Kitchener", "containedInPlace": { "@type": "State", "name": "Ontario" } },
    { "@type": "City", "name": "Waterloo", "containedInPlace": { "@type": "State", "name": "Ontario" } },
    { "@type": "City", "name": "Cambridge", "containedInPlace": { "@type": "State", "name": "Ontario" } }
  ],
  "priceRange": "$$",
  "image": "https://liverichcarpentry.com/og-image.jpg",
  "logo": "https://liverichcarpentry.com/logo.png",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61585482002295",
    "https://www.instagram.com/liverichcarpentry/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Finish Carpentry Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Cabinetry" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crown Molding Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trim & Baseboard Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Built-in Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Millwork" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Restoration" } }
    ]
  }
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Finish Carpentry Guelph | Custom Cabinetry & Trim Work | Live Rich"
        description="Premier finish carpentry in Guelph, Kitchener & Waterloo. Custom cabinetry, crown molding, trim work & built-ins. Licensed, insured. Free consultation. Call (519) 827-5789"
        keywords="finish carpentry Guelph, custom cabinetry Guelph, crown molding Kitchener, trim work Waterloo, finish carpenter near me, custom millwork Ontario, built-ins Guelph"
        canonicalUrl="https://liverichcarpentry.com"
        ogImage="https://liverichcarpentry.com/og-image.jpg"
        structuredData={structuredData}
      />
      <Layout>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
