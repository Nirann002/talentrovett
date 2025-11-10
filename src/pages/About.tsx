import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Users, TrendingUp, Heart, Lightbulb, Shield, Mail, Github } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Niranjan Saravanan",
      role: "Backend Developer",
      education: "ECM, VIT Chennai",
      bio: "Passionate about building scalable systems and solving complex backend challenges. Believes in creating opportunities for skilled individuals regardless of their academic background.",
      initials: "NS",
      email: "niranjansaravanan10296@gmail.com",
      github: "#"
    },
    {
      name: "U.S. Sanjeevan",
      role: "Frontend Developer",
      education: "EEE, SVCE",
      bio: "Crafting beautiful, user-friendly interfaces that make technology accessible to everyone. Committed to bridging the gap between talent and opportunity.",
      initials: "USS",
      email: "ussanjeevan007@gmail.com",
      github: "#"
    },
    {
      name: "Sai Vigneshwar.M",
      role: "Cybersecurity & Database",
      education: "CSE (Cybersecurity), VITAP",
      bio: "Ensuring platform security and data integrity. Dedicated to creating a safe and trustworthy environment for talents and startups alike.",
      initials: "SV",
      github: "#"
    }
  ];

  const timeline = [
    { year: "2023", event: "Met at MVM in 11th Grade", description: "Three students from different backgrounds crossed paths at MVM Chetpet during 11th grade", icon: Users, color: "from-blue-500 to-cyan-500" },
    { year: "2024", event: "School Project Ideation", description: "Brainstormed and conceptualized Talentrove as our ambitious school project", icon: Lightbulb, color: "from-purple-500 to-pink-500" },
    { year: "2025", event: "Prototype Development & Launch", description: "Built and launched our working prototype, turning our vision into reality", icon: Target, color: "from-orange-500 to-red-500" },
    { year: "Future", event: "Scaling & Empowering Talents", description: "Growing the platform to connect thousands of talents with opportunities", icon: TrendingUp, color: "from-green-500 to-emerald-500" }
  ];

  const values = [
    {
      icon: Target,
      title: "Skill > Degree",
      description: "We believe real talent and practical skills matter more than certificates and traditional qualifications."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every talent is verified through TTET, every startup rated through TTP. Complete transparency for fair opportunities."
    },
    {
      icon: Heart,
      title: "Impact-Driven",
      description: "Our mission is to empower skilled individuals and help startups find genuine talent. Creating meaningful employment."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Using AI-driven matchmaking to connect the right talent with the right opportunity, efficiently and fairly."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Three friends from MVM Chetpet with a shared vision: to create a world where skill speaks louder than degrees.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower skilled individuals who lack traditional degrees by connecting them with startups and businesses that value real talent, practical ability, and proven skills over paperwork.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-secondary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  A world where talent, not academic credentials, defines your future. Where every skilled person gets a fair chance, and every startup finds the right fit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Founders</h2>
            <p className="text-xl text-muted-foreground">
              Three engineers united by a common goal: democratizing opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-white">
                      {founder.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-2">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{founder.education}</p>
                  <p className="text-muted-foreground mb-6">{founder.bio}</p>
                  <div className="flex justify-center gap-3">
                    {founder.email && (
                      <a
                        href={`mailto:${founder.email}`}
                        className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                      </a>
                    )}
                    <a
                      href={founder.github}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-smooth"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in">
              Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              From classmates to co-founders
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 opacity-20"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                  style={{ 
                    animation: 'fade-in 0.6s ease-out forwards',
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  {/* Timeline dot with animated ring */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      {/* Pulsing rings */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-20 animate-ping`} style={{ animationDuration: '2s' }}></div>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-40 animate-pulse`}></div>
                      
                      {/* Main icon container */}
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} pl-20 md:pl-0`}>
                    <Card className="p-6 hover-lift shadow-xl border-2 backdrop-blur-sm bg-card/50 group hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <CardContent className="p-4 space-y-3">
                        {/* Year badge */}
                        <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm shadow-lg`}>
                          {item.year}
                        </div>
                        
                        {/* Event title */}
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                          {item.event}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Decorative line */}
                        <div className={`h-1 w-20 bg-gradient-to-r ${item.color} rounded-full ${index % 2 === 0 ? 'md:ml-auto' : ''} group-hover:w-full transition-all duration-500`}></div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-20 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold shadow-xl animate-pulse">
              🚀 The Journey Continues...
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">The Story Behind Talentrove</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                It all started at MVM Chetpet, where three students with different backgrounds but a shared passion for technology became friends. Through countless late-night coding sessions and collaborative projects, we witnessed firsthand how talented individuals were often overlooked simply because they didn't have the "right" degrees.
              </p>
              <p>
                During our college years, we worked on various projects together and noticed a recurring pattern: some of the most skilled developers, designers, and creators we knew were struggling to find opportunities because they lacked traditional academic credentials.
              </p>
              <p>
                That's when the idea for Talentrove was born. We asked ourselves: what if we could create a platform that truly measured skill, not just diplomas? What if startups could find talented individuals based on their actual abilities rather than their educational background?
              </p>
              <p className="text-xl font-semibold text-foreground italic text-center py-6">
                "Uppu Thinna Thanni Kudi" - நீங்கள் செய்த நல்ல காரியத்திற்கு நீங்கள் வெகுமதி பெறுவீர்கள்
              </p>
              <p>
                We built TTET to verify skills objectively, TTP to ensure startup legitimacy, and an AI matchmaking system to connect the right talent with the right opportunity. Our goal is simple: create a fair, transparent platform where skill truly speaks louder than degrees.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
