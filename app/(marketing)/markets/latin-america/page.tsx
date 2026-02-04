import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/markets/latin-america");
  return {
    title: content?.title || "Latin America Market",
    description: content?.subtitle || "Solar market in Latin America",
  };
}

export default async function LatinAmericaPage() {
  const content = await getContent("/markets/latin-america");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
