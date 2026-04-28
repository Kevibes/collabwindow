import type { Metadata } from "next";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "US–India Team Meeting Etiquette: 7 Rules for Distributed Teams",
  description:
    "7 essential rules for running smooth meetings between US and India teams. Covers rotation, async defaults, DST awareness, and cultural etiquette.",
};

export default function UsIndiaEtiquettePage() {
  return (
    <div className="min-h-full">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "US–India Team Meeting Etiquette: 7 Rules",
        datePublished: "2026-04-27",
        dateModified: "2026-04-27",
        author: { "@type": "Organization", name: "CollabWindow", url: "https://collabwindow.app" },
        publisher: { "@type": "Organization", name: "CollabWindow", url: "https://collabwindow.app" },
        url: "https://collabwindow.app/blog/us-india-team-meeting-etiquette",
      }} />
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <span className="text-muted-foreground">Blog</span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <article className="py-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-sm text-muted-foreground mb-4">April 27, 2026 · 6 min read</div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              US–India Team Meeting Etiquette: 7 Rules
            </h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="lead text-lg text-muted-foreground">
                The US–India time gap is one of the widest in global business: 9.5 to 12.5 hours, depending on coast and season. When it is 9 AM in New York, it is already 6:30 PM in Mumbai. That narrow overlap window is where your team lives or dies. These seven rules will help you run meetings that respect both sides and keep your team productive.
              </p>

              <h2>1. Rotate the Pain</h2>
              <p>
                If your team meets daily, do not always make the India side stay late. Alternate between early US mornings and late India evenings. A fair rotation might look like this: the US East Coast team meets at 7 AM EST on Monday, Wednesday, and Friday, while the India team stays until 7:30 PM IST on Tuesday and Thursday.
              </p>
              <p>
                The key is visibility. Publish the rotation in a shared calendar so everyone knows the schedule. If someone has a conflict, let them swap with a teammate. Fairness builds trust, and trust is what keeps distributed teams together.
              </p>

              <h2>2. Default to Async</h2>
              <p>
                The best meeting between the US and India is the one you do not need to have. With a 9.5-hour gap, real-time meetings are expensive. They require one side to start early or the other to stay late. Async communication removes that cost.
              </p>
              <p>
                Use recorded video for demos and updates. Use shared docs for decisions and feedback. Use threaded chat for questions. Reserve real-time meetings for discussions that genuinely need back-and-forth — and even then, keep them short.
              </p>

              <h2>3. Keep It Short</h2>
              <p>
                A 30-minute stand-up is more sustainable than a 90-minute planning session when one side is at the edge of their day. For US–India meetings, 30 minutes should be the default. If you need 60 minutes, schedule a break at the 30-minute mark.
              </p>
              <p>
                Start on time, end on time. This is non-negotiable for distributed teams. A meeting that runs 10 minutes late is 10 minutes of personal time lost for someone who is already at the edge of their day.
              </p>
            </div>

            <AdSlot slot="3333333333" format="horizontal" className="my-8" />

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2>4. Be DST-Aware</h2>
              <p>
                India does not observe Daylight Saving Time, but the US does. Twice a year, the time gap shifts by one hour. In March, your 8 AM EST meeting jumps from 6:30 PM IST to 7:30 PM IST. In November, it jumps back.
              </p>
              <p>
                Use a planner that detects DST transitions and warns you. Check the overlap window after every DST change. Update recurring meetings if the new overlap is no longer sustainable. And always include both time zones in calendar invites.
              </p>
              <p>
                For a deeper guide, see <a href="/blog/how-to-handle-dst-changes-global-teams">how to handle DST changes for global teams</a>.
              </p>

              <h2>5. Record Everything</h2>
              <p>
                Record every US–India meeting. Not for surveillance — for people who could not attend because of the time gap. The recording becomes the source of truth for decisions and action items.
              </p>
              <p>
                Share the recording within 24 hours, along with a written summary. The summary should be scannable: bullet points for decisions, action items with owners and deadlines, and links to relevant docs. Someone who missed the meeting should catch up in 2 minutes.
              </p>
            </div>

            <AdSlot slot="4444444444" format="horizontal" className="my-8" />

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2>6. Respect Indian Holidays</h2>
              <p>
                India has a rich calendar of festivals and holidays that shut down offices for days. Diwali, Holi, Independence Day (August 15), Republic Day (January 26), and Ganesh Chaturthi are major events. Plan sprints and milestones around them.
              </p>
              <p>
                Create a shared holiday calendar that includes Indian and US holidays. Check it before scheduling quarterly planning, sprint retrospectives, or launches. Nothing kills morale like a stand-up on Diwali.
              </p>

              <h2>7. Build Personal Relationships</h2>
              <p>
                Distributed teams thrive on trust, and trust is built through personal connection. Take 2 minutes at the start of each meeting for small talk. Ask about the weekend. Share a photo. Learn names, not just roles.
              </p>
              <p>
                This is especially important for US–India teams, where cultural differences can create distance. Americans tend to be direct; Indians often prioritize harmony. Americans value speed; Indians value thoroughness. Neither is wrong. The best teams blend both styles by building relationships first.
              </p>

              <hr />

              <h3>Related Guides</h3>
              <ul>
                <li><a href="/us-india-meeting-planner">US–India Meeting Planner</a></li>
                <li><a href="/blog/complete-guide-scheduling-meetings-across-time-zones">Complete Guide to Scheduling Meetings Across Time Zones</a></li>
                <li><a href="/blog/how-to-handle-dst-changes-global-teams">How to Handle DST Changes for Global Teams</a></li>
              </ul>
            </div>

            <AdSlot slot="5555555555" format="horizontal" className="mt-8" />
          </div>
        </article>
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
