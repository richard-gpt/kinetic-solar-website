import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/buy/financing");
  return {
    title: content?.title || "Financing",
    description: content?.subtitle || "Financing options",
  };
}

export default async function FinancingPage() {
  const content = await getContent("/buy/financing");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
