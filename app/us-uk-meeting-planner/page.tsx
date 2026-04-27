import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and UK | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and UK time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsUkPage() {
  return (
    <div className="min-h-full">
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">
            CollabWindow
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">US–UK</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between US and UK</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 5–8 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="America/New_York" defaultB="Europe/London" showContent={true} />
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 border-t">
          <div className="max-w-3xl mx-auto space-y-10">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold">Why US–UK Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                The US and UK share a language but not a clock. The gap ranges from 5 hours (East Coast) to 8 hours (West Coast). When it is 9 AM in New York, it is already 2 PM in London. For West Coast teams, a 9 AM start means 5 PM in the UK — cutting the British day short.
              </p>
              <p className="text-muted-foreground">
                Both countries observe DST, but they switch on different dates and sometimes in different directions. The US springs forward two weeks after the UK, creating a brief window where the gap is an hour wider than usual.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–UK Teams</h2>
              <p className="text-muted-foreground">
                US East Coast and UK teams enjoy a generous overlap: 9 AM–1 PM EST overlaps with 2 PM–6 PM GMT. That is a solid 4-hour window for real-time collaboration, making US–UK one of the easiest transatlantic pairs.
              </p>
              <p className="text-muted-foreground">
                West Coast teams have it tighter. A 9 AM–12 PM PST window overlaps with 5 PM–8 PM GMT. Still workable for stand-ups, but not ideal for deep meetings. Many West Coast–UK teams shift important calls to the US morning / UK late afternoon.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Respect the British lunch.</strong> 1 PM GMT is a common break. Avoid scheduling over it unless agreed in advance.</li>
                <li><strong>Use the afternoon overlap.</strong> UK afternoons line up with US mornings — ideal for decision-making meetings.</li>
                <li><strong>Be DST-aware.</strong> Mark calendar invites in both time zones to avoid confusion during the spring and fall transitions.</li>
                <li><strong>Keep Fridays light.</strong> Both cultures value Friday afternoons. Avoid late-day meetings on either side.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–UK Meetings</h2>
              <p className="text-muted-foreground">
                Both the US and UK observe DST, but not in sync. The UK switches to BST on the last Sunday in March and back to GMT on the last Sunday in October. The US moves to EDT/PDT on the second Sunday in March and back on the first Sunday in November.
              </p>
              <p className="text-muted-foreground">
                For about two weeks in March and one week in November, the time gap is off by an hour. A 2 PM GMT meeting that was 9 AM EST becomes 10 AM EDT — still fine, but easy to miss if your calendar does not update. Our planner tracks these transitions automatically.
              </p>
            </article>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 border-t bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Also check</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { pair: "US–India", url: "/us-india-meeting-planner" },
                { pair: "US–Germany", url: "/us-germany-meeting-planner" },
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
