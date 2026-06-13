import type { GuideHighlightId, GuideScene } from "@/content/guides";
import { GuideHighlightRegion } from "@/components/GuideHighlightWrap";
import { guideHighlightRegion } from "@/components/guideHighlightRegions";
import { FigmaMockContainer } from "@/components/figma/FigmaMockContainer";
import { guideSceneMap, type GuideSceneProps } from "@/components/figma/guideScenes";
import type { FigmaScale } from "@/components/figma/FigmaMockParts";

type GuideMockupProps = {
  scene: GuideScene;
  highlight: GuideHighlightId;
  highlightLabel: string;
};

const scale: FigmaScale = "guide";

const GuideMockup = ({ scene, highlight, highlightLabel }: GuideMockupProps) => {
  const render = guideSceneMap[scene];
  const region = guideHighlightRegion(scene, highlight);

  return (
    <FigmaMockContainer variant="guide">
      <div className="relative h-full min-h-0 overflow-hidden">
        {render ? render({ scale, highlight, label: highlightLabel }) : null}
        {region ? (
          <GuideHighlightRegion
            active
            label={highlightLabel}
            className={region.className}
            labelPosition={region.labelPosition}
          />
        ) : null}
      </div>
    </FigmaMockContainer>
  );
};

export default GuideMockup;
export type { GuideSceneProps };
