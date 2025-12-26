import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { z } from "zod";

const CONTACT_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/DTc8leW2sFuebKiVJzeX/webhook-trigger/96fec9f4-1a86-4fab-af16-0ad10cc8cc53";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional().or(z.literal("")),
  services: z.array(z.string()),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(519) 827-5789",
    href: "tel:+15198275789",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@liverichfinishcarpentry.com",
    href: "mailto:info@liverichfinishcarpentry.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: "Guelph, Kitchener/Waterloo",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 9AM-5PM",
    href: "#",
  },
];

const serviceOptions = [
  { id: "crown-molding", label: "Crown Molding" },
  { id: "cabinetry", label: "Custom Cabinetry" },
  { id: "trim", label: "Trim & Baseboards" },
  { id: "built-ins", label: "Built-in Solutions" },
  { id: "millwork", label: "Custom Millwork" },
  { id: "restoration", label: "Wood Restoration" },
  { id: "other", label: "Other" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Get service labels for selected services
    const selectedServiceLabels = formData.services.map(
      (id) => serviceOptions.find((s) => s.id === id)?.label || id
    );

    try {
      await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          services: selectedServiceLabels,
          message: formData.message.trim(),
          source: "Website Contact Form",
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", services: [], message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  return (
    <>
      <SEOHead
        title="Contact Finish Carpenter Guelph | Free Consultation | Live Rich"
        description="Book your free finish carpentry consultation in Guelph. Call (519) 827-5789 for custom cabinetry, crown molding & trim work quotes. Serving Kitchener-Waterloo."
        keywords="contact finish carpenter Guelph, free carpentry consultation, carpentry quote Kitchener, woodwork estimate Waterloo, book carpenter Ontario"
        canonicalUrl="https://liverichcarpentry.com/contact"
        ogImage="https://liverichcarpentry.com/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "HomeAndConstructionBusiness",
            "name": "Live Rich Finish Carpentry",
            "telephone": "+15198275789",
            "email": "info@liverichfinishcarpentry.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Guelph",
              "addressRegion": "Ontario",
              "addressCountry": "CA"
            }
          }
        }}
      />
      <Layout>
        <section className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Let's Start Your{" "}
                <span className="text-gradient-gold">Project</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Ready to transform your space? Book a free consultation and let's 
                discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <GlassCard className="p-8" hover={false}>
                  <h2 className="text-2xl font-bold mb-6">Book Your Free Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                          Services Interested In (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {serviceOptions.map((service) => (
                            <div key={service.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={service.id}
                                checked={formData.services.includes(service.id)}
                                onCheckedChange={() => handleServiceToggle(service.id)}
                                className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                              />
                              <label
                                htmlFor={service.id}
                                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                              >
                                {service.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="bg-secondary border-border resize-none"
                      />
                    </div>
                    <Button variant="hero" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </GlassCard>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <GlassCard key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.href.startsWith("#") ? (
                        <p className="text-muted-foreground text-sm">{item.details}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {item.details}
                        </a>
                      )}
                    </div>
                  </GlassCard>
                ))}

                {/* Quick Response */}
                <div className="glass-card p-6 border-primary/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary font-semibold text-sm">Quick Response</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
