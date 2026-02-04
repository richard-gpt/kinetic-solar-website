import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/markets");
  return {
    title: content?.title || "Global Markets",
    description: content?.subtitle || "Markets we serve",
  };
}

export default async function MarketsPage() {
  const content = await getContent("/markets");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
