import Link from "next/link";
import { getContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import {
  ArrowRight,
  Sun,
  Building2,
  Rocket,
  Users,
  Globe,
  Package,
  DollarSign,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  {
    title: "Factory-Direct Pricing",
    description:
      "Eliminate middlemen and reduce costs by up to 30% with our direct manufacturer relationships.",
    icon: "dollar",
  },
  {
    title: "Low Minimum Orders",
    description:
      "Start small and scale with flexible purchasing options designed for growing businesses.",
    icon: "package",
  },
  {
    title: "Private Labeling",
    description:
      "Build your brand with custom-branded solar products tailored to your market.",
    icon: "zap",
  },
  {
    title: "Equatorial Expertise",
    description:
      "Solutions optimized for high-insolation regions across Asia, Africa, and Latin America.",
    icon: "globe",
  },
  {
    title: "Complete Ecosystem",
    description:
      "From panels and inverters to batteries and mounting systems - everything you need.",
    icon: "sun",
  },
  {
    title: "Expert Support",
    description:
      "Technical knowledge transfer and ongoing support to ensure your success.",
    icon: "shield",
  },
];

const customerSegments = [
  {
    title: "Wholesalers & Distributors",
    description:
      "Premium solar equipment at factory-direct prices with flexible ordering and logistics support.",
    href: "/buy/wholesalers",
    icon: Building2,
  },
  {
    title: "Solar Startups",
    description:
      "Launch your solar business with starter kits, private labeling, and growth-oriented support.",
    href: "/startup",
    icon: Rocket,
  },
  {
    title: "End Consumers",
    description:
      "Residential and commercial solar solutions for homes and businesses in equatorial regions.",
    href: "/consumer",
    icon: Users,
  },
];

export default async function HomePage() {
  const content = await getContent("/");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {content?.title || "Kinetic Solar Solutions"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {content?.subtitle ||
                "Factory-Direct Solar Solutions for Global Markets"}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="text-lg px-8">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re launching a solar startup, expanding your
              distribution network, or seeking reliable solar solutions, we
              deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {customerSegments.map((segment) => (
              <Link key={segment.href} href={segment.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <segment.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{segment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {segment.description}
                    </p>
                    <span className="text-primary font-medium inline-flex items-center">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with us for factory-direct access to premium solar
              equipment with comprehensive support.
            </p>
          </div>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* Markets */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving Equatorial Markets Worldwide
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Headquartered in Singapore with logistics hubs strategically
                positioned to serve high-potential solar markets across
                Southeast Asia, Africa, and Latin America.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <Link
                  href="/markets/asia"
                  className="p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors text-center"
                >
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <span className="font-medium">Asia</span>
                </Link>
                <Link
                  href="/markets/africa"
                  className="p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors text-center"
                >
                  <Globe className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <span className="font-medium">Africa</span>
                </Link>
                <Link
                  href="/markets/latin-america"
                  className="p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors text-center"
                >
                  <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
                  <span className="font-medium">Latin America</span>
                </Link>
              </div>
              <Link href="/markets">
                <Button variant="outline" size="lg">
                  Explore Our Markets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                <Sun className="h-32 w-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Power Your Solar Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to learn more about our wholesale pricing,
            startup support, and partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get a Wholesale Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
