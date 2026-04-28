import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — CollabWindow",
  description: "Get in touch with the CollabWindow team.",
};

export default function ContactPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Contact</h1>

          <section className="space-y-4">
            <p className="text-muted-foreground">
              Have a question, bug report, or feature request? We would love to hear
              from you.
            </p>
            <p className="text-muted-foreground">
              Email us at{" "}
              <a
                href="mailto:hello@collabwindow.app"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                hello@collabwindow.app
              </a>
              {" "}and we will get back to you as soon as we can.
            </p>
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
