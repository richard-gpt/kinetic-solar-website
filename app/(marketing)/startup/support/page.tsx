import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/startup/support");
  return {
    title: content?.title || "Startup Support",
    description: content?.subtitle || "Support for solar startups",
  };
}

export default async function StartupSupportPage() {
  const content = await getContent("/startup/support");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
