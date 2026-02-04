import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products/bulk-branding");
  return {
    title: content?.title || "Bulk & Branding",
    description: content?.subtitle || "Custom branding and bulk orders",
  };
}

export default async function BulkBrandingPage() {
  const content = await getContent("/products/bulk-branding");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
