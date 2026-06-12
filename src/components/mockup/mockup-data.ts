/** Fictional personas and course data — safe for public marketing use. */
export const MOCK_USERS = {
  instructor: { name: "Maya Chen", initials: "MC", role: "Instructor" },
  student: { name: "Ethan Brooks", initials: "EB", role: "Student" },
  ta: { name: "Sofia Patel", initials: "SP", role: "Teaching Assistant" },
  peer: { name: "Liam Foster", initials: "LF", role: "Student" },
} as const;

export const MOCK_ORGANIZATIONS = {
  workspace: "Horizon Labs Demo",
  institution: "Northwind University",
  department: "Computer Science",
} as const;

export const MOCK_COURSE = {
  code: "CS 204",
  title: "Data Structures",
  term: "Spring 2026",
  section: "Section B",
  memberCount: 28,
} as const;

export const MOCK_WORKSPACE = MOCK_ORGANIZATIONS.workspace;

export const MOCK_CHANNELS = [
  "# announcements",
  "# general-q-and-a",
  "# project-lab",
  "# random",
] as const;

export const MOCK_DMS = [
  { ...MOCK_USERS.ta, online: true },
  { ...MOCK_USERS.peer, online: true },
  { name: "Vertex Systems Bot", initials: "VS", online: false },
] as const;

export const MOCK_REQUEST_TYPES = [
  "Grading",
  "Attendance",
  "Extension",
  "Accommodation",
  "Other",
] as const;

export const MOCK_ASSIGNMENTS = [
  "Project Checkpoint 2",
  "Lab Report 3",
  "Midterm Review Worksheet",
] as const;

export const MOCK_SHARED_FILES = [
  { name: "Syllabus-CS204.pdf", size: "1.2 MB", type: "PDF" },
  { name: "Lab-3-Guide.pdf", size: "312 KB", type: "PDF" },
  { name: "Week-5-Slides.pdf", size: "4.8 MB", type: "PDF" },
  { name: "Lab-3-Guide.docx", size: "890 KB", type: "DOCX" },
] as const;

export const MOCK_COMMUNITIES = [
  { name: "Study Group", members: 14, description: "Weekly review sessions before quizzes" },
  { name: "Project Teams", members: 22, description: "Group project coordination and file sharing" },
  { name: "Peer Mentors", members: 8, description: "Upperclassmen helping with lab concepts" },
  { name: "Exam Review", members: 19, description: "Final exam prep and practice problems" },
] as const;

/** Figma Canvas Chat design tokens */
export const MOCK_COLORS = {
  globalNav: "#0A1240",
  topBar: "#1D2631",
  chatSidebar: "#3E5682",
  chatSidebarActive: "#4A6594",
  accent: "#E85D4C",
  accentSoft: "#FFF0ED",
  approve: "#22A06B",
  approveSoft: "#E3FCEF",
  canvasLink: "#0374B5",
  mainBg: "#F5F6F8",
  white: "#FFFFFF",
} as const;

export const CANVAS_COURSE_LINKS = [
  "Home",
  "Ed Stream Chat",
  "Assignments",
  "Discussions",
  "Grades",
  "People",
  "Syllabus",
] as const;

export const DEMO_STEP_LABELS: Record<
  "channels" | "files" | "media" | "requests" | "community",
  [string, string, string]
> = {
  channels: [
    "Click + beside Channels to start a new space",
    "Name the channel and set visibility permissions",
    "Create # project-lab for group work updates",
  ],
  files: [
    "Maya Chen shares Lab-3-Guide.pdf in # general-q-and-a",
    "Students click the inline file card to preview",
    "Preview opens without leaving the channel",
  ],
  media: [
    "Open Channel Details from the channel header",
    "Browse Photos, Videos, and Files tabs",
    "All shared materials are collected automatically",
  ],
  requests: [
    "Ethan Brooks opens Create Request → Extension",
    "Review the structured extension request card",
    "Maya Chen approves — status updates in the queue",
  ],
  community: [
    "Switch to Communities from the bottom navigation",
    "Browse peer spaces like Study Group and Peer Mentors",
    "Post updates to your community from the composer",
  ],
};
