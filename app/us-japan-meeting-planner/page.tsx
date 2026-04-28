import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between US and Japan | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Japan time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UsJapanPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between US and Japan"
      description="Find the perfect meeting time between US and Japan time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="America/Los_Angeles"
      defaultB="Asia/Tokyo"
      navLabel="US–Japan"
      jsonLdName="CollabWindow — US–Japan Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for US and Japan distributed teams."
      jsonLdUrl="https://collabwindow.app/us-japan-meeting-planner"
      gapDescription="13–17 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why US–Japan Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            Japan is one of the hardest countries to schedule with from the US. Tokyo is 13–17 hours ahead, depending on coast and season. When it is 9 AM in Los Angeles, it is already 1 AM the next day in Tokyo. There is almost no natural overlap between standard working hours.
          </p>
          <p className="text-muted-foreground">
            Japan also has a strong culture of in-office work and long hours, but that does not mean Japanese teams are available for late-night calls. Respect for personal time is growing, especially among younger workers. Forcing Japan-based colleagues into routine 10 PM calls is a retention risk.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Japan Teams</h2>
          <p className="text-muted-foreground">
            The harsh reality: there are no comfortable golden hours for US–Japan. The best compromise is early US morning / late Japan evening. For West Coast, 6–8 AM PST overlaps with 10 PM–12 AM JST — tolerable for weekly syncs, unsustainable for daily stand-ups.
          </p>
          <p className="text-muted-foreground">
            East Coast teams face a 14-hour gap. A 6–8 AM EST window is 7–9 PM JST, which is more reasonable for the Japan side but requires the US to start very early. Many US–Japan teams default to async communication and reserve the narrow overlap for critical decisions only.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Default to async.</strong> Use Loom, written updates, and shared docs for 90% of communication. Reserve real-time meetings for decisions that genuinely need discussion.</li>
            <li><strong>Rotate the burden.</strong> If weekly calls are unavoidable, alternate between early US mornings and late Japan evenings.</li>
            <li><strong>Be extremely prepared.</strong> Japanese meetings are efficient when they happen. Send agendas, pre-reads, and expected outcomes in advance.</li>
            <li><strong>Respect Golden Week.</strong> Late April to early May is a cluster of national holidays. Most Japanese workers take the full week off.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects US–Japan Meetings</h2>
          <p className="text-muted-foreground">
            Japan does not observe DST, which removes one variable. The only shift comes from the US side. When the US moves to DST in March, the gap narrows by one hour. When it moves back in November, the gap widens again.
          </p>
          <p className="text-muted-foreground">
            A 7 AM PST meeting in January (midnight JST) becomes 7 AM PDT in April (11 PM JST the same day). That one-hour shift can make the difference between a tolerable call and an impossible one. Our planner tracks DST changes and warns you when the overlap window shifts.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
        { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
      ]}
    />
  );
}
