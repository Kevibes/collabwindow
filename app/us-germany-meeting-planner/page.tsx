import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between US and Germany | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Germany time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UsGermanyPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between US and Germany"
      description="Find the perfect meeting time between US and Germany time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="America/New_York"
      defaultB="Europe/Berlin"
      navLabel="US–Germany"
      jsonLdName="CollabWindow — US–Germany Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for US and Germany distributed teams."
      jsonLdUrl="https://collabwindow.app/us-germany-meeting-planner"
      gapDescription="6–9 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why US–Germany Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            Germany operates on Central European Time (CET, UTC+1) or CEST (UTC+2) in summer, putting it 6 hours ahead of the US East Coast and 9 hours ahead of the West Coast. A 9 AM meeting in Berlin is 3 AM in New York — or midnight in San Francisco.
          </p>
          <p className="text-muted-foreground">
            German business culture values punctuality and structured agendas. Late meetings are particularly unwelcome because many Germans finish work promptly at 5 or 6 PM. This tightens the overlap window and makes scheduling discipline essential.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Germany Teams</h2>
          <p className="text-muted-foreground">
            The best overlap for US East Coast and Germany is early US morning / mid-afternoon Germany. Specifically, 8 AM–12 PM EST overlaps with 2 PM–6 PM CET, giving a solid 4-hour window. This is ideal for sprint reviews, stakeholder updates, and architecture discussions.
          </p>
          <p className="text-muted-foreground">
            For West Coast teams, the overlap shrinks dramatically. An 8 AM–10 AM PST window overlaps with 5 PM–7 PM CET — right at the edge of the German workday. West Coast teams often default to async for most communication and reserve the narrow overlap for urgent decisions only.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Start on time.</strong> German business culture expects punctuality. Dial in 1–2 minutes early.</li>
            <li><strong>Send agendas in advance.</strong> Germans prefer structured meetings with clear objectives. A written agenda sent 24 hours ahead is standard.</li>
            <li><strong>Respect Feierabend.</strong> The German concept of "closing time" is sacred. Avoid scheduling past 6 PM CET.</li>
            <li><strong>Account for holidays.</strong> German public holidays differ from the US. Check for overlaps with Reformation Day, Corpus Christi, and Unity Day.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects US–Germany Meetings</h2>
          <p className="text-muted-foreground">
            Both the US and Germany observe DST, but the EU switches on the last Sunday in March and last Sunday in October — different dates from the US. This creates brief misalignment windows in spring and fall.
          </p>
          <p className="text-muted-foreground">
            For example, in late October, Germany may already be back on CET while the US is still on EDT. A 3 PM CET meeting that was 9 AM EDT becomes 10 AM EDT. The gap is still manageable, but calendar invites should include both time zones to avoid confusion.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
      ]}
    />
  );
}
