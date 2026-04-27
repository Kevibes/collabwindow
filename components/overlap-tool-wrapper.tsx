import { Suspense } from "react";
import { OverlapTool as OverlapToolInner } from "./overlap-tool";

export function OverlapTool(props: React.ComponentProps<typeof OverlapToolInner>) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Loading planner...</div>}>
      <OverlapToolInner {...props} />
    </Suspense>
  );
}
