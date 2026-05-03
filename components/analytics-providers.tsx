"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieBanner } from "@/components/cookie-banner";

export function AnalyticsProviders() {
  const [consent, setConsent] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem("collabwindow-cookie-consent"));
    setMounted(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("collabwindow-cookie-consent", "accepted");
    setConsent("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("collabwindow-cookie-consent", "declined");
    setConsent("declined");
  };

  if (!mounted) return null;

  return (
    <>
      {consent === "accepted" && (
        <>
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
          {process.env.NEXT_PUBLIC_ADSENSE_ID && (
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          )}
        </>
      )}
      {consent === null && (
        <CookieBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );
}
