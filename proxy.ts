import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AI_BOT_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "CCBot",
  "Bytespider",
  "PerplexityBot",
  "Applebot-Extended",
  "FacebookBot",
  "Diffbot",
  "Omgilibot",
  "Amazonbot",
];

export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const response = NextResponse.next();

  // Tell AI bots not to index or use content for training
  response.headers.set("X-Robots-Tag", "noai, noimageai");

  // Block known AI crawlers at the application level
  const isAIBot = AI_BOT_USER_AGENTS.some((bot) =>
    ua.toLowerCase().includes(bot.toLowerCase())
  );

  if (isAIBot) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return response;
}

export const config = {
  // Apply to all routes except static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
