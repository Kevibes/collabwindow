import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and Japan | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Japan time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsJapanPage() {
  return (
    <div className="min-h-full">
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">US–Japan</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Best Time to Meet Between US and Japan</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly see when your working hours collide across the 13–17 hour gap.
            </p>
          </div>
        </section>

        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool defaultA="America/Los_Angeles" defaultB="Asia/Tokyo" showContent={true} />
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 border-t">
          <div className="max-w-3xl mx-auto space-y-10">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold">Why US–Japan Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                Japan is one of the hardest countries to schedule with from the US. Tokyo is 13–17 hours ahead, depending on coast and season. When it is 9 AM in Los Angeles, it is already 1 AM the next day in Tokyo. There is almost no natural overlap between standard working hours.
              </p>
              <p className="text-muted-foreground">
                Japan also has a strong culture of in-office work and long hours, but that does not mean Japanese teams are available for late-night calls. Respect for personal time is growing, especially among younger workers. Forcing Japan-based colleagues into routine 10 PM calls is a retention risk.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Japan Teams</h2>
              <p className="text-muted-foreground">
                The harsh reality: there are no comfortable golden hours for US–Japan. The best compromise is early US morning / late Japan evening. For West Coast, 6–8 AM PST overlaps with 10 PM–12 AM JST — tolerable for weekly syncs, unsustainable for daily stand-ups.
              </p>
              <p className="text-muted-foreground">
                East Coast teams face a 14-hour gap. A 6–8 AM EST window is 7–9 PM JST, which is more reasonable for the Japan side but requires the US to start very early. Many US–Japan teams default to async communication and reserve the narrow overlap for critical decisions only.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li><strong>Default to async.</strong> Use Loom, written updates, and shared docs for 90% of communication. Reserve real-time meetings for decisions that genuinely need discussion.</li>
                <li><strong>Rotate the burden.</strong> If weekly calls are unavoidable, alternate between early US mornings and late Japan evenings.</li>
                <li><strong>Be extremely prepared.</strong> Japanese meetings are efficient when they happen. Send agendas, pre-reads, and expected outcomes in advance.</li>
                <li><strong>Respect Golden Week.</strong> Late April to early May is a cluster of national holidays. Most Japanese workers take the full week off.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–Japan Meetings</h2>
              <p className="text-muted-foreground">
                Japan does not observe DST, which removes one variable. The only shift comes from the US side. When the US moves to DST in March, the gap narrows by one hour. When it moves back in November, the gap widens again.
              </p>
              <p className="text-muted-foreground">
                A 7 AM PST meeting in January (midnight JST) becomes 7 AM PDT in April (11 PM JST the same day). That one-hour shift can make the difference between a tolerable call and an impossible one. Our planner tracks DST changes and warns you when the overlap window shifts.
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
                { pair: "US–Germany", url: "/us-germany-meeting-planner" },
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
