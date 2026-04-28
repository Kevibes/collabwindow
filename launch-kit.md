# CollabWindow — Launch Kit

## Site
**Canonical URL:** https://www.collabwindow.app
**Redirect:** collabwindow.app → www.collabwindow.app (Vercel 308)

---

## Google AdSense Application Checklist

1. Go to https://www.google.com/adsense/start/
2. Sign in with Google account
3. Enter site URL: `https://www.collabwindow.app`
4. Select language: English
5. Accept terms
6. Wait for review (typically 1–2 weeks)
7. Once approved, copy your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
8. In Vercel dashboard → Project Settings → Environment Variables:
   - Name: `NEXT_PUBLIC_ADSENSE_ID`
   - Value: `ca-pub-XXXXXXXXXXXXXXXX`
   - Deployments: Production, Preview, Development
9. Re-deploy (auto-deploys on next push)

**Prerequisites already met:**
- 22 pages live
- Privacy policy at `/privacy`
- About page at `/about`
- Contact page at `/contact`
- Ad slots gated behind env var (no errors until ID is set)

---

## Product Hunt Launch

### Tagline (60 chars max)
Find the best time to meet across time zones — free, no signup.

### Description (260 chars max)
CollabWindow is a free overlap planner for distributed teams. Pick two time zones, set working hours, and instantly see the best meeting windows. Handles DST, generates shareable links, and exports to Google Calendar, Outlook, Slack, and Teams.

### Topics
- Productivity
- Remote Work
- SaaS
- Calendar
- Time Zones

### Maker Comment (first comment)
Hey Product Hunt! I built CollabWindow because I was tired of spreadsheet gymnastics every time I needed to schedule a call with my India-based teammates. The tool is completely free, requires zero signup, and handles DST automatically. Every change updates the URL so you can share the exact overlap window with your team. Would love your feedback — especially on any country pairs or features you'd like to see next.

### First 3 Comment Replies (pre-written)
1. **"How is this different from World Time Buddy?"**
   > Great question. World Time Buddy is excellent for seeing what time it is *now* in multiple cities. CollabWindow is built for finding the *overlap* between two teams' working hours — it tells you "7:00–9:30 AM EST overlaps with 5:30–8:00 PM IST" and color-codes the window by comfort level. Plus you can export directly to calendar apps.

2. **"Do you plan to add more country pairs?"**
   > Yes — we launched with 10 high-traffic pairs (US–India, US–UK, UK–India, etc.) but the plan is to expand to 50+ pairs. If there's a specific pair you need, reply here and I'll prioritize it.

3. **"Is there a paid tier?"**
   > No paid tier right now. The site is ad-supported (AdSense) and may add a team workspace feature later for saving recurring time zones. The core overlap tool will always be free.

---

## Reddit Post Drafts

### r/remotework
**Title:** I built a free tool to find the best meeting time between US and India teams

**Body:**
After years of spreadsheet gymnastics with my offshore team, I built CollabWindow — a dead-simple overlap planner.

Pick two time zones, drag your working hours, and it instantly shows you the best meeting windows. Handles DST automatically. Every state change updates the URL so you can share the exact setup with your team via Slack.

Also exports directly to Google Calendar, Outlook, Teams, and Slack.

Completely free. No signup. No email capture.

Would love feedback from other distributed teams — especially if there are country pairs or features I'm missing.

https://www.collabwindow.app

---

### r/digitalnomad
**Title:** Free time zone overlap planner for distributed teams

**Body:**
I got tired of calculating time zones in my head every time I scheduled a call with clients in different countries. Built this instead.

CollabWindow shows you the overlap between two teams' working hours, color-codes it by comfort level (green = great, yellow = borderline, red = nope), and lets you export to Google Calendar or copy a pre-formatted Slack message.

Free. No signup. Handles DST.

https://www.collabwindow.app

---

### r/SideProject
**Title:** Built a free time zone meeting planner — no signup, handles DST, exports to calendar

**Body:**
Launched CollabWindow this week. It's a simple tool for finding the best meeting time between two time zones.

What it does:
- Shows overlap windows between two teams' working hours
- Color-codes by comfort (green/yellow/red)
- Handles DST transitions automatically
- Updates the URL on every change for easy sharing
- Exports to Google Calendar, Outlook, Teams, Slack

Stack: Next.js 15, Tailwind, shadcn/ui, date-fns-tz

Monetization: AdSense (light — one ad below the tool, sidebar on desktop)

Target: distributed teams, offshore dev shops, consulting firms

Would love any feedback or ideas for country pairs to add next.

https://www.collabwindow.app

---

## LinkedIn Post

I just shipped CollabWindow — a free tool for finding the best time to meet across time zones.

If you've ever scheduled a standup with a team 12 hours away, you know the pain. Spreadsheet tabs. Mental math. "Wait, did they already switch to DST?"

CollabWindow handles it all:
- Pick two time zones, set working hours
- Instantly see the overlap window
- Color-coded by comfort (green = great, yellow = early/late, red = no overlap)
- Handles DST transitions automatically
- Shareable URLs — every change updates the link
- Export to Google Calendar, Outlook, Teams, Slack

Completely free. No signup. No email capture.

Built with Next.js 15 + Tailwind + shadcn/ui.

Would love feedback from anyone managing distributed teams.

https://www.collabwindow.app

---

## Twitter/X Thread (optional)

**Tweet 1:** Just shipped a free tool for scheduling meetings across time zones. No signup. Handles DST. Exports to calendar. https://www.collabwindow.app

**Tweet 2:** The problem: I manage a distributed team and every standup required a spreadsheet, mental math, and a prayer that nobody had switched to DST yet.

**Tweet 3:** The solution: Pick two time zones, drag working hours, see the overlap instantly. Green = great time. Yellow = early/late. Red = don't even try.

**Tweet 4:** Every change updates the URL. Share the exact setup with your team in Slack. Or export directly to Google Calendar / Outlook / Teams.

**Tweet 5:** 10 country pairs live, 4 blog posts, privacy policy, about page, contact page. AdSense-ready. Built with Next.js 15 + Tailwind + shadcn/ui. Open to feedback!

---

## Post-Launch Action Items

### Week 1
- [ ] Submit to Product Hunt
- [ ] Post to r/remotework, r/digitalnomad, r/SideProject
- [ ] Post to LinkedIn
- [ ] Submit to Google Search Console (verify www.collabwindow.app)
- [ ] Submit sitemap: https://www.collabwindow.app/sitemap.xml

### Week 2
- [ ] Apply for Google AdSense
- [ ] Post to Hacker News "Show HN"
- [ ] Post to Indie Hackers
- [ ] Reach out to 5 micro-influencers in remote work space

### Ongoing
- [ ] Check Search Console weekly for ranking keywords
- [ ] Write 1 additional blog post per month based on query data
- [ ] Monitor Core Web Vitals monthly
- [ ] Evaluate Mediavine migration at 50K sessions/month
