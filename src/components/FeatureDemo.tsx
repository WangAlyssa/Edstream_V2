import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CheckCircle, MousePointer2 } from "lucide-react";
import {
  CanvasChannelChatFrame,
  ChannelDetailsEmptyFrame,
  CreateRequestFrame,
  RequestsInstructorFrame,
  RequestsStudentFrame,
  SidebarComposeFrame,
  StandaloneChannelFrame,
} from "@/components/figma/FigmaFrames";
import { FigmaMockContainer } from "@/components/figma/FigmaMockContainer";
import { FigmaStandaloneShell, FigmaChannelHeader, FigmaComposer, FigmaDateDivider, FigmaMessageRow, type FigmaScale } from "@/components/figma/FigmaMockParts";
import { FIGMA_WORLD } from "@/components/figma/figmaAssets";

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

const STEP_COUNTS: Record<FeatureId, number> = {
  channels: 3,
  files: 3,
  media: 3,
  requests: 3,
  community: 3,
};

const DemoCursor = ({ position }: { position: CSSProperties }) => (
  <div className="pointer-events-none absolute z-30 transition-all duration-1000 ease-in-out" style={position}>
    <span className="absolute left-1 top-1 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 demo-cursor-click" />
    <MousePointer2 className="demo-cursor-float h-4 w-4 fill-white text-blue-950" />
  </div>
);

const FilePreviewOverlay = ({ scale }: { scale: FigmaScale }) => (
  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 p-4" data-demo-target="2">
    <div className="w-full max-w-[240px] rounded-xl bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b px-3 py-2 text-[10px] font-bold text-gray-800">
        {FIGMA_WORLD.files.project}
      </div>
      <div className="space-y-2 p-3 text-[10px] leading-relaxed text-gray-600">
        <h5 className="text-[11px] font-bold text-gray-900">Project Outline</h5>
        <p>Preview of shared file attached to the channel message.</p>
      </div>
    </div>
  </div>
);

const FilesDemoFrame = ({ step }: { step: number }) => {
  const scale: FigmaScale = "feature";
  return (
    <div className="relative h-full">
      <FigmaStandaloneShell scale={scale} activeChannel="renamed-general">
        <FigmaChannelHeader scale={scale} title="# course-discussion" members="5 Members" />
        <div className="min-h-0 flex-1 overflow-y-auto">
          <FigmaDateDivider date="Mar 1st, 2024" scale={scale} />
          <FigmaMessageRow scale={scale} photo="maya" name="Maya Chen">
            Here is the project outline for this week.
            {step >= 1 && (
              <div
                data-demo-target="1"
                className={`relative mt-1.5 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 shadow-sm ${step >= 1 ? "ring-2 ring-orange-200" : ""}`}
              >
                <span className="text-orange-500">📄</span>
                <span className="text-[10px] font-bold text-gray-800">{FIGMA_WORLD.files.project}</span>
              </div>
            )}
          </FigmaMessageRow>
        </div>
        <FigmaComposer scale={scale} demoTarget="0" />
      </FigmaStandaloneShell>
      {step >= 2 && <FilePreviewOverlay scale={scale} />}
    </div>
  );
};

const MediaDemoFrame = ({ step }: { step: number }) => {
  const mediaScale: FigmaScale = "feature";
  if (step === 0) {
    return (
      <FigmaStandaloneShell scale={mediaScale} activeChannel="demo-123">
        <FigmaChannelHeader scale={mediaScale} title="# office-hours" members="1 Member" infoDemoTarget="0" />
        <div className="flex min-h-0 flex-1 items-center justify-center text-sm text-gray-400">No messages found</div>
        <FigmaComposer scale={mediaScale} />
      </FigmaStandaloneShell>
    );
  }
  return <ChannelDetailsEmptyFrame scale={mediaScale} activeTab={step >= 2 ? "docs" : "photos"} />;
};

const scale: FigmaScale = "feature";

const renderFeatureFrame = (id: FeatureId, step: number) => {
  switch (id) {
    case "channels":
      if (step === 0) return <SidebarComposeFrame scale={scale} />;
      if (step === 1) return <StandaloneChannelFrame scale={scale} />;
      return <CanvasChannelChatFrame scale={scale} />;

    case "files":
      return <FilesDemoFrame step={step} />;

    case "media":
      return <MediaDemoFrame step={step} />;

    case "requests":
      if (step === 0) return <CreateRequestFrame scale={scale} category="grading" canvas />;
      if (step === 1) return <CreateRequestFrame scale={scale} category="extension" canvas />;
      return <RequestsInstructorFrame scale={scale} withThread />;

    case "community":
      if (step === 0) return <StandaloneChannelFrame scale={scale} />;
      if (step === 1) return <RequestsStudentFrame scale={scale} />;
      return <RequestsStudentFrame scale={scale} />;

    default:
      return null;
  }
};

const FeatureDemo = ({ id }: { id: FeatureId }) => {
  const [step, setStep] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<CSSProperties>({
    left: "50%",
    top: "50%",
    opacity: 0,
  });
  const stepCount = STEP_COUNTS[id];

  useEffect(() => {
    const timer = window.setInterval(() => setStep((current) => (current + 1) % stepCount), 2800);
    return () => window.clearInterval(timer);
  }, [id, stepCount]);

  useLayoutEffect(() => {
    const updateCursor = () => {
      const frame = frameRef.current;
      const targets = frame?.querySelectorAll(`[data-demo-target="${step}"]`);
      const target = (targets?.[targets.length - 1] ?? frame?.querySelector(`[data-demo-target="${step}"]`)) as HTMLElement | null;

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

  const demoTargets: Partial<Record<FeatureId, Record<number, string>>> = {
    channels: { 0: "sidebar-compose", 1: "channel-item", 2: "composer" },
    files: { 0: "composer", 1: "file-card", 2: "preview" },
    media: { 0: "info-icon", 1: "details-panel", 2: "files-tab" },
    requests: { 0: "modal-category", 1: "modal-extension", 2: "approve-btn" },
    community: { 0: "messages-feed", 1: "request-card", 2: "create-btn" },
  };

  return (
    <FigmaMockContainer variant="feature">
      <div ref={frameRef} className="relative h-full">
        <div className="relative h-full" data-demo-target={demoTargets[id]?.[step]}>
          {renderFeatureFrame(id, step)}
        </div>
        <DemoCursor position={cursorPosition} />
      </div>
    </FigmaMockContainer>
  );
};

export const FeaturesSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-gray-800/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Features</p>
        <h2 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-300 lg:text-4xl">
          Five workflows shown with realistic demos
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400">
          Each demo uses fictional names and course data while matching the real app layout.
        </p>
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
