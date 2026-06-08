import { useEffect } from "react";
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
  LockKeyhole,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";

const coreFeatures = [
  {
    icon: MessageSquare,
    title: "1-click course channels",
    subtitle: "Give each course conversation a clear home.",
    bullets: [
      "Announcements, staff spaces, lab sections, and project channels",
      "Simple posting permissions for instructors, TAs, and students",
      "Canvas-first access so students do not need to find another workspace",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Centralized requests",
    subtitle: "Move repeated student requests out of scattered inboxes.",
    bullets: [
      "Students submit extension, attendance, or regrade questions from one place",
      "Instructors review status and respond without digging through email threads",
      "Clear pending, approved, and denied states for both sides",
    ],
  },
  {
    icon: FileText,
    title: "File sharing and previews",
    subtitle: "Keep course materials connected to the discussion.",
    bullets: [
      "Share handouts, slides, and PDFs in the relevant channel",
      "Help students find the file in context instead of searching email",
      "Use familiar message threads for follow-up questions",
    ],
  },
  {
    icon: Image,
    title: "Organized media",
    subtitle: "Make shared course materials easier to revisit.",
    bullets: [
      "Channel details organize shared photos, videos, and files",
      "Useful for whiteboard photos, lab media, and project artifacts",
      "Keeps the first version simple without pretending to be an AI search layer",
    ],
  },
];

const roleSections = [
  {
    title: "For instructors and TAs",
    icon: Settings,
    points: [
      "Create the course spaces students actually need",
      "Keep requests visible and easy to respond to",
      "Use private staff channels for coordination",
    ],
  },
  {
    title: "For students",
    icon: Users,
    points: [
      "Ask course questions where classmates can also benefit",
      "Submit requests and check the latest status",
      "Find shared materials from the channel where they were posted",
    ],
  },
  {
    title: "For Canvas courses",
    icon: LockKeyhole,
    points: [
      "Start with Canvas identity and course context",
      "Keep EdStream positioned as a course communication layer",
      "Avoid making students manage another unrelated community app",
    ],
  },
];

const Features = () => {
  useEffect(() => {
    document.title = "Features - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <MessageSquare className="mr-2 h-5 w-5 text-white" />
            <span className="font-bold text-white">Simple product features</span>
          </div>
          <h1 className="text-4xl font-black leading-tight text-white lg:text-6xl">
            The essentials for
            <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
              course communication
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            EdStream is not trying to replace the LMS. It adds a focused, Slack-like communication layer where students
            and instructors already work.
          </p>
        </div>
      </section>

      <section className="-mt-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-0 bg-white/90 shadow-xl backdrop-blur dark:bg-gray-800/90">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${index % 2 === 0 ? "bg-blue-600" : "bg-orange-500"}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-blue-600 dark:text-blue-300">{feature.title}</h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">{feature.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-gray-700 dark:text-gray-200">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
              Designed around real course roles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The first version should stay understandable: channels, requests, files, and Canvas context.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {roleSections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="border border-blue-100 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <CardContent className="p-8">
                    <Icon className="mb-5 h-10 w-10 text-orange-500" />
                    <h3 className="mb-4 text-2xl font-black text-blue-600 dark:text-blue-300">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3 text-gray-600 dark:text-gray-300">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white lg:text-5xl">Need the step-by-step version?</h2>
          <p className="mt-5 text-lg leading-8 text-blue-100">
            The guides explain how instructors add EdStream to a course and how students use the main workflows.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-bold text-white hover:from-orange-600 hover:to-orange-700">
              <Link to="/guides">
                Open guides <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent px-8 py-6 text-base font-bold text-white hover:bg-white hover:text-blue-600">
              <Link to="/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
