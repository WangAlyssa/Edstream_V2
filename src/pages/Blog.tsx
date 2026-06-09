import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ClipboardCheck, GraduationCap, Plus, Settings, Users } from "lucide-react";

type Role = "instructor" | "student";

type Highlight = {
  label: string;
  className: string;
};

const guideSections: Array<{
  id: string;
  role: Role;
  title: string;
  description: string;
  steps: string[];
  highlights: Highlight[];
}> = [
  {
    id: "basic-primer",
    role: "instructor",
    title: "Basic Primer",
    description: "A quick overview of the main instructor workspace before inviting students.",
    steps: [
      "Open EdStream from the Canvas course navigation.",
      "Review the left sidebar: channels, direct messages, and course tools.",
      "Use the main message area for announcements, class Q&A, and shared files.",
    ],
    highlights: [
      { label: "Course channels", className: "left-[5%] top-[17%] h-20 w-28" },
      { label: "Class conversation", className: "left-[43%] top-[26%] h-24 w-44" },
    ],
  },
  {
    id: "how-to-start",
    role: "instructor",
    title: "How to Start",
    description: "Start with the smallest useful setup: one announcement space and one Q&A space.",
    steps: [
      "Click the plus button beside Channels.",
      "Create #announcements and #general-q-and-a.",
      "Post one welcome message that tells students where to ask for help.",
    ],
    highlights: [
      { label: "Create channel", className: "left-[27%] top-[13%] h-10 w-10" },
      { label: "Welcome message", className: "left-[43%] top-[74%] h-14 w-44" },
    ],
  },
  {
    id: "functions",
    role: "instructor",
    title: "Functions: Step-by-step Guides",
    description: "Use these workflows for channels, files, requests, and media organization.",
    steps: [
      "Pick the workflow in the sidebar or channel details.",
      "Follow the highlighted action area.",
      "Confirm the result appears in the main course workspace.",
    ],
    highlights: [
      { label: "Choose workflow", className: "left-[5%] top-[38%] h-20 w-28" },
      { label: "Action panel", className: "left-[59%] top-[30%] h-28 w-32" },
    ],
  },
  {
    id: "add-course",
    role: "instructor",
    title: "How to Add EdStream to Your Course",
    description: "A simple Canvas setup checklist for course teams.",
    steps: [
      "Ask your institution to enable the EdStream Canvas tool.",
      "Open Canvas course settings and course navigation.",
      "Publish the EdStream link after confirming instructor, TA, and student roles.",
    ],
    highlights: [
      { label: "Course navigation", className: "left-[5%] top-[62%] h-14 w-28" },
      { label: "Publish link", className: "left-[43%] top-[18%] h-16 w-40" },
    ],
  },
  {
    id: "student-start",
    role: "student",
    title: "Student Quick Start",
    description: "A short walkthrough for students opening EdStream for the first time.",
    steps: [
      "Open EdStream from Canvas.",
      "Select the correct course channel.",
      "Ask questions in the message composer and check shared files before asking for a resend.",
    ],
    highlights: [
      { label: "Pick a channel", className: "left-[5%] top-[25%] h-14 w-28" },
      { label: "Write message", className: "left-[43%] top-[76%] h-14 w-44" },
    ],
  },
];

const FakeAppScreenshot = ({ highlights }: { highlights: Highlight[] }) => (
  <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl">
    <div className="flex h-11 items-center bg-blue-700 px-4 text-white">
      <div className="mr-4 h-5 w-5 rounded border border-white/70" />
      <div className="mx-auto h-7 w-full max-w-xs rounded-full bg-white/15 px-4 pt-1 text-xs text-blue-100">
        Search course
      </div>
    </div>
    <div className="grid h-[315px] grid-cols-[150px_1fr]">
      <aside className="relative bg-blue-800 p-4 text-white">
        <div className="mb-4 flex items-center justify-between text-xs font-bold">
          <span># Channels</span>
          <Plus className="h-4 w-4" />
        </div>
        {["# General", "# Peer Mentors", "# Project Q&A"].map((item, index) => (
          <div key={item} className={`mb-2 rounded px-3 py-2 text-xs ${index === 0 ? "bg-white/15" : "text-blue-100"}`}>
            {item}
          </div>
        ))}
        <div className="mt-6 text-xs font-bold">Direct messages</div>
        <div className="mt-2 rounded bg-white/15 px-3 py-2 text-xs">Prof. Rivera</div>
        <div className="absolute bottom-0 left-0 grid w-[150px] grid-cols-3 gap-1 bg-blue-950 p-2 text-[9px] text-blue-100">
          <span className="rounded bg-white/10 px-1 py-2 text-center">Courses</span>
          <span className="rounded px-1 py-2 text-center">Communities</span>
          <span className="rounded px-1 py-2 text-center">DMs</span>
        </div>
      </aside>
      <main className="p-5">
        <div className="mb-5 border-b pb-3">
          <h3 className="text-xl font-black text-blue-700"># General</h3>
          <p className="text-xs text-gray-400">Demo Course • 7 members</p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-blue-50 p-4 text-sm text-gray-700">
            <b>Prof. Rivera:</b> Welcome! Use this channel for general course questions.
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-sm text-gray-700">
            <b>Student Lee:</b> Where should I submit an extension request?
          </div>
          <div className="mt-8 rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-400">
            Type your message here...
          </div>
        </div>
      </main>
    </div>
    {highlights.map((highlight) => (
      <div key={highlight.label} className={`demo-highlight-pulse absolute rounded-full border-4 border-orange-500 bg-orange-400/10 ${highlight.className}`}>
        <span className="absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 rounded-lg bg-orange-500 px-3 py-2 text-center text-xs font-bold text-white shadow-lg">
          {highlight.label}
        </span>
      </div>
    ))}
  </div>
);

const Blog = () => {
  const [activeRole, setActiveRole] = useState<Role>("instructor");

  useEffect(() => {
    document.title = "Guides - EdStream";
  }, []);

  const visibleGuides = useMemo(
    () => guideSections.filter((guide) => guide.role === activeRole),
    [activeRole],
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="bg-gradient-to-br from-blue-700 to-blue-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
            <BookOpen className="mr-2 h-4 w-4" />
            Guides
          </div>
          <h1 className="text-4xl font-black lg:text-5xl">Step-by-step visual guides</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100">
            Screenshot-style tutorials with fake names and fake course data. Orange circles show exactly where to click.
          </p>

          <div className="mx-auto mt-7 grid max-w-md grid-cols-2 rounded-2xl bg-white/10 p-2 shadow-lg backdrop-blur">
            {[
              { value: "instructor" as const, label: "For Instructor", icon: GraduationCap },
              { value: "student" as const, label: "For Student", icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeRole === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveRole(tab.value)}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition-all duration-300 ${
                    active ? "bg-white text-blue-700 shadow-md" : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {visibleGuides.map((guide, index) => (
            <Card key={guide.id} id={guide.id} className="scroll-mt-28 border-0 shadow-xl transition-all duration-500">
              <CardContent className="p-6 lg:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="mb-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-orange-600">
                      Visual tutorial
                    </span>
                    <h2 className="mb-4 text-3xl font-black text-blue-700">{guide.title}</h2>
                    <p className="mb-6 text-lg leading-8 text-gray-600">{guide.description}</p>
                    <ol className="space-y-3">
                      {guide.steps.map((step, stepIndex) => (
                        <li key={step} className="flex gap-3 text-gray-700">
                          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700" asChild>
                      <a href={`#${guide.id}`}>Slide deck link placeholder</a>
                    </Button>
                  </div>
                  <FakeAppScreenshot highlights={guide.highlights} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
