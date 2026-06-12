/** Pixel-accurate Figma Canvas Chat tokens (from design screenshots). */
export const FIGMA = {
  globalNav: "#0A1240",
  workspaceStrip: "#070E2E",
  topBar: "#1D2631",
  chatSidebar: "#3F5389",
  chatSidebarHover: "#4A6096",
  chatActivePill: "rgba(255,255,255,0.18)",
  courseNav: "#FFFFFF",
  canvasActive: "#0374B5",
  main: "#FFFFFF",
  feed: "#FFFFFF",
  card: "#F4F5F7",
  border: "#E4E7EB",
  text: "#172B4D",
  textMuted: "#6B778C",
  textLight: "#97A0AF",
  orange: "#E85D4C",
  orangeSoft: "#FFEBE8",
  orangeTag: "#FDECEA",
  blueTag: "#E9F2FF",
  blueTagText: "#0052CC",
  green: "#00875A",
  greenSoft: "#E3FCEF",
  searchBg: "rgba(255,255,255,0.08)",
} as const;

export const FIGMA_CHANNELS = [
  { name: "# announcements", locked: false },
  { name: "# general-q-and-a", locked: false },
  { name: "# project-lab", locked: true },
  { name: "# random", locked: true },
] as const;
