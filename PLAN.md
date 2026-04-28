# Time Zone Meeting Planner — Implementation Plan (v2)

## Current Build Status (2026-04-28)

**Phase:** 1 (Foundation) — **COMPLETE**
**Phase:** 2 (Content + Expansion) — **COMPLETE**
**Phase:** 3 (Pair Expansion + Promotion Prep) — **COMPLETE**

**Completed (2026-04-27 / 2026-04-28):**
- Next.js 15 + Tailwind + shadcn/ui project initialized
- Homepage (`/`) with generic tool, 10-pair grid, features, FAQ
- All 10 pair pages built with unique content per pair
- 4 blog posts published
- Core overlap tool with timezone selectors, sliders, date picker, meeting length filter, visual overlap bar, shareable URLs, DST warnings, quick reference table
- **Calendar export buttons** (Google Calendar, Outlook, Apple .ics, Teams, Zoom, Slack)
- AdSense slots, JSON-LD schema, sitemap
- **Deployed to Vercel:** `https://collabwindow.vercel.app`
- Domain `collabwindow.app` registered via Cloudflare

**Bugs Fixed (2026-04-27 / 2026-04-28):**
- ✅ **Overlap calculation bug in `lib/overlap.ts`**: Fixed `calculateOverlap` to use `date-fns-tz` for timezone-aware conversion. It now correctly handles all pairs, including LA → Berlin.
- ✅ **US-India overlap bar mismatch**: Fixed the 30-minute timezone offset bug causing the overlap bar to display the wrong time for Zone A.
- ✅ **fromZonedTime Date object bug**: Passing `Date` objects to `fromZonedTime` caused a +1h shift in overlap bar labels. Fixed by using plain `"YYYY-MM-DDTHH:mm:ss"` strings instead.

**Code Status:**
- All changes committed and pushed to `origin/main`.
- GitHub repo: `Kevibes/collabwindow`.
- Auto-deploy via Vercel ↔ GitHub integration is live.

**Bugs Fixed (2026-04-28 session):**
- ✅ **Removed broken third timezone feature** (`overlap-tool.tsx`)
- ✅ **Created `/about`, `/contact`, `/privacy` stub pages**
- ✅ **Gated AdSense script behind env var** (`NEXT_PUBLIC_ADSENSE_ID`)
- ✅ **Split `overlap.ts`** into pure utils (`lib/overlap.ts`) + client hook (`lib/use-overlap.ts`)
- ✅ **Fixed window comfort logic** (window gets worst slot, not best)
- ✅ **Memoized `QuickReferenceTable` calculations** (was 7 unmemoized `calculateOverlap` calls per render)
- ✅ **Fixed date display to be timezone-aware** (uses `formatInTimeZone` instead of `toLocaleDateString`)
- ✅ **Extracted shared `PairPageLayout` component** (eliminated ~1,470 lines of duplicated boilerplate across 10 pair pages)

**Completed (2026-04-28 session — continued):**
- ✅ **Deployed custom domain:** `collabwindow.app` → `www.collabwindow.app` (Vercel 308 redirect, Cloudflare DNS)
- ✅ **Updated canonical URLs:** All JSON-LD schema, breadcrumb, and sitemap URLs now use `www.collabwindow.app`
- ✅ **Created launch kit:** Product Hunt copy, Reddit/LinkedIn/Twitter post drafts, AdSense application checklist

**Next Session (Priority):**
Ready for promotion and monetization:
1.  Submit to Google Search Console (verify `www.collabwindow.app`)
2.  Apply for Google AdSense (requires `NEXT_PUBLIC_ADSENSE_ID` env var)
3.  Launch on Product Hunt
4.  Post to Reddit (r/remotework, r/digitalnomad, r/SideProject)
5.  Post to LinkedIn and Twitter/X
6.  Submit "Show HN" to Hacker News
7.  Monitor Search Console weekly for ranking keywords

---

## Executive Summary
Build a pair-specific meeting overlap tool targeting "best time to meet between [Country A] and [Country B]" long-tail keywords. B2B audience (distributed teams, offshore dev shops, consulting firms) commands premium CPMs ($8–$25+). Strategy: dedicated landing pages per country pair in subdirectories with embedded interactive overlap finder + supporting content. No email capture. No auth. Ad-light UX. 10 pairs with strong tech/finance trade and 5–6+ hour gaps.

---

## What You Need to Do (User Checklist)

| Step | Task | Estimated Time | When |
|---|---|---|---|
| 1 | Pick and register a domain | 30 min | Before build starts |
| 2 | Set up Vercel account + GitHub repo | 30 min | Before build starts |
| 3 | Provide brand name / logo direction (text-only is fine) | 15 min | Week 1 |
| 4 | Review pair pages for accuracy (time gaps, DST quirks) | 2–3 hours | Week 2 |
| 5 | Approve ad placement mockups | 30 min | Week 1 |
| 6 | Apply for Google AdSense (after 10+ pages live) | 1 hour | Week 3 |
| 7 | Create supporting content or delegate it | 4–6 hours | Week 2 |
| 8 | Launch promotion (Product Hunt, Reddit, LinkedIn) | 2 hours | Week 3 |

---

## Domain Strategy

### Status: CONFIRMED
**Selected domain:** `collabwindow.app`
**Redirects:** `collabwindow.com` → `.app`, `collabwindow.co.uk` → `.app`

| Domain | Status | Registerable? | Notes |
|---|---|---|---|
| collabwindow.com | Available | Yes | Redirect to `.app` |
| collabwindow.app | Available | Yes | Primary domain |
| collabwindow.co.uk | Available | Yes | Redirect to `.app` |

**Cost:** $12–$15/year per domain. Budget 3 domains (primary + 2 redirects).
**Brand rationale:** "The window where collaboration happens." Modern, B2B-friendly, memorable, and avoids country-lock perception by using `.app` as canonical.

**Next Step:** Register `collabwindow.app` as primary. Park `.com` and `.co.uk` as 301 redirects to `.app`.

---

## Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router) — SSR for SEO, dynamic time zone rendering
- **Styling:** Tailwind CSS v4
- **Time Zone Library:** `date-fns-tz` + native `Intl.DateTimeFormat` — reliable DST handling
- **UI Components:** shadcn/ui — time pickers, sliders, timezone selectors, tooltip
- **Visuals:** Custom overlap bar chart (SVG or Recharts) showing green/yellow/red overlap windows

### Backend
- **None for MVP.** All time zone logic is client-side. No database. No API routes except SSR pages.

### Data Storage
- **None.** No auth, no accounts, no saved states. Shareable URLs encode all state in query params (e.g., `?a=America/New_York&b=Asia/Kolkata&start=9&end=17`).

---

## UX/UI Design Principles

### The 3-Second Rule
The overlap result must render within 3 seconds of page load. The user searched for an answer — they get it immediately.

### Ad-Light Policy
- **Tool pages:** One display ad below the overlap tool. Sidebar ad on desktop only. No pop-ups. No sticky banners. No interstitials.
- **Content pages (blog/guides):** Up to 3 ads — between sections, sidebar, below content. Users are in reading mode, so higher tolerance.
- **No email capture gates.** No "subscribe for updates." No lead magnets requiring email.

### Visual-First
The overlap bar chart is the hero. Green = comfortable overlap. Yellow = borderline (early morning / late evening). Red = no overlap. Make it screenshot-worthy for Slack sharing.

### Shareable by Design
Every state change updates the URL. "Copy link" button generates a shareable URL with pre-filled time zones, working hours, and selected date. Paste into Slack, email, or calendar invite.

### Mobile-First Input
- Sliders work on touch.
- Time inputs use native mobile pickers.
- Overlap bar is readable at 320px width.

### Color Palette
- Primary: Indigo (#4f46e5)
- Overlap green: Emerald (#10b981)
- Borderline yellow: Amber (#f59e0b)
- No-overlap red: Rose (#f43f5e)
- Background: White + slate gray (#f8fafc)

---

## Site Architecture

```
meetbetween.com/
├── /                          (Homepage: generic tool + pair selector grid)
├── /us-india-meeting-planner (Dedicated landing page — launch pair #1)
├── /us-uk-meeting-planner    (Dedicated landing page — launch pair #2)
├── /us-germany-meeting-planner
├── /us-philippines-meeting-planner
├── /uk-india-meeting-planner
├── /us-brazil-meeting-planner
├── /us-japan-meeting-planner
├── /uk-singapore-meeting-planner
├── /us-australia-meeting-planner
├── /uk-australia-meeting-planner
├── /blog/
│   ├── /complete-guide-scheduling-meetings-across-time-zones
│   ├── /us-india-team-meeting-etiquette
│   ├── /how-to-handle-dst-changes-global-teams
│   └── /best-tools-remote-team-meetings
├── /about
├── /contact
└── /privacy
```

**All country pairs live in subdirectories — not subdomains.** Authority pools at the root domain.

---

## Page Structure (Per Country Pair)

```
Header: Logo + Nav (Country Pair Selector dropdown)

Hero Section:
  H1: "Best Time to Meet Between [Country A] and [Country B]"
  Subhead: "Find the perfect meeting overlap for distributed teams"
  Visual: Overlap chart preview (static SVG for SEO, hydrated to interactive on load)

Section 1 — Interactive Overlap Tool:
  - Time Zone A selector (default: e.g., EST / America/New_York)
  - Time Zone B selector (default: e.g., IST / Asia/Kolkata)
  - Working hours slider for each zone (9 AM – 5 PM default)
  - Date picker (default: today, with DST transition warnings)
  - Meeting length selector (30 min / 1 hour / 1.5 hours / 2 hours / custom)
  - Overlap result: "Overlap: 7:00 AM – 9:30 AM EST / 5:30 PM – 8:00 PM IST"
  - Visual overlap bar chart (green = overlap, red = outside hours, yellow = borderline)
  - "Add a third time zone" button (expandable inline)
  - "Copy shareable link" button
  - [AD SLOT 1 — display banner, below tool]

Section 2 — Quick Reference Table:
  - Static table: "Best times to meet this week"
  - Updates dynamically based on current date + DST status
  - Shows day-by-day breakdown (some days shift after DST)

Section 3 — Supporting Content (800–1,200 words):
  - H2: "Why [Pair] Meetings Are Tricky"
  - H2: "Golden Hours for [Pair] Teams"
  - H2: "Meeting Etiquette Across These Time Zones"
  - H2: "How DST Affects [Pair] Meetings"
  - [AD SLOT 2 — inline display, between content sections]

Section 4 — Related Pairs & Tools:
  - "Also check: US-Germany, UK-Singapore..." (internal links to other pair pages)
  - [AD SLOT 3 — sidebar on desktop only]

Footer: Privacy, About, Contact, sitemap
```

---

## Homepage Structure

```
Hero:
  H1: "Find the Best Time to Meet Across Time Zones"
  Subhead: "Free overlap planner for distributed teams. No signup."
  Embedded generic tool (same component, no pre-filled pair)

Pair Selector Grid:
  Visual cards for all 10 pairs with flags + current time gap
  Clicking a card navigates to the dedicated pair page

Why This Exists (3-column feature grid):
  - "Instant overlap calculation"
  - "DST handled automatically"
  - "Shareable links for your team"

[AD SLOT — below fold]

FAQ Section (6–8 questions, schema markup)

Recent Blog Posts (3 latest)
```

---

## Core Time Zone Logic

### Dependencies
- `date-fns-tz` for time zone conversion and DST detection
- Native `Intl.DateTimeFormat` for formatting

### Algorithm
```typescript
// 1. Get current date or user-selected date
// 2. For each hour in Day A (user's perspective), convert to Day B
// 3. Check if converted hour falls within B's working hours
// 4. Find contiguous overlap window(s)
// 5. Classify each overlap hour:
//    - Green: both zones in comfortable working hours (9 AM – 6 PM)
//    - Yellow: one zone in early/late hours (before 9 AM or after 6 PM but before 8 PM)
//    - Red: no overlap or outside reasonable hours
// 6. Render overlap bar as SVG
// 7. Handle DST transitions explicitly — show warning badge if within 2 weeks of transition
```

### DST Handling
- Detect if either zone is within 14 days of a DST transition
- Show amber warning banner: "DST change approaching — overlap may shift"
- After transition, auto-update overlap window
- Always display current offset (e.g., "EST (UTC-5)") alongside time

---

## SEO Strategy

### On-Page (Per Pair Page)
- **Title tag:** "Best Time to Meet Between US and India | Free Overlap Planner"
- **Meta description:** "Find the perfect meeting time between US and India time zones. Interactive overlap planner with DST support. Free tool for distributed teams."
- **Schema:** `SoftwareApplication` (overlap tool), `FAQPage`, `HowTo`
- **H1:** "Best Time to Meet Between US and India"
- **URL:** `/us-india-meeting-planner`
- **Canonical:** Self-referencing

### Technical SEO
- **SSR:** Next.js App Router ensures crawlers see fully rendered overlap tool + content
- **Core Web Vitals:** Target LCP < 2s, CLS < 0.1 (critical for tool pages)
- **Schema:** BreadcrumbList for country pairs
- **Sitemap:** Auto-generated via `next-sitemap`

### Content Moat
Launch supporting articles alongside pair pages:
1. "The Complete Guide to Scheduling Meetings Across Time Zones" (2,500 words)
2. "US-India Team Meeting Etiquette: 7 Rules" (1,200 words)
3. "How to Handle DST Changes for Global Teams" (1,500 words)
4. "Best Tools for Remote Team Meetings" (1,000 words — affiliate opportunity)

---

## Monetization Plan

### Primary: Display Ads (Ad-Light)
- **AdSense** first (apply after 10+ pages live and some organic traffic).
- **Mediavine migration** at 50K sessions/month.
- **Placement:** 1 ad below tool, sidebar on desktop. Content pages allow up to 3 ads.
- **RPM estimate:** $8–$25 (B2B productivity niche).
- **Revenue projection:**
  - Month 1–3: 300 visits/mo → $2–$7/mo
  - Month 6: 1,500 visits/mo → $12–$37/mo
  - Month 12: 4,000 visits/mo → $32–$100/mo
  - Year 2: 10,000+ visits/mo → $80–$250/mo

### Secondary: Affiliate Links
- **Scheduling tools:** Calendly, SavvyCal, Reclaim.ai (contextual, in blog content)
- **VPNs:** NordVPN, Surfshark (contextual, in remote work content)
- **Remote work gear:** Standing desks, headsets via Amazon Associates
- **Placement:** Blog content only. Zero affiliate links inside the tool.

### Tertiary: Premium Feature (post-MVP, optional)
- "Team workspaces" — save recurring team members' time zones + working hours
- Charge $5–$10/mo per team (micro-SaaS upsell)
- Only if organic traffic plateaus and you need revenue diversification

---

## Hosting & Costs Analysis

| Item | Provider | Monthly Cost | First-Year Cost | Notes |
|---|---|---|---|---|
| Domain | Namecheap / Cloudflare | — | $10–$15 | One-time annual |
| Hosting | Vercel (Hobby) | $0 | $0 | Free tier sufficient for MVP |
| CDN | Cloudflare (free) | $0 | $0 | Global edge cache |
| Analytics | Plausible | $9 | $108 | Privacy-friendly, no cookie banner |
| SSL | Let's Encrypt (via Vercel) | $0 | $0 | Auto-renewing |
| Email | Forward Email | $0 | $0 | contact@domain forwarded to your email |
| AdSense | Google | $0 | $0 | Free to join |
| **Total Monthly (MVP)** | | **$9** | | |
| **Total First Year** | | | **~$130** | |

**Optional Upgrades:**
| Item | Monthly Cost | When to Upgrade |
|---|---|---|
| Vercel Pro | $20 | >100K requests/month or need analytics |
| Plausible higher tier | $19 | >10K pageviews/month |
| Premium tier infra (Supabase) | $0–$25 | Only if adding team workspaces |

---

## Build Phases

### Phase 1: Foundation (Week 1)
**Goal:** One working pair page (US-India) + homepage skeleton.

**Tasks:**
- [ ] Register domain and point DNS to Vercel
- [ ] Initialize Next.js 15 + Tailwind + shadcn/ui
- [ ] Install date-fns-tz
- [ ] Build generic overlap tool component (time zone selectors, sliders, overlap bar SVG)
- [ ] Build US-India pair page (pre-filled defaults, supporting content)
- [ ] Build homepage (generic tool + pair grid)
- [ ] Add shareable URL logic (encode state in query params)
- [ ] Add DST detection + warning banner
- [ ] Mobile responsiveness pass
- [ ] Core Web Vitals audit (LCP, CLS)

**User actions needed:**
- [ ] Register domain
- [ ] Set up Vercel + GitHub
- [ ] Review US-India page copy for accuracy
- [ ] Approve ad placement positions (send screenshot/mock)

**Deliverable:** Live site with 2 pages (home + US-India) at your domain.

---

### Phase 2: Content + Expansion (Week 2)
**Goal:** Add US-UK pair + 3 supporting blog posts + ad integration.

**Tasks:**
- [ ] Clone US-India page → US-UK (update defaults, content, schema)
- [ ] Write "Complete Guide to Scheduling Meetings Across Time Zones" (2,500 words)
- [ ] Write "US-India Team Meeting Etiquette: 7 Rules" (1,200 words)
- [ ] Write "How to Handle DST Changes for Global Teams" (1,500 words)
- [ ] Integrate AdSense slots (1 per tool page, up to 3 on blog posts)
- [ ] Add FAQ schema to pair pages
- [ ] Add BreadcrumbList schema
- [ ] Generate sitemap

**User actions needed:**
- [ ] Review US-UK page for accuracy (especially DST quirks)
- [ ] Write or review supporting content (can delegate to AI, but you must fact-check)
- [ ] Apply for Google AdSense (requires 10+ pages — you now have 5, write 5 more short FAQ-style posts if needed)

**Deliverable:** 4 pages (home + 2 pairs + blog index) + 3 blog posts + AdSense applied.

---

### Phase 3: Pair Expansion (Week 3)
**Goal:** Launch 6 more pair pages (8 total). Begin promotion.

**Tasks:**
- [ ] Generate pages for: US-Germany, US-Philippines, UK-India, US-Brazil, US-Japan, UK-Singapore
- [ ] Create short unique content (600–800 words) per pair
- [ ] Ensure all internal links between pairs work
- [ ] Performance audit (LCP < 2s on all pages)
- [ ] Product Hunt launch preparation
- [ ] Reddit post drafts for r/remotework, r/digitalnomad
- [ ] LinkedIn post template (screenshot of overlap bar)

**User actions needed:**
- [ ] Review 6 new pair pages for accuracy (time gaps, DST rules, working culture notes)
- [ ] Product Hunt launch (create account, write tagline, schedule)
- [ ] Execute Reddit/LinkedIn promotion (or delegate)

**Deliverable:** 8 pair pages + promotion campaign live.

---

### Phase 4: Scale + Optimize (Week 4+)
**Goal:** Final 2 pairs + ongoing content + revenue optimization.

**Tasks:**
- [ ] Add US-Australia + UK-Australia pair pages
- [ ] Write "Best Tools for Remote Team Meetings" (affiliate content)
- [ ] Monitor Search Console for ranking keywords
- [ ] Expand content based on queries bringing traffic
- [ ] A/B test ad placements (if traffic warrants)
- [ ] Monitor Core Web Vitals monthly

**User actions needed:**
- [ ] Check Search Console weekly for 4 weeks
- [ ] Write 1–2 additional blog posts based on ranking queries
- [ ] Evaluate Mediavine migration when approaching 50K sessions/month

**Deliverable:** 10 pair pages + 4–5 blog posts + stable revenue baseline.

---

## Country Pairs (Launch Priority)

| Priority | Pair | Time Gap | Why | Page URL |
|---|---|---|---|---|
| 1 | 🇺🇸 USA – 🇮🇳 India | 9.5–12.5h | Massive tech outsourcing, BPO, SaaS teams | `/us-india-meeting-planner` |
| 2 | 🇺🇸 USA – 🇬🇧 UK | 5–8h | Finance, fintech, transatlantic trade | `/us-uk-meeting-planner` |
| 3 | 🇺🇸 USA – 🇩🇪 Germany | 6–9h | Engineering, automotive, enterprise SaaS | `/us-germany-meeting-planner` |
| 4 | 🇺🇸 USA – 🇵🇭 Philippines | 12–16h | BPO, call centers, virtual assistants | `/us-philippines-meeting-planner` |
| 5 | 🇬🇧 UK – 🇮🇳 India | 4.5–5.5h | Commonwealth trade, tech services, finance | `/uk-india-meeting-planner` |
| 6 | 🇺🇸 USA – 🇧🇷 Brazil | 1–4h | Emerging tech, finance, agriculture trade | `/us-brazil-meeting-planner` |
| 7 | 🇺🇸 USA – 🇯🇵 Japan | 13–17h | Finance, automotive, gaming, SaaS | `/us-japan-meeting-planner` |
| 8 | 🇬🇧 UK – 🇸🇬 Singapore | 7–8h | Finance hub, Commonwealth, shipping/trade | `/uk-singapore-meeting-planner` |
| 9 | 🇺🇸 USA – 🇦🇺 Australia | 14–19h | Mining, finance, education, SaaS | `/us-australia-meeting-planner` |
| 10 | 🇬🇧 UK – 🇦🇺 Australia | 9–11h | Commonwealth, finance, education | `/uk-australia-meeting-planner` |

---

## Decisions (Resolved)

1. **Country pairs:** 10 pairs with strong tech/finance trade. Launch with US-India and US-UK first.
2. **Sharing:** Shareable URLs only. No auth, no accounts, no team workspaces, no database.
3. **Visual:** Bar chart (not circular clock). Green = overlap, red = no overlap, yellow = borderline.
4. **Calendar integration:** ❌ No Google Calendar / Outlook integration. Keep it simple.
5. **Email capture:** ❌ No email lists, no lead magnets, no newsletter signups.
6. **Site structure:** Subdirectories (`/us-india-meeting-planner`), not subdomains.
7. **Ad policy:** Ad-light on tool pages (1 ad below tool + sidebar on desktop). Content pages can carry more.
8. **Meeting length:** Yes — include as input (30 min / 1 hour / 1.5 hours / 2 hours / custom). Affects whether an overlap window is viable.

---

## Open Questions

1. **Should we add a "compare multiple pairs" feature on the homepage?** (e.g., a grid showing overlap windows for all 10 pairs at a glance.)
2. **Country flags in UI?** (Improves scannability but adds HTTP requests. Could use emoji flags 🇺🇸 to avoid requests.)
3. **Should we include "meeting scheduler" that suggests specific days/times, or just show overlap window?** (Scheduler adds complexity; overlap window is simpler.)
4. **Do we want a "dark mode" toggle?** (Low effort with Tailwind. B2B users often prefer it.)

---

## Expected Monthly Revenue Timeline

| Month | Est. Visits | RPM | Ad Revenue | Affiliate Revenue | Total |
|---|---|---|---|---|---|
| 1 | 200 | $10 | $2 | $0 | $2 |
| 3 | 500 | $10 | $5 | $0 | $5 |
| 6 | 1,500 | $12 | $18 | $5 | $23 |
| 9 | 2,500 | $14 | $35 | $10 | $45 |
| 12 | 4,000 | $15 | $60 | $15 | $75 |
| 18 | 7,000 | $16 | $112 | $25 | $137 |
| 24 | 10,000 | $18 | $180 | $40 | $220 |

*Affiliate revenue assumes 1–2 contextual links per blog post converting at ~1%.*

---

## Key Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| DST transition bugs | Medium | High | Extensive testing on historical DST dates. Display offset explicitly. |
| Low organic traffic | Medium | High | Content moat + promotion. If no traction in 6 months, pivot to paid ads or new pairs. |
| Ad revenue underwhelming | Low | Medium | B2B CPMs are proven. If low, expand content pages or add premium tier. |
| Competitor copies tool | Medium | Low | Copying the tool is easy. Copying the content moat and 10 dedicated pair pages is not. |
| Core Web Vitals failure | Low | High | Monitor LCP/CLS from day one. SVG overlap bar is lightweight. |

---

## Feature: Export to Calendar & Collaboration Apps

> **For agentic workers:** Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement task-by-task.

**Goal:** Let users pick a specific time from the overlap window and send it directly to Google Calendar, Outlook, Apple Calendar (.ics file), Microsoft Teams, Zoom, or copy a pre-formatted Slack message — all without OAuth or API keys.

**Architecture:** A pure utility module (`lib/calendar-links.ts`) generates all URLs and ICS content from a `MeetingDetails` object. A new client component (`components/export-buttons.tsx`) renders below the overlap result with a time-slot picker, title input, and export buttons. The existing `overlap-tool.tsx` passes the best window and timezone context down as props.

**Tech stack:** TypeScript, `date-fns-tz` (already installed), Blob URL API for ICS download, shadcn/ui Button + Select + Label (already installed).

**Key pattern from `lib/overlap.ts` — use this exactly for UTC conversion:**
```typescript
// "7:30 AM in America/New_York" → UTC
const localDate = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
const utcDate = fromZonedTime(localDate, timeZoneA);
```

---

### File Map

| File | Status | Responsibility |
|---|---|---|
| `lib/calendar-links.ts` | **Create** | Pure functions: UTC helpers, Google/Outlook/Teams URL builders, ICS generator, Slack formatter |
| `components/export-buttons.tsx` | **Create** | Client component: time-slot picker, title input, all export buttons |
| `components/overlap-tool.tsx` | **Modify** | Import and render `<ExportButtons>` below the results card, pass shareUrl |

---

### Task 1 — Create `lib/calendar-links.ts`

**Files:**
- Create: `lib/calendar-links.ts`

- [ ] **Step 1.1 — Write the full file**

```typescript
// lib/calendar-links.ts
import { fromZonedTime, formatInTimeZone } from "date-fns-tz";

export interface MeetingDetails {
  title: string;
  /** UTC date for the day — same shape as `date` in overlap-tool: Date.UTC(y, m-1, d) */
  dayUtc: Date;
  /** Local start hour in Zone A (integer 0–23) */
  startHourA: number;
  /** Local start minute in Zone A (0 or 30) */
  startMinuteA: number;
  /** Duration in minutes (e.g. 30, 60, 90, 120) */
  durationMinutes: number;
  timeZoneA: string;
  timeZoneB: string;
  cityA: string;
  cityB: string;
  /** Full CollabWindow URL with current query params */
  shareUrl: string;
}

/** Convert local Zone-A time on the given day to UTC.
 *  Uses the same pattern as lib/overlap.ts to stay consistent. */
export function toStartUtc(m: MeetingDetails): Date {
  const y  = m.dayUtc.getUTCFullYear();
  const mo = m.dayUtc.getUTCMonth();     // 0-indexed
  const d  = m.dayUtc.getUTCDate();
  const localDate = new Date(Date.UTC(y, mo, d, m.startHourA, m.startMinuteA, 0));
  return fromZonedTime(localDate, m.timeZoneA);
}

export function toEndUtc(m: MeetingDetails): Date {
  return new Date(toStartUtc(m).getTime() + m.durationMinutes * 60_000);
}

/** Format a UTC Date as ICS timestamp: 20260428T110000Z */
function icsStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function description(m: MeetingDetails): string {
  const start = toStartUtc(m);
  const end   = toEndUtc(m);
  const fmtA  = (d: Date) => formatInTimeZone(d, m.timeZoneA, "h:mm a zzz");
  const fmtB  = (d: Date) => formatInTimeZone(d, m.timeZoneB, "h:mm a zzz");
  return (
    `${m.cityA}: ${fmtA(start)} – ${fmtA(end)}\n` +
    `${m.cityB}: ${fmtB(start)} – ${fmtB(end)}\n\n` +
    `Scheduled via CollabWindow: ${m.shareUrl}`
  );
}

export function googleCalendarUrl(m: MeetingDetails): string {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text:    m.title,
    dates:  `${icsStamp(toStartUtc(m))}/${icsStamp(toEndUtc(m))}`,
    details: description(m),
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

export function outlookUrl(m: MeetingDetails): string {
  const p = new URLSearchParams({
    subject:  m.title,
    startdt:  toStartUtc(m).toISOString(),
    enddt:    toEndUtc(m).toISOString(),
    body:     description(m),
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${p}`;
}

export function teamsUrl(m: MeetingDetails): string {
  const p = new URLSearchParams({
    subject:   m.title,
    startTime: toStartUtc(m).toISOString(),
    endTime:   toEndUtc(m).toISOString(),
    content:   description(m),
  });
  return `https://teams.microsoft.com/l/meeting/new?${p}`;
}

export function icsContent(m: MeetingDetails): string {
  const uid  = `collabwindow-${Date.now()}@collabwindow.app`;
  const now  = icsStamp(new Date());
  const desc = description(m).replace(/\n/g, "\\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CollabWindow//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${icsStamp(toStartUtc(m))}`,
    `DTEND:${icsStamp(toEndUtc(m))}`,
    `SUMMARY:${m.title}`,
    `DESCRIPTION:${desc}`,
    `URL:${m.shareUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function triggerIcsDownload(m: MeetingDetails): void {
  const blob = new Blob([icsContent(m)], { type: "text/calendar;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `${m.title.replace(/\s+/g, "-").toLowerCase()}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function slackMessage(m: MeetingDetails): string {
  const start  = toStartUtc(m);
  const end    = toEndUtc(m);
  const fmtA   = (d: Date) => formatInTimeZone(d, m.timeZoneA, "h:mm a zzz");
  const fmtB   = (d: Date) => formatInTimeZone(d, m.timeZoneB, "h:mm a zzz");
  const dayStr = formatInTimeZone(start, m.timeZoneA, "EEEE, d MMM yyyy");
  return (
    `📅 *${m.title}*\n` +
    `🕐 ${dayStr}\n` +
    `${m.cityA}: ${fmtA(start)} – ${fmtA(end)}\n` +
    `${m.cityB}: ${fmtB(start)} – ${fmtB(end)}\n` +
    `🔗 ${m.shareUrl}`
  );
}
```

- [ ] **Step 1.2 — Type-check**

```bash
cd "/home/kevin/Projects/Making Money/time-zone-meeting-planner" && npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 1.3 — Smoke-test the outputs**

Create `lib/_cal-smoke.mjs` (delete after):
```javascript
// Run with: node --experimental-vm-modules lib/_cal-smoke.mjs
// (or: npx tsx lib/_cal-smoke.ts if tsx available)
import { toStartUtc, toEndUtc, googleCalendarUrl, outlookUrl, teamsUrl, slackMessage, icsContent } from "./calendar-links.ts";

const m = {
  title: "Team Sync",
  dayUtc: new Date(Date.UTC(2026, 3, 28)), // April 28 2026
  startHourA: 9, startMinuteA: 0,
  durationMinutes: 60,
  timeZoneA: "America/New_York",
  timeZoneB: "Asia/Kolkata",
  cityA: "New York", cityB: "Mumbai",
  shareUrl: "https://collabwindow.app/us-india-meeting-planner",
};

console.log("startUtc:", toStartUtc(m).toISOString());  // expect 2026-04-28T13:00:00.000Z (9AM EDT = UTC-4)
console.log("endUtc:  ", toEndUtc(m).toISOString());    // expect 2026-04-28T14:00:00.000Z
console.log("\nGoogle:\n", googleCalendarUrl(m));
console.log("\nOutlook:\n", outlookUrl(m));
console.log("\nTeams:\n", teamsUrl(m));
console.log("\nSlack:\n", slackMessage(m));
console.log("\nICS:\n", icsContent(m));
```

Run: `npx tsx lib/_cal-smoke.mjs`

Verify:
- `startUtc` = `2026-04-28T13:00:00.000Z` (9 AM EDT)
- Google URL contains `dates=20260428T130000Z%2F20260428T140000Z`
- Slack shows `New York: 9:00 AM EDT – 10:00 AM EDT` and `Mumbai: 6:30 PM IST – 7:30 PM IST`
- ICS contains `DTSTART:20260428T130000Z`

Delete the smoke file after verification.

- [ ] **Step 1.4 — Commit**

```bash
git add lib/calendar-links.ts
git commit -m "feat: add calendar-links utility (Google, Outlook, Teams, ICS, Slack)"
```

---

### Task 2 — Create `components/export-buttons.tsx`

**Files:**
- Create: `components/export-buttons.tsx`

- [ ] **Step 2.1 — Write the component**

```tsx
"use client";

import { useState, useMemo } from "react";
import { fromZonedTime, formatInTimeZone } from "date-fns-tz";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Download, ExternalLink } from "lucide-react";
import {
  type MeetingDetails,
  googleCalendarUrl,
  outlookUrl,
  teamsUrl,
  triggerIcsDownload,
  slackMessage,
} from "@/lib/calendar-links";
import type { OverlapWindow } from "@/lib/overlap";

interface ExportButtonsProps {
  overlapWindow: OverlapWindow;
  date: Date;               // same Date object used throughout overlap-tool
  timeZoneA: string;
  timeZoneB: string;
  cityA: string;            // e.g. "New York"
  cityB: string;            // e.g. "Mumbai"
  meetingLengthMinutes: number;
  shareUrl: string;         // current window.location.href
}

interface Slot {
  key: string;
  hour: number;
  minute: number;
  labelA: string;
  labelB: string;
}

export function ExportButtons({
  overlapWindow,
  date,
  timeZoneA,
  timeZoneB,
  cityA,
  cityB,
  meetingLengthMinutes,
  shareUrl,
}: ExportButtonsProps) {
  const [title, setTitle] = useState("Team Meeting");
  const [slotKey, setSlotKey] = useState<string>("");
  const [slackCopied, setSlackCopied] = useState(false);

  // Build 30-min slots within the overlap window that fit the meeting duration
  const slots: Slot[] = useMemo(() => {
    const result: Slot[] = [];
    const y  = date.getUTCFullYear();
    const mo = date.getUTCMonth();
    const d  = date.getUTCDate();
    const maxStartHour = overlapWindow.endHour - meetingLengthMinutes / 60;

    for (let h = overlapWindow.startHour; h <= maxStartHour; h += 0.5) {
      const hour   = Math.floor(h);
      const minute = h % 1 >= 0.5 ? 30 : 0;

      // Same fromZonedTime pattern as lib/overlap.ts
      const localDate = new Date(Date.UTC(y, mo, d, hour, minute, 0));
      const utc       = fromZonedTime(localDate, timeZoneA);

      result.push({
        key:    `${hour}-${minute}`,
        hour,
        minute,
        labelA: formatInTimeZone(utc, timeZoneA, "h:mm a"),
        labelB: formatInTimeZone(utc, timeZoneB, "h:mm a"),
      });
    }
    return result;
  }, [overlapWindow, date, timeZoneA, timeZoneB, meetingLengthMinutes]);

  if (slots.length === 0) return null;

  const activeSlot = slots.find((s) => s.key === slotKey) ?? slots[0];

  const meeting: MeetingDetails = {
    title,
    dayUtc: date,
    startHourA:     activeSlot.hour,
    startMinuteA:   activeSlot.minute,
    durationMinutes: meetingLengthMinutes,
    timeZoneA,
    timeZoneB,
    cityA,
    cityB,
    shareUrl,
  };

  const copySlack = async () => {
    await navigator.clipboard.writeText(slackMessage(meeting));
    setSlackCopied(true);
    setTimeout(() => setSlackCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border bg-background p-6 space-y-5">
      <h3 className="text-base font-semibold">Schedule this meeting</h3>

      {/* Title + time slot row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Meeting title</Label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>

        <div className="space-y-1.5">
          <Label>Start time ({cityA})</Label>
          <Select
            value={slotKey || slots[0].key}
            onValueChange={setSlotKey}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {slots.map((s) => (
                <SelectItem key={s.key} value={s.key}>
                  {s.labelA}
                  <span className="text-muted-foreground ml-2">
                    / {s.labelB} {cityB}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Calendar exports */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Add to calendar
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open(googleCalendarUrl(meeting), "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Google Calendar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open(outlookUrl(meeting), "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Outlook
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => triggerIcsDownload(meeting)}
            className="gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            Apple / .ics
          </Button>
        </div>
      </div>

      {/* Meeting apps */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Open meeting app
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open(teamsUrl(meeting), "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Microsoft Teams
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open("https://zoom.us/meeting/schedule", "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Zoom
          </Button>
        </div>
      </div>

      {/* Slack copy */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Share with team
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={copySlack}
          className="gap-1.5"
        >
          <Copy className="h-3.5 w-3.5" />
          {slackCopied ? "Copied!" : "Copy for Slack"}
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2.2 — Type-check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 2.3 — Commit**

```bash
git add components/export-buttons.tsx
git commit -m "feat: add ExportButtons component (calendar, Teams, Zoom, Slack)"
```

---

### Task 3 — Wire ExportButtons into `overlap-tool.tsx`

**Files:**
- Modify: `components/overlap-tool.tsx`

The component already has `bestWindow`, `date`, `timeZoneA`, `timeZoneB`, `meetingLength`, `tzA`, `tzB`, and the share URL logic. We pass them to `ExportButtons` and render it below the results card.

- [ ] **Step 3.1 — Add import at top of `overlap-tool.tsx`**

After the existing imports, add:
```typescript
import { ExportButtons } from "./export-buttons";
```

- [ ] **Step 3.2 — Build the shareUrl string inside the component**

The existing `copyLink` function already builds the URL. Extract just the URL string into a `useMemo` so `ExportButtons` can use it without duplicating logic. Find the `copyLink` function in the file and add this memo directly above it:

```typescript
const shareUrl = useMemo(() => {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams();
  params.set("a", timeZoneA);
  params.set("b", timeZoneB);
  params.set("sa", String(startWorkA));
  params.set("ea", String(endWorkA));
  params.set("sb", String(startWorkB));
  params.set("eb", String(endWorkB));
  params.set("d", dateStr);
  params.set("len", String(meetingLength));
  return `${window.location.origin}${pathname}?${params.toString()}`;
}, [timeZoneA, timeZoneB, startWorkA, endWorkA, startWorkB, endWorkB, dateStr, meetingLength, pathname]);
```

- [ ] **Step 3.3 — Render ExportButtons below the results card**

In the JSX, locate the closing `</Card>` of the results card (the one containing "Overlap Result"). Directly after it, add:

```tsx
{bestWindow && (
  <ExportButtons
    overlapWindow={bestWindow}
    date={date}
    timeZoneA={timeZoneA}
    timeZoneB={timeZoneB}
    cityA={tzA?.city ?? "Zone A"}
    cityB={tzB?.city ?? "Zone B"}
    meetingLengthMinutes={meetingLength}
    shareUrl={shareUrl}
  />
)}
```

- [ ] **Step 3.4 — Type-check and build**

```bash
npx tsc --noEmit && npm run build
```

Expected: zero TypeScript errors, clean Next.js build, all 19 routes still static.

- [ ] **Step 3.5 — Manual UI test**

Start the dev server:
```bash
npm run dev
```

Open `http://localhost:3000/us-india-meeting-planner` and verify:

1. **Export section appears** below the "Overlap Result" card when there is a best window.
2. **Export section is hidden** when there is no overlap (adjust working hours to force no overlap — confirm the section disappears).
3. **Start time dropdown** shows 30-min slots only within the overlap window. Both timezones shown in each option (e.g. "9:00 AM / 6:30 PM Mumbai").
4. **Meeting title** defaults to "Team Meeting" and is editable.
5. **Google Calendar** button opens a new tab with a pre-filled event — verify the dates and title in the URL.
6. **Outlook** button opens `outlook.live.com/calendar/0/deeplink/compose` with correct params.
7. **Apple / .ics** button downloads a `.ics` file — open it and verify the event time, title, and description are correct.
8. **Microsoft Teams** button opens the Teams scheduling page with subject and times.
9. **Zoom** button opens `zoom.us/meeting/schedule`.
10. **Copy for Slack** button copies text to clipboard — paste into a text editor and verify format:
    ```
    📅 *Team Meeting*
    🕐 Tuesday, 28 Apr 2026
    New York: 9:00 AM EDT – 10:00 AM EDT
    Mumbai: 6:30 PM IST – 7:30 PM IST
    🔗 https://collabwindow.app/us-india-meeting-planner?...
    ```
11. Test on mobile viewport (375px) — buttons wrap correctly, dropdowns usable.

- [ ] **Step 3.6 — Commit**

```bash
git add components/overlap-tool.tsx
git commit -m "feat: wire ExportButtons into overlap tool — schedule to Google, Outlook, Apple, Teams, Zoom, Slack"
```

---

### Post-build checklist

- [ ] Push to GitHub: `git push origin main` — Vercel auto-deploys
- [ ] Verify on live site that all export buttons work (calendar apps open with correct pre-filled data)
- [ ] Check that `.ics` download works on iOS Safari (Apple Calendar deep-link behavior differs)
