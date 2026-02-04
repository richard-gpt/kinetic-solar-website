import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/support");
  return {
    title: content?.title || "Support",
    description: content?.subtitle || "Customer support center",
  };
}

export default async function SupportPage() {
  const content = await getContent("/support");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
