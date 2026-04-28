import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between US and Brazil | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and Brazil time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UsBrazilPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between US and Brazil"
      description="Find the perfect meeting time between US and Brazil time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
      defaultA="America/New_York"
      defaultB="America/Sao_Paulo"
      navLabel="US–Brazil"
      jsonLdName="CollabWindow — US–Brazil Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for US and Brazil distributed teams."
      jsonLdUrl="https://www.collabwindow.app/us-brazil-meeting-planner"
      gapDescription="1–4 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why US–Brazil Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            Brazil is one of the closest time zones to the US, with a gap of just 1–4 hours depending on coast and season. This sounds easy, but Brazil's DST history is volatile — the country abolished DST in 2019, reintroduced it in some states, and then abolished it again. Some states observe it unofficially.
          </p>
          <p className="text-muted-foreground">
            For distributed teams, the small gap is a blessing, but the DST confusion is a curse. A meeting that worked at 10 AM EST / 12 PM BRT in January might shift unexpectedly in February if a state decides to observe DST after all.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for US–Brazil Teams</h2>
          <p className="text-muted-foreground">
            The best overlap for US East Coast and Brazil is essentially the full workday. São Paulo is 1–2 hours ahead of New York (depending on DST), meaning 9 AM–5 PM EST overlaps with 10 AM–6 PM or 11 AM–7 PM BRT. This is one of the easiest pairs to schedule.
          </p>
          <p className="text-muted-foreground">
            West Coast teams have a 4–5 hour gap. A 9 AM–12 PM PST window overlaps with 2–5 PM BRT — still workable for stand-ups and check-ins. Most US–Brazil teams treat the time difference as a minor inconvenience rather than a major barrier.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li><strong>Confirm the time zone.</strong> Brazil's DST rules vary by state. Always confirm which zone your Brazilian counterpart is in.</li>
            <li><strong>Portuguese is the default.</strong> Even if your Brazilian colleagues speak English well, offering materials in Portuguese shows respect.</li>
            <li><strong>Be flexible with hours.</strong> Brazilian business culture is relationship-driven. A 30-minute delay is more forgivable than in Germany, but punctuality is still valued.</li>
            <li><strong>Avoid Brazilian holidays.</strong> Carnival, Independence Day, and Christmas week are non-negotiable. Plan around them.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects US–Brazil Meetings</h2>
          <p className="text-muted-foreground">
            Brazil abolished nationwide DST in 2019. Some southern states unofficially observed it for a few years, but as of 2024, most of Brazil stays on BRT (UTC-3) year-round. The US still observes DST, which means the gap shifts by one hour twice a year.
          </p>
          <p className="text-muted-foreground">
            In winter, New York is 2 hours behind São Paulo. In summer, the gap narrows to 1 hour. Our planner uses current IANA timezone data, so it reflects the latest rules automatically. If Brazil reintroduces DST, the tool will update without manual intervention.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–India", url: "/us-india-meeting-planner" },
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
      ]}
    />
  );
}
