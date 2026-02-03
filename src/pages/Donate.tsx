import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, TrendingUp, Users, Target, Mail } from "lucide-react";

export default function Donate() {
  useScrollToTop();
  const [totalDonated, setTotalDonated] = useState(0);
  const [donationCount, setDonationCount] = useState(0);

  const programs = [
    { id: "education", name: "Education Support", icon: "📚", target: 16900000, description: "Scholarships, tutoring, and academic excellence" },
    { id: "leadership", name: "Youth Leadership & Enterprise", icon: "👥", target: 12500000, description: "Leadership development and entrepreneurship" },
    { id: "digital", name: "Digital Literacy & Access", icon: "💻", target: 15000000, description: "ICT training and digital skills" },
    { id: "welfare", name: "Community Welfare", icon: "❤️", target: 5300000, description: "Health support and social welfare" },
    { id: "arts", name: "Arts, Culture & Sports", icon: "🎨", target: 3600000, description: "Cultural preservation and sports" },
  ];

  // Program donations tracking
  const [programDonations, setProgramDonations] = useState({
    education: 0,
    leadership: 0,
    digital: 150000,  // R150,000 allocated to Digital Literacy
    welfare: 0,
    arts: 0,
  });

  // Simulate fetching total donations from backend
  useEffect(() => {
    const savedTotal = localStorage.getItem("pomf_total_donations");
    const savedCount = localStorage.getItem("pomf_donation_count");
    
    // Calculate total from program donations
    const total = Object.values(programDonations).reduce((sum, val) => sum + val, 0);
    setTotalDonated(total);
    
    if (savedCount) setDonationCount(parseInt(savedCount));
    else if (total > 0) setDonationCount(1);  // At least 1 donor if there are donations
  }, [programDonations]);

  const handleEmailClick = () => {
    window.location.href = "mailto:donate@pomf.org.za?subject=Donation Inquiry - Prince Otlotleng Mamogale Foundation";
  };

  return (
    <div>
      {/* Hero Section with Background */}
      <section 
        className="relative bg-gradient-to-br from-primary/95 to-primary/85 text-white py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/80"></div>
        <div className="container mx-auto px-4 text-center animate-fadeInUp relative z-10">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Support Our Mission</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Your donation directly supports youth development, education, and community transformation in the Bakwena Ba Mogopa region.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8"
            onClick={handleEmailClick}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us: donate@pomf.org.za
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Program Information */}
            <div className="lg:col-span-2 animate-slideInLeft">
              <Card>
                <CardHeader>
                  <CardTitle>Our Programs</CardTitle>
                  <CardDescription>Support one of our five strategic initiatives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {programs.map((program) => (
                    <div key={program.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{program.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {program.name}
                          </h3>
                          <p className="text-sm text-foreground/70 mb-3">
                            {program.description}
                          </p>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-foreground">
                              Target: R{program.target.toLocaleString()}
                            </p>
                          </div>
                          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-accent h-full transition-all duration-500"
                              style={{ width: `${Math.min((programDonations[program.id as keyof typeof programDonations] / program.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-foreground/60 mt-1">
                            R{programDonations[program.id as keyof typeof programDonations].toLocaleString()} - {Math.round((programDonations[program.id as keyof typeof programDonations] / program.target) * 100)}% of target
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Sidebar */}
            <div className="lg:col-span-1 space-y-6 animate-slideInRight">
              {/* Total Donations Card */}
              <Card className="bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Total Raised
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-accent mb-2 animate-countUp">
                    R{totalDonated.toLocaleString()}
                  </div>
                  <p className="text-sm text-foreground/70">
                    Combined donations across all programs
                  </p>
                </CardContent>
              </Card>

              {/* Donation Count Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Donors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {donationCount}
                  </div>
                  <p className="text-sm text-foreground/70">
                    Supporters of our mission
                  </p>
                </CardContent>
              </Card>

              {/* Program Targets */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Program Targets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {programs.map((program) => (
                    <div key={program.id} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {program.icon} {program.name}
                        </span>
                      </div>
                      <p className="text-xs text-foreground/60">
                        R{program.target.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Ready to Donate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 mb-4">
                    Contact us to arrange your donation or discuss partnership opportunities.
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
