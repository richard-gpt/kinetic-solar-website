import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/resources/trends");
  return {
    title: content?.title || "Industry Trends",
    description: content?.subtitle || "Solar industry trends",
  };
}

export default async function TrendsPage() {
  const content = await getContent("/resources/trends");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
