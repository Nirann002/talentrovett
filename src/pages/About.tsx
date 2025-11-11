import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Users, TrendingUp, Heart, Lightbulb, Shield, Mail, Github, LucideIcon } from "lucide-react";

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
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              From classmates to co-founders
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three friends from MVM Chetpet's computer science group who dared to dream big, failed, learned, and came back stronger.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-green-500 transform -translate-x-1/2 opacity-30"></div>
            
            <div className="space-y-24 md:space-y-32">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col animate-fade-in`}
                >
                  {/* Timeline dot with animated rings */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div className={`absolute -inset-4 rounded-full bg-gradient-to-r ${item.color} opacity-20 animate-ping`} style={{ animationDuration: '3s' }}></div>
                      
                      {/* Middle pulse ring */}
                      <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${item.color} opacity-30 animate-pulse`}></div>
                      
                      {/* Main icon container */}
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-125 hover:rotate-12 border-4 border-background`}>
                        <item.Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'} pl-24 md:pl-0`}>
                    <Card className="relative overflow-hidden hover-lift shadow-2xl border-2 group hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm">
                      {/* Card gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <CardContent className="p-8 relative z-10 space-y-4">
                        {/* Year badge */}
                        <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          {item.year}
                        </div>
                        
                        {/* Event title */}
                        <h3 className="text-3xl font-bold text-foreground leading-tight">
                          {item.event}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Decorative expanding line */}
                        <div className={`h-1.5 w-24 bg-gradient-to-r ${item.color} rounded-full ${index % 2 === 0 ? 'md:ml-auto' : ''} group-hover:w-full transition-all duration-700 shadow-lg`}></div>
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
          <div className="mt-32">
            <Card className="p-8 md:p-12 shadow-2xl border-2 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="space-y-6">
                <h3 className="text-3xl font-bold text-center mb-6">The Story Behind The Vision</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    In <span className="font-bold text-primary">2023</span>, three students from the computer science group at <span className="font-bold">MVM Chetpet</span> became friends during their 11th grade. We bonded over late-night coding sessions, tech dreams, and a shared frustration: seeing talented people around us struggle to find opportunities simply because they lacked the "right" degrees.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Fast forward to <span className="font-bold text-secondary">2024</span>, we decided to do something about it. We brainstormed, prototyped, and pitched <span className="font-bold">Talentrove</span> as our school project. We were excited, confident... and we <span className="font-bold text-destructive">failed</span>. The pitch didn't land. The prototype had issues. It hurt, but it taught us something crucial: <span className="italic">great ideas need great execution</span>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    In <span className="font-bold text-accent">2025</span>, now in college and armed with the lessons from our failure, we came back stronger. We're rebuilding Talentrove from the ground up - not just as a school project, but as a real platform that will revolutionize how talent meets opportunity. This time, we're building it right.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our mission is simple but powerful: create a world where <span className="font-bold text-primary">skill speaks louder than degrees</span>, where every talented individual gets a fair shot, and where startups can find the right people based on ability, not paperwork.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-20 text-center">
            <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg shadow-2xl animate-pulse">
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
                  <value.Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Leaders Say</h2>
            <p className="text-xl text-muted-foreground">
              Industry leaders praise our mission to democratize opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Talentrove is doing something remarkable - they're proving that talent and dedication matter more than credentials. This platform could reshape how we think about hiring and opportunity."
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                      BG
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg">Bill Gates</p>
                    <p className="text-sm text-muted-foreground">Co-founder, Microsoft</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "We need more platforms like Talentrove that focus on what people can do, not what's on their resume. Skills-based hiring is the future, and they're leading the way."
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      MZ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg">Mark Zuckerberg</p>
                    <p className="text-sm text-muted-foreground">CEO, Meta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "The most talented people I've worked with often didn't have traditional degrees. Talentrove understands this and is building a system that rewards actual ability."
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      EM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg">Elon Musk</p>
                    <p className="text-sm text-muted-foreground">CEO, Tesla & SpaceX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Innovation comes from thinking differently. Talentrove challenges the status quo of traditional hiring and creates pathways for untapped talent to shine."
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-gray-600 to-gray-800 text-white">
                      SJ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg">Steve Jobs</p>
                    <p className="text-sm text-muted-foreground">Co-founder, Apple</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
