import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Crown, History, MapPin, Users } from "lucide-react";

export default function Patronage() {
  useScrollToTop();
  const villageClusters = [
    {
      cluster: "Bethanie",
      municipality: "Rustenburg LM",
      villages: ["Bethanie", "Makolokwe", "Modikwe", "Barseba", "Maumong"],
      total: 17630
    },
    {
      cluster: "Hebron",
      municipality: "Madibeng LM",
      villages: ["Hebron", "Kgabalatsane", "Moduane", "Rabokala"],
      total: 13780
    },
    {
      cluster: "Jericho",
      municipality: "Madibeng LM",
      villages: ["Jericho", "Rantlapane", "Madinyane West", "Legonyane", "Mmupudung", "Mmakgabetlwane"],
      total: 20940
    },
    {
      cluster: "Pachsdraai",
      municipality: "Ramotshere Moiloa LM",
      villages: ["Pachsdraai"],
      total: 1250
    },
    {
      cluster: "Ga-Mogopa",
      municipality: "Dr Kenneth Kaunda DM",
      villages: ["Ga-Mogopa"],
      total: 1620
    }
  ];

  const populationBreakdown = [
    { cluster: "Bethanie Cluster", population: 17630 },
    { cluster: "Hebron Cluster", population: 13780 },
    { cluster: "Jericho Cluster", population: 20940 },
    { cluster: "Pachsdraai", population: 1250 },
    { cluster: "Ga-Mogopa", population: 1620 },
  ];

  const villageDetails = [
    { cluster: "Bethanie", villages: [
      { name: "Bethanie (Paramount village)", pop: 8610 },
      { name: "Makolokwe", pop: 1700 },
      { name: "Modikwe", pop: 3580 },
      { name: "Barseba (Berseba)", pop: 1610 },
      { name: "Maumong", pop: 2130 },
    ]},
    { cluster: "Hebron", villages: [
      { name: "Hebron", pop: 3950 },
      { name: "Kgabalatsane", pop: 1850 },
      { name: "Moduane", pop: 1720 },
      { name: "Rabokala", pop: 6260 },
    ]},
    { cluster: "Jericho", villages: [
      { name: "Jericho (Mmatope-a-Seretsana)", pop: 9460 },
      { name: "Rantlapane", pop: 2350 },
      { name: "Madinyane West", pop: 2080 },
      { name: "Legonyane", pop: 1950 },
      { name: "Mmupudung", pop: 1620 },
      { name: "Mmakgabetlwane", pop: 1480 },
    ]},
    { cluster: "Pachsdraai", villages: [
      { name: "Pachsdraai", pop: 1250 },
    ]},
    { cluster: "Ga-Mogopa", villages: [
      { name: "Ga-Mogopa", pop: 1620 },
    ]},
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
          <div className="flex items-center gap-4 mb-6">
            <Crown className="w-12 h-12 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">Royal Patronage</h1>
          </div>
          <p className="text-xl text-white max-w-3xl">
            Understanding the rich heritage and leadership of the Bakwena ba Mogopa traditional community under the guidance of Kgosi Kgolo Motheo Mamogale.
          </p>
        </div>
      </section>

      {/* Kgosi Profile Section - NOW FIRST */}
      <section 
        className="relative py-16 md:py-24 bg-gradient-to-r from-accent/10 to-accent/5 overflow-hidden"
        style={{
          backgroundImage: "url('/crocodile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 to-accent/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Full-Size Kgosi Photo */}
            <div className="mb-12 flex justify-center animate-slideInDown">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-lg blur-lg opacity-30"></div>
                <img 
                  src="/kgosi-mamogale.jpg" 
                  alt="Kgosi Kgolo Motheo Mamogale" 
                  className="relative w-full h-auto rounded-lg shadow-2xl border-4 border-white object-cover"
                />
              </div>
            </div>

            {/* Kgosi Information Card */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border-l-4 border-primary animate-fadeInUp">
              <div className="flex items-start gap-4 mb-8">
                <Crown className="w-8 h-8 text-primary flex-shrink-0 mt-2" />
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">Kgosi Kgolo Tebogo Motheo Mamogale</h2>
                  <p className="text-xl font-semibold text-accent mt-2">Paramount King of the Bakwena Ba Mogopa</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Kgosi Kgolo Tebogo Motheo Mamogale is deeply committed to fostering socio-economic growth, job creation, and community empowerment for the Bakwena-ba-Mogopa people. Under his leadership, the Bakwena-ba-Mogopa Tribal Authority has actively engaged in partnerships and development initiatives that have created real opportunity and upliftment for community members.
                </p>

                <p>
                  A significant milestone under his guidance has been the strategic engagement with mining partners, most notably through the community's stake in the Rhovan Glencore Mine. These engagements have resulted in expanded employment opportunities for local residents, with a strong focus on ensuring that community members benefit directly from nearby economic activities. Recent arrangements include new fixed-term employment packages and roles tied to sustainable projects such as solar energy development, providing immediate and longer-term work options for the youth and families of Bakwena-ba-Mogopa villages.
                </p>

                <p>
                  Beyond economic opportunities, Kgosi Mamogale embraces the broader vision of community development through collaboration with government and private sector partners. His leadership supports the cultivation of inclusive structures that champion local interests across villages, encouraging active participation from all age groups and enabling a shared approach to prosperity.
                </p>

                <p>
                  Additionally, the Bakwena-ba-Mogopa community — guided by his leadership — is aligned with developmental programmes that span education, agriculture, heritage preservation, and future infrastructure projects, reflecting a holistic approach to upliftment and self-determination.
                </p>

                <p className="font-semibold text-primary text-xl">
                  His leadership embodies the principle "Go Aga Bokamoso ka Thuto le Boetapele"—Building the Future through Education and Leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tribe History Section - NOW SECOND */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fadeInUp">
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold text-primary">Bakwena ba Mogopa Heritage</h2>
              </div>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  The Bakwena ba Mogopa are a proud Tswana community with a rich cultural heritage spanning centuries. The name "Bakwena" refers to the crocodile, a symbol of strength, wisdom, and resilience that has guided the community through generations. This ancient symbol represents the foundation of their identity and values.
                </p>
                <p>
                  Situated in the North West Province of South Africa, the Bakwena ba Mogopa community is organised into five distinct village clusters: Bethanie, Hebron, Jericho, Pachsdraai, and Ga-Mogopa. These clusters encompass multiple villages spread across different local municipalities, maintaining strong cultural traditions whilst embracing modern development. The traditional governance structure, led by the Kgosi (Paramount King), continues to play a vital role in community cohesion, conflict resolution, and cultural preservation.
                </p>
                <p>
                  The community's history is marked by resilience, cultural pride, and a commitment to education and development. Through the ages, the Bakwena ba Mogopa have preserved their customs, language, and values whilst adapting to contemporary challenges. The establishment of the Prince Otlotleng Mamogale Foundation represents a modern expression of this commitment to youth empowerment and community transformation.
                </p>
              </div>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 animate-fadeInUp">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                <p className="text-foreground/70">North West Province, South Africa, organised in 5 village clusters across multiple municipalities</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-primary mb-2">Population</h3>
                <p className="text-foreground/70 font-bold text-lg">Approximately 55,200 residents (2022 estimate)</p>
                <p className="text-foreground/60 text-sm mt-2">Across all five village clusters</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <Crown className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-primary mb-2">Leadership</h3>
                <p className="text-foreground/70">Kgosi Kgolo Motheo Mamogale, custodian of tradition and community development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village Clusters Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold text-white bg-primary px-6 py-4 rounded-lg inline-block">Village Clusters & Communities</h2>
              </div>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                The Bakwena ba Mogopa traditional authority encompasses five village clusters organised across multiple local municipalities in the North West Province.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {villageClusters.map((clusterData, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg animate-fadeInUp"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* Cluster Name & Population */}
                    <div className="md:col-span-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">{clusterData.cluster}</h3>
                      <div className="flex items-center gap-2 text-foreground/70 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold">{clusterData.municipality}</span>
                      </div>
                      <div className="bg-primary/20 px-3 py-2 rounded-lg">
                        <p className="text-sm text-foreground/60">Population (2022)</p>
                        <p className="text-2xl font-bold text-primary">{clusterData.total.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Villages List */}
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-bold text-primary mb-3">Villages:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {clusterData.villages.map((village, vIndex) => (
                          <div key={vIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground/80">{village}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Population Summary */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border-2 border-primary/30 animate-fadeInUp">
              <h3 className="text-2xl font-bold text-primary mb-6">Kingdom Population Summary (2022 Estimate)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {populationBreakdown.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-foreground/70 font-semibold mb-2">{item.cluster}</p>
                    <p className="text-3xl font-bold text-primary">{item.population.toLocaleString()}</p>
                  </div>
                ))}
                <div className="text-center md:col-span-3 border-t-2 border-primary/30 pt-6 mt-6">
                  <p className="text-foreground/70 font-semibold mb-2">Total Bakwena ba Mogopa Kingdom</p>
                  <p className="text-4xl font-bold text-primary">≈ 55,200 people</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Support the Prince Otlotleng Mamogale Foundation and help transform lives in the Bakwena ba Mogopa community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                Support Our Mission
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
