import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/about/factory-direct");
  return {
    title: content?.title || "Factory-Direct Advantage",
    description: content?.subtitle || "Our factory-direct pricing model",
  };
}

export default async function FactoryDirectPage() {
  const content = await getContent("/about/factory-direct");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
