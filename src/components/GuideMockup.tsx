import { useRef } from "react";
import type { GuideHighlightId, GuideScene } from "@/content/guides";
import { GuideHighlightRing } from "@/components/GuideHighlightRing";
import { FigmaMockContainer } from "@/components/figma/FigmaMockContainer";
import { guideSceneMap } from "@/components/figma/guideScenes";
import type { FigmaScale } from "@/components/figma/FigmaMockParts";

type GuideMockupProps = {
  scene: GuideScene;
  highlight: GuideHighlightId;
  highlightLabel: string;
};

const scale: FigmaScale = "guide";

const GuideMockup = ({ scene, highlight, highlightLabel }: GuideMockupProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const render = guideSceneMap[scene];

  return (
    <FigmaMockContainer variant="guide">
      <div ref={frameRef} className="relative h-full min-h-0 overflow-hidden">
        {render ? render(scale) : null}
        <GuideHighlightRing
          containerRef={frameRef}
          highlightId={highlight}
          label={highlightLabel}
          sceneKey={`${scene}-${highlight}`}
        />
      </div>
    </FigmaMockContainer>
  );
};

export default GuideMockup;
