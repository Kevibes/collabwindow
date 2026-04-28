import type { Metadata } from "next";
import Link from "next/link";
import { OverlapTool } from "@/components/overlap-tool-wrapper";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "CollabWindow — Find the Best Time to Meet Across Time Zones",
  description:
    "Free overlap planner for distributed teams. No signup. Find the perfect meeting time between US, India, UK, and other time zones.",
};

const pairs = [
  { slug: "us-india", label: "🇺🇸 US – 🇮🇳 India", gap: "9.5–12.5h", url: "/us-india-meeting-planner" },
  { slug: "us-uk", label: "🇺🇸 US – 🇬🇧 UK", gap: "5–8h", url: "/us-uk-meeting-planner" },
  { slug: "us-germany", label: "🇺🇸 US – 🇩🇪 Germany", gap: "6–9h", url: "/us-germany-meeting-planner" },
  { slug: "us-philippines", label: "🇺🇸 US – 🇵🇭 Philippines", gap: "12–16h", url: "/us-philippines-meeting-planner" },
  { slug: "uk-india", label: "🇬🇧 UK – 🇮🇳 India", gap: "4.5–5.5h", url: "/uk-india-meeting-planner" },
  { slug: "us-brazil", label: "🇺🇸 US – 🇧🇷 Brazil", gap: "1–4h", url: "/us-brazil-meeting-planner" },
  { slug: "us-japan", label: "🇺🇸 US – 🇯🇵 Japan", gap: "13–17h", url: "/us-japan-meeting-planner" },
  { slug: "uk-singapore", label: "🇬🇧 UK – 🇸🇬 Singapore", gap: "7–8h", url: "/uk-singapore-meeting-planner" },
  { slug: "us-australia", label: "🇺🇸 US – 🇦🇺 Australia", gap: "14–19h", url: "/us-australia-meeting-planner" },
  { slug: "uk-australia", label: "🇬🇧 UK – 🇦🇺 Australia", gap: "9–11h", url: "/uk-australia-meeting-planner" },
];

const faqs = [
  {
    q: "How does this tool work?",
    a: "Enter two time zones and your working hours. We calculate the overlap between your schedules and show you the best meeting windows — color-coded by comfort level.",
  },
  {
    q: "Does it handle Daylight Saving Time?",
    a: "Yes. We detect DST transitions and display current offsets. If a DST change is approaching within two weeks, we show a warning so you know the overlap may shift.",
  },
  {
    q: "Can I share a specific time with my team?",
    a: "Absolutely. Every change you make updates the URL. Click 'Copy link' to share the exact configuration with your team via Slack, email, or a calendar invite.",
  },
  {
    q: "Is it free?",
    a: "Yes. CollabWindow is completely free to use. No signup required.",
  },
  {
    q: "Can I add a third time zone?",
    a: "Not yet — we are working on it. For now, you can open two tabs with different pairs and compare manually.",
  },
  {
    q: "Which countries do you support?",
    a: "We support 40+ major cities across the Americas, Europe, Asia Pacific, Australia, the Middle East, and Africa.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <div className="min-h-full">
      <JsonLd data={faqSchema} />
      {/* Header */}
      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            CollabWindow
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-12 pb-8 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Find the Best Time to Meet{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Across Time Zones
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Free overlap planner for distributed teams. No signup. Shareable
              links. DST handled automatically.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href="#tool"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Try the planner
              </a>
              <a
                href="#pairs"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border hover:bg-muted transition-colors"
              >
                Browse country pairs
              </a>
            </div>
          </div>
        </section>

        {/* Tool */}
        <section id="tool" className="py-8 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <OverlapTool showContent={false} />
          </div>
        </section>

        {/* Pair Selector Grid */}
        <section id="pairs" className="py-12 px-4 sm:px-6 border-t bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Popular Country Pairs</h2>
            <p className="text-muted-foreground mb-6">
              Dedicated pages with pre-filled time zones and local context.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pairs.map((pair) => (
                <Link
                  key={pair.slug}
                  href={pair.url}
                  className="block p-4 rounded-lg border bg-background hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
                >
                  <div className="font-medium">{pair.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Time gap: {pair.gap}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 px-4 sm:px-6 border-t">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold">Instant overlap calculation</h3>
                <p className="text-sm text-muted-foreground">
                  No page reloads. Adjust sliders and see results in real time.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold">DST handled automatically</h3>
                <p className="text-sm text-muted-foreground">
                  We track daylight saving transitions and warn you when overlap
                  windows are about to shift.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold">Shareable links for your team</h3>
                <p className="text-sm text-muted-foreground">
                  Every state change updates the URL. Copy and paste into Slack,
                  email, or your calendar invite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 sm:px-6 border-t bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} className="border shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
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
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
