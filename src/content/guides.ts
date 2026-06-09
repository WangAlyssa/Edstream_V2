export type GuideRole = "instructor" | "student";

export type GuideHighlight = {
  label: string;
  className: string;
};

export type GuideSection = {
  id: string;
  role: GuideRole;
  title: string;
  description: string;
  overview: string;
  steps: string[];
  clickTarget: string;
  checkResult: string;
  highlights: GuideHighlight[];
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
      "Open EdStream from the Canvas course navigation.",
      "Review the left sidebar: channels, direct messages, and course tools.",
      "Open # General to see the main course conversation.",
      "Use the composer for announcements, class Q&A, and shared files.",
      "Tell students which channel to use for general questions versus project work.",
    ],
    clickTarget: "Click # General in the channel list to show the main course conversation.",
    checkResult: "You should see the course header, member count, recent messages, and message composer.",
    highlights: [
      { label: "Course channels", className: "left-[5%] top-[17%] h-20 w-28" },
      { label: "Class conversation", className: "left-[43%] top-[26%] h-24 w-44" },
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
      "Click the plus button beside Channels.",
      "Create #announcements for instructor-only updates.",
      "Create #general-q-and-a for student questions.",
      "Post a welcome message that explains what each channel is for.",
      "Repeat the channel guidance during the first week of class.",
    ],
    clickTarget: "Click the + button next to Channels, then enter the channel name and posting permissions.",
    checkResult: "The new channel should appear in the sidebar and be visible to the intended course roles.",
    highlights: [
      { label: "Create channel", className: "left-[27%] top-[13%] h-10 w-10" },
      { label: "Welcome message", className: "left-[43%] top-[74%] h-14 w-44" },
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
      "Create or open the channel that matches the task.",
      "Share files in the relevant channel instead of sending them through email.",
      "Use request workflows for extension, attendance, or regrade questions.",
      "Open Channel Details to review shared photos, videos, and files.",
      "Confirm students can find the result without leaving the course workspace.",
    ],
    clickTarget: "Click the relevant workflow area: channel details, file card, request queue, or community tab.",
    checkResult: "The action panel should update without sending students away from the course workspace.",
    highlights: [
      { label: "Choose workflow", className: "left-[5%] top-[38%] h-20 w-28" },
      { label: "Action panel", className: "left-[59%] top-[30%] h-28 w-32" },
    ],
  },
  {
    id: "add-course",
    role: "instructor",
    title: "How to Add EdStream to Your Course",
    description: "Add EdStream to Canvas course navigation and confirm visibility.",
    overview:
      "This guide is written for course teams working with an institution where EdStream has already been enabled.",
    steps: [
      "Ask your institution or Canvas administrator to enable the EdStream Canvas tool.",
      "Open the Canvas course where EdStream should appear.",
      "Go to course settings and open Course Navigation.",
      "Move EdStream into the visible navigation list.",
      "Save changes and confirm instructor, TA, and student roles can open the tool.",
      "Open the student view before announcing the tool to the class.",
    ],
    clickTarget: "Click Course Navigation in Canvas settings, then move EdStream into the visible course tools.",
    checkResult: "Students should see EdStream in the Canvas course navigation and open into the correct course space.",
    highlights: [
      { label: "Course navigation", className: "left-[5%] top-[62%] h-14 w-28" },
      { label: "Publish link", className: "left-[43%] top-[18%] h-16 w-40" },
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
      "Open EdStream from the Canvas course navigation.",
      "Select the channel that best matches your question.",
      "Read pinned or recent instructor messages before posting.",
      "Ask your question in the message composer.",
      "Check shared files or media before asking classmates to resend materials.",
      "Use requests only for workflows your course team has enabled.",
    ],
    clickTarget: "Click the course channel that best matches your question before typing a message.",
    checkResult: "Your message should appear in the correct course channel, where classmates and course staff can respond.",
    highlights: [
      { label: "Pick a channel", className: "left-[5%] top-[25%] h-14 w-28" },
      { label: "Write message", className: "left-[43%] top-[76%] h-14 w-44" },
    ],
  },
];

export const findGuideById = (guideId: string | undefined) =>
  guideSections.find((guide) => guide.id === guideId);
