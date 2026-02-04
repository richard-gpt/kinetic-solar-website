import { HeroSection } from "./hero-section";
import { ContentSection } from "./content-section";
import { CTASection } from "./cta-section";
import type { ParsedContent } from "@/lib/content";

interface PageContentProps {
  content: ParsedContent;
  heroVariant?: "default" | "primary" | "gradient";
  ctaVariant?: "default" | "centered" | "card";
}

export function PageContent({
  content,
  heroVariant = "gradient",
  ctaVariant = "card",
}: PageContentProps) {
  return (
    <>
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        variant={heroVariant}
      />
      <ContentSection html={content.html} />
      {content.ctas.length > 0 && (
        <CTASection ctas={content.ctas} variant={ctaVariant} />
      )}
    </>
  );
}
