import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Building2, 
  Clock, 
  MapPin, 
  Send, 
  Sparkles, 
  Users, 
  Briefcase,
  CheckCircle2
} from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Contact{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Primary Support Email */}
              <Card className="border border-border bg-card shadow-soft hover:shadow-primary/10 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">User & Candidate Support</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        For general inquiries, account support, and candidate assistance
                      </p>
                      <a 
                        href="mailto:support@talentrove.com" 
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group/link"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="border-b border-primary/30 group-hover/link:border-primary transition-colors">
                          support@talentrove.com
                        </span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business & Enterprise Section */}
              <Card className="border border-border bg-card shadow-soft hover:shadow-secondary/10 transition-all duration-300 overflow-hidden group relative">
                <div className="absolute top-0 right-0 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-bl-lg">
                  Enterprise
                </div>
                <CardContent className="p-6 md:p-8 pt-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Large Businesses & Enterprise Partnerships
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        For enterprise hiring, bulk recruitment, and strategic partnerships
                      </p>
                      <a 
                        href="mailto:businesstt-support@talentrove.com" 
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group/link"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span className="border-b border-secondary/30 group-hover/link:border-secondary transition-colors">
                          businesstt-support@talentrove.com
                        </span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Hours & Location */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border border-border bg-card shadow-soft hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground">Support Hours</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Monday – Saturday
                    </p>
                    <p className="text-foreground font-medium">
                      10:00 AM – 6:00 PM IST
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border bg-card shadow-soft hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                    </div>
                    <p className="text-foreground font-medium">
                      India
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Serving nationwide
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <Card className="border border-border bg-card shadow-soft overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Send us a Message</h3>
                    <p className="text-sm text-muted-foreground">We'll get back to you soon</p>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Message Received!</h4>
                    <p className="text-muted-foreground text-center text-sm">
                      Thank you for contacting TalenTROVE (Demo Only)
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                      <Input 
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                      >
                        <SelectTrigger className="bg-background border-border focus:border-primary transition-colors">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          <SelectItem value="careers">Careers at TalenTROVE</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message"
                        placeholder="Write your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-background border-border focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-primary transition-all duration-300 group"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      This is a demo form. No data is collected or stored.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
