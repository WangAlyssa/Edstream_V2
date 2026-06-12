import type { ReactNode } from "react";
import { Lock, MessageSquareReply, Pencil, Trash2, X } from "lucide-react";
import type { GuideHighlightId, GuideScene } from "@/content/guides";
import {
  FigmaAppShell,
  FigmaChannelDetails,
  FigmaChatHeader,
  FigmaComposer,
  FigmaCreateChannelModal,
  FigmaDatePill,
  FigmaExtensionCard,
  FigmaFileCard,
  FigmaMessage,
  FigmaTag,
} from "@/components/mockup/FigmaProductUI";
import { MOCK_COURSE, MOCK_ORGANIZATIONS, MOCK_USERS } from "@/components/mockup/mockup-data";
import { FIGMA as TOKENS } from "@/components/mockup/figma-tokens";

type GuideMockupProps = {
  scene: GuideScene;
  highlight: GuideHighlightId;
  highlightLabel: string;
};

const MockupFrame = ({ children }: { children: ReactNode }) => (
  <div className="aspect-[16/10] w-full overflow-hidden">{children}</div>
);

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
        <div className="demo-highlight-pulse pointer-events-none absolute inset-0 z-20 box-border rounded-lg border-[2.5px] border-orange-500 bg-orange-500/20" />
        <span
          className={`absolute z-30 whitespace-nowrap rounded-md bg-orange-500 px-2.5 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-md ${
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

const CanvasCourseHomeScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full font-sans" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
    <nav className="flex w-[52px] flex-shrink-0 flex-col items-center gap-1 py-2" style={{ background: TOKENS.globalNav }}>
      {["Account", "Courses", "Calendar"].map((item, i) => (
        <div key={item} className="px-1 py-1 text-[6px] text-white/80" style={{ background: i === 1 ? "rgba(255,255,255,0.12)" : "transparent" }}>
          {item}
        </div>
      ))}
    </nav>
    <HighlightWrap active={highlight === "canvas-edstream-link"} label={label} labelPosition="right" className="h-full flex-1">
      <aside className="h-full w-[108px] border-r bg-white py-2" style={{ borderColor: TOKENS.border }}>
        <p className="mb-1 px-2 text-[7px] uppercase text-[#97A0AF]">{MOCK_COURSE.term}</p>
        {["Home", "Ed Stream Chat", "Assignments", "Grades"].map((link) => (
          <div
            key={link}
            className="mx-1.5 mb-0.5 px-2 py-1 text-[8px]"
            style={{
              fontWeight: link === "Ed Stream Chat" ? 700 : 400,
              color: link === "Ed Stream Chat" ? TOKENS.canvasActive : "#6B778C",
              borderLeft: link === "Ed Stream Chat" ? `3px solid ${TOKENS.canvasActive}` : "3px solid transparent",
              background: link === "Ed Stream Chat" ? "#FFF7F5" : "transparent",
            }}
          >
            {link}
          </div>
        ))}
      </aside>
    </HighlightWrap>
    <main className="min-w-0 flex-1 bg-[#f5f5f5] p-3">
      <div className="rounded-lg bg-gradient-to-br from-[#1a3a6b] to-[#1a2f5c] p-3 text-white">
        <p className="text-[8px] text-orange-300">{MOCK_COURSE.code}</p>
        <h2 className="text-xs font-black">{MOCK_COURSE.title}</h2>
      </div>
    </main>
  </div>
);

const ChannelChatScene = ({
  highlight,
  label,
  channelName = "# general-q-and-a",
  showFile = false,
  showDetails = false,
  filesTab = false,
  channels,
}: {
  highlight: GuideHighlightId;
  label: string;
  channelName?: string;
  showFile?: boolean;
  showDetails?: boolean;
  filesTab?: boolean;
  channels?: string[];
}) => (
  <FigmaAppShell
    sidebar={{
      activeChannel: channelName,
      activeSection: highlight === "request-btn" ? "requests" : "channels",
      highlightChannelPlus: highlight === "channel-plus",
    }}
    showBottomNav={highlight.startsWith("bottom-nav")}
    bottomNavActive={
      highlight === "bottom-nav-communities" ? "communities" : highlight === "bottom-nav-dms" ? "dms" : "courses"
    }
    rightPanel={showDetails ? <FigmaChannelDetails activeTab={filesTab ? "Docs" : "Photos"} /> : undefined}
  >
    <HighlightWrap active={highlight === "sidebar" || highlight === "channels-section"} label={label}>
      <FigmaChatHeader channel={channelName} members={MOCK_COURSE.memberCount} />
    </HighlightWrap>
    <FigmaDatePill label="Mar 1st, 2026" />
    <HighlightWrap active={highlight === "welcome-message-area" || highlight === "channel-general"} label={label}>
      <FigmaMessage user={MOCK_USERS.instructor.name} initials="MC" color="#FF5630" time="9:02 AM">
        Welcome to {MOCK_COURSE.title}. Post general questions in this channel.
      </FigmaMessage>
    </HighlightWrap>
    <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="9:15 AM">
      Where should I submit an extension request?
    </FigmaMessage>
    {showFile && (
      <HighlightWrap active={highlight === "file-card"} label={label}>
        <FigmaFileCard name="Lab-3-Guide.pdf" size="312 KB" />
      </HighlightWrap>
    )}
    <HighlightWrap active={highlight === "composer"} label={label} className="mt-auto">
      <FigmaComposer />
    </HighlightWrap>
  </FigmaAppShell>
);

const CreateChannelModalScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <FigmaAppShell sidebar={{ activeChannel: "# general-q-and-a" }} overlay={<FigmaCreateChannelModal channelName="#announcements" highlightName={highlight === "channel-name-input"} />}>
    <FigmaChatHeader channel="# general-q-and-a" members={28} />
    <FigmaDatePill label="Today" />
    <FigmaMessage user={MOCK_USERS.instructor.name} initials="MC" color="#FF5630" time="9:02 AM">
      Setting up course channels for {MOCK_COURSE.code}.
    </FigmaMessage>
  </FigmaAppShell>
);

const RequestScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <FigmaAppShell sidebar={{ activeSection: "requests" }}>
    <div className="mb-1">
      <h3 className="text-[11px] font-bold text-[#172B4D]">Requests</h3>
      <p className="text-[8px] text-[#97A0AF]">2 Members</p>
    </div>
    <FigmaDatePill label="Today" />
    <HighlightWrap active={highlight === "request-btn"} label={label}>
      <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="9:16 AM">
        <FigmaExtensionCard
          assignment="Project Checkpoint 2"
          newDate="3/18/2026"
          originalDate="3/14/2026"
          reason="Need additional time to incorporate TA feedback."
          attachment="checkpoint-draft.pdf"
          mode="actions"
        />
      </FigmaMessage>
    </HighlightWrap>
    <div className="mx-auto mt-2 w-fit rounded-full border px-3 py-1 text-[8px] font-semibold" style={{ borderColor: TOKENS.border }}>
      + Create New Request
    </div>
  </FigmaAppShell>
);

const CanvasSettingsScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col bg-[#f5f5f5] font-sans text-[8px]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
    <div className="border-b bg-white px-3 py-2 font-bold text-[#172B4D]">Canvas · Course Settings · Navigation</div>
    <div className="grid flex-1 grid-cols-2 gap-2 p-2">
      <div className="rounded-lg border bg-white p-2" style={{ borderColor: TOKENS.border }}>
        <p className="mb-1 font-bold text-[#6B778C]">Hidden</p>
        {["Files", "Quizzes", "Ed Stream Chat"].map((item) => (
          <div key={item} className="mb-1 rounded border border-dashed px-2 py-1 text-[#97A0AF]" style={{ borderColor: TOKENS.border }}>
            {item}
          </div>
        ))}
      </div>
      <div className="rounded-lg border bg-white p-2" style={{ borderColor: TOKENS.border }}>
        <HighlightWrap active={highlight === "canvas-navigation-menu"} label={label}>
          <p className="mb-1 font-bold text-[#6B778C]">Enabled course navigation</p>
          {["Home", "Assignments", "Modules", "Grades"].map((item) => (
            <div key={item} className="mb-1 rounded border px-2 py-1 text-[#6B778C]" style={{ borderColor: TOKENS.border }}>
              {item}
            </div>
          ))}
          <HighlightWrap active={highlight === "canvas-edstream-link"} label={label}>
            <div className="mb-1 rounded border-2 px-2 py-1 font-bold" style={{ borderColor: TOKENS.orange, color: TOKENS.canvasActive, background: "#FFF7F5" }}>
              Ed Stream Chat
            </div>
          </HighlightWrap>
        </HighlightWrap>
        <HighlightWrap active={highlight === "save-btn"} label={label}>
          <button type="button" className="mt-2 w-full rounded-lg py-1.5 font-bold text-white" style={{ background: TOKENS.chatSidebar }}>
            Save
          </button>
        </HighlightWrap>
      </div>
    </div>
  </div>
);

const ThreadPanel = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "thread-panel" || highlight === "thread-composer"} label={label} className="h-full">
    <aside className="flex h-full w-[130px] flex-col border-l bg-white" style={{ borderColor: TOKENS.border }}>
      <div className="flex items-center justify-between border-b px-2.5 py-2" style={{ borderColor: TOKENS.border }}>
        <span className="text-[9px] font-bold text-[#172B4D]">Thread</span>
        <X className="h-3 w-3 text-[#97A0AF]" />
      </div>
      <div className="flex-1 p-2">
        <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="9:15 AM">
          Where should I submit an extension request?
        </FigmaMessage>
        <p className="mb-1 text-[7px] font-bold text-[#97A0AF]">1 reply</p>
        <FigmaMessage user={MOCK_USERS.instructor.name} initials="MC" color="#FF5630" time="9:18 AM">
          Open <FigmaTag>Requests</FigmaTag> in the left sidebar — not email.
        </FigmaMessage>
      </div>
      <div className="p-2">
        <FigmaComposer placeholder="Reply in thread..." />
      </div>
    </aside>
  </HighlightWrap>
);

const MessageReplyScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <FigmaAppShell sidebar={{ activeChannel: "# general-q-and-a" }}>
    <FigmaChatHeader channel="# general-q-and-a" members={28} />
    <div className="relative">
      <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="9:15 AM">
        Where should I submit an extension request?
      </FigmaMessage>
      <div className="absolute right-0 top-0 flex items-center gap-0.5 rounded-full border bg-white px-1 py-0.5 shadow-sm" style={{ borderColor: TOKENS.border }}>
        <HighlightWrap active={highlight === "reply-btn"} label={label}>
          <span className="flex h-4 w-4 items-center justify-center rounded bg-[#DEEBFF] text-[#0052CC]">
            <MessageSquareReply className="h-2.5 w-2.5" />
          </span>
        </HighlightWrap>
        <Pencil className="h-2.5 w-2.5 text-[#97A0AF]" />
        <Trash2 className="h-2.5 w-2.5 text-[#97A0AF]" />
      </div>
      <HighlightWrap active={highlight === "thread-indicator"} label={label}>
        <button type="button" className="text-[8px] font-semibold text-[#0052CC]">
          1 reply
        </button>
      </HighlightWrap>
    </div>
    <FigmaComposer />
  </FigmaAppShell>
);

const MessageThreadScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-[380px] font-sans" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
    <div className="min-w-0 flex-1 opacity-70">
      <FigmaAppShell sidebar={{ activeChannel: "# general-q-and-a" }}>
        <FigmaChatHeader channel="# general-q-and-a" members={28} />
        <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="9:15 AM">
          Where should I submit an extension request?
        </FigmaMessage>
        <FigmaComposer />
      </FigmaAppShell>
    </div>
    <ThreadPanel highlight={highlight} label={label} />
  </div>
);

const CanvasEnableScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full items-center justify-center bg-[#f5f5f5] p-3 font-sans" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
    <div className="w-full max-w-[280px] rounded-xl border bg-white p-3 shadow-lg" style={{ borderColor: TOKENS.border }}>
      <h3 className="mb-2 text-[10px] font-black text-[#172B4D]">Institution Admin · External Apps</h3>
      <HighlightWrap active={highlight === "canvas-edstream-link"} label={label}>
        <div className="flex items-center justify-between rounded-lg border px-3 py-2" style={{ borderColor: "#DEEBFF", background: "#F4F9FF" }}>
          <div>
            <div className="text-[9px] font-bold text-[#0052CC]">Ed Stream Chat</div>
            <div className="text-[7px] text-[#6B778C]">Canvas LTI · {MOCK_ORGANIZATIONS.institution}</div>
          </div>
          <span className="rounded-full px-2 py-0.5 text-[7px] font-bold text-[#00875A]" style={{ background: "#E3FCEF" }}>
            Enabled
          </span>
        </div>
      </HighlightWrap>
    </div>
  </div>
);

const sceneRenderers: Record<GuideScene, (props: { highlight: GuideHighlightId; label: string }) => ReactNode> = {
  "canvas-course-home": (props) => <CanvasCourseHomeScene {...props} />,
  "bottom-nav": (props) => <ChannelChatScene {...props} />,
  "channel-general": (props) => <ChannelChatScene {...props} />,
  "sidebar-overview": (props) => <ChannelChatScene {...props} highlight="sidebar" />,
  "channel-composer": (props) => <ChannelChatScene {...props} />,
  "create-channel": (props) => <CreateChannelModalScene {...props} />,
  "channels-created": (props) => (
    <ChannelChatScene {...props} channelName="#announcements" />
  ),
  "channel-details": (props) => <ChannelChatScene {...props} channelName="# project-lab" showDetails />,
  "channel-details-files": (props) => <ChannelChatScene {...props} channelName="# project-lab" showDetails filesTab />,
  "file-in-chat": (props) => <ChannelChatScene {...props} showFile />,
  "message-reply": (props) => <MessageReplyScene {...props} />,
  "message-thread": (props) => <MessageThreadScene {...props} />,
  "request-queue": (props) => <RequestScene {...props} />,
  "canvas-settings": (props) => <CanvasSettingsScene {...props} />,
  "canvas-enable": (props) => <CanvasEnableScene {...props} />,
};

const GuideMockup = ({ scene, highlight, highlightLabel }: GuideMockupProps) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-blue-100 bg-white shadow-xl">
    <MockupFrame>{sceneRenderers[scene]({ highlight, label: highlightLabel })}</MockupFrame>
  </div>
);

export default GuideMockup;
