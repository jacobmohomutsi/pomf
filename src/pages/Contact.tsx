import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Contact() {
  useScrollToTop();
  return (
    <div>
      {/* Hero Section with Crocodile Background */}
      <section 
        className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-white max-w-3xl">
            Get in touch with the Prince Otlotleng Mamogale Foundation. We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* POMF Contact */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Prince Otlotleng Mamogale Foundation</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Location</h3>
                    <p className="text-foreground/70">
                      Bethanie
                      <br />
                      North West Province
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href="mailto:info@pomf.org.za" className="text-accent hover:text-accent/80 transition-colors">
                      info@pomf.org.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Website</h3>
                    <a href="https://www.pomf.org.za" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                      www.pomf.org.za
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Group Contact */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">The Access Group (Pty) Ltd</h2>
              <p className="text-foreground/70 mb-6">
                The Prince Otlotleng Mamogale Foundation is managed by The Access Group, a professional development organization committed to transforming communities through innovative programs and strategic partnerships.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href="mailto:info@theaccessgroup.co.za" className="text-accent hover:text-accent/80 transition-colors">
                      info@theaccessgroup.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Website</h3>
                    <a href="https://www.theaccessgroup.co.za" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                      www.theaccessgroup.co.za
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Ready to Get Involved?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <a>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold">
                    Join Our Community
                  </Button>
                </a>
              </Link>
              <Link href="/programs">
                <a>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Explore Programs
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Find Us on the Map</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.8623456789!2d25.5!3d-25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e54d8c0000000%3A0x1e54d8c0000000!2sBethanie%2C%20North%20West%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1234567890"
            ></iframe>
          </div>
          <p className="text-center text-foreground/70 mt-6 text-sm">
            The Bakwena Ba Mogopa traditional council office is located in Bethanie, the paramount village of the Bakwena Ba Mogopa traditional community in the North West Province.
          </p>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">About the Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Bakwena Ba Mogopa Community</h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  The Bakwena Ba Mogopa is a traditional community in the North West Province of South Africa, anchored in the paramount village of Bethanie. The community comprises approximately 15 villages, including Moseja and Thlotsebei, serving an estimated population of 8,000 residents.
                </p>
                <p>
                  The region faces significant developmental challenges including youth unemployment, educational inequality, and digital exclusion. The Prince Otlotleng Mamogale Foundation operates within this context, providing comprehensive programs designed to address these challenges while respecting and preserving the community's cultural heritage.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Commitment</h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  The Foundation operates under royal patronage, ensuring cultural authenticity and community legitimacy. By combining traditional governance structures with modern development approaches, we create interventions that are both culturally appropriate and internationally aligned with best practices in sustainable development.
                </p>
                <p>
                  Our grassroots approach ensures that all programs are implemented at the village level, with local hiring, community volunteers, and partnerships with schools and government clinics. This commitment to local ownership and cultural sensitivity is central to everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
