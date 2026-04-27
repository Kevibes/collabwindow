import type { Metadata } from "next";
import { OverlapTool } from "@/components/overlap-tool-wrapper";

export const metadata: Metadata = {
  title: "Best Time to Meet Between US and India | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and India time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
};

export default function UsIndiaPage() {
  return (
    <div className="min-h-full">
      {/* Header */}
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
            <span className="text-muted-foreground">US–India</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-10 pb-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Best Time to Meet Between US and India
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Find the perfect meeting overlap for distributed teams. Instantly
              see when your working hours collide across the 9.5–12.5 hour gap.
            </p>
          </div>
        </section>

        {/* Tool */}
        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool
              defaultA="America/New_York"
              defaultB="Asia/Kolkata"
              showContent={true}
            />
          </div>
        </section>

        {/* Supporting Content */}
        <section className="py-10 px-4 sm:px-6 border-t">
          <div className="max-w-3xl mx-auto space-y-10">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold">Why US–India Meetings Are Tricky</h2>
              <p className="text-muted-foreground">
                The United States and India are separated by 9.5 to 12.5 hours,
                depending on which US coast you are on and the time of year.
                When it is 9:00 AM in New York, it is already 6:30 PM in Mumbai.
                That means by the time the US East Coast starts its workday, India
                is already wrapping up.
              </p>
              <p className="text-muted-foreground">
                The time gap is even wider for West Coast teams. A 9:00 AM start
                in San Francisco translates to 9:30 PM in India — well outside
                standard business hours. For distributed teams spanning these two
                countries, finding a mutually convenient meeting time requires
                careful planning.
              </p>

              <h2 className="text-2xl font-bold mt-8">Golden Hours for US–India Teams</h2>
              <p className="text-muted-foreground">
                The most common overlap window for US East Coast and India is
                early morning US time / late evening India time. Specifically,
                7:00–9:30 AM EST overlaps with 5:30–8:00 PM IST. This gives teams
                a comfortable 1.5–2 hour window for stand-ups, sprint planning,
                and one-on-ones.
              </p>
              <p className="text-muted-foreground">
                For West Coast teams, the situation is tighter. A 7:00–9:00 AM
                PST window overlaps with 7:30–9:30 PM IST — feasible for
                occasional calls but not sustainable for daily stand-ups. Many
                West Coast–India teams rotate meeting times or keep meetings
                async-heavy.
              </p>

              <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>
                  <strong>Rotate the pain.</strong> If your team meets daily, do not
                  always make the India side stay late. Alternate between early
                  US mornings and late India evenings.
                </li>
                <li>
                  <strong>Record everything.</strong> Use the overlap window for
                  discussions that truly need real-time collaboration. Record
                  decisions and share written summaries for async consumption.
                </li>
                <li>
                  <strong>Keep it short.</strong> A 30-minute stand-up is more
                  sustainable than a 90-minute planning session when one side
                  is at the edge of their day.
                </li>
                <li>
                  <strong>Respect local holidays.</strong> Diwali, Independence Day,
                  Thanksgiving, and Memorial Day all affect availability. Plan
                  around them.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">How DST Affects US–India Meetings</h2>
              <p className="text-muted-foreground">
                India does not observe Daylight Saving Time, but most of the
                United States does. This means the time gap between the two
                countries shifts by one hour twice a year. In winter (November
                to March), New York is 10.5 hours behind Mumbai. In summer
                (March to November), the gap narrows to 9.5 hours.
              </p>
              <p className="text-muted-foreground">
                This shift can catch teams off guard. A meeting scheduled for
                7:00 AM EST in January becomes 6:00 AM EDT in April — an hour
                earlier for the US side. Our planner automatically detects DST
                transitions and warns you when the overlap window is about to
                shift.
              </p>
            </article>
          </div>
        </section>

        {/* Related Pairs */}
        <section className="py-10 px-4 sm:px-6 border-t bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Also check</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { pair: "US–UK", url: "/us-uk-meeting-planner" },
                { pair: "US–Germany", url: "/us-germany-meeting-planner" },
                { pair: "UK–India", url: "/uk-india-meeting-planner" },
                { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
                { pair: "US–Japan", url: "/us-japan-meeting-planner" },
                { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
              ].map((item) => (
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

      {/* Footer */}
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
