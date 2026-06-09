import { type CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Image,
  MessageSquare,
  MousePointer2,
  Plus,
  Search,
  Send,
  Users,
} from "lucide-react";

type FeatureId = "channels" | "files" | "media" | "requests" | "community";

const features: Array<{
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

const DesktopChatMockup = () => (
  <div className="relative flex h-full flex-col overflow-hidden bg-[#eef0f4]">
    <div className="flex h-[9%] min-h-[32px] flex-shrink-0 items-center bg-[#2d3a8c] px-3 text-white sm:px-4">
      <div className="mr-2 h-3.5 w-3.5 flex-shrink-0 rounded border border-white/60 sm:mr-3 sm:h-4 sm:w-4" />
      <div className="mx-auto flex h-6 w-full max-w-md items-center rounded-full bg-[#1e2868]/80 px-3 text-[10px] text-blue-100 sm:h-7 sm:text-xs">
        <Search className="mr-1.5 h-3 w-3 flex-shrink-0 sm:mr-2 sm:h-3.5 sm:w-3.5" />
        Search
      </div>
    </div>
    <div className="grid min-h-0 flex-1 grid-cols-[minmax(72px,18%)_1fr]">
      <aside className="flex min-h-0 flex-col bg-[#2d3a8c] px-2 py-2.5 text-white sm:px-3 sm:py-3">
        <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold sm:text-xs">
          <span className="truncate"># Channels</span>
          <Plus className="h-3 w-3 flex-shrink-0 sm:h-3.5 sm:w-3.5" />
        </div>
        {["# General", "# Peer Mentors", "# Project Lab"].map((channel, index) => (
          <div
            key={channel}
            className={`mb-0.5 truncate rounded px-2 py-1 text-[10px] sm:mb-1 sm:px-2.5 sm:py-1.5 sm:text-xs ${
              index === 0 ? "bg-white/15" : "text-blue-100"
            }`}
          >
            {channel}
          </div>
        ))}
        <div className="mt-3 text-[10px] font-bold sm:text-xs">Direct messages</div>
        <div className="mt-1 flex items-center gap-1.5 truncate rounded bg-white/10 px-2 py-1 text-[10px] sm:py-1.5 sm:text-xs">
          <FakeAvatar label="JP" color="orange" />
          <span className="truncate">Jamie Park</span>
        </div>
        <div className="mt-auto shrink-0 pt-2">
          <div className="grid grid-cols-3 gap-1 rounded-md bg-[#1a2258] p-1">
            <div className="rounded bg-white/15 py-1.5 text-center text-[8px] leading-none sm:text-[9px]">Courses</div>
            <div className="rounded py-1.5 text-center text-[8px] leading-none text-blue-100/80 sm:text-[9px]">
              Communities
            </div>
            <div className="rounded py-1.5 text-center text-[8px] leading-none text-blue-100/80 sm:text-[9px]">DMs</div>
          </div>
        </div>
      </aside>
      <main className="flex min-h-0 flex-col bg-white p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-2 sm:mb-3">
          <div>
            <h3 className="text-sm font-black text-gray-800 sm:text-base"># General</h3>
            <p className="text-[9px] text-gray-400 sm:text-[10px]">Intro to Biology · 24 members</p>
          </div>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-600 sm:text-[10px]">i</span>
        </div>
        <div className="min-h-0 flex-1 space-y-2.5 overflow-hidden sm:space-y-3">
          <div className="flex gap-2 sm:gap-2.5">
            <FakeAvatar label="DM" />
            <div className="min-w-0">
              <div className="text-[10px] font-black text-gray-900 sm:text-xs">
                Dr. Morgan
                <span className="ml-1 rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-700 sm:text-[10px]">
                  Instructor
                </span>
              </div>
              <p className="mt-0.5 text-[10px] leading-relaxed text-gray-600 sm:text-xs">
                Hi @everyone, welcome to our class! Post questions here.
              </p>
              <div className="mt-1 flex gap-1.5 text-[9px] sm:text-[10px]">
                <span className="rounded-full bg-orange-50 px-2 py-0.5">👍 12</span>
                <span className="rounded-full bg-blue-50 px-2 py-0.5">💬 4</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-2.5">
            <FakeAvatar label="AK" color="gray" />
            <div className="min-w-0">
              <div className="text-[10px] font-black text-gray-900 sm:text-xs">Alex Kim</div>
              <p className="mt-0.5 text-[10px] leading-relaxed text-gray-600 sm:text-xs">
                Can someone explain the project checkpoint?
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2 text-[10px] text-gray-400 sm:px-3 sm:py-2.5 sm:text-xs">
          <Plus className="h-3.5 w-3.5 flex-shrink-0 text-blue-600 sm:h-4 sm:w-4" />
          <span className="flex-1">Type your message here...</span>
          <Send className="h-3.5 w-3.5 flex-shrink-0 text-blue-600 sm:h-4 sm:w-4" />
        </div>
      </main>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="w-full rounded-[2rem] border-[7px] border-gray-950 bg-white p-3 shadow-2xl sm:rounded-[2.25rem] sm:border-[8px] sm:p-3.5">
    <div className="mx-auto mb-4 h-4 w-16 rounded-b-xl bg-black" />
    <div className="mb-5 flex items-center justify-between">
      <span className="text-lg font-black text-blue-700">EdStream</span>
      <span className="text-gray-400">≡</span>
    </div>
    {[
      ["DM", "Dr. Morgan", "Reminder: lab notes are posted in # General."],
      ["AK", "Alex Kim", "Where can I find the review PDF?"],
    ].map(([initials, name, text]) => (
      <div key={name} className="mb-3 rounded-xl border p-3 shadow-sm">
        <div className="mb-2 flex items-center gap-2">
          <FakeAvatar label={initials} />
          <span className="text-xs font-black text-gray-900">{name}</span>
        </div>
        <p className="text-[11px] leading-4 text-gray-500">{text}</p>
      </div>
    ))}
    <div className="mt-5 flex justify-around text-blue-600">● ○ ◒ ◐</div>
  </div>
);

const HeroMockup = () => (
  <div className="relative w-full lg:pl-2">
    <div className="w-full">
      <div className="rounded-xl bg-gray-950 p-2 shadow-2xl sm:rounded-2xl sm:p-2.5">
        <div className="aspect-[16/10] overflow-hidden rounded-md bg-white sm:rounded-lg">
          <DesktopChatMockup />
        </div>
        <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-gray-800 sm:mt-2.5 sm:h-2.5 sm:w-2.5" />
      </div>
      <div className="mx-auto h-10 w-28 bg-gray-950 sm:h-12 sm:w-32" />
      <div className="mx-auto h-2.5 w-48 rounded-sm bg-gray-950 sm:h-3 sm:w-56" />
    </div>
    <div className="absolute -bottom-4 right-0 hidden w-[28%] max-w-[200px] sm:block lg:-right-6 lg:max-w-[220px]">
      <PhoneMockup />
    </div>
  </div>
);

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
    <div ref={frameRef} className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
      <div className="relative overflow-hidden rounded-2xl border bg-white">
        <div className="flex h-11 items-center bg-blue-700 px-4 text-white">
          <div className="mr-4 h-5 w-5 rounded border border-white/70" />
          <div className="mx-auto flex h-7 w-full max-w-xs items-center rounded-full bg-white/15 px-3 text-xs text-blue-100">
            <Search className="mr-2 h-3 w-3" />
            Search
          </div>
        </div>
        <div className="grid min-h-[300px] grid-cols-[135px_1fr]">
          <aside className="bg-blue-800 p-3 text-white">
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
              <div key={item} className={`mb-2 rounded px-2 py-1.5 text-xs ${index === 0 ? "bg-white/15" : "text-blue-100"}`}>
                {item}
              </div>
            ))}
            <div className="mt-8 text-xs font-bold">Direct messages</div>
            <div className="mt-2 rounded bg-white/15 px-2 py-2 text-xs">Dr. Morgan</div>
            {id === "community" && (
              <div className="absolute bottom-0 left-0 grid w-[135px] grid-cols-3 bg-blue-950 p-1 text-[9px] text-blue-100">
                <span className="rounded px-1 py-2 text-center">Courses</span>
                <span className={`rounded px-1 py-2 text-center ${step > 0 ? "bg-white/15" : ""}`}>Communities</span>
                <span className="rounded px-1 py-2 text-center">DMs</span>
              </div>
            )}
          </aside>
          <main className="relative p-4">
            {id === "channels" && (
              <div className="mx-auto max-w-xs rounded-2xl bg-white p-5 shadow-2xl">
                <h4 className="mb-4 text-lg font-black text-blue-700">Create Channel</h4>
                <div className="mb-3 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-blue-50 p-3"><span className="block text-gray-400">Visibility</span><b>Private</b></div>
                  <div className="rounded-lg bg-blue-50 p-3"><span className="block text-gray-400">Who can send</span><b>Everyone</b></div>
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
                <div className="rounded-xl border bg-gray-50 p-4 text-sm text-gray-500">Share a course handout in # General</div>
                <div className="flex gap-3">
                  <FakeAvatar label="PI" />
                  <div>
                    <div className="text-xs font-black text-gray-900">Dr. Morgan</div>
                    <p className="mt-1 text-xs text-gray-500">Here is the course welcome packet for everyone.</p>
                    <div
                      data-demo-target="1"
                      className={`relative mt-2 flex items-center gap-3 rounded-xl border bg-white p-3 shadow-md transition-all duration-500 ${step > 0 ? "ring-2 ring-orange-200" : ""}`}
                    >
                      <FileText className="h-7 w-7 flex-shrink-0 text-orange-500" />
                      <div>
                        <h4 className="text-sm font-black text-blue-700">Welcome-to-EdStream.pdf</h4>
                        <p className="text-[10px] text-gray-400">248 KB · PDF</p>
                      </div>
                    </div>
                  </div>
                </div>
                {step >= 2 && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-blue-950/25 backdrop-blur-[1px]">
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
                <div data-demo-target="0" className="relative flex items-center rounded-xl border bg-gray-50 px-3 py-2 text-xs text-gray-400">
                  Type message <Plus className="ml-auto h-4 w-4 text-blue-600" />
                </div>
              </div>
            )}
            {id === "media" && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-black text-blue-700">Channel Details</h4>
                  <span
                    data-demo-target={id === "media" ? "0" : undefined}
                    className={`relative rounded-full px-2 py-1 text-xs transition-colors duration-500 ${step === 0 ? "bg-orange-500 text-white" : "bg-blue-50 text-blue-700"}`}
                  >
                    i
                  </span>
                </div>
                <div className="mb-4 flex gap-2">
                  {["Photos", "Videos", "Files"].map((tab, index) => (
                    <span
                      key={tab}
                      data-demo-target={id === "media" && index === step ? String(step) : undefined}
                      className={`relative rounded-full px-3 py-1 text-xs font-black transition-colors duration-500 ${index === step ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => <div key={item} className="h-20 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 p-3 text-xs font-bold text-blue-700">Course media {item}</div>)}
                </div>
              </div>
            )}
            {id === "requests" && (
              <div className="mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-xl">
                <div data-demo-target="0" className="mb-3 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-600">Extension request</div>
                <p className="text-sm text-gray-500">Student requests more time for Project Checkpoint 2.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="rounded-lg border py-2 text-sm font-bold text-gray-500">Deny</button>
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
                <h4 className="mb-4 text-xl font-black text-blue-700">Communities</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Study Group", "Project Teams", "Peer Mentors", "Exam Review"].map((community, index) => (
                    <div
                      key={community}
                      data-demo-target={id === "community" && index === step ? String(step) : undefined}
                      className={`relative h-24 rounded-xl p-4 text-sm font-bold transition-colors duration-500 ${index === step ? "bg-orange-50 text-orange-700" : "bg-gray-50 text-gray-600"}`}
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

const Index = () => {
  useEffect(() => {
    document.title = "EdStream - Canvas Course Communication";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10 lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              Built for Canvas course communities
            </div>
            <h1 className="text-5xl font-black leading-tight text-blue-700 lg:text-6xl">
              Elevate your
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                campus & team
              </span>
              communication.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Streamline discussions, connect peers, and foster collaborative learning. EdStream is a modern workspace
              designed for Canvas-based courses.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 font-bold text-white shadow-lg hover:from-orange-600 hover:to-orange-700">
                <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <HeroMockup />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["The pain", "Course communication gets split across Canvas inbox, email, discussion boards, and outside group chats."],
              ["The solution", "EdStream creates one Canvas-aware place for channels, class files, and student requests."],
              ["Why it matters", "Students know where to ask. Instructors know where to respond. Materials stay attached to the course."],
            ].map(([title, copy]) => (
              <Card key={title} className="border-l-4 border-l-orange-500 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="mb-4 text-2xl font-black text-blue-700">{title}</h2>
                  <p className="leading-7 text-gray-600">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-orange-500">Features</p>
            <h2 className="text-4xl font-black text-blue-700 lg:text-5xl">Five workflows shown with realistic demos</h2>
            <p className="mt-4 text-lg text-gray-600">Each demo uses fake names and course data while matching the real app layout.</p>
          </div>
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={feature.id} className="grid items-center gap-10 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="mb-5 text-3xl font-black text-blue-700">{feature.title}</h3>
                  <p className="mb-6 text-lg leading-8 text-gray-600">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-gray-700">
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

      <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Users className="mx-auto mb-5 h-10 w-10 text-orange-300" />
          <h2 className="text-4xl font-black">Ready to map this to your course?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Start with one course, one Q&A channel, one announcement channel, and one request workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 font-bold text-white hover:from-orange-600 hover:to-orange-700">
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">Request a pilot</a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-white bg-transparent px-8 py-6 font-bold text-white hover:bg-white hover:text-blue-700">
              <Link to="/guides">Open Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
