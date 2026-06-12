import type { ReactNode } from "react";
import {
  Bold,
  Calendar,
  HelpCircle,
  Home,
  Inbox,
  Italic,
  LayoutDashboard,
  Link2,
  List,
  ListOrdered,
  MessageSquare,
  Paperclip,
  Plus,
  Search,
  Send,
  Smile,
  Strikethrough,
  User,
  Users,
  Video,
} from "lucide-react";
import {
  CANVAS_COURSE_LINKS,
  MOCK_CHANNELS,
  MOCK_COLORS,
  MOCK_COMMUNITIES,
  MOCK_COURSE,
  MOCK_DMS,
  MOCK_USERS,
  MOCK_WORKSPACE,
} from "./mockup-data";

export const MockAvatar = ({
  initials,
  online,
  size = "sm",
}: {
  initials: string;
  online?: boolean;
  size?: "xs" | "sm";
}) => (
  <span className="relative inline-flex flex-shrink-0">
    <span
      className={`flex items-center justify-center rounded-full bg-blue-100 font-black text-blue-700 ${
        size === "xs" ? "h-4 w-4 text-[6px]" : "h-5 w-5 text-[7px]"
      }`}
    >
      {initials}
    </span>
    {online && (
      <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full border border-white bg-green-500" />
    )}
  </span>
);

export const CanvasGlobalNav = () => (
  <nav
    className="flex w-[28px] flex-shrink-0 flex-col items-center gap-2 py-2 text-white"
    style={{ backgroundColor: MOCK_COLORS.globalNav }}
  >
    <User className="h-3 w-3 opacity-70" />
    <LayoutDashboard className="h-3 w-3 opacity-70" />
    <Home className="h-3 w-3 rounded bg-white/15 p-0.5" />
    <Calendar className="h-3 w-3 opacity-70" />
    <Inbox className="h-3 w-3 opacity-70" />
    <HelpCircle className="mt-auto h-3 w-3 opacity-70" />
  </nav>
);

export const CanvasCourseNav = ({
  activeLink = "Ed Stream Chat",
  highlight,
}: {
  activeLink?: string;
  highlight?: boolean;
}) => (
  <aside className="flex w-[72px] flex-shrink-0 flex-col border-r border-gray-200 bg-white py-2">
    <p className="mb-1.5 px-2 text-[6px] font-bold uppercase tracking-wide text-gray-400">{MOCK_COURSE.term}</p>
    {CANVAS_COURSE_LINKS.map((link) => {
      const isActive = link === activeLink;
      return (
        <div
          key={link}
          className={`mx-1.5 mb-0.5 px-1.5 py-1 text-[7px] leading-tight ${
            isActive
              ? `border-l-2 font-bold text-[${MOCK_COLORS.canvasLink}] ${highlight ? "border-[#0374B5] bg-orange-50 text-[#0374B5]" : "border-[#0374B5] font-bold text-[#0374B5]"}`
              : "text-gray-600"
          }`}
        >
          {link}
        </div>
      );
    })}
  </aside>
);

export const ChatTopBar = ({ compact = false }: { compact?: boolean }) => (
  <div
    className="flex flex-shrink-0 items-center px-2 text-white"
    style={{ backgroundColor: MOCK_COLORS.topBar, height: compact ? 28 : 32 }}
  >
    <div className="mx-auto flex h-5 w-full max-w-[55%] items-center rounded-full bg-white/10 px-2 text-[7px] text-blue-100">
      <Search className="mr-1 h-2.5 w-2.5 flex-shrink-0" />
      Search users, channels, messages...
    </div>
    <div className="ml-auto flex items-center gap-1 text-[7px]">
      <span className="hidden sm:inline">{MOCK_USERS.instructor.name}</span>
      <MockAvatar initials={MOCK_USERS.instructor.initials} online />
    </div>
  </div>
);

export const ChatSidebar = ({
  activeSection = "channels",
  activeChannel = MOCK_CHANNELS[1],
  channels = MOCK_CHANNELS,
  showRequests = false,
}: {
  activeSection?: "requests" | "channels";
  activeChannel?: string;
  channels?: readonly string[];
  showRequests?: boolean;
}) => (
  <aside
    className="flex w-[88px] flex-shrink-0 flex-col p-1.5 text-white"
    style={{ backgroundColor: MOCK_COLORS.chatSidebar }}
  >
    <div className="mb-2 flex items-center gap-1 text-[7px] font-bold">
      <Home className="h-2.5 w-2.5" />
      <span className="truncate">{MOCK_WORKSPACE}</span>
    </div>

    <div
      className={`mb-2 flex items-center gap-1 rounded-lg px-1.5 py-1 text-[7px] font-bold ${
        activeSection === "requests" || showRequests ? "bg-white/20" : "text-blue-100"
      }`}
    >
      <MessageSquare className="h-2.5 w-2.5" />
      Requests
    </div>

    <div className="mb-0.5 flex items-center justify-between text-[7px] font-bold">
      <span>Channels</span>
      <Plus className="h-2.5 w-2.5" />
    </div>
    {channels.map((channel) => (
      <div
        key={channel}
        className={`mb-0.5 truncate rounded px-1.5 py-0.5 text-[7px] ${
          channel === activeChannel ? "bg-white/20 font-bold" : "text-blue-100"
        }`}
      >
        {channel}
      </div>
    ))}

    <div className="mb-0.5 mt-2 text-[7px] font-bold">Messages</div>
    {MOCK_DMS.map((dm) => (
      <div key={dm.name} className="mb-0.5 flex items-center gap-1 truncate px-1 py-0.5 text-[7px]">
        <MockAvatar initials={dm.initials} online={dm.online} size="xs" />
        <span className="truncate text-blue-50">{dm.name}</span>
      </div>
    ))}
  </aside>
);

export const RichComposer = ({
  placeholder = "Enter your message here",
  compact = false,
}: {
  placeholder?: string;
  compact?: boolean;
}) => (
  <div className={`rounded-lg border border-gray-200 bg-white ${compact ? "p-1.5" : "p-2"}`}>
    <div className="mb-1 flex gap-1.5 text-gray-400">
      {[Bold, Italic, Strikethrough, Link2, List, ListOrdered].map((Icon, i) => (
        <Icon key={i} className="h-2.5 w-2.5" />
      ))}
    </div>
    <p className={`text-gray-400 ${compact ? "text-[7px]" : "text-[8px]"}`}>{placeholder}</p>
    <div className="mt-1 flex items-center gap-1.5 text-gray-400">
      <Plus className="h-2.5 w-2.5" />
      <span className="text-[7px] font-bold">Aa</span>
      <Smile className="h-2.5 w-2.5" />
      <span className="text-[7px]">@</span>
      <Video className="h-2.5 w-2.5" />
      <Paperclip className="h-2.5 w-2.5" />
      <Send className="ml-auto h-3 w-3 text-blue-600" />
    </div>
  </div>
);

export const ExtensionRequestCard = ({
  assignment = "Lab Report 3",
  reason = "Needs two extra days to review feedback on the draft.",
  status = "pending",
  highlight = false,
}: {
  assignment?: string;
  reason?: string;
  status?: "pending" | "approved";
  highlight?: boolean;
}) => (
  <div
    className={`rounded-xl border bg-white p-2.5 shadow-sm transition-all ${
      highlight ? "border-orange-300 ring-2 ring-orange-200" : "border-gray-200"
    }`}
  >
    <div className="mb-2 flex items-center gap-1.5">
      <MockAvatar initials={MOCK_USERS.student.initials} />
      <div>
        <div className="text-[8px] font-bold text-gray-800">{MOCK_USERS.student.name}</div>
        <div className="text-[6px] text-gray-400">Today · 9:16 AM</div>
      </div>
    </div>
    <h4 className="mb-2 text-[9px] font-black text-gray-800">Extension Request</h4>
    <div className="space-y-1 text-[7px]">
      <div className="flex justify-between gap-2">
        <span className="text-gray-500">Assignment</span>
        <span className="rounded-full bg-orange-50 px-1.5 py-0.5 font-bold text-orange-600">{assignment}</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="text-gray-500">New due date</span>
        <span className="font-bold text-gray-700">Mar 18, 2026</span>
      </div>
      <div className="flex justify-between gap-2">
        <span className="text-gray-500">Reason</span>
        <span className="text-right text-gray-600">{reason}</span>
      </div>
    </div>
    {status === "approved" ? (
      <div
        className="mt-2 rounded-full border px-2 py-1 text-center text-[7px] font-bold"
        style={{ borderColor: MOCK_COLORS.approve, color: MOCK_COLORS.approve, backgroundColor: MOCK_COLORS.approveSoft }}
      >
        Approved by {MOCK_USERS.instructor.name}
      </div>
    ) : (
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <button type="button" className="rounded-full border border-gray-300 py-1 text-[7px] font-bold text-gray-600">
          Decline
        </button>
        <button
          type="button"
          className="rounded-full border border-green-500 py-1 text-[7px] font-bold text-green-600"
        >
          Approve
        </button>
      </div>
    )}
  </div>
);

export const CreateRequestModal = ({ activeCategory = "Extension" }: { activeCategory?: string }) => {
  const categories = ["Grading", "Attendance", "Extension", "Accommodation", "Other"];
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-3">
      <div className="flex w-full max-w-[280px] overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="w-[72px] border-r border-gray-100 bg-gray-50 py-2">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`relative px-2 py-1.5 text-[7px] ${
                cat === activeCategory ? "bg-white font-bold text-gray-800" : "text-gray-500"
              }`}
            >
              {cat === activeCategory && (
                <span className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-orange-500" />
              )}
              {cat}
            </div>
          ))}
        </div>
        <div className="flex-1 p-2.5">
          <div className="mb-2 flex items-center justify-between text-[8px] font-black text-gray-800">
            Create Request
            <span className="text-gray-400">✕</span>
          </div>
          <div className="mb-2">
            <div className="mb-0.5 text-[6px] font-bold text-gray-500">Assignment</div>
            <div className="rounded border border-gray-200 px-2 py-1 text-[7px] text-gray-400">Select...</div>
          </div>
          <div className="mb-2">
            <div className="mb-0.5 text-[6px] font-bold text-gray-500">Reason for request</div>
            <div className="rounded border border-gray-200 px-2 py-3 text-[7px] text-gray-400">
              Describe the reason for this request
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-full border border-gray-300 py-1.5 text-[7px] font-bold text-gray-800"
          >
            + Create Request
          </button>
        </div>
      </div>
    </div>
  );
};

export const ChannelHeader = ({ channel, members }: { channel: string; members?: number }) => (
  <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-1.5">
    <div>
      <h3 className="text-[10px] font-black text-gray-800">{channel}</h3>
      <p className="text-[6px] text-gray-400">
        {MOCK_COURSE.title} · {members ?? MOCK_COURSE.memberCount} members
      </p>
    </div>
    <div className="flex gap-1 text-[7px] text-gray-400">
      <span>📌</span>
      <span className="rounded-full bg-blue-50 px-1 py-0.5 font-bold text-blue-600">i</span>
    </div>
  </div>
);

export const DateDivider = ({ label }: { label: string }) => (
  <div className="my-1.5 text-center text-[6px] font-bold text-gray-400">{label}</div>
);

export const MockupFourPane = ({
  children,
  activeSection,
  activeChannel,
  showRequests,
  overlay,
}: {
  children: ReactNode;
  activeSection?: "requests" | "channels";
  activeChannel?: string;
  showRequests?: boolean;
  overlay?: ReactNode;
}) => (
  <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
    <ChatTopBar compact />
    <div className="flex min-h-0 flex-1">
      <CanvasGlobalNav />
      <CanvasCourseNav />
      <ChatSidebar activeSection={activeSection} activeChannel={activeChannel} showRequests={showRequests} />
      <main className="relative min-w-0 flex-1 p-2" style={{ backgroundColor: MOCK_COLORS.mainBg }}>
        {children}
        {overlay}
      </main>
    </div>
  </div>
);

const DETAILS_TAB_CONTENT = {
  Photos: ["whiteboard-notes.jpg", "lab-setup.png", "group-poster.jpg"],
  Videos: ["sorting-demo.mp4", "office-hours-recap.mov"],
  Files: ["Syllabus-CS204.pdf", "Lab-3-Guide.docx", "Week-5-Slides.pdf"],
} as const;

export const ChannelDetailsPanel = ({ activeTab = "Files" }: { activeTab?: "Photos" | "Videos" | "Files" }) => (
  <aside className="flex h-full w-[72px] flex-shrink-0 flex-col border-l border-gray-200 bg-white p-1.5">
    <div className="mb-1.5 flex items-center justify-between text-[7px] font-bold text-gray-800">
      Channel Details
      <span className="text-gray-400">✕</span>
    </div>
    <p className="mb-1 text-[6px] text-gray-500">Shared in # project-lab</p>
    <div className="mb-1.5 flex gap-0.5">
      {(["Photos", "Videos", "Files"] as const).map((tab) => (
        <span
          key={tab}
          className={`rounded px-1 py-0.5 text-[6px] ${
            tab === activeTab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
    <div className="space-y-1">
      {activeTab === "Photos"
        ? DETAILS_TAB_CONTENT.Photos.map((item) => (
            <div key={item} className="h-6 rounded bg-gradient-to-br from-blue-50 to-slate-100 px-1 py-0.5 text-[5px] text-blue-600">
              {item}
            </div>
          ))
        : DETAILS_TAB_CONTENT[activeTab].map((item) => (
            <div key={item} className="rounded border border-gray-100 bg-gray-50 px-1 py-0.5 text-[6px] text-gray-600">
              {item}
            </div>
          ))}
    </div>
  </aside>
);

export const CommunitiesGrid = ({ activeIndex }: { activeIndex?: number }) => (
  <div className="grid grid-cols-2 gap-1.5">
    {MOCK_COMMUNITIES.map((community, index) => (
      <div
        key={community.name}
        className={`rounded-lg p-2 text-[7px] ${
          index === activeIndex ? "bg-orange-50 text-orange-700 ring-2 ring-orange-200" : "bg-white text-gray-600 shadow-sm"
        }`}
      >
        <Users className="mb-0.5 h-3 w-3" />
        <div className="font-bold">{community.name}</div>
        <div className="mt-0.5 text-[6px] font-normal text-gray-500">{community.members} members</div>
      </div>
    ))}
  </div>
);
