import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Terms of Service — CollabWindow",
  description:
    "Terms of Service for CollabWindow. Read our policies on acceptable use, anti-scraping, and intellectual property.",
};

export default function TermsPage() {
  return (
    <div className="min-h-full">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "CollabWindow",
                item: "https://www.collabwindow.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Terms of Service",
                item: "https://www.collabwindow.app/terms",
              },
            ],
          },
        ]}
      />

      <header className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center">
          <a href="/" className="font-bold text-lg tracking-tight">CollabWindow</a>
        </div>
      </header>

      <main className="flex-1 py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: April 28, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using CollabWindow ("the Service"), you agree to be
            bound by these Terms of Service. If you do not agree, do not use the
            Service.
          </p>

          <h2>2. Permitted Use</h2>
          <p>
            You may use the Service for personal or internal business purposes.
            You may not use the Service for any unlawful purpose or in any way
            that interrupts, damages, or impairs the Service.
          </p>

          <h2>3. Prohibited Activities</h2>
          <p>You may not:</p>
          <ul>
            <li>
              Scrape, crawl, or programmatically access the website for the
              purpose of training machine learning models or building competing
              products.
            </li>
            <li>
              Reproduce, distribute, or create derivative works based on the
              website&apos;s content or source code without express written
              permission.
            </li>
            <li>
              Use automated tools to extract data, content, or functionality at
              a rate that degrades service performance.
            </li>
            <li>
              Circumvent any technical measures we use to protect the Service.
            </li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, design, text, graphics, and code on CollabWindow are the
            property of CollabWindow and are protected by copyright and other
            intellectual property laws. Unauthorized reproduction, scraping, or
            use for AI training is prohibited.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" without warranties of any kind. We
            do not guarantee that the Service will be uninterrupted or error-free.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, CollabWindow shall not be
            liable for any indirect, incidental, or consequential damages arising
            out of your use of the Service.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes constitutes acceptance of the new Terms.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="/contact" className="text-indigo-600 hover:underline">
              collabwindow.app/contact
            </a>
            .
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
