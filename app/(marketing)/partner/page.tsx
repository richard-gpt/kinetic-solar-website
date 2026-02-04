import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/partner");
  return {
    title: content?.title || "Partner With Us",
    description: content?.subtitle || "Partnership opportunities",
  };
}

export default async function PartnerPage() {
  const content = await getContent("/partner");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
