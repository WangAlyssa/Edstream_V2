import type { ReactNode } from "react";

/** 16:9 frame (1920×1080 ratio) — composer always visible, never cropped. */
export const FigmaMockContainer = ({ children, variant = "feature" }: { children: ReactNode; variant?: "feature" | "guide" }) => (
  <div
    className={`figma-demo-mock relative aspect-video w-full rounded-xl border border-gray-200 bg-white font-lato shadow-xl ${
      variant === "guide" ? "overflow-visible" : "overflow-hidden"
    }`}
  >
    <div className={`h-full min-h-0 w-full ${variant === "feature" ? "overflow-hidden" : ""}`}>{children}</div>
  </div>
);
