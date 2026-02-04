interface ContentSectionProps {
  html: string;
  className?: string;
}

export function ContentSection({ html, className = "" }: ContentSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container">
        <div
          className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
}
