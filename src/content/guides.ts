export type GuideRole = "instructor" | "student";

export type GuideScene =
  | "canvas-course-home"
  | "bottom-nav"
  | "channel-general"
  | "sidebar-overview"
  | "channel-composer"
  | "create-channel"
  | "channels-created"
  | "channel-details"
  | "channel-details-files"
  | "file-in-chat"
  | "message-reply"
  | "message-thread"
  | "request-queue"
  | "canvas-settings"
  | "canvas-enable";

export type GuideHighlightId =
  | "sidebar"
  | "channels-section"
  | "channel-general"
  | "channel-plus"
  | "channel-name-input"
  | "qa-channel"
  | "composer"
  | "welcome-message-area"
  | "channel-details-info"
  | "files-tab"
  | "file-card"
  | "reply-btn"
  | "thread-indicator"
  | "thread-panel"
  | "thread-composer"
  | "request-btn"
  | "bottom-nav-all"
  | "bottom-nav-courses"
  | "bottom-nav-communities"
  | "bottom-nav-dms"
  | "canvas-navigation-menu"
  | "canvas-edstream-link"
  | "save-btn";

export type GuideStep = {
  instruction: string;
  detail: string;
  scene: GuideScene;
  highlight: GuideHighlightId;
  highlightLabel: string;
};

export type GuideSection = {
  id: string;
  role: GuideRole;
  title: string;
  description: string;
  overview: string;
  steps: GuideStep[];
};

export const guideSections: GuideSection[] = [
  {
    id: "basic-primer",
    role: "instructor",
    title: "Basic Primer",
    description: "Understand the core instructor workspace before inviting students.",
    overview:
      "This primer introduces the minimum EdStream layout instructors should understand before using it with a live class.",
    steps: [
      {
        instruction: "Open EdStream from the Canvas course navigation.",
        detail:
          "EdStream lives in your Canvas course menu, usually right below Home. Click it to launch the course workspace without leaving Canvas.",
        scene: "canvas-course-home",
        highlight: "canvas-edstream-link",
        highlightLabel: "EdStream link",
      },
      {
        instruction: "Review the left sidebar: channels, direct messages, and course tools.",
        detail:
          "The sidebar is your control center — channels organize class conversations, direct messages reach individuals, and everything stays tied to the course.",
        scene: "sidebar-overview",
        highlight: "sidebar",
        highlightLabel: "Left sidebar",
      },
      {
        instruction: "Use the bottom navigation to switch between Courses, Communities, and DMs.",
        detail:
          "Courses brings you back to class channels, Communities opens study groups beyond your roster, and DMs handles one-on-one messages.",
        scene: "bottom-nav",
        highlight: "bottom-nav-all",
        highlightLabel: "Courses · Communities · DMs",
      },
      {
        instruction: "Open # General to see the main course conversation.",
        detail:
          "# General is the default hub for class-wide questions and announcements. Most students should start here before posting.",
        scene: "channel-general",
        highlight: "channel-general",
        highlightLabel: "# General",
      },
      {
        instruction: "Use the composer for announcements, class Q&A, and shared files.",
        detail:
          "The message composer at the bottom lets you post updates, answer questions, and attach files so everything stays in the conversation thread.",
        scene: "channel-composer",
        highlight: "composer",
        highlightLabel: "Message composer",
      },
      {
        instruction: "Reply to a message to answer without cluttering the main channel.",
        detail:
          "Hover a message and click the reply icon — like Slack, this starts a side thread so follow-up answers stay tied to one question.",
        scene: "message-reply",
        highlight: "reply-btn",
        highlightLabel: "Reply",
      },
      {
        instruction: "Open the thread panel to read and post follow-up replies.",
        detail:
          "The thread panel slides in on the right with the original message and all replies. Students see only what relates to their question.",
        scene: "message-thread",
        highlight: "thread-panel",
        highlightLabel: "Thread panel",
      },
      {
        instruction: "Tell students which channel to use for general questions versus project work.",
        detail:
          "A clear channel list helps students pick the right space — general Q&A in one channel, project or lab work in another — so messages don't get lost.",
        scene: "channel-general",
        highlight: "channels-section",
        highlightLabel: "Course channels",
      },
    ],
  },
  {
    id: "how-to-start",
    role: "instructor",
    title: "How to Start",
    description: "Launch EdStream with one announcement channel and one class Q&A channel.",
    overview:
      "Start small. This guide keeps the first course setup focused so students are not overwhelmed by too many spaces.",
    steps: [
      {
        instruction: "Click the plus button beside Channels.",
        detail:
          "The + next to Channels opens the create flow. Use it whenever you need a new space for announcements, labs, or project groups.",
        scene: "channel-general",
        highlight: "channel-plus",
        highlightLabel: "Create channel",
      },
      {
        instruction: "Create #announcements for instructor-only updates.",
        detail:
          "Name the channel and set visibility so only instructors and TAs can post — students can read but not clutter the feed with replies.",
        scene: "create-channel",
        highlight: "channel-name-input",
        highlightLabel: "Channel name",
      },
      {
        instruction: "Create #general-q-and-a for student questions.",
        detail:
          "A separate Q&A channel keeps student questions out of announcements. Everyone can post here when they need help from staff or classmates.",
        scene: "channels-created",
        highlight: "qa-channel",
        highlightLabel: "#general-q-and-a",
      },
      {
        instruction: "Post a welcome message that explains what each channel is for.",
        detail:
          "A short welcome in the composer sets expectations — which channel is for what — so students don't ask in the wrong place on day one.",
        scene: "channel-composer",
        highlight: "composer",
        highlightLabel: "Welcome message",
      },
      {
        instruction: "Repeat the channel guidance during the first week of class.",
        detail:
          "Point students to the channel list early and often. A quick reminder in class or in Canvas reduces duplicate questions across channels.",
        scene: "channels-created",
        highlight: "channels-section",
        highlightLabel: "Channel list",
      },
    ],
  },
  {
    id: "functions",
    role: "instructor",
    title: "Functions: Step-by-step Guides",
    description: "Walk through channels, files, requests, and media organization.",
    overview:
      "Use this guide as the index for the main EdStream workflows an instructor or TA will repeat during a course.",
    steps: [
      {
        instruction: "Create or open the channel that matches the task.",
        detail:
          "Pick the channel that fits the workflow — general discussion, lab updates, or staff-only planning — so files and requests stay in context.",
        scene: "channel-general",
        highlight: "channel-general",
        highlightLabel: "Choose channel",
      },
      {
        instruction: "Share files in the relevant channel instead of sending them through email.",
        detail:
          "File cards appear inline in the chat. Students can open handouts and PDFs right where the discussion happens, without digging through email.",
        scene: "file-in-chat",
        highlight: "file-card",
        highlightLabel: "Shared file",
      },
      {
        instruction: "Reply in a thread when a question needs a longer back-and-forth.",
        detail:
          "Use reply on any message to open a thread. Side conversations stay organized while the main channel feed stays easy to scan.",
        scene: "message-reply",
        highlight: "reply-btn",
        highlightLabel: "Reply",
      },
      {
        instruction: "Follow thread replies in the message panel on the right.",
        detail:
          "The thread panel shows every reply in order. Click “1 reply” under a message or use reply to jump into the same view.",
        scene: "message-thread",
        highlight: "thread-composer",
        highlightLabel: "Thread replies",
      },
      {
        instruction: "Use request workflows for extension, attendance, or regrade questions.",
        detail:
          "Structured requests replace scattered emails. Review pending items, approve or deny, and keep a clear record for both sides.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Request queue",
      },
      {
        instruction: "Open Channel Details to review shared photos, videos, and files.",
        detail:
          "The info button opens the channel panel where shared media is collected automatically — useful after a busy lab or project week.",
        scene: "channel-details",
        highlight: "channel-details-info",
        highlightLabel: "Channel details",
      },
      {
        instruction: "Confirm students can find the result without leaving the course workspace.",
        detail:
          "The Files tab in Channel Details lists everything shared in that channel, so students can revisit materials without asking for a resend.",
        scene: "channel-details-files",
        highlight: "files-tab",
        highlightLabel: "Files tab",
      },
    ],
  },
  {
    id: "student-start",
    role: "student",
    title: "Student Quick Start",
    description: "Help students ask questions, find files, and use enabled requests.",
    overview:
      "This student guide explains the first actions a student should take after opening EdStream from Canvas.",
    steps: [
      {
        instruction: "Open EdStream from the Canvas course navigation.",
        detail:
          "Find EdStream in your Canvas course menu and click it. You'll land in your class workspace with channels, messages, and shared files.",
        scene: "canvas-course-home",
        highlight: "canvas-edstream-link",
        highlightLabel: "Open EdStream",
      },
      {
        instruction: "Select the channel that best matches your question.",
        detail:
          "Channels separate topics — general questions, project help, or peer mentors. Pick the one that fits so staff and classmates see your message in the right place.",
        scene: "channel-general",
        highlight: "channels-section",
        highlightLabel: "Pick a channel",
      },
      {
        instruction: "Read pinned or recent instructor messages before posting.",
        detail:
          "Check recent posts first — your answer may already be there, or you'll see how others are asking questions in this channel.",
        scene: "channel-general",
        highlight: "welcome-message-area",
        highlightLabel: "Recent messages",
      },
      {
        instruction: "Ask your question in the message composer.",
        detail:
          "Type at the bottom of the channel to post your question. Classmates and course staff can reply in the same thread.",
        scene: "channel-composer",
        highlight: "composer",
        highlightLabel: "Write message",
      },
      {
        instruction: "Use reply to respond to a specific message without flooding the channel.",
        detail:
          "Hover a message and click reply — your answer goes into a thread linked to that post, so the main channel stays readable.",
        scene: "message-reply",
        highlight: "reply-btn",
        highlightLabel: "Reply",
      },
      {
        instruction: "Read and add replies in the thread panel on the right.",
        detail:
          "When a thread is open, the right panel shows the full conversation. You can read staff answers and post follow-ups there.",
        scene: "message-thread",
        highlight: "thread-composer",
        highlightLabel: "Thread panel",
      },
      {
        instruction: "Check shared files or media before asking classmates to resend materials.",
        detail:
          "Open Channel Details and browse the Files tab — handouts and slides shared in the channel are collected there for easy download.",
        scene: "channel-details-files",
        highlight: "file-card",
        highlightLabel: "Shared files",
      },
      {
        instruction: "Use requests only for workflows your course team has enabled.",
        detail:
          "If your course uses extension or regrade requests, submit through the request flow instead of emailing — staff can track and respond in one place.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Submit request",
      },
    ],
  },
];

export const findGuideById = (guideId: string | undefined) =>
  guideSections.find((guide) => guide.id === guideId);
