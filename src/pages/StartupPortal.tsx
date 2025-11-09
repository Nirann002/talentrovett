import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Target, Users, TrendingUp, Zap, Award, CheckCircle, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const StartupPortal = () => {
  const features = [
    {
      icon: Shield,
      title: "TTP Verified Rating",
      description: "Get rated on innovation, team quality, feasibility, and ethics. Build trust with potential hires."
    },
    {
      icon: Target,
      title: "Smart Talent Matching",
      description: "AI recommends the best-fit candidates based on their TTET scores and your requirements."
    },
    {
      icon: Users,
      title: "Talent Pool Access",
      description: "Browse thousands of verified, skill-tested professionals ready to join your team."
    },
    {
      icon: TrendingUp,
      title: "Hiring Analytics",
      description: "Track applicant engagement, interview conversions, and hiring metrics in real-time."
    },
    {
      icon: Zap,
      title: "Fast Onboarding",
      description: "Streamlined hiring process - from job posting to offer in days, not months."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Every candidate has been tested and verified. No fake resumes, no guesswork."
    }
  ];

  const ttpMetrics = [
    { name: "Innovation", score: 88, color: "bg-primary" },
    { name: "Team Quality", score: 92, color: "bg-secondary" },
    { name: "Product Feasibility", score: 85, color: "bg-accent" },
    { name: "Ethics & Values", score: 95, color: "bg-primary" },
    { name: "Market Potential", score: 78, color: "bg-secondary" }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Access to 5000+ verified talents" },
    { icon: CheckCircle, text: "AI-powered candidate recommendations" },
    { icon: CheckCircle, text: "Direct messaging with applicants" },
    { icon: CheckCircle, text: "Unlimited job postings" },
    { icon: CheckCircle, text: "Hiring analytics dashboard" },
    { icon: CheckCircle, text: "Priority support" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Startup <span className="text-secondary">Portal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find verified, skill-tested talent for your startup. Build your team with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ttp">
              <Button size="lg" className="gradient-secondary text-white shadow-secondary">
                Get TTP Rating
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* TTP Rating Preview */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Your TTP Rating</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Transparent metrics that build trust with potential hires
          </p>
          
          <Card className="max-w-4xl mx-auto shadow-secondary hover-lift">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-8 rounded-full bg-gradient-secondary shadow-secondary mb-4">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-2">TechStart AI</h3>
                <p className="text-xl text-muted-foreground">AI-powered SaaS Platform</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <p className="text-6xl font-bold text-secondary mb-2">87</p>
                  <p className="text-lg text-muted-foreground">Overall TTP Score</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <p className="text-6xl font-bold text-primary mb-2">142</p>
                  <p className="text-lg text-muted-foreground">Talent Matches</p>
                </div>
              </div>

              <div className="space-y-6">
                {ttpMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{metric.name}</span>
                      <span className="font-bold">{metric.score}/100</span>
                    </div>
                    <Progress value={metric.score} className="h-3" />
                  </div>
                ))}
              </div>

              <Button className="w-full mt-8 gradient-secondary text-white">
                Register Your Startup
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Portal Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 shadow-secondary">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What You Get</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to build and scale your team with verified talent
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-lg">{benefit.text}</p>
                  </div>
                ))}
              </div>
              <Link to="/pricing">
                <Button size="lg" className="mt-8 gradient-primary text-white shadow-primary">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
            
            <Card className="p-8 gradient-card">
              <div className="flex items-center gap-4 mb-6">
                <BarChart className="w-12 h-12 text-secondary" />
                <div>
                  <h3 className="text-2xl font-bold">Hiring Dashboard</h3>
                  <p className="text-muted-foreground">Real-time analytics</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-background rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Active Applications</span>
                    <span className="font-bold text-2xl">47</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Interviews Scheduled</span>
                    <span className="font-bold text-2xl">12</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Offers Extended</span>
                    <span className="font-bold text-2xl">5</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-bold italic mb-6">
            "Parambarayaa yenga kolgayadaa"
          </blockquote>
          <p className="text-xl text-muted-foreground">
            Building legacy through quality hiring. Your startup deserves the best talent.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartupPortal;
