import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/buy/startups");
  return {
    title: content?.title || "For Startups",
    description: content?.subtitle || "Purchasing for solar startups",
  };
}

export default async function BuyStartupsPage() {
  const content = await getContent("/buy/startups");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
