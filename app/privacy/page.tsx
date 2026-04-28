import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CollabWindow",
  description:
    "CollabWindow does not collect personal data. Read our privacy policy.",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>

          <section className="space-y-4">
            <p className="text-muted-foreground">
              CollabWindow is committed to protecting your privacy. This policy
              explains what information we collect and how we use it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Information We Do Not Collect</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>We do not ask for your name, email, or any personal details.</li>
              <li>We do not store your meeting times or time zone selections.</li>
              <li>We do not use cookies for tracking or advertising.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p className="text-muted-foreground">
              We use privacy-friendly analytics (Plausible) to understand how
              people use the site. This data is aggregated and anonymous — we
              cannot identify individual visitors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Advertising</h2>
            <p className="text-muted-foreground">
              We may display ads via Google AdSense on some pages. Google may use
              cookies to serve ads based on your prior visits to this or other
              websites. You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy from time to time. The latest version will
              always be available at this URL.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy, please email{" "}
              <a
                href="mailto:hello@collabwindow.app"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                hello@collabwindow.app
              </a>
              .
            </p>
          </section>

          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
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
