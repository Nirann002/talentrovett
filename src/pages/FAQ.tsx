import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is TalenTROVE?",
    answer: "TalenTROVE is a next-generation talent discovery platform that connects skilled professionals with innovative startups. Unlike traditional job portals, we focus on verifying real-world abilities through our unique evaluation system, ensuring the right match between talent and opportunity."
  },
  {
    question: "How is TalenTROVE different from traditional job portals?",
    answer: "Traditional job portals rely heavily on resumes and keyword matching. TalenTROVE goes beyond paper credentials by implementing live work evaluations, skill-based assessments, and transparent company ratings. We prioritize actual capability over claimed experience."
  },
  {
    question: "Who can apply on TalenTROVE?",
    answer: "Anyone with demonstrable skills can apply! Whether you're a fresh graduate, career changer, or experienced professional, TalenTROVE welcomes talent from all backgrounds. We believe in potential and proven ability, not just traditional qualifications."
  },
  {
    question: "How does the 3-day live work evaluation work?",
    answer: "Our 3-day evaluation immerses candidates in real work scenarios. You'll tackle actual challenges the company faces, collaborate with team members, and demonstrate your problem-solving abilities. This gives both parties a genuine preview of the working relationship."
  },
  {
    question: "Is TalenTROVE only for IT jobs?",
    answer: "Not at all! While we have a strong presence in tech, TalenTROVE serves diverse industries including marketing, design, operations, finance, HR, and more. Our platform is built to evaluate skills across all professional domains."
  },
  {
    question: "Do I need experience to join?",
    answer: "No prior experience is required. TalenTROVE's evaluation system is designed to assess your actual abilities, not your work history. Many of our successful placements are talented individuals who proved themselves through our skill-based assessments."
  },
  {
    question: "Is registration free for candidates?",
    answer: "Yes, absolutely! Registration and participation in our evaluation process is completely free for all candidates. We believe talent should never be gated by financial barriers. Companies pay for our services, not job seekers."
  },
  {
    question: "How do companies benefit from TalenTROVE?",
    answer: "Companies get access to pre-verified, skill-tested candidates who have proven their abilities. This dramatically reduces hiring risk, shortens onboarding time, and ensures cultural fit. Our transparent rating system also helps companies showcase their workplace quality."
  },
  {
    question: "How is fair evaluation ensured?",
    answer: "Fairness is core to our mission. Evaluations are conducted by trained assessors using standardized rubrics. We use blind evaluation where possible, multiple evaluator reviews, and a transparent feedback system. All parties can dispute outcomes through our resolution process."
  },
  {
    question: "Will I receive feedback after evaluation?",
    answer: "Yes! Every candidate receives detailed feedback regardless of the outcome. We provide specific insights on strengths, areas for improvement, and actionable recommendations. This feedback helps you grow even if a particular opportunity doesn't work out."
  },
  {
    question: "Is TalenTROVE an Indian company?",
    answer: "Yes, TalenTROVE is proudly founded in India. We understand the unique dynamics of the Indian job market and are committed to solving local challenges while building a platform with global standards and ambitions."
  },
  {
    question: "How long does the hiring process take?",
    answer: "Our streamlined process typically takes 7-14 days from application to offer. This includes initial screening (1-2 days), skill evaluation (2-3 days), the 3-day live work period, and final decision (1-2 days). We move fast because we respect everyone's time."
  },
  {
    question: "What happens after I get selected?",
    answer: "Congratulations! After selection, you'll receive a formal offer from the company. TalenTROVE facilitates the transition, ensures all terms are clear, and provides support during your initial onboarding period. We stay connected to ensure your success."
  },
  {
    question: "Is my data safe on TalenTROVE?",
    answer: "Absolutely. We employ enterprise-grade security measures including encryption, secure servers, and strict access controls. Your personal information is never shared without consent. We comply with data protection regulations and undergo regular security audits."
  },
  {
    question: "How can companies partner with TalenTROVE?",
    answer: "Companies can join TalenTROVE by registering on our platform and completing verification. We offer flexible partnership models based on hiring volume and needs. Contact our partnerships team for customized solutions and enterprise pricing."
  },
  {
    question: "Can colleges collaborate with TalenTROVE?",
    answer: "Yes! We actively partner with educational institutions. Our college collaboration program includes campus evaluations, skill development workshops, and direct placement pipelines. Reach out to explore how we can enhance your students' career outcomes."
  },
  {
    question: "Does TalenTROVE guarantee a job?",
    answer: "While we can't guarantee employment (no ethical platform can), we significantly improve your chances. Our evaluated candidates have a 3x higher placement rate than traditional applications. We prepare you, connect you, and support you throughout the journey."
  },
  {
    question: "Can I attend multiple evaluations?",
    answer: "Yes! You can participate in evaluations for multiple companies and roles. Each evaluation is a learning opportunity. There's no limit on how many times you can apply, though we recommend focusing on roles that truly match your skills and interests."
  },
  {
    question: "How do I contact support?",
    answer: "Our support team is available through multiple channels: in-app chat, email at support@talentrove.com, and our help center. We aim to respond within 24 hours. For urgent matters, our priority support line is available during business hours."
  },
  {
    question: "Where is TalenTROVE currently available?",
    answer: "TalenTROVE is currently operational across major Indian cities including Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, and Pune. We're rapidly expanding to tier-2 cities and planning international expansion. Stay tuned for updates!"
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Got Questions?</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TalenTROVE. Can't find your answer? 
            Feel free to reach out to our support team.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Accordion 
            type="multiple" 
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={`item-${index}`} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-soft hover:shadow-primary/10 transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-primary/20"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline group">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {index + 1}
                    </span>
                    <span className="text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-12">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Your Journey</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Still have questions?
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join thousands of talented professionals who have transformed their careers with TalenTROVE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary px-8 group"
                >
                  <Link to="/talent-portal">
                    Get Started with TalenTROVE
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                >
                  <Link to="/contact">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
