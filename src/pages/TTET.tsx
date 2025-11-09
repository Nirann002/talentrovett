import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, Shield, Award, CheckCircle, Brain, Code, Palette, Film, Music, PenTool, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const TTET = () => {
  const domains = [
    {
      icon: Code,
      name: "Software Development",
      skills: ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps"],
      duration: "90 mins",
      questions: "50"
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      skills: ["UI Design", "UX Research", "Prototyping", "Visual Design"],
      duration: "75 mins",
      questions: "40"
    },
    {
      icon: Film,
      name: "Video Editing",
      skills: ["Color Grading", "Motion Graphics", "VFX", "Sound Design"],
      duration: "60 mins",
      questions: "35"
    },
    {
      icon: Music,
      name: "Music Production",
      skills: ["Mixing", "Mastering", "Composition", "Sound Engineering"],
      duration: "60 mins",
      questions: "35"
    },
    {
      icon: PenTool,
      name: "Content Writing",
      skills: ["Copywriting", "Technical Writing", "SEO", "Storytelling"],
      duration: "60 mins",
      questions: "40"
    },
    {
      icon: FileText,
      name: "Digital Marketing",
      skills: ["SEO/SEM", "Social Media", "Analytics", "Content Strategy"],
      duration: "75 mins",
      questions: "45"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Adaptive Testing",
      description: "Questions adjust to your skill level - the better you perform, the more challenging they become."
    },
    {
      icon: Shield,
      title: "Proctored & Secure",
      description: "Real-time monitoring ensures test integrity and prevents cheating for fair assessment."
    },
    {
      icon: Target,
      title: "Real-World Scenarios",
      description: "Practical problems you'd face on the job, not just theoretical questions."
    },
    {
      icon: Award,
      title: "Instant Certification",
      description: "Get your verified score and digital certificate immediately after completion."
    },
    {
      icon: TrendingUp,
      title: "Skill Tracking",
      description: "Retake tests to improve your score and track your skill development over time."
    },
    {
      icon: CheckCircle,
      title: "Employer Verified",
      description: "Your TTET score is trusted by hundreds of startups and businesses on our platform."
    }
  ];

  const testProcess = [
    { step: "1", title: "Select Domain", desc: "Choose your area of expertise" },
    { step: "2", title: "Identity Verification", desc: "Quick ID check to ensure test integrity" },
    { step: "3", title: "Take Assessment", desc: "Complete the adaptive skill test" },
    { step: "4", title: "Get Results", desc: "Receive your verified score & certificate" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-gradient-primary mb-6 shadow-primary">
            <Target className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">TTET</span> - Talentrove Eligibility Test
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Prove your skills, earn verification, unlock opportunities. A comprehensive, proctored assessment that measures real-world ability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-primary">
              Start Your TTET
            </Button>
            <Button size="lg" variant="outline">
              View Sample Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Take the TTET?</h2>
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

      {/* Test Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {testProcess.map((item, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Domains */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Available Test Domains</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Choose your expertise and prove your skills
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className="hover-lift group cursor-pointer">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                    <domain.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{domain.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {domain.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{domain.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>{domain.questions} Qs</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What to Expect</h2>
          <Card className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Adaptive Difficulty</h3>
                  <p className="text-muted-foreground">
                    Questions become harder as you answer correctly, ensuring accurate skill measurement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Proctoring</h3>
                  <p className="text-muted-foreground">
                    Camera and screen monitoring ensure test integrity and prevent cheating.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Practical Scenarios</h3>
                  <p className="text-muted-foreground">
                    Real-world problems that test actual job skills, not just theoretical knowledge.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                  <p className="text-muted-foreground">
                    Get your score and certification immediately upon completion.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Retake Anytime</h3>
                  <p className="text-muted-foreground">
                    Improve your score by retaking the test after 30 days.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Prove Your Skills?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of verified talents and unlock better job opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-primary">
              Take TTET Now
            </Button>
            <Link to="/talent-portal">
              <Button size="lg" variant="outline">
                Learn More About Talent Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TTET;
