import type { CSSProperties, ReactNode } from "react";
import {
  Bold,
  ChevronDown,
  Code,
  Hash,
  Home,
  Info,
  Italic,
  Link2,
  List,
  ListOrdered,
  MessageSquare,
  Mic,
  Paperclip,
  Pin,
  Plus,
  Quote,
  Search,
  Send,
  Smile,
  SquarePen,
  Strikethrough,
  Video,
  X,
} from "lucide-react";
import { FIGMA, FIGMA_CHANNELS } from "./figma-tokens";
import { MOCK_COURSE, MOCK_DMS, MOCK_USERS, MOCK_WORKSPACE } from "./mockup-data";

/* ─── Primitives ─── */

export const UserAvatar = ({
  initials,
  color = "#5E6AD2",
  online,
  size = 28,
}: {
  initials: string;
  color?: string;
  online?: boolean;
  size?: number;
}) => (
  <span className="relative inline-flex flex-shrink-0" style={{ width: size, height: size }}>
    <span
      className="flex h-full w-full items-center justify-center rounded-full text-white"
      style={{ backgroundColor: color, fontSize: size * 0.38, fontWeight: 700 }}
    >
      {initials}
    </span>
    {online && (
      <span
        className="absolute rounded-full border-2 border-white bg-[#36B37E]"
        style={{ width: size * 0.32, height: size * 0.32, bottom: -1, right: -1 }}
      />
    )}
  </span>
);

const AVATAR_COLORS: Record<string, string> = {
  MC: "#FF5630",
  EB: "#6554C0",
  SP: "#00B8D9",
  LF: "#FF991F",
  VS: "#36B37E",
};

/* ─── Workspace strip (UF / org icons) ─── */

const WorkspaceStrip = () => (
  <div className="flex w-[42px] flex-shrink-0 flex-col items-center gap-2 py-3" style={{ background: FIGMA.workspaceStrip }}>
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5630] text-[9px] font-black text-white">
      NW
    </div>
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#36B37E] text-[9px] font-black text-white">
      HL
    </div>
  </div>
);

/* ─── Canvas global nav ─── */

const GLOBAL_ITEMS = [
  { label: "Account", active: false },
  { label: "Dashboard", active: false },
  { label: "Courses", active: true },
  { label: "Calendar", active: false },
  { label: "Inbox", active: false },
  { label: "History", active: false },
  { label: "Help", active: false },
  { label: "Campus\nResources", active: false },
];

const CanvasGlobalNav = () => (
  <nav
    className="flex w-[52px] flex-shrink-0 flex-col items-center gap-1 border-r border-white/5 py-2"
    style={{ background: FIGMA.globalNav }}
  >
    {GLOBAL_ITEMS.map((item) => (
      <div
        key={item.label}
        className="flex w-full flex-col items-center px-0.5 py-1 text-center"
        style={{
          background: item.active ? "rgba(255,255,255,0.12)" : "transparent",
          borderRadius: 4,
        }}
      >
        <div className="mb-0.5 h-4 w-4 rounded bg-white/20" />
        <span className="whitespace-pre-line text-[6px] leading-tight text-white/80">{item.label}</span>
      </div>
    ))}
  </nav>
);

/* ─── Canvas course nav ─── */

const COURSE_LINKS = [
  "Home",
  "Ed Stream Chat",
  "Assignments",
  "Discussions",
  "Grades",
  "People",
  "Syllabus",
  "Collaborations",
];

const CanvasCourseNav = () => (
  <aside className="flex w-[108px] flex-shrink-0 flex-col border-r py-2" style={{ background: FIGMA.courseNav, borderColor: FIGMA.border }}>
    <p className="mb-1 px-2.5 text-[7px] font-semibold uppercase tracking-wide" style={{ color: FIGMA.textLight }}>
      {MOCK_COURSE.term}
    </p>
    {COURSE_LINKS.map((link) => {
      const active = link === "Ed Stream Chat";
      return (
        <div
          key={link}
          className="mx-1.5 mb-0.5 px-2 py-[5px] text-[8px] leading-tight"
          style={{
            color: active ? FIGMA.canvasActive : FIGMA.textMuted,
            fontWeight: active ? 700 : 400,
            borderLeft: active ? `3px solid ${FIGMA.canvasActive}` : "3px solid transparent",
            background: active ? "#FFF7F5" : "transparent",
          }}
        >
          {link}
        </div>
      );
    })}
  </aside>
);

/* ─── Top bar ─── */

const FigmaTopBar = () => (
  <div className="flex h-[38px] flex-shrink-0 items-center px-3" style={{ background: FIGMA.topBar }}>
    <div
      className="mx-auto flex h-[26px] w-[min(100%,340px)] items-center rounded-full px-3"
      style={{ background: FIGMA.searchBg }}
    >
      <Search className="mr-2 h-3 w-3 flex-shrink-0 text-white/50" strokeWidth={2} />
      <span className="text-[9px] text-white/55">Search users, channels, messages...</span>
    </div>
    <div className="ml-3 flex flex-shrink-0 items-center gap-1.5">
      <span className="text-[9px] text-white/90">{MOCK_USERS.instructor.name}</span>
      <UserAvatar initials={MOCK_USERS.instructor.initials} color={AVATAR_COLORS.MC} online size={24} />
    </div>
  </div>
);

/* ─── Chat sidebar ─── */

type SidebarProps = {
  activeSection?: "requests" | "channels";
  activeChannel?: string;
  highlightChannelPlus?: boolean;
  demoTargetPlus?: string;
};

const FigmaChatSidebar = ({ activeSection = "channels", activeChannel = "# general-q-and-a", highlightChannelPlus, demoTargetPlus }: SidebarProps) => (
  <aside className="flex w-[148px] flex-shrink-0 flex-col py-2.5 px-2 text-white" style={{ background: FIGMA.chatSidebar }}>
    <div className="mb-2.5 flex items-center gap-1 text-[9px] font-bold">
      <Home className="h-3 w-3 opacity-90" strokeWidth={2.5} />
      <span className="truncate">{MOCK_WORKSPACE}</span>
    </div>

    <div
      className="mb-2 flex items-center gap-1.5 rounded-md px-2 py-[6px] text-[9px] font-semibold"
      style={{ background: activeSection === "requests" ? FIGMA.chatActivePill : "transparent" }}
    >
      <MessageSquare className="h-3 w-3" strokeWidth={2} />
      Requests
    </div>

    <div className="mb-1 flex items-center justify-between text-[8px] font-bold uppercase tracking-wide opacity-90">
      <span className="flex items-center gap-0.5">
        Channels
        <ChevronDown className="h-2.5 w-2.5" />
      </span>
      <span
        className="rounded p-0.5 transition-all"
        style={{ background: highlightChannelPlus ? "rgba(255,255,255,0.25)" : "transparent" }}
        data-demo-target={demoTargetPlus}
      >
        <SquarePen className="h-3 w-3" strokeWidth={2} />
      </span>
    </div>

    {FIGMA_CHANNELS.map((ch) => (
      <div
        key={ch.name}
        className="mb-0.5 flex items-center justify-between truncate rounded px-2 py-[5px] text-[8px]"
        style={{
          background: ch.name === activeChannel ? FIGMA.chatActivePill : "transparent",
          fontWeight: ch.name === activeChannel ? 600 : 400,
        }}
      >
        <span className="truncate">{ch.name}</span>
        {ch.locked && <span className="text-[7px] opacity-60">🔒</span>}
      </div>
    ))}

    <div className="mb-1 mt-2.5 flex items-center gap-0.5 text-[8px] font-bold uppercase tracking-wide opacity-90">
      Messages
      <ChevronDown className="h-2.5 w-2.5" />
    </div>

    {MOCK_DMS.map((dm) => (
      <div key={dm.name} className="mb-0.5 flex items-center gap-1.5 truncate px-1 py-[4px] text-[8px]">
        <UserAvatar initials={dm.initials} color={AVATAR_COLORS[dm.initials] ?? "#5E6AD2"} online={dm.online} size={18} />
        <span className="truncate opacity-95">{dm.name}</span>
      </div>
    ))}
  </aside>
);

/* ─── Message composer (full Figma fidelity) ─── */

export const FigmaComposer = ({ placeholder = "Enter your message here" }: { placeholder?: string }) => (
  <div className="mt-auto rounded-lg border bg-white" style={{ borderColor: FIGMA.border }}>
    <div className="flex items-center gap-2 border-b px-2.5 py-1.5" style={{ borderColor: FIGMA.border }}>
      {[Bold, Italic, Strikethrough, Link2, List, ListOrdered, Code, Quote].map((Icon, i) => (
        <Icon key={i} className="h-3 w-3" style={{ color: FIGMA.textLight }} strokeWidth={2} />
      ))}
    </div>
    <div className="px-2.5 py-2 text-[9px]" style={{ color: FIGMA.textLight, minHeight: 28 }}>
      {placeholder}
    </div>
    <div className="flex items-center gap-2 border-t px-2.5 py-1.5" style={{ borderColor: FIGMA.border }}>
      <Plus className="h-3 w-3" style={{ color: FIGMA.textMuted }} strokeWidth={2} />
      <span className="text-[8px] font-bold" style={{ color: FIGMA.textMuted }}>
        Aa
      </span>
      <Smile className="h-3 w-3" style={{ color: FIGMA.textMuted }} strokeWidth={2} />
      <span className="text-[9px] font-bold" style={{ color: FIGMA.textMuted }}>
        @
      </span>
      <Video className="h-3 w-3" style={{ color: FIGMA.textMuted }} strokeWidth={2} />
      <Mic className="h-3 w-3" style={{ color: FIGMA.textMuted }} strokeWidth={2} />
      <Paperclip className="h-3 w-3" style={{ color: FIGMA.textMuted }} strokeWidth={2} />
      <div className="ml-auto flex items-center gap-0.5">
        <Send className="h-3.5 w-3.5" style={{ color: FIGMA.textLight }} strokeWidth={2} />
        <ChevronDown className="h-2.5 w-2.5" style={{ color: FIGMA.textLight }} />
      </div>
    </div>
  </div>
);

/* ─── Chat messages ─── */

export const FigmaDatePill = ({ label }: { label: string }) => (
  <div className="my-2 flex justify-center">
    <span
      className="rounded-full px-2.5 py-0.5 text-[8px] font-medium"
      style={{ background: FIGMA.card, color: FIGMA.textMuted }}
    >
      {label}
    </span>
  </div>
);

export const FigmaChatHeader = ({ channel, members }: { channel: string; members: number }) => (
  <div className="flex items-start justify-between border-b pb-2" style={{ borderColor: FIGMA.border }}>
    <div>
      <h3 className="text-[11px] font-bold" style={{ color: FIGMA.text }}>
        {channel}
      </h3>
      <p className="text-[8px]" style={{ color: FIGMA.textLight }}>
        {members} Members
      </p>
    </div>
    <div className="flex items-center gap-2">
      <Pin className="h-3 w-3" style={{ color: FIGMA.textLight }} strokeWidth={2} />
      <Info className="h-3 w-3" style={{ color: FIGMA.textLight }} strokeWidth={2} />
    </div>
  </div>
);

export const FigmaMessage = ({
  user,
  initials,
  color,
  time,
  children,
  replyCount,
  reactions,
}: {
  user: string;
  initials: string;
  color: string;
  time: string;
  children: ReactNode;
  replyCount?: number;
  reactions?: string[];
}) => (
  <div className="mb-2.5 flex gap-2">
    <UserAvatar initials={initials} color={color} size={26} />
    <div className="min-w-0 flex-1">
      <div className="flex items-baseline gap-1.5">
        <span className="text-[9px] font-bold" style={{ color: FIGMA.text }}>
          {user}
        </span>
        <span className="text-[7px]" style={{ color: FIGMA.textLight }}>
          {time}
        </span>
      </div>
      <div className="text-[9px] leading-relaxed" style={{ color: FIGMA.textMuted }}>
        {children}
      </div>
      {reactions && reactions.length > 0 && (
        <div className="mt-1 flex gap-1">
          {reactions.map((r) => (
            <span key={r} className="rounded-full border px-1.5 py-0.5 text-[8px]" style={{ borderColor: FIGMA.border }}>
              {r}
            </span>
          ))}
        </div>
      )}
      {replyCount !== undefined && (
        <button type="button" className="mt-1 text-[8px] font-semibold" style={{ color: FIGMA.canvasActive }}>
          {replyCount} reply
        </button>
      )}
    </div>
  </div>
);

export const FigmaSystemMessage = ({ text }: { text: string }) => (
  <p className="my-1.5 text-center text-[8px]" style={{ color: FIGMA.textLight }}>
    {text}
  </p>
);

export const FigmaTag = ({ children, variant = "orange" }: { children: ReactNode; variant?: "orange" | "blue" }) => (
  <span
    className="mx-0.5 inline rounded px-1 py-px text-[8px] font-medium"
    style={{
      background: variant === "orange" ? FIGMA.orangeTag : FIGMA.blueTag,
      color: variant === "orange" ? FIGMA.orange : FIGMA.blueTagText,
    }}
  >
    {children}
  </span>
);

/* ─── Extension request card (Figma-accurate) ─── */

export const FigmaExtensionCard = ({
  assignment,
  newDate,
  originalDate,
  reason,
  attachment,
  mode = "actions",
  highlight,
}: {
  assignment: string;
  newDate: string;
  originalDate: string;
  reason: string;
  attachment?: string;
  mode?: "actions" | "pending" | "approved";
  highlight?: boolean;
}) => (
  <div
    className="rounded-lg border p-2.5 transition-all"
    style={{
      background: FIGMA.card,
      borderColor: highlight ? FIGMA.orange : FIGMA.border,
      boxShadow: highlight ? "0 0 0 2px rgba(232,93,76,0.2)" : "none",
    }}
  >
    <p className="mb-2 text-[10px] font-bold" style={{ color: FIGMA.text }}>
      Extension Request
    </p>
    <div className="space-y-1 text-[8px]">
      <Row label="Assignment">
        <FigmaTag>{assignment}</FigmaTag>
      </Row>
      <Row label="New due date">
        <span style={{ color: FIGMA.text }}>{newDate}</span>
      </Row>
      <Row label="Original due date">
        <span style={{ color: FIGMA.textMuted }}>{originalDate}</span>
      </Row>
      <Row label="Reason">
        <span style={{ color: FIGMA.textMuted }}>{reason}</span>
      </Row>
      {attachment && (
        <Row label="Attached file">
          <span className="font-medium" style={{ color: FIGMA.orange }}>
            {attachment}
          </span>
        </Row>
      )}
    </div>
    {mode === "actions" && (
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <button type="button" className="rounded-full border bg-white py-1 text-[8px] font-semibold" style={{ borderColor: FIGMA.text, color: FIGMA.text }}>
          Decline
        </button>
        <button type="button" className="rounded-full border bg-white py-1 text-[8px] font-semibold" style={{ borderColor: FIGMA.green, color: FIGMA.green }}>
          Approve
        </button>
      </div>
    )}
    {mode === "pending" && (
      <div className="mt-2.5 rounded-full border bg-white py-1 text-center text-[8px] font-medium" style={{ borderColor: FIGMA.border, color: FIGMA.textMuted }}>
        Pending approval
      </div>
    )}
    {mode === "approved" && (
      <div className="mt-2.5 rounded-full border py-1 text-center text-[8px] font-semibold" style={{ borderColor: FIGMA.green, color: FIGMA.green, background: FIGMA.greenSoft }}>
        Approved by {MOCK_USERS.instructor.name}
      </div>
    )}
  </div>
);

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex gap-2">
    <span className="w-[72px] flex-shrink-0" style={{ color: FIGMA.textLight }}>
      {label}
    </span>
    <span className="min-w-0 flex-1">{children}</span>
  </div>
);

/* ─── File attachment card ─── */

export const FigmaFileCard = ({ name, size, highlight }: { name: string; size: string; highlight?: boolean }) => (
  <div
    className="mt-1.5 inline-flex max-w-full items-center gap-2 rounded-lg border bg-white px-2 py-1.5 transition-all"
    style={{
      borderColor: highlight ? FIGMA.orange : FIGMA.border,
      boxShadow: highlight ? "0 0 0 2px rgba(232,93,76,0.15)" : "none",
    }}
  >
    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-[#FFEBE8] text-[8px] font-black" style={{ color: FIGMA.orange }}>
      PDF
    </div>
    <div className="min-w-0">
      <p className="truncate text-[9px] font-bold" style={{ color: FIGMA.canvasActive }}>
        {name}
      </p>
      <p className="text-[7px]" style={{ color: FIGMA.textLight }}>
        {size} · PDF
      </p>
    </div>
  </div>
);

/* ─── Create Request modal ─── */

export const FigmaCreateRequestModal = ({ activeCategory = "Extension" }: { activeCategory?: string }) => {
  const cats = ["Grading", "Attendance", "Extension", "Accommodation", "Other"];
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ background: "rgba(23,43,77,0.45)" }}>
      <div className="flex w-[min(92%,380px)] overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="w-[90px] flex-shrink-0 border-r py-3" style={{ borderColor: FIGMA.border, background: "#FAFBFC" }}>
          {cats.map((cat) => (
            <div
              key={cat}
              className="relative px-3 py-2 text-[8px]"
              style={{
                fontWeight: cat === activeCategory ? 700 : 400,
                color: cat === activeCategory ? FIGMA.text : FIGMA.textMuted,
                background: cat === activeCategory ? "#fff" : "transparent",
              }}
            >
              {cat === activeCategory && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r" style={{ background: FIGMA.orange }} />
              )}
              {cat}
            </div>
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-bold" style={{ color: FIGMA.text }}>
              Create Request
            </span>
            <X className="h-3.5 w-3.5" style={{ color: FIGMA.textLight }} strokeWidth={2} />
          </div>
          <Field label="Assignment">
            <div className="flex items-center justify-between rounded border px-2 py-1.5 text-[8px]" style={{ borderColor: FIGMA.border, color: FIGMA.textLight }}>
              Select...
              <ChevronDown className="h-3 w-3" />
            </div>
          </Field>
          <Field label="Date">
            <div className="rounded border px-2 py-1.5 text-[8px]" style={{ borderColor: FIGMA.border, color: FIGMA.text }}>
              04/26/2026
            </div>
          </Field>
          <Field label="Reason for request">
            <div className="rounded border px-2 py-4 text-[8px]" style={{ borderColor: FIGMA.border, color: FIGMA.textLight }}>
              Describe the reason for this request
            </div>
          </Field>
          <div className="mb-3 flex items-center gap-2 text-[8px]" style={{ color: FIGMA.textMuted }}>
            Choose File
            <button type="button" className="rounded-full border px-2.5 py-0.5 text-[8px] font-medium" style={{ borderColor: FIGMA.border }}>
              Choose
            </button>
          </div>
          <button type="button" className="w-full rounded-full border py-2 text-[9px] font-bold" style={{ borderColor: FIGMA.text, color: FIGMA.text }}>
            + Create Request
          </button>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="mb-2">
    <p className="mb-1 text-[7px] font-semibold" style={{ color: FIGMA.textMuted }}>
      {label}
    </p>
    {children}
  </div>
);

/* ─── Create Channel modal ─── */

export const FigmaCreateChannelModal = ({ channelName, highlightName, highlightCreate }: { channelName: string; highlightName?: boolean; highlightCreate?: boolean }) => (
  <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ background: "rgba(23,43,77,0.45)" }}>
    <div className="w-[min(88%,280px)] rounded-xl bg-white p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[12px] font-bold" style={{ color: FIGMA.text }}>
          Create Channel
        </span>
        <X className="h-3.5 w-3.5" style={{ color: FIGMA.textLight }} />
      </div>
      <div className="mb-2 grid grid-cols-2 gap-2">
        <MiniField label="Visibility" value="Private" />
        <MiniField label="Who can send" value="Everyone" />
      </div>
      <div
        className="mb-3 rounded-lg px-2.5 py-2 text-[10px] font-bold transition-all"
        style={{
          background: FIGMA.orangeSoft,
          color: FIGMA.canvasActive,
          boxShadow: highlightName ? "0 0 0 2px rgba(232,93,76,0.35)" : "none",
        }}
      >
        {channelName}
      </div>
      <button
        type="button"
        className="w-full rounded-full py-2 text-[10px] font-bold text-white transition-all"
        style={{ background: highlightCreate ? FIGMA.orange : FIGMA.chatSidebar }}
      >
        Create Channel
      </button>
    </div>
  </div>
);

const MiniField = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg p-2" style={{ background: "#DEEBFF" }}>
    <p className="text-[7px]" style={{ color: FIGMA.textMuted }}>
      {label}
    </p>
    <p className="text-[9px] font-bold" style={{ color: FIGMA.text }}>
      {value}
    </p>
  </div>
);

/* ─── File preview modal ─── */

export const FigmaFilePreviewModal = ({ name, title, body }: { name: string; title: string; body: string }) => (
  <div className="absolute inset-0 z-30 flex items-center justify-center p-4" style={{ background: "rgba(23,43,77,0.4)" }}>
    <div className="w-full max-w-[240px] overflow-hidden rounded-xl bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b px-3 py-2" style={{ borderColor: FIGMA.border }}>
        <div className="flex items-center gap-1.5">
          <div className="rounded bg-[#FFEBE8] px-1 py-0.5 text-[7px] font-black" style={{ color: FIGMA.orange }}>
            PDF
          </div>
          <span className="text-[9px] font-bold" style={{ color: FIGMA.canvasActive }}>
            {name}
          </span>
        </div>
        <X className="h-3 w-3" style={{ color: FIGMA.textLight }} />
      </div>
      <div className="space-y-2 p-3">
        <h4 className="text-[10px] font-bold" style={{ color: FIGMA.text }}>
          {title}
        </h4>
        <p className="text-[8px] leading-relaxed" style={{ color: FIGMA.textMuted }}>
          {body}
        </p>
        <div className="rounded px-2 py-1.5 text-[8px] font-semibold" style={{ background: "#DEEBFF", color: FIGMA.canvasActive }}>
          Preview files without leaving the channel.
        </div>
      </div>
    </div>
  </div>
);

/* ─── Channel Details panel (right) ─── */

export const FigmaChannelDetails = ({ activeTab = "Photos" }: { activeTab?: "Photos" | "Videos" | "Docs" }) => {
  const tabs = ["Photos", "Videos", "Docs"] as const;
  const photos = ["whiteboard-notes.jpg", "lab-bench.png", "team-poster.jpg"];
  return (
    <aside className="flex w-[130px] flex-shrink-0 flex-col border-l bg-white" style={{ borderColor: FIGMA.border }}>
      <div className="flex items-center justify-between border-b px-2.5 py-2" style={{ borderColor: FIGMA.border }}>
        <span className="text-[9px] font-bold" style={{ color: FIGMA.text }}>
          Channel Details
        </span>
        <X className="h-3 w-3" style={{ color: FIGMA.textLight }} />
      </div>
      <div className="p-2.5">
        <div className="mb-2 flex flex-wrap gap-1">
          {["View Members", "Add Members"].map((b) => (
            <span key={b} className="rounded-full border px-2 py-0.5 text-[7px] font-medium" style={{ borderColor: FIGMA.border, color: FIGMA.textMuted }}>
              {b}
            </span>
          ))}
        </div>
        <div className="mb-2 flex flex-wrap gap-1">
          <span className="rounded-full border px-2 py-0.5 text-[7px] font-medium" style={{ borderColor: FIGMA.border, color: FIGMA.textMuted }}>
            Rename Channel
          </span>
          <span className="rounded-full border px-2 py-0.5 text-[7px] font-medium" style={{ borderColor: FIGMA.orange, color: FIGMA.orange }}>
            Delete and Exit
          </span>
        </div>
        <p className="mb-1.5 text-[8px] font-bold" style={{ color: FIGMA.text }}>
          Shared media
        </p>
        <div className="flex gap-2">
          <div className="flex flex-col gap-0.5">
            {tabs.map((tab) => (
              <span
                key={tab}
                className="relative pl-2 text-[7px] font-medium"
                style={{
                  color: tab === activeTab ? FIGMA.text : FIGMA.textLight,
                  fontWeight: tab === activeTab ? 700 : 400,
                }}
              >
                {tab === activeTab && (
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] rounded" style={{ background: FIGMA.orange }} />
                )}
                {tab}
              </span>
            ))}
          </div>
          <div className="min-w-0 flex-1">
            {activeTab === "Photos"
              ? photos.map((p) => (
                  <div key={p} className="mb-1 h-8 rounded bg-gradient-to-br from-slate-100 to-blue-50 px-1 py-0.5 text-[6px]" style={{ color: FIGMA.textMuted }}>
                    {p}
                  </div>
                ))
              : activeTab === "Videos"
                ? ["sorting-demo.mp4", "recap.mov"].map((v) => (
                    <div key={v} className="mb-1 rounded border px-1 py-0.5 text-[6px]" style={{ borderColor: FIGMA.border, color: FIGMA.textMuted }}>
                      {v}
                    </div>
                  ))
                : ["Syllabus-CS204.pdf", "Lab-3-Guide.pdf"].map((f) => (
                    <div key={f} className="mb-1 rounded border px-1 py-0.5 text-[6px]" style={{ borderColor: FIGMA.border, color: FIGMA.textMuted }}>
                      {f}
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

/* ─── Communities view ─── */

export const FigmaCommunitiesView = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const items = [
    { name: "Study Group", members: 14, desc: "Weekly review before quizzes" },
    { name: "Project Teams", members: 22, desc: "Group project coordination" },
    { name: "Peer Mentors", members: 8, desc: "Upperclassmen lab help" },
    { name: "Exam Review", members: 19, desc: "Final exam prep sessions" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((c, i) => (
        <div
          key={c.name}
          className="rounded-lg border p-2 transition-all"
          style={{
            borderColor: i === activeIndex ? FIGMA.orange : FIGMA.border,
            background: i === activeIndex ? FIGMA.orangeSoft : "#fff",
            boxShadow: i === activeIndex ? "0 0 0 2px rgba(232,93,76,0.15)" : "none",
          }}
        >
          <Hash className="mb-1 h-3 w-3" style={{ color: FIGMA.textMuted }} />
          <p className="text-[9px] font-bold" style={{ color: FIGMA.text }}>
            {c.name}
          </p>
          <p className="text-[7px]" style={{ color: FIGMA.textLight }}>
            {c.members} members
          </p>
          <p className="mt-0.5 text-[7px]" style={{ color: FIGMA.textMuted }}>
            {c.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

/* ─── Bottom nav (Courses / Communities / DMs) ─── */

export const FigmaBottomNav = ({ active = "communities" }: { active?: "courses" | "communities" | "dms" }) => (
  <div className="grid grid-cols-3 gap-px border-t p-1" style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.15)" }}>
    {(
      [
        ["courses", "Courses"],
        ["communities", "Communities"],
        ["dms", "DMs"],
      ] as const
    ).map(([key, label]) => (
      <span
        key={key}
        className="rounded py-1.5 text-center text-[7px] font-semibold"
        style={{
          background: active === key ? FIGMA.chatActivePill : "transparent",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        {label}
      </span>
    ))}
  </div>
);

/* ─── Full app shell ─── */

export type FigmaShellProps = {
  children: ReactNode;
  overlay?: ReactNode;
  rightPanel?: ReactNode;
  sidebar?: SidebarProps;
  showBottomNav?: boolean;
  bottomNavActive?: "courses" | "communities" | "dms";
};

export const FigmaAppShell = ({
  children,
  overlay,
  rightPanel,
  sidebar,
  showBottomNav,
  bottomNavActive,
}: FigmaShellProps) => (
  <div className="flex h-[380px] flex-col overflow-hidden rounded-lg bg-white font-sans shadow-inner" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
    <FigmaTopBar />
    <div className="flex min-h-0 flex-1">
      <CanvasGlobalNav />
      <CanvasCourseNav />
      <WorkspaceStrip />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1">
          <div className="flex min-w-0 flex-1 flex-col">
            <FigmaChatSidebar {...sidebar} />
            {showBottomNav && <FigmaBottomNav active={bottomNavActive} />}
          </div>
          <main className="relative flex min-w-0 flex-1 flex-col p-3" style={{ background: FIGMA.feed }}>
            {children}
            {overlay}
          </main>
          {rightPanel}
        </div>
      </div>
    </div>
  </div>
);

export const demoTargetStyle = (active: boolean): CSSProperties =>
  active ? { boxShadow: "0 0 0 2px rgba(232,93,76,0.5)", borderRadius: 6 } : {};
