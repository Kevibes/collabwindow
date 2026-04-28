import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between US and Australia | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Australia time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UsAustraliaPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between US and Australia"
      description="Find the perfect meeting time between US and Australia time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="America/Los_Angeles"
      defaultB="Australia/Sydney"
      navLabel="US–Australia"
      jsonLdName="CollabWindow — US–Australia Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for US and Australia distributed teams."
      jsonLdUrl="https://www.collabwindow.app/us-australia-meeting-planner"
      gapDescription="14–19 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why US–Australia Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            The US and Australia are on opposite sides of the clock. Sydney is 14–19 hours ahead of the US, depending on coast and season. When it is 9 AM in Los Angeles, it is already 2 AM the next day in Sydney. There is virtually no natural overlap between standard working hours.
          </p>
          <p className="text-muted-foreground">
            Australia also complicates things with its own DST rules. DST starts on the first Sunday in October and ends on the first Sunday in April — different dates from the US. This creates brief windows where the gap is wider or narrower than expected.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Australia Teams</h2>
          <p className="text-muted-foreground">
            There are no true golden hours for US–Australia. The least painful option is early US morning / late Australia evening. For West Coast, 6–8 AM PST overlaps with 11 PM–1 AM AEST (next day) — barely tolerable for weekly syncs.
          </p>
          <p className="text-muted-foreground">
            East Coast teams have it even harder. A 6–8 AM EST window is 8–10 PM AEST, which is reasonable for the Australia side but requires extreme discipline from the US. Most US–Australia teams rely heavily on async communication and use the narrow overlap for critical decisions only.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Async-first is mandatory.</strong> With almost no overlap, written updates, recorded demos, and shared docs are the default. Real-time meetings should be rare and short.</li>
            <li><strong>Rotate the pain.</strong> If real-time meetings are unavoidable, alternate between early US mornings and late Australia evenings. Never make one side bear the burden permanently.</li>
            <li><strong>Over-communicate context.</strong> Australian teams work while US teams sleep. Every handoff should include full context so the next shift can continue without blockers.</li>
            <li><strong>Respect Australian holidays.</strong> Australia Day, Anzac Day, and the Christmas–New Year break are major holidays. Plan sprints around them.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects US–Australia Meetings</h2>
          <p className="text-muted-foreground">
            Both the US and Australia observe DST, but on different schedules. Australia starts DST in October and ends in April. The US starts in March and ends in November. This creates misalignment windows where the gap is an hour off from what you expect.
          </p>
          <p className="text-muted-foreground">
            For example, in late October, Australia may already be on AEDT while the US is still on PDT. A 7 AM PDT meeting that was midnight AEST becomes 1 AM AEDT. Our planner tracks both DST schedules and warns you when the overlap window shifts.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "UK–Australia", url: "/uk-australia-meeting-planner" },
      ]}
    />
  );
}
