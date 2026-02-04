import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/startup/kits");
  return {
    title: content?.title || "Starter Kits",
    description: content?.subtitle || "Solar startup kits",
  };
}

export default async function StarterKitsPage() {
  const content = await getContent("/startup/kits");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
