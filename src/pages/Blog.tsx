import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const NEWSLETTER_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/DTc8leW2sFuebKiVJzeX/webhook-trigger/a252b359-d449-4b9e-96b4-70c81cb64b68";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters");

const blogPosts = [
  {
    slug: "choosing-right-crown-molding",
    title: "How to Choose the Right Crown Molding for Your Home",
    excerpt: "Crown molding can transform a room, but selecting the right style and size matters. Learn the key factors to consider before installation.",
    author: "Live Rich Team",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Tips & Guides",
  },
  {
    slug: "custom-cabinetry-vs-stock",
    title: "Custom Cabinetry vs Stock Cabinets: Which Is Right for You?",
    excerpt: "Understanding the differences between custom and stock cabinets can save you time and money. Here's what every homeowner should know.",
    author: "Live Rich Team",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Comparisons",
  },
  {
    slug: "wood-species-guide",
    title: "A Complete Guide to Wood Species for Interior Trim",
    excerpt: "From oak to poplar, each wood species has unique characteristics. Discover which type is best for your project and budget.",
    author: "Live Rich Team",
    date: "2024-12-05",
    readTime: "8 min read",
    category: "Materials",
  },
  {
    slug: "built-in-design-ideas",
    title: "10 Built-In Ideas to Maximize Your Space",
    excerpt: "Built-ins aren't just for books. Explore creative ways to add storage and style with custom built-in solutions.",
    author: "Live Rich Team",
    date: "2024-11-28",
    readTime: "6 min read",
    category: "Inspiration",
  },
  {
    slug: "preparing-for-carpentry-project",
    title: "How to Prepare Your Home for a Finish Carpentry Project",
    excerpt: "Proper preparation ensures a smooth installation. Follow these steps to get your space ready for our team.",
    author: "Live Rich Team",
    date: "2024-11-20",
    readTime: "4 min read",
    category: "Preparation",
  },
  {
    slug: "trim-maintenance-tips",
    title: "Maintaining Your Wood Trim: Tips for Long-Lasting Beauty",
    excerpt: "Keep your trim looking pristine with these simple maintenance tips and techniques from our experts.",
    author: "Live Rich Team",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "Maintenance",
  },
];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate email
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email.trim(),
          source: "Website Newsletter",
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });

      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Finish Carpentry Blog | Tips & Guides | Guelph Woodworking"
        description="Expert finish carpentry tips from Guelph professionals. Guides on crown molding, custom cabinetry, wood species, and home improvement ideas for Ontario homeowners."
        keywords="finish carpentry tips Guelph, woodworking blog Ontario, crown molding guide, cabinet installation tips, home improvement Kitchener Waterloo"
        canonicalUrl="https://liverichcarpentry.com/blog"
        ogImage="https://liverichcarpentry.com/og-image.jpg"
      />
      <Layout>
        <section className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Blog
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Insights &{" "}
                <span className="text-gradient-gold">Inspiration</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Expert advice, design inspiration, and practical tips from our team of 
                experienced finish carpentry professionals.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <GlassCard
                  key={post.slug}
                  className="animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Badge */}
                  <div className="inline-flex mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 text-foreground">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-24">
              <div className="glass-card p-10 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest tips, inspiration, and updates delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                  />
                  <Button variant="hero" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
