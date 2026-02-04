import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/resources/startup-guides");
  return {
    title: content?.title || "Startup Guides",
    description: content?.subtitle || "Guides for solar startups",
  };
}

export default async function StartupGuidesPage() {
  const content = await getContent("/resources/startup-guides");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
