import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Users, TrendingUp, Heart, Lightbulb, Shield, Mail, Github, LucideIcon, Sparkles, Zap, Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFounder, setActiveFounder] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

  const timeline: Array<{
    year: string;
    event: string;
    description: string;
    Icon: LucideIcon;
    color: string;
  }> = [
    { year: "2023", event: "Met at MVM in 11th Grade", description: "Three students from the computer science group crossed paths at MVM Chetpet during 11th grade in 2023", Icon: Users, color: "from-blue-500 to-cyan-500" },
    { year: "2024", event: "Ideation, Prototype & First Pitch", description: "Conceptualized Talentrove, built our first prototype, pitched it... and failed. But failure taught us resilience.", Icon: Lightbulb, color: "from-purple-500 to-pink-500" },
    { year: "2025", event: "College Comeback & Real Build", description: "Back stronger during college. Currently building the actual platform that will change how talent meets opportunity.", Icon: Target, color: "from-orange-500 to-red-500" },
    { year: "Future", event: "Scaling & Empowering Talents", description: "Growing the platform to connect thousands of talents with opportunities worldwide", Icon: TrendingUp, color: "from-green-500 to-emerald-500" }
  ];

  const values: Array<{
    Icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    {
      Icon: Target,
      title: "Skill > Degree",
      description: "We believe real talent and practical skills matter more than certificates and traditional qualifications."
    },
    {
      Icon: Shield,
      title: "Trust & Transparency",
      description: "Every talent is verified through TTET, every startup rated through TTP. Complete transparency for fair opportunities."
    },
    {
      Icon: Heart,
      title: "Impact-Driven",
      description: "Our mission is to empower skilled individuals and help startups find genuine talent. Creating meaningful employment."
    },
    {
      Icon: TrendingUp,
      title: "Innovation",
      description: "Using AI-driven matchmaking to connect the right talent with the right opportunity, efficiently and fairly."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cursor follower effect */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0 transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 gradient-hero relative overflow-hidden">
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `translateY(${scrollY * 0.1 * (i % 3)}px)`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
        
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="relative inline-block mb-6">
              <Sparkles className="absolute -top-8 -left-8 w-8 h-8 text-primary animate-pulse" />
              <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <h1 
                className="text-5xl md:text-7xl font-bold leading-tight transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              >
                Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">Story</span>
              </h1>
            </div>
            
            <p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-300 hover:text-foreground cursor-default"
              style={{
                transform: `translateY(${scrollY * -0.05}px)`,
              }}
            >
              Three friends from MVM Chetpet with a shared vision: to create a world where <span className="text-primary font-semibold hover:scale-110 inline-block transition-transform">skill speaks louder than degrees</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { icon: Rocket, text: 'Founded in 2024', color: 'primary', delay: '0s' },
                { icon: Users, text: 'Built by Students', color: 'secondary', delay: '0.2s' },
                { icon: Zap, text: 'Skill-First Platform', color: 'accent', delay: '0.4s' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  style={{ animationDelay: item.delay }}
                >
                  <item.icon className={`w-5 h-5 text-${item.color} group-hover:rotate-12 group-hover:scale-125 transition-all duration-300`} />
                  <span className="font-medium group-hover:text-primary transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift group border-2 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <CardContent className="p-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                  <Target className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 cursor-default">Our Mission</h2>
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-700 mb-4"></div>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  To empower skilled individuals who lack traditional degrees by connecting them with startups and businesses that value real talent, practical ability, and proven skills over paperwork.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift group border-2 hover:border-secondary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-secondary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <CardContent className="p-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-secondary/50">
                  <TrendingUp className="w-8 h-8 text-white group-hover:translate-y-[-4px] transition-transform duration-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300 cursor-default">Our Vision</h2>
                <div className="h-1 w-0 bg-gradient-to-r from-secondary to-accent rounded-full group-hover:w-full transition-all duration-700 mb-4"></div>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  A world where talent, not academic credentials, defines your future. Where every skilled person gets a fair chance, and every startup finds the right fit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-default inline-block">
              Meet the <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">
              Three engineers united by a common goal: democratizing opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card 
                key={index} 
                className={`hover-lift group border-2 transition-all duration-700 bg-card/80 backdrop-blur-sm cursor-pointer relative overflow-hidden ${
                  activeFounder === index ? 'border-primary scale-105 shadow-2xl shadow-primary/30' : 'hover:border-primary/30'
                }`}
                onClick={() => setActiveFounder(activeFounder === index ? null : index)}
                onMouseEnter={() => setActiveFounder(index)}
                onMouseLeave={() => setActiveFounder(null)}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated particles around card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-lg animate-pulse"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
                    {/* Rotating border effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                    
                    {/* Pulsing rings */}
                    <div className="absolute -inset-3 border-2 border-primary/20 rounded-full group-hover:scale-125 group-hover:border-primary/40 transition-all duration-500"></div>
                    <div className="absolute -inset-4 border border-secondary/20 rounded-full group-hover:scale-150 group-hover:border-secondary/40 transition-all duration-700"></div>
                    
                    <Avatar className="w-28 h-28 relative border-4 border-background shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-500">
                      <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary text-white group-hover:scale-110 transition-transform duration-300">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Floating icons */}
                    <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-all duration-300 group-hover:scale-105">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-2 text-lg group-hover:scale-105 transition-transform duration-300">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 font-medium group-hover:text-foreground transition-colors duration-300">{founder.education}</p>
                  
                  {/* Animated divider */}
                  <div className="relative h-1 mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:animate-pulse"></div>
                    <div className="h-full w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto group-hover:w-full transition-all duration-700"></div>
                  </div>
                  
                  <div className={`transition-all duration-500 ${activeFounder === index ? 'max-h-96' : 'max-h-20 overflow-hidden'}`}>
                    <p className="text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground transition-colors duration-300">{founder.bio}</p>
                  </div>
                  
                  <div className="flex justify-center gap-3 mt-6">
                    {founder.email && (
                      <a
                        href={`mailto:${founder.email}`}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/30 hover:to-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-md hover:shadow-xl hover:shadow-primary/50 group/btn"
                        aria-label="Email"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-5 h-5 text-primary group-hover/btn:scale-110 transition-transform" />
                      </a>
                    )}
                    <a
                      href={founder.github}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 hover:from-secondary/30 hover:to-secondary/20 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-md hover:shadow-xl hover:shadow-secondary/50 group/btn"
                      aria-label="GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-secondary group-hover/btn:scale-110 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
        {/* Animated background elements with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.1}deg)` }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '1s', transform: `translateY(${scrollY * -0.03}px) rotate(${scrollY * -0.1}deg)` }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '2s', transform: `translate(-50%, -50%) translateY(${scrollY * 0.08}px)` }}
          ></div>
        </div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 group cursor-default">
              <Sparkles className="w-8 h-8 text-primary animate-pulse group-hover:rotate-180 transition-transform duration-700" />
              <h2 className="text-5xl md:text-6xl font-bold hover:scale-105 transition-transform duration-300">
                Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">Journey</span>
              </h2>
              <Sparkles className="w-8 h-8 text-secondary animate-pulse group-hover:rotate-180 transition-transform duration-700" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 hover:text-foreground hover:scale-105 transition-all duration-300 cursor-default">
              From classmates to co-founders
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
              Three friends from MVM Chetpet's computer science group who dared to dream big, failed, learned, and came back stronger.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical timeline line with animation */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-30"></div>
              <div 
                className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary to-transparent animate-pulse"
                style={{
                  transform: `translateY(${(scrollY * 0.5) % 500}px)`,
                }}
              ></div>
            </div>
            
            <div className="space-y-24 md:space-y-32">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col animate-fade-in group/timeline`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Timeline dot with animated rings */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative group-hover/timeline:scale-125 transition-transform duration-500">
                      {/* Outer pulsing ring */}
                      <div className={`absolute -inset-6 rounded-full bg-gradient-to-r ${item.color} opacity-10 group-hover/timeline:opacity-30 animate-ping transition-opacity duration-300`} style={{ animationDuration: '3s' }}></div>
                      
                      {/* Rotating ring */}
                      <div className={`absolute -inset-4 rounded-full border-2 border-dashed opacity-0 group-hover/timeline:opacity-50 transition-opacity duration-300`} 
                        style={{ 
                          borderImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary))) 1`,
                          animation: 'spin 6s linear infinite'
                        }}
                      ></div>
                      
                      {/* Middle pulse ring */}
                      <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${item.color} opacity-20 group-hover/timeline:opacity-40 animate-pulse transition-opacity duration-300`}></div>
                      
                      {/* Main icon container */}
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover/timeline:scale-110 group-hover/timeline:rotate-12 group-hover/timeline:shadow-3xl border-4 border-background cursor-pointer`}>
                        <item.Icon className="w-10 h-10 text-white group-hover/timeline:scale-125 group-hover/timeline:rotate-12 transition-all duration-300" strokeWidth={2.5} />
                      </div>
                      
                      {/* Sparkle effects */}
                      <Sparkles className="absolute -top-8 -right-8 w-6 h-6 text-primary opacity-0 group-hover/timeline:opacity-100 group-hover/timeline:animate-pulse transition-all duration-500" />
                      <Zap className="absolute -bottom-8 -left-8 w-6 h-6 text-secondary opacity-0 group-hover/timeline:opacity-100 group-hover/timeline:animate-pulse transition-all duration-500" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'} pl-24 md:pl-0`}>
                    <Card className="relative overflow-hidden hover-lift shadow-2xl border-2 group-hover/timeline:border-primary group-hover/timeline:shadow-3xl group-hover/timeline:shadow-primary/30 transition-all duration-700 group-hover/timeline:scale-110 bg-card/90 backdrop-blur-md cursor-pointer">
                      {/* Animated gradient overlays */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover/timeline:opacity-20 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Floating particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary opacity-0 group-hover/timeline:opacity-100 animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover/timeline:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      
                      <CardContent className="p-8 relative z-10 space-y-4">
                        {/* Year badge with glow */}
                        <div className="relative inline-block">
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-xl opacity-0 group-hover/timeline:opacity-50 transition-opacity duration-500`}></div>
                          <div className={`relative inline-block px-6 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg shadow-lg transform group-hover/timeline:scale-125 group-hover/timeline:-rotate-3 transition-all duration-300`}>
                            {item.year}
                          </div>
                        </div>
                        
                        {/* Event title */}
                        <h3 className="text-3xl font-bold text-foreground leading-tight group-hover/timeline:text-primary group-hover/timeline:scale-105 transition-all duration-300 cursor-default">
                          {item.event}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed group-hover/timeline:text-foreground transition-colors duration-300">
                          {item.description}
                        </p>
                        
                        {/* Decorative expanding line with pulse */}
                        <div className="relative overflow-hidden pt-2">
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 blur-sm group-hover/timeline:opacity-40 transition-opacity duration-500`}></div>
                          <div className={`relative h-1.5 w-24 bg-gradient-to-r ${item.color} rounded-full ${index % 2 === 0 ? 'md:ml-auto' : ''} group-hover/timeline:w-full transition-all duration-700 shadow-lg group-hover/timeline:shadow-2xl`}>
                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Story summary card */}
          <div className="mt-32 group/story">
            <Card className="p-8 md:p-12 shadow-2xl border-2 bg-gradient-to-br from-card to-muted/20 hover:border-primary/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl hover:shadow-primary/20 relative overflow-hidden cursor-default">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover/story:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/story:opacity-100 transition-opacity duration-700"></div>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent to-primary rounded-full group-hover/story:w-32 transition-all duration-700"></div>
                  <h3 className="text-3xl font-bold text-center group-hover/story:text-primary group-hover/story:scale-110 transition-all duration-300">The Story Behind The Vision</h3>
                  <div className="h-1 w-20 bg-gradient-to-l from-transparent to-secondary rounded-full group-hover/story:w-32 transition-all duration-700"></div>
                </div>
...
              </CardContent>
            </Card>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-20 text-center group/badge">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 group-hover/badge:opacity-100 animate-pulse transition-opacity duration-500"></div>
              <div className="relative inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg shadow-2xl animate-pulse hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer">
                <span className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover/badge:translate-x-[-4px] group-hover/badge:translate-y-[-4px] transition-transform duration-300" />
                  The Journey Continues...
                  <Sparkles className="w-6 h-6 group-hover/badge:rotate-180 transition-transform duration-500" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating orbs */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateY(${scrollY * (0.02 + Math.random() * 0.05)}px)`,
              filter: 'blur(40px)',
            }}
          />
        ))}
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default inline-block">
              Our Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="hover-lift group border-2 hover:border-primary/50 transition-all duration-700 bg-card/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/30 group-hover:to-secondary/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative w-full h-full rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.Icon className="w-8 h-8 text-primary group-hover:text-secondary group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary group-hover:scale-105 transition-all duration-300">{value.title}</h3>
                  
                  <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-700 mb-4"></div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-tr-2xl transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary/0 group-hover:border-secondary/50 rounded-bl-2xl transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
