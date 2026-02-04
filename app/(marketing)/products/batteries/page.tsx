import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products/batteries");
  return {
    title: content?.title || "Batteries",
    description: content?.subtitle || "Energy storage solutions",
  };
}

export default async function BatteriesPage() {
  const content = await getContent("/products/batteries");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
