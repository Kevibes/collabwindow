import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and Germany | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Germany time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsGermanyPage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://collabwindow.app" },
              { "@type": "ListItem", position: 2, name: "US–Germany Meeting Planner", item: "https://collabwindow.app/us-germany-meeting-planner" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CollabWindow — US–Germany Time Zone Overlap Planner",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free time zone overlap planner for US and Germany distributed teams.",
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">US–Germany</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between US and Germany</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 6–9 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="America/New_York" defaultB="Europe/Berlin" showContent={true} />
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
              <h2 className="text-2xl font-bold">Why US–Germany Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                Germany operates on Central European Time (CET, UTC+1) or CEST (UTC+2) in summer, putting it 6 hours ahead of the US East Coast and 9 hours ahead of the West Coast. A 9 AM meeting in Berlin is 3 AM in New York — or midnight in San Francisco.
              </p>
              <p className="text-muted-foreground">
                German business culture values punctuality and structured agendas. Late meetings are particularly unwelcome because many Germans finish work promptly at 5 or 6 PM. This tightens the overlap window and makes scheduling discipline essential.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Germany Teams</h2>
              <p className="text-muted-foreground">
                The best overlap for US East Coast and Germany is early US morning / mid-afternoon Germany. Specifically, 8 AM–12 PM EST overlaps with 2 PM–6 PM CET, giving a solid 4-hour window. This is ideal for sprint reviews, stakeholder updates, and architecture discussions.
              </p>
              <p className="text-muted-foreground">
                For West Coast teams, the overlap shrinks dramatically. An 8 AM–10 AM PST window overlaps with 5 PM–7 PM CET — right at the edge of the German workday. West Coast teams often default to async for most communication and reserve the narrow overlap for urgent decisions only.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Start on time.</strong> German business culture expects punctuality. Dial in 1–2 minutes early.</li>
                <li><strong>Send agendas in advance.</strong> Germans prefer structured meetings with clear objectives. A written agenda sent 24 hours ahead is standard.</li>
                <li><strong>Respect Feierabend.</strong> The German concept of "closing time" is sacred. Avoid scheduling past 6 PM CET.</li>
                <li><strong>Account for holidays.</strong> German public holidays differ from the US. Check for overlaps with Reformation Day, Corpus Christi, and Unity Day.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–Germany Meetings</h2>
              <p className="text-muted-foreground">
                Both the US and Germany observe DST, but the EU switches on the last Sunday in March and last Sunday in October — different dates from the US. This creates brief misalignment windows in spring and fall.
              </p>
              <p className="text-muted-foreground">
                For example, in late October, Germany may already be back on CET while the US is still on EDT. A 3 PM CET meeting that was 9 AM EDT becomes 10 AM EDT. The gap is still manageable, but calendar invites should include both time zones to avoid confusion.
              </p>
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
              {[
                { pair: "US–India", url: "/us-india-meeting-planner" },
                { pair: "US–UK", url: "/us-uk-meeting-planner" },
                { pair: "UK–India", url: "/uk-india-meeting-planner" },
                { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
                { pair: "US–Japan", url: "/us-japan-meeting-planner" },
                { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
              ].map((item) => (
                <a key={item.url} href={item.url} className="block p-4 rounded-lg border bg-background hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
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
