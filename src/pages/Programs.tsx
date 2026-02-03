import { useScrollToTop } from "@/hooks/useScrollToTop";
import { BookOpen, Users, Wifi, Heart, Music } from "lucide-react";

export default function Programs() {
  useScrollToTop();
  const programs = [
    {
      icon: BookOpen,
      title: "Education Support",
      subtitle: "Enhancing Academic Outcomes",
      description: "Enhancing academic outcomes through scholarships, school supply drives, tutoring and mentoring, and recognition of excellence.",
      budget: "R16.9M total",
      activities: [
        "Tertiary bursaries for top students",
        "Distribution of learning materials to schools",
        "After-school tutoring programs",
        "Annual academic awards ceremony",
        "Tlotlego ya Baithuti awards programme",
      ],
      impact: "Addresses urgent need to strengthen rural education, channels significant resources to improve pass rates, and encourages progression to higher education.",
    },
    {
      icon: Users,
      title: "Youth Leadership & Enterprise",
      subtitle: "Fostering Entrepreneurship",
      description: "Fostering leadership skills and small-business creation among youth through annual leadership camps, entrepreneurship training workshops, and seed grants with mentorship.",
      budget: "R12.5M total",
      activities: [
        "Annual leadership camps",
        "Entrepreneurship training workshops",
        "Seed grants with mentorship",
        "Youth enterprise fund",
        "Leadership development programs",
      ],
      impact: "Responds to South Africa's acute youth unemployment (45.5% unemployed, reaching ~62% including discouraged workers) by equipping youth to become job-creators rather than job-seekers.",
    },
    {
      icon: Wifi,
      title: "Digital Literacy & Access",
      subtitle: "Bridging the Digital Divide",
      description: "Bridging the rural digital divide through ICT training and infrastructure, including establishment of a community computer lab with internet, coding, and digital skills courses.",
      budget: "R15.0M total",
      activities: [
        "Community computer lab with internet",
        "Basic computer literacy courses",
        "Coding and 3D design training",
        "Device provision to learners",
        "Digital skills for 4IR economy",
      ],
      impact: "Addresses severe digital exclusion: 52% of rural youth have no internet access, 66% lack basic digital skills. Empowers youth to participate in the Fourth Industrial Revolution economy.",
    },
    {
      icon: Heart,
      title: "Community Welfare",
      subtitle: "Addressing Social Needs",
      description: "Addressing social needs that undermine youth potential through health awareness, nutrition workshops, family welfare initiatives, and social support for at-risk youth.",
      budget: "R5.3M total",
      activities: [
        "HIV/AIDS education and mental health support",
        "Food gardens and daycare assistance",
        "Counselling services for teens",
        "Safety net for vulnerable youth",
        "Family welfare initiatives",
      ],
      impact: "Provides comprehensive social support addressing health, nutrition, and psychosocial needs that often prevent youth from engaging in education and development programs.",
    },
    {
      icon: Music,
      title: "Arts, Culture & Sports",
      subtitle: "Preserving Heritage",
      description: "Leveraging creative and sporting activities for youth development through cultural festivals, arts workshops, and sports leagues that preserve Bakwena culture.",
      budget: "R3.6M total",
      activities: [
        "Traditional dance camps",
        "Music and drama classes",
        "Youth sports tournaments",
        "Equipment and coaching provision",
        "Cultural festivals and events",
      ],
      impact: "Nurtures talents while preserving cultural heritage, promotes discipline and teamwork, and provides positive outlets for youth development.",
    },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Strategic Programs</h1>
          <p className="text-xl text-white max-w-3xl">
            Five flagship programmes targeting youth aged 16-35, addressing critical local needs whilst aligning with national development priorities.
          </p>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="border-b border-border last:border-b-0 pb-16 last:pb-0">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{program.title}</h2>
                      <p className="text-lg text-accent font-semibold">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                      <h4 className="font-bold text-primary mb-4">Key Activities</h4>
                      <ul className="space-y-2">
                        {program.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground/70">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                      <h4 className="font-bold text-primary mb-4">Budget & Impact</h4>
                      <p className="font-bold text-accent mb-4 text-lg">{program.budget}</p>
                      <p className="text-foreground/70 leading-relaxed">{program.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Allocation */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Programme Allocation & Budget</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Five-Year Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground/70">Education Support</span>
                  <span className="font-bold text-accent">R16.9M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground/70">Digital Literacy</span>
                  <span className="font-bold text-accent">R15.0M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground/70">Leadership & Enterprise</span>
                  <span className="font-bold text-accent">R12.5M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground/70">Community Welfare</span>
                  <span className="font-bold text-accent">R5.3M</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground/70">Arts, Culture & Sports</span>
                  <span className="font-bold text-accent">R3.6M</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-lg">
                  <span className="font-bold text-primary">Total Investment</span>
                  <span className="font-bold text-primary text-xl">R53.3M</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Principles</h3>
              <div className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="font-bold text-primary mb-2">70% Programme Focus</p>
                  <p className="text-sm text-foreground/70">Majority of budget allocated to direct services, exceeding international best practice for high-impact NGOs.</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="font-bold text-primary mb-2">Strategic Priorities</p>
                  <p className="text-sm text-foreground/70">Strong emphasis on education and digital skills, recognizing these as critical enablers for economic development.</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="font-bold text-primary mb-2">Sustainable Growth</p>
                  <p className="text-sm text-foreground/70">Controlled overhead growth while programmes scale aggressively, ensuring long-term organizational viability.</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="font-bold text-primary mb-2">Local Impact</p>
                  <p className="text-sm text-foreground/70">Enterprise elements and community partnerships reduce donor dependency while building local ownership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Implementation Timeline</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold mb-4">2026</div>
                <div className="w-1 h-24 bg-accent/30"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold text-primary mb-2">Foundation Establishment</h3>
                <p className="text-foreground/70">Initial program launch and community engagement across all 15 villages</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold mb-4">2027</div>
                <div className="w-1 h-24 bg-accent/30"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold text-primary mb-2">Program Expansion</h3>
                <p className="text-foreground/70">Digital lab operational, first cohort of scholars enrolled in tertiary education</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold mb-4">2028</div>
                <div className="w-1 h-24 bg-accent/30"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold text-primary mb-2">Scale-Up Phase</h3>
                <p className="text-foreground/70">Enterprise fund launches, measurable outcomes demonstrated across programs</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold mb-4">2029</div>
                <div className="w-1 h-24 bg-accent/30"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold text-primary mb-2">Consolidation</h3>
                <p className="text-foreground/70">Sustainability initiatives established, impact assessment completed</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold mb-4">2030</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Full Maturity</h3>
                <p className="text-foreground/70">Demonstrated impact, next-phase planning for continued growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
