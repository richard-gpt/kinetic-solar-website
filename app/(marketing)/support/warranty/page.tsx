import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/support/warranty");
  return {
    title: content?.title || "Warranty",
    description: content?.subtitle || "Warranty information",
  };
}

export default async function WarrantyPage() {
  const content = await getContent("/support/warranty");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
