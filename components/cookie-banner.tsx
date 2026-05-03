"use client";

import { Button } from "@/components/ui/button";

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pb-safe">
      <div className="max-w-4xl mx-auto bg-background/95 backdrop-blur border rounded-xl shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground flex-1">
          <p>
            We use cookies to analyze site traffic and personalize advertising. 
            By clicking "Accept", you agree to our use of cookies. For more information, 
            please read our <a href="/privacy" className="text-foreground underline hover:text-primary transition-colors">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
          <Button variant="outline" onClick={onDecline} className="flex-1 sm:flex-none">
            Decline
          </Button>
          <Button onClick={onAccept} className="flex-1 sm:flex-none">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
