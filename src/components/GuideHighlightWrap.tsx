import type { ReactNode } from "react";

/** Orange callout directly on the UI element being explained (064d47d style). */
export const GuideHighlightWrap = ({
  active,
  label,
  children,
  className = "",
  labelPosition = "below",
}: {
  active: boolean;
  label: string;
  children?: ReactNode;
  className?: string;
  labelPosition?: "below" | "right" | "above";
}) => (
  <div className={`relative ${className}`}>
    {children}
    {active && (
      <>
        <div className="demo-highlight-pulse pointer-events-none absolute inset-0 z-20 box-border rounded-md border-[3px] border-orange-500 bg-orange-500/25" />
        <span
          className={`absolute z-30 max-w-[120px] whitespace-normal rounded-md bg-orange-500 px-2 py-0.5 text-center text-[8px] font-bold leading-tight text-white shadow-md ${
            labelPosition === "right"
              ? "left-full top-1/2 ml-1.5 -translate-y-1/2"
              : labelPosition === "above"
                ? "bottom-full left-1/2 mb-1 -translate-x-1/2"
                : "left-1/2 top-[calc(100%+4px)] -translate-x-1/2"
          }`}
        >
          {label}
        </span>
      </>
    )}
  </div>
);

/** Empty highlight region — wraps nothing but draws the orange box at `className` position. */
export const GuideHighlightRegion = ({
  active,
  label,
  className,
  labelPosition = "below",
}: {
  active: boolean;
  label: string;
  className: string;
  labelPosition?: "below" | "right" | "above";
}) => (
  <GuideHighlightWrap active={active} label={label} className={className} labelPosition={labelPosition}>
    <span className="block h-full w-full" aria-hidden />
  </GuideHighlightWrap>
);
