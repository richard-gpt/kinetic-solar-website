import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/markets/asia");
  return {
    title: content?.title || "Asia Market",
    description: content?.subtitle || "Solar market in Asia",
  };
}

export default async function AsiaPage() {
  const content = await getContent("/markets/asia");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
