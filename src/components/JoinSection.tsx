import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const JoinSection = () => {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-12 gradient-card shadow-soft border-0">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Start Your <span className="gradient-primary bg-clip-text text-transparent">Journey</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands who've already discovered that real talent transcends traditional qualifications
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Verified Testing</p>
                  <p className="text-sm text-muted-foreground">Get recognized for your real skills</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">AI Matching</p>
                  <p className="text-sm text-muted-foreground">Connect with the perfect opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Transparent Process</p>
                  <p className="text-sm text-muted-foreground">Clear ratings and fair evaluations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Growth & Safety</p>
                  <p className="text-sm text-muted-foreground">Verified startups and secure platform</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-smooth shadow-primary group text-lg px-8 py-6 h-auto"
              >
                Sign Up as Talent
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                className="gradient-secondary text-white hover:opacity-90 transition-smooth shadow-secondary group text-lg px-8 py-6 h-auto"
              >
                Register Your Startup
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>

            {/* Small print */}
            <p className="text-sm text-muted-foreground pt-4">
              Free to join • Secure verification • Trusted by 500+ users
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default JoinSection;
