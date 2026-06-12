import type { ReactNode } from "react";
import {
  CommunitiesBrowseFrame,
  CommunitiesCreateModalFrame,
  CommunitiesSubmitModalFrame,
} from "@/components/figma/FigmaCommunitiesMock";
import {
  CreateRequestFrame,
  FeatureChannelBrowseFrame,
  MediaDetailsFocusFrame,
  RequestsInstructorFrame,
  RequestsStudentFrame,
} from "@/components/figma/FigmaFrames";
import {
  FigmaChannelHeader,
  FigmaComposer,
  FigmaDateDivider,
  FigmaMessageRow,
  FigmaStandaloneShell,
  FigmaTag,
  type FigmaScale,
} from "@/components/figma/FigmaMockParts";
import { FIGMA_WORLD } from "@/components/figma/figmaAssets";

export type FeatureId = "channels" | "files" | "media" | "requests" | "community";

export type DemoStepDef = {
  scene: string;
  trigger: string;
  userAction: string;
  expectedResponse: string;
  reason: string;
  render: (scale: FigmaScale) => ReactNode;
};

const W = FIGMA_WORLD;

const FileCard = ({ fileTarget }: { fileTarget?: string }) => (
  <div
    data-demo-target={fileTarget}
    className="relative mt-1.5 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-sm ring-2 ring-orange-200"
  >
    <span className="text-lg text-orange-500">📄</span>
    <div>
      <div className="text-[11px] font-bold text-gray-900">{W.files.project}</div>
      <div className="text-[9px] text-gray-500">PDF · 248 KB</div>
    </div>
  </div>
);

const FilePreviewOverlay = ({ closeDemoTarget }: { closeDemoTarget: string }) => (
  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-4">
    <div className="flex max-h-[92%] w-full max-w-[360px] flex-col rounded-xl bg-white shadow-2xl">
      <div className="flex flex-shrink-0 items-center justify-between border-b px-4 py-2.5 text-[11px] font-bold text-gray-800">
        {W.files.project}
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-gray-500"
          data-demo-target={closeDemoTarget}
        >
          ×
        </button>
      </div>
      <div className="min-h-0 overflow-y-auto p-3">
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-inner">
          <div className="border-b border-gray-100 pb-2">
            <p className="text-[12px] font-bold text-gray-900">{W.course.full}</p>
            <p className="text-[10px] text-gray-500">Project Outline · Week 3 · Page 1 of 4</p>
          </div>
          <div className="space-y-2.5 pt-2.5 text-[10px] leading-relaxed text-gray-700">
            <div>
              <p className="font-bold text-gray-900">1. Objectives</p>
              <ul className="ml-3 mt-0.5 list-disc space-y-0.5 text-gray-600">
                <li>Implement a binary search tree with insert and delete</li>
                <li>Write unit tests covering edge cases</li>
                <li>Document time complexity for each operation</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900">2. Deliverables</p>
              <ul className="ml-3 mt-0.5 list-disc space-y-0.5 text-gray-600">
                <li><span className="font-medium">{W.files.project}</span> (PDF, due Mar 15)</li>
                <li>Source code pushed to course repository</li>
                <li>2-minute demo video in channel</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900">3. Grading Rubric</p>
              <div className="mt-1 grid grid-cols-2 gap-1 text-[9px]">
                <div className="rounded bg-gray-50 px-1.5 py-1">Correctness — 40%</div>
                <div className="rounded bg-gray-50 px-1.5 py-1">Code quality — 25%</div>
                <div className="rounded bg-gray-50 px-1.5 py-1">Testing — 20%</div>
                <div className="rounded bg-gray-50 px-1.5 py-1">Documentation — 15%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const channelBody = (scale: FigmaScale, lines: Array<{ name: string; photo: "maya" | "jordan" | "sofia"; text: ReactNode }>) => (
  <>
    <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
    {lines.map((line) => (
      <FigmaMessageRow key={line.name} scale={scale} photo={line.photo} name={line.name} relaxed>
        {line.text}
      </FigmaMessageRow>
    ))}
  </>
);

export const FEATURE_DEMO_CHAINS: Record<FeatureId, DemoStepDef[]> = {
  channels: [
    {
      scene: "channel-discussion",
      trigger: "0",
      userAction: "Click # project-team-alpha in the channel list",
      expectedResponse: "Project team channel opens with its own conversation",
      reason: "Selecting a channel in the sidebar switches the main view to that channel",
      render: (scale) => (
        <FeatureChannelBrowseFrame
          scale={scale}
          activeChannel="renamed-general"
          channelClickTargetId="guided"
          channelClickDemoTarget="0"
          title={W.channels.discussion}
          members="5 Members"
          body={channelBody(scale, [
            { name: W.people.primaryStudent, photo: "maya", text: <>Welcome to <FigmaTag type="page" scale={scale} /> — post lab questions here.</> },
          ])}
        />
      ),
    },
    {
      scene: "channel-project",
      trigger: "1",
      userAction: "Click # study-group in the channel list",
      expectedResponse: "Study group channel opens",
      reason: "Each channel row loads a distinct course conversation",
      render: (scale) => (
        <FeatureChannelBrowseFrame
          scale={scale}
          activeChannel="guided"
          channelClickTargetId="random"
          channelClickDemoTarget="1"
          title={W.channels.project}
          members="4 Members"
          body={channelBody(scale, [
            { name: W.people.jordan, photo: "jordan", text: <>Sprint board updated — check tasks for <FigmaTag type="page" scale={scale} />.</> },
          ])}
        />
      ),
    },
    {
      scene: "channel-study",
      trigger: "2",
      userAction: "Click # course-discussion to switch back",
      expectedResponse: "Course discussion channel reopens",
      reason: "Instructors and students jump between course channels in one click",
      render: (scale) => (
        <FeatureChannelBrowseFrame
          scale={scale}
          activeChannel="random"
          channelClickTargetId="renamed-general"
          channelClickDemoTarget="2"
          title={W.channels.study}
          members="6 Members"
          body={channelBody(scale, [
            { name: W.people.sofia, photo: "sofia", text: "Review session Saturday 2pm — bring practice problems." },
          ])}
        />
      ),
    },
  ],

  files: [
    {
      scene: "file-card-in-chat",
      trigger: "0",
      userAction: "Click the shared file card in the message",
      expectedResponse: "In-app file preview opens over the channel",
      reason: "File cards in chat are the primary share affordance",
      render: (scale) => (
        <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" hideMessages>
          <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
          <div className="min-h-0 flex-1 overflow-hidden">
            <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
            <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
              Here is the project outline for this week.
              <FileCard fileTarget="0" />
            </FigmaMessageRow>
          </div>
          <FigmaComposer scale={scale} />
        </FigmaStandaloneShell>
      ),
    },
    {
      scene: "file-preview-open",
      trigger: "1",
      userAction: "Click close on the preview",
      expectedResponse: "Preview closes; file card remains in the channel message",
      reason: "Preview is an overlay — the shared file stays in context",
      render: (scale) => (
        <div className="relative h-full">
          <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" hideMessages>
            <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
            <div className="min-h-0 flex-1 overflow-hidden">
              <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
              <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
                Here is the project outline for this week.
                <FileCard />
              </FigmaMessageRow>
            </div>
            <FigmaComposer scale={scale} />
          </FigmaStandaloneShell>
          <FilePreviewOverlay closeDemoTarget="1" />
        </div>
      ),
    },
    {
      scene: "file-card-visible",
      trigger: "2",
      userAction: "Click the file card again to reopen preview",
      expectedResponse: "File preview opens again",
      reason: "Students can reopen shared files any time from the inline card",
      render: (scale) => (
        <FigmaStandaloneShell scale={scale} activeChannel="renamed-general" hideMessages>
          <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
          <div className="min-h-0 flex-1 overflow-hidden">
            <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
            <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
              Here is the project outline for this week.
              <FileCard fileTarget="2" />
            </FigmaMessageRow>
          </div>
          <FigmaComposer scale={scale} />
        </FigmaStandaloneShell>
      ),
    },
  ],

  media: [
    {
      scene: "media-channel",
      trigger: "0",
      userAction: "Click the channel info icon",
      expectedResponse: "Channel Details opens with Photos grid populated",
      reason: "Shared chat photos are auto-collected under Channel Details → Photos",
      render: (scale) => (
        <MediaDetailsFocusFrame scale={scale} showDetails={false} infoDemoTarget="0" />
      ),
    },
    {
      scene: "media-photos-grid",
      trigger: "1",
      userAction: 'Click the "Videos" tab',
      expectedResponse: "Sorted video clips appear in the media library",
      reason: "Videos shared in chat are grouped separately from photos",
      render: (scale) => (
        <MediaDetailsFocusFrame scale={scale} activeTab="photos" videosTabDemoTarget="1" />
      ),
    },
    {
      scene: "media-docs-tab",
      trigger: "2",
      userAction: 'Click the "Docs" tab',
      expectedResponse: "Shared documents list appears in the library",
      reason: "File attachments from chat are indexed under Docs",
      render: (scale) => (
        <MediaDetailsFocusFrame scale={scale} activeTab="videos" docsTabDemoTarget="2" showSharedDoc />
      ),
    },
    {
      scene: "media-docs-library",
      trigger: "3",
      userAction: 'Click "Photos" to browse sorted images',
      expectedResponse: "Photo grid returns, completing the media tour",
      reason: "All three media types stay accessible from Channel Details",
      render: (scale) => (
        <MediaDetailsFocusFrame scale={scale} activeTab="docs" showSharedDoc photosTabDemoTarget="3" />
      ),
    },
  ],

  requests: [
    {
      scene: "requests-student-feed",
      trigger: "0",
      userAction: 'Click "+ Create New Request"',
      expectedResponse: "Create Request modal opens with category form",
      reason: "Students start structured requests from the Requests channel",
      render: (scale) => (
        <RequestsStudentFrame scale={scale} createDemoTarget="0" />
      ),
    },
    {
      scene: "requests-create-modal",
      trigger: "1",
      userAction: 'Click "+ Create Request" to submit',
      expectedResponse: "Modal closes; pending extension card appears in the feed",
      reason: "Submitting posts the request card into the Requests timeline",
      render: (scale) => (
        <CreateRequestFrame scale={scale} category="extension" requestsBackground submitDemoTarget="1" />
      ),
    },
    {
      scene: "requests-student-pending",
      trigger: "2",
      userAction: "Click the pending extension request card",
      expectedResponse: "Instructor Requests queue opens with the same request",
      reason: "Instructors review the shared request card in their queue",
      render: (scale) => (
        <RequestsStudentFrame scale={scale} showNewPendingOnly pendingCardDemoTarget="2" />
      ),
    },
    {
      scene: "requests-instructor-approve",
      trigger: "3",
      userAction: 'Click "Approve" on the extension request',
      expectedResponse: "Request card updates to approved state",
      reason: "Approve resolves the pending request for the student",
      render: (scale) => (
        <RequestsInstructorFrame scale={scale} approveDemoTarget="3" />
      ),
    },
  ],

  community: [
    {
      scene: "communities-browse",
      trigger: "0",
      userAction: 'Click the "Create a Community" card',
      expectedResponse: "Create a community modal opens over the browse page",
      reason: "Students start new communities from the Communities hub",
      render: (scale) => <CommunitiesBrowseFrame scale={scale} createDemoTarget="0" />,
    },
    {
      scene: "communities-create-modal",
      trigger: "1",
      userAction: "Click the Name field to enter a community title",
      expectedResponse: "Name field is ready for input",
      reason: "Community requests require a visible name and description",
      render: (scale) => <CommunitiesCreateModalFrame scale={scale} nameDemoTarget="1" />,
    },
    {
      scene: "communities-submit",
      trigger: "2",
      userAction: 'Click "Request to create" to submit',
      expectedResponse: "Filled form is ready to send for approval",
      reason: "Requests go to admins before the community goes live",
      render: (scale) => <CommunitiesSubmitModalFrame scale={scale} submitDemoTarget="2" />,
    },
  ],
};

export const getFeatureStepCount = (id: FeatureId) => FEATURE_DEMO_CHAINS[id].length;
