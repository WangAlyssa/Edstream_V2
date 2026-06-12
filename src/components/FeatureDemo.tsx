import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CheckCircle, FileText, MousePointer2, Plus } from "lucide-react";
import {
  ChannelDetailsPanel,
  ChannelHeader,
  CommunitiesGrid,
  CreateRequestModal,
  DateDivider,
  ExtensionRequestCard,
  MockAvatar,
  MockupFourPane,
  RichComposer,
} from "@/components/mockup/MockupShell";
import { MOCK_CHANNELS, MOCK_COLORS, MOCK_USERS, DEMO_STEP_LABELS } from "@/components/mockup/mockup-data";

export type FeatureId = "channels" | "files" | "media" | "requests" | "community";

export const features: Array<{
  id: FeatureId;
  title: string;
  description: string;
  bullets: string[];
  scenario: string;
}> = [
  {
    id: "channels",
    title: "1-Click Channels",
    description:
      "Spin up announcement, lab, project, or staff-only channels from your Horizon Labs Demo workspace. Set visibility and posting permissions so the right people see — and send — in the right place.",
    bullets: [
      "Private or course-wide channel visibility",
      "Control who can post vs. read only",
      "Channels stay tied to CS 204 course roles",
    ],
    scenario: "Maya Chen creates # project-lab for Section B group work.",
  },
  {
    id: "files",
    title: "Seamless File Sharing",
    description:
      "Share PDFs, slides, and handouts directly in # general-q-and-a. Students preview Lab-3-Guide.pdf inline — no email attachments or broken links.",
    bullets: [
      "Inline file cards with name, size, and type",
      "One-click preview without leaving Canvas",
      "Materials stay next to the conversation",
    ],
    scenario: "Sofia Patel posts the lab guide where students already ask questions.",
  },
  {
    id: "media",
    title: "Automated Media Sorting",
    description:
      "Photos, videos, and documents shared in a channel are collected in Channel Details. After a busy lab week, students can browse everything in one place.",
    bullets: [
      "Photos, Videos, and Files tabs per channel",
      "Auto-organized shared media library",
      "Ideal for labs, projects, and study groups",
    ],
    scenario: "Week 5 lab photos and demo videos appear under # project-lab.",
  },
  {
    id: "requests",
    title: "Centralized Requests",
    description:
      "Replace extension and regrade emails with a structured Requests queue. Students submit through Create Request; instructors Approve or Decline with a clear audit trail.",
    bullets: [
      "Extension, grading, attendance, and accommodation types",
      "Structured cards with assignment, dates, and reason",
      "Approve / Decline actions with visible status",
    ],
    scenario: "Ethan Brooks requests extra time on Project Checkpoint 2.",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Give students peer spaces beyond the roster — study groups, project teams, and exam review — without leaving the Ed Stream Chat workspace.",
    bullets: [
      "Study Group, Project Teams, Peer Mentors, and more",
      "Course-aware communities with member counts",
      "Bottom-nav access alongside Courses and DMs",
    ],
    scenario: "Liam Foster joins the Exam Review community before finals.",
  },
];

const DemoCursor = ({ position }: { position: CSSProperties }) => (
  <div className="pointer-events-none absolute z-30 transition-all duration-1000 ease-in-out" style={position}>
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
    <div ref={frameRef} className="relative overflow-hidden rounded-3xl p-3 shadow-xl" style={{ backgroundColor: MOCK_COLORS.topBar }}>
      <div className="relative overflow-hidden rounded-2xl">
        {id === "channels" && (
          <MockupFourPane
            activeChannel="# project-lab"
            overlay={
              step >= 1 ? (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/25 p-3">
                  <div className="w-full max-w-[220px] rounded-xl bg-white p-3 shadow-2xl">
                    <div className="mb-2 flex items-center justify-between text-[9px] font-black text-gray-800">
                      Create Channel
                      <span className="text-gray-400">✕</span>
                    </div>
                    <div className="mb-2 grid grid-cols-2 gap-1.5 text-[7px]">
                      <div className="rounded-lg bg-blue-50 p-2">
                        <span className="block text-gray-500">Visibility</span>
                        <b className="text-gray-800">Private</b>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-2">
                        <span className="block text-gray-500">Who can send</span>
                        <b className="text-gray-800">Everyone</b>
                      </div>
                    </div>
                    <div
                      data-demo-target="1"
                      className={`mb-2 rounded-lg bg-orange-50 p-2 text-[8px] font-black text-blue-700 transition-all ${
                        step === 1 ? "ring-2 ring-orange-200" : ""
                      }`}
                    >
                      # project-lab
                    </div>
                    <button
                      data-demo-target="2"
                      type="button"
                      className={`w-full rounded-full py-1.5 text-[8px] font-black text-white transition-colors ${
                        step === 2 ? "bg-orange-500" : "bg-blue-600"
                      }`}
                    >
                      Create Channel
                    </button>
                  </div>
                </div>
              ) : undefined
            }
          >
            <ChannelHeader channel="# general-q-and-a" />
            <DateDivider label="Today" />
            <div className="mb-2 text-[8px] text-gray-600">
              <span className="font-bold text-gray-800">{MOCK_USERS.instructor.name}</span>
              <span className="ml-1 text-[6px] text-gray-400">9:02 AM</span>
              <p className="mt-0.5">Use # project-lab for group work updates this week.</p>
            </div>
            <div
              data-demo-target="0"
              className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[7px] font-bold transition-all ${
                step === 0 ? "border-orange-300 bg-orange-50 text-orange-700 ring-2 ring-orange-200" : "border-gray-200 bg-white text-gray-600"
              }`}
            >
              <Plus className="h-2.5 w-2.5" />
              New channel
            </div>
            <RichComposer compact />
          </MockupFourPane>
        )}

        {id === "files" && (
          <MockupFourPane activeChannel={MOCK_CHANNELS[1]}>
            <ChannelHeader channel={MOCK_CHANNELS[1]} />
            <DateDivider label="Mar 1, 2026" />
            <div className="mb-2 flex gap-1.5">
              <MockAvatar initials={MOCK_USERS.instructor.initials} />
              <div className="min-w-0 flex-1">
                <div className="text-[8px] font-bold text-gray-800">{MOCK_USERS.instructor.name}</div>
                <p className="text-[7px] text-gray-500">Lab 3 guide is attached below for everyone in section B.</p>
                <div
                  data-demo-target="1"
                  className={`mt-1.5 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 shadow-sm transition-all ${
                    step > 0 ? "ring-2 ring-orange-200" : ""
                  }`}
                >
                  <FileText className="h-4 w-4 flex-shrink-0 text-orange-500" />
                  <div>
                    <h4 className="text-[8px] font-black text-blue-700">Lab-3-Guide.pdf</h4>
                    <p className="text-[6px] text-gray-500">312 KB · PDF</p>
                  </div>
                </div>
              </div>
            </div>
            {step >= 2 && (
              <div className="absolute inset-3 z-20 flex items-center justify-center rounded-lg bg-black/25">
                <div
                  data-demo-target="2"
                  className="w-full max-w-[200px] rounded-xl bg-white shadow-2xl ring-1 ring-blue-100"
                >
                  <div className="flex items-center justify-between border-b px-2 py-1.5">
                    <div className="flex items-center gap-1">
                      <FileText className="h-3 w-3 text-orange-500" />
                      <span className="text-[7px] font-black text-blue-700">Lab-3-Guide.pdf</span>
                    </div>
                    <span className="text-[7px] text-gray-400">✕</span>
                  </div>
                  <div className="space-y-1.5 p-2 text-[7px] leading-relaxed text-gray-600">
                    <h5 className="text-[8px] font-black text-blue-700">Lab 3: Binary Search Trees</h5>
                    <p>Complete the traversal exercises and submit through Canvas by Friday.</p>
                    <div className="rounded bg-blue-50 px-2 py-1 font-bold text-blue-700">
                      Preview files without leaving the channel.
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div data-demo-target="0">
              <RichComposer compact />
            </div>
          </MockupFourPane>
        )}

        {id === "media" && (
          <div className="flex h-[300px] flex-col overflow-hidden rounded-xl bg-white">
            <MockupFourPane activeChannel="# project-lab" showRequests={false}>
              <div className="flex min-h-0 flex-1">
                <div className="min-w-0 flex-1">
                  <ChannelHeader channel="# project-lab" members={12} />
                  <DateDivider label="This week" />
                  <div className="text-[7px] text-gray-500">Shared whiteboard snapshots and lab photos appear here.</div>
                  <RichComposer compact />
                </div>
                <div data-demo-target={step === 0 ? "0" : undefined}>
                  <ChannelDetailsPanel activeTab={step === 1 ? "Videos" : step === 2 ? "Files" : "Photos"} />
                </div>
              </div>
            </MockupFourPane>
          </div>
        )}

        {id === "requests" && (
          <MockupFourPane
            activeSection="requests"
            showRequests
            overlay={step === 0 ? <CreateRequestModal activeCategory="Extension" /> : undefined}
          >
            <ChannelHeader channel="Requests" members={2} />
            <DateDivider label="Today" />
            <ExtensionRequestCard
              assignment="Project Checkpoint 2"
              reason="Needs additional time to incorporate TA feedback on the draft."
              highlight={step === 1}
              status={step === 2 ? "approved" : "pending"}
            />
            <div
              data-demo-target={step > 0 ? String(step) : "0"}
              className={`mx-auto mt-2 w-fit rounded-full border px-3 py-1 text-[7px] font-bold transition-colors ${
                step === 2 ? "border-green-500 bg-green-50 text-green-600" : "border-gray-300 text-gray-600"
              }`}
            >
              {step === 2 ? `Approved by ${MOCK_USERS.instructor.name}` : "+ Create New Request"}
            </div>
          </MockupFourPane>
        )}

        {id === "community" && (
          <MockupFourPane activeChannel={MOCK_CHANNELS[1]}>
            <div className="mb-2 text-[9px] font-black text-gray-800">Communities</div>
            <p className="mb-2 text-[7px] text-gray-500">
              Peer spaces beyond your roster — study groups, mentors, and exam prep.
            </p>
            <CommunitiesGrid activeIndex={step} />
            <div data-demo-target={String(step)} className="mt-2">
              <RichComposer placeholder="Share an update with your community..." compact />
            </div>
          </MockupFourPane>
        )}
      </div>
      <div className="mt-2 rounded-lg bg-black/40 px-3 py-1.5 text-center text-[10px] text-blue-100">
        {DEMO_STEP_LABELS[id][step]}
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
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">
          Five workflows shown with realistic demos
        </h2>
        <p className="text-gray-500 text-base dark:text-gray-400">
          Each demo uses fictional names and course data while matching the Ed Stream Chat layout from our design system.
        </p>
      </div>
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div key={feature.id} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <h3 className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-300">{feature.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-500 dark:text-gray-400">{feature.description}</p>
              <p className="mb-4 text-sm italic text-gray-500 dark:text-gray-400">{feature.scenario}</p>
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
