import { useEffect, useState } from "react";
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
  Settings2,
  Users,
} from "lucide-react";

type FeatureId = "channels" | "files" | "media" | "requests" | "community";

const features: Array<{
  id: FeatureId;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
}> = [
  {
    id: "channels",
    title: "1-Click Channels",
    eyebrow: "Create focused spaces",
    description:
      "Instructors can quickly create course, project, lab, or announcement channels so students know exactly where each conversation belongs.",
    bullets: ["Private or class-wide channels", "Instructor / TA posting controls", "Canvas course context"],
  },
  {
    id: "files",
    title: "Seamless File Sharing",
    eyebrow: "Keep files inside the conversation",
    description:
      "Share PDFs, slides, and handouts in the relevant channel so course materials stay connected to the question or topic being discussed.",
    bullets: ["Inline file cards", "Preview-oriented workflow", "Less searching through email"],
  },
  {
    id: "media",
    title: "Automated Media Sorting",
    eyebrow: "Find shared materials later",
    description:
      "Shared photos, videos, and files can be grouped in a channel details view so students can revisit whiteboard photos, recordings, and documents.",
    bullets: ["Photos / videos / files tabs", "Channel-level organization", "Useful for labs and projects"],
  },
  {
    id: "requests",
    title: "Centralized Requests",
    eyebrow: "Move repeated requests out of email",
    description:
      "Students submit common course requests in one place, and instructors can review, respond, and keep statuses visible.",
    bullets: ["Extension and attendance requests", "Pending / approved / denied states", "Cleaner instructor workflow"],
  },
  {
    id: "community",
    title: "Community",
    eyebrow: "Help classmates talk in the right place",
    description:
      "Channels give large classes a calmer way to ask questions, form project groups, and keep peer support connected to the course.",
    bullets: ["General Q&A", "Project groups", "Course community"],
  },
];

const StaticHeroMockup = () => (
  <div className="relative mx-auto h-[430px] max-w-[620px] lg:h-[520px]">
    <div className="absolute left-0 top-4 w-[88%] rounded-[1.75rem] border-[10px] border-[#1f2d3d] bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#567cbd]" />
        <span className="h-3 w-3 rounded-full bg-blue-200" />
        <span className="h-3 w-3 rounded-full bg-orange-200" />
        <span className="ml-4 rounded bg-blue-50 px-3 py-1 text-xs font-bold text-[#567cbd]">Programming Fundamentals 1</span>
        <span className="rounded bg-blue-50 px-3 py-1 text-xs font-bold text-[#567cbd]">Canvas Integration</span>
      </div>
      <div className="grid h-[330px] grid-cols-[150px_1fr] lg:h-[380px]">
        <aside className="bg-[#2f4156] p-5 text-white">
          <div className="mb-5 text-xs font-black uppercase tracking-widest text-white/50">Channels</div>
          {["# General", "# Peer Mentors", "# Project Q&A"].map((item, index) => (
            <div key={item} className={`mb-3 rounded-lg px-3 py-2 text-sm ${index === 0 ? "bg-white/15" : "text-white/75"}`}>
              {item}
            </div>
          ))}
          <div className="mt-8 text-xs font-black uppercase tracking-widest text-white/50">Direct messages</div>
          <div className="mt-3 rounded-lg bg-white/10 px-3 py-2 text-sm">Prof. A</div>
        </aside>
        <main className="p-6">
          <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-xl font-black text-[#2f4156]"># General</h3>
              <p className="text-xs font-bold text-gray-400">7 members</p>
            </div>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">Course chat</span>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-black text-[#567cbd]">PA</div>
              <div>
                <div className="text-sm font-black text-[#2f4156]">Professor <span className="ml-2 rounded bg-blue-50 px-2 py-0.5 text-xs text-[#567cbd]">Instructor</span></div>
                <p className="mt-1 text-sm text-gray-500">Hi @everyone, welcome to our class!</p>
                <div className="mt-2 flex gap-2 text-xs"><span className="rounded-full bg-orange-50 px-2 py-1">👍 16</span><span className="rounded-full bg-blue-50 px-2 py-1">💬 7</span></div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-400">Type your message here...</div>
          </div>
        </main>
      </div>
    </div>

    <div className="absolute bottom-0 right-0 w-[180px] rounded-[2.2rem] border-[9px] border-[#142033] bg-white p-4 shadow-2xl lg:w-[210px]">
      <div className="mx-auto mb-4 h-4 w-16 rounded-b-xl bg-black" />
      <div className="mb-5 flex items-center justify-between">
        <span className="font-serif text-lg font-black text-[#2f4156]">EdStream</span>
        <span className="text-gray-400">≡</span>
      </div>
      {[
        ["PA", "Professor", "Don't forget the assignment is due tomorrow at 11:59 PM!"],
        ["AW", "Student A", "Can someone explain binary search tree deletion logic?"],
      ].map(([initials, name, text]) => (
        <div key={name} className="mb-3 rounded-xl border border-gray-100 p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[10px] font-black text-[#567cbd]">{initials}</span>
            <span className="text-xs font-black text-[#2f4156]">{name}</span>
          </div>
          <p className="text-[11px] leading-4 text-gray-500">{text}</p>
        </div>
      ))}
      <div className="mt-5 flex justify-around text-[#567cbd]">● ○ ◒ ◐</div>
    </div>
  </div>
);

const FeatureGifMockup = ({ id }: { id: FeatureId }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % 3);
    }, 1700);

    return () => window.clearInterval(timer);
  }, []);

  const cursorClass = step === 0 ? "left-[18%] top-[72%]" : step === 1 ? "left-[55%] top-[56%]" : "left-[78%] top-[30%]";

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-orange-50/50" />
      <div className="relative rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#567cbd]" />
          <span className="h-3 w-3 rounded-full bg-blue-100" />
          <span className="h-3 w-3 rounded-full bg-orange-100" />
          <span className="ml-3 rounded bg-gray-50 px-3 py-1 text-xs font-bold text-gray-400">EdStream Course</span>
        </div>
        <div className="grid min-h-[280px] grid-cols-[120px_1fr]">
          <aside className="bg-[#2f4156] p-4 text-white">
            <div className="mb-4 text-xs font-black uppercase text-white/50">Channels</div>
            {["# General", "# Peer Mentors", "# Project Q&A"].map((channel, index) => (
              <div key={channel} className={`mb-2 rounded px-2 py-1.5 text-xs ${index === step ? "bg-white/15" : "text-white/65"}`}>{channel}</div>
            ))}
          </aside>
          <main className="p-5">
            {id === "channels" && (
              <div className="mx-auto max-w-xs rounded-2xl bg-white p-5 shadow-2xl">
                <h4 className="mb-4 text-lg font-black text-[#2f4156]">Create Channel</h4>
                <div className="mb-3 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-gray-50 p-3"><span className="block text-gray-400">Visibility</span><b>Private</b></div>
                  <div className="rounded-lg bg-gray-50 p-3"><span className="block text-gray-400">Who can send</span><b>Everyone</b></div>
                </div>
                <div className="mb-4 rounded-lg bg-orange-50 p-3 text-sm font-black text-[#567cbd]"># project-group-alpha</div>
                <button className={`w-full rounded-lg py-3 text-sm font-black text-white transition ${step === 2 ? "bg-orange-500" : "bg-[#567cbd]"}`}>Create Channel</button>
              </div>
            )}
            {id === "files" && (
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-500">Student shared <b>Midterm-review.pdf</b></div>
                <div className={`rounded-2xl border bg-white p-5 shadow-lg transition ${step > 0 ? "scale-100 opacity-100" : "scale-95 opacity-70"}`}>
                  <FileText className="mb-3 h-8 w-8 text-orange-500" />
                  <h4 className="font-black text-[#2f4156]">Inline PDF Preview</h4>
                  <div className="mt-3 space-y-2">{[1, 2, 3].map((line) => <div key={line} className="h-2 rounded bg-blue-100" />)}</div>
                </div>
              </div>
            )}
            {id === "media" && (
              <div>
                <div className="mb-4 flex gap-2">
                  {["Photos", "Videos", "Files"].map((tab, index) => <span key={tab} className={`rounded-full px-3 py-1 text-xs font-black ${index === step ? "bg-[#567cbd] text-white" : "bg-gray-100 text-gray-400"}`}>{tab}</span>)}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => <div key={item} className="h-20 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 p-3 text-xs font-bold text-[#2f4156]">Course media {item}</div>)}
                </div>
              </div>
            )}
            {id === "requests" && (
              <div className="mx-auto max-w-sm rounded-2xl bg-white p-5 shadow-xl">
                <div className="mb-3 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-600">Extension request</div>
                <p className="text-sm text-gray-500">Student requests 24 additional hours for Assignment 3.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="rounded-lg border border-gray-200 py-2 text-sm font-bold text-gray-500">Deny</button>
                  <button className={`rounded-lg py-2 text-sm font-bold text-white ${step === 2 ? "bg-green-600" : "bg-[#567cbd]"}`}>{step === 2 ? "Approved" : "Approve"}</button>
                </div>
              </div>
            )}
            {id === "community" && (
              <div className="space-y-3">
                {["Can anyone explain the AVL tree example?", "I can share my notes from lab.", "Thanks! This helped."].map((message, index) => (
                  <div key={message} className={`rounded-xl p-3 text-sm shadow-sm ${index === step ? "bg-orange-50 text-orange-700" : "bg-gray-50 text-gray-500"}`}>{message}</div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
      <div className={`absolute ${cursorClass} h-5 w-5 rounded-full border-2 border-[#2f4156] bg-white shadow-lg transition-all duration-700`}>
        <span className="absolute -bottom-5 left-3 h-5 w-0.5 rotate-[-35deg] bg-[#2f4156]" />
      </div>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = "EdStream - Modern Course Communication";
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf7f4] text-[#2f4156]">
      <Header />

      <section className="overflow-hidden border-b border-[#eadfd8] bg-[#fbf7f4] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-4 py-2 text-sm font-bold text-[#728096] shadow-sm">
              <span className="flex -space-x-2">
                <span className="h-6 w-6 rounded-full border-2 border-white bg-blue-100" />
                <span className="h-6 w-6 rounded-full border-2 border-white bg-orange-100" />
                <span className="h-6 w-6 rounded-full border-2 border-white bg-slate-200" />
              </span>
              Built for Canvas course communities
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl font-extrabold leading-[1.08] text-[#2f4156] md:text-6xl lg:text-7xl">
              Elevate your
              <span className="block italic text-[#567cbd]">campus & team</span>
              communication.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#728096]">
              Streamline discussions, connect peers, and foster a culture of collaborative learning. EdStream is a
              modern workspace designed for Canvas-based courses.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="rounded-full bg-[#2f4156] px-8 py-6 text-white shadow-lg hover:bg-[#243343]">
                <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#567cbd]/30 px-8 py-6 font-bold text-[#567cbd] hover:bg-white">
                <Link to="/help">Visit Help Center</Link>
              </Button>
            </div>
          </div>
          <StaticHeroMockup />
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["The pain", "Course communication gets split across Canvas inbox, email, discussion boards, and outside group chats."],
              ["The solution", "EdStream creates one course-aware place for channels, class files, and student requests."],
              ["Why it matters", "Students know where to ask. Instructors know where to respond. Materials stay attached to the course context."],
            ].map(([title, copy]) => (
              <Card key={title} className="border border-[#eadfd8] shadow-sm">
                <CardContent className="p-8">
                  <h2 className="mb-4 font-['Playfair_Display'] text-3xl font-bold text-[#2f4156]">{title}</h2>
                  <p className="leading-7 text-[#728096]">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#fbf7f4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#567cbd]">EdStream Features</p>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2f4156] lg:text-5xl">
              Five simple workflows, shown in motion
            </h2>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={feature.id} className="grid items-center gap-10 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#567cbd]">{feature.eyebrow}</p>
                  <h3 className="mb-5 font-['Playfair_Display'] text-4xl font-bold text-[#2f4156]">{feature.title}</h3>
                  <p className="mb-6 text-lg leading-8 text-[#728096]">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[#516173]">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#567cbd]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <FeatureGifMockup id={feature.id} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f4156] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold lg:text-5xl">Ready to map this to your course?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Start with one course, one Q&A channel, one announcement channel, and one request workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="rounded-full bg-[#FA4616] px-8 py-6 font-bold text-white hover:bg-orange-600">
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">Request a pilot</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white bg-transparent px-8 py-6 font-bold text-white hover:bg-white hover:text-[#2f4156]">
              <Link to="/help">Open Help Center</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
