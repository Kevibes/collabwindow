import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between UK and India | Free Overlap Planner",
  description:
    "Find the perfect meeting time between UK and India time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UkIndiaPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between UK and India"
      description="Find the perfect meeting time between UK and India time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="Europe/London"
      defaultB="Asia/Kolkata"
      navLabel="UK–India"
      jsonLdName="CollabWindow — UK–India Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for UK and India distributed teams."
      jsonLdUrl="https://www.collabwindow.app/uk-india-meeting-planner"
      gapDescription="4.5–5.5 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why UK–India Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            The UK and India share deep historical and business ties, making this one of the most common cross-border team configurations. The time gap is relatively modest — 4.5 to 5.5 hours — which makes it easier than US–India but still requires intentional scheduling.
          </p>
          <p className="text-muted-foreground">
            When it is 9 AM in London, it is 1:30 or 2:30 PM in India, depending on the season. India does not observe DST, so the gap shifts by one hour when the UK moves to BST in March and back to GMT in October. This creates a slightly wider overlap in winter and a tighter one in summer.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for UK–India Teams</h2>
          <p className="text-muted-foreground">
            The best natural overlap for UK–India is UK morning / India afternoon. Specifically, 9 AM–1 PM GMT overlaps with 2:30–6:30 PM IST, giving a comfortable 4-hour window. This is ideal for daily stand-ups, sprint planning, and stakeholder reviews.
          </p>
          <p className="text-muted-foreground">
            In summer (BST), the overlap shrinks slightly: 9 AM–1 PM BST overlaps with 1:30–5:30 PM IST. Still workable, but teams should avoid pushing meetings past 5:30 PM IST if possible, as Indian teams often commute during that window.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Avoid Indian evening.</strong> Past 6:30 PM IST is commuting or family time for most Indian workers. Respect it.</li>
            <li><strong>Use the afternoon wisely.</strong> India afternoons are productive — schedule decision-heavy meetings then.</li>
            <li><strong>Be DST-aware.</strong> The UK shifts; India does not. Calendar invites should include both time zones year-round.</li>
            <li><strong>Respect Diwali and Holi.</strong> Major Indian festivals can shut down offices for days. Plan sprints around them.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects UK–India Meetings</h2>
          <p className="text-muted-foreground">
            The UK observes DST; India does not. This means the time gap between the two countries changes by one hour twice a year. In winter (GMT), London is 5.5 hours behind India. In summer (BST), the gap narrows to 4.5 hours.
          </p>
          <p className="text-muted-foreground">
            A 9 AM GMT meeting is 2:30 PM IST. In summer, 9 AM BST is 1:30 PM IST — an hour earlier for the India side. Our planner detects these transitions and warns you when the overlap window is about to shift.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
      ]}
    />
  );
}
