import { Users, Crown, Building2, Handshake } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function About() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About POMF</h1>
          <p className="text-xl text-white max-w-3xl">
            Understanding our foundation's mission, governance, and commitment to the Bakwena Ba Mogopa community.
          </p>
        </div>
      </section>

      {/* Foundation Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-primary mb-8">Our Foundation</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                The Prince Otlotleng Mamogale Foundation (POMF) is a comprehensive five-year roadmap for transforming rural communities through education, leadership, and digital empowerment. Operating under royal patronage, the Foundation bridges traditional governance structures with modern development approaches, creating interventions that are both culturally appropriate and internationally aligned with best practices in sustainable development.
              </p>
              <p>
                Serving the Bakwena Ba Mogopa traditional community in the North West Province, the Foundation addresses critical challenges of youth unemployment, educational inequality, and digital exclusion across five village clusters. With an estimated population of approximately 55,200 residents (2022), the Foundation's programs target youth aged 16-35, providing pathways to education, employment, and empowerment.
              </p>
              <p>
                The Foundation's unique positioning combines royal patronage with professional management, traditional governance structures with modern development approaches, and local knowledge with international best practices. This creates a powerful platform for transformation that is both deeply rooted in community values and globally aligned with sustainable development priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Scope */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Geographic Scope & Beneficiaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Coverage Area</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-border">
                  <p className="font-semibold text-primary mb-2">Bakwena Ba Mogopa Traditional Community</p>
                  <p className="text-foreground/70">North West Province, anchored in Bethanie with ~15 surrounding villages including Moseja and Thlotsebei</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border">
                  <p className="font-semibold text-primary mb-2">Population Served</p>
                  <p className="text-foreground/70">Approximately 55,200 residents (2022 estimate) across five village clusters and multiple municipalities</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Primary Beneficiaries</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-border">
                  <p className="font-semibold text-primary mb-2">Target Age Group</p>
                  <p className="text-foreground/70">Youth aged 16-35, including secondary school learners, TVET learners, unemployed graduates, and young entrepreneurs</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-border">
                  <p className="font-semibold text-primary mb-2">Community Engagement</p>
                  <p className="text-foreground/70">Grassroots approach maximizing reach and sustainability through village-level workshops and community partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Patronage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Royal Patronage & Governance</h2>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 rounded-lg border border-primary/20 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Crown className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">His Royal Prince Otlotleng Mamogale</h3>
                <p className="text-foreground/80">
                  The Foundation operates under the royal patronage of His Royal Prince Otlotleng Mamogale, who serves as both Patron and Board Chair. This unique governance structure combines traditional authority with modern non-profit management practices, ensuring both cultural legitimacy and professional accountability.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-8">Governance Structure</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-accent">1</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Royal Patronage</h4>
                <p className="text-foreground/70">His Royal Prince Otlotleng Mamogale provides strategic direction and community legitimacy</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-accent">2</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Board of Directors</h4>
                <p className="text-foreground/70">Comprising Patron, Secretary, Treasurer, and 2-4 Civil Society Members providing strategic oversight and fiduciary control</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-accent">3</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Executive Management</h4>
                <p className="text-foreground/70">Executive Director and management team handling day-to-day operations and program coordination</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-accent">4</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Program Delivery</h4>
                <p className="text-foreground/70">Program Managers, Coordinators, and Facilitators ensuring focused implementation across all five flagships</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-accent">5</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Community Engagement</h4>
                <p className="text-foreground/70">Volunteers, Teachers, Interns, and Community Partners ensuring grassroots implementation and sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Community Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border">
              <Handshake className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Stakeholder Engagement</h3>
              <p className="text-foreground/70">
                All programmes engage multiple stakeholders including community elders, traditional leaders, His Royal Majesty Kgosikgolo, tribal council, schools, and government clinics. This multi-stakeholder approach ensures comprehensive community benefit and long-term sustainability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border">
              <Building2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Operational Excellence</h3>
              <p className="text-foreground/70">
                The Foundation operates with modest office and workshop space in Bethanie, plus a community computer lab. This lean infrastructure approach maximizes programme delivery while maintaining operational excellence and cultural authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg border border-accent/20">
              <Crown className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Royal Legitimacy</h3>
              <p className="text-foreground/70">
                Operating under royal patronage ensures cultural authenticity, community trust, and government partnership opportunities while maintaining professional accountability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-lg border border-accent/20">
              <Users className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Community-Centered</h3>
              <p className="text-foreground/70">
                Grassroots implementation at village level with local hiring, community volunteers, and partnerships ensures cultural appropriateness and local ownership.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
              <Handshake className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Holistic Approach</h3>
              <p className="text-foreground/70">
                Five integrated programs addressing education, employment, digital skills, social welfare, and cultural preservation create comprehensive youth transformation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Sustainable Model</h3>
              <p className="text-foreground/70">
                Enterprise elements and strategic partnerships reduce donor dependency while building long-term organizational sustainability and community ownership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
