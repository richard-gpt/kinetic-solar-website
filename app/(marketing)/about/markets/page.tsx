import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/about/markets");
  return {
    title: content?.title || "Our Markets",
    description: content?.subtitle || "Markets we serve",
  };
}

export default async function AboutMarketsPage() {
  const content = await getContent("/about/markets");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
