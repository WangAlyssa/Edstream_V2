import type { GuideHighlightId, GuideScene } from "@/content/guides";

/**
 * Highlight regions calibrated for guide-scale Figma mocks (~3.5% ws + 17.5% sidebar + flex main).
 * Each region is an absolute box inside the 16:9 mock frame.
 */
export const guideHighlightRegion = (
  scene: GuideScene,
  highlight: GuideHighlightId,
): { className: string; labelPosition?: "below" | "right" | "above" } | null => {
  const R = REGIONS[scene]?.[highlight] ?? REGIONS.common[highlight];
  return R ?? null;
};

const REGIONS: {
  common: Partial<Record<GuideHighlightId, { className: string; labelPosition?: "below" | "right" | "above" }>>;
} & Partial<
  Record<GuideScene, Partial<Record<GuideHighlightId, { className: string; labelPosition?: "below" | "right" | "above" }>>>
> = {
  common: {
    sidebar: { className: "absolute top-[13%] left-0 bottom-0 w-[21%]" },
    "channels-section": { className: "absolute top-[19%] left-[3.5%] h-[32%] w-[17.5%]" },
    "channel-general": { className: "absolute top-[30%] left-[3.5%] h-[6%] w-[17.5%]" },
    "qa-channel": { className: "absolute top-[36.5%] left-[3.5%] h-[6%] w-[17.5%]" },
    "channel-plus": { className: "absolute top-[18.5%] left-[14.5%] h-[5%] w-[5.5%]", labelPosition: "right" },
    composer: { className: "absolute bottom-0 left-[21%] right-0 h-[19%]" },
    "welcome-message-area": { className: "absolute top-[25%] left-[21%] right-0 h-[38%]" },
    "reply-btn": { className: "absolute top-[36%] left-[56%] h-[7%] w-[8%]", labelPosition: "right" },
    "thread-panel": { className: "absolute top-[13%] right-0 bottom-0 w-[31%]" },
    "thread-composer": { className: "absolute bottom-0 right-0 h-[19%] w-[31%]" },
    "file-card": { className: "absolute top-[39%] left-[26%] h-[13%] w-[24%]" },
    "channel-details-info": { className: "absolute top-[14.5%] left-[61%] h-[5.5%] w-[4.5%]", labelPosition: "right" },
    "files-tab": { className: "absolute top-[20%] left-[71%] h-[9%] w-[9%]" },
    "request-card": { className: "absolute top-[30%] left-[22%] h-[24%] w-[44%]" },
    "request-create": { className: "absolute bottom-[5%] left-[30%] h-[8%] w-[38%]" },
    "settings-save": { className: "absolute bottom-[13%] left-[38%] h-[7%] w-[17%]" },
    "canvas-edstream-link": { className: "absolute top-[24%] left-[5%] h-[6%] w-[15%]", labelPosition: "right" },
    "bottom-nav-all": { className: "absolute bottom-0 left-0 h-[11%] w-[28%]" },
    "bottom-nav-communities": { className: "absolute bottom-0 left-[9%] h-[11%] w-[9%]" },
    "channel-name-input": { className: "absolute top-[41%] left-[27%] h-[7.5%] w-[46%]" },
  },
  "channel-details": {
    "channel-details-info": { className: "absolute top-[14.5%] left-[61%] h-[5.5%] w-[4.5%]", labelPosition: "right" },
  },
  "channel-details-files": {
    "files-tab": { className: "absolute top-[20%] left-[71%] h-[9%] w-[9%]" },
  },
  "message-reply": {
    "reply-btn": { className: "absolute top-[34%] left-[54%] h-[8%] w-[9%]", labelPosition: "right" },
  },
  "message-thread": {
    "thread-panel": { className: "absolute top-[13%] right-0 bottom-0 w-[31%]" },
    "thread-composer": { className: "absolute bottom-0 right-0 h-[19%] w-[31%]" },
  },
  "communities-nav": {
    "bottom-nav-all": { className: "absolute bottom-0 left-0 h-[11%] w-[28%]" },
  },
};
