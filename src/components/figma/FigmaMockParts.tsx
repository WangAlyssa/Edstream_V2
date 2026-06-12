import type { ReactNode } from "react";
import {
  Bot,
  Bold,
  BookOpen,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Gauge,
  HelpCircle,
  Home,
  Inbox,
  Info,
  Italic,
  Link2,
  List,
  ListOrdered,
  Lock,
  Mic,
  MoreHorizontal,
  Paperclip,
  Pin,
  Plus,
  Quote,
  Reply,
  Search,
  Send,
  Share2,
  Shield,
  Smile,
  Square,
  Strikethrough,
  Type,
  Video,
  AtSign,
  Code,
  Image as ImageIcon,
  Pencil,
  X,
} from "lucide-react";
import { FIGMA_DM_USERS, FIGMA_PHOTOS, FIGMA_WORLD, type FigmaPhotoId } from "./figmaAssets";

export type FigmaScale = "feature" | "guide";

export const scaleMap = {
  feature: {
    canvasNav: "w-[54px]",
    courseNav: "w-[132px]",
    ws: "w-[36px]",
    appSidebar: "w-[170px]",
    sidebar: "w-[170px]",
    topH: "h-[38px]",
    searchH: "h-[26px]",
    searchText: "text-[11px]",
    sidebarText: "text-[10.5px]",
    sidebarHeader: "text-[11px]",
    channelText: "text-[10px]",
    mainHeader: "text-[13px]",
    mainSub: "text-[10px]",
    msgName: "text-[11px]",
    msgTime: "text-[10px]",
    msgBody: "text-[11px]",
    date: "text-[10px]",
    composerTool: "h-[13px] w-[13px]",
    composerText: "text-[11px]",
    avatar: "h-[26px] w-[26px]",
    avatarSm: "h-[18px] w-[18px]",
    dmAvatar: "h-[18px] w-[18px]",
    navIcon: "h-[15px] w-[15px]",
    navLabel: "text-[7px]",
  },
  guide: {
    canvasNav: "w-[10%] min-w-[34px] max-w-[42px]",
    courseNav: "w-[13.5%] min-w-[82px]",
    ws: "w-[5%] min-w-[22px] max-w-[28px]",
    appSidebar: "w-[16.5%] min-w-[92px]",
    sidebar: "w-[16.5%] min-w-[92px]",
    topH: "h-[34px]",
    searchH: "h-[22px]",
    searchText: "text-[9.5px]",
    sidebarText: "text-[10px]",
    sidebarHeader: "text-[10px]",
    channelText: "text-[9px]",
    mainHeader: "text-[11.5px]",
    mainSub: "text-[9px]",
    msgName: "text-[10px]",
    msgTime: "text-[9px]",
    msgBody: "text-[10px]",
    date: "text-[9px]",
    composerTool: "h-[12px] w-[12px]",
    composerText: "text-[9px]",
    avatar: "h-[22px] w-[22px]",
    avatarSm: "h-[16px] w-[16px]",
    dmAvatar: "h-[16px] w-[16px]",
    navIcon: "h-[12px] w-[12px]",
    navLabel: "text-[6px]",
  },
} as const;

export const FIGMA = {
  navy: "#0A1240",
  topBar: "#0A1240",
  workspace: "#141824",
  sidebar: "#3F59A7",
  sidebarActive: "#2B3A75",
  canvasNav: "#2D66C3",
  canvasNavActive: "#4A7FD4",
  orange: "#FF5722",
  tagPage: { bg: "#FED7AA", text: "#C2410C" },
  tagContact: { bg: "#DBEAFE", text: "#2563EB" },
  tagPerson: { bg: "#DBEAFE", text: "#2563EB" },
  cardBg: "#F3F4F6",
  ufOrange: "#FA4616",
  ufBlue: "#0021A5",
};

export type SidebarActive = "requests" | "channels" | "messages" | "none";
export type ActiveChannel =
  | "guided"
  | "renamed-general"
  | "random"
  | "demo-123"
  | "requests"
  | "parent"
  | "none";

const W = FIGMA_WORLD;

const CHANNELS = [
  { id: "guided" as const, label: W.channels.project, trailing: "home" as const },
  { id: "renamed-general" as const, label: W.channels.discussion, trailing: "home" as const },
  { id: "random" as const, label: W.channels.study, trailing: "lock" as const },
  { id: "test123" as const, label: W.channels.lab, trailing: "none" as const },
  { id: "general1" as const, label: W.channels.office, trailing: "none" as const },
  { id: "general2" as const, label: W.channels.discussion, trailing: "none" as const },
];

export type FigmaChannelItem = (typeof CHANNELS)[number];

export const FRAME2_CHANNELS: FigmaChannelItem[] = [
  { id: "guided", label: W.channels.project, trailing: "home" },
  { id: "renamed-general", label: W.channels.discussion, trailing: "home" },
  { id: "random", label: W.channels.study, trailing: "home" },
];

export const FigmaAvatar = ({
  scale,
  photo = "user",
  online,
  size = "md",
}: {
  scale: FigmaScale;
  photo?: FigmaPhotoId;
  online?: boolean;
  size?: "md" | "sm" | "nav";
}) => {
  const s = scaleMap[scale];
  const sizeClass = size === "sm" ? s.dmAvatar : size === "nav" ? "h-[22px] w-[22px]" : s.avatar;
  const dotClass = scale === "guide" ? "h-[6px] w-[6px] border border-white" : "h-[7px] w-[7px] border-2 border-white";

  return (
    <div className={`relative flex-shrink-0 ${sizeClass}`}>
      <img src={FIGMA_PHOTOS[photo]} alt="" className="h-full w-full rounded-full object-cover" />
      {online !== undefined && (
        <span className={`absolute bottom-0 right-0 rounded-full ${online ? "bg-green-500" : "bg-gray-400"} ${dotClass}`} />
      )}
    </div>
  );
};

export const FigmaWorkspaceStrip = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  return (
    <div className={`flex flex-col items-center gap-2.5 py-2.5 ${s.ws}`} style={{ backgroundColor: FIGMA.workspace }}>
      <div
        className={`flex items-center justify-center rounded-full font-black text-white ${scale === "guide" ? "h-[18px] w-[18px] text-[5px]" : "h-[26px] w-[26px] text-[7px]"}`}
        style={{ background: `linear-gradient(135deg, ${FIGMA.ufOrange} 50%, ${FIGMA.ufBlue} 50%)` }}
      >
        {W.workspaceBadges[0]}
      </div>
      <div
        className={`flex items-center justify-center rounded-full bg-[#22C55E] font-black text-white ${scale === "guide" ? "h-[18px] w-[18px] text-[7px]" : "h-[26px] w-[26px] text-[10px]"}`}
      >
        {W.workspaceBadges[1]}
      </div>
    </div>
  );
};

export const FigmaTopBar = ({
  scale,
  className = "",
  userLabel,
  userDemoTarget,
}: {
  scale: FigmaScale;
  className?: string;
  userLabel?: string;
  userDemoTarget?: string;
}) => {
  const s = scaleMap[scale];
  return (
    <div className={`flex flex-shrink-0 items-center px-3 text-white ${s.topH} ${className}`} style={{ backgroundColor: FIGMA.topBar }}>
      <div className={`mx-auto flex w-full max-w-[58%] items-center rounded-full px-3 ${s.searchH}`} style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
        <Search className={`mr-1.5 flex-shrink-0 text-blue-200 ${s.composerTool}`} strokeWidth={2} />
        <span className={`truncate text-blue-100/90 ${s.searchText}`}>Search users, channels, messages...</span>
      </div>
      <div
        className={`ml-auto flex flex-shrink-0 cursor-default items-center gap-1.5 rounded-full pl-2 pr-0.5 ${s.sidebarText}`}
        data-demo-target={userDemoTarget}
      >
        <span className="whitespace-nowrap">{userLabel ?? W.topBarUser}</span>
        <FigmaAvatar scale={scale} photo="user" online />
      </div>
    </div>
  );
};

export const FigmaAppSidebar = ({
  scale,
  activeItem = "channels",
  activeChannel = "renamed-general",
  highlightCompose,
  channels = CHANNELS,
  requestsDemoTarget,
  requestsNotify,
}: {
  scale: FigmaScale;
  activeItem?: SidebarActive;
  activeChannel?: ActiveChannel | string;
  highlightCompose?: boolean;
  channels?: FigmaChannelItem[];
  requestsDemoTarget?: string;
  requestsNotify?: boolean;
}) => {
  const s = scaleMap[scale];

  return (
    <aside className={`flex h-full flex-col overflow-hidden px-2 py-2 text-white ${s.appSidebar}`} style={{ backgroundColor: FIGMA.sidebar }}>
      <div className={`mb-2 flex items-center justify-between font-semibold ${s.sidebarHeader}`}>
        <span>{W.institution}</span>
        <Home className={s.composerTool} strokeWidth={2} />
      </div>

      <div className="mb-1.5 rounded-md px-1.5 py-1" style={activeItem === "requests" ? { backgroundColor: FIGMA.sidebarActive } : undefined}>
        <div
          className={`flex items-center gap-1.5 ${s.sidebarText} ${activeItem === "requests" ? "font-semibold text-white" : "text-blue-100"}`}
          data-demo-target={requestsDemoTarget}
        >
          <Inbox className={s.composerTool} strokeWidth={2} />
          Requests
          {requestsNotify && (
            <span className="ml-auto flex h-4 min-w-[16px] items-center justify-center rounded-full bg-orange-500 px-1 text-[8px] font-bold text-white">
              1
            </span>
          )}
        </div>
      </div>

      <div className="mb-1">
        <div className={`mb-1 flex items-center justify-between font-semibold text-blue-100 ${s.sidebarText}`}>
          <span className="flex items-center gap-0.5">
            <ChevronDown className={s.composerTool} strokeWidth={2.5} />
            Channels
          </span>
          <span className={`rounded p-0.5 ${highlightCompose ? "bg-orange-500" : ""}`} data-demo-target={highlightCompose ? "0" : undefined}>
            <Pencil className={s.composerTool} strokeWidth={2} />
          </span>
        </div>
        {channels.map((ch) => {
          const isActive =
            activeChannel !== "parent" &&
            (activeChannel === ch.id ||
              (activeChannel === "demo-123" && ch.id === "random"));
          return (
            <div
              key={ch.label + ch.id}
              className={`mb-0.5 flex items-center justify-between rounded px-1.5 py-[3px] ${s.channelText} ${isActive ? "font-semibold text-white" : "text-blue-100/90"}`}
              style={isActive ? { backgroundColor: FIGMA.sidebarActive } : undefined}
            >
              <span className="truncate pr-1">{ch.label}</span>
              {ch.trailing === "lock" ? (
                <Lock className={`flex-shrink-0 text-blue-200/80 ${s.composerTool}`} strokeWidth={2} />
              ) : ch.trailing === "home" ? (
                <Home className={`flex-shrink-0 text-blue-200/80 ${s.composerTool}`} strokeWidth={2} />
              ) : (
                <span className={s.composerTool} />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-0.5 min-h-0 flex-1 overflow-hidden">
        <div className={`mb-1 flex items-center gap-0.5 font-semibold text-blue-100 ${s.sidebarText}`}>
          <ChevronDown className={s.composerTool} strokeWidth={2.5} />
          Messages
        </div>
        {FIGMA_DM_USERS.map((dm, i) => (
          <div key={`${dm.name}-${i}`} className={`mb-[3px] flex items-center gap-1.5 ${s.channelText} text-blue-100/90`}>
            <FigmaAvatar scale={scale} photo={dm.photo} online={dm.online} size="sm" />
            <span className="truncate">{dm.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export const FigmaToggleSwitch = ({ on, scale }: { on?: boolean; scale: FigmaScale }) => {
  const track = scale === "guide" ? "h-[14px] w-[28px]" : "h-[16px] w-[32px]";
  const knob = scale === "guide" ? "h-[10px] w-[10px]" : "h-[12px] w-[12px]";
  return (
    <div
      className={`relative flex-shrink-0 rounded-full ${track} ${on ? "" : "bg-gray-300"}`}
      style={on ? { backgroundColor: FIGMA.orange } : undefined}
    >
      <span className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow ${knob} ${on ? "right-0.5" : "left-0.5"}`} />
    </div>
  );
};

export const FigmaReplyChip = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  return (
    <span className={`mt-1 inline-block rounded-full border border-gray-300 bg-gray-50 px-2 py-0.5 text-gray-600 ${s.msgTime}`}>
      1 reply
    </span>
  );
};

export const FigmaRequestFilterPills = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  return (
    <div className={`mb-2 flex gap-2 ${s.sidebarText}`}>
      {[0, 1].map((i) => (
        <div key={i} className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-gray-700">
          Request type: All <ChevronDown className={`${s.composerTool} text-gray-400`} strokeWidth={2} />
        </div>
      ))}
    </div>
  );
};

export const FigmaComposer = ({
  scale,
  demoTarget,
  attachDemoTarget,
  sendDemoTarget,
}: {
  scale: FigmaScale;
  demoTarget?: string;
  attachDemoTarget?: string;
  sendDemoTarget?: string;
}) => {
  const s = scaleMap[scale];
  const topTools = [
    { Icon: Bold, target: undefined },
    { Icon: Italic, target: undefined },
    { Icon: Strikethrough, target: undefined },
    { Icon: Link2, target: undefined },
    { Icon: List, target: undefined },
    { Icon: ListOrdered, target: undefined },
    { Icon: Quote, target: undefined },
    { Icon: Code, target: undefined },
    { Icon: Paperclip, target: attachDemoTarget },
  ];
  const bottomTools = [Plus, Type, Smile, AtSign, Video, Mic, ImageIcon];

  return (
    <div className="mt-auto flex-shrink-0 rounded-lg border border-gray-200 bg-white shadow-sm" data-demo-target={demoTarget}>
      <div className="flex items-center gap-2 border-b border-gray-100 px-2.5 py-1.5">
        {topTools.map(({ Icon, target }, i) => (
          <span key={i} data-demo-target={target}>
            <Icon className={`text-gray-400 ${s.composerTool}`} strokeWidth={1.75} />
          </span>
        ))}
      </div>
      <div className={`min-h-[36px] px-2.5 py-2 text-gray-400 ${s.composerText}`}>Enter your message here</div>
      <div className="flex items-center justify-between px-2.5 py-1.5">
        <div className="flex items-center gap-2">
          {bottomTools.map((Icon, i) => (
            <Icon key={i} className={`text-gray-400 ${s.composerTool}`} strokeWidth={1.75} />
          ))}
          <Square className={`text-gray-400 ${s.composerTool}`} strokeWidth={1.75} />
        </div>
        <div className="flex items-center gap-0.5" data-demo-target={sendDemoTarget}>
          <Send className={`text-gray-500 ${s.composerTool}`} strokeWidth={2} />
          <ChevronDown className={`text-gray-400 ${s.composerTool}`} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export const FigmaDateDivider = ({ date, scale }: { date: string; scale: FigmaScale }) => {
  const s = scaleMap[scale];
  return (
    <div className="relative my-2 flex items-center justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
      <span
        className={`relative rounded-full border border-gray-200 bg-white px-2 py-0.5 text-gray-500 ${s.date}`}
      >
        {date}
      </span>
    </div>
  );
};

export const FigmaTag = ({ type, scale }: { type: "page" | "contact" | "person"; scale: FigmaScale }) => {
  const s = scaleMap[scale];
  const label = type === "page" ? "Page" : type === "contact" ? "Contact" : "Person";
  const colors = type === "page" ? FIGMA.tagPage : FIGMA.tagContact;
  return (
    <span
      className={`inline-block rounded px-1 py-px font-medium ${s.channelText}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {label}
    </span>
  );
};

export const FigmaChannelHeader = ({
  scale,
  title,
  members,
  infoDemoTarget,
}: {
  scale: FigmaScale;
  title: string;
  members: string;
  infoDemoTarget?: string;
}) => {
  const s = scaleMap[scale];
  return (
    <div className="mb-1.5 flex flex-shrink-0 items-center justify-between border-b border-gray-100 pb-1.5">
      <div>
        <h3 className={`font-bold leading-tight text-gray-900 ${s.mainHeader}`}>{title}</h3>
        <p className={`leading-tight text-gray-400 ${s.mainSub}`}>{members}</p>
      </div>
      <div className="flex items-center gap-2.5 text-gray-500">
        <Pin className={s.composerTool} strokeWidth={1.75} />
        <span
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-300"
          data-demo-target={infoDemoTarget}
        >
          <Info className="h-[10px] w-[10px]" strokeWidth={2} />
        </span>
      </div>
    </div>
  );
};

export const FigmaSystemMessage = ({ text, scale }: { text: string; scale: FigmaScale }) => {
  const s = scaleMap[scale];
  return <div className={`py-0.5 text-center text-gray-400 ${s.msgTime}`}>{text}</div>;
};

export const FigmaReplyLink = ({ scale, demoTarget }: { scale: FigmaScale; demoTarget?: string }) => {
  const s = scaleMap[scale];
  return (
    <span className={`font-semibold text-blue-600 ${s.msgTime}`} data-demo-target={demoTarget}>
      1 reply
    </span>
  );
};

export const FigmaReactionRow = ({ scale }: { scale: FigmaScale }) => (
  <div className={`mt-1 flex items-center gap-1 ${scaleMap[scale].msgTime}`}>
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-1.5 py-0.5 shadow-sm leading-none">👍</span>
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-1.5 py-0.5 shadow-sm leading-none">👀</span>
    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm leading-none">+</span>
  </div>
);

export const FigmaMessageRow = ({
  scale,
  name = W.people.primaryStudent,
  time = "9:16 AM",
  photo = "maya" as FigmaPhotoId,
  showBot,
  showShield,
  edited,
  relaxed,
  children,
  footer,
}: {
  scale: FigmaScale;
  name?: string;
  time?: string;
  photo?: FigmaPhotoId;
  showBot?: boolean;
  showShield?: boolean;
  edited?: boolean;
  relaxed?: boolean;
  children: ReactNode;
  footer?: ReactNode;
}) => {
  const s = scaleMap[scale];
  return (
    <div className={`flex gap-1.5 ${relaxed ? "mb-2.5" : "mb-1"}`}>
      <FigmaAvatar scale={scale} photo={photo} />
      <div className="min-w-0 flex-1">
        <div className="leading-none">
          <span className={`font-bold text-gray-900 ${s.msgName}`}>{name}</span>
          {showBot && <Bot className={`ml-1 inline align-middle text-gray-400 ${s.composerTool}`} strokeWidth={2} />}
          {showShield && <Shield className={`ml-1 inline align-middle text-gray-400 ${s.composerTool}`} strokeWidth={2} fill="currentColor" />}
          <span className={`ml-1.5 text-gray-400 ${s.msgTime}`}>{time}</span>
          {edited && <span className={`ml-1 text-gray-400 ${s.msgTime}`}>(edited)</span>}
        </div>
        <div className={`mt-0.5 leading-snug text-gray-800 ${s.msgBody}`}>{children}</div>
        {footer}
      </div>
    </div>
  );
};

export const FigmaStandaloneShell = ({
  scale,
  activeItem,
  activeChannel,
  highlightCompose,
  channels,
  requestsDemoTarget,
  requestsNotify,
  topBarUserLabel,
  topBarUserDemoTarget,
  children,
  showWorkspace = true,
}: {
  scale: FigmaScale;
  activeItem?: SidebarActive;
  activeChannel?: ActiveChannel | string;
  highlightCompose?: boolean;
  channels?: FigmaChannelItem[];
  requestsDemoTarget?: string;
  requestsNotify?: boolean;
  topBarUserLabel?: string;
  topBarUserDemoTarget?: string;
  children: ReactNode;
  showWorkspace?: boolean;
}) => (
  <div className="flex h-full flex-col">
    <FigmaTopBar scale={scale} userLabel={topBarUserLabel} userDemoTarget={topBarUserDemoTarget} />
    <div className="flex min-h-0 flex-1">
      {showWorkspace && <FigmaWorkspaceStrip scale={scale} />}
      <FigmaAppSidebar
        scale={scale}
        activeItem={activeItem}
        activeChannel={activeChannel}
        highlightCompose={highlightCompose}
        channels={channels}
        requestsDemoTarget={requestsDemoTarget}
        requestsNotify={requestsNotify}
      />
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-white px-3 py-2">{children}</main>
    </div>
  </div>
);

export const FigmaCanvasGlobalNav = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  const items: Array<{
    label: string;
    icon?: typeof Gauge;
    active?: boolean;
    badge?: string;
    photo?: FigmaPhotoId;
  }> = [
    { label: "Account", photo: "account" },
    { label: "Dashboard", icon: Gauge },
    { label: "Courses", icon: BookOpen, active: true },
    { label: "Calendar", icon: Calendar },
    { label: "Inbox", icon: Inbox },
    { label: "History", icon: Clock },
    { label: "Help", icon: HelpCircle, badge: "10" },
    { label: "Campus Resources", icon: Building2 },
  ];

  return (
    <aside className={`flex flex-shrink-0 flex-col items-center gap-0.5 overflow-hidden py-2 ${s.canvasNav}`} style={{ backgroundColor: FIGMA.canvasNav }}>
      <div className={`mb-1 grid grid-cols-3 place-items-center gap-[3px] ${scale === "guide" ? "h-[18px] w-[18px]" : "h-[24px] w-[24px]"}`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`rounded-full bg-white/95 ${scale === "guide" ? "h-[3px] w-[3px]" : "h-[4px] w-[4px]"}`} />
        ))}
      </div>
      {items.map((item) => (
        <div key={item.label} className={`relative flex w-full flex-col items-center px-0.5 py-1 ${item.active ? "rounded bg-white/15" : ""}`}>
          {item.photo ? (
            <FigmaAvatar scale={scale} photo={item.photo} size="nav" />
          ) : item.icon ? (
            <item.icon className={`text-white ${s.navIcon}`} strokeWidth={1.75} />
          ) : null}
          <span className={`mt-0.5 max-w-full text-center leading-tight text-white/95 ${s.navLabel}`}>{item.label}</span>
          {item.badge && (
            <span className={`absolute right-0 top-0 flex items-center justify-center rounded-full bg-[#3B82F6] font-bold text-white ${scale === "guide" ? "h-[10px] w-[10px] text-[5px]" : "h-3.5 w-3.5 text-[7px]"}`}>
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </aside>
  );
};

export const FigmaCanvasCourseNav = ({ scale }: { scale: FigmaScale }) => {
  const links = [
    "Home",
    "Assignments",
    "Discussions",
    "Grades",
    "People",
    "Syllabus",
    "Collaborations",
    "Course Analytics",
    "Practice Labs",
    "Course Materials",
    "Polling Tool",
    "Study Groups",
    "Peer Review",
    "Ed Stream Chat",
    "Video Conferences",
    "Grade Review",
  ];
  const s = scaleMap[scale];
  return (
    <aside className={`flex-shrink-0 overflow-hidden border-r border-gray-200 bg-white py-1.5 ${s.courseNav}`}>
      {links.map((link) => {
        const isEdStream = link === "Ed Stream Chat";
        return (
          <div
            key={link}
            className={`truncate px-2 py-[2px] leading-tight ${s.sidebarText} ${
              isEdStream ? "border-l-[3px] border-black font-bold text-gray-900" : "text-[#0374B5]"
            }`}
          >
            {link}
          </div>
        );
      })}
    </aside>
  );
};

export const FigmaCanvasShell = ({
  scale,
  activeItem,
  activeChannel,
  requestsDemoTarget,
  children,
}: {
  scale: FigmaScale;
  activeItem?: SidebarActive;
  activeChannel?: ActiveChannel | string;
  requestsDemoTarget?: string;
  children: ReactNode;
}) => (
  <div className="flex h-full min-h-0 flex-col">
    <div className="flex min-h-0 flex-1">
      <FigmaCanvasGlobalNav scale={scale} />
      <FigmaCanvasCourseNav scale={scale} />
      <div className="flex min-w-0 flex-1 flex-col">
        <FigmaTopBar scale={scale} />
        <div className="flex min-h-0 flex-1">
          <FigmaAppSidebar scale={scale} activeItem={activeItem} activeChannel={activeChannel} requestsDemoTarget={requestsDemoTarget} />
          <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-white px-3 py-2">{children}</main>
        </div>
      </div>
    </div>
  </div>
);

export const FigmaExtensionCard = ({
  scale,
  variant = "instructor",
  demoTarget,
  approveDemoTarget,
  approved = false,
  pendingNew = false,
}: {
  scale: FigmaScale;
  variant?: "instructor" | "student" | "thread";
  demoTarget?: string;
  approveDemoTarget?: string;
  approved?: boolean;
  pendingNew?: boolean;
}) => {
  const s = scaleMap[scale];
  return (
    <div className="rounded-xl p-3" style={{ backgroundColor: FIGMA.cardBg }} data-demo-target={demoTarget}>
      <div className={`mb-2 font-bold text-gray-900 ${s.msgName}`}>Extension Request</div>
      <div className={`space-y-1 leading-snug text-gray-700 ${s.msgBody}`}>
        <div>
          Assignment:{" "}
          <span
            className="inline-block rounded px-1 font-medium"
            style={{ backgroundColor: FIGMA.tagPage.bg, color: FIGMA.tagPage.text }}
          >
            {W.assignment}
          </span>
        </div>
        <div>New due date: 3/15/2024</div>
        <div>
          Original due date: {variant === "instructor" ? "3/10/2024" : "3/10/2024"}
        </div>
        <div>Reason: {variant === "student" ? "Medical appointment" : "Schedule conflict"}</div>
        {variant === "instructor" && (
          <div>
            Attached file: <span style={{ color: FIGMA.orange }}>{W.files.lab}</span>
          </div>
        )}
      </div>
      <div className={`mt-2 flex gap-2 ${s.channelText}`}>
        {variant === "student" ? (
          <button type="button" className="rounded-full border-2 border-gray-800 bg-white px-2.5 py-0.5 font-medium text-gray-800">
            {pendingNew ? "Pending approval" : "Pending approval"}
          </button>
        ) : variant === "thread" ? (
          <>
            <button type="button" className="rounded-full border-2 border-gray-800 bg-white px-2.5 py-0.5 font-medium text-gray-900">
              Default
            </button>
            <button type="button" className="rounded-full border-2 border-[#16A34A] bg-white px-2.5 py-0.5 font-medium text-[#16A34A]" data-demo-target={approveDemoTarget}>
              Approve
            </button>
          </>
        ) : approved ? (
          <button type="button" className="rounded-full border-2 border-[#16A34A] bg-[#16A34A] px-2.5 py-0.5 font-medium text-white">
            Approved
          </button>
        ) : (
          <>
            <button type="button" className="rounded-full border-2 border-gray-800 bg-white px-2.5 py-0.5 font-medium text-gray-900">
              Decline
            </button>
            <button type="button" className="rounded-full border-2 border-[#16A34A] bg-white px-2.5 py-0.5 font-medium text-[#16A34A]" data-demo-target={approveDemoTarget}>
              Approve
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const FigmaCreateRequestModal = ({
  scale,
  category,
  submitDemoTarget,
}: {
  scale: FigmaScale;
  category: "grading" | "extension";
  submitDemoTarget?: string;
}) => {
  const s = scaleMap[scale];
  const categories = ["Grading", "Attendance", "Extension", "Accomodation", "Other"];
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-[72%] rounded-2xl bg-white shadow-2xl">
        <div className={`flex items-center justify-between border-b border-gray-200 px-4 py-2.5 font-bold text-gray-900 ${s.mainHeader}`}>
          Create Request
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 text-gray-500">
            <X className={s.composerTool} strokeWidth={2} />
          </span>
        </div>
        <div className="grid grid-cols-[30%_1fr]">
          <div className="border-r border-gray-100 py-3">
            {categories.map((cat) => {
              const gradingActive = category === "grading" && cat === "Grading";
              const extensionActive = category === "extension" && cat === "Extension";
              const active = gradingActive || extensionActive;
              return (
                <div
                  key={cat}
                  className={`relative px-4 py-2 ${s.sidebarText} ${active ? "font-bold text-gray-900" : "text-gray-500"} ${gradingActive ? "bg-blue-50" : ""}`}
                  data-demo-target={active && category === "grading" ? "0" : undefined}
                >
                  {gradingActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded bg-blue-600" />}
                  {extensionActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded" style={{ backgroundColor: FIGMA.orange }} />}
                  {cat}
                </div>
              );
            })}
          </div>
          <div className={`space-y-3 p-4 ${s.sidebarText}`}>
            <div className="grid grid-cols-[38%_1fr] items-center gap-3">
              <span className="text-right text-gray-600">Assignment</span>
              <div className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-1.5 text-gray-400">
                Select... <ChevronDown className={s.composerTool} strokeWidth={2} />
              </div>
            </div>
            {category === "extension" && (
              <div className="grid grid-cols-[38%_1fr] items-center gap-3">
                <span className="text-right text-gray-600">Date</span>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-1.5 text-gray-800">
                  04/26/2024 <ChevronDown className={s.composerTool} strokeWidth={2} />
                </div>
              </div>
            )}
            <div className="grid grid-cols-[38%_1fr] items-start gap-3">
              <span className="pt-2 text-right text-gray-600">Reason for request</span>
              <div className={`min-h-[100px] rounded-lg border border-gray-200 px-3 py-2 text-gray-400 ${s.composerText}`}>
                Describe the reason for this request
              </div>
            </div>
            <div className="grid grid-cols-[38%_1fr] items-center gap-3">
              <span className="text-right text-gray-600">Choose File</span>
              <button type="button" className="w-fit rounded-full border border-gray-400 px-4 py-0.5 font-medium text-gray-800">
                Choose
              </button>
            </div>
            <button type="button" className="mt-1 rounded-full border-2 border-gray-800 px-4 py-1 font-medium text-gray-900" data-demo-target={submitDemoTarget}>
              + Create Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FigmaSettingsModal = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  const tabs = ["Preferences", "Notifications", "Chats", "Feedback"];
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-[68%] rounded-2xl bg-white shadow-2xl">
        <div className={`flex items-center justify-between border-b border-gray-200 px-4 py-2.5 font-bold ${s.mainHeader}`}>
          Settings
          <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 text-gray-500">
            <X className={s.composerTool} strokeWidth={2} />
          </span>
        </div>
        <div className="grid grid-cols-[28%_1fr]">
          <div className="border-r border-gray-100 py-3">
            {tabs.map((tab, i) => (
              <div
                key={tab}
                className={`relative px-4 py-2 ${s.sidebarText} ${i === 0 ? "font-bold text-gray-900" : "text-gray-500"}`}
              >
                {i === 0 && <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded" style={{ backgroundColor: FIGMA.orange }} />}
                {tab}
              </div>
            ))}
          </div>
          <div className="flex flex-col p-4">
            <div className="mb-4 flex items-center gap-3">
              <FigmaAvatar scale={scale} photo="elena" size="md" />
              <span className={`font-bold ${s.msgName}`}>
                {W.people.instructor} <span className="ml-1 inline-block h-2 w-2 rounded-full bg-green-500 align-middle" />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className={`mb-2 font-bold uppercase tracking-wide text-gray-500 ${s.channelText}`}>Appearance</div>
                <div className={`flex items-center justify-between ${s.sidebarText}`}>
                  <span>Dark Mode</span>
                  <FigmaToggleSwitch scale={scale} />
                </div>
              </div>
              <div>
                <div className={`mb-2 font-bold uppercase tracking-wide text-gray-500 ${s.channelText}`}>Sounds</div>
                <div className={`mb-2 flex items-center justify-between ${s.sidebarText}`}>
                  <span>Sending a message</span>
                  <FigmaToggleSwitch scale={scale} />
                </div>
                <div className={`flex items-center justify-between ${s.sidebarText}`}>
                  <span>Receiving a message</span>
                  <FigmaToggleSwitch scale={scale} on />
                </div>
              </div>
            </div>
            <button type="button" className={`mt-auto self-start rounded-full border-2 border-gray-800 px-4 py-1 font-medium ${s.sidebarText}`} data-demo-target="settings-save">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FigmaChannelDetailsPanel = ({
  scale,
  activeTab = "photos",
  videosTabDemoTarget,
  docsTabDemoTarget,
  showSharedDoc,
}: {
  scale: FigmaScale;
  activeTab?: "photos" | "videos" | "docs";
  videosTabDemoTarget?: string;
  docsTabDemoTarget?: string;
  showSharedDoc?: boolean;
}) => {
  const s = scaleMap[scale];
  const tabs = [
    { id: "photos" as const, label: "Photos" },
    { id: "videos" as const, label: "Videos" },
    { id: "docs" as const, label: "Docs" },
  ];
  return (
    <aside className="flex h-full flex-col border-l border-gray-200 bg-white px-3 py-2.5">
      <div className={`mb-3 flex items-center justify-between font-bold text-gray-900 ${s.mainHeader}`}>
        Channel Details
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 text-gray-500">
          <X className={s.composerTool} strokeWidth={2} />
        </span>
      </div>
      <div className={`mb-1.5 font-bold text-gray-700 ${s.channelText}`}>Members</div>
      <div className={`mb-4 flex gap-1.5 ${s.channelText}`}>
        <button type="button" className="rounded-full border-2 border-gray-800 px-2 py-0.5 font-medium">View Members</button>
        <button type="button" className="rounded-full border-2 border-gray-800 px-2 py-0.5 font-medium">Add Members</button>
      </div>
      <div className={`mb-1.5 font-bold text-gray-700 ${s.channelText}`}>Options</div>
      <div className={`mb-4 flex flex-col gap-1.5 ${s.channelText}`}>
        <button type="button" className="w-fit rounded-full border-2 border-gray-800 px-2 py-0.5 font-medium">Rename Channel</button>
        <button type="button" className="w-fit rounded-full border-2 border-red-500 px-2 py-0.5 font-medium text-red-600">
          Delete and Exit
        </button>
      </div>
      <div className={`mb-2 font-bold text-gray-700 ${s.channelText}`}>Shared Media</div>
      <div className="flex min-h-0 flex-1">
        <div className="mr-3 space-y-1.5">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`relative pl-2.5 ${s.channelText} ${activeTab === tab.id ? "font-bold text-gray-900" : "text-gray-500"}`}
              data-demo-target={
                tab.id === "videos" ? videosTabDemoTarget : tab.id === "docs" ? docsTabDemoTarget : undefined
              }
            >
              {activeTab === tab.id && (
                <span className="absolute left-0 top-0 bottom-0 w-1 rounded" style={{ backgroundColor: FIGMA.orange }} />
              )}
              {tab.label}
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col border-l border-gray-100 py-2 pl-3">
          {activeTab === "docs" && showSharedDoc ? (
            <div className={`inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 shadow-sm ${s.channelText}`}>
              <span className="text-orange-500">📄</span>
              <span className="font-bold text-gray-800">{W.files.project}</span>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center text-gray-400">
              <span className={s.channelText}>No records found</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export const FigmaThreadHoverBar = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  const icon = scale === "guide" ? "h-[10px] w-[10px]" : "h-[13px] w-[13px]";
  const emoji = scale === "guide" ? "text-[9px]" : "text-[11px]";
  return (
    <div className={`absolute -top-2 right-0 z-10 flex items-center gap-0.5 rounded-full border border-gray-200 bg-white px-1.5 py-0.5 shadow-md`}>
      <span className={`flex ${icon} items-center justify-center rounded-full bg-green-500`}>
        <Check className={`${scale === "guide" ? "h-[6px] w-[6px]" : "h-[8px] w-[8px]"} text-white`} strokeWidth={3} />
      </span>
      <span className={`rounded-full border border-gray-100 px-1 leading-none ${emoji}`}>👀</span>
      <span className={`rounded-full border border-gray-100 px-1 leading-none ${emoji}`}>🙏</span>
      <span className={`rounded-full border border-gray-100 px-1 leading-none ${emoji}`}>😊</span>
      <Reply className={`${icon} text-gray-500`} strokeWidth={2} />
      <Share2 className={`${icon} text-gray-500`} strokeWidth={2} />
      <MoreHorizontal className={`${icon} text-gray-500`} strokeWidth={2} />
    </div>
  );
};

export const FigmaThreadPanel = ({
  scale,
  closeDemoTarget,
  sendDemoTarget,
  showPostedReply,
}: {
  scale: FigmaScale;
  closeDemoTarget?: string;
  sendDemoTarget?: string;
  showPostedReply?: boolean;
}) => {
  const s = scaleMap[scale];
  return (
    <aside className="flex h-full min-w-0 flex-col overflow-hidden border-l border-gray-200 bg-white px-2.5 py-2">
      <div className={`mb-2 flex flex-shrink-0 items-center justify-between font-bold ${s.mainHeader}`}>
        Thread
        <span
          className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 text-gray-500"
          data-demo-target={closeDemoTarget}
        >
          <X className={s.composerTool} strokeWidth={2} />
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
        <div className="relative mb-2">
          <FigmaMessageRow scale={scale} photo="maya">
            Hi <FigmaTag type="person" scale={scale} />
          </FigmaMessageRow>
        </div>
        {showPostedReply && (
          <>
            <FigmaDateDivider date="Today" scale={scale} />
            <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
              Thanks — that clears it up for our study group.
            </FigmaMessageRow>
          </>
        )}
      </div>
      <FigmaComposer scale={scale} sendDemoTarget={sendDemoTarget} />
    </aside>
  );
};
