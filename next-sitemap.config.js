/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.collabwindow.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      // Allow legitimate search engines
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Slurp", allow: "/" },
      { userAgent: "YandexBot", allow: "/" },

      // Block AI training crawlers
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },

      // Default: allow everything else
      { userAgent: "*", allow: "/" },
    ],
  },
  // Pair pages are high-value — boost their priority
  transform: async (config, path) => {
    const pairPages = [
      "/us-india-meeting-planner",
      "/us-uk-meeting-planner",
      "/us-germany-meeting-planner",
      "/us-philippines-meeting-planner",
      "/uk-india-meeting-planner",
      "/us-brazil-meeting-planner",
      "/us-japan-meeting-planner",
      "/uk-singapore-meeting-planner",
      "/us-australia-meeting-planner",
      "/uk-australia-meeting-planner",
    ];
    return {
      loc: path,
      changefreq: pairPages.includes(path) ? "daily" : config.changefreq,
      priority: path === "/" ? 1.0 : pairPages.includes(path) ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
