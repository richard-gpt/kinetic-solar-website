import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/consumer/diy");
  return {
    title: content?.title || "DIY Kits",
    description: content?.subtitle || "Do-it-yourself solar kits",
  };
}

export default async function DIYPage() {
  const content = await getContent("/consumer/diy");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
