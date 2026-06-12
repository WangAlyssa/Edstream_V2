/** Fictional demo world — no real people, schools, or organizations. */
export const FIGMA_WORLD = {
  institution: "Northwind University",
  workspaceBadges: ["NU", "SS"] as const,
  topBarUser: "Demo User",
  course: { code: "CS 204", title: "Data Structures", full: "CS 204: Data Structures" },
  channels: {
    discussion: "# course-discussion",
    discussionParent: "# course-discussion (parent)",
    project: "# project-team-alpha",
    study: "# study-group",
    office: "# office-hours",
    lab: "# lab-section",
    requests: "Requests",
  },
  people: {
    primaryStudent: "Maya Chen",
    jordan: "Jordan Lee",
    sofia: "Sofia Patel",
    ethan: "Ethan Brooks",
    liam: "Liam Foster",
    ava: "Ava Martinez",
    instructor: "Dr. Elena Park",
  },
  assignment: "Assignment 3",
  files: {
    lab: "lab-report.pdf",
    project: "project-outline.pdf",
    draft: "assignment-draft.docx",
    notes: "study-notes.pdf",
  },
  communities: {
    sampleName: "CS Study Hub",
    sampleDescription: "Peer support for data structures coursework, exam prep, and project teams.",
  },
} as const;

export const FIGMA_PHOTOS = {
  user: "https://i.pravatar.cc/96?img=12",
  maya: "https://i.pravatar.cc/96?img=33",
  jordan: "https://i.pravatar.cc/96?img=68",
  elena: "https://i.pravatar.cc/96?img=51",
  sofia: "https://i.pravatar.cc/96?img=15",
  ethan: "https://i.pravatar.cc/96?img=28",
  liam: "https://i.pravatar.cc/96?img=22",
  ava: "https://i.pravatar.cc/96?img=8",
  account: "https://i.pravatar.cc/96?img=11",
} as const;

export type FigmaPhotoId = keyof typeof FIGMA_PHOTOS;

export const FIGMA_DM_USERS = [
  { name: FIGMA_WORLD.people.primaryStudent, online: true, photo: "maya" as FigmaPhotoId },
  { name: FIGMA_WORLD.people.jordan, online: true, photo: "jordan" as FigmaPhotoId },
  { name: FIGMA_WORLD.people.sofia, online: true, photo: "sofia" as FigmaPhotoId },
  { name: FIGMA_WORLD.people.ethan, online: false, photo: "ethan" as FigmaPhotoId },
  { name: FIGMA_WORLD.people.liam, online: false, photo: "liam" as FigmaPhotoId },
  { name: FIGMA_WORLD.people.ava, online: false, photo: "ava" as FigmaPhotoId },
  { name: FIGMA_WORLD.people.primaryStudent, online: true, photo: "maya" as FigmaPhotoId },
];
