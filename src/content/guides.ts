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
  | "save-btn"
  | "search-bar";

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
    title: "Getting Started with Ed Stream Chat",
    description: "Learn the Canvas-integrated workspace before your first class session.",
    overview:
      "This walkthrough covers the Ed Stream Chat layout inside Canvas — from the course menu through channels, requests, and direct messages. All examples use fictional course data from Horizon Labs Demo.",
    steps: [
      {
        instruction: "Open Ed Stream Chat from the Canvas course navigation.",
        detail:
          "Ed Stream Chat appears in your course sidebar, typically below Home. Click it to launch the workspace without leaving Canvas.",
        scene: "canvas-course-home",
        highlight: "canvas-edstream-link",
        highlightLabel: "Ed Stream Chat",
      },
      {
        instruction: "Review the left sidebar: Requests, Channels, and Messages.",
        detail:
          "The chat sidebar is your control center. Requests handles structured student submissions, Channels organize conversations, and Messages reach individuals like Sofia Patel (TA).",
        scene: "sidebar-overview",
        highlight: "sidebar",
        highlightLabel: "Chat sidebar",
      },
      {
        instruction: "Use the bottom navigation to switch between Courses, Communities, and DMs.",
        detail:
          "Courses returns you to class channels, Communities opens peer spaces like Study Group, and DMs handles one-on-one messages.",
        scene: "bottom-nav",
        highlight: "bottom-nav-all",
        highlightLabel: "Courses · Communities · DMs",
      },
      {
        instruction: "Open # general-q-and-a to see the main course conversation.",
        detail:
          "# general-q-and-a is the default hub for class-wide questions. Most students should start here before posting elsewhere.",
        scene: "channel-general",
        highlight: "channel-general",
        highlightLabel: "# general-q-and-a",
      },
      {
        instruction: "Use the rich-text composer for announcements, Q&A, and shared files.",
        detail:
          "The message composer supports formatting, attachments, mentions, and emoji — so course updates stay in the conversation thread.",
        scene: "channel-composer",
        highlight: "composer",
        highlightLabel: "Message composer",
      },
      {
        instruction: "Reply to a message to answer without cluttering the main channel.",
        detail:
          "Hover a message and click Reply. This opens a side thread so follow-up answers stay tied to one question — just like in the Figma thread view.",
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
        instruction: "Point students to the right channel for general vs. project questions.",
        detail:
          "A clear channel list helps students choose the right space — general Q&A in one channel, project work in # project-lab — so messages don't get lost.",
        scene: "channel-general",
        highlight: "channels-section",
        highlightLabel: "Course channels",
      },
    ],
  },
  {
    id: "how-to-start",
    role: "instructor",
    title: "Setting Up Your First Channels",
    description: "Launch Ed Stream Chat with an announcements channel and a student Q&A channel.",
    overview:
      "Start with two channels. This guide walks through creating #announcements and # general-q-and-a for CS 204 at Horizon Labs Demo.",
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
          "Name the channel and set visibility so only instructors and TAs can post — students can read but not clutter the feed.",
        scene: "create-channel",
        highlight: "channel-name-input",
        highlightLabel: "Channel name",
      },
      {
        instruction: "Create # general-q-and-a for student questions.",
        detail:
          "A separate Q&A channel keeps student questions out of announcements. Everyone can post here when they need help from Maya Chen or the TA team.",
        scene: "channels-created",
        highlight: "qa-channel",
        highlightLabel: "# general-q-and-a",
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
    title: "Core Workflows: Channels, Files & Requests",
    description: "Walk through the features instructors use most during a term.",
    overview:
      "Use this guide as a reference for the main Ed Stream Chat workflows — from sharing lab handouts to reviewing extension requests from Ethan Brooks.",
    steps: [
      {
        instruction: "Create or open the channel that matches the task.",
        detail:
          "Pick the channel that fits — # general-q-and-a for discussion, # project-lab for group work, or a staff-only space for planning.",
        scene: "channel-general",
        highlight: "channel-general",
        highlightLabel: "Choose channel",
      },
      {
        instruction: "Share files in the relevant channel instead of sending them through email.",
        detail:
          "File cards appear inline in the chat. Students can open Lab-3-Guide.pdf right where the discussion happens, without digging through email.",
        scene: "file-in-chat",
        highlight: "file-card",
        highlightLabel: "Shared file",
      },
      {
        instruction: "Reply in a thread when a question needs a longer back-and-forth.",
        detail:
          "Use Reply on any message to open a thread. Side conversations stay organized while the main channel feed stays easy to scan.",
        scene: "message-reply",
        highlight: "reply-btn",
        highlightLabel: "Reply",
      },
      {
        instruction: "Follow thread replies in the panel on the right.",
        detail:
          "The thread panel shows every reply in order. Click “1 reply” under a message or use Reply to jump into the same view.",
        scene: "message-thread",
        highlight: "thread-composer",
        highlightLabel: "Thread replies",
      },
      {
        instruction: "Review extension and regrade requests in the Requests queue.",
        detail:
          "Structured requests replace scattered emails. Review pending items from students like Ethan Brooks, then Approve or Decline with a clear record.",
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
        instruction: "Confirm students can find materials in the Files tab.",
        detail:
          "The Files tab in Channel Details lists everything shared in that channel, so students can revisit Syllabus-CS204.pdf without asking for a resend.",
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
    description: "Find channels, ask questions, and submit requests in Ed Stream Chat.",
    overview:
      "This guide explains the first actions a student should take after opening Ed Stream Chat from Canvas — using fictional examples from CS 204 at Horizon Labs Demo.",
    steps: [
      {
        instruction: "Open Ed Stream Chat from the Canvas course navigation.",
        detail:
          "Find Ed Stream Chat in your course menu and click it. You'll land in the Horizon Labs Demo workspace with channels, messages, and shared files.",
        scene: "canvas-course-home",
        highlight: "canvas-edstream-link",
        highlightLabel: "Open Ed Stream Chat",
      },
      {
        instruction: "Select the channel that best matches your question.",
        detail:
          "Channels separate topics — # general-q-and-a for course questions, # project-lab for group work, or # peer-mentors for study help.",
        scene: "channel-general",
        highlight: "channels-section",
        highlightLabel: "Pick a channel",
      },
      {
        instruction: "Read pinned or recent instructor messages before posting.",
        detail:
          "Check recent posts from Maya Chen first — your answer may already be there, or you'll see how classmates are asking questions.",
        scene: "channel-general",
        highlight: "welcome-message-area",
        highlightLabel: "Recent messages",
      },
      {
        instruction: "Ask your question in the message composer.",
        detail:
          "Type at the bottom of the channel to post your question. Classmates, Sofia Patel (TA), and course staff can reply in the same thread.",
        scene: "channel-composer",
        highlight: "composer",
        highlightLabel: "Write message",
      },
      {
        instruction: "Use Reply to respond to a specific message without flooding the channel.",
        detail:
          "Hover a message and click Reply — your answer goes into a thread linked to that post, so the main channel stays readable.",
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
        instruction: "Check shared files in Channel Details before asking for a resend.",
        detail:
          "Open Channel Details and browse the Files tab — handouts and slides shared in the channel are collected there for easy download.",
        scene: "channel-details-files",
        highlight: "file-card",
        highlightLabel: "Shared files",
      },
      {
        instruction: "Submit extension requests through the Requests workflow.",
        detail:
          "Click + Create New Request, choose Extension, and describe your reason. Staff like Maya Chen can Approve or Decline without email back-and-forth.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Submit request",
      },
    ],
  },
  {
    id: "canvas-setup",
    role: "instructor",
    title: "Enable Ed Stream Chat in Canvas",
    description: "Make Ed Stream Chat visible in your course navigation for students and staff.",
    overview:
      "Before students can access channels and requests, an admin or instructor must enable Ed Stream Chat in Canvas course settings. This guide uses fictional Northwind University settings.",
    steps: [
      {
        instruction: "Confirm Ed Stream Chat is enabled at the institution level.",
        detail:
          "Your Canvas admin should enable the Ed Stream Chat LTI under External Apps. Once enabled, it appears as an available tool for all courses.",
        scene: "canvas-enable",
        highlight: "canvas-edstream-link",
        highlightLabel: "LTI enabled",
      },
      {
        instruction: "Open Course Settings → Navigation in Canvas.",
        detail:
          "From your CS 204 course, go to Settings and select the Navigation tab. This controls which links students see in the course menu.",
        scene: "canvas-settings",
        highlight: "canvas-navigation-menu",
        highlightLabel: "Navigation tab",
      },
      {
        instruction: "Drag Ed Stream Chat from Hidden to Enabled.",
        detail:
          "Find Ed Stream Chat in the hidden items list and move it to enabled course navigation. Place it near Home so students find it quickly.",
        scene: "canvas-settings",
        highlight: "canvas-edstream-link",
        highlightLabel: "Ed Stream Chat",
      },
      {
        instruction: "Save your navigation changes.",
        detail:
          "Click Save at the bottom of the page. Students will see Ed Stream Chat in the course sidebar on their next visit.",
        scene: "canvas-settings",
        highlight: "save-btn",
        highlightLabel: "Save",
      },
      {
        instruction: "Verify by opening Ed Stream Chat as a student.",
        detail:
          "Use View as Student in Canvas to confirm the link appears and loads the Horizon Labs Demo workspace with channels and requests.",
        scene: "canvas-course-home",
        highlight: "canvas-edstream-link",
        highlightLabel: "Verify access",
      },
    ],
  },
  {
    id: "request-workflow",
    role: "instructor",
    title: "Managing Student Requests",
    description: "Review, approve, and track extension and accommodation requests in one queue.",
    overview:
      "The Requests workflow replaces email threads with structured cards. This guide walks through submitting, reviewing, and approving a fictional extension from Ethan Brooks.",
    steps: [
      {
        instruction: "Open Requests from the chat sidebar.",
        detail:
          "Requests appears at the top of the Ed Stream Chat sidebar — above Channels. Click it to see all pending, approved, and denied submissions.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Requests",
      },
      {
        instruction: "Students create requests through the Create Request modal.",
        detail:
          "Students choose a category (Extension, Grading, Attendance, Accommodation, or Other), select an assignment, and describe their reason.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Create Request",
      },
      {
        instruction: "Review the structured request card in the queue.",
        detail:
          "Each card shows the student name, assignment, requested due date, and reason. Extension requests for Project Checkpoint 2 appear with an orange assignment tag.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Request card",
      },
      {
        instruction: "Approve or Decline with one click.",
        detail:
          "Use the green Approve or gray Decline buttons at the bottom of the card. The student sees the updated status without a separate email.",
        scene: "request-queue",
        highlight: "request-btn",
        highlightLabel: "Approve / Decline",
      },
      {
        instruction: "Follow up in the thread if you need more context.",
        detail:
          "For complex requests, reply in a thread linked to the submission so the conversation stays attached to the original request.",
        scene: "message-thread",
        highlight: "thread-composer",
        highlightLabel: "Thread follow-up",
      },
    ],
  },
];

export const findGuideById = (guideId: string | undefined) =>
  guideSections.find((guide) => guide.id === guideId);
