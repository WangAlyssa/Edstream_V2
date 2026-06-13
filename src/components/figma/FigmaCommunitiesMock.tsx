import type { ReactNode } from "react";
import {
  BookOpen,
  ChevronDown,
  CircleHelp,
  Home,
  Megaphone,
  MessageSquare,
  PanelLeft,
  Plus,
  Search,
  Send,
  Users,
  X,
} from "lucide-react";
import { FIGMA_WORLD } from "./figmaAssets";
import { FIGMA, scaleMap, type FigmaScale } from "./FigmaMockParts";

const W = FIGMA_WORLD;

const COMMUNITY = {
  navy: "#1C2340",
  sidebar: "#3D4789",
  sidebarActive: "#2F3768",
  header: "#3D4789",
} as const;

const FigmaCommunitiesShell = ({
  scale,
  children,
  sidebarBody,
}: {
  scale: FigmaScale;
  children: ReactNode;
  sidebarBody?: ReactNode;
}) => {
  const navIcon = scale === "guide" ? "h-[11px] w-[11px]" : "h-[14px] w-[14px]";
  const navLabel = scale === "guide" ? "text-[6px]" : "text-[8px]";

  return (
    <div className="flex h-full min-h-0 overflow-hidden bg-[#ECEEF2]">
      <aside
        className={`flex flex-shrink-0 flex-col items-center py-2 ${scale === "guide" ? "w-[4%] min-w-[20px]" : "w-[3.8%] min-w-[28px]"}`}
        style={{ backgroundColor: COMMUNITY.navy }}
      >
        <div
          className={`flex items-center justify-center rounded border border-white/30 text-white ${scale === "guide" ? "h-[16px] w-[16px]" : "h-[22px] w-[22px]"}`}
        >
          <Home className={navIcon} strokeWidth={2} />
        </div>
      </aside>

      <aside
        className={`flex flex-shrink-0 flex-col ${scale === "guide" ? "w-[22%] min-w-[72px]" : "w-[24%] min-w-[108px] max-w-[148px]"}`}
        style={{ backgroundColor: COMMUNITY.sidebar }}
      >
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-3 text-center text-white">
          {sidebarBody ?? (
            <>
              <Users className={`mb-2 text-white/90 ${scale === "guide" ? "h-[22px] w-[22px]" : "h-[34px] w-[34px]"}`} strokeWidth={1.5} />
              <p className={`font-bold leading-tight ${scale === "guide" ? "text-[8px]" : "text-[11px]"}`}>Select a community</p>
              <p className={`mt-1 leading-snug text-white/70 ${scale === "guide" ? "text-[6px]" : "text-[9px]"}`}>
                Choose from the sidebar or browse communities to get started.
              </p>
            </>
          )}
        </div>
        <div className={`grid grid-cols-3 border-t border-white/15 ${scale === "guide" ? "py-1" : "py-1.5"}`} data-guide-highlight="bottom-nav-all">
          {[
            { id: "courses", label: "Courses", icon: BookOpen, active: false, highlight: "bottom-nav-courses" },
            { id: "communities", label: "Communities", icon: Users, active: true, highlight: "bottom-nav-communities" },
            { id: "dms", label: "DMs", icon: MessageSquare, active: false, highlight: "bottom-nav-dms" },
          ].map((tab) => (
            <div
              key={tab.id}
              className={`flex flex-col items-center gap-0.5 px-0.5 ${navLabel} ${tab.active ? "text-white" : "text-white/60"}`}
              style={tab.active ? { backgroundColor: COMMUNITY.sidebarActive } : undefined}
              data-guide-highlight={tab.highlight}
            >
              <tab.icon className={navIcon} strokeWidth={2} />
              <span className="truncate">{tab.label}</span>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
};

const FigmaCommunitiesHeader = ({ scale }: { scale: FigmaScale }) => {
  const s = scaleMap[scale];
  return (
    <div
      className={`flex flex-shrink-0 items-center gap-2 px-3 text-white ${s.topH}`}
      style={{ backgroundColor: COMMUNITY.header }}
    >
      <PanelLeft className={`flex-shrink-0 text-white/90 ${s.composerTool}`} strokeWidth={2} />
      <div
        className={`mx-auto flex w-full max-w-[72%] items-center rounded-full px-3 ${s.searchH}`}
        style={{ backgroundColor: "rgba(255,255,255,0.14)" }}
      >
        <Search className={`mr-1.5 flex-shrink-0 text-white/70 ${s.composerTool}`} strokeWidth={2} />
        <span className={`truncate text-white/75 ${s.searchText}`}>Search communities</span>
      </div>
    </div>
  );
};

const FigmaCreateCommunityModal = ({
  scale,
  filled = false,
  nameDemoTarget,
  submitDemoTarget,
  closeDemoTarget,
}: {
  scale: FigmaScale;
  filled?: boolean;
  nameDemoTarget?: string;
  submitDemoTarget?: string;
  closeDemoTarget?: string;
}) => {
  const s = scaleMap[scale];
  const label = scale === "guide" ? "text-[8px]" : "text-[10px]";
  const field = scale === "guide" ? "text-[8px]" : "text-[10px]";

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 p-4">
      <div className={`w-full max-w-[58%] rounded-2xl bg-white shadow-2xl ${scale === "guide" ? "p-3" : "p-5"}`}>
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <h3 className={`font-bold text-gray-900 ${s.mainHeader}`}>Create a community</h3>
            <p className={`mt-0.5 text-gray-500 ${label}`}>Fill out the details below to request a new community.</p>
          </div>
          <button
            type="button"
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-gray-400"
            data-demo-target={closeDemoTarget}
          >
            <X className={s.composerTool} strokeWidth={2} />
          </button>
        </div>

        <div className="space-y-2.5">
          <div>
            <div className={`mb-1 flex items-center gap-1 font-medium text-gray-700 ${label}`}>
              Visibility<span className="text-red-500">*</span>
              <CircleHelp className="h-3 w-3 text-gray-400" strokeWidth={2} />
            </div>
            <div className={`flex items-center justify-between rounded-lg border border-gray-200 px-3 py-1.5 text-gray-400 ${field}`}>
              {filled ? "Public" : "Select visibility"}
              <ChevronDown className={s.composerTool} strokeWidth={2} />
            </div>
          </div>

          <div>
            <div className={`mb-1 font-medium text-gray-700 ${label}`}>
              Name<span className="text-red-500">*</span>
            </div>
            <div
              className={`rounded-lg border px-3 py-1.5 ${field} ${
                filled ? "border-gray-300 text-gray-900" : "border-gray-200 text-gray-400"
              } ${nameDemoTarget ? "ring-2 ring-orange-200" : ""}`}
              data-demo-target={nameDemoTarget}
            >
              {filled ? W.communities.sampleName : "Enter community name"}
            </div>
          </div>

          <div>
            <div className={`mb-1 font-medium text-gray-700 ${label}`}>Description</div>
            <div
              className={`min-h-[52px] rounded-lg border border-gray-200 px-3 py-1.5 leading-snug ${field} ${
                filled ? "text-gray-700" : "text-gray-400"
              }`}
            >
              {filled ? W.communities.sampleDescription : "Enter community description"}
            </div>
          </div>

          <div>
            <div className={`mb-1 font-medium text-gray-700 ${label}`}>Tags</div>
            <div className={`flex items-center justify-between rounded-lg border border-gray-200 px-3 py-1.5 text-gray-400 ${field}`}>
              {filled ? "Study Groups" : "Select tags"}
              <ChevronDown className={s.composerTool} strokeWidth={2} />
            </div>
          </div>

          <div>
            <div className={`mb-1 flex items-center gap-1 font-medium text-gray-700 ${label}`}>
              Icon
              <CircleHelp className="h-3 w-3 text-gray-400" strokeWidth={2} />
            </div>
            <div className={`flex items-center gap-2 ${field}`}>
              <button type="button" className="rounded-md border border-gray-300 px-2.5 py-0.5 font-medium text-gray-700">
                Choose File
              </button>
              <span className="text-gray-400">{filled ? "study-hub.png" : "No file chosen"}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 font-semibold text-white ${field}`}
          style={{ backgroundColor: FIGMA.navy }}
          data-demo-target={submitDemoTarget}
        >
          <Send className={s.composerTool} strokeWidth={2} />
          Request to create
        </button>
      </div>
    </div>
  );
};

const CommunitiesBrowseBody = ({
  scale,
  createDemoTarget,
}: {
  scale: FigmaScale;
  createDemoTarget?: string;
}) => {
  const s = scaleMap[scale];
  const title = scale === "guide" ? "text-[12px]" : "text-[18px]";

  return (
    <div className="relative min-h-0 flex-1 overflow-hidden px-4 py-3">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h2 className={`font-bold text-gray-900 ${title}`}>Communities</h2>
        <div className={`ml-auto flex items-center gap-1.5 text-gray-600 ${s.channelText}`}>
          <span>Filter by tags:</span>
          <div className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-0.5 text-gray-400">
            Select tags
            <ChevronDown className={s.composerTool} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="grid h-[calc(100%-2rem)] grid-cols-[1fr_0.85fr] gap-3">
        <div className="flex flex-col items-center justify-center text-center text-gray-400">
          <Search className={`mb-2 ${scale === "guide" ? "h-[18px] w-[18px]" : "h-[28px] w-[28px]"}`} strokeWidth={1.5} />
          <p className={`font-semibold text-gray-500 ${s.mainHeader}`}>No communities found</p>
          <p className={`mt-0.5 ${s.channelText}`}>Try adjusting your search or filters.</p>
        </div>

        <button
          type="button"
          className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white/80 text-gray-500 transition hover:border-gray-400"
          data-demo-target={createDemoTarget}
        >
          <Plus className={`mb-1 ${scale === "guide" ? "h-[16px] w-[16px]" : "h-[24px] w-[24px]"}`} strokeWidth={1.75} />
          <span className={`font-medium ${s.sidebarText}`}>Create a Community</span>
        </button>
      </div>

      <button
        type="button"
        className={`absolute bottom-2 right-2 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-md ${scale === "guide" ? "h-[22px] w-[22px]" : "h-[32px] w-[32px]"}`}
      >
        <Megaphone className={`text-gray-700 ${scale === "guide" ? "h-[10px] w-[10px]" : "h-[14px] w-[14px]"}`} strokeWidth={2} />
      </button>
    </div>
  );
};

/** Feature GIF: Communities browse page (app.edstream.io/communities). */
export const CommunitiesBrowseFrame = ({
  scale,
  createDemoTarget,
}: {
  scale: FigmaScale;
  createDemoTarget?: string;
}) => (
  <FigmaCommunitiesShell scale={scale}>
    <FigmaCommunitiesHeader scale={scale} />
    <CommunitiesBrowseBody scale={scale} createDemoTarget={createDemoTarget} />
  </FigmaCommunitiesShell>
);

/** Feature GIF: Create community modal — empty form. */
export const CommunitiesCreateModalFrame = ({
  scale,
  nameDemoTarget,
}: {
  scale: FigmaScale;
  nameDemoTarget?: string;
}) => (
  <div className="relative h-full">
    <FigmaCommunitiesShell scale={scale}>
      <FigmaCommunitiesHeader scale={scale} />
      <CommunitiesBrowseBody scale={scale} />
    </FigmaCommunitiesShell>
    <FigmaCreateCommunityModal scale={scale} nameDemoTarget={nameDemoTarget} />
  </div>
);

/** Feature GIF: Create community modal — filled form ready to submit. */
export const CommunitiesSubmitModalFrame = ({
  scale,
  submitDemoTarget,
}: {
  scale: FigmaScale;
  submitDemoTarget?: string;
}) => (
  <div className="relative h-full">
    <FigmaCommunitiesShell scale={scale}>
      <FigmaCommunitiesHeader scale={scale} />
      <CommunitiesBrowseBody scale={scale} />
    </FigmaCommunitiesShell>
    <FigmaCreateCommunityModal scale={scale} filled submitDemoTarget={submitDemoTarget} />
  </div>
);
