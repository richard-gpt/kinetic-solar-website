import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/startup/branding");
  return {
    title: content?.title || "Branding Options",
    description: content?.subtitle || "Private label branding for startups",
  };
}

export default async function BrandingPage() {
  const content = await getContent("/startup/branding");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
