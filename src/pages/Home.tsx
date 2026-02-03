import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Wifi, Heart, Music, Quote, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Home() {
  useScrollToTop();
  const programs = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Scholarships, tutoring, and academic excellence programs for rural youth",
    },
    {
      icon: Users,
      title: "Youth Leadership",
      description: "Leadership development and entrepreneurship training for job creation",
    },
    {
      icon: Wifi,
      title: "Digital Literacy",
      description: "ICT training and community computer lab for digital inclusion",
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Health support and social welfare for vulnerable youth",
    },
    {
      icon: Music,
      title: "Arts & Culture",
      description: "Cultural preservation and sports development programs",
    },
  ];

  return (
    <div>
      <SEOHead
        title="Home"
        description="Prince Otlotleng Mamogale Foundation serves the Bakwena Ba Mogopa traditional community, transforming lives through comprehensive youth development programs spanning education, leadership, digital skills, and cultural preservation."
        keywords="Bakwena Ba Mogopa, youth development, education, leadership, digital literacy, community welfare, North West Province, Bethanie"
        url="https://pomf.manus.space/"
      />
      {/* Hero Section with Crocodile Background */}
      <section 
        className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Building the Future Through Education and Leadership
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
              Go Aga Bokamoso ka Thuto le Boetapele
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              The Prince Otlotleng Mamogale Foundation serves the Bakwena Ba Mogopa traditional community, transforming lives through comprehensive youth development programmes spanning education, leadership, digital skills, and cultural preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Donate Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section 
        className="relative py-16 md:py-24 bg-accent overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-accent/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border-l-4 border-accent animate-fadeInUp">
              <div className="grid grid-cols-1 gap-8">
                {/* Founder's Photo - Enlarged and Above */}
                <div className="flex justify-center animate-slideInLeft">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 rounded-lg blur-lg opacity-30"></div>
                    <img 
                      src="/founder-bw.png" 
                      alt="HRH Prince Otlotleng Mamogale" 
                      className="relative w-full h-auto rounded-lg shadow-lg border-2 border-accent/20"
                    />
                  </div>
                </div>

                {/* Message Content */}
                <div className="animate-slideInRight">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-2" />
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white bg-primary px-4 py-2 rounded-lg inline-block">Message from the Founder</h2>
                      <p className="text-accent font-semibold mt-2">HRH Prince Otlotleng Mamogale</p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    "The Prince Otlotleng Mamogale Foundation is built on a vision of empowerment and opportunity. We believe that every young person in our community deserves access to quality education, meaningful skills, and the support to achieve their dreams. Through our integrated programmes in education, leadership, digital literacy, community welfare, and cultural preservation, we are creating pathways for youth to become agents of change in their own lives and in our society."
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    "Go Aga Bokamoso ka Thuto le Boetapele—Building the Future through Education and Leadership. This is not just our motto; it is our commitment to you, to our community, and to the generations to come. Together, we will transform lives and build a brighter future for all."
                  </p>
                  <Link href="/donate">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Support Our Mission <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Crocodile Background */}
      <section 
        className="relative py-16 md:py-24 bg-white overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary p-8 rounded-lg border border-primary shadow-lg animate-fadeInUp">
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-white leading-relaxed">
                To build a progressive, educated, and empowered society through leadership, education, and access to opportunity.
              </p>
            </div>

            <div className="bg-primary p-8 rounded-lg border border-primary shadow-lg animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-white leading-relaxed">
                To promote youth development, education, social welfare, and access to information and technology for all.
              </p>
            </div>

            <div className="bg-primary p-8 rounded-lg border border-primary shadow-lg animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-white mb-4">Core Principle</h3>
              <p className="text-white leading-relaxed font-semibold">
                Go Aga Bokamoso ka Thuto le Boetapele
              </p>
              <p className="text-white/80 text-sm mt-2">
                Building the Future through Education and Leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Overview Section with Crocodile Background */}
      <section 
        className="relative py-16 md:py-24 bg-muted/30 overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-muted/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-primary px-6 py-4 rounded-lg inline-block mb-4">Our Strategic Programmes</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Five flagship programmes targeting youth aged 16-35, addressing critical local needs whilst aligning with national development priorities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs.map((program: any, index: number) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp border-t-4 border-accent"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{program.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12 animate-fadeInUp">
            <Link href="/programs">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Explore All Programmes <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
