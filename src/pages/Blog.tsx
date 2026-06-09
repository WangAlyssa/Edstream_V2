import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react";

const faqItems = [
  {
    category: "General",
    question: "What is EdStream?",
    answer:
      "EdStream is a Canvas-focused communication layer for courses. It adds Slack-like channels, shared materials, and structured student requests to the course experience.",
  },
  {
    category: "General",
    question: "Is EdStream replacing Canvas?",
    answer:
      "No. Canvas remains the system for assignments, grades, and course structure. EdStream focuses on real-time course communication and student support workflows.",
  },
  {
    category: "Instructors",
    question: "How do instructors create channels?",
    answer:
      "Instructors choose a channel purpose, set visibility and posting permissions, and invite the relevant course roles such as students, TAs, or staff.",
  },
  {
    category: "Instructors",
    question: "Can I control who can send messages?",
    answer:
      "Yes. Channels can be designed around course roles, for example announcement channels for instructors and open Q&A channels for the class.",
  },
  {
    category: "Requests",
    question: "What are centralized requests?",
    answer:
      "Requests help move repeated workflows such as extensions, attendance notes, and regrade questions out of scattered email threads and into one review queue.",
  },
  {
    category: "Files",
    question: "How does file sharing work?",
    answer:
      "Files are shared in context inside a channel, so handouts, PDFs, and slides stay connected to the conversation where they were posted.",
  },
  {
    category: "Media",
    question: "What does media sorting mean?",
    answer:
      "Channel details can group shared photos, videos, and files into simple tabs, making it easier to revisit whiteboard photos, lab media, and project materials.",
  },
  {
    category: "Students",
    question: "How do students use EdStream?",
    answer:
      "Students open EdStream from Canvas, join the course channels, ask questions in the right place, review shared materials, and submit requests when enabled.",
  },
  {
    category: "Mobile",
    question: "Does EdStream have mobile apps?",
    answer:
      "EdStream has iOS and Android app listings so students can follow course communication from mobile devices as well as the web.",
  },
  {
    category: "Rollout",
    question: "Where should a course team start?",
    answer:
      "Start with one announcement channel, one Q&A channel, and one request type. Add project or lab channels only when the course structure needs them.",
  },
];

const guideDecks = [
  {
    group: "For Instructors",
    title: "Basic Primer",
    href: "#basic-primer-slides",
    icon: BookOpen,
    slides: ["What EdStream is", "Channels vs requests", "Where files live", "Recommended first setup"],
  },
  {
    group: "For Instructors",
    title: "How to Start",
    href: "#how-to-start-slides",
    icon: GraduationCap,
    slides: ["Open your Canvas course", "Create core channels", "Post a welcome note", "Invite students to ask questions"],
  },
  {
    group: "For Instructors",
    title: "Functions: Step-by-step Guides",
    href: "#function-slides",
    icon: Settings,
    slides: ["Create a channel", "Share a file", "Review a request", "Find media later"],
  },
  {
    group: "For Instructors",
    title: "How to Add EdStream to Your Course",
    href: "#add-course-slides",
    icon: ClipboardCheck,
    slides: ["Confirm EdStream is enabled", "Add it to navigation", "Check roles", "Publish the course link"],
  },
  {
    group: "For Students",
    title: "Student Quick Start",
    href: "#student-slides",
    icon: Users,
    slides: ["Open from Canvas", "Join course channels", "Ask in the right place", "Submit requests", "Find shared files"],
  },
];

const workflowCards = [
  {
    id: "basic-primer-slides",
    title: "Basic Primer",
    icon: MessageSquare,
    steps: ["EdStream lives next to Canvas coursework.", "Channels keep conversations organized.", "Requests keep repeated student needs trackable.", "Files stay attached to the course context."],
  },
  {
    id: "how-to-start-slides",
    title: "How to Start",
    icon: GraduationCap,
    steps: ["Create #announcements.", "Create #general-q-and-a.", "Create project or lab channels only when needed.", "Post a short welcome guide for students."],
  },
  {
    id: "function-slides",
    title: "Functions Step-by-Step",
    icon: Settings,
    steps: ["Click create channel.", "Choose visibility and posting roles.", "Share files in the relevant channel.", "Review request status from the request queue."],
  },
  {
    id: "add-course-slides",
    title: "How to Add EdStream to Your Course",
    icon: ClipboardCheck,
    steps: ["Ask your institution to enable the EdStream Canvas tool.", "Open Canvas course settings.", "Add EdStream to course navigation.", "Confirm students and TAs can see the tool."],
  },
  {
    id: "student-slides",
    title: "For Students",
    icon: Users,
    steps: ["Open EdStream from Canvas.", "Use the channel list to find the right conversation.", "Check files/media before asking for a resend.", "Submit requests only when your course team enables them."],
  },
];

const Blog = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Help Center - EdStream";
  }, []);

  const filteredFaq = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return faqItems;

    return faqItems.filter((item) =>
      `${item.category} ${item.question} ${item.answer}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#fbf7f4] text-[#2f4156]">
      <Header />

      <section className="bg-[#fbf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#eadfd8] bg-white px-4 py-2 text-sm font-bold text-[#728096] shadow-sm">
            <HelpCircle className="mr-2 h-4 w-4 text-[#567cbd]" />
            Help Center
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl font-bold leading-tight text-[#2f4156] lg:text-6xl">
            FAQ, guides, and slide-style walkthroughs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#728096]">
            Search common questions, then jump into instructor or student guides. The guide cards are structured like
            slide decks so they can later be replaced with real Google Slides or Mintlify links.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="border border-[#eadfd8] bg-white shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2f4156]">Search FAQ</h2>
                  <p className="mt-2 text-[#728096]">Try keywords like “requests”, “files”, “students”, or “Canvas”.</p>
                </div>
                <div className="relative w-full lg:max-w-md">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#728096]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search Help Center..."
                    className="w-full rounded-full border border-[#eadfd8] bg-[#fbf7f4] py-3 pl-12 pr-4 text-[#2f4156] outline-none transition focus:border-[#567cbd] focus:ring-4 focus:ring-[#567cbd]/10"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {filteredFaq.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-[#eadfd8] bg-[#fbf7f4] p-5">
                    <span className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-[#567cbd]">
                      {item.category}
                    </span>
                    <h3 className="mb-3 text-lg font-black text-[#2f4156]">{item.question}</h3>
                    <p className="leading-7 text-[#728096]">{item.answer}</p>
                  </div>
                ))}
              </div>

              {filteredFaq.length === 0 && (
                <div className="rounded-2xl bg-[#fbf7f4] p-8 text-center text-[#728096]">
                  No FAQ matches that keyword yet. Try another term or contact us.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#567cbd]">Guides</p>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2f4156] lg:text-5xl">
              Jump to a slide-style tutorial
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideDecks.map((deck) => {
              const Icon = deck.icon;
              return (
                <a key={deck.title} href={deck.href} className="group block rounded-3xl border border-[#eadfd8] bg-[#fbf7f4] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#567cbd] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#728096]">{deck.group}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-[#2f4156]">{deck.title}</h3>
                  <div className="mb-5 flex gap-2 overflow-hidden">
                    {deck.slides.slice(0, 4).map((slide, index) => (
                      <div key={slide} className="min-h-20 min-w-[8rem] rounded-xl bg-white p-3 text-xs font-bold text-[#728096] shadow-sm">
                        <span className="mb-2 block text-[#FA4616]">Slide {index + 1}</span>
                        {slide}
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center font-black text-[#567cbd]">
                    Open slide guide <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2f4156]">Slide previews</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#728096]">
              My suggestion: keep these as web-based slide previews now, then replace each button with a Google Slides,
              Canva, or Mintlify link once the real decks are ready.
            </p>
          </div>

          <div className="space-y-8">
            {workflowCards.map((deck) => {
              const Icon = deck.icon;
              return (
                <Card key={deck.id} id={deck.id} className="scroll-mt-28 border border-[#eadfd8] bg-white shadow-lg">
                  <CardContent className="p-6 lg:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2f4156] text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#2f4156]">{deck.title}</h3>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {deck.steps.map((step, index) => (
                        <div key={step} className="rounded-2xl border border-[#eadfd8] bg-[#fbf7f4] p-5">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-wide text-[#728096]">Step</span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FA4616] text-sm font-black text-white">{index + 1}</span>
                          </div>
                          <p className="font-bold leading-7 text-[#2f4156]">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#2f4156] py-16 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold">Need a real slide deck link?</h2>
            <p className="mt-2 text-white/70">Create the slide deck in Google Slides or Canva, then paste the public link into these guide cards.</p>
          </div>
          <Button asChild className="rounded-full bg-[#FA4616] px-8 py-6 font-bold text-white hover:bg-orange-600">
            <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">Ask for help</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
