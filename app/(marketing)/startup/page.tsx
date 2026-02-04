import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/startup");
  return {
    title: content?.title || "Startup Solutions",
    description: content?.subtitle || "Solar startup support and resources",
  };
}

export default async function StartupPage() {
  const content = await getContent("/startup");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
