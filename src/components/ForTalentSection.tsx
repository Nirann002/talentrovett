import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, UserCheck, Trophy, Briefcase } from "lucide-react";

const ForTalentSection = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "Fair Testing",
      description: "Skill-based assessments that truly measure your abilities",
    },
    {
      icon: Trophy,
      title: "Verified Scores",
      description: "Get recognized with TTET certification that employers trust",
    },
    {
      icon: Briefcase,
      title: "Long-term Jobs",
      description: "Connect with startups looking for lasting partnerships",
    },
  ];

  return (
    <section id="for-talent" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                For Talented Individuals
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Skills <span className="gradient-primary bg-clip-text text-transparent">Deserve Recognition</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                No degree? No problem. Register, take the TTET, and get verified. Show startups what you're truly capable of.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start group hover:translate-x-2 transition-smooth"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 shadow-primary group-hover:scale-110 transition-smooth">
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
              className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-primary text-lg px-8 py-6 h-auto"
            >
              Start Your Journey
            </Button>
          </div>

          {/* Right Content - Feature Card */}
          <Card className="p-8 gradient-card shadow-soft border-0 hover-lift">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">How to Get Started</h3>
                <p className="text-muted-foreground">Join thousands of talented individuals</p>
              </div>

              <div className="space-y-4">
                {[
                  "Create your free account",
                  "Complete your profile",
                  "Take the TTET in your domain",
                  "Get verified and start matching",
                  "Connect with innovative startups",
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">TTET Domains:</span> Coding, Design, Content Writing, Video Editing, Marketing, and 20+ more fields
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForTalentSection;
