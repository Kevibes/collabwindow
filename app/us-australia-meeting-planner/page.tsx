import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and Australia | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Australia time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsAustraliaPage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://collabwindow.app" },
              { "@type": "ListItem", position: 2, name: "US–Australia Meeting Planner", item: "https://collabwindow.app/us-australia-meeting-planner" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CollabWindow — US–Australia Time Zone Overlap Planner",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free time zone overlap planner for US and Australia distributed teams.",
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">US–Australia</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between US and Australia</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 14–19 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="America/Los_Angeles" defaultB="Australia/Sydney" showContent={true} />
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
              <h2 className="text-2xl font-bold">Why US–Australia Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                The US and Australia are on opposite sides of the clock. Sydney is 14–19 hours ahead of the US, depending on coast and season. When it is 9 AM in Los Angeles, it is already 2 AM the next day in Sydney. There is virtually no natural overlap between standard working hours.
              </p>
              <p className="text-muted-foreground">
                Australia also complicates things with its own DST rules. DST starts on the first Sunday in October and ends on the first Sunday in April — different dates from the US. This creates brief windows where the gap is wider or narrower than expected.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Australia Teams</h2>
              <p className="text-muted-foreground">
                There are no true golden hours for US–Australia. The least painful option is early US morning / late Australia evening. For West Coast, 6–8 AM PST overlaps with 11 PM–1 AM AEST (next day) — barely tolerable for weekly syncs.
              </p>
              <p className="text-muted-foreground">
                East Coast teams have it even harder. A 6–8 AM EST window is 8–10 PM AEST, which is reasonable for the Australia side but requires extreme discipline from the US. Most US–Australia teams rely heavily on async communication and use the narrow overlap for critical decisions only.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Async-first is mandatory.</strong> With almost no overlap, written updates, recorded demos, and shared docs are the default. Real-time meetings should be rare and short.</li>
                <li><strong>Rotate the pain.</strong> If real-time meetings are unavoidable, alternate between early US mornings and late Australia evenings. Never make one side bear the burden permanently.</li>
                <li><strong>Over-communicate context.</strong> Australian teams work while US teams sleep. Every handoff should include full context so the next shift can continue without blockers.</li>
                <li><strong>Respect Australian holidays.</strong> Australia Day, Anzac Day, and the Christmas–New Year break are major holidays. Plan sprints around them.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–Australia Meetings</h2>
              <p className="text-muted-foreground">
                Both the US and Australia observe DST, but on different schedules. Australia starts DST in October and ends in April. The US starts in March and ends in November. This creates misalignment windows where the gap is an hour off from what you expect.
              </p>
              <p className="text-muted-foreground">
                For example, in late October, Australia may already be on AEDT while the US is still on PDT. A 7 AM PDT meeting that was midnight AEST becomes 1 AM AEDT. Our planner tracks both DST schedules and warns you when the overlap window shifts.
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
                { pair: "UK–Australia", url: "/uk-australia-meeting-planner" },
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
