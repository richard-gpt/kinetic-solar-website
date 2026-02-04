import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/resources");
  return {
    title: content?.title || "Resources",
    description: content?.subtitle || "Solar resources and guides",
  };
}

export default async function ResourcesPage() {
  const content = await getContent("/resources");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
