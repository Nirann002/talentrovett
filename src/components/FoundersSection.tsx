import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const FoundersSection = () => {
  const founders = [
    {
      name: "Niranjan Saravanan",
      role: "Backend & Architecture",
      education: "ECM, VIT Chennai",
      initials: "NS",
      color: "gradient-primary",
      bio: "Passionate about scalable systems and clean code. Building the backend that powers Talentrove's matching engine.",
    },
    {
      name: "U.S. Sanjeevan",
      role: "Frontend & UX",
      education: "EEE, SVCE",
      initials: "US",
      color: "gradient-secondary",
      bio: "Creating beautiful, intuitive interfaces that make talent discovery effortless and engaging.",
    },
    {
      name: "Sai Vigneshwar.M",
      role: "Cybersecurity & Database",
      education: "CSE (Cybersecurity), VITAP",
      initials: "SV",
      color: "bg-accent",
      bio: "Ensuring data security and integrity. Protecting user information with enterprise-grade security measures.",
    },
  ];

  return (
    <section id="founders" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet the <span className="gradient-secondary bg-clip-text text-transparent">Founders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineering students from MVM Chetpet who decided to make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift shadow-soft gradient-card border-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24 border-4 border-background shadow-lg group-hover:scale-110 transition-smooth">
                    <AvatarFallback className={`${founder.color} text-white text-2xl font-bold`}>
                      {founder.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <div className="space-y-1">
                    <p className="text-primary font-semibold">{founder.role}</p>
                    <p className="text-sm text-muted-foreground">{founder.education}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-center text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4">
                  <button className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Context */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <Card className="p-8 gradient-card shadow-soft border-0">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">All studied together at MVM Chetpet.</span> After witnessing countless talented individuals struggle to find opportunities without formal degrees, they came together to build Talentrove - a platform that values skill over certificates.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
