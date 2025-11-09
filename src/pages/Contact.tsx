import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button className="w-full gradient-primary text-white">Send Message</Button>
              </form>
              <div className="mt-8 text-center">
                <Mail className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p>niranjansaravanan10296@gmail.com</p>
                <p>ussanjeevan007@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
