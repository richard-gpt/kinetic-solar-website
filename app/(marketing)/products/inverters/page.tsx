import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products/inverters");
  return {
    title: content?.title || "Inverters",
    description: content?.subtitle || "Solar inverters for all applications",
  };
}

export default async function InvertersPage() {
  const content = await getContent("/products/inverters");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
