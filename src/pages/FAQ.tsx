import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">FAQ</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is TTET?</AccordionTrigger>
              <AccordionContent>Talentrove Eligibility Test - a skill verification system that measures real-world abilities.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does TTP work?</AccordionTrigger>
              <AccordionContent>Startups are rated on innovation, team, feasibility, ethics, and market potential for transparency.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
