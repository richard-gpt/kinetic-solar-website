import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/consumer");
  return {
    title: content?.title || "Consumer Solutions",
    description: content?.subtitle || "Solar solutions for consumers",
  };
}

export default async function ConsumerPage() {
  const content = await getContent("/consumer");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
