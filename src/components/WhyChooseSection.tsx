import { GraduationCap, Shield, Zap, Users, Heart, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Skill > Degree",
      description: "We believe in what you can do, not where you studied",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Transparent Hiring",
      description: "Verified scores and ratings for complete transparency",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "AI-Driven Matching",
      description: "Smart algorithms connect the right talent with the right opportunity",
      color: "accent",
    },
    {
      icon: Users,
      title: "Verified Community",
      description: "Both startups and talents go through verification processes",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Social Impact Focus",
      description: "Creating opportunities for skilled individuals everywhere",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Connect with fast-growing startups ready to scale",
      color: "accent",
    },
  ];

  const getGradient = (color: string) => {
    switch(color) {
      case 'secondary': return 'gradient-secondary';
      case 'accent': return 'bg-accent';
      default: return 'gradient-primary';
    }
  };

  return (
    <section id="why-choose" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="gradient-primary bg-clip-text text-transparent">Talentrove</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building a fairer future for talent and opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift shadow-soft gradient-card border-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-xl ${getGradient(reason.color)} flex items-center justify-center ${reason.color === 'primary' ? 'shadow-primary' : reason.color === 'secondary' ? 'shadow-secondary' : ''} group-hover:scale-110 transition-smooth`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Verified Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">Secure</div>
              <div className="text-sm text-muted-foreground">Data Protection</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">Fair</div>
              <div className="text-sm text-muted-foreground">Opportunity for All</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
