import { type CSSProperties, useLayoutEffect, useState } from "react";

/** Orange callout anchored to `[data-guide-highlight="<id>"]` inside the mock frame. */
export const GuideHighlightRing = ({
  containerRef,
  highlightId,
  label,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  highlightId: string;
  label: string;
}) => {
  const [box, setBox] = useState<CSSProperties | null>(null);

  useLayoutEffect(() => {
    const frame = containerRef.current;
    if (!frame) {
      setBox(null);
      return;
    }

    const target = frame.querySelector(`[data-guide-highlight="${highlightId}"]`) as HTMLElement | null;
    if (!target) {
      setBox(null);
      return;
    }

    const frameRect = frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const pad = 3;

    setBox({
      left: targetRect.left - frameRect.left - pad,
      top: targetRect.top - frameRect.top - pad,
      width: targetRect.width + pad * 2,
      height: targetRect.height + pad * 2,
    });
  }, [containerRef, highlightId]);

  if (!box) return null;

  const labelBelow = (box.top as number) + (box.height as number) + 8 < (containerRef.current?.clientHeight ?? 0) * 0.72;

  return (
    <>
      <div
        className="demo-highlight-pulse pointer-events-none absolute z-20 box-border rounded-md border-[2.5px] border-orange-500 bg-orange-500/20"
        style={box}
      />
      <span
        className={`absolute z-30 max-w-[140px] whitespace-normal rounded-md bg-orange-500 px-2 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-md ${
          labelBelow ? "translate-x-[-50%]" : "translate-y-[-50%]"
        }`}
        style={
          labelBelow
            ? { left: (box.left as number) + (box.width as number) / 2, top: (box.top as number) + (box.height as number) + 6 }
            : { left: (box.left as number) + (box.width as number) + 8, top: (box.top as number) + (box.height as number) / 2 }
        }
      >
        {label}
      </span>
    </>
  );
};
