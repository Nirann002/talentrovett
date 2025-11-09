import { Target, Eye, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Our Story",
      description: "Founded by engineering students who witnessed talented peers struggle to find opportunities due to lacking traditional degrees. We decided to change the narrative.",
    },
    {
      icon: Target,
      title: "Mission",
      description: "Empowering skilled individuals to find meaningful employment by showcasing their true abilities, not their certificates.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "A world where talent, not paperwork, defines your future. Where skills speak louder than degrees.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-primary bg-clip-text text-transparent">Talentrove</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bridging the gap between raw talent and real opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift shadow-soft gradient-card border-0 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-primary group-hover:scale-110 transition-smooth">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
