import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Award, Briefcase, Bell, TrendingUp, Code, Palette, Film, Music, PenTool, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TalentPortal = () => {
  const domains = [
    { icon: Code, name: "Coding", count: 245 },
    { icon: Palette, name: "Design", count: 189 },
    { icon: Film, name: "Video Editing", count: 156 },
    { icon: Music, name: "Music Production", count: 98 },
    { icon: PenTool, name: "Writing", count: 167 },
    { icon: FileText, name: "Content Creation", count: 203 }
  ];

  const features = [
    {
      icon: Target,
      title: "TTET Verified Profile",
      description: "Your skills verified through our comprehensive eligibility test, giving you credibility with employers."
    },
    {
      icon: Award,
      title: "Skill Badges & Certificates",
      description: "Earn badges for completing tests and showcase verified certificates on your profile."
    },
    {
      icon: Briefcase,
      title: "Portfolio Showcase",
      description: "Upload your work samples, projects, and achievements to demonstrate your capabilities."
    },
    {
      icon: Bell,
      title: "Smart Job Alerts",
      description: "Get notified when startups post opportunities matching your verified skill set."
    },
    {
      icon: TrendingUp,
      title: "Career Growth Tracking",
      description: "Monitor your applications, interviews, and career progression all in one place."
    }
  ];

  const mockProfile = {
    name: "Alex Kumar",
    domain: "Full Stack Developer",
    ttetScore: 92,
    initials: "AK",
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    projects: 12,
    completedTests: 3
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Talent <span className="text-primary">Portal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your skill-first professional profile. Get verified, showcase your abilities, and land opportunities based on what you can do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ttet">
              <Button size="lg" className="gradient-primary text-white shadow-primary">
                Take TTET Test
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Sample Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Sample Profile Preview */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Your Professional Profile</h2>
          
          <Card className="max-w-4xl mx-auto shadow-primary hover-lift">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <Avatar className="w-32 h-32">
                  <AvatarFallback className="text-4xl font-bold bg-gradient-primary text-white">
                    {mockProfile.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{mockProfile.name}</h3>
                      <p className="text-xl text-primary font-semibold">{mockProfile.domain}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-5xl font-bold text-primary mb-1">{mockProfile.ttetScore}</div>
                      <p className="text-sm text-muted-foreground">TTET Score</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mockProfile.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold">{mockProfile.projects}</p>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold">{mockProfile.completedTests}</p>
                      <p className="text-sm text-muted-foreground">Tests Passed</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-sm text-muted-foreground">Matches</p>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary text-white">
                    Create Your Profile
                  </Button>
                </div>
              </div>
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-primary">
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

      {/* Domain Selection */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Domain</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Select your area of expertise and start building your verified profile
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="hover-lift cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                    <domain.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{domain.name}</h3>
                  <p className="text-muted-foreground">{domain.count} verified talents</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/ttet">
              <Button size="lg" className="gradient-primary text-white shadow-primary">
                Start Your TTET Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-bold italic mb-6">
            "Thappu senja thalila adi"
          </blockquote>
          <p className="text-xl text-muted-foreground">
            Do the right thing, face the right outcome. Your skills deserve recognition.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalentPortal;
