import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between US and UK | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and UK time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UsUkPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between US and UK"
      description="Find the perfect meeting time between US and UK time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="America/New_York"
      defaultB="Europe/London"
      navLabel="US–UK"
      jsonLdName="CollabWindow — US–UK Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for US and UK distributed teams."
      jsonLdUrl="https://collabwindow.app/us-uk-meeting-planner"
      gapDescription="5–8 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why US–UK Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            The US and UK share a language but not a clock. The gap ranges from 5 hours (East Coast) to 8 hours (West Coast). When it is 9 AM in New York, it is already 2 PM in London. For West Coast teams, a 9 AM start means 5 PM in the UK — cutting the British day short.
          </p>
          <p className="text-muted-foreground">
            Both countries observe DST, but they switch on different dates and sometimes in different directions. The US springs forward two weeks after the UK, creating a brief window where the gap is an hour wider than usual.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for US–UK Teams</h2>
          <p className="text-muted-foreground">
            US East Coast and UK teams enjoy a generous overlap: 9 AM–1 PM EST overlaps with 2 PM–6 PM GMT. That is a solid 4-hour window for real-time collaboration, making US–UK one of the easiest transatlantic pairs.
          </p>
          <p className="text-muted-foreground">
            West Coast teams have it tighter. A 9 AM–12 PM PST window overlaps with 5 PM–8 PM GMT. Still workable for stand-ups, but not ideal for deep meetings. Many West Coast–UK teams shift important calls to the US morning / UK late afternoon.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Respect the British lunch.</strong> 1 PM GMT is a common break. Avoid scheduling over it unless agreed in advance.</li>
            <li><strong>Use the afternoon overlap.</strong> UK afternoons line up with US mornings — ideal for decision-making meetings.</li>
            <li><strong>Be DST-aware.</strong> Mark calendar invites in both time zones to avoid confusion during the spring and fall transitions.</li>
            <li><strong>Keep Fridays light.</strong> Both cultures value Friday afternoons. Avoid late-day meetings on either side.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects US–UK Meetings</h2>
          <p className="text-muted-foreground">
            Both the US and UK observe DST, but not in sync. The UK switches to BST on the last Sunday in March and back to GMT on the last Sunday in October. The US moves to EDT/PDT on the second Sunday in March and back on the first Sunday in November.
          </p>
          <p className="text-muted-foreground">
            For about two weeks in March and one week in November, the time gap is off by an hour. A 2 PM GMT meeting that was 9 AM EST becomes 10 AM EDT — still fine, but easy to miss if your calendar does not update. Our planner tracks these transitions automatically.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
      ]}
    />
  );
}
