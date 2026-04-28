import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and Philippines | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Philippines time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsPhilippinesPage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://collabwindow.app" },
              { "@type": "ListItem", position: 2, name: "US–Philippines Meeting Planner", item: "https://collabwindow.app/us-philippines-meeting-planner" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CollabWindow — US–Philippines Time Zone Overlap Planner",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free time zone overlap planner for US and Philippines distributed teams.",
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">US–Philippines</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between US and Philippines</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 12–16 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="America/Los_Angeles" defaultB="Asia/Manila" showContent={true} />
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
              <h2 className="text-2xl font-bold">Why US–Philippines Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                The Philippines is a global BPO and call center hub, which means US companies frequently need to coordinate with Filipino teams. The challenge: the Philippines does not observe DST and is 12–16 hours ahead of the US, depending on coast and season.
              </p>
              <p className="text-muted-foreground">
                Filipino teams in BPO roles often work night shifts to align with US hours, but this is not sustainable for all roles. For engineering, product, and management teams, finding a natural overlap is critical for retention and productivity.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Philippines Teams</h2>
              <p className="text-muted-foreground">
                The Philippines is 12–13 hours ahead of the US West Coast and 15–16 hours ahead of the East Coast. The best natural overlap is early morning US / late evening Philippines. For West Coast, 6–9 AM PST overlaps with 9 PM–12 AM PHT — feasible for occasional syncs but hard on the Philippines side.
              </p>
              <p className="text-muted-foreground">
                East Coast teams have it worse. A 6–8 AM EST window overlaps with 6–8 PM PHT, which is workable but requires the Philippines team to stay late. Many US–Philippines teams split the pain: the US side meets early and the Philippines side stays late on alternate weeks.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Acknowledge the sacrifice.</strong> When the Philippines side is staying up late, thank them explicitly and rotate who takes the late shift.</li>
                <li><strong>Keep meetings short and structured.</strong> Night-shift workers are more productive with focused 30-minute calls than open-ended 90-minute discussions.</li>
                <li><strong>Record and summarize.</strong> Async updates and recorded Looms reduce the need for real-time meetings and respect the Philippines team's personal time.</li>
                <li><strong>Respect Filipino holidays.</strong> Holy Week, Christmas, and New Year are major holidays. Plan sprints around them.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–Philippines Meetings</h2>
              <p className="text-muted-foreground">
                The Philippines does not observe DST, which simplifies things. The only shift comes from the US side. When the US moves to DST in March, the gap narrows by one hour. When it moves back in November, the gap widens again.
              </p>
              <p className="text-muted-foreground">
                A 7 AM PST meeting in January (8 PM PHT) becomes 7 AM PDT in April (9 PM PHT). Our planner tracks these shifts automatically and warns you when the overlap window is about to change.
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
