import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms and Conditions | Live Rich Finish Carpentry"
        description="Read the terms and conditions for using the Live Rich Finish Carpentry website. Governed by Ontario and Canadian law."
        keywords="terms and conditions, terms of service, legal, Live Rich Finish Carpentry"
        canonicalUrl="https://liverichcarpentry.com/terms"
      />
      <Layout>
        <section className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Terms and <span className="text-gradient-gold">Conditions</span>
              </h1>
              <p className="text-muted-foreground mb-12">
                Last Updated: December 25, 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing this website, you agree to the following terms governed by 
                  Ontario and Canadian law.
                </p>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Use of Website
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Content on this website is provided for informational purposes only. 
                    We reserve the right to modify or discontinue any aspect of this website 
                    at any time without notice.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, 
                    and software, is owned by Live Rich Finish Carpentry and is protected 
                    by Canadian and international copyright laws.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Live Rich Finish Carpentry is not liable for any damages arising from 
                    the use of this website. This includes direct, indirect, incidental, 
                    consequential, or punitive damages.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Live Rich Finish Carpentry</strong></p>
                    <p>Email: info@liverichfinishcarpentry.com</p>
                    <p>Address: 113 Bagot Street, Guelph, Ontario, N1H 5T7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
