import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";

export const metadata: Metadata = {
  title: "Best Time to Meet Between UK and Australia | Free Overlap Planner",
  description:
    "Find the perfect meeting time between UK and Australia time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UkAustraliaPage() {
  return (
    <div className="min-h-full">
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">UK–Australia</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between UK and Australia</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 9–11 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="Europe/London" defaultB="Australia/Sydney" showContent={true} />
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 border-t">
          <div className="max-w-3xl mx-auto space-y-10">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold">Why UK–Australia Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                The UK and Australia share the Commonwealth, the English language, and a love of sport — but they do not share a clock. Sydney is 9–11 hours ahead of London, depending on the season. When it is 9 AM in London, it is 6–8 PM in Sydney, right at the edge of the Australian workday.
              </p>
              <p className="text-muted-foreground">
                Both countries observe DST, but on different schedules. The UK switches in March and October; Australia switches in October and April. This creates brief misalignment windows where the gap is an hour wider or narrower than expected.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for UK–Australia Teams</h2>
              <p className="text-muted-foreground">
                The best overlap is UK morning / Australian late afternoon. In winter (GMT), 9 AM–12 PM GMT overlaps with 8 PM–11 PM AEDT — late for Australia but workable for occasional syncs. In summer (BST), 9 AM–12 PM BST overlaps with 6 PM–9 PM AEST, which is more reasonable.
              </p>
              <p className="text-muted-foreground">
                Many UK–Australia teams find a sustainable rhythm by meeting at 8 AM UK / 5–7 PM Australia. This is early for the UK side but not unreasonable, and it falls within the Australian afternoon. For daily stand-ups, this is often the compromise that sticks.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Rotate the early shift.</strong> If the UK side is meeting at 8 AM daily, rotate who takes that slot. Burnout is real.</li>
                <li><strong>Keep it short.</strong> A 30-minute stand-up is more sustainable than a 90-minute planning session when one side is at the edge of their day.</li>
                <li><strong>Use async for detail work.</strong> Save real-time meetings for decisions and alignment. Use docs and recorded updates for everything else.</li>
                <li><strong>Respect Boxing Day.</strong> The day after Christmas is a major holiday in both countries. Do not schedule anything.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects UK–Australia Meetings</h2>
              <p className="text-muted-foreground">
                Both countries observe DST, but the schedules do not align. The UK moves to BST on the last Sunday in March and back to GMT on the last Sunday in October. Australia moves to AEDT on the first Sunday in October and back to AEST on the first Sunday in April.
              </p>
              <p className="text-muted-foreground">
                This creates two brief misalignment windows each year: one in late March/early April and one in October. During these windows, the gap may be an hour off from what you expect. Our planner tracks both DST schedules and warns you when the overlap window shifts.
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
                { pair: "US–UK", url: "/us-uk-meeting-planner" },
                { pair: "UK–India", url: "/uk-india-meeting-planner" },
                { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
                { pair: "US–Australia", url: "/us-australia-meeting-planner" },
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
