import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/consumer/commercial");
  return {
    title: content?.title || "Commercial Solar",
    description: content?.subtitle || "Solar solutions for businesses",
  };
}

export default async function CommercialPage() {
  const content = await getContent("/consumer/commercial");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
