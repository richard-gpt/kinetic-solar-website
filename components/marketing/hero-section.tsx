import { Breadcrumbs } from "@/components/layout/breadcrumbs";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showBreadcrumbs?: boolean;
  variant?: "default" | "primary" | "gradient";
}

export function HeroSection({
  title,
  subtitle,
  showBreadcrumbs = true,
  variant = "default",
}: HeroSectionProps) {
  const bgClasses = {
    default: "bg-muted/30",
    primary: "bg-primary text-primary-foreground",
    gradient: "bg-gradient-to-br from-primary/10 via-background to-accent/10",
  };

  return (
    <section className={`py-12 md:py-16 ${bgClasses[variant]}`}>
      <div className="container">
        {showBreadcrumbs && (
          <div className="mb-4">
            <Breadcrumbs />
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-lg md:text-xl max-w-3xl ${
              variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
