import { FileCheck, Building2, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileCheck,
      title: "Take the TTET",
      description: "Get your verified skill score through our comprehensive testing system. Showcase your real abilities.",
    },
    {
      number: "02",
      icon: Building2,
      title: "Explore Verified Startups",
      description: "Browse startups rated with TTP - our transparent rating system based on innovation and legitimacy.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Get Matched & Hired",
      description: "Our AI connects you with companies that value your ability. Land your dream role based on merit.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="gradient-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to unlock your potential
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Circle */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-primary z-10 group-hover:scale-110 transition-smooth">
                  {step.number}
                </div>

                <div className="pt-16 p-8 bg-card rounded-2xl border-2 border-border hover-lift shadow-soft h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
