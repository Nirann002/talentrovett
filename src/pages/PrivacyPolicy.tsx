import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Database, 
  Settings, 
  Share2, 
  Lock, 
  Cookie, 
  UserCheck, 
  Link2, 
  Users, 
  RefreshCw, 
  Mail,
  FileText
} from "lucide-react";

const PrivacyPolicy = () => {
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const sections = [
    {
      icon: FileText,
      title: "1. Introduction",
      content: `TalenTROVE ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform and services. By accessing or using TalenTROVE, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. We respect your privacy rights and are dedicated to handling your personal data responsibly and transparently.`
    },
    {
      icon: Database,
      title: "2. Information We Collect",
      content: `We collect various types of information to provide and improve our services:

• Personal Identification Information: Full name, email address, phone number, and profile photograph.

• Professional Information: Educational qualifications, work experience, skills, certifications, resume/CV, and portfolio links.

• Account Information: Username, password (encrypted), and account preferences.

• Usage Data: Information about how you interact with our platform, including pages visited, features used, and time spent on the platform (for demonstration purposes only in this version).

• Device Information: Browser type, operating system, and device identifiers for optimizing your experience.`
    },
    {
      icon: Settings,
      title: "3. How We Use Your Information",
      content: `Your information is used for the following purposes:

• Service Delivery: To provide, maintain, and improve our talent discovery and recruitment platform services.

• Communication: To send you important updates, respond to inquiries, and provide customer support.

• Hiring & Evaluation: To facilitate the matching process between candidates and companies, including skill evaluations and live work assessments.

• Platform Improvement: To analyze usage patterns, identify areas for enhancement, and develop new features.

• Security: To detect, prevent, and address technical issues, fraud, and unauthorized access.

• Legal Compliance: To comply with applicable laws, regulations, and legal processes.`
    },
    {
      icon: Share2,
      title: "4. Data Sharing & Disclosure",
      content: `TalenTROVE does not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your data only under the following circumstances:

• Verified Partner Companies: Your profile information may be shared with companies registered on our platform solely for legitimate hiring and recruitment purposes.

• Service Providers: We may engage trusted third-party vendors who assist in operating our platform, subject to strict confidentiality obligations.

• Legal Requirements: We may disclose information when required by law, court order, or governmental authority.

• Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.

All data sharing is conducted with appropriate safeguards to protect your privacy.`
    },
    {
      icon: Lock,
      title: "5. Data Security",
      content: `We implement robust security measures to protect your personal information:

• Encryption: All data transmission is secured using industry-standard SSL/TLS encryption protocols.

• Access Control: Strict access controls ensure that only authorized personnel can access personal data, and only for legitimate business purposes.

• Secure Infrastructure: Our servers are hosted in secure facilities with physical and digital security measures.

• Regular Audits: We conduct periodic security assessments and vulnerability testing.

• Incident Response: We maintain incident response procedures to address any potential security breaches promptly.

While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage users to take precautions to protect their personal information.`
    },
    {
      icon: Cookie,
      title: "6. Cookies & Tracking",
      content: `Cookies are small text files stored on your device that help us improve your experience. Our current and future use of cookies includes:

• Essential Cookies: Required for basic platform functionality and security.

• Analytics Cookies: May be used in future versions to understand how users interact with our platform and to improve our services.

• Preference Cookies: To remember your settings and preferences.

Note: This demonstration version does not actively collect cookie data. Future versions may implement cookie-based features, and users will be notified accordingly. You can control cookie preferences through your browser settings.`
    },
    {
      icon: UserCheck,
      title: "7. User Rights",
      content: `You have the following rights regarding your personal data:

• Right to Access: You may request a copy of the personal information we hold about you.

• Right to Rectification: You may request correction of inaccurate or incomplete personal data.

• Right to Deletion: You may request deletion of your personal data, subject to legal and contractual obligations.

• Right to Data Portability: You may request your data in a structured, commonly used format.

• Right to Withdraw Consent: Where processing is based on consent, you may withdraw it at any time.

• Right to Object: You may object to certain types of data processing.

To exercise any of these rights, please contact us at the email provided below. We will respond to your request within a reasonable timeframe.`
    },
    {
      icon: Link2,
      title: "8. Third-Party Services",
      content: `Our platform may integrate with or link to third-party services in current or future versions:

• Payment Processors: For handling subscription or service payments securely.

• Cloud Services: For hosting, storage, and infrastructure needs.

• Communication Tools: For email, notifications, and support services.

• Analytics Platforms: For understanding platform usage and performance.

These third-party services have their own privacy policies, and we encourage you to review them. TalenTROVE is not responsible for the privacy practices of third-party services. We ensure that any third-party integrations meet our security and privacy standards.`
    },
    {
      icon: Users,
      title: "9. Children's Privacy",
      content: `TalenTROVE is designed for professional use and is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18 years of age.

If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at the email address provided below. We will take steps to remove such information from our systems.

Users must be of legal working age in their jurisdiction to register and use our platform for employment-related services.`
    },
    {
      icon: RefreshCw,
      title: "10. Policy Updates",
      content: `TalenTROVE reserves the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on this page, and the "Last Updated" date will be revised accordingly.

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Continued use of our platform after any changes constitutes your acceptance of the updated Privacy Policy.

For significant changes that materially affect your rights, we will make reasonable efforts to notify registered users via email or through a prominent notice on our platform.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Legal Document</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Privacy{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Your privacy matters to us at TalenTROVE
          </p>
          
          <p className="text-sm text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-4">
        <div className="container max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <Card 
              key={index}
              className="border border-border bg-card shadow-soft hover:shadow-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Contact Section */}
          <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    11. Contact for Privacy Concerns
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team:
                  </p>
                  <a 
                    href="mailto:support@talentrove.com" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-lg border-b-2 border-primary/30 group-hover:border-primary transition-colors">
                      support@talentrove.com
                    </span>
                  </a>
                  <p className="text-muted-foreground text-sm mt-4">
                    We aim to respond to all privacy-related inquiries within 48 business hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Note */}
      <section className="pb-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center py-6 px-8 bg-muted/50 rounded-2xl border border-border">
            <p className="text-sm text-muted-foreground">
              This Privacy Policy page is currently for demonstration and informational purposes only.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
