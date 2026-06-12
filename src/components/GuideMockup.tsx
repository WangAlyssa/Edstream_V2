import type { ReactNode } from "react";
import { Lock, MessageSquareReply, Pencil, Plus, Trash2, X } from "lucide-react";
import type { GuideHighlightId, GuideScene } from "@/content/guides";
import {
  CANVAS_COURSE_LINKS,
  MOCK_CHANNELS,
  MOCK_COLORS,
  MOCK_COURSE,
  MOCK_DMS,
  MOCK_USERS,
  MOCK_WORKSPACE,
} from "@/components/mockup/mockup-data";
import {
  CanvasGlobalNav,
  ChannelDetailsPanel,
  ChannelHeader,
  DateDivider,
  ExtensionRequestCard,
  MockAvatar,
  RichComposer,
} from "@/components/mockup/MockupShell";

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

const GuideTopBar = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-[10%] min-h-[28px] flex-shrink-0 items-center px-2 text-white" style={{ backgroundColor: MOCK_COLORS.topBar }}>
    <HighlightWrap active={highlight === "search-bar"} label={label} className="mx-auto w-full max-w-[55%]">
      <div className="flex h-5 items-center rounded-full bg-white/10 px-2 text-[7px] text-blue-100">
        Search users, channels, messages...
      </div>
    </HighlightWrap>
    <div className="ml-auto flex items-center gap-1 text-[7px]">
      <span>{MOCK_USERS.instructor.name}</span>
      <MockAvatar initials={MOCK_USERS.instructor.initials} online size="xs" />
    </div>
  </div>
);

const GuideCanvasCourseNav = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <aside className="flex w-[18%] flex-shrink-0 flex-col border-r border-gray-200 bg-white py-2">
    <p className="mb-1 px-2 text-[6px] font-bold uppercase tracking-wide text-gray-400">{MOCK_COURSE.term}</p>
    {CANVAS_COURSE_LINKS.map((link) =>
      link === "Ed Stream Chat" ? (
        <HighlightWrap key={link} active={highlight === "canvas-edstream-link"} label={label} labelPosition="right">
          <div className="mx-1.5 rounded bg-orange-50 px-1.5 py-1 text-[7px] font-bold text-[#0374B5]">{link}</div>
        </HighlightWrap>
      ) : (
        <div
          key={link}
          className={`mx-1.5 mb-0.5 px-1.5 py-0.5 text-[7px] ${
            link === "Home" ? "border-l-2 border-[#0374B5] font-bold text-[#0374B5]" : "text-gray-600"
          }`}
        >
          {link}
        </div>
      ),
    )}
  </aside>
);

const GuideChatSidebar = ({
  highlight,
  label,
  activeChannel = MOCK_CHANNELS[1],
  channels = [...MOCK_CHANNELS],
}: {
  highlight: GuideHighlightId;
  label: string;
  activeChannel?: string;
  channels?: string[];
}) => (
  <HighlightWrap active={highlight === "sidebar"} label={label} className="h-full">
    <aside
      className="relative flex h-full w-[20%] flex-shrink-0 flex-col p-1.5 text-white"
      style={{ backgroundColor: MOCK_COLORS.chatSidebar }}
    >
      <div className="mb-1.5 flex items-center gap-1 text-[7px] font-bold">
        <span className="truncate">{MOCK_WORKSPACE}</span>
      </div>

      <HighlightWrap active={highlight === "request-btn"} label={label}>
        <div className="mb-1.5 flex items-center gap-1 rounded-lg bg-white/20 px-1.5 py-1 text-[7px] font-bold">
          Requests
        </div>
      </HighlightWrap>

      <HighlightWrap active={highlight === "channels-section"} label={label}>
        <div className="mb-0.5 flex items-center justify-between text-[7px] font-bold">
          <span>Channels</span>
          <HighlightWrap active={highlight === "channel-plus"} label={label}>
            <Plus className="h-2.5 w-2.5" />
          </HighlightWrap>
        </div>
        {channels.map((channel) => (
          <HighlightWrap
            key={channel}
            active={
              highlight === "channel-general"
                ? channel === "# general-q-and-a" || channel === "# General"
                : highlight === "qa-channel"
                  ? channel === "#general-q-and-a" || channel === "# general-q-and-a"
                  : false
            }
            label={label}
          >
            <div
              className={`mb-0.5 flex items-center justify-between rounded px-1.5 py-0.5 text-[7px] ${
                channel === activeChannel ? "bg-white/20 font-bold" : "text-blue-100"
              }`}
            >
              <span className="truncate">{channel}</span>
              {channel.includes("project") && <Lock className="h-2 w-2 text-blue-200" />}
            </div>
          </HighlightWrap>
        ))}
      </HighlightWrap>

      <div className="mt-1.5 text-[7px] font-bold">Messages</div>
      {MOCK_DMS.slice(0, 2).map((dm) => (
        <div key={dm.name} className="mb-0.5 flex items-center gap-1 px-1 py-0.5 text-[7px]">
          <MockAvatar initials={dm.initials} online={dm.online} size="xs" />
          <span className="truncate">{dm.name}</span>
        </div>
      ))}

      <HighlightWrap active={highlight === "bottom-nav-all"} label={label} className="mt-auto">
        <div className="grid grid-cols-3 gap-0.5 bg-[#334A72] p-1 text-[6px] text-blue-100">
          <HighlightWrap active={highlight === "bottom-nav-courses"} label={label}>
            <span className="block rounded bg-white/15 py-1 text-center">Courses</span>
          </HighlightWrap>
          <HighlightWrap active={highlight === "bottom-nav-communities"} label={label}>
            <span className="block rounded py-1 text-center">Communities</span>
          </HighlightWrap>
          <HighlightWrap active={highlight === "bottom-nav-dms"} label={label}>
            <span className="block rounded py-1 text-center">DMs</span>
          </HighlightWrap>
        </div>
      </HighlightWrap>
    </aside>
  </HighlightWrap>
);

const GuideShell = ({
  highlight,
  label,
  activeChannel,
  channels,
  showDetails = false,
  filesTab = false,
  overlay,
  children,
}: {
  highlight: GuideHighlightId;
  label: string;
  activeChannel?: string;
  channels?: string[];
  showDetails?: boolean;
  filesTab?: boolean;
  overlay?: ReactNode;
  children: ReactNode;
}) => (
  <div className="flex h-full flex-col">
    <GuideTopBar highlight={highlight} label={label} />
    <div className={`grid min-h-0 flex-1 ${showDetails ? "grid-cols-[5%_18%_20%_1fr_22%]" : "grid-cols-[5%_18%_20%_1fr]"}`}>
      <CanvasGlobalNav />
      <GuideCanvasCourseNav highlight={highlight} label={label} />
      <GuideChatSidebar highlight={highlight} label={label} activeChannel={activeChannel} channels={channels} />
      <main className="relative flex min-h-0 flex-col p-2" style={{ backgroundColor: MOCK_COLORS.mainBg }}>
        {children}
        {overlay}
      </main>
      {showDetails && (
        <HighlightWrap active={highlight === "files-tab" || highlight === "channel-details-info"} label={label} className="h-full">
          <ChannelDetailsPanel activeTab={filesTab ? "Files" : "Photos"} />
        </HighlightWrap>
      )}
    </div>
  </div>
);

const CanvasCourseHomeScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full bg-[#f5f5f5]">
    <CanvasGlobalNav />
    <GuideCanvasCourseNav highlight={highlight} label={label} />
    <main className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-1.5">
        <span className="text-[9px] font-bold text-gray-800">{MOCK_COURSE.code}</span>
        <span className="rounded border border-gray-200 px-1.5 py-0.5 text-[6px] text-gray-500">View as Student</span>
      </div>
      <div className="flex min-h-0 flex-1 p-3">
        <div className="flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-[#1a3a6b] via-[#2d4a7a] to-[#1a2f5c] p-3 text-white">
          <p className="text-[8px] font-bold text-orange-300">{MOCK_COURSE.code}</p>
          <h2 className="mt-0.5 text-xs font-black">{MOCK_COURSE.title}</h2>
          <div className="mt-2 h-12 rounded bg-white/10" />
        </div>
        <aside className="ml-2 w-[26%] rounded-lg border border-gray-200 bg-white p-2 text-[6px] text-gray-600">
          <p className="mb-1 font-bold text-gray-800">Course status</p>
          <div className="mb-1 rounded border border-gray-100 px-1.5 py-0.5">Published</div>
          <div className="rounded border border-gray-100 px-1.5 py-0.5">New announcement</div>
        </aside>
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
  <GuideShell
    highlight={highlight}
    label={label}
    activeChannel={channelName}
    channels={channels}
    showDetails={showDetails}
    filesTab={filesTab}
  >
    <ChannelHeader channel={channelName} />
    <DateDivider label="Mar 1, 2026" />
    <HighlightWrap active={highlight === "welcome-message-area"} label={label}>
      <div className="mb-1.5 text-[8px] leading-relaxed text-gray-600">
        <span className="font-bold text-gray-800">{MOCK_USERS.instructor.name}</span>
        <span className="ml-1 text-[6px] text-gray-400">9:02 AM</span>
        <p className="mt-0.5">Welcome to {MOCK_COURSE.title}. Post general questions in this channel.</p>
      </div>
    </HighlightWrap>
    <div className="mb-1.5 text-[8px] leading-relaxed text-gray-600">
      <span className="font-bold text-gray-800">{MOCK_USERS.student.name}</span>
      <span className="ml-1 text-[6px] text-gray-400">9:15 AM</span>
      <p className="mt-0.5">Where should I submit an extension request?</p>
    </div>
    {showFile && (
      <HighlightWrap active={highlight === "file-card"} label={label}>
        <div className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-1.5 py-1 text-[7px] shadow-sm">
          <span className="text-orange-500">📄</span>
          <span className="font-bold text-blue-700">Lab-3-Guide.pdf</span>
        </div>
      </HighlightWrap>
    )}
    <div className="mt-auto">
      <HighlightWrap active={highlight === "composer"} label={label}>
        <RichComposer compact />
      </HighlightWrap>
    </div>
  </GuideShell>
);

const CreateChannelModal = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <GuideShell
    highlight={highlight}
    label={label}
    overlay={
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/25 p-3">
        <div className="w-full max-w-[55%] rounded-xl bg-white p-2.5 shadow-2xl">
          <div className="mb-1.5 flex items-center justify-between text-[8px] font-black text-gray-800">
            Create Channel
            <X className="h-3 w-3 text-gray-400" />
          </div>
          <HighlightWrap active={highlight === "channel-name-input"} label={label}>
            <div className="mb-2 rounded border-2 border-blue-200 bg-blue-50 px-2 py-1 text-[7px] font-bold text-blue-700">
              #announcements
            </div>
          </HighlightWrap>
          <button type="button" className="w-full rounded-full py-1 text-[7px] font-bold text-white" style={{ backgroundColor: MOCK_COLORS.chatSidebar }}>
            Create
          </button>
        </div>
      </div>
    }
  >
    <ChannelHeader channel="# general-q-and-a" />
    <DateDivider label="Today" />
    <div className="text-[7px] text-gray-500">Background channel view while creating a new space.</div>
  </GuideShell>
);

const RequestScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <GuideShell highlight={highlight} label={label}>
    <ChannelHeader channel="Requests" members={2} />
    <DateDivider label="Today" />
    <HighlightWrap active={highlight === "request-btn"} label={label} className="mx-auto max-w-[70%]">
      <ExtensionRequestCard assignment="Project Checkpoint 2" />
    </HighlightWrap>
    <div className="mx-auto mt-2 w-fit rounded-full border border-gray-300 px-2 py-0.5 text-[7px] font-bold text-gray-600">
      + Create New Request
    </div>
  </GuideShell>
);

const CanvasSettingsScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col bg-gray-50">
    <div className="border-b border-gray-200 bg-white px-3 py-1.5 text-[8px] font-bold text-gray-700">
      Canvas · Course Settings · Navigation
    </div>
    <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 p-2">
      <div className="rounded-lg border border-gray-200 bg-white p-2">
        <div className="mb-1 text-[7px] font-bold text-gray-500">Hidden</div>
        {["Files", "Quizzes", "Ed Stream Chat"].map((item) => (
          <div key={item} className="mb-1 rounded border border-dashed border-gray-200 px-1.5 py-0.5 text-[7px] text-gray-400">
            {item}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-2">
        <HighlightWrap active={highlight === "canvas-navigation-menu"} label={label}>
          <div className="mb-1 text-[7px] font-bold text-gray-500">Enabled course navigation</div>
          {["Home", "Assignments", "Modules", "Grades"].map((item) => (
            <div key={item} className="mb-1 rounded border border-gray-200 px-1.5 py-0.5 text-[7px] text-gray-600">
              {item}
            </div>
          ))}
          <HighlightWrap active={highlight === "canvas-edstream-link"} label={label}>
            <div className="mb-1 rounded border-2 border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[7px] font-bold text-[#0374B5]">
              Ed Stream Chat
            </div>
          </HighlightWrap>
        </HighlightWrap>
        <HighlightWrap active={highlight === "save-btn"} label={label}>
          <button type="button" className="mt-1.5 w-full rounded-lg py-1 text-[7px] font-bold text-white" style={{ backgroundColor: MOCK_COLORS.chatSidebar }}>
            Save
          </button>
        </HighlightWrap>
      </div>
    </div>
  </div>
);

const ThreadPanel = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "thread-panel"} label={label} className="h-full">
    <aside className="flex h-full flex-col border-l border-gray-200 bg-white p-1.5 text-[7px]">
      <div className="mb-1 flex items-center justify-between font-bold text-gray-800">
        Thread
        <X className="h-2.5 w-2.5 text-gray-400" />
      </div>
      <div className="mb-1.5 rounded border border-gray-100 bg-gray-50 p-1.5 text-gray-600">
        <span className="font-bold text-gray-800">{MOCK_USERS.student.name}</span>
        <p className="mt-0.5">Where should I submit an extension request?</p>
      </div>
      <p className="mb-1 font-bold text-gray-400">1 reply</p>
      <div className="mb-1.5 text-gray-600">
        <span className="font-bold text-gray-800">{MOCK_USERS.instructor.name}</span>
        <p className="mt-0.5">Open Requests in the left sidebar — not email.</p>
      </div>
      <HighlightWrap active={highlight === "thread-composer"} label={label} className="mt-auto">
        <RichComposer placeholder="Reply in thread..." compact />
      </HighlightWrap>
    </aside>
  </HighlightWrap>
);

const MessageReplyScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <GuideShell highlight={highlight} label={label}>
    <ChannelHeader channel="# general-q-and-a" />
    <div className="relative pr-14">
      <div className="text-[8px] leading-relaxed text-gray-600">
        <span className="font-bold text-gray-800">{MOCK_USERS.student.name}</span>
        <span className="ml-1 text-[6px] text-gray-400">9:15 AM</span>
        <p className="mt-0.5">Where should I submit an extension request?</p>
      </div>
      <div className="absolute right-0 top-0 flex items-center gap-0.5 rounded-full border border-gray-200 bg-white px-1 py-0.5 shadow-sm">
        <HighlightWrap active={highlight === "reply-btn"} label={label}>
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-blue-50 text-blue-600">
            <MessageSquareReply className="h-2 w-2" />
          </span>
        </HighlightWrap>
        <Pencil className="h-2 w-2 text-gray-400" />
        <Trash2 className="h-2 w-2 text-gray-400" />
      </div>
      <HighlightWrap active={highlight === "thread-indicator"} label={label}>
        <button type="button" className="mt-0.5 text-[7px] font-bold text-blue-600">
          1 reply
        </button>
      </HighlightWrap>
    </div>
    <div className="mt-auto">
      <RichComposer compact />
    </div>
  </GuideShell>
);

const MessageThreadScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col">
    <GuideTopBar highlight={highlight} label={label} />
    <div className="grid min-h-0 flex-1 grid-cols-[5%_14%_16%_1fr_24%]">
      <CanvasGlobalNav />
      <GuideCanvasCourseNav highlight={highlight} label={label} />
      <GuideChatSidebar highlight={highlight} label={label} />
      <main className="flex min-h-0 flex-col border-r border-gray-100 p-1.5 opacity-60" style={{ backgroundColor: MOCK_COLORS.mainBg }}>
        <div className="text-[8px] font-black text-gray-800"># general-q-and-a</div>
        <div className="text-[7px] text-gray-500">{MOCK_USERS.student.name}: Where should I submit an extension request?</div>
        <div className="mt-auto">
          <RichComposer compact />
        </div>
      </main>
      <ThreadPanel highlight={highlight} label={label} />
    </div>
  </div>
);

const CanvasEnableScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col bg-gray-50 p-2">
    <div className="rounded-lg border border-gray-200 bg-white p-2">
      <h3 className="mb-1.5 text-[9px] font-black text-gray-800">Institution Admin · External Apps</h3>
      <HighlightWrap active={highlight === "canvas-edstream-link"} label={label}>
        <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-2 py-1.5">
          <div>
            <div className="text-[8px] font-bold text-blue-700">Ed Stream Chat</div>
            <div className="text-[6px] text-gray-500">Canvas LTI · Course communication</div>
          </div>
          <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-[6px] font-bold text-green-700">Enabled</span>
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
  "create-channel": (props) => <CreateChannelModal {...props} />,
  "channels-created": (props) => (
    <ChannelChatScene
      {...props}
      channels={["#announcements", "# general-q-and-a", "# peer-mentors"]}
      channelName="#announcements"
    />
  ),
  "channel-details": (props) => <ChannelChatScene {...props} channelName="# project-lab" showDetails />,
  "channel-details-files": (props) => (
    <ChannelChatScene {...props} channelName="# project-lab" showDetails filesTab />
  ),
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
