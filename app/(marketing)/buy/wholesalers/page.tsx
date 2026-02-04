import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/buy/wholesalers");
  return {
    title: content?.title || "For Wholesalers",
    description: content?.subtitle || "Wholesale purchasing options",
  };
}

export default async function WholesalersPage() {
  const content = await getContent("/buy/wholesalers");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
