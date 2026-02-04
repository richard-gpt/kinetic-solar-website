import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products/mounting");
  return {
    title: content?.title || "Mounting Systems",
    description: content?.subtitle || "Solar panel mounting solutions",
  };
}

export default async function MountingPage() {
  const content = await getContent("/products/mounting");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
