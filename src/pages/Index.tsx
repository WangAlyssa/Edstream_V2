import { type CSSProperties, useEffect, useState } from "react";
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

const DesktopChatMockup = ({ compact = false }: { compact?: boolean }) => (
  <div className="relative h-full overflow-hidden bg-white">
    <div className="flex h-12 items-center bg-blue-700 px-4 text-white">
      <div className="mr-4 h-5 w-5 rounded border border-white/70" />
      <div className="mx-auto flex h-8 w-full max-w-xs items-center rounded-full bg-white/15 px-4 text-sm text-blue-100">
        <Search className="mr-2 h-4 w-4" />
        Search course
      </div>
    </div>
    <div className={`grid ${compact ? "h-[280px] grid-cols-[132px_1fr]" : "h-[330px] grid-cols-[150px_1fr]"}`}>
      <aside className="bg-blue-800 p-4 text-white">
        <div className="mb-3 flex items-center justify-between text-sm font-bold">
          <span># Channels</span>
          <Plus className="h-4 w-4" />
        </div>
        {["# General", "# Peer Mentors", "# Project Q&A"].map((channel, index) => (
          <div key={channel} className={`mb-2 rounded-lg px-3 py-2 text-sm ${index === 0 ? "bg-white/15" : "text-blue-100"}`}>
            {channel}
          </div>
        ))}
        <div className="mt-5 text-sm font-bold">Direct messages</div>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-white/15 px-2 py-2 text-sm">
          <FakeAvatar label="PI" color="orange" />
          Prof. Rivera
        </div>
        {!compact && (
          <div className="absolute bottom-0 left-0 hidden w-[150px] grid-cols-3 gap-1 bg-blue-950 p-2 text-[10px] text-blue-100 lg:grid">
            <span className="rounded bg-white/10 px-1 py-2 text-center">Courses</span>
            <span className="rounded px-1 py-2 text-center">Communities</span>
            <span className="rounded px-1 py-2 text-center">DMs</span>
          </div>
        )}
      </aside>
      <main className="p-5">
        <div className="mb-5 flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="text-xl font-black text-blue-700"># General</h3>
            <p className="text-xs font-bold text-gray-400">7 members</p>
          </div>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">Course chat</span>
        </div>
        <div className="space-y-4">
          <div className="flex gap-3">
            <FakeAvatar label="PI" />
            <div>
              <div className="text-sm font-black text-gray-900">
                Prof. Rivera <span className="ml-2 rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-700">Instructor</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">Hi @everyone, welcome to our class!</p>
              <div className="mt-2 flex gap-2 text-xs">
                <span className="rounded-full bg-orange-50 px-2 py-1">👍 16</span>
                <span className="rounded-full bg-blue-50 px-2 py-1">💬 7</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <FakeAvatar label="ST" color="gray" />
            <div>
              <div className="text-sm font-black text-gray-900">Student Team</div>
              <p className="mt-1 text-sm text-gray-600">Can someone explain the project checkpoint?</p>
            </div>
          </div>
          <div className="mt-8 flex items-center rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-400">
            Type your message here...
            <Send className="ml-auto h-4 w-4 text-blue-600" />
          </div>
        </div>
      </main>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="w-[150px] rounded-[1.7rem] border-[7px] border-gray-950 bg-white p-3 shadow-2xl">
    <div className="mx-auto mb-4 h-4 w-16 rounded-b-xl bg-black" />
    <div className="mb-5 flex items-center justify-between">
      <span className="text-base font-black text-blue-700">EdStream</span>
      <span className="text-gray-400">≡</span>
    </div>
    {[
      ["PI", "Professor", "Reminder: lab notes are posted in # General."],
      ["ST", "Student", "Where can I find the review PDF?"],
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
  <div className="relative mx-auto h-[560px] max-w-[650px]">
    <div className="absolute left-0 top-0 w-[590px] max-w-[88%]">
      <div className="overflow-hidden rounded-[1.6rem] border-[10px] border-gray-950 bg-white shadow-2xl">
        <DesktopChatMockup />
      </div>
      <div className="mx-auto h-16 w-40 bg-gray-950" />
      <div className="mx-auto h-4 w-72 rounded bg-gray-950" />
    </div>
    <div className="absolute bottom-3 right-0 hidden sm:block">
      <PhoneMockup />
    </div>
  </div>
);

const Cursor = ({ style }: { style: CSSProperties }) => (
  <MousePointer2
    className="demo-cursor-float absolute z-30 h-4 w-4 fill-white text-blue-950 transition-all duration-700 ease-in-out"
    style={style}
  />
);

const FeatureDemo = ({ id }: { id: FeatureId }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setStep((current) => (current + 1) % 3), 1800);
    return () => window.clearInterval(timer);
  }, []);

  const cursorPositions: Record<FeatureId, Array<CSSProperties>> = {
    channels: [
      { left: "27%", top: "16%" },
      { left: "55%", top: "49%" },
      { left: "62%", top: "72%" },
    ],
    files: [
      { left: "77%", top: "77%" },
      { left: "54%", top: "43%" },
      { left: "75%", top: "71%" },
    ],
    media: [
      { left: "84%", top: "21%" },
      { left: "48%", top: "34%" },
      { left: "66%", top: "34%" },
    ],
    requests: [
      { left: "47%", top: "31%" },
      { left: "65%", top: "65%" },
      { left: "65%", top: "65%" },
    ],
    community: [
      { left: "26%", top: "88%" },
      { left: "49%", top: "37%" },
      { left: "68%", top: "37%" },
    ],
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
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
              <Plus className={`h-4 w-4 rounded ${id === "channels" && step === 0 ? "bg-orange-500" : ""}`} />
            </div>
            {["# General", "# Peer Mentors", "# Project"].map((item, index) => (
              <div key={item} className={`mb-2 rounded px-2 py-1.5 text-xs ${index === 0 ? "bg-white/15" : "text-blue-100"}`}>
                {item}
              </div>
            ))}
            <div className="mt-8 text-xs font-bold">Direct messages</div>
            <div className="mt-2 rounded bg-white/15 px-2 py-2 text-xs">Prof. Rivera</div>
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
                <div className="mb-4 rounded-lg bg-orange-50 p-3 text-sm font-black text-blue-700"># project-group-alpha</div>
                <button className={`w-full rounded-lg py-3 text-sm font-black text-white ${step === 2 ? "bg-orange-500" : "bg-blue-600"}`}>Create Channel</button>
              </div>
            )}
            {id === "files" && (
              <div className="space-y-4">
                <div className="rounded-xl border bg-gray-50 p-4 text-sm text-gray-500">Share a course handout in # General</div>
                <div className={`rounded-2xl border bg-white p-5 shadow-lg transition ${step > 0 ? "scale-100 opacity-100" : "scale-95 opacity-70"}`}>
                  <FileText className="mb-3 h-8 w-8 text-orange-500" />
                  <h4 className="font-black text-blue-700">Midterm-review.pdf</h4>
                  <div className="mt-3 space-y-2">{[1, 2, 3].map((line) => <div key={line} className="h-2 rounded bg-blue-100" />)}</div>
                </div>
                <div className="flex items-center rounded-xl border bg-gray-50 px-3 py-2 text-xs text-gray-400">Type message <Plus className="ml-auto h-4 w-4 text-blue-600" /></div>
              </div>
            )}
            {id === "media" && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-black text-blue-700">Channel Details</h4>
                  <span className={`rounded-full px-2 py-1 text-xs ${step === 0 ? "bg-orange-500 text-white" : "bg-blue-50 text-blue-700"}`}>i</span>
                </div>
                <div className="mb-4 flex gap-2">
                  {["Photos", "Videos", "Files"].map((tab, index) => (
                    <span key={tab} className={`rounded-full px-3 py-1 text-xs font-black ${index === step ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}>{tab}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => <div key={item} className="h-20 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 p-3 text-xs font-bold text-blue-700">Course media {item}</div>)}
                </div>
              </div>
            )}
            {id === "requests" && (
              <div className="mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-xl">
                <div className="mb-3 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-600">Extension request</div>
                <p className="text-sm text-gray-500">Student requests more time for Project Checkpoint 2.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="rounded-lg border py-2 text-sm font-bold text-gray-500">Deny</button>
                  <button className={`rounded-lg py-2 text-sm font-bold text-white ${step === 2 ? "bg-green-600" : "bg-blue-600"}`}>{step === 2 ? "Approved" : "Approve"}</button>
                </div>
              </div>
            )}
            {id === "community" && (
              <div>
                <h4 className="mb-4 text-xl font-black text-blue-700">Communities</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["Study Group", "Project Teams", "Peer Mentors", "Exam Review"].map((community, index) => (
                    <div key={community} className={`h-24 rounded-xl p-4 text-sm font-bold ${index === step ? "bg-orange-50 text-orange-700" : "bg-gray-50 text-gray-600"}`}>{community}</div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      <Cursor style={cursorPositions[id][step]} />
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
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
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
