import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between UK and Australia | Free Overlap Planner",
  description:
    "Find the perfect meeting time between UK and Australia time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UkAustraliaPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between UK and Australia"
      description="Find the perfect meeting time between UK and Australia time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="Europe/London"
      defaultB="Australia/Sydney"
      navLabel="UK–Australia"
      jsonLdName="CollabWindow — UK–Australia Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for UK and Australia distributed teams."
      jsonLdUrl="https://collabwindow.app/uk-australia-meeting-planner"
      gapDescription="9–11 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why UK–Australia Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            The UK and Australia share the Commonwealth, the English language, and a love of sport — but they do not share a clock. Sydney is 9–11 hours ahead of London, depending on the season. When it is 9 AM in London, it is 6–8 PM in Sydney, right at the edge of the Australian workday.
          </p>
          <p className="text-muted-foreground">
            Both countries observe DST, but on different schedules. The UK switches in March and October; Australia switches in October and April. This creates brief misalignment windows where the gap is an hour wider or narrower than expected.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for UK–Australia Teams</h2>
          <p className="text-muted-foreground">
            The best overlap is UK morning / Australian late afternoon. In winter (GMT), 9 AM–12 PM GMT overlaps with 8 PM–11 PM AEDT — late for Australia but workable for occasional syncs. In summer (BST), 9 AM–12 PM BST overlaps with 6 PM–9 PM AEST, which is more reasonable.
          </p>
          <p className="text-muted-foreground">
            Many UK–Australia teams find a sustainable rhythm by meeting at 8 AM UK / 5–7 PM Australia. This is early for the UK side but not unreasonable, and it falls within the Australian afternoon. For daily stand-ups, this is often the compromise that sticks.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Rotate the early shift.</strong> If the UK side is meeting at 8 AM daily, rotate who takes that slot. Burnout is real.</li>
            <li><strong>Keep it short.</strong> A 30-minute stand-up is more sustainable than a 90-minute planning session when one side is at the edge of their day.</li>
            <li><strong>Use async for detail work.</strong> Save real-time meetings for decisions and alignment. Use docs and recorded updates for everything else.</li>
            <li><strong>Respect Boxing Day.</strong> The day after Christmas is a major holiday in both countries. Do not schedule anything.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects UK–Australia Meetings</h2>
          <p className="text-muted-foreground">
            Both countries observe DST, but the schedules do not align. The UK moves to BST on the last Sunday in March and back to GMT on the last Sunday in October. Australia moves to AEDT on the first Sunday in October and back to AEST on the first Sunday in April.
          </p>
          <p className="text-muted-foreground">
            This creates two brief misalignment windows each year: one in late March/early April and one in October. During these windows, the gap may be an hour off from what you expect. Our planner tracks both DST schedules and warns you when the overlap window shifts.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Australia", url: "/us-australia-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
      ]}
    />
  );
}
