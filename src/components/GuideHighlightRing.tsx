import { type CSSProperties, useCallback, useLayoutEffect, useState } from "react";

type HighlightBox = CSSProperties & { minW?: number; minH?: number };

/** Orange spotlight + label anchored to `[data-guide-highlight="<id>"]`. */
export const GuideHighlightRing = ({
  containerRef,
  highlightId,
  label,
  sceneKey,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  highlightId: string;
  label: string;
  sceneKey?: string;
}) => {
  const [box, setBox] = useState<HighlightBox | null>(null);
  const [missing, setMissing] = useState(false);

  const measure = useCallback(() => {
    const frame = containerRef.current;
    if (!frame) {
      setBox(null);
      setMissing(true);
      return;
    }

    const target = frame.querySelector(`[data-guide-highlight="${highlightId}"]`) as HTMLElement | null;
    if (!target) {
      setBox(null);
      setMissing(true);
      return;
    }

    setMissing(false);
    const frameRect = frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const pad = 4;
    const minW = 28;
    const minH = 22;

    let width = Math.max(targetRect.width + pad * 2, minW);
    let height = Math.max(targetRect.height + pad * 2, minH);
    let left = targetRect.left - frameRect.left + targetRect.width / 2 - width / 2;
    let top = targetRect.top - frameRect.top + targetRect.height / 2 - height / 2;

    left = Math.max(2, Math.min(left, frameRect.width - width - 2));
    top = Math.max(2, Math.min(top, frameRect.height - height - 2));

    setBox({ left, top, width, height });
  }, [containerRef, highlightId]);

  useLayoutEffect(() => {
    measure();

    const frame = containerRef.current;
    if (!frame) return;

    const raf = requestAnimationFrame(() => requestAnimationFrame(measure));
    const timeout = window.setTimeout(measure, 120);
    const observer = new ResizeObserver(measure);
    observer.observe(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [measure, sceneKey, highlightId]);

  if (missing) {
    return (
      <div className="pointer-events-none absolute inset-0 z-[100] flex items-center justify-center p-4">
        <div className="rounded-lg border-2 border-dashed border-orange-400 bg-orange-50/90 px-3 py-2 text-center shadow-lg">
          <p className="text-[10px] font-bold text-orange-600">{label}</p>
        </div>
      </div>
    );
  }

  if (!box) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[100]">
      {/* Dim everything except the target */}
      <div
        className="absolute rounded-md border-[3px] border-orange-500 bg-orange-500/25 demo-highlight-pulse"
        style={{
          left: box.left,
          top: box.top,
          width: box.width,
          height: box.height,
          boxShadow: "0 0 0 9999px rgba(15, 23, 42, 0.42), 0 0 16px 4px rgba(249, 115, 22, 0.55)",
        }}
      />
      <span
        className="absolute max-w-[130px] rounded-md bg-orange-500 px-2 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-lg ring-2 ring-white/80"
        style={{
          left: (box.left as number) + (box.width as number) / 2,
          top: Math.max(4, (box.top as number) - 2),
          transform: "translate(-50%, -100%)",
        }}
      >
        {label}
      </span>
    </div>
  );
};
