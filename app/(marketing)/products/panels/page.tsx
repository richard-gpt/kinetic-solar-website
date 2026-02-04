import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products/panels");
  return {
    title: content?.title || "Solar Panels",
    description: content?.subtitle || "High-quality solar panels",
  };
}

export default async function PanelsPage() {
  const content = await getContent("/products/panels");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
