import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between UK and Singapore | Free Overlap Planner",
  description:
    "Find the perfect meeting time between UK and Singapore time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UkSingaporePage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between UK and Singapore"
      description="Find the perfect meeting time between UK and Singapore time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="Europe/London"
      defaultB="Asia/Singapore"
      navLabel="UK–Singapore"
      jsonLdName="CollabWindow — UK–Singapore Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for UK and Singapore distributed teams."
      jsonLdUrl="https://www.collabwindow.app/uk-singapore-meeting-planner"
      gapDescription="7–8 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why UK–Singapore Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            Singapore is a major finance and shipping hub with deep ties to the UK, but the 7–8 hour time gap makes real-time collaboration challenging. Singapore does not observe DST, while the UK does, which means the gap shifts by one hour twice a year.
          </p>
          <p className="text-muted-foreground">
            Singaporean business culture blends British formality with Asian efficiency. Meetings are typically concise and agenda-driven, but the time gap forces many teams into early mornings or late evenings. Finding a sustainable rhythm is key.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for UK–Singapore Teams</h2>
          <p className="text-muted-foreground">
            The best overlap is UK morning / Singapore afternoon. In winter (GMT), 9 AM–12 PM GMT overlaps with 5 PM–8 PM SGT — a solid 3-hour window. In summer (BST), 9 AM–12 PM BST overlaps with 4 PM–7 PM SGT, which is still workable but tighter.
          </p>
          <p className="text-muted-foreground">
            Many UK–Singapore teams split the difference: the UK side meets at 8 AM and Singapore stays until 6 PM. This gives a 4-hour overlap that covers most collaborative needs. For urgent matters, both sides can stretch an hour further without major disruption.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Be punctual.</strong> Singaporean business culture values timeliness. Dial in on time, every time.</li>
            <li><strong>Use the afternoon window.</strong> Singapore afternoons align with UK mornings. Schedule decision-heavy meetings then, not at the edges of the day.</li>
            <li><strong>Be DST-aware.</strong> The UK shifts; Singapore does not. Calendar invites should include both time zones.</li>
            <li><strong>Respect local holidays.</strong> Chinese New Year, Hari Raya, and Deepavali are major holidays in Singapore. Plan around them.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects UK–Singapore Meetings</h2>
          <p className="text-muted-foreground">
            Singapore is on SGT (UTC+8) year-round. The UK shifts between GMT (UTC+0) and BST (UTC+1). This means the gap is 8 hours in winter and 7 hours in summer — a one-hour swing twice a year.
          </p>
          <p className="text-muted-foreground">
            A 9 AM GMT meeting is 5 PM SGT. In summer, 9 AM BST is 4 PM SGT. That extra hour in summer is valuable — it can make the difference between a comfortable overlap and a rushed one. Our planner tracks DST transitions and warns you when the window is about to shift.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
      ]}
    />
  );
}
