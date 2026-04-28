import type { Metadata } from "next";
import type { ReactNode } from "react";
import { OverlapTool } from "./overlap-tool-wrapper";
import { AdSlot } from "./ad-slot";
import { JsonLd } from "./json-ld";

interface RelatedPair {
  pair: string;
  url: string;
}

interface PairPageLayoutProps {
  title: string;
  description: string;
  defaultA: string;
  defaultB: string;
  navLabel: string;
  jsonLdName: string;
  jsonLdDescription: string;
  jsonLdUrl: string;
  gapDescription: string;
  article: ReactNode;
  relatedPairs: RelatedPair[];
}

export function pairPageMetadata({ title, description }: { title: string; description: string }): Metadata {
  return { title, description };
}

export function PairPageLayout({
  title,
  description,
  defaultA,
  defaultB,
  navLabel,
  jsonLdName,
  jsonLdDescription,
  jsonLdUrl,
  gapDescription,
  article,
  relatedPairs,
}: PairPageLayoutProps) {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://www.collabwindow.app" },
              { "@type": "ListItem", position: 2, name: navLabel, item: jsonLdUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: jsonLdName,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: jsonLdDescription,
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">
            CollabWindow
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <span className="text-muted-foreground">{navLabel}</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly
              see when your working hours collide across the {gapDescription}.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA={defaultA} defaultB={defaultB} showContent={true} />
          </div>
        </section>

        <div className="px-4 sm:px-6 py-2">
          <div className="max-w-5xl mx-auto">
            <AdSlot slot="1111111111" format="horizontal" />
          </div>
        </div>

        <section className="py-10 px-4 sm:px-6 border-t">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0">
              <article className="prose prose-slate dark:prose-invert max-w-none">
                {article}
              </article>
            </div>
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-6">
                <AdSlot slot="2222222222" format="vertical" className="min-h-[600px]" />
              </div>
            </aside>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 border-t bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Also check</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {relatedPairs.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  className="block p-4 rounded-lg border bg-background hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <span className="font-medium">{item.pair}</span>{" "}
                  <span className="text-muted-foreground text-sm">Meeting Planner →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} CollabWindow. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-foreground">Privacy</a>
            <a href="/about" className="hover:text-foreground">About</a>
            <a href="/contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
