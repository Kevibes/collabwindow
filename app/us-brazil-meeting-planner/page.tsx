import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and Brazil | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Brazil time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsBrazilPage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://collabwindow.app" },
              { "@type": "ListItem", position: 2, name: "US–Brazil Meeting Planner", item: "https://collabwindow.app/us-brazil-meeting-planner" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CollabWindow — US–Brazil Time Zone Overlap Planner",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free time zone overlap planner for US and Brazil distributed teams.",
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">US–Brazil</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between US and Brazil</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 1–4 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="America/New_York" defaultB="America/Sao_Paulo" showContent={true} />
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
              <h2 className="text-2xl font-bold">Why US–Brazil Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                Brazil is one of the closest time zones to the US, with a gap of just 1–4 hours depending on coast and season. This sounds easy, but Brazil's DST history is volatile — the country abolished DST in 2019, reintroduced it in some states, and then abolished it again. Some states observe it unofficially.
              </p>
              <p className="text-muted-foreground">
                For distributed teams, the small gap is a blessing, but the DST confusion is a curse. A meeting that worked at 10 AM EST / 12 PM BRT in January might shift unexpectedly in February if a state decides to observe DST after all.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Brazil Teams</h2>
              <p className="text-muted-foreground">
                The best overlap for US East Coast and Brazil is essentially the full workday. São Paulo is 1–2 hours ahead of New York (depending on DST), meaning 9 AM–5 PM EST overlaps with 10 AM–6 PM or 11 AM–7 PM BRT. This is one of the easiest pairs to schedule.
              </p>
              <p className="text-muted-foreground">
                West Coast teams have a 4–5 hour gap. A 9 AM–12 PM PST window overlaps with 2–5 PM BRT — still workable for stand-ups and check-ins. Most US–Brazil teams treat the time difference as a minor inconvenience rather than a major barrier.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Confirm the time zone.</strong> Brazil's DST rules vary by state. Always confirm which zone your Brazilian counterpart is in.</li>
                <li><strong>Portuguese is the default.</strong> Even if your Brazilian colleagues speak English well, offering materials in Portuguese shows respect.</li>
                <li><strong>Be flexible with hours.</strong> Brazilian business culture is relationship-driven. A 30-minute delay is more forgivable than in Germany, but punctuality is still valued.</li>
                <li><strong>Avoid Brazilian holidays.</strong> Carnival, Independence Day, and Christmas week are non-negotiable. Plan around them.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–Brazil Meetings</h2>
              <p className="text-muted-foreground">
                Brazil abolished nationwide DST in 2019. Some southern states unofficially observed it for a few years, but as of 2024, most of Brazil stays on BRT (UTC-3) year-round. The US still observes DST, which means the gap shifts by one hour twice a year.
              </p>
              <p className="text-muted-foreground">
                In winter, New York is 2 hours behind São Paulo. In summer, the gap narrows to 1 hour. Our planner uses current IANA timezone data, so it reflects the latest rules automatically. If Brazil reintroduces DST, the tool will update without manual intervention.
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
                { pair: "US–Germany", url: "/us-germany-meeting-planner" },
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
