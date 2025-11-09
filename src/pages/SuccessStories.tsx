import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Award, TrendingUp, Users } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "TechFlow AI",
      ttetScore: 94,
      story: "I didn't have a CS degree, but TTET verified my coding skills. Within 2 weeks of joining Talentrove, I got matched with TechFlow AI. Now I'm leading their backend team.",
      initials: "PS"
    },
    {
      name: "Rahul Verma",
      role: "UI/UX Designer",
      company: "DesignHub",
      ttetScore: 89,
      story: "Traditional job applications always rejected me. Talentrove changed that. My TTET score spoke for my design abilities, and I landed my dream job.",
      initials: "RV"
    },
    {
      name: "Ananya Reddy",
      role: "Content Writer",
      company: "ContentPro",
      ttetScore: 91,
      story: "From freelancing to full-time employment. Talentrove's AI matched me with a startup that values writing skills over English degrees.",
      initials: "AR"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-primary">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real skills, real opportunities. See how Talentrove is changing lives.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-start">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-white">
                        {story.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                      <p className="text-primary font-semibold mb-2">{story.role} at {story.company}</p>
                      <p className="text-muted-foreground mb-4">{story.story}</p>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="font-bold">TTET Score: {story.ttetScore}</span>
                      </div>
                    </div>
                  </div>
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

export default SuccessStories;
