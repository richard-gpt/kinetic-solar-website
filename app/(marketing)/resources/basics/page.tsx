import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/resources/basics");
  return {
    title: content?.title || "Solar Basics",
    description: content?.subtitle || "Learn solar fundamentals",
  };
}

export default async function BasicsPage() {
  const content = await getContent("/resources/basics");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
