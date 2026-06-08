import { useEffect } from "react";
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
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const instructorGuides = [
  {
    title: "How to add EdStream to your course",
    steps: [
      "Confirm your institution has enabled the EdStream Canvas tool.",
      "Open the Canvas course where you want EdStream available.",
      "Add EdStream to the course navigation and publish the course tool link.",
      "Review instructor, TA, and student roles before inviting students to use it.",
    ],
  },
  {
    title: "Basic primer",
    steps: [
      "Use channels for conversations that need a clear audience.",
      "Use requests for extension, attendance, or regrade workflows.",
      "Use files and media tabs to help students find shared course materials.",
    ],
  },
  {
    title: "How to start",
    steps: [
      "Create an announcements channel first.",
      "Add one Q&A channel for general student questions.",
      "Add project or lab channels only when they match the course structure.",
      "Post a short welcome message explaining where students should ask for help.",
    ],
  },
];

const functionGuides = [
  {
    icon: MessageSquare,
    title: "Channels",
    steps: ["Choose a channel purpose", "Set who can post", "Invite the relevant course roles"],
  },
  {
    icon: ClipboardCheck,
    title: "Requests",
    steps: ["Pick the request type", "Ask for the minimum required context", "Respond and update the status"],
  },
  {
    icon: FileText,
    title: "Files",
    steps: ["Share files in the relevant channel", "Name files clearly", "Point students to the media/file tab later"],
  },
];

const studentGuide = [
  "Open EdStream from your Canvas course navigation.",
  "Join the channels your instructor has created for the class.",
  "Ask course questions in the right channel so answers are easy to find.",
  "Submit requests from the request area when your course team enables it.",
  "Check channel files and media before asking classmates to resend materials.",
];

const Blog = () => {
  useEffect(() => {
    document.title = "Guides - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <BookOpen className="mr-2 h-5 w-5 text-white" />
            <span className="font-bold text-white">EdStream guides</span>
          </div>
          <h1 className="text-4xl font-black leading-tight text-white lg:text-6xl">
            Start with the
            <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
              everyday workflows
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            Short, practical guides for instructors and students. Start here before moving into deeper documentation.
          </p>
        </div>
      </section>

      <section className="-mt-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border-0 bg-white/90 shadow-xl backdrop-blur dark:bg-gray-800/90">
              <CardContent className="p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300">For instructors</h2>
                    <p className="text-gray-600 dark:text-gray-300">Setup, primer, and first-week launch checklist.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {instructorGuides.map((guide) => (
                    <div key={guide.title} className="rounded-2xl border border-blue-100 p-5 dark:border-gray-700">
                      <h3 className="mb-4 text-xl font-black text-gray-900 dark:text-white">{guide.title}</h3>
                      <ol className="space-y-3">
                        {guide.steps.map((step, index) => (
                          <li key={step} className="flex gap-3 text-gray-600 dark:text-gray-300">
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-900/50 dark:text-orange-300">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-orange-50 shadow-xl dark:from-gray-800 dark:to-gray-900">
              <CardContent className="p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300">For students</h2>
                    <p className="text-gray-600 dark:text-gray-300">A short primer for the first visit.</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {studentGuide.map((step) => (
                    <li key={step} className="flex gap-3 rounded-xl bg-white/80 p-4 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600 dark:bg-orange-900/40 dark:text-orange-300">
              <Settings className="mr-2 h-4 w-4" />
              Functions step-by-step
            </div>
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
              Keep each workflow small
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              These are the product walkthroughs that can later become slide decks, short demos, or full documentation pages.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {functionGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Card key={guide.title} className="border-0 bg-white shadow-lg dark:bg-gray-900">
                  <CardContent className="p-8">
                    <Icon className="mb-5 h-10 w-10 text-orange-500" />
                    <h3 className="mb-5 text-2xl font-black text-blue-600 dark:text-blue-300">{guide.title}</h3>
                    <ol className="space-y-3">
                      {guide.steps.map((step, index) => (
                        <li key={step} className="flex gap-3 text-gray-600 dark:text-gray-300">
                          <span className="font-black text-blue-600 dark:text-blue-300">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
            Have a course workflow to test?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Start with one course, one announcement channel, one Q&A channel, and one request type. Then expand only
            where the course needs it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-bold text-white hover:from-orange-600 hover:to-orange-700">
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                Request a pilot <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-blue-200 px-8 py-6 text-base font-bold text-blue-600 hover:bg-blue-50">
              <Link to="/features">Review features</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
