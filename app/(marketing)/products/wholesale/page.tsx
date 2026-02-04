import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products/wholesale");
  return {
    title: content?.title || "Wholesale Products",
    description: content?.subtitle || "Wholesale solar equipment",
  };
}

export default async function WholesalePage() {
  const content = await getContent("/products/wholesale");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
