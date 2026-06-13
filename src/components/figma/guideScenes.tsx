import type { ReactNode } from "react";
import { CommunitiesBrowseFrame } from "./FigmaCommunitiesMock";
import {
  CanvasCourseHomeFrame,
  ChannelThreadFrame,
  MediaDetailsFocusFrame,
  MessageReplyFrame,
  RequestsInstructorFrame,
  RequestsStudentFrame,
  SettingsModalFrame,
} from "./FigmaFrames";
import { FIGMA_WORLD } from "./figmaAssets";
import {
  FigmaChannelHeader,
  FigmaComposer,
  FigmaDateDivider,
  FigmaMessageRow,
  FigmaStandaloneShell,
  FigmaTag,
  scaleMap,
  type FigmaScale,
} from "./FigmaMockParts";

const W = FIGMA_WORLD;

const GuideFileCard = () => (
  <div
    data-guide-highlight="file-card"
    className="relative mt-1 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 shadow-sm"
  >
    <span className="text-base text-orange-500">📄</span>
    <div>
      <div className="text-[9px] font-bold text-gray-900">{W.files.project}</div>
      <div className="text-[7px] text-gray-500">PDF · 248 KB</div>
    </div>
  </div>
);

/** Main course channel with realistic fictional messages. */
export const GuideDiscussionFrame = ({ scale }: { scale: FigmaScale }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" hideMessages>
    <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
    <div className="min-h-0 flex-1 overflow-hidden" data-guide-highlight="welcome-message-area">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name={W.people.instructor} showShield relaxed>
        Welcome to the workspace. Post class questions in {W.channels.discussion} and use {W.channels.study} for peer help.
      </FigmaMessageRow>
      <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="jordan" name={W.people.jordan} relaxed>
        Where should we upload the lab write-up for <FigmaTag type="page" scale={scale} />?
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} guideHighlightId="composer" />
  </FigmaStandaloneShell>
);

/** Sidebar compose — highlight the + beside Channels. */
export const GuideCreateChannelFrame = ({ scale }: { scale: FigmaScale }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" highlightCompose hideMessages>
    <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
    <div className="min-h-0 flex-1 overflow-hidden">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name={W.people.instructor} showShield relaxed>
        Channel list is ready — add spaces for announcements and project groups.
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

/** Create-channel modal with name field. */
export const GuideChannelNameFrame = ({ scale }: { scale: FigmaScale }) => (
  <div className="relative h-full">
    <GuideCreateChannelFrame scale={scale} />
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 p-4">
      <div className={`w-full max-w-[55%] rounded-xl bg-white p-4 shadow-2xl ${scaleMap[scale].sidebarText}`}>
        <p className={`mb-2 font-bold text-gray-900 ${scaleMap[scale].mainHeader}`}>Create channel</p>
        <label className="mb-1 block text-gray-600">Channel name</label>
        <div
          data-guide-highlight="channel-name-input"
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-gray-700"
        >
          # announcements
        </div>
        <p className="mt-2 text-gray-500">Only instructors can post in this channel.</p>
      </div>
    </div>
  </div>
);

/** After channels exist — study-group row visible in sidebar. */
export const GuideChannelsReadyFrame = ({ scale }: { scale: FigmaScale }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="random" hideMessages>
    <FigmaChannelHeader scale={scale} title={W.channels.study} members="6 Members" />
    <div className="min-h-0 flex-1 overflow-hidden">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="sofia" name={W.people.sofia} relaxed>
        Peer Q&amp;A goes here — ask before the deadline on <FigmaTag type="page" scale={scale} />.
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} guideHighlightId="composer" />
  </FigmaStandaloneShell>
);

/** Shared file card inline in chat. */
export const GuideFileShareFrame = ({ scale }: { scale: FigmaScale }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" hideMessages>
    <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
    <div className="min-h-0 flex-1 overflow-hidden">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent} relaxed>
        Here is this week&apos;s outline for review.
        <GuideFileCard />
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

export const guideSceneMap: Record<string, (scale: FigmaScale) => ReactNode> = {
  "canvas-course-home": (s) => <CanvasCourseHomeFrame scale={s} />,
  "communities-nav": (s) => <CommunitiesBrowseFrame scale={s} />,
  "sidebar-overview": (s) => <GuideDiscussionFrame scale={s} />,
  "channel-general": (s) => <GuideDiscussionFrame scale={s} />,
  "channel-composer": (s) => <GuideDiscussionFrame scale={s} />,
  "create-channel": (s) => <GuideCreateChannelFrame scale={s} />,
  "create-channel-name": (s) => <GuideChannelNameFrame scale={s} />,
  "channels-created": (s) => <GuideChannelsReadyFrame scale={s} />,
  "file-in-chat": (s) => <GuideFileShareFrame scale={s} />,
  "message-reply": (s) => <MessageReplyFrame scale={s} />,
  "message-thread": (s) => <ChannelThreadFrame scale={s} />,
  "channel-details": (s) => <MediaDetailsFocusFrame scale={s} showDetails={false} />,
  "channel-details-files": (s) => <MediaDetailsFocusFrame scale={s} activeTab="docs" showSharedDoc showDetails />,
  "request-queue": (s) => <RequestsInstructorFrame scale={s} />,
  "request-queue-student": (s) => <RequestsStudentFrame scale={s} />,
  "settings-modal": (s) => <SettingsModalFrame scale={s} />,
};
