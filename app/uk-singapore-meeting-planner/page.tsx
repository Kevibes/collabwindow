import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Best Time to Meet Between UK and Singapore | Free Overlap Planner",
  description:
    "Find the perfect meeting time between UK and Singapore time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UkSingaporePage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "CollabWindow", item: "https://collabwindow.app" },
              { "@type": "ListItem", position: 2, name: "UK–Singapore Meeting Planner", item: "https://collabwindow.app/uk-singapore-meeting-planner" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CollabWindow — UK–Singapore Time Zone Overlap Planner",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free time zone overlap planner for UK and Singapore distributed teams.",
          },
        ]}
      />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">UK–Singapore</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between UK and Singapore</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 7–8 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="Europe/London" defaultB="Asia/Singapore" showContent={true} />
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
              <h2 className="text-2xl font-bold">Why UK–Singapore Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                Singapore is a major finance and shipping hub with deep ties to the UK, but the 7–8 hour time gap makes real-time collaboration challenging. Singapore does not observe DST, while the UK does, which means the gap shifts by one hour twice a year.
              </p>
              <p className="text-muted-foreground">
                Singaporean business culture blends British formality with Asian efficiency. Meetings are typically concise and agenda-driven, but the time gap forces many teams into early mornings or late evenings. Finding a sustainable rhythm is key.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for UK–Singapore Teams</h2>
              <p className="text-muted-foreground">
                The best overlap is UK morning / Singapore afternoon. In winter (GMT), 9 AM–12 PM GMT overlaps with 5 PM–8 PM SGT — a solid 3-hour window. In summer (BST), 9 AM–12 PM BST overlaps with 4 PM–7 PM SGT, which is still workable but tighter.
              </p>
              <p className="text-muted-foreground">
                Many UK–Singapore teams split the difference: the UK side meets at 8 AM and Singapore stays until 6 PM. This gives a 4-hour overlap that covers most collaborative needs. For urgent matters, both sides can stretch an hour further without major disruption.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Be punctual.</strong> Singaporean business culture values timeliness. Dial in on time, every time.</li>
                <li><strong>Use the afternoon window.</strong> Singapore afternoons align with UK mornings. Schedule decision-heavy meetings then, not at the edges of the day.</li>
                <li><strong>Be DST-aware.</strong> The UK shifts; Singapore does not. Calendar invites should include both time zones.</li>
                <li><strong>Respect local holidays.</strong> Chinese New Year, Hari Raya, and Deepavali are major holidays in Singapore. Plan around them.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects UK–Singapore Meetings</h2>
              <p className="text-muted-foreground">
                Singapore is on SGT (UTC+8) year-round. The UK shifts between GMT (UTC+0) and BST (UTC+1). This means the gap is 8 hours in winter and 7 hours in summer — a one-hour swing twice a year.
              </p>
              <p className="text-muted-foreground">
                A 9 AM GMT meeting is 5 PM SGT. In summer, 9 AM BST is 4 PM SGT. That extra hour in summer is valuable — it can make the difference between a comfortable overlap and a rushed one. Our planner tracks DST transitions and warns you when the window is about to shift.
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
                { pair: "US–Germany", url: "/us-germany-meeting-planner" },
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
