import { getContent } from "@/lib/content";
import { HeroSection } from "@/components/marketing/hero-section";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/contact");
  return {
    title: content?.title || "Contact Us",
    description: content?.subtitle || "Get in touch with Kinetic Solar Solutions",
  };
}

export default async function ContactPage() {
  const content = await getContent("/contact");

  return (
    <>
      <HeroSection
        title={content?.title || "Contact Us"}
        subtitle={content?.subtitle || "Reach our team for sales, support, and partnership inquiries."}
        variant="gradient"
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Global Headquarters
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Kinetic Solar Solutions Pte. Ltd.
                  </p>
                  <p>63 Jurong West Central 3</p>
                  <p>#08-260</p>
                  <p>Singapore 648352</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">Main:</span>{" "}
                    +65 6756 8900
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Sales:</span>{" "}
                    +65 6756 8901
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Support:</span>{" "}
                    +65 6756 8902
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">General:</span>{" "}
                    info@kineticsolar.com
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Wholesale:</span>{" "}
                    wholesale@kineticsolar.com
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Support:</span>{" "}
                    support@kineticsolar.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Monday - Friday</p>
                  <p className="font-medium text-foreground">
                    9:00 AM - 6:00 PM (SGT)
                  </p>
                  <p className="mt-2 text-sm">
                    We respond to all inquiries within 24 business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
