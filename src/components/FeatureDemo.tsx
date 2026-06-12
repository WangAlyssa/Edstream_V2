import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  CheckCircle,
  FileText,
  MousePointer2,
  Plus,
  Search,
} from "lucide-react";

export type FeatureId = "channels" | "files" | "media" | "requests" | "community";

export const features: Array<{
  id: FeatureId;
  title: string;
  description: string;
  bullets: string[];
}> = [
  {
    id: "channels",
    title: "1-Click Channels",
    description:
      "Create announcement, lab, project, or staff-only channels from a course workspace so communication stays organized.",
    bullets: ["Channel visibility", "Posting permissions", "Course-role context"],
  },
  {
    id: "files",
    title: "Seamless File Sharing",
    description:
      "Share PDFs, slides, and handouts directly in the class conversation so students can preview materials in context.",
    bullets: ["Inline file cards", "Preview-first workflow", "Course materials near the discussion"],
  },
  {
    id: "media",
    title: "Automated Media Sorting",
    description:
      "Collect shared photos, videos, and files into channel details so students can revisit materials after the chat moves on.",
    bullets: ["Photos / videos / files tabs", "Channel-level library", "Useful for labs and projects"],
  },
  {
    id: "requests",
    title: "Centralized Requests",
    description:
      "Move repeated student requests out of email and into a structured queue with clear pending, approved, and denied states.",
    bullets: ["Extension requests", "Attendance notes", "Regrade questions"],
  },
  {
    id: "community",
    title: "Community",
    description:
      "Give students course-aware spaces for peer questions, project groups, and broader class community without leaving Canvas.",
    bullets: ["Course Q&A", "Project groups", "Communities tab"],
  },
];

const DEMO_NAV = "#0A1240";

const demoPanelText = "text-white dark:text-gray-900";
const demoPanelMuted = "text-gray-300 dark:text-gray-600";
const demoTabInactive = "bg-white/10 text-gray-300 dark:bg-gray-200 dark:text-gray-800";
const demoMainBg = "bg-[#1E212B] dark:bg-[#F3F4F6]";

const FakeAvatar = ({ label, color = "blue" }: { label: string; color?: "blue" | "orange" | "gray" }) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-orange-100 text-orange-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${colorMap[color]}`}>
      {label}
    </div>
  );
};

const DemoCursor = ({ position }: { position: CSSProperties }) => (
  <div
    className="pointer-events-none absolute z-30 transition-all duration-1000 ease-in-out"
    style={position}
  >
    <span className="absolute left-1 top-1 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 demo-cursor-click" />
    <MousePointer2 className="demo-cursor-float h-4 w-4 fill-white text-blue-950" />
  </div>
);

const FeatureDemo = ({ id }: { id: FeatureId }) => {
  const [step, setStep] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<CSSProperties>({
    left: "50%",
    top: "50%",
    opacity: 0,
  });

  useEffect(() => {
    const timer = window.setInterval(() => setStep((current) => (current + 1) % 3), 2300);
    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const updateCursor = () => {
      const frame = frameRef.current;
      const target = frame?.querySelector(`[data-demo-target="${step}"]`) as HTMLElement | null;

      if (!frame || !target) {
        setCursorPosition((current) => ({ ...current, opacity: 0 }));
        return;
      }

      const frameRect = frame.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setCursorPosition({
        left: targetRect.left - frameRect.left + targetRect.width * 0.72,
        top: targetRect.top - frameRect.top + targetRect.height * 0.72,
        opacity: 1,
      });
    };

    const animationFrame = window.requestAnimationFrame(updateCursor);
    window.addEventListener("resize", updateCursor);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateCursor);
    };
  }, [id, step]);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden rounded-3xl p-4 shadow-xl ${demoMainBg}`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="flex h-11 items-center px-4 text-white" style={{ backgroundColor: DEMO_NAV }}>
          <div className="mr-4 h-5 w-5 rounded border border-white/70" />
          <div className="mx-auto flex h-7 w-full max-w-xs items-center rounded-full bg-white/10 px-3 text-xs text-blue-100">
            <Search className="mr-2 h-3 w-3" />
            Search
          </div>
        </div>
        <div className="grid min-h-[300px] grid-cols-[135px_1fr]">
          <aside className="relative p-3 text-white" style={{ backgroundColor: DEMO_NAV }}>
            <div className="mb-3 flex items-center justify-between text-xs font-bold">
              <span># Channels</span>
              <span
                data-demo-target={id === "channels" ? "0" : undefined}
                className={`relative rounded transition-colors duration-500 ${id === "channels" && step === 0 ? "bg-orange-500" : ""}`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </div>
            {["# General", "# Peer Mentors", "# Project"].map((item, index) => (
              <div
                key={item}
                className={`mb-2 rounded px-2 py-1.5 text-xs ${index === 0 ? "bg-white/15" : "text-blue-100"}`}
              >
                {item}
              </div>
            ))}
            <div className="mt-8 text-xs font-bold">Direct messages</div>
            <div className="mt-2 rounded bg-white/15 px-2 py-2 text-xs">Dr. Morgan</div>
            {id === "community" && (
              <div
                className="absolute bottom-0 left-0 grid w-[135px] grid-cols-3 p-1 text-[9px] text-blue-100"
                style={{ backgroundColor: DEMO_NAV }}
              >
                <span className="rounded px-1 py-2 text-center">Courses</span>
                <span className={`rounded px-1 py-2 text-center ${step > 0 ? "bg-white/15" : ""}`}>Communities</span>
                <span className="rounded px-1 py-2 text-center">DMs</span>
              </div>
            )}
          </aside>
          <main className={`relative p-4 ${demoMainBg}`}>
            {id === "channels" && (
              <div className="mx-auto max-w-xs rounded-2xl bg-white p-5 shadow-2xl">
                <h4 className="mb-4 text-lg font-black text-blue-700">Create Channel</h4>
                <div className="mb-3 grid grid-cols-2 gap-3 text-xs text-gray-900">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <span className="block text-gray-500">Visibility</span>
                    <b>Private</b>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3">
                    <span className="block text-gray-500">Who can send</span>
                    <b>Everyone</b>
                  </div>
                </div>
                <div
                  data-demo-target="1"
                  className={`relative mb-4 rounded-lg bg-orange-50 p-3 text-sm font-black text-blue-700 transition-all duration-500 ${step === 1 ? "ring-2 ring-blue-200" : ""}`}
                >
                  # project-group-alpha
                </div>
                <button
                  data-demo-target="2"
                  className={`relative w-full rounded-lg py-3 text-sm font-black text-white transition-colors duration-500 ${step === 2 ? "bg-orange-500" : "bg-blue-600"}`}
                >
                  Create Channel
                </button>
              </div>
            )}
            {id === "files" && (
              <div className="relative space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
                  Share a course handout in # General
                </div>
                <div className="flex gap-3">
                  <FakeAvatar label="PI" />
                  <div>
                    <div className={`text-xs font-black ${demoPanelText}`}>Dr. Morgan</div>
                    <p className={`mt-1 text-xs ${demoPanelMuted}`}>Here is the course welcome packet for everyone.</p>
                    <div
                      data-demo-target="1"
                      className={`relative mt-2 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-md transition-all duration-500 ${step > 0 ? "ring-2 ring-orange-200" : ""}`}
                    >
                      <FileText className="h-7 w-7 flex-shrink-0 text-orange-500" />
                      <div>
                        <h4 className="text-sm font-black text-blue-700">Welcome-to-EdStream.pdf</h4>
                        <p className="text-[10px] text-gray-500">248 KB · PDF</p>
                      </div>
                    </div>
                  </div>
                </div>
                {step >= 2 && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/30 backdrop-blur-[1px]">
                    <div
                      data-demo-target="2"
                      className="mx-3 w-full max-w-[240px] rounded-2xl bg-white shadow-2xl ring-1 ring-blue-100"
                    >
                      <div className="flex items-center justify-between border-b px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-orange-500" />
                          <span className="text-xs font-black text-blue-700">Welcome-to-EdStream.pdf</span>
                        </div>
                        <span className="text-xs text-gray-400">✕</span>
                      </div>
                      <div className="space-y-2.5 p-4 text-xs leading-5 text-gray-600">
                        <h5 className="text-sm font-black text-blue-700">Welcome to EdStream</h5>
                        <p>
                          EdStream is your Canvas-aware course communication workspace — channels, files, and student
                          requests in one place.
                        </p>
                        <p>
                          Start with <span className="font-bold text-blue-700"># General</span> for announcements, share
                          handouts inline, and keep materials attached to the conversation.
                        </p>
                        <div className="rounded-lg bg-blue-50 px-3 py-2 font-bold text-blue-700">
                          Tip: Click any file card to preview without leaving the channel.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div
                  data-demo-target="0"
                  className="relative flex items-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500"
                >
                  Type message <Plus className="ml-auto h-4 w-4 text-blue-600" />
                </div>
              </div>
            )}
            {id === "media" && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h4 className={`font-black ${demoPanelText}`}>Channel Details</h4>
                  <span
                    data-demo-target={id === "media" ? "0" : undefined}
                    className={`relative rounded-full px-2 py-1 text-xs transition-colors duration-500 ${step === 0 ? "bg-orange-500 text-white" : demoTabInactive}`}
                  >
                    i
                  </span>
                </div>
                <div className="mb-4 flex gap-2">
                  {["Photos", "Videos", "Files"].map((tab, index) => (
                    <span
                      key={tab}
                      data-demo-target={id === "media" && index === step ? String(step) : undefined}
                      className={`relative rounded-full px-3 py-1 text-xs font-black transition-colors duration-500 ${index === step ? "bg-[#0033CC] text-white" : demoTabInactive}`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="h-20 rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 p-3 text-xs font-bold text-blue-600 dark:text-gray-900"
                    >
                      Course media {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {id === "requests" && (
              <div className="mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-xl">
                <div data-demo-target="0" className="mb-3 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-600">
                  Extension request
                </div>
                <p className="text-sm text-gray-600">Student requests more time for Project Checkpoint 2.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="rounded-lg border py-2 text-sm font-bold text-gray-600">Deny</button>
                  <button
                    data-demo-target={step > 0 ? String(step) : undefined}
                    className={`relative rounded-lg py-2 text-sm font-bold text-white transition-colors duration-500 ${step === 2 ? "bg-green-600" : "bg-blue-600"}`}
                  >
                    {step === 2 ? "Approved" : "Approve"}
                  </button>
                </div>
              </div>
            )}
            {id === "community" && (
              <div>
                <h4 className={`mb-4 text-xl font-black ${demoPanelText}`}>Communities</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Study Group", "Project Teams", "Peer Mentors", "Exam Review"].map((community, index) => (
                    <div
                      key={community}
                      data-demo-target={id === "community" && index === step ? String(step) : undefined}
                      className={`relative h-24 rounded-xl p-4 text-sm font-bold transition-colors duration-500 ${
                        index === step
                          ? "bg-orange-50 text-orange-700"
                          : "bg-white text-gray-600 shadow-sm dark:text-gray-800"
                      }`}
                    >
                      {community}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      <DemoCursor position={cursorPosition} />
    </div>
  );
};

export const FeaturesSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-gray-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Features</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">Five workflows shown with realistic demos</h2>
        <p className="text-gray-500 text-base dark:text-gray-400">Each demo uses fake names and course data while matching the real app layout.</p>
      </div>
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div key={feature.id} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <h3 className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-300">{feature.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-500 dark:text-gray-400">{feature.description}</p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <FeatureDemo id={feature.id} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureDemo;
