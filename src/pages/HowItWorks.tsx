import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, Award, Users, Zap, Brain, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const talentSteps = [
    {
      number: "01",
      icon: Users,
      title: "Sign Up & Create Profile",
      description: "Register on Talentrove and build your professional profile. Add your skills, portfolio, and work samples."
    },
    {
      number: "02",
      icon: Target,
      title: "Select Your Domain",
      description: "Choose from coding, design, editing, marketing, and more. Pick the field where you want to showcase your skills."
    },
    {
      number: "03",
      icon: Award,
      title: "Take the TTET",
      description: "Complete the Talentrove Eligibility Test - an adaptive, proctored assessment that measures your real-world skills."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Get Verified Score",
      description: "Receive your verified skill score and certification. This becomes your credential for employers."
    },
    {
      number: "05",
      icon: Brain,
      title: "AI Matchmaking",
      description: "Our AI analyzes your TTET score and matches you with startups that need your specific skillset."
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Apply & Get Hired",
      description: "Browse recommended startups, apply to positions, and land meaningful employment based on your skills."
    }
  ];

  const startupSteps = [
    {
      number: "01",
      icon: Users,
      title: "Register Your Startup",
      description: "Create your company profile with details about your business, team, and vision."
    },
    {
      number: "02",
      icon: Target,
      title: "Pitch Your Company",
      description: "Submit your product pitch, business model, and innovation strategy for evaluation."
    },
    {
      number: "03",
      icon: Shield,
      title: "Get TTP Rating",
      description: "Receive your Talentrove Points rating based on innovation, team, feasibility, and ethics."
    },
    {
      number: "04",
      icon: Award,
      title: "Post Job Openings",
      description: "List the positions you're hiring for and specify the skills you need."
    },
    {
      number: "05",
      icon: Brain,
      title: "AI Recommends Talent",
      description: "Our matchmaking system suggests the best-fit candidates based on their TTET scores."
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Hire & Grow",
      description: "Review candidates, conduct interviews, and hire verified skilled talent for your team."
    }
  ];

  const aiFeatures = [
    {
      icon: Brain,
      title: "Smart Matching Algorithm",
      description: "Analyzes TTET scores, skills, experience, and startup requirements to find perfect matches."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Get instant notifications when new opportunities or candidates match your profile."
    },
    {
      icon: Shield,
      title: "Verified Data Only",
      description: "All matching is based on verified TTET scores and TTP ratings - no fake credentials."
    },
    {
      icon: Target,
      title: "Precision Pairing",
      description: "Goes beyond keywords - understands skill depth, startup culture, and growth potential."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How <span className="text-primary">It Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent, skill-first platform connecting verified talent with legitimate startups through AI-driven matching.
          </p>
        </div>
      </section>

      {/* For Talents */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">For Talented Individuals</h2>
            <p className="text-xl text-muted-foreground">
              Your journey from skilled professional to employed talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentSteps.map((step, index) => (
              <Card key={index} className="hover-lift relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none pr-4">
                  {step.number}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-primary group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/talent-portal">
              <Button size="lg" className="gradient-primary text-white shadow-primary">
                Explore Talent Portal <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Startups */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">For Startups & Businesses</h2>
            <p className="text-xl text-muted-foreground">
              Find verified talent that drives your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startupSteps.map((step, index) => (
              <Card key={index} className="hover-lift relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-secondary/5 leading-none pr-4">
                  {step.number}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 shadow-secondary group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/startup-portal">
              <Button size="lg" className="gradient-secondary text-white shadow-secondary">
                Explore Startup Portal <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Matching Process */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Brain className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">AI-Powered Matchmaking</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our intelligent system combines TTET scores and TTP ratings to create perfect talent-startup pairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8 flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Matching Flow Visualization */}
          <Card className="p-8 md:p-12 gradient-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">TTET Score</h3>
                <p className="text-muted-foreground">Verified Skills</p>
              </div>

              <ArrowRight className="w-12 h-12 text-primary hidden md:block" />
              <div className="text-4xl font-bold text-primary md:hidden">+</div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4 shadow-secondary">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">TTP Rating</h3>
                <p className="text-muted-foreground">Verified Startups</p>
              </div>

              <ArrowRight className="w-12 h-12 text-secondary hidden md:block" />
              <div className="text-4xl font-bold text-secondary md:hidden">=</div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Perfect Match</h3>
                <p className="text-muted-foreground">AI Powered</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of verified talents and startups building the future together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ttet">
              <Button size="lg" className="gradient-primary text-white shadow-primary">
                Take the TTET
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
