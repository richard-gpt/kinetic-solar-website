import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/markets/case-studies");
  return {
    title: content?.title || "Case Studies",
    description: content?.subtitle || "Solar success stories",
  };
}

export default async function CaseStudiesPage() {
  const content = await getContent("/markets/case-studies");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
