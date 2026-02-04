import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/support/installation");
  return {
    title: content?.title || "Installation Help",
    description: content?.subtitle || "Installation support",
  };
}

export default async function InstallationSupportPage() {
  const content = await getContent("/support/installation");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
