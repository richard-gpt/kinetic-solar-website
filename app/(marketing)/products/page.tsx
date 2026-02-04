import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { PageContent } from "@/components/marketing/page-content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent("/products");
  return {
    title: content?.title || "Products",
    description: content?.subtitle || "Our solar product range",
  };
}

export default async function ProductsPage() {
  const content = await getContent("/products");

  if (!content) {
    notFound();
  }

  return <PageContent content={content} />;
}
