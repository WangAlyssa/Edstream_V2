import type { ReactNode } from "react";
import { X } from "lucide-react";
import {
  FigmaCanvasShell,
  FigmaChannelHeader,
  FigmaComposer,
  FigmaCreateRequestModal,
  FigmaDateDivider,
  FigmaExtensionCard,
  FigmaSettingsModal,
  FigmaStandaloneShell,
  FigmaTag,
  FigmaThreadPanel,
  FigmaMessageRow,
  FigmaSystemMessage,
  FigmaReplyLink,
  FigmaReactionRow,
  FigmaReplyChip,
  FigmaRequestFilterPills,
  FRAME2_CHANNELS,
  scaleMap,
  FigmaCanvasGlobalNav,
  FigmaCanvasCourseNav,
  FigmaAppSidebar,
  FigmaTopBar,
  FigmaAvatar,
  type FigmaScale,
} from "./FigmaMockParts";

import { FigmaChannelDetailsPanel } from "./FigmaMockParts";
import { FIGMA_WORLD } from "./figmaAssets";

export type FigmaFrameId =
  | "canvas-channel-chat"
  | "standalone-channel"
  | "channel-thread"
  | "settings-modal"
  | "create-request-grading"
  | "create-request-extension"
  | "requests-instructor"
  | "requests-student"
  | "channel-details-empty"
  | "canvas-create-request";

export const CanvasChannelChatFrame = ({
  scale,
  replyDemoTarget,
  attachDemoTarget,
  sendDemoTarget,
}: {
  scale: FigmaScale;
  replyDemoTarget?: string;
  attachDemoTarget?: string;
  sendDemoTarget?: string;
}) => (
  <FigmaCanvasShell scale={scale} activeChannel="renamed-general">
    <FigmaChannelHeader scale={scale} title={FIGMA_WORLD.channels.discussion} members="5 Members" />
    <div className="min-h-0 flex-1 overflow-y-auto">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" footer={<div className="mt-0.5"><FigmaReplyLink scale={scale} demoTarget={replyDemoTarget} /></div>}>
        Content of message. <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
      <FigmaSystemMessage text="Sofia Patel joined" scale={scale} />
      <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" footer={
        <div className="mt-0.5 flex flex-col gap-0.5">
          <FigmaReactionRow scale={scale} />
          <FigmaReplyLink scale={scale} />
        </div>
      }>
        Content of message. <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
      <FigmaSystemMessage text="Ethan Brooks joined" scale={scale} />
      <FigmaDateDivider date="Mar 5th, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" footer={
        <div className="mt-0.5 flex flex-col gap-0.5">
          <FigmaReactionRow scale={scale} />
          <FigmaReplyLink scale={scale} />
        </div>
      }>
        Helllo <FigmaTag type="person" scale={scale} />
      </FigmaMessageRow>
      <FigmaSystemMessage text="Liam Foster joined" scale={scale} />
      <FigmaDateDivider date="Mar 12th, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
        <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
      <FigmaDateDivider date="Mar 25th, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
        <FigmaTag type="contact" scale={scale} /> Content of message.
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} attachDemoTarget={attachDemoTarget} sendDemoTarget={sendDemoTarget} />
  </FigmaCanvasShell>
);

export const StandaloneChannelFrame = ({
  scale,
  replyDemoTarget,
  requestsDemoTarget,
  showReplyPosted,
}: {
  scale: FigmaScale;
  replyDemoTarget?: string;
  requestsDemoTarget?: string;
  showReplyPosted?: boolean;
}) => (
  <FigmaStandaloneShell
    scale={scale}
    activeChannel="parent"
    channels={FRAME2_CHANNELS}
    requestsDemoTarget={requestsDemoTarget}
    requestsNotify={Boolean(requestsDemoTarget)}
  >
    <FigmaChannelHeader scale={scale} title="# course-discussion (parent)" members="4 Members" />
    <div className="min-h-0 flex-1 overflow-y-auto">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" showBot relaxed>
        Hi <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
      <FigmaDateDivider date="Mar 5th, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" showBot edited relaxed footer={<div className="mt-1"><FigmaReplyLink scale={scale} demoTarget={replyDemoTarget} /></div>}>
        <FigmaTag type="contact" scale={scale} /> Content of message.
      </FigmaMessageRow>
      {showReplyPosted && (
        <>
          <FigmaDateDivider date="Today" scale={scale} />
          <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" showBot relaxed>
            Thanks — that clears it up for our study group.
          </FigmaMessageRow>
        </>
      )}
      <FigmaDateDivider date="Mar 12th, 2024" scale={scale} />
      <FigmaMessageRow
        scale={scale}
        photo="maya"
        name="Maya Chen"
        showBot
        relaxed
        footer={
          <div className="mt-1 space-y-1">
            <div>
              <FigmaTag type="contact" scale={scale} /> 1 when is it?
            </div>
            <FigmaReplyLink scale={scale} />
          </div>
        }
      >
        Hi <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
      <FigmaDateDivider date="Mar 25th, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" showBot relaxed>
        <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
      <FigmaDateDivider date="Saturday" scale={scale} />
      <FigmaDateDivider date="Today" scale={scale} />
      <FigmaMessageRow
        scale={scale}
        photo="maya"
        name="Maya Chen"
        showBot
        relaxed
        footer={
          <div className="mt-1">
            <FigmaTag type="contact" scale={scale} /> How are you doing?{" "}
            <span className={`text-gray-400 ${scaleMap[scale].msgTime}`}>10:56 AM</span>
          </div>
        }
      >
        Hi, I have a question on <FigmaTag type="page" scale={scale} />
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

export const ChannelThreadFrame = ({
  scale,
  sendDemoTarget,
  showPostedReply,
}: {
  scale: FigmaScale;
  sendDemoTarget?: string;
  showPostedReply?: boolean;
}) => {
  const chatMain = (
    <>
      <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
      <div className="min-h-0 flex-1 overflow-hidden opacity-90">
        <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
        <FigmaMessageRow scale={scale}>
          Hi <FigmaTag type="person" scale={scale} />
          <div className={`mt-0.5 text-blue-600 ${scale === "guide" ? "text-[7px]" : "text-[10px]"}`}>1 reply</div>
        </FigmaMessageRow>
        <div className={`my-1 text-center text-gray-400 ${scale === "guide" ? "text-[7px]" : "text-[10px]"}`}>
          Sofia Patel joined
        </div>
      </div>
      <FigmaComposer scale={scale} />
    </>
  );

  return (
    <FigmaStandaloneShell scale={scale} activeChannel="renamed-general">
      <div className="flex min-h-0 flex-1 gap-0">
        <div className="flex min-w-0 flex-1 flex-col pr-1">{chatMain}</div>
        <div className="w-[42%] min-w-0 border-l border-gray-200">
          <FigmaThreadPanel scale={scale} sendDemoTarget={sendDemoTarget} showPostedReply={showPostedReply} />
        </div>
      </div>
    </FigmaStandaloneShell>
  );
};

export const CanvasThreadFrame = ({ scale, closeDemoTarget }: { scale: FigmaScale; closeDemoTarget?: string }) => (
  <div className="flex h-full min-h-0 flex-col">
    <div className="flex min-h-0 flex-1">
      <FigmaCanvasGlobalNav scale={scale} />
      <FigmaCanvasCourseNav scale={scale} />
      <div className="flex min-w-0 flex-1 flex-col">
        <FigmaTopBar scale={scale} />
        <div className="flex min-h-0 flex-1">
          <FigmaAppSidebar scale={scale} activeChannel="renamed-general" />
          <main className="flex min-w-0 flex-[1.55] flex-col overflow-hidden bg-white px-3 py-2">
            <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
            <div className="min-h-0 flex-1 overflow-y-auto">
              <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" footer={<div className="mt-0.5"><FigmaReplyLink scale={scale} /></div>}>
                Hi <FigmaTag type="person" scale={scale} />
              </FigmaMessageRow>
              <FigmaSystemMessage text="Sofia Patel joined" scale={scale} />
              <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" footer={
                <div className="mt-0.5 flex flex-col gap-0.5">
                  <FigmaReactionRow scale={scale} />
                  <FigmaReplyLink scale={scale} />
                </div>
              }>
                Content of message. <FigmaTag type="page" scale={scale} />
              </FigmaMessageRow>
              <FigmaSystemMessage text="Ethan Brooks joined" scale={scale} />
              <FigmaDateDivider date="Mar 5th, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" footer={
                <div className="mt-0.5 flex flex-col gap-0.5">
                  <FigmaReactionRow scale={scale} />
                  <FigmaReplyLink scale={scale} />
                </div>
              }>
                Helllo <FigmaTag type="person" scale={scale} />
              </FigmaMessageRow>
              <FigmaSystemMessage text="Liam Foster joined" scale={scale} />
              <FigmaDateDivider date="Mar 12th, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
                <FigmaTag type="page" scale={scale} />
              </FigmaMessageRow>
              <FigmaDateDivider date="Mar 25th, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
                <FigmaTag type="contact" scale={scale} /> Content of message.
              </FigmaMessageRow>
            </div>
            <FigmaComposer scale={scale} />
          </main>
          <div className="min-w-0 flex-[0.82] max-w-[38%]">
            <FigmaThreadPanel scale={scale} closeDemoTarget={closeDemoTarget} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SettingsModalFrame = ({ scale }: { scale: FigmaScale }) => (
  <div className="relative h-full">
    <FigmaStandaloneShell scale={scale} activeItem="requests" activeChannel="guided">
      <FigmaChannelHeader scale={scale} title="Requests" members="2 Members" />
      <FigmaRequestFilterPills scale={scale} />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
        <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
          Content of message. <FigmaTag type="page" scale={scale} /> <FigmaTag type="contact" scale={scale} />
        </FigmaMessageRow>
        <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
        <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
          <FigmaExtensionCard scale={scale} variant="thread" />
        </FigmaMessageRow>
      </div>
      <FigmaComposer scale={scale} />
    </FigmaStandaloneShell>
    <FigmaSettingsModal scale={scale} />
  </div>
);

export const CreateRequestFrame = ({
  scale,
  category,
  canvas = false,
  submitDemoTarget,
}: {
  scale: FigmaScale;
  category: "grading" | "extension";
  canvas?: boolean;
  submitDemoTarget?: string;
}) => {
  const inner = (
    <>
      <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
        <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
          <FigmaTag type="contact" scale={scale} /> Content of message.
        </FigmaMessageRow>
        <FigmaDateDivider date="Mar 25th, 2024" scale={scale} />
        <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
          <FigmaTag type="page" scale={scale} />
        </FigmaMessageRow>
      </div>
      <FigmaComposer scale={scale} />
    </>
  );

  return (
    <div className="relative h-full">
      {canvas ? (
        <FigmaCanvasShell scale={scale} activeItem="requests" activeChannel="renamed-general">
          {inner}
        </FigmaCanvasShell>
      ) : (
        <FigmaStandaloneShell scale={scale} activeItem="requests" activeChannel="renamed-general">
          {inner}
        </FigmaStandaloneShell>
      )}
      <FigmaCreateRequestModal scale={scale} category={category} submitDemoTarget={submitDemoTarget} />
    </div>
  );
};

export const RequestsInstructorFrame = ({
  scale,
  withThread = false,
  approveDemoTarget,
  approved = false,
  topBarUserDemoTarget,
}: {
  scale: FigmaScale;
  withThread?: boolean;
  approveDemoTarget?: string;
  approved?: boolean;
  topBarUserDemoTarget?: string;
}) => {
  const main = (
    <>
      <FigmaChannelHeader scale={scale} title="Requests" members="2 Members" />
      <FigmaRequestFilterPills scale={scale} />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
        <FigmaSystemMessage text="Sofia Patel joined" scale={scale} />
        <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
        <FigmaMessageRow scale={scale} photo="jordan" name={FIGMA_WORLD.people.jordan} showShield footer={<FigmaReplyChip scale={scale} />}>
          <FigmaExtensionCard
            scale={scale}
            variant="instructor"
            approveDemoTarget={approved ? undefined : approveDemoTarget}
            approved={approved}
          />
        </FigmaMessageRow>
      </div>
      <FigmaComposer scale={scale} />
    </>
  );

  const shell = (content: ReactNode) => (
    <FigmaStandaloneShell
      scale={scale}
      activeItem="requests"
      activeChannel="none"
      topBarUserLabel={FIGMA_WORLD.people.instructor}
      topBarUserDemoTarget={topBarUserDemoTarget}
    >
      {content}
    </FigmaStandaloneShell>
  );

  if (withThread) {
    return shell(
      <div className="flex min-h-0 flex-1">
        <div className="flex min-w-0 flex-[1.55] flex-col pr-1">{main}</div>
        <div className="min-w-0 flex-[0.82] max-w-[38%] border-l border-gray-200">
          <aside className="flex h-full flex-col overflow-hidden px-2.5 py-2">
            <div className={`mb-2 flex flex-shrink-0 items-center justify-between font-bold ${scaleMap[scale].mainHeader}`}>
              <span>
                Thread <span className="ml-1 font-normal text-gray-400">Requests</span>
              </span>
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 text-gray-500">
                <X className={scaleMap[scale].composerTool} strokeWidth={2} />
              </span>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen" showShield>
                <FigmaExtensionCard scale={scale} variant="thread" />
              </FigmaMessageRow>
              <FigmaReplyChip scale={scale} />
              <div className={`my-2 text-gray-400 ${scaleMap[scale].msgTime}`}>Loading...</div>
            </div>
            <FigmaComposer scale={scale} />
          </aside>
        </div>
      </div>,
    );
  }

  return shell(main);
};

export const RequestsStudentFrame = ({
  scale,
  createDemoTarget,
  showCreateOnly = false,
  showNewPendingOnly = false,
  topBarUserLabel,
  topBarUserDemoTarget,
  activeItem = "requests",
}: {
  scale: FigmaScale;
  createDemoTarget?: string;
  showCreateOnly?: boolean;
  showNewPendingOnly?: boolean;
  topBarUserLabel?: string;
  topBarUserDemoTarget?: string;
  activeItem?: "requests" | "channels" | "messages" | "none";
}) => (
  <FigmaStandaloneShell
    scale={scale}
    activeItem={activeItem}
    activeChannel="none"
    topBarUserLabel={topBarUserLabel}
    topBarUserDemoTarget={topBarUserDemoTarget}
  >
    <FigmaChannelHeader scale={scale} title="# Requests" members="4 Members" />
    <div className="min-h-0 flex-1 overflow-y-auto pb-2">
      {!showCreateOnly && (
        <>
          {showNewPendingOnly ? (
            <>
              <FigmaDateDivider date="Today" scale={scale} />
              <FigmaMessageRow scale={scale} photo="jordan" name={FIGMA_WORLD.people.jordan}>
                <FigmaExtensionCard scale={scale} variant="student" pendingNew />
              </FigmaMessageRow>
            </>
          ) : (
            <>
              <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="jordan" name={FIGMA_WORLD.people.jordan}>
                <FigmaExtensionCard scale={scale} variant="student" />
              </FigmaMessageRow>
              <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="jordan" name={FIGMA_WORLD.people.jordan}>
                <FigmaExtensionCard scale={scale} variant="student" />
              </FigmaMessageRow>
              <FigmaDateDivider date="Mar 5th, 2024" scale={scale} />
            </>
          )}
        </>
      )}
    </div>
    <div className="flex flex-shrink-0 justify-center py-2">
      <button
        type="button"
        className={`rounded-full border-2 border-gray-800 bg-white px-4 py-1 font-medium text-gray-900 ${scale === "guide" ? "text-[9px]" : "text-[11px]"}`}
        data-demo-target={createDemoTarget}
      >
        + Create New Request
      </button>
    </div>
  </FigmaStandaloneShell>
);

export const ChannelDetailsEmptyFrame = ({
  scale,
  activeTab = "photos",
  infoDemoTarget,
  videosTabDemoTarget,
  docsTabDemoTarget,
  showSharedDoc,
}: {
  scale: FigmaScale;
  activeTab?: "photos" | "videos" | "docs";
  infoDemoTarget?: string;
  videosTabDemoTarget?: string;
  docsTabDemoTarget?: string;
  showSharedDoc?: boolean;
}) => (
  <FigmaStandaloneShell scale={scale} activeChannel="demo-123">
    <div className="flex min-h-0 flex-1">
      <div className="flex min-w-0 flex-[1.62] flex-col pr-1">
        <FigmaChannelHeader scale={scale} title="# office-hours" members="1 Member" infoDemoTarget={infoDemoTarget} />
        <div className="flex min-h-0 flex-1 items-center justify-center text-gray-400">
          <span className={scale === "guide" ? "text-[10px]" : "text-sm"}>No messages found</span>
        </div>
        <FigmaComposer scale={scale} />
      </div>
      <div className="min-w-0 flex-[0.78] max-w-[34%]">
        <FigmaChannelDetailsPanel
          scale={scale}
          activeTab={activeTab}
          videosTabDemoTarget={videosTabDemoTarget}
          docsTabDemoTarget={docsTabDemoTarget}
          showSharedDoc={showSharedDoc}
        />
      </div>
    </div>
  </FigmaStandaloneShell>
);

export const SidebarComposeFrame = ({ scale }: { scale: FigmaScale }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" highlightCompose>
    <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
    <div className="min-h-0 flex-1 overflow-hidden">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale}>Content of message.</FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

export const MessageReplyFrame = ({ scale, replyDemoTarget }: { scale: FigmaScale; replyDemoTarget?: string }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="renamed-general">
    <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
    <div className="min-h-0 flex-1">
      <div className="relative pr-12">
        <FigmaMessageRow scale={scale}>
          Hi, I have a question on <FigmaTag type="page" scale={scale} />
        </FigmaMessageRow>
        <div className={`absolute right-0 top-0 flex items-center gap-0.5 rounded-full border bg-white px-1 py-0.5 shadow-sm ${scale === "guide" ? "text-[7px]" : "text-[10px]"}`}>
          <span>👍</span><span>😊</span>
          <span className="rounded bg-blue-50 px-0.5 text-blue-600" data-demo-target={replyDemoTarget}>↩</span>
        </div>
        <button type="button" className={`mt-0.5 font-bold text-blue-600 ${scale === "guide" ? "text-[7px]" : "text-[10px]"}`}>
          1 reply
        </button>
      </div>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

export const CanvasCourseHomeFrame = ({ scale, edStreamDemoTarget }: { scale: FigmaScale; edStreamDemoTarget?: string }) => (
  <div className="flex h-full bg-[#f5f5f5]">
    <aside
      className={`flex flex-col items-center gap-2 py-2 text-white ${scale === "guide" ? "w-[5%] min-w-[22px] text-[5px]" : "w-[52px] text-[7px]"}`}
      style={{ backgroundColor: "#394b58" }}
    >
      <div className={`rounded bg-white/15 ${scale === "guide" ? "h-4 w-4" : "h-6 w-6"}`} />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`rounded bg-white/10 ${scale === "guide" ? "h-3 w-3" : "h-4 w-4"}`} />
      ))}
    </aside>
    <aside className={`border-r border-gray-200 bg-white py-2 ${scale === "guide" ? "w-[18%]" : "w-[130px]"}`}>
      {["Home", "Assignments", "Discussions", "Grades", "People", "Syllabus", "Ed Stream Chat", "Modules"].map(
        (link) => (
          <div
            key={link}
            className={`truncate px-2 py-0.5 ${scale === "guide" ? "text-[6px]" : "text-[9px]"} ${
              link === "Ed Stream Chat"
                ? "border-l-2 border-orange-400 bg-orange-50 font-bold text-gray-900"
                : link === "Home"
                  ? "border-l-2 border-[#0374b5] font-bold text-[#0374b5]"
                  : "text-[#0374B5]"
            }`}
            data-demo-target={link === "Ed Stream Chat" ? edStreamDemoTarget : undefined}
          >
            {link}
          </div>
        ),
      )}
    </aside>
    <main className="flex min-w-0 flex-1 flex-col">
      <div className={`flex items-center justify-between border-b bg-white px-3 py-1.5 ${scale === "guide" ? "text-[8px]" : "text-[11px]"}`}>
        <span className="font-bold">CS 204</span>
        <span className="rounded border border-gray-200 px-1.5 text-gray-500">View as Student</span>
      </div>
      <div className="flex flex-1 p-2">
        <div className="flex-1 rounded-lg bg-gradient-to-br from-[#1a3a6b] to-[#1a2f5c] p-3 text-white">
          <p className={scale === "guide" ? "text-[7px]" : "text-[10px]"}>CS 204</p>
          <h2 className={`font-black ${scale === "guide" ? "text-[10px]" : "text-base"}`}>Data Structures</h2>
        </div>
      </div>
    </main>
  </div>
);

export const CanvasSettingsFrame = ({ scale }: { scale: FigmaScale }) => (
  <div className={`flex h-full flex-col bg-gray-50 ${scale === "guide" ? "text-[7px]" : "text-[10px]"}`}>
    <div className="border-b bg-white px-3 py-1.5 font-bold text-gray-700">Canvas · Course Settings · Navigation</div>
    <div className="grid flex-1 grid-cols-2 gap-2 p-2">
      <div className="rounded border bg-white p-2">
        <div className="mb-1 font-bold text-gray-500">Hidden</div>
        {["Files", "Quizzes", "EdStream"].map((item) => (
          <div key={item} className="mb-0.5 rounded border border-dashed px-2 py-0.5 text-gray-400">{item}</div>
        ))}
      </div>
      <div className="rounded border bg-white p-2">
        <div className="mb-1 font-bold text-gray-500">Enabled course navigation</div>
        {["Home", "Announcements", "Modules", "Grades"].map((item) => (
          <div key={item} className="mb-0.5 rounded border px-2 py-0.5 text-gray-600">{item}</div>
        ))}
        <div className="mb-0.5 rounded border-2 border-orange-300 bg-orange-50 px-2 py-0.5 font-bold text-blue-700">
          EdStream
        </div>
        <button type="button" className="mt-1 w-full rounded-lg bg-[#3B5998] py-1 font-bold text-white">Save</button>
      </div>
    </div>
  </div>
);

export const CanvasEnableFrame = ({ scale }: { scale: FigmaScale }) => (
  <div className={`flex h-full flex-col bg-gray-50 p-2 ${scale === "guide" ? "text-[7px]" : "text-[10px]"}`}>
    <div className="rounded-lg border bg-white p-2">
      <h3 className="mb-2 font-black">Institution Admin · External Apps</h3>
      <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-2 py-1.5">
        <div>
          <div className="font-bold text-blue-700">EdStream</div>
          <div className="text-gray-500">Canvas LTI · Course communication</div>
        </div>
        <span className="rounded-full bg-green-100 px-2 py-0.5 font-bold text-green-700">Enabled</span>
      </div>
    </div>
  </div>
);

const frameMap: Record<FigmaFrameId, (scale: FigmaScale) => ReactNode> = {
  "canvas-channel-chat": (s) => <CanvasChannelChatFrame scale={s} />,
  "standalone-channel": (s) => <StandaloneChannelFrame scale={s} />,
  "channel-thread": (s) => <CanvasThreadFrame scale={s} />,
  "settings-modal": (s) => <SettingsModalFrame scale={s} />,
  "create-request-grading": (s) => <CreateRequestFrame scale={s} category="grading" canvas />,
  "create-request-extension": (s) => <CreateRequestFrame scale={s} category="extension" canvas />,
  "requests-instructor": (s) => <RequestsInstructorFrame scale={s} withThread />,
  "requests-student": (s) => <RequestsStudentFrame scale={s} />,
  "channel-details-empty": (s) => <ChannelDetailsEmptyFrame scale={s} />,
  "canvas-create-request": (s) => <CreateRequestFrame scale={s} category="grading" canvas />,
};

export const renderFigmaFrame = (id: FigmaFrameId, scale: FigmaScale = "feature") => frameMap[id](scale);
