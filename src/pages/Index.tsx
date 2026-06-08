import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  Image,
  MessageSquare,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const productHighlights = [
  {
    icon: MessageSquare,
    title: "Course channels",
    description:
      "Create spaces for announcements, lab sections, project groups, or staff-only coordination without leaving Canvas.",
  },
  {
    icon: ClipboardCheck,
    title: "Student requests",
    description:
      "Collect extension, attendance, and regrade requests in one queue so instructors can review and respond consistently.",
  },
  {
    icon: FileText,
    title: "File sharing",
    description:
      "Keep handouts, PDFs, and shared materials close to the conversation where students already ask questions.",
  },
  {
    icon: Image,
    title: "Media library",
    description:
      "Surface shared photos, videos, and files from a channel in simple tabs so students can find materials later.",
  },
];

const demoTabs = [
  {
    label: "Channels",
    title: "# project-team-a",
    body: "Create focused spaces for teams, labs, or announcements.",
    items: ["# announcements", "# office-hours", "# project-team-a"],
  },
  {
    label: "Requests",
    title: "Request queue",
    body: "Students submit a request, instructors review it, and the status stays visible.",
    items: ["Extension request - Pending", "Regrade question - Reviewed", "Attendance note - Approved"],
  },
  {
    label: "Files",
    title: "Shared materials",
    body: "Course files stay attached to the conversation instead of disappearing in email threads.",
    items: ["Syllabus.pdf", "Lab-02-handout.docx", "Midterm-review-slides.pdf"],
  },
];

const ProductMockup = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTab((current) => (current + 1) % demoTabs.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  const activeDemo = demoTabs[activeTab];

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <div className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Canvas course</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.6fr]">
        <div className="rounded-2xl bg-blue-950 p-4 text-white">
          <div className="mb-4 text-sm font-bold text-orange-300">EdStream</div>
          <div className="space-y-2 text-sm">
            {demoTabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`w-full rounded-lg px-3 py-2 text-left transition ${
                  index === activeTab ? "bg-white/15 text-white" : "text-blue-100 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-72 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 p-5 dark:from-gray-900 dark:to-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-blue-600 dark:text-blue-300">{activeDemo.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{activeDemo.body}</p>
            </div>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600 dark:bg-orange-900/50 dark:text-orange-300">
              Live in Canvas
            </span>
          </div>

          <div className="space-y-3">
            {activeDemo.items.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/60 dark:text-blue-300">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{item}</span>
                </div>
                <CheckCircle className="h-5 w-5 text-orange-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = "EdStream - Canvas course communication";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 lg:py-28">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700 dark:bg-blue-900/50 dark:text-blue-200">
              <MessageSquare className="mr-2 h-4 w-4" />
              A Slack-like layer for Canvas courses
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-black leading-tight text-blue-600 dark:text-blue-300 lg:text-6xl">
                Course communication that stays inside
                <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  the learning flow.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300 lg:text-xl">
                EdStream gives instructors and students a simple place for channels, class files, and student
                requests directly alongside Canvas coursework.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-bold text-white shadow-lg hover:from-orange-600 hover:to-orange-700"
                asChild
              >
                <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                  Request a pilot <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 px-8 py-6 text-base font-bold text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30"
                asChild
              >
                <Link to="/guides">Read the guides</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://apps.apple.com/us/app/edstream/id6736952355" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.edstreamchat.app" target="_blank" rel="noopener noreferrer">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14 -my-2" />
              </a>
            </div>
          </div>

          <ProductMockup />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
              Keep the product story simple
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              EdStream focuses on the everyday communication problems that happen around a course.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productHighlights.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-0 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white ${index % 2 === 0 ? "bg-blue-600" : "bg-orange-500"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-black text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: BookOpen,
              title: "For instructors",
              copy: "Set up course spaces, review student requests, and keep routine answers easy to find.",
            },
            {
              icon: Users,
              title: "For students",
              copy: "Ask questions, coordinate with classmates, and check request status without another login.",
            },
            {
              icon: Shield,
              title: "For institutions",
              copy: "Use Canvas identity and course roles as the starting point for access and administration.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border border-white/70 bg-white/80 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-800/90">
                <CardContent className="p-8">
                  <Icon className="mb-5 h-10 w-10 text-orange-500" />
                  <h3 className="mb-3 text-2xl font-black text-blue-600 dark:text-blue-300">{item.title}</h3>
                  <p className="leading-7 text-gray-600 dark:text-gray-300">{item.copy}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Smartphone className="mx-auto mb-5 h-10 w-10 text-blue-600 dark:text-blue-300" />
          <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
            Built for a clear next step
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Explore the instructor and student guides, then use the pilot form to discuss whether EdStream fits your
            course workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-blue-600 px-8 py-6 text-base font-bold text-white hover:bg-blue-700">
              <Link to="/features">View features</Link>
            </Button>
            <Button asChild variant="outline" className="border-orange-200 px-8 py-6 text-base font-bold text-orange-600 hover:bg-orange-50">
              <Link to="/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
