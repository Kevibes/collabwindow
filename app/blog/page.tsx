import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — CollabWindow",
  description:
    "Guides and resources for scheduling meetings across time zones. DST tips, etiquette, and the best tools for distributed teams.",
};

const posts = [
  {
    slug: "complete-guide-scheduling-meetings-across-time-zones",
    title: "The Complete Guide to Scheduling Meetings Across Time Zones",
    excerpt:
      "A practical guide for distributed teams on how to schedule meetings across time zones. Covers overlap windows, DST handling, etiquette, and tools.",
    date: "April 27, 2026",
    readTime: "12 min read",
  },
  {
    slug: "us-india-team-meeting-etiquette",
    title: "US–India Team Meeting Etiquette: 7 Rules",
    excerpt:
      "7 essential rules for running smooth meetings between US and India teams. Covers rotation, async defaults, DST awareness, and cultural etiquette.",
    date: "April 27, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-to-handle-dst-changes-global-teams",
    title: "How to Handle DST Changes for Global Teams",
    excerpt:
      "A practical guide to managing Daylight Saving Time changes for distributed teams. Covers DST schedules, tools, and communication strategies.",
    date: "April 27, 2026",
    readTime: "8 min read",
  },
  {
    slug: "best-tools-remote-team-meetings",
    title: "Best Tools for Remote Team Meetings",
    excerpt:
      "The best tools for scheduling, running, and following up on remote team meetings. Covers overlap planners, scheduling tools, async video, and shared docs.",
    date: "April 27, 2026",
    readTime: "7 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-full">
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
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Guides and resources for scheduling meetings across time zones.
            </p>

            <div className="space-y-6">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-lg border bg-background hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.date} · {post.readTime}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
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
