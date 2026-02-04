import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/buy/consumers");
  return {
    title: content?.title || "For Consumers",
    description: content?.subtitle || "Consumer purchasing options",
  };
}

export default async function BuyConsumersPage() {
  const content = await getContent("/buy/consumers");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
