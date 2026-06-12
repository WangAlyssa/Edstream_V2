import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CheckCircle, MousePointer2 } from "lucide-react";
import {
  FigmaAppShell,
  FigmaChannelDetails,
  FigmaChatHeader,
  FigmaCommunitiesView,
  FigmaComposer,
  FigmaCreateChannelModal,
  FigmaCreateRequestModal,
  FigmaDatePill,
  FigmaExtensionCard,
  FigmaFileCard,
  FigmaFilePreviewModal,
  FigmaMessage,
  FigmaSystemMessage,
  FigmaTag,
  demoTargetStyle,
} from "@/components/mockup/FigmaProductUI";
import { DEMO_STEP_LABELS, MOCK_USERS } from "@/components/mockup/mockup-data";

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
      "Photos, Videos, and Docs tabs per channel",
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
  <div className="pointer-events-none absolute z-40 transition-all duration-1000 ease-in-out" style={position}>
    <span className="absolute left-1 top-1 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 demo-cursor-click" />
    <MousePointer2 className="demo-cursor-float h-4 w-4 fill-white text-[#1D2631]" />
  </div>
);

const FeatureDemo = ({ id }: { id: FeatureId }) => {
  const [step, setStep] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<CSSProperties>({ left: "50%", top: "50%", opacity: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => setStep((s) => (s + 1) % 3), 2800);
    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const update = () => {
      const frame = frameRef.current;
      const target = frame?.querySelector(`[data-demo-target="${step}"]`) as HTMLElement | null;
      if (!frame || !target) {
        setCursorPosition((c) => ({ ...c, opacity: 0 }));
        return;
      }
      const fr = frame.getBoundingClientRect();
      const tr = target.getBoundingClientRect();
      setCursorPosition({
        left: tr.left - fr.left + tr.width * 0.75,
        top: tr.top - fr.top + tr.height * 0.75,
        opacity: 1,
      });
    };
    const raf = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
    };
  }, [id, step]);

  return (
    <div ref={frameRef} className="relative">
      {/* ── Channels: full Canvas + chat + Create Channel modal ── */}
      {id === "channels" && (
        <FigmaAppShell
          sidebar={{
            activeChannel: "# general-q-and-a",
            highlightChannelPlus: step === 0,
            demoTargetPlus: step === 0 ? "0" : undefined,
          }}
          overlay={
            step >= 1 ? (
              <div data-demo-target={step === 1 ? "1" : step === 2 ? "2" : undefined}>
                <FigmaCreateChannelModal
                  channelName="# project-lab"
                  highlightName={step === 1}
                  highlightCreate={step === 2}
                />
              </div>
            ) : undefined
          }
        >
          <FigmaChatHeader channel="# general-q-and-a" members={28} />
          <FigmaDatePill label="Mar 1st, 2026" />
          <FigmaMessage user={MOCK_USERS.instructor.name} initials="MC" color="#FF5630" time="9:02 AM">
            Use <FigmaTag># project-lab</FigmaTag> for group work updates this week.
          </FigmaMessage>
          <FigmaSystemMessage text={`${MOCK_USERS.peer.name} joined`} />
          <FigmaComposer />
        </FigmaAppShell>
      )}

      {/* ── Files: message + inline PDF + preview overlay ── */}
      {id === "files" && (
        <FigmaAppShell sidebar={{ activeChannel: "# general-q-and-a" }}>
          <FigmaChatHeader channel="# general-q-and-a" members={28} />
          <FigmaDatePill label="Mar 1st, 2026" />
          <div className="mb-1 flex gap-2">
            <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-[#6554C0] text-[9px] font-bold text-white">
              SP
            </div>
            <div className="min-w-0 flex-1">
              <FigmaMessage user={MOCK_USERS.ta.name} initials="SP" color="#00B8D9" time="9:16 AM">
                Lab 3 guide is attached below for everyone in Section B.
              </FigmaMessage>
              <div data-demo-target={step >= 1 ? "1" : undefined} style={demoTargetStyle(step >= 1)}>
                <FigmaFileCard name="Lab-3-Guide.pdf" size="312 KB" highlight={step >= 1} />
              </div>
            </div>
          </div>
          {step >= 2 && (
            <div data-demo-target="2">
              <FigmaFilePreviewModal
                name="Lab-3-Guide.pdf"
                title="Lab 3: Binary Search Trees"
                body="Complete the traversal exercises and submit through Canvas by Friday at 11:59 PM."
              />
            </div>
          )}
          <div data-demo-target={step === 0 ? "0" : undefined}>
            <FigmaComposer />
          </div>
        </FigmaAppShell>
      )}

      {/* ── Media: chat + Channel Details panel ── */}
      {id === "media" && (
        <FigmaAppShell
          sidebar={{ activeChannel: "# project-lab" }}
          rightPanel={
            <div data-demo-target={String(step)} style={demoTargetStyle(true)}>
              <FigmaChannelDetails activeTab={step === 0 ? "Photos" : step === 1 ? "Videos" : "Docs"} />
            </div>
          }
        >
          <FigmaChatHeader channel="# project-lab" members={12} />
          <FigmaDatePill label="This week" />
          <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="2:41 PM">
            Uploaded our whiteboard notes from today&apos;s lab session.
          </FigmaMessage>
          <FigmaComposer placeholder="Enter your message here" />
        </FigmaAppShell>
      )}

      {/* ── Requests: queue + modal + extension card ── */}
      {id === "requests" && (
        <FigmaAppShell sidebar={{ activeSection: "requests", activeChannel: "# general-q-and-a" }}>
          <div className="mb-1 flex items-center justify-between">
            <div>
              <h3 className="text-[11px] font-bold text-[#172B4D]">Requests</h3>
              <p className="text-[8px] text-[#97A0AF]">2 Members</p>
            </div>
            <div className="flex gap-1.5">
              <span className="rounded border px-1.5 py-0.5 text-[7px] text-[#6B778C]">Request type: All ▾</span>
            </div>
          </div>
          <FigmaDatePill label="Mar 3rd, 2026" />
          <FigmaMessage user={MOCK_USERS.student.name} initials="EB" color="#6554C0" time="9:16 AM">
            <div data-demo-target={step === 1 ? "1" : undefined} style={demoTargetStyle(step === 1)}>
              <FigmaExtensionCard
                assignment="Project Checkpoint 2"
                newDate="3/18/2026"
                originalDate="3/14/2026"
                reason="Need time to incorporate TA feedback on the draft."
                attachment="checkpoint-draft.pdf"
                mode={step === 2 ? "approved" : "actions"}
                highlight={step === 1}
              />
            </div>
          </FigmaMessage>
          {step === 0 && (
            <div data-demo-target="0">
              <FigmaCreateRequestModal activeCategory="Extension" />
            </div>
          )}
          <div
            data-demo-target={step === 2 ? "2" : undefined}
            className="mx-auto mt-2 w-fit rounded-full border border-[#E4E7EB] bg-white px-4 py-1.5 text-[9px] font-semibold text-[#172B4D]"
            style={demoTargetStyle(step === 2)}
          >
            + Create New Request
          </div>
        </FigmaAppShell>
      )}

      {/* ── Community: bottom nav + communities grid ── */}
      {id === "community" && (
        <FigmaAppShell showBottomNav bottomNavActive="communities" sidebar={{ activeChannel: "# general-q-and-a" }}>
          <p className="mb-0.5 text-[11px] font-bold text-[#172B4D]">Communities</p>
          <p className="mb-2 text-[8px] text-[#6B778C]">Peer spaces beyond your course roster</p>
          <div data-demo-target={String(step)} style={demoTargetStyle(true)}>
            <FigmaCommunitiesView activeIndex={step} />
          </div>
          <div className="mt-2">
            <FigmaComposer placeholder="Share an update with your community..." />
          </div>
        </FigmaAppShell>
      )}

      <p className="mt-2 rounded-md bg-[#1D2631] px-3 py-2 text-center text-[11px] text-white/85">{DEMO_STEP_LABELS[id][step]}</p>
      <DemoCursor position={cursorPosition} />
    </div>
  );
};

export const FeaturesSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-gray-800/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Features</p>
        <h2 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-300 lg:text-4xl">
          Production-faithful product demos
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400">
          Each animation recreates the Ed Stream Chat Figma layout — four-pane Canvas integration, real composer, request cards, and channel details. All data is fictional.
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
