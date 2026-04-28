import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Best Time to Meet Between UK and India | Free Overlap Planner",
  description:
    "Find the perfect meeting time between UK and India time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UkIndiaPage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://collabwindow.app" },
              { "@type": "ListItem", position: 2, name: "UK–India Meeting Planner", item: "https://collabwindow.app/uk-india-meeting-planner" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CollabWindow — UK–India Time Zone Overlap Planner",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free time zone overlap planner for UK and India distributed teams.",
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">UK–India</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between UK and India</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 4.5–5.5 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="Europe/London" defaultB="Asia/Kolkata" showContent={true} />
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
              <h2 className="text-2xl font-bold">Why UK–India Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                The UK and India share deep historical and business ties, making this one of the most common cross-border team configurations. The time gap is relatively modest — 4.5 to 5.5 hours — which makes it easier than US–India but still requires intentional scheduling.
              </p>
              <p className="text-muted-foreground">
                When it is 9 AM in London, it is 1:30 or 2:30 PM in India, depending on the season. India does not observe DST, so the gap shifts by one hour when the UK moves to BST in March and back to GMT in October. This creates a slightly wider overlap in winter and a tighter one in summer.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for UK–India Teams</h2>
              <p className="text-muted-foreground">
                The best natural overlap for UK–India is UK morning / India afternoon. Specifically, 9 AM–1 PM GMT overlaps with 2:30–6:30 PM IST, giving a comfortable 4-hour window. This is ideal for daily stand-ups, sprint planning, and stakeholder reviews.
              </p>
              <p className="text-muted-foreground">
                In summer (BST), the overlap shrinks slightly: 9 AM–1 PM BST overlaps with 1:30–5:30 PM IST. Still workable, but teams should avoid pushing meetings past 5:30 PM IST if possible, as Indian teams often commute during that window.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Avoid Indian evening.</strong> Past 6:30 PM IST is commuting or family time for most Indian workers. Respect it.</li>
                <li><strong>Use the afternoon wisely.</strong> India afternoons are productive — schedule decision-heavy meetings then.</li>
                <li><strong>Be DST-aware.</strong> The UK shifts; India does not. Calendar invites should include both time zones year-round.</li>
                <li><strong>Respect Diwali and Holi.</strong> Major Indian festivals can shut down offices for days. Plan sprints around them.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects UK–India Meetings</h2>
              <p className="text-muted-foreground">
                The UK observes DST; India does not. This means the time gap between the two countries changes by one hour twice a year. In winter (GMT), London is 5.5 hours behind India. In summer (BST), the gap narrows to 4.5 hours.
              </p>
              <p className="text-muted-foreground">
                A 9 AM GMT meeting is 2:30 PM IST. In summer, 9 AM BST is 1:30 PM IST — an hour earlier for the India side. Our planner detects these transitions and warns you when the overlap window is about to shift.
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
                { pair: "US–Germany", url: "/us-germany-meeting-planner" },
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
