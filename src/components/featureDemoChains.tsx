import type { ReactNode } from "react";
import {
  CanvasChannelChatFrame,
  CanvasCourseHomeFrame,
  CanvasThreadFrame,
  ChannelDetailsEmptyFrame,
  ChannelThreadFrame,
  CreateRequestFrame,
  MessageReplyFrame,
  RequestsInstructorFrame,
  RequestsStudentFrame,
  StandaloneChannelFrame,
} from "@/components/figma/FigmaFrames";
import {
  FigmaCanvasShell,
  FigmaChannelHeader,
  FigmaComposer,
  FigmaDateDivider,
  FigmaMessageRow,
  FigmaStandaloneShell,
  type FigmaScale,
} from "@/components/figma/FigmaMockParts";
import { FIGMA_WORLD } from "@/components/figma/figmaAssets";

export type FeatureId = "channels" | "files" | "media" | "requests" | "community";

export type DemoStepDef = {
  /** Visible UI state for this beat in the workflow */
  scene: string;
  /** Element the cursor clicks to advance */
  trigger: string;
  /** Human-readable intent */
  userAction: string;
  /** What the UI shows after the click */
  expectedResponse: string;
  /** Why the response follows from the action */
  reason: string;
  render: (scale: FigmaScale) => ReactNode;
};

const W = FIGMA_WORLD;

const FilePreviewOverlay = ({ closeDemoTarget }: { closeDemoTarget: string }) => (
  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-4">
    <div className="w-full max-w-[240px] rounded-xl bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b px-3 py-2 text-[10px] font-bold text-gray-800">
        {W.files.project}
        <button
          type="button"
          className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-gray-500"
          data-demo-target={closeDemoTarget}
        >
          ×
        </button>
      </div>
      <div className="space-y-2 p-3 text-[10px] leading-relaxed text-gray-600">
        <h5 className="text-[11px] font-bold text-gray-900">Project Outline</h5>
        <p>Preview of shared file attached to the channel message.</p>
      </div>
    </div>
  </div>
);

const FilesAttachScene = ({ scale, sendTarget }: { scale: FigmaScale; sendTarget: string }) => (
  <FigmaCanvasShell scale={scale} activeChannel="renamed-general">
    <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
    <div className="min-h-0 flex-1 overflow-y-auto">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
        Sharing materials for this week&apos;s lab.
      </FigmaMessageRow>
    </div>
    <div className="mt-auto flex-shrink-0 rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className={`min-h-[36px] px-2.5 py-2 text-gray-700 text-[11px]`}>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-200 bg-orange-50 px-2 py-1">
          <span className="text-orange-500">📄</span>
          <span className="font-semibold">{W.files.project}</span>
        </span>
      </div>
      <FigmaComposer scale={scale} sendDemoTarget={sendTarget} />
    </div>
  </FigmaCanvasShell>
);

const FilesCardScene = ({
  scale,
  fileTarget,
  infoTarget,
}: {
  scale: FigmaScale;
  fileTarget?: string;
  infoTarget?: string;
}) => (
  <FigmaCanvasShell scale={scale} activeChannel="renamed-general">
    <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" infoDemoTarget={infoTarget} />
    <div className="min-h-0 flex-1 overflow-y-auto">
      <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
        Here is the project outline for this week.
        <div
          data-demo-target={fileTarget}
          className="relative mt-1.5 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 shadow-sm"
        >
          <span className="text-orange-500">📄</span>
          <span className="text-[10px] font-bold text-gray-800">{W.files.project}</span>
        </div>
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaCanvasShell>
);

const MediaEmptyScene = ({ scale, infoTarget }: { scale: FigmaScale; infoTarget: string }) => (
  <FigmaStandaloneShell scale={scale} activeChannel="demo-123">
    <FigmaChannelHeader scale={scale} title={W.channels.office} members="1 Member" infoDemoTarget={infoTarget} />
    <div className="flex min-h-0 flex-1 items-center justify-center text-sm text-gray-400">No messages found</div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

const InstructorCourseScene = ({ scale, requestsTarget }: { scale: FigmaScale; requestsTarget: string }) => (
  <FigmaStandaloneShell
    scale={scale}
    activeChannel="renamed-general"
    requestsDemoTarget={requestsTarget}
    requestsNotify
    topBarUserLabel={W.people.instructor}
  >
    <FigmaChannelHeader scale={scale} title={W.channels.discussion} members="5 Members" />
    <div className="min-h-0 flex-1 overflow-y-auto">
      <FigmaDateDivider date="Mar 3rd, 2024" scale={scale} />
      <FigmaMessageRow scale={scale} photo="maya" name={W.people.primaryStudent}>
        Lab materials are posted in the channel details.
      </FigmaMessageRow>
    </div>
    <FigmaComposer scale={scale} />
  </FigmaStandaloneShell>
);

export const FEATURE_DEMO_CHAINS: Record<FeatureId, DemoStepDef[]> = {
  channels: [
    {
      scene: "canvas-course-home",
      trigger: "0",
      userAction: 'Click "Ed Stream Chat" in Canvas course navigation',
      expectedResponse: "Ed Stream workspace opens with the course channel loaded",
      reason: "Ed Stream Chat is the LTI entry point that launches the embedded workspace",
      render: (scale) => <CanvasCourseHomeFrame scale={scale} edStreamDemoTarget="0" />,
    },
    {
      scene: "canvas-channel-chat",
      trigger: "1",
      userAction: 'Click "1 reply" under a channel message',
      expectedResponse: "Thread panel slides open beside the channel conversation",
      reason: "Reply links open the inline thread view for that message",
      render: (scale) => <CanvasChannelChatFrame scale={scale} replyDemoTarget="1" />,
    },
    {
      scene: "canvas-thread-open",
      trigger: "2",
      userAction: "Click the thread panel close control",
      expectedResponse: "Thread panel closes; channel chat remains visible",
      reason: "Closing the thread dismisses the side panel without leaving the channel",
      render: (scale) => <CanvasThreadFrame scale={scale} closeDemoTarget="2" />,
    },
    {
      scene: "canvas-channel-chat-again",
      trigger: "3",
      userAction: 'Click "1 reply" on the same message again',
      expectedResponse: "Thread panel reopens on the selected message",
      reason: "Reply links always reopen the thread for that message",
      render: (scale) => <CanvasChannelChatFrame scale={scale} replyDemoTarget="3" />,
    },
  ],

  files: [
    {
      scene: "channel-composer",
      trigger: "0",
      userAction: "Click the paperclip attachment control in the composer",
      expectedResponse: "File picker attaches a document to the draft message",
      reason: "The paperclip opens attachment selection and stages the file in the composer",
      render: (scale) => <CanvasChannelChatFrame scale={scale} attachDemoTarget="0" />,
    },
    {
      scene: "channel-send-attachment",
      trigger: "1",
      userAction: "Click send to post the message with attachment",
      expectedResponse: "Message appears in channel with an inline file card",
      reason: "Sending publishes the draft and renders uploaded files as clickable cards",
      render: (scale) => <FilesAttachScene scale={scale} sendTarget="1" />,
    },
    {
      scene: "channel-file-card",
      trigger: "2",
      userAction: "Click the file card in the message",
      expectedResponse: "In-app file preview overlay opens",
      reason: "File cards are preview affordances for shared attachments",
      render: (scale) => <FilesCardScene scale={scale} fileTarget="2" />,
    },
    {
      scene: "file-preview",
      trigger: "3",
      userAction: "Click close on the preview overlay",
      expectedResponse: "Preview closes; user returns to the channel with the file card still visible",
      reason: "Closing the preview dismisses the modal layer only",
      render: (scale) => (
        <div className="relative h-full">
          <FilesCardScene scale={scale} />
          <FilePreviewOverlay closeDemoTarget="3" />
        </div>
      ),
    },
    {
      scene: "channel-before-details",
      trigger: "4",
      userAction: "Click the channel info icon in the header",
      expectedResponse: "Channel Details panel opens beside the conversation",
      reason: "The info icon toggles the channel details side panel",
      render: (scale) => <FilesCardScene scale={scale} infoTarget="4" />,
    },
    {
      scene: "channel-details-before-docs",
      trigger: "5",
      userAction: 'Click the "Docs" tab in Channel Details',
      expectedResponse: "Docs tab lists the uploaded project outline",
      reason: "Files shared in chat are indexed under Channel Details → Docs",
      render: (scale) => (
        <ChannelDetailsEmptyFrame scale={scale} activeTab="photos" docsTabDemoTarget="5" />
      ),
    },
    {
      scene: "channel-details-docs",
      trigger: "6",
      userAction: "Click the channel info icon to close Channel Details",
      expectedResponse: "Details panel closes; channel returns to normal chat view",
      reason: "Info toggles the details panel closed, completing the file-sharing workflow",
      render: (scale) => (
        <ChannelDetailsEmptyFrame scale={scale} activeTab="docs" showSharedDoc infoDemoTarget="6" />
      ),
    },
  ],

  media: [
    {
      scene: "empty-channel",
      trigger: "0",
      userAction: "Click the channel info icon",
      expectedResponse: "Channel Details panel opens on the Photos tab",
      reason: "Info opens the details panel; Photos is the default shared-media tab",
      render: (scale) => <MediaEmptyScene scale={scale} infoTarget="0" />,
    },
    {
      scene: "details-photos",
      trigger: "1",
      userAction: 'Click the "Videos" tab in Channel Details',
      expectedResponse: "Videos library view is shown in the panel",
      reason: "Tab controls switch the shared-media category inside Channel Details",
      render: (scale) => (
        <ChannelDetailsEmptyFrame scale={scale} activeTab="photos" videosTabDemoTarget="1" />
      ),
    },
    {
      scene: "details-videos",
      trigger: "2",
      userAction: 'Click the "Docs" tab in Channel Details',
      expectedResponse: "Docs library view is shown in the panel",
      reason: "Tab controls switch the shared-media category inside Channel Details",
      render: (scale) => (
        <ChannelDetailsEmptyFrame scale={scale} activeTab="videos" docsTabDemoTarget="2" />
      ),
    },
    {
      scene: "details-docs",
      trigger: "3",
      userAction: "Click the channel info icon to close Channel Details",
      expectedResponse: "Details panel closes; empty channel view returns",
      reason: "Info is a toggle — clicking again dismisses the details panel",
      render: (scale) => (
        <ChannelDetailsEmptyFrame scale={scale} activeTab="docs" infoDemoTarget="3" />
      ),
    },
  ],

  requests: [
    {
      scene: "student-requests",
      trigger: "0",
      userAction: 'Click "+ Create New Request"',
      expectedResponse: "Create Request modal opens",
      reason: "The create button launches the structured request form",
      render: (scale) => (
        <RequestsStudentFrame scale={scale} createDemoTarget="0" showCreateOnly />
      ),
    },
    {
      scene: "create-extension-modal",
      trigger: "1",
      userAction: 'Click "+ Create Request" to submit the extension form',
      expectedResponse: "Modal closes; new pending extension appears in the student Requests feed",
      reason: "Submitting the form posts the request into the Requests channel timeline",
      render: (scale) => (
        <CreateRequestFrame scale={scale} category="extension" canvas submitDemoTarget="1" />
      ),
    },
    {
      scene: "student-pending-request",
      trigger: "2",
      userAction: "Click the user menu to switch to the instructor account",
      expectedResponse: "Workspace reloads as the instructor in the course channel",
      reason: "Account switching changes role context so the instructor can review the queue",
      render: (scale) => (
        <RequestsStudentFrame
          scale={scale}
          showNewPendingOnly
          topBarUserLabel={W.people.jordan}
          topBarUserDemoTarget="2"
        />
      ),
    },
    {
      scene: "instructor-course-nav",
      trigger: "3",
      userAction: 'Click "Requests" in the sidebar (notification badge)',
      expectedResponse: "Instructor Requests queue opens with the pending extension",
      reason: "Requests nav opens the course request inbox for instructors",
      render: (scale) => <InstructorCourseScene scale={scale} requestsTarget="3" />,
    },
    {
      scene: "instructor-approve",
      trigger: "4",
      userAction: 'Click "Approve" on the pending extension request',
      expectedResponse: "Request card updates to an approved state",
      reason: "Approve is the instructor action that resolves a pending request",
      render: (scale) => (
        <RequestsInstructorFrame scale={scale} approveDemoTarget="4" />
      ),
    },
    {
      scene: "instructor-approved",
      trigger: "5",
      userAction: "Click the user menu to switch back to the student account",
      expectedResponse: "Student Requests view returns to start the workflow again",
      reason: "Account switching restores the student perspective for the demo loop",
      render: (scale) => (
        <RequestsInstructorFrame scale={scale} approved topBarUserDemoTarget="5" />
      ),
    },
  ],

  community: [
    {
      scene: "community-discussion",
      trigger: "0",
      userAction: 'Click "1 reply" on a community message',
      expectedResponse: "Message expands with reply controls visible",
      reason: "Reply links surface thread actions on the selected message",
      render: (scale) => <StandaloneChannelFrame scale={scale} replyDemoTarget="0" />,
    },
    {
      scene: "community-reply-controls",
      trigger: "1",
      userAction: "Click the reply control on the message",
      expectedResponse: "Thread panel opens beside the channel",
      reason: "The reply button opens the side thread composer for that message",
      render: (scale) => <MessageReplyFrame scale={scale} replyDemoTarget="1" />,
    },
    {
      scene: "community-thread-compose",
      trigger: "2",
      userAction: "Click send in the thread composer",
      expectedResponse: "Reply posts in the thread; thread panel shows the new reply",
      reason: "Send publishes the thread reply into the conversation",
      render: (scale) => <ChannelThreadFrame scale={scale} sendDemoTarget="2" />,
    },
    {
      scene: "community-after-reply",
      trigger: "3",
      userAction: 'Click "Requests" in the sidebar',
      expectedResponse: "Requests channel opens for structured follow-up",
      reason: "Students escalate informal threads into formal requests via the Requests nav item",
      render: (scale) => (
        <StandaloneChannelFrame scale={scale} requestsDemoTarget="3" showReplyPosted />
      ),
    },
    {
      scene: "community-create-request",
      trigger: "4",
      userAction: 'Click "+ Create New Request"',
      expectedResponse: "Create Request modal opens for a structured request",
      reason: "Create Request converts a community need into a trackable instructor workflow",
      render: (scale) => (
        <RequestsStudentFrame scale={scale} createDemoTarget="4" activeItem="requests" />
      ),
    },
  ],
};

export const getFeatureStepCount = (id: FeatureId) => FEATURE_DEMO_CHAINS[id].length;
