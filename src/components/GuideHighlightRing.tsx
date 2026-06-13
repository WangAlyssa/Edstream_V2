import { useCallback, useLayoutEffect, useState } from "react";

type HighlightBox = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const DimPanels = ({ box, width, height }: { box: HighlightBox; width: number; height: number }) => {
  const { left, top, width: w, height: h } = box;
  const dim = "pointer-events-none absolute bg-slate-900/60";
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
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const frame = containerRef.current;
    if (!frame) return;

    const fw = frame.clientWidth;
    const fh = frame.clientHeight;
    if (fw > 0 && fh > 0) {
      setFrameSize({ width: fw, height: fh });
    }

    const target = frame.querySelector(`[data-guide-highlight="${highlightId}"]`) as HTMLElement | null;
    if (!target || fw === 0 || fh === 0) {
      setBox(null);
      setReady(false);
      return;
    }

    const frameRect = frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const pad = 6;
    const minW = 36;
    const minH = 26;

    let width = Math.max(targetRect.width + pad * 2, minW);
    let height = Math.max(targetRect.height + pad * 2, minH);
    let left = targetRect.left - frameRect.left + targetRect.width / 2 - width / 2;
    let top = targetRect.top - frameRect.top + targetRect.height / 2 - height / 2;

    left = Math.max(0, Math.min(left, fw - width));
    top = Math.max(0, Math.min(top, fh - height));

    setBox({ left, top, width, height });
    setReady(true);
  }, [containerRef, highlightId]);

  useLayoutEffect(() => {
    measure();

    const frame = containerRef.current;
    if (!frame) return;

    const timers = [0, 100, 300, 800, 1500].map((ms) => window.setTimeout(measure, ms));
    const raf = requestAnimationFrame(() => requestAnimationFrame(measure));
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(frame);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) measure();
      },
      { threshold: 0.05 },
    );
    intersectionObserver.observe(frame);

    return () => {
      timers.forEach(window.clearTimeout);
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [measure, sceneKey, highlightId]);

  const w = frameSize.width;
  const h = frameSize.height;

  return (
    <div className="pointer-events-none absolute inset-0 z-[200] overflow-hidden">
      {/* Always-visible cue so each slide explains itself even before measure completes */}
      <div className="absolute bottom-0 left-0 right-0 z-[210] bg-orange-500 px-2 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-md">
        Look here: {label}
      </div>

      {ready && box && w > 0 && h > 0 ? (
        <>
          <DimPanels box={box} width={w} height={h} />
          <div
            className="absolute rounded-md border-[4px] border-orange-500 bg-orange-400/30 demo-highlight-ring"
            style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
          />
          <span
            className="absolute z-[220] max-w-[140px] rounded-md bg-orange-600 px-2 py-0.5 text-center text-[9px] font-bold leading-tight text-white shadow-lg"
            style={{
              left: box.left + box.width / 2,
              top: box.top > 24 ? box.top - 6 : box.top + box.height + 6,
              transform: box.top > 24 ? "translate(-50%, -100%)" : "translate(-50%, 0)",
            }}
          >
            {label}
          </span>
        </>
      ) : null}
    </div>
  );
};
