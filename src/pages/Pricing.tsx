import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Pricing</h1>
          <p className="text-xl text-muted-foreground mb-12">Simple, transparent pricing for startups and talents</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">For Talents</h3>
                <p className="text-5xl font-bold text-primary mb-6">FREE</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Free TTET</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> Free Profile</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /> AI Matching</li>
                </ul>
                <Button className="w-full gradient-primary text-white">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">For Startups</h3>
                <p className="text-5xl font-bold text-secondary mb-6">₹999<span className="text-lg">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> TTP Rating</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> Unlimited Posts</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary" /> AI Recommendations</li>
                </ul>
                <Button className="w-full gradient-secondary text-white">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
