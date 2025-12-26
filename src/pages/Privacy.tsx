import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Live Rich Finish Carpentry"
        description="Learn how Live Rich Finish Carpentry protects your personal information in accordance with PIPEDA. Read our complete privacy policy."
        keywords="privacy policy, data protection, PIPEDA, personal information, Live Rich Finish Carpentry"
        canonicalUrl="https://liverichcarpentry.com/privacy"
      />
      <Layout>
        <section className="pt-12 pb-24 hero-glow">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Privacy <span className="text-gradient-gold">Policy</span>
              </h1>
              <p className="text-muted-foreground mb-12">
                Last Updated: December 25, 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  Live Rich Finish Carpentry ("we," "us," "our") respects your privacy and is 
                  committed to protecting personal information in accordance with the Personal 
                  Information Protection and Electronic Documents Act (PIPEDA).
                </p>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect personal information including your name, email address, 
                    phone number, and any information you submit through our website forms.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    How We Use Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to respond to inquiries, provide services, 
                    improve our website, and comply with legal obligations.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may use cookies to enhance user experience. Cookies are small 
                    files stored on your device that help us understand how you use our site 
                    and improve our services.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use reasonable safeguards to protect personal information from 
                    unauthorized access, disclosure, or misuse.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us:
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

export default Privacy;
