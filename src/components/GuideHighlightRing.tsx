import { type CSSProperties, useCallback, useLayoutEffect, useState } from "react";

type HighlightBox = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const DimPanels = ({ box, width, height }: { box: HighlightBox; width: number; height: number }) => {
  const { left, top, width: w, height: h } = box;
  const dim = "pointer-events-none absolute bg-slate-900/55";
  return (
    <>
      <div className={dim} style={{ top: 0, left: 0, width, height: top }} />
      <div className={dim} style={{ top: top + h, left: 0, width, height: Math.max(0, height - top - h) }} />
      <div className={dim} style={{ top, left: 0, width: left, height: h }} />
      <div className={dim} style={{ top, left: left + w, width: Math.max(0, width - left - w), height: h }} />
    </>
  );
};

/** Orange ring + dim overlay anchored to `[data-guide-highlight="<id>"]` inside the mock frame. */
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
  const [frameSize, setFrameSize] = useState({ width: 0, height: 0 });
  const [missing, setMissing] = useState(false);

  const measure = useCallback(() => {
    const frame = containerRef.current;
    if (!frame) {
      setBox(null);
      setMissing(true);
      return;
    }

    setFrameSize({ width: frame.clientWidth, height: frame.clientHeight });

    const target = frame.querySelector(`[data-guide-highlight="${highlightId}"]`) as HTMLElement | null;
    if (!target) {
      setBox(null);
      setMissing(true);
      return;
    }

    setMissing(false);
    const frameRect = frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const pad = 5;
    const minW = 32;
    const minH = 24;

    let width = Math.max(targetRect.width + pad * 2, minW);
    let height = Math.max(targetRect.height + pad * 2, minH);
    let left = targetRect.left - frameRect.left + targetRect.width / 2 - width / 2;
    let top = targetRect.top - frameRect.top + targetRect.height / 2 - height / 2;

    left = Math.max(0, Math.min(left, frame.clientWidth - width));
    top = Math.max(0, Math.min(top, frame.clientHeight - height));

    setBox({ left, top, width, height });
  }, [containerRef, highlightId]);

  useLayoutEffect(() => {
    measure();
    const frame = containerRef.current;
    if (!frame) return;

    const raf = requestAnimationFrame(measure);
    const timeout = window.setTimeout(measure, 150);
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
      <div className="pointer-events-none absolute inset-0 z-[200] flex items-center justify-center bg-slate-900/20 p-4">
        <div className="rounded-lg border-2 border-dashed border-orange-500 bg-white px-3 py-2 text-center shadow-lg">
          <p className="text-[10px] font-bold text-orange-600">→ {label}</p>
        </div>
      </div>
    );
  }

  if (!box || frameSize.width === 0) return null;

  const labelTop = box.top > 22 ? box.top - 4 : box.top + box.height + 4;
  const labelTransform = box.top > 22 ? "translate(-50%, -100%)" : "translate(-50%, 0)";

  return (
    <div className="pointer-events-none absolute inset-0 z-[200] overflow-hidden">
      <DimPanels box={box} width={frameSize.width} height={frameSize.height} />
      <div
        className="absolute rounded-md border-[3px] border-orange-500 bg-orange-400/20 demo-highlight-ring"
        style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
      />
      <span
        className="absolute z-10 max-w-[140px] rounded-md bg-orange-500 px-2 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-md"
        style={{
          left: box.left + box.width / 2,
          top: labelTop,
          transform: labelTransform,
        }}
      >
        {label}
      </span>
    </div>
  );
};
