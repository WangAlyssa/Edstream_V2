import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MousePointer2 } from "lucide-react";

export type DemoCursorPhase = "move" | "hover" | "click" | "idle";

export const CURSOR_MOVE_MS = 900;
export const CURSOR_HOVER_MS = 300;
export const CURSOR_CLICK_MS = 220;

export const DemoCursor = ({
  containerRef,
  targetKey,
  phase,
  stepKey,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  targetKey: string | null;
  phase: DemoCursorPhase;
  stepKey?: string;
}) => {
  const [position, setPosition] = useState<CSSProperties>({ left: "50%", top: "50%", opacity: 0 });
  const lastPositionKey = useRef<string | null>(null);

  useLayoutEffect(() => {
    const frame = containerRef.current;
    if (!frame || !targetKey) {
      setPosition((c) => ({ ...c, opacity: 0 }));
      return;
    }

    const target = frame.querySelector(`[data-demo-target="${targetKey}"]`) as HTMLElement | null;
    if (!target) {
      setPosition((c) => ({ ...c, opacity: 0 }));
      return;
    }

    const frameRect = frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const positionKey = `${stepKey ?? targetKey}:${targetKey}`;
    const isNewTarget = lastPositionKey.current !== positionKey;
    lastPositionKey.current = positionKey;

    setPosition({
      left: targetRect.left - frameRect.left + targetRect.width * 0.65,
      top: targetRect.top - frameRect.top + targetRect.height * 0.65,
      opacity: 1,
      transition: isNewTarget ? `left ${CURSOR_MOVE_MS}ms ease-in-out, top ${CURSOR_MOVE_MS}ms ease-in-out` : "none",
    });
  }, [containerRef, targetKey, phase, stepKey]);

  return (
    <div className="pointer-events-none absolute z-30" style={position}>
      <span
        className={`absolute left-1 top-1 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 ${
          phase === "click" ? "demo-cursor-click-once" : ""
        }`}
      />
      <MousePointer2 className="demo-cursor-float h-4 w-4 fill-white text-blue-950" />
    </div>
  );
};

/** Advance step only after move → hover → click on the current step's trigger. */
export const useDemoStepCycle = (stepCount: number, resetKey: string) => {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<DemoCursorPhase>("move");

  useEffect(() => {
    setStep(0);
    setPhase("move");
  }, [resetKey]);

  useEffect(() => {
    setPhase("move");
    const hoverTimer = window.setTimeout(() => setPhase("hover"), CURSOR_MOVE_MS);
    const clickTimer = window.setTimeout(() => setPhase("click"), CURSOR_MOVE_MS + CURSOR_HOVER_MS);
    const nextTimer = window.setTimeout(() => {
      setStep((current) => (current + 1) % stepCount);
      setPhase("move");
    }, CURSOR_MOVE_MS + CURSOR_HOVER_MS + CURSOR_CLICK_MS);
    return () => {
      window.clearTimeout(hoverTimer);
      window.clearTimeout(clickTimer);
      window.clearTimeout(nextTimer);
    };
  }, [step, stepCount]);

  return { step, phase };
};
