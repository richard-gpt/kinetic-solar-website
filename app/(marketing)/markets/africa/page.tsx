import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/markets/africa");
  return {
    title: content?.title || "Africa Market",
    description: content?.subtitle || "Solar market in Africa",
  };
}

export default async function AfricaPage() {
  const content = await getContent("/markets/africa");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
