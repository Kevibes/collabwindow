"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { OverlapTool as OverlapToolInner } from "./overlap-tool";

function ErrorFallback() {
  return (
    <div className="p-8 text-center text-rose-600">
      Something went wrong loading the planner. Please try refreshing the page.
    </div>
  );
}

export function OverlapTool(props: React.ComponentProps<typeof OverlapToolInner>) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading planner...</div>}>
        <OverlapToolInner {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
