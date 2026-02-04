import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/partner/investment");
  return {
    title: content?.title || "Investment Opportunities",
    description: content?.subtitle || "Invest in solar",
  };
}

export default async function InvestmentPage() {
  const content = await getContent("/partner/investment");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
