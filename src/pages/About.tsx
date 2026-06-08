import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Lightbulb, MessageSquare, Target, Users } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Student-centered",
    description: "Students should know where to ask questions, where to find files, and how to follow up.",
  },
  {
    icon: Target,
    title: "Course-first",
    description: "EdStream is designed around a Canvas course, not a generic social workspace.",
  },
  {
    icon: Lightbulb,
    title: "Simple by default",
    description: "The product should start with clear workflows before adding advanced automation or analytics.",
  },
  {
    icon: Heart,
    title: "Community focused",
    description: "Better communication should help instructors and students feel less scattered during the semester.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <BookOpen className="mr-2 h-5 w-5 text-white" />
            <span className="font-bold text-white">About EdStream</span>
          </div>
          <h1 className="text-4xl font-black leading-tight text-white lg:text-6xl">
            Built for the messy middle
            <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
              of course communication
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            EdStream is an informative product concept and pilot-ready communication layer for courses that need a more
            immediate alternative to scattered email threads and static discussion boards.
          </p>
        </div>
      </section>

      <section className="-mt-10 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white/90 shadow-2xl backdrop-blur dark:bg-gray-800/90">
            <CardContent className="p-8 text-center lg:p-12">
              <MessageSquare className="mx-auto mb-6 h-12 w-12 text-orange-500" />
              <h2 className="mb-6 text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
                Our focus
              </h2>
              <p className="mx-auto max-w-4xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                EdStream focuses on a narrow, practical problem: course communication often happens across too many
                places. The goal is to bring channels, requests, and shared materials into a simple Canvas-connected
                experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-black text-blue-600 dark:text-blue-300">Why this exists</h2>
              <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
                <p>
                  Instructors often manage student questions, files, project coordination, and routine requests across
                  email, Canvas inbox, discussion boards, and informal student chats.
                </p>
                <p>
                  EdStream explores a more organized approach: course-aware channels for conversations, a request queue
                  for repeated workflows, and a simple place to revisit materials that were shared in context.
                </p>
                <p>
                  The public website now stays intentionally conservative. It explains what the product does without
                  claiming unverified certifications, adoption numbers, or automated LMS actions.
                </p>
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-orange-50 shadow-xl dark:from-gray-800 dark:to-gray-700">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-black text-blue-600 dark:text-blue-300">What we are keeping simple</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  {[
                    "Canvas-first positioning",
                    "Instructor and student guide paths",
                    "Four core features instead of a long enterprise checklist",
                    "Blue and orange visual identity with Lato typography",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">Guiding principles</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              These principles keep the site and product narrative grounded.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-0 bg-white shadow-lg dark:bg-gray-800">
                  <CardContent className="p-8">
                    <div className="flex gap-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white ${index % 2 === 0 ? "bg-orange-500" : "bg-blue-600"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-black text-blue-600 dark:text-blue-300">{value.title}</h3>
                        <p className="leading-7 text-gray-600 dark:text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
