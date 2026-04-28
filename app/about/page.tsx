import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CollabWindow",
  description:
    "CollabWindow is a free time zone overlap planner for distributed teams. Learn why we built it and how it works.",
};

export default function AboutPage() {
  return (
    <div className="min-h-full">
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight">
            CollabWindow
          </a>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold tracking-tight">About CollabWindow</h1>

          <section className="space-y-4">
            <p className="text-muted-foreground">
              CollabWindow is a free, no-signup tool that helps distributed teams find
              the best time to meet across time zones. We built it because scheduling
              meetings between US, India, UK, and other regions should not require a
              spreadsheet or a back-and-forth email chain.
            </p>
            <p className="text-muted-foreground">
              The overlap planner handles Daylight Saving Time automatically, generates
              shareable links, and even lets you export suggested times to Google
              Calendar, Outlook, or Slack.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">What makes it different</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>No signup, no email capture, no tracking cookies.</li>
              <li>Dedicated pages for popular country pairs with local context.</li>
              <li>Privacy-first: we do not store your meeting data.</li>
              <li>Fast, static pages that work on slow connections.</li>
            </ul>
          </section>
        </div>
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
