import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTALink {
  label: string;
  href: string;
}

interface CTASectionProps {
  ctas: CTALink[];
  variant?: "default" | "centered" | "card";
}

export function CTASection({ ctas, variant = "default" }: CTASectionProps) {
  if (ctas.length === 0) return null;

  if (variant === "card") {
    return (
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team today to learn more about our solar solutions and
              how we can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {ctas.map((cta, index) => (
                <Link key={index} href={cta.href === "#" ? "/contact" : cta.href}>
                  <Button
                    variant={index === 0 ? "secondary" : "outline"}
                    size="lg"
                    className={index !== 0 ? "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" : ""}
                  >
                    {cta.label}
                    {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "centered") {
    return (
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {ctas.map((cta, index) => (
              <Link key={index} href={cta.href === "#" ? "/contact" : cta.href}>
                <Button variant={index === 0 ? "default" : "outline"} size="lg">
                  {cta.label}
                  {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 border-t">
      <div className="container">
        <div className="flex flex-wrap gap-4">
          {ctas.map((cta, index) => (
            <Link key={index} href={cta.href === "#" ? "/contact" : cta.href}>
              <Button variant={index === 0 ? "default" : "outline"} size="lg">
                {cta.label}
                {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
