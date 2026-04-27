# Time Zone Meeting Planner — Implementation Plan (v2)

## Current Build Status (2026-04-27)

**Phase:** 1 (Foundation) — Code written, build passes, **bug found in overlap calculation**

**Completed:**
- Next.js 15 + Tailwind + shadcn/ui project initialized
- Homepage (`/`) with generic tool, 10-pair grid, features, FAQ
- US-India pair page (`/us-india-meeting-planner`) with pre-filled defaults + supporting content
- Core overlap tool: time zone selectors, working hours sliders, date picker, meeting length filter, visual overlap bar, shareable URLs, DST warnings, quick reference table
- Dev server running at `localhost:3000`

**Known Bug:**
Overlap calculation in `lib/overlap.ts` is incorrect. When selecting LA → Berlin, shows ~1h diff instead of ~9h. Root cause: `calculateOverlap` parses date strings in browser local time instead of using timezone-aware conversion (e.g., `date-fns-tz`).

**Next Steps on Resume:**
1. Fix overlap calculation bug in `lib/overlap.ts`
2. Add remaining 9 pair pages
3. Add blog/supporting content
4. Vercel deploy + domain registration
5. Google AdSense application

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
