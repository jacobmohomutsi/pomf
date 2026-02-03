import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, Download, Heart, Briefcase, Clock, Zap, ExternalLink } from "lucide-react";

export default function SignUp() {
  useScrollToTop();
  const handleDownloadForm = () => {
    const link = document.createElement("a");
    link.href = "/COMMUNITYVOLUNTEERINGFORM.pdf";
    link.download = "POMF_Community_Volunteering_Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:volunteers@pomf.org.za?subject=Volunteering Inquiry - Prince Otlotleng Mamogale Foundation";
  };

  const volunteerOpportunities = [
    {
      title: "Education Support",
      description: "Help with tutoring, mentoring, and academic support programmes",
      icon: "📚",
      skills: ["Teaching", "Mentoring", "Subject expertise"],
    },
    {
      title: "Youth Leadership",
      description: "Guide and mentor young people in leadership development",
      icon: "👥",
      skills: ["Leadership", "Coaching", "Community engagement"],
    },
    {
      title: "Digital Literacy",
      description: "Teach digital skills and ICT training to community members",
      icon: "💻",
      skills: ["IT skills", "Teaching", "Technical support"],
    },
    {
      title: "Community Welfare",
      description: "Support health, social welfare, and community care initiatives",
      icon: "❤️",
      skills: ["Healthcare", "Social work", "Community care"],
    },
    {
      title: "Arts & Culture",
      description: "Preserve and promote cultural heritage and artistic expression",
      icon: "🎨",
      skills: ["Arts", "Cultural knowledge", "Event planning"],
    },
    {
      title: "Sports & Recreation",
      description: "Coach and organise sports and recreational activities",
      icon: "⚽",
      skills: ["Sports coaching", "Event management", "Youth engagement"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Volunteer with POMF</h1>
          <p className="text-xl text-white max-w-2xl">
            Share your skills, expertise, and time to transform lives in the Bakwena Ba Mogopa community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 animate-slideInLeft space-y-6">
              {/* Why Volunteer */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    Why Volunteer with POMF?
                  </CardTitle>
                  <CardDescription>
                    Make a meaningful impact in your community
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Make Real Impact</p>
                        <p className="text-sm text-foreground/70">Directly support youth development and community transformation</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Users className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Build Connections</p>
                        <p className="text-sm text-foreground/70">Join a network of passionate community members</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Share Expertise</p>
                        <p className="text-sm text-foreground/70">Use your skills to help others and grow professionally</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Flexible Commitment</p>
                        <p className="text-sm text-foreground/70">Volunteer at times that work for your schedule</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Volunteer Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Opportunities</CardTitle>
                  <CardDescription>
                    Explore the different ways you can contribute
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {volunteerOpportunities.map((opportunity, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-3xl">{opportunity.icon}</span>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{opportunity.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-foreground/70 mb-3">{opportunity.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How to Get Started */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    How to Get Started
                  </CardTitle>
                  <CardDescription>
                    Simple steps to begin your volunteering journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Download the Form</h3>
                        <p className="text-sm text-foreground/70">
                          Download the Community Volunteering Form and complete all sections with your information and interests.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Select Your Interests</h3>
                        <p className="text-sm text-foreground/70">
                          Choose the programmes and areas where you would like to contribute your skills and expertise.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Submit Your Form</h3>
                        <p className="text-sm text-foreground/70">
                          Email your completed form to <strong>volunteers@pomf.co.za</strong> with the subject line "Volunteering Application".
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">We'll Contact You</h3>
                        <p className="text-sm text-foreground/70">
                          Our team will review your application and contact you within 5-7 business days to discuss opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Action Cards */}
            <div className="lg:col-span-1 space-y-6 animate-slideInRight">
              {/* Download Form Card */}
              <Card className="bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 sticky top-20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-accent" />
                    Get Started Now
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/70">
                    Download the Community Volunteering Form and tell us how you would like to help.
                  </p>
                  <Button 
                    onClick={handleDownloadForm}
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Form (PDF)
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/70">
                    Have questions about volunteering? Send us an email and our team will get back to you shortly.
                  </p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* What We Need Card */}
              <Card>
                <CardHeader>
                  <CardTitle>What We Need</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-accent font-bold">✓</span>Teachers & educators
                    </li>
                    <li className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-accent font-bold">✓</span>IT professionals
                    </li>
                    <li className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-accent font-bold">✓</span>Healthcare workers
                    </li>
                    <li className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-accent font-bold">✓</span>Sports coaches
                    </li>
                    <li className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-accent font-bold">✓</span>Artists & cultural leaders
                    </li>
                    <li className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-accent font-bold">✓</span>Community organisers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Commitment Levels Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Commitment Levels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground text-sm">Flexible</p>
                    <p className="text-xs text-foreground/70">Ad-hoc volunteering as your schedule allows</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Regular</p>
                    <p className="text-xs text-foreground/70">Weekly or monthly commitment</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Project-Based</p>
                    <p className="text-xs text-foreground/70">Support specific initiatives or events</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AddressDox Partnership Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Digital Proof of Residence
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mb-6">
              In partnership with AddressDox, we are making it easier for community members to obtain official digital proof of residence documents. This essential document helps with financial inclusion, access to services, and administrative needs.
            </p>
            <a 
              href="https://addressdox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white font-bold">
                Register for Digital Proof of Residence
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
