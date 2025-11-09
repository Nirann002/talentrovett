import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Where <span className="gradient-primary bg-clip-text text-transparent">Skill Speaks</span>{" "}
              Louder Than <span className="gradient-secondary bg-clip-text text-transparent">Degrees</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Connecting raw talent with real opportunities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-primary group text-lg px-8 py-6 h-auto"
            >
              Join as Talent
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-smooth text-lg px-8 py-6 h-auto"
            >
              Join as Startup
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-muted-foreground">Talents Verified</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">200+</div>
              <div className="text-sm text-muted-foreground">Startups Onboarded</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-muted-foreground">Match Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
