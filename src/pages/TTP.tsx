import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Target, Users, Lightbulb, TrendingUp, Heart, CheckCircle, Star, Award, FileText } from "lucide-react";

const TTP = () => {
  const ratingCriteria = [
    {
      icon: Lightbulb,
      name: "Innovation",
      weight: "25%",
      description: "Product uniqueness, problem-solving approach, and technological advancement"
    },
    {
      icon: Users,
      name: "Team Quality",
      weight: "20%",
      description: "Founder expertise, team composition, experience, and track record"
    },
    {
      icon: Target,
      name: "Product Feasibility",
      weight: "20%",
      description: "Technical viability, market fit, scalability potential, and execution plan"
    },
    {
      icon: Heart,
      name: "Ethics & Values",
      weight: "15%",
      description: "Social impact, sustainability, workplace culture, and business ethics"
    },
    {
      icon: TrendingUp,
      name: "Market Potential",
      weight: "20%",
      description: "Target market size, growth opportunity, competitive advantage, and traction"
    }
  ];

  const sampleScores = [
    { category: "Innovation", score: 88 },
    { category: "Team Quality", score: 92 },
    { category: "Product Feasibility", score: 85 },
    { category: "Ethics & Values", score: 95 },
    { category: "Market Potential", score: 78 }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Build Trust",
      description: "Transparent rating helps talents feel confident about joining your startup"
    },
    {
      icon: Star,
      title: "Stand Out",
      description: "High TTP scores attract better candidates and distinguish you from competitors"
    },
    {
      icon: Award,
      title: "Verified Legitimacy",
      description: "Prove you're a real, serious startup - not a fake job posting"
    },
    {
      icon: Users,
      title: "Better Matches",
      description: "AI uses your TTP score to recommend the most suitable talents"
    }
  ];

  const process = [
    { step: "1", title: "Submit Company Info", icon: FileText },
    { step: "2", title: "Pitch Your Product", icon: Target },
    { step: "3", title: "Team Evaluation", icon: Users },
    { step: "4", title: "Get TTP Rating", icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-gradient-secondary mb-6 shadow-secondary">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-secondary">TTP</span> - Talentrove Points
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Startup rating system that builds trust and credibility. Get evaluated on innovation, team, feasibility, ethics, and market potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-secondary text-white shadow-secondary">
              Get Your TTP Rating
            </Button>
            <Button size="lg" variant="outline">
              See Sample Report
            </Button>
          </div>
        </div>
      </section>

      {/* Rating Criteria */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How We Rate Startups</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Comprehensive evaluation across 5 key dimensions
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ratingCriteria.map((criteria, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0 shadow-secondary">
                      <criteria.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{criteria.name}</h3>
                        <span className="text-sm font-semibold text-secondary">{criteria.weight}</span>
                      </div>
                      <p className="text-muted-foreground">{criteria.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Rating */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sample TTP Report</h2>
          
          <Card className="shadow-secondary">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-6 rounded-full bg-gradient-secondary shadow-secondary mb-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">TechStart AI</h3>
                <p className="text-xl text-muted-foreground mb-4">AI-powered SaaS Platform</p>
                <div className="inline-block">
                  <div className="text-6xl font-bold text-secondary mb-1">87</div>
                  <p className="text-lg text-muted-foreground">Overall TTP Score</p>
                </div>
              </div>

              <div className="space-y-6">
                {sampleScores.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-lg">{item.category}</span>
                      <span className="font-bold text-lg">{item.score}/100</span>
                    </div>
                    <Progress value={item.score} className="h-3" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🎯 Rating Summary</h4>
                <p className="text-muted-foreground">
                  <strong>Strong performance</strong> across innovation and ethics. Team composition is excellent with experienced founders. Product shows good market fit with room for scalability improvements. Overall: <strong>Highly Recommended</strong> for skilled talent.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Get TTP Rated?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Rating Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4 shadow-secondary">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4">
                    <item.icon className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to Transparency</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Public Ratings</h3>
                  <p className="text-muted-foreground">
                    All TTP scores are visible to talents browsing startups, ensuring complete transparency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Objective Metrics</h3>
                  <p className="text-muted-foreground">
                    Rating based on verifiable data, not subjective opinions or paid placements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
                  <p className="text-muted-foreground">
                    Ratings updated as your startup grows and achieves new milestones.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Fair Evaluation</h3>
                  <p className="text-muted-foreground">
                    Every startup evaluated using the same criteria - no favoritism or bias.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Rated?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Build trust with potential hires and stand out with a verified TTP score
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-secondary text-white shadow-secondary">
              Register Your Startup
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TTP;
