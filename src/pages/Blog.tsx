import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-muted-foreground">Coming Soon</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
