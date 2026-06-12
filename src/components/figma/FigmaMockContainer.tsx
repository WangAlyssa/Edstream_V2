import type { ReactNode } from "react";

/** Ensures mock frames are never cropped — composer always visible. */
export const FigmaMockContainer = ({ children, variant = "feature" }: { children: ReactNode; variant?: "feature" | "guide" }) => (
  <div
    className={`relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl ${
      variant === "feature" ? "h-[560px]" : "h-[500px]"
    }`}
  >
    <div className="h-full min-h-0 w-full overflow-hidden">{children}</div>
  </div>
);
