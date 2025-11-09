import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const ForStartupsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Build Trust with TTP",
      description: "Get rated on your innovation, pitch, and legitimacy",
    },
    {
      icon: Users,
      title: "Access Top Talent",
      description: "Connect with verified skilled individuals ready to work",
    },
    {
      icon: Target,
      title: "AI-Powered Matching",
      description: "Find the perfect candidates for your startup's needs",
    },
  ];

  return (
    <section id="for-startups" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content - Feature Card */}
          <Card className="p-8 gradient-card shadow-soft border-0 hover-lift order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Startup Verification Process</h3>
                <p className="text-muted-foreground">Build credibility with TTP rating</p>
              </div>

              <div className="space-y-4">
                {[
                  "Register your startup details",
                  "Submit your product pitch",
                  "Get evaluated on innovation & viability",
                  "Receive your TTP rating",
                  "Start hiring verified talent",
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">TTP Benefits:</span> Higher ratings attract better talent and build trust with potential hires
                </p>
              </div>
            </div>
          </Card>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                For Innovative Startups
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Find <span className="gradient-secondary bg-clip-text text-transparent">Real Talent</span> for Your Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                Register your startup, pitch your idea, and get rated. Attract talented individuals who are hungry to make an impact.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start group hover:translate-x-2 transition-smooth"
                >
                  <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0 shadow-secondary group-hover:scale-110 transition-smooth">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="gradient-secondary text-white hover:opacity-90 transition-smooth shadow-secondary text-lg px-8 py-6 h-auto"
            >
              Register Your Startup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStartupsSection;
