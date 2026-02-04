import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/support/faq");
  return {
    title: content?.title || "FAQ",
    description: content?.subtitle || "Frequently asked questions",
  };
}

export default async function FAQPage() {
  const content = await getContent("/support/faq");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
