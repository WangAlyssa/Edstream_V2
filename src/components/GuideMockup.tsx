import type { ReactNode } from "react";
import {
  BookOpen,
  Calendar,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  Lock,
  MessageSquareReply,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import type { GuideHighlightId, GuideScene } from "@/content/guides";

type GuideMockupProps = {
  scene: GuideScene;
  highlight: GuideHighlightId;
  highlightLabel: string;
};

const INSTRUCTOR = "Dr. Morgan";
const STUDENT = "Alex Kim";
const TA_CONTACT = "Jamie Park";
const DEMO_CHANNELS = ["# General", "# Peer Mentors", "# Project Lab"] as const;
const PRIVATE_CHANNEL = "# Project Lab";

const MockupFrame = ({ children }: { children: ReactNode }) => (
  <div className="aspect-[16/10] w-full overflow-hidden">{children}</div>
);

const HighlightWrap = ({
  active,
  label,
  children,
  className = "",
  labelPosition = "below",
  rounded = "rounded-md",
}: {
  active: boolean;
  label: string;
  children: ReactNode;
  className?: string;
  labelPosition?: "below" | "right";
  rounded?: string;
}) => (
  <div className={`relative ${className}`}>
    {children}
    {active && (
      <>
        <div
          className={`demo-highlight-pulse pointer-events-none absolute inset-0 z-10 border-2 border-orange-500 bg-orange-500/10 ring-1 ring-orange-400/40 ${rounded}`}
        />
        <span
          className={`absolute z-20 rounded-lg bg-orange-500 px-2 py-1 text-center text-[9px] font-bold leading-tight text-white shadow-lg ${
            labelPosition === "right"
              ? "left-full top-1/2 ml-2 w-max max-w-[7rem] -translate-y-1/2"
              : "left-1/2 top-full mt-1.5 w-max max-w-[9rem] -translate-x-1/2"
          }`}
        >
          {label}
        </span>
      </>
    )}
  </div>
);

const Avatar = ({ label }: { label: string }) => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[8px] font-black text-blue-700">
    {label}
  </div>
);

const BottomNav = ({
  highlight,
  label,
  activeTab = "courses",
}: {
  highlight: GuideHighlightId;
  label: string;
  activeTab?: "courses" | "communities" | "dms";
}) => (
  <HighlightWrap active={highlight === "bottom-nav-all"} label={label} className="mt-auto">
    <div className="grid grid-cols-3 gap-0.5 bg-[#1a2258] p-1.5 text-[7px] text-blue-100">
      <HighlightWrap active={highlight === "bottom-nav-courses"} label={label}>
        <span
          className={`block rounded px-1 py-1.5 text-center ${
            activeTab === "courses" ? "bg-white/15" : "opacity-80"
          }`}
        >
          Courses
        </span>
      </HighlightWrap>
      <HighlightWrap active={highlight === "bottom-nav-communities"} label={label}>
        <span
          className={`block rounded px-1 py-1.5 text-center ${
            activeTab === "communities" ? "bg-white/15" : "opacity-80"
          }`}
        >
          Communities
        </span>
      </HighlightWrap>
      <HighlightWrap active={highlight === "bottom-nav-dms"} label={label}>
        <span
          className={`block rounded px-1 py-1.5 text-center ${
            activeTab === "dms" ? "bg-white/15" : "opacity-80"
          }`}
        >
          DMs
        </span>
      </HighlightWrap>
    </div>
  </HighlightWrap>
);

const AppTopBar = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-[10%] min-h-[28px] flex-shrink-0 items-center bg-[#2d3a8c] px-3 text-white">
    <div className="mr-2 h-3.5 w-3.5 rounded border border-white/50" />
    <HighlightWrap active={highlight === "search-bar"} label={label} className="mx-auto w-full max-w-[55%]">
      <div className="flex h-5 items-center rounded-full bg-[#1e2868]/60 px-3 text-[8px] text-blue-100">
        <Search className="mr-1.5 h-3 w-3 flex-shrink-0" />
        Search
      </div>
    </HighlightWrap>
  </div>
);

const Sidebar = ({
  activeChannel = "# General",
  channels = [...DEMO_CHANNELS],
  highlight,
  label,
  showBottomNav = true,
}: {
  activeChannel?: string;
  channels?: string[];
  highlight: GuideHighlightId;
  label: string;
  showBottomNav?: boolean;
}) => (
  <HighlightWrap active={highlight === "sidebar"} label={label} className="h-full">
    <aside className="relative flex h-full flex-col bg-[#2d3a8c] p-2 text-white">
      <HighlightWrap active={highlight === "channels-section"} label={label}>
        <div className="mb-1">
          <div className="mb-1.5 flex items-center justify-between text-[8px] font-bold">
            <span># Channels</span>
            <HighlightWrap active={highlight === "channel-plus"} label={label}>
              <Plus className="h-3 w-3" />
            </HighlightWrap>
          </div>
          {channels.map((channel) => (
            <HighlightWrap
              key={channel}
              active={
                highlight === "channel-general"
                  ? channel === "# General"
                  : highlight === "qa-channel"
                    ? channel === "#general-q-and-a"
                    : false
              }
              label={label}
            >
              <div
                className={`mb-0.5 flex items-center justify-between rounded px-1.5 py-1 text-[8px] ${
                  channel === activeChannel ? "bg-white/15" : "text-blue-100"
                }`}
              >
                <span>{channel}</span>
                {channel === PRIVATE_CHANNEL && <Lock className="h-2 w-2 text-blue-200" />}
              </div>
            </HighlightWrap>
          ))}
        </div>
      </HighlightWrap>

      <div className="mt-2 text-[8px] font-bold">Direct messages</div>
      <div className="mt-0.5 flex items-center gap-1 rounded bg-white/10 px-1.5 py-1 text-[8px]">
        <Avatar label="JP" />
        {TA_CONTACT}
      </div>

      {showBottomNav && <BottomNav highlight={highlight} label={label} />}
    </aside>
  </HighlightWrap>
);

const ChatComposer = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <HighlightWrap active={highlight === "composer"} label={label}>
    <div className="mt-auto flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5 text-[8px] text-gray-400">
      <Plus className="h-3 w-3 text-blue-600" />
      <span className="flex-1">Type your message here...</span>
      <span>☺</span>
    </div>
  </HighlightWrap>
);

const ChannelDetailsPanel = ({
  highlight,
  label,
  filesTab = false,
}: {
  highlight: GuideHighlightId;
  label: string;
  filesTab?: boolean;
}) => (
  <aside className="flex h-full flex-col border-l border-gray-200 bg-white p-2 text-[8px]">
    <div className="mb-2 flex items-center justify-between font-bold text-gray-800">
      Channel Details
      <X className="h-3 w-3 text-gray-400" />
    </div>
    <p className="mb-3 text-gray-600">Project discussion and lab updates.</p>
    <div className="mb-2 font-bold text-gray-700">Shared media</div>
    <div className="mb-1.5 flex gap-1">
      {(["Photos", "Videos", "Files"] as const).map((tab) => (
        <HighlightWrap key={tab} active={filesTab && tab === "Files" && highlight === "files-tab"} label={label}>
          <span
            className={`rounded px-1.5 py-0.5 text-[7px] ${
              filesTab && tab === "Files" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            {tab}
          </span>
        </HighlightWrap>
      ))}
    </div>
    <div className="space-y-1">
      {["Syllabus.docx", "Week-2-Handout.pdf"].map((file) => (
        <HighlightWrap key={file} active={highlight === "file-card"} label={label}>
          <div className="rounded border border-gray-100 bg-gray-50 px-1.5 py-1 text-[7px] text-gray-600">{file}</div>
        </HighlightWrap>
      ))}
    </div>
  </aside>
);

const ChannelChatScene = ({
  highlight,
  label,
  channelName = "# General",
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
  <div className="flex h-full flex-col">
    <AppTopBar highlight={highlight} label={label} />
    <div className={`grid min-h-0 flex-1 ${showDetails ? "grid-cols-[22%_1fr_26%]" : "grid-cols-[22%_1fr]"}`}>
      <Sidebar activeChannel={channelName} channels={channels} highlight={highlight} label={label} />
      <main className="flex min-h-0 flex-col p-2.5">
        <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-1.5">
          <div>
            <h3 className="text-xs font-black text-gray-800">{channelName}</h3>
            <p className="text-[7px] text-gray-400">Intro to Biology • 24 members</p>
          </div>
          <HighlightWrap active={highlight === "channel-details-info"} label={label}>
            <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[7px] font-bold text-blue-600">i</span>
          </HighlightWrap>
        </div>
        <div className="min-h-0 flex-1 space-y-1.5 overflow-hidden">
          <HighlightWrap active={highlight === "welcome-message-area"} label={label}>
            <div className="text-[8px] leading-relaxed text-gray-600">
              <span className="font-bold text-gray-800">{INSTRUCTOR}</span>
              <span className="ml-1 text-[7px] text-gray-400">9:02 AM</span>
              <p className="mt-0.5">Welcome! Use this channel for general course questions.</p>
            </div>
          </HighlightWrap>
          <div className="text-[8px] leading-relaxed text-gray-600">
            <span className="font-bold text-gray-800">{STUDENT}</span>
            <span className="ml-1 text-[7px] text-gray-400">9:15 AM</span>
            <p className="mt-0.5">Where should I submit an extension request?</p>
          </div>
          {showFile && (
            <HighlightWrap active={highlight === "file-card"} label={label}>
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[7px] shadow-sm">
                <span className="text-orange-500">📄</span>
                <span className="font-bold text-blue-700">Week-2-Handout.pdf</span>
              </div>
            </HighlightWrap>
          )}
        </div>
        <ChatComposer highlight={highlight} label={label} />
      </main>
      {showDetails && <ChannelDetailsPanel highlight={highlight} label={label} filesTab={filesTab} />}
    </div>
  </div>
);

const CanvasCourseHomeScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => {
  const courseLinks = [
    { name: "Home", active: true },
    { name: "EdStream", highlight: true },
    { name: "Announcements" },
    { name: "Assignments" },
    { name: "Modules" },
    { name: "Syllabus" },
    { name: "Grades" },
  ];

  return (
    <div className="flex h-full bg-[#f5f5f5]">
      <aside className="flex w-[5%] min-w-[28px] flex-col items-center gap-3 bg-[#394b58] py-3 text-white">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-white/15 text-[7px] font-black">SC</div>
        <LayoutDashboard className="h-3.5 w-3.5 opacity-80" />
        <BookOpen className="h-3.5 w-3.5 opacity-80" />
        <Calendar className="h-3.5 w-3.5 opacity-80" />
        <Inbox className="h-3.5 w-3.5 opacity-80" />
        <HelpCircle className="mt-auto h-3.5 w-3.5 opacity-80" />
      </aside>

      <aside className="w-[18%] border-r border-gray-200 bg-white py-3">
        <p className="mb-2 px-3 text-[7px] font-bold uppercase tracking-wide text-gray-400">Spring Term</p>
        {courseLinks.map((link) =>
          link.highlight ? (
            <HighlightWrap key={link.name} active={highlight === "canvas-edstream-link"} label={label} labelPosition="right">
              <div className="mx-2 rounded bg-orange-50 px-2 py-1.5 text-[8px] font-bold text-blue-700">{link.name}</div>
            </HighlightWrap>
          ) : (
            <div
              key={link.name}
              className={`mx-2 mb-0.5 flex items-center px-2 py-1 text-[8px] ${
                link.active ? "border-l-2 border-[#0374b5] font-bold text-[#0374b5]" : "text-gray-600"
              }`}
            >
              {link.name}
            </div>
          ),
        )}
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
          <span className="text-[10px] font-bold text-gray-800">BIO 101C</span>
          <span className="rounded border border-gray-200 px-2 py-0.5 text-[7px] text-gray-500">View as Student</span>
        </div>
        <div className="flex min-h-0 flex-1 p-4">
          <div className="flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-[#1a3a6b] via-[#2d4a7a] to-[#1a2f5c] p-4 text-white shadow-inner">
            <p className="text-[9px] font-bold text-orange-300">BIO 101</p>
            <h2 className="mt-1 text-sm font-black leading-tight">Intro to Biology</h2>
            <div className="mt-3 h-16 rounded bg-white/10" />
          </div>
          <aside className="ml-3 w-[28%] rounded-lg border border-gray-200 bg-white p-2 text-[7px] text-gray-600">
            <p className="mb-2 font-bold text-gray-800">Course status</p>
            <div className="mb-1 rounded border border-gray-100 px-2 py-1">Published</div>
            <div className="rounded border border-gray-100 px-2 py-1">New announcement</div>
          </aside>
        </div>
      </main>
    </div>
  );
};

const CreateChannelModal = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="relative flex h-full flex-col">
    <AppTopBar highlight={highlight} label={label} />
    <div className="relative grid min-h-0 flex-1 grid-cols-[22%_1fr]">
      <Sidebar highlight={highlight} label={label} />
      <main className="relative bg-gray-100/60">
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-4">
          <div className="w-full max-w-[45%] rounded-xl bg-white p-3 shadow-2xl">
            <div className="mb-2 flex items-center justify-between text-[9px] font-black text-gray-800">
              Create Channel
              <X className="h-3 w-3 text-gray-400" />
            </div>
            <HighlightWrap active={highlight === "channel-name-input"} label={label}>
              <div className="mb-2 rounded border-2 border-blue-200 bg-blue-50 px-2 py-1.5 text-[8px] font-bold text-blue-700">
                #announcements
              </div>
            </HighlightWrap>
            <button type="button" className="w-full rounded-lg bg-[#2d3a8c] py-1.5 text-[8px] font-bold text-white">
              Create
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const RequestCard = () => (
  <div className="w-full rounded-2xl border border-gray-200 bg-white p-3.5 shadow-xl">
    <div className="mb-2 inline-flex rounded-full bg-orange-100 px-2.5 py-0.5 text-[7px] font-bold text-orange-700">
      Extension request
    </div>
    <p className="mb-3 text-[8px] leading-snug text-gray-600">
      A student requests more time for Project Checkpoint 2.
    </p>
    <div className="grid grid-cols-2 gap-2">
      <button type="button" className="rounded-lg border border-gray-200 bg-white py-1.5 text-[8px] font-bold text-gray-500">
        Deny
      </button>
      <button type="button" className="rounded-lg bg-[#2d3a8c] py-1.5 text-[8px] font-bold text-white">
        Approve
      </button>
    </div>
  </div>
);

const RequestScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => {
  const isSubmitVariant = label === "Submit request";

  return (
    <div className="flex h-full flex-col">
      <AppTopBar highlight={highlight} label={label} />
      <div className="grid min-h-0 flex-1 grid-cols-[22%_1fr]">
        <Sidebar highlight={highlight} label={label} />
        <main className="flex flex-col items-center justify-center gap-2 p-4">
          {isSubmitVariant ? (
            <>
              <div className="w-full max-w-[52%]">
                <RequestCard />
              </div>
              <HighlightWrap active={highlight === "request-btn"} label={label} rounded="rounded-lg">
                <button
                  type="button"
                  className="rounded-lg bg-orange-500 px-5 py-1.5 text-[8px] font-bold text-white shadow-md"
                >
                  Submit request
                </button>
              </HighlightWrap>
            </>
          ) : (
            <div className="w-full max-w-[52%]">
              <HighlightWrap active={highlight === "request-btn"} label={label} rounded="rounded-2xl">
                <RequestCard />
              </HighlightWrap>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const CanvasSettingsScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col bg-gray-50">
    <div className="border-b border-gray-200 bg-white px-4 py-2 text-[9px] font-bold text-gray-700">
      Canvas · Course Settings · Navigation
    </div>
    <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 p-3">
      <div className="rounded-lg border border-gray-200 bg-white p-2">
        <div className="mb-1.5 text-[8px] font-bold text-gray-500">Hidden</div>
        {["Files", "Quizzes", "EdStream"].map((item) => (
          <div key={item} className="mb-1 rounded border border-dashed border-gray-200 px-2 py-1 text-[8px] text-gray-400">
            {item}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-2">
        <HighlightWrap active={highlight === "canvas-navigation-menu"} label={label}>
          <div className="mb-1.5 text-[8px] font-bold text-gray-500">Enabled course navigation</div>
          {["Home", "Announcements", "Modules", "Grades"].map((item) => (
            <div key={item} className="mb-1 rounded border border-gray-200 px-2 py-1 text-[8px] text-gray-600">
              {item}
            </div>
          ))}
          <HighlightWrap active={highlight === "canvas-edstream-link"} label={label}>
            <div className="mb-1 rounded border-2 border-orange-300 bg-orange-50 px-2 py-1 text-[8px] font-bold text-blue-700">
              EdStream
            </div>
          </HighlightWrap>
        </HighlightWrap>
        <HighlightWrap active={highlight === "save-btn"} label={label}>
          <button type="button" className="mt-2 w-full rounded-lg bg-[#2d3a8c] py-1.5 text-[8px] font-bold text-white">
            Save
          </button>
        </HighlightWrap>
      </div>
    </div>
  </div>
);

const ThreadPanel = ({
  highlight,
  label,
  threadTitle = STUDENT,
}: {
  highlight: GuideHighlightId;
  label: string;
  threadTitle?: string;
}) => (
  <HighlightWrap active={highlight === "thread-panel"} label={label} className="h-full">
    <aside className="flex h-full flex-col border-l border-gray-200 bg-white p-2 text-[8px]">
      <div className="mb-2 flex items-center justify-between font-bold text-gray-800">
        <span className="truncate">Message thread</span>
        <X className="h-3 w-3 flex-shrink-0 text-gray-400" />
      </div>
      <p className="mb-2 truncate text-[7px] font-bold text-gray-500">{threadTitle}</p>
      <div className="mb-2 rounded border border-gray-100 bg-gray-50 p-2 text-[7px] leading-relaxed text-gray-600">
        Where should I submit an extension request?
      </div>
      <p className="mb-1 text-[7px] font-bold text-gray-400">1 reply</p>
      <div className="mb-2 text-[7px] leading-relaxed text-gray-600">
        <span className="font-bold text-gray-800">{INSTRUCTOR}</span>
        <p className="mt-0.5">Use the Requests tab in the course menu — not email.</p>
      </div>
      <HighlightWrap active={highlight === "thread-composer"} label={label} className="mt-auto">
        <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5 text-[7px] text-gray-400">
          <Plus className="h-3 w-3 text-blue-600" />
          <span className="flex-1">Reply in thread...</span>
        </div>
      </HighlightWrap>
    </aside>
  </HighlightWrap>
);

const MessageReplyScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col">
    <AppTopBar highlight={highlight} label={label} />
    <div className="grid min-h-0 flex-1 grid-cols-[22%_1fr]">
      <Sidebar highlight={highlight} label={label} />
      <main className="flex min-h-0 flex-col p-2.5">
        <div className="mb-2 border-b border-gray-100 pb-1.5">
          <h3 className="text-xs font-black text-gray-800"># General</h3>
          <p className="text-[7px] text-gray-400">Intro to Biology · 24 members</p>
        </div>
        <div className="min-h-0 flex-1">
          <div className="relative pr-16">
            <div className="text-[8px] leading-relaxed text-gray-600">
              <span className="font-bold text-gray-800">{STUDENT}</span>
              <span className="ml-1 text-[7px] text-gray-400">9:15 AM</span>
              <p className="mt-0.5">Where should I submit an extension request?</p>
            </div>
            <div className="absolute right-0 top-0 flex items-center gap-0.5 rounded-full border border-gray-200 bg-white px-1 py-0.5 shadow-sm">
              <span className="px-0.5 text-[8px]">👍</span>
              <span className="px-0.5 text-[8px]">😊</span>
              <HighlightWrap active={highlight === "reply-btn"} label={label}>
                <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-50 text-blue-600">
                  <MessageSquareReply className="h-2.5 w-2.5" />
                </span>
              </HighlightWrap>
              <Pencil className="h-2.5 w-2.5 text-gray-400" />
              <Trash2 className="h-2.5 w-2.5 text-gray-400" />
            </div>
            <HighlightWrap active={highlight === "thread-indicator"} label={label}>
              <button type="button" className="mt-1 text-[7px] font-bold text-blue-600">
                1 reply
              </button>
            </HighlightWrap>
          </div>
        </div>
        <ChatComposer highlight={highlight} label={label} />
      </main>
    </div>
  </div>
);

const MessageThreadScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col">
    <AppTopBar highlight={highlight} label={label} />
    <div className="grid min-h-0 flex-1 grid-cols-[18%_1fr_28%]">
      <Sidebar highlight={highlight} label={label} />
      <main className="flex min-h-0 flex-col border-r border-gray-100 p-2 opacity-60">
        <div className="mb-2 text-xs font-black text-gray-800"># General</div>
        <div className="text-[8px] text-gray-500">{STUDENT}: Where should I submit an extension request?</div>
        <div className="mt-auto flex items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 py-1 text-[7px] text-gray-400">
          Type your message here...
        </div>
      </main>
      <ThreadPanel highlight={highlight} label={label} />
    </div>
  </div>
);

const CanvasEnableScene = ({ highlight, label }: { highlight: GuideHighlightId; label: string }) => (
  <div className="flex h-full flex-col bg-gray-50 p-3">
    <div className="rounded-lg border border-gray-200 bg-white p-3">
      <h3 className="mb-2 text-[10px] font-black text-gray-800">Institution Admin · External Apps</h3>
      <HighlightWrap active={highlight === "canvas-edstream-link"} label={label}>
        <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-3 py-2">
          <div>
            <div className="text-[9px] font-bold text-blue-700">EdStream</div>
            <div className="text-[7px] text-gray-500">Canvas LTI · Course communication</div>
          </div>
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[7px] font-bold text-green-700">Enabled</span>
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
      channels={["#announcements", "#general-q-and-a", "# Peer Mentors"]}
      channelName="#announcements"
    />
  ),
  "channel-details": (props) => <ChannelChatScene {...props} channelName={PRIVATE_CHANNEL} showDetails />,
  "channel-details-files": (props) => (
    <ChannelChatScene {...props} channelName={PRIVATE_CHANNEL} showDetails filesTab />
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
