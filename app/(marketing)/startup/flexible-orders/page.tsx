import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/startup/flexible-orders");
  return {
    title: content?.title || "Flexible Orders",
    description: content?.subtitle || "Flexible ordering for growing businesses",
  };
}

export default async function FlexibleOrdersPage() {
  const content = await getContent("/startup/flexible-orders");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
