import type { Metadata } from "next";
import { PairPageLayout, pairPageMetadata } from "@/components/pair-page-layout";

export const metadata: Metadata = pairPageMetadata({
  title: "Best Time to Meet Between US and India | Free Overlap Planner",
  description:
    "Find the perfect meeting time between US and India time zones. Interactive overlap planner with DST support. Free tool for distributed teams.",
});

export default function UsIndiaPage() {
  return (
    <PairPageLayout
      title="Best Time to Meet Between US and India"
      description="Find the perfect meeting time between US and India time zones."
      defaultA="America/New_York"
      defaultB="Asia/Kolkata"
      navLabel="US–India"
      jsonLdName="CollabWindow — US–India Time Zone Overlap Planner"
      jsonLdDescription="Free time zone overlap planner for US and India distributed teams."
      jsonLdUrl="https://collabwindow.app/us-india-meeting-planner"
      gapDescription="9.5–12.5 hour gap"
      article={
        <>
          <h2 className="text-2xl font-bold">Why US–India Meetings Are Tricky</h2>
          <p className="text-muted-foreground">
            The United States and India are separated by 9.5 to 12.5 hours,
            depending on which US coast you are on and the time of year.
            When it is 9:00 AM in New York, it is already 6:30 PM in Mumbai.
            That means by the time the US East Coast starts its workday, India
            is already wrapping up.
          </p>
          <p className="text-muted-foreground">
            The time gap is even wider for West Coast teams. A 9:00 AM start
            in San Francisco translates to 9:30 PM in India — well outside
            standard business hours. For distributed teams spanning these two
            countries, finding a mutually convenient meeting time requires
            careful planning.
          </p>

          <h2 className="text-2xl font-bold mt-8">Golden Hours for US–India Teams</h2>
          <p className="text-muted-foreground">
            The most common overlap window for US East Coast and India is
            early morning US time / late evening India time. Specifically,
            7:00–9:30 AM EST overlaps with 5:30–8:00 PM IST. This gives teams
            a comfortable 1.5–2 hour window for stand-ups, sprint planning,
            and one-on-ones.
          </p>
          <p className="text-muted-foreground">
            For West Coast teams, the situation is tighter. A 7:00–9:00 AM
            PST window overlaps with 7:30–9:30 PM IST — feasible for
            occasional calls but not sustainable for daily stand-ups. Many
            West Coast–India teams rotate meeting times or keep meetings
            async-heavy.
          </p>

          <h2 className="text-2xl font-bold mt-8">Meeting Etiquette Across These Time Zones</h2>
          <ul className="text-muted-foreground list-disc pl-5 space-y-2">
            <li>
              <strong>Rotate the pain.</strong> If your team meets daily, do not
              always make the India side stay late. Alternate between early
              US mornings and late India evenings.
            </li>
            <li>
              <strong>Record everything.</strong> Use the overlap window for
              discussions that truly need real-time collaboration. Record
              decisions and share written summaries for async consumption.
            </li>
            <li>
              <strong>Keep it short.</strong> A 30-minute stand-up is more
              sustainable than a 90-minute planning session when one side
              is at the edge of their day.
            </li>
            <li>
              <strong>Respect local holidays.</strong> Diwali, Independence Day,
              Thanksgiving, and Memorial Day all affect availability. Plan
              around them.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">How DST Affects US–India Meetings</h2>
          <p className="text-muted-foreground">
            India does not observe Daylight Saving Time, but most of the
            United States does. This means the time gap between the two
            countries shifts by one hour twice a year. In winter (November
            to March), New York is 10.5 hours behind Mumbai. In summer
            (March to November), the gap narrows to 9.5 hours.
          </p>
          <p className="text-muted-foreground">
            This shift can catch teams off guard. A meeting scheduled for
            7:00 AM EST in January becomes 6:00 AM EDT in April — an hour
            earlier for the US side. Our planner automatically detects DST
            transitions and warns you when the overlap window is about to
            shift.
          </p>
        </>
      }
      relatedPairs={[
        { pair: "US–UK", url: "/us-uk-meeting-planner" },
        { pair: "US–Germany", url: "/us-germany-meeting-planner" },
        { pair: "UK–India", url: "/uk-india-meeting-planner" },
        { pair: "US–Philippines", url: "/us-philippines-meeting-planner" },
        { pair: "US–Japan", url: "/us-japan-meeting-planner" },
        { pair: "UK–Singapore", url: "/uk-singapore-meeting-planner" },
      ]}
    />
  );
}
