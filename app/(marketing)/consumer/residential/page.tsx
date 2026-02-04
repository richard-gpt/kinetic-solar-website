import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/consumer/residential");
  return {
    title: content?.title || "Residential Solar",
    description: content?.subtitle || "Solar solutions for homes",
  };
}

export default async function ResidentialPage() {
  const content = await getContent("/consumer/residential");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
