import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, MessageSquare, Plus, Settings, Users } from "lucide-react";

type Highlight = {
  label: string;
  className: string;
};

const guideSections = [
  {
    id: "basic-primer",
    group: "For Instructors",
    title: "Basic Primer",
    description: "Understand the core areas before inviting students.",
    highlights: [
      { label: "Course channels live here", className: "left-[5%] top-[18%] h-20 w-28" },
      { label: "Messages and files appear here", className: "left-[43%] top-[26%] h-24 w-44" },
    ],
  },
  {
    id: "how-to-start",
    group: "For Instructors",
    title: "How to Start",
    description: "Start with an announcement channel and one Q&A channel.",
    highlights: [
      { label: "Click + to create a channel", className: "left-[27%] top-[14%] h-10 w-10" },
      { label: "Post a welcome message", className: "left-[48%] top-[75%] h-14 w-44" },
    ],
  },
  {
    id: "functions",
    group: "For Instructors",
    title: "Functions: Step-by-step Guides",
    description: "Walk through channels, files, requests, and media organization.",
    highlights: [
      { label: "Choose a workflow", className: "left-[6%] top-[40%] h-20 w-28" },
      { label: "Review the action panel", className: "left-[58%] top-[30%] h-28 w-32" },
    ],
  },
  {
    id: "add-course",
    group: "For Instructors",
    title: "How to Add EdStream to Your Course",
    description: "A simple Canvas setup checklist for course teams.",
    highlights: [
      { label: "Open course navigation", className: "left-[5%] top-[62%] h-14 w-28" },
      { label: "Publish EdStream link", className: "left-[43%] top-[18%] h-16 w-40" },
    ],
  },
  {
    id: "student-start",
    group: "For Students",
    title: "Student Quick Start",
    description: "Show students where to ask, find files, and submit requests.",
    highlights: [
      { label: "Select the right channel", className: "left-[5%] top-[25%] h-14 w-28" },
      { label: "Use the message composer", className: "left-[43%] top-[76%] h-14 w-44" },
    ],
  },
];

const steps = [
  "Open EdStream from the Canvas course navigation.",
  "Pick the channel or workflow for the task.",
  "Follow the highlighted action in the screenshot.",
  "Confirm students can find the same place later.",
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
      <aside className="bg-blue-800 p-4 text-white">
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
      <div key={highlight.label} className={`absolute rounded-full border-4 border-orange-500 bg-orange-400/10 shadow-[0_0_0_6px_rgba(250,70,22,0.15)] ${highlight.className}`}>
        <span className="absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 rounded-lg bg-orange-500 px-3 py-2 text-center text-xs font-bold text-white shadow-lg">
          {highlight.label}
        </span>
      </div>
    ))}
  </div>
);

const Blog = () => {
  useEffect(() => {
    document.title = "Guides - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            <BookOpen className="mr-2 h-4 w-4" />
            Guides
          </div>
          <h1 className="text-5xl font-black text-blue-700 lg:text-6xl">Step-by-step visual guides</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            These are screenshot-style tutorials using fake names and fake course data. Orange circles show exactly
            where an instructor or student should click.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideSections.map((guide) => (
              <a key={guide.id} href={`#${guide.id}`} className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <span className="mb-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-orange-600">
                  {guide.group}
                </span>
                <h2 className="mb-3 text-2xl font-black text-blue-700">{guide.title}</h2>
                <p className="mb-5 leading-7 text-gray-600">{guide.description}</p>
                <span className="inline-flex items-center font-black text-blue-700">
                  Open tutorial <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {guideSections.map((guide, index) => (
            <Card key={guide.id} id={guide.id} className="scroll-mt-28 border-0 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                      {guide.group}
                    </span>
                    <h2 className="mb-4 text-3xl font-black text-blue-700">{guide.title}</h2>
                    <p className="mb-6 text-lg leading-8 text-gray-600">{guide.description}</p>
                    <ol className="space-y-3">
                      {steps.map((step, stepIndex) => (
                        <li key={step} className="flex gap-3 text-gray-700">
                          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700" asChild>
                      <a href={`#${guide.id}`}>Slide deck placeholder</a>
                    </Button>
                  </div>
                  <FakeAppScreenshot highlights={guide.highlights} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <GraduationCap className="mx-auto mb-5 h-10 w-10 text-orange-300" />
          <h2 className="text-3xl font-black">Suggestion for real slide decks</h2>
          <p className="mt-4 leading-8 text-blue-100">
            Keep these web tutorials as the public version. When the real decks are ready, replace each placeholder
            button with a Google Slides, Canva, or PDF link.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
