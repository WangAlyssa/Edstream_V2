import type { ReactNode } from "react";
import type { GuideHighlightId, GuideScene } from "@/content/guides";
import {
  CanvasChannelChatFrame,
  CanvasCourseHomeFrame,
  CanvasEnableFrame,
  CanvasSettingsFrame,
  CanvasThreadFrame,
  ChannelDetailsEmptyFrame,
  MessageReplyFrame,
  RequestsInstructorFrame,
  RequestsStudentFrame,
  SettingsModalFrame,
  SidebarComposeFrame,
  StandaloneChannelFrame,
} from "@/components/figma/FigmaFrames";
import { FigmaMockContainer } from "@/components/figma/FigmaMockContainer";
import { FigmaComposer, FigmaStandaloneShell, FigmaChannelHeader, FigmaDateDivider, type FigmaScale } from "@/components/figma/FigmaMockParts";

type GuideMockupProps = {
  scene: GuideScene;
  highlight: GuideHighlightId;
  highlightLabel: string;
};

const scale: FigmaScale = "guide";

const HighlightWrap = ({
  active,
  label,
  children,
  className = "",
  labelPosition = "below",
}: {
  active: boolean;
  label: string;
  children: ReactNode;
  className?: string;
  labelPosition?: "below" | "right";
}) => (
  <div className={`relative ${className}`}>
    {children}
    {active && (
      <>
        <div className="demo-highlight-pulse pointer-events-none absolute inset-0 z-10 box-border rounded-lg border-[2.5px] border-orange-500 bg-orange-500/20" />
        <span
          className={`absolute z-20 whitespace-nowrap rounded-md bg-orange-500 px-2.5 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-md ${
            labelPosition === "right"
              ? "left-full top-1/2 ml-2 -translate-y-1/2"
              : "left-1/2 top-[calc(100%+6px)] -translate-x-1/2"
          }`}
        >
          {label}
        </span>
      </>
    )}
  </div>
);

const MessagesSectionScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "bottom-nav-all" || highlight === "bottom-nav-dms"} label={label} className="h-full">
    <FigmaStandaloneShell scale={scale} activeChannel="renamed-general">
      <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
        <p className={`text-center text-gray-400 ${scale === "guide" ? "text-[9px]" : "text-[11px]"}`}>Course channel ready for messages</p>
      </div>
      <FigmaComposer scale={scale} />
    </FigmaStandaloneShell>
  </HighlightWrap>
);

const ChannelGeneralScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap
    active={highlight === "channel-general"}
    label={label}
    className="h-full"
  >
    <CanvasChannelChatFrame scale={scale} />
  </HighlightWrap>
);

const SidebarOverviewScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="relative h-full">
    <CanvasChannelChatFrame scale={scale} />
    <HighlightWrap
      active={highlight === "sidebar" || highlight === "channels-section"}
      label={label}
      className="absolute bottom-[12%] left-[28%] top-[12%] w-[22%]"
    />
  </div>
);

const ChannelComposerScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="relative h-full">
    <CanvasChannelChatFrame scale={scale} />
    <HighlightWrap active={highlight === "composer"} label={label} className="absolute bottom-1 left-[28%] right-1 h-[22%]" />
  </div>
);

const CreateChannelScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "channel-plus" || highlight === "channel-name-input"} label={label} className="h-full">
    <SidebarComposeFrame scale={scale} />
  </HighlightWrap>
);

const ChannelsCreatedScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="relative h-full">
    <FigmaStandaloneShell scale={scale} activeChannel="guided">
      <FigmaChannelHeader scale={scale} title="# project-team-alpha" members="12 Members" />
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaComposer scale={scale} />
    </FigmaStandaloneShell>
    <HighlightWrap
      active={highlight === "qa-channel" || highlight === "channels-section"}
      label={label}
      className="absolute bottom-[18%] left-[6%] top-[14%] w-[22%]"
    />
  </div>
);

const ChannelDetailsScene = ({ highlight, label, filesTab }: { highlight: GuideHighlightId; label: string; filesTab?: boolean }) => (
  <div className="relative h-full">
    <ChannelDetailsEmptyFrame scale={scale} activeTab={filesTab ? "docs" : "photos"} />
    <HighlightWrap
      active={highlight === "channel-details-info" || highlight === "files-tab" || highlight === "file-card"}
      label={label}
      className={
        highlight === "files-tab" || highlight === "file-card"
          ? "absolute bottom-[18%] right-[2%] top-[38%] w-[36%]"
          : "absolute bottom-[20%] left-[28%] right-[38%] top-[8%]"
      }
    />
  </div>
);

const FileInChatScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="relative h-full">
    <StandaloneChannelFrame scale={scale} />
    <HighlightWrap active={highlight === "file-card"} label={label} className="absolute left-[32%] top-[42%] h-[12%] w-[28%]" />
  </div>
);

const RequestQueueScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "request-btn"} label={label} className="h-full">
    <RequestsInstructorFrame scale={scale} />
  </HighlightWrap>
);

const StudentRequestScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "request-btn"} label={label} className="h-full">
    <RequestsStudentFrame scale={scale} />
  </HighlightWrap>
);

const sceneRenderers: Record<
  GuideScene,
  (props: { highlight: GuideHighlightId; label: string }) => ReactNode
> = {
  "canvas-course-home": ({ highlight, label }) => (
    <HighlightWrap active={highlight === "canvas-edstream-link"} label={label} labelPosition="right" className="h-full">
      <CanvasCourseHomeFrame scale={scale} />
    </HighlightWrap>
  ),
  "bottom-nav": (props) => <MessagesSectionScene {...props} />,
  "channel-general": (props) => <ChannelGeneralScene {...props} />,
  "sidebar-overview": (props) => <SidebarOverviewScene {...props} />,
  "channel-composer": (props) => <ChannelComposerScene {...props} />,
  "create-channel": (props) => <CreateChannelScene {...props} />,
  "channels-created": (props) => <ChannelsCreatedScene {...props} />,
  "channel-details": (props) => <ChannelDetailsScene {...props} />,
  "channel-details-files": (props) => <ChannelDetailsScene {...props} filesTab />,
  "file-in-chat": (props) => <FileInChatScene {...props} />,
  "message-reply": ({ highlight, label }) => (
    <HighlightWrap active={highlight === "reply-btn" || highlight === "thread-indicator"} label={label} className="h-full">
      <MessageReplyFrame scale={scale} />
    </HighlightWrap>
  ),
  "message-thread": ({ highlight, label }) => (
    <HighlightWrap active={highlight === "thread-panel" || highlight === "thread-composer"} label={label} className="h-full">
      <CanvasThreadFrame scale={scale} />
    </HighlightWrap>
  ),
  "request-queue": (props) => <RequestQueueScene {...props} />,
  "request-queue-student": (props) => <StudentRequestScene {...props} />,
  "settings-modal": ({ highlight, label }) => (
    <div className="relative h-full">
      <SettingsModalFrame scale={scale} />
      <HighlightWrap
        active={highlight === "settings-save"}
        label={label}
        className="absolute bottom-[14%] left-[38%] h-[7%] w-[16%]"
      />
    </div>
  ),
  "canvas-settings": ({ highlight, label }) => (
    <HighlightWrap active={highlight === "canvas-navigation-menu" || highlight === "canvas-edstream-link" || highlight === "save-btn"} label={label} className="h-full">
      <CanvasSettingsFrame scale={scale} />
    </HighlightWrap>
  ),
  "canvas-enable": ({ highlight, label }) => (
    <HighlightWrap active={highlight === "canvas-edstream-link"} label={label} className="h-full">
      <CanvasEnableFrame scale={scale} />
    </HighlightWrap>
  ),
};

const GuideMockup = ({ scene, highlight, highlightLabel }: GuideMockupProps) => (
  <FigmaMockContainer variant="guide">
    <div className="h-full">{sceneRenderers[scene]({ highlight, label: highlightLabel })}</div>
  </FigmaMockContainer>
);

export default GuideMockup;
