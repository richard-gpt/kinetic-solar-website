import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/resources/installation");
  return {
    title: content?.title || "Installation Guides",
    description: content?.subtitle || "Solar installation resources",
  };
}

export default async function InstallationGuidesPage() {
  const content = await getContent("/resources/installation");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
