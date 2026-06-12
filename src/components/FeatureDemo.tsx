import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { FigmaMockContainer } from "@/components/figma/FigmaMockContainer";
import type { FigmaScale } from "@/components/figma/FigmaMockParts";
import { DemoCursor, useDemoStepCycle } from "@/components/DemoCursor";
import { FEATURE_DEMO_CHAINS, getFeatureStepCount, type FeatureId } from "@/components/featureDemoChains";

export type { FeatureId };

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

const scale: FigmaScale = "feature";

const FeatureDemo = ({ id }: { id: FeatureId }) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const chain = FEATURE_DEMO_CHAINS[id];
  const { step, phase } = useDemoStepCycle(getFeatureStepCount(id), id);
  const current = chain[step];

  return (
    <FigmaMockContainer variant="feature">
      <div ref={frameRef} className="relative h-full">
        {current.render(scale)}
        <DemoCursor
          containerRef={frameRef}
          targetKey={current.trigger}
          phase={phase}
          stepKey={`${id}-${step}-${current.scene}`}
        />
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
