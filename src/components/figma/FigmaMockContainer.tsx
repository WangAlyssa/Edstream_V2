import type { ReactNode } from "react";

/** 16:9 frame (1920×1080 ratio) — composer always visible, never cropped. */
export const FigmaMockContainer = ({ children, variant = "feature" }: { children: ReactNode; variant?: "feature" | "guide" }) => (
  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
    <div className="h-full min-h-0 w-full overflow-hidden">{children}</div>
  </div>
);
