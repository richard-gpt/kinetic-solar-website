import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/about/team");
  return {
    title: content?.title || "Our Team",
    description: content?.subtitle || "Meet our team",
  };
}

export default async function TeamPage() {
  const content = await getContent("/about/team");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
