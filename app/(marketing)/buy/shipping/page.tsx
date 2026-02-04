import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/buy/shipping");
  return {
    title: content?.title || "Shipping",
    description: content?.subtitle || "Shipping and logistics",
  };
}

export default async function ShippingPage() {
  const content = await getContent("/buy/shipping");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
