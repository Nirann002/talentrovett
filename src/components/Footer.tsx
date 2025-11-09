import { Twitter, Linkedin, Instagram, Mail, Target } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "For Talent", href: "#for-talent" },
      { name: "For Startups", href: "#for-startups" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Founders", href: "#founders" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-primary">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                Talentrove
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where skill speaks louder than degrees. Connecting raw talent with real opportunities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Talentrove. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by engineering students who believe in talent over degrees
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
