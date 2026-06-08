import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, LockKeyhole, MessageSquare, Smartphone, Users } from "lucide-react";

const faqSections = [
  {
    title: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "What is EdStream?",
        answer:
          "EdStream is a Canvas-focused communication layer for courses. It brings Slack-like channels, shared materials, and student requests into a space designed around instructors, TAs, and students.",
      },
      {
        question: "Is EdStream meant to replace Canvas?",
        answer:
          "No. EdStream is meant to sit alongside Canvas as a communication tool. Canvas remains the place for assignments, grades, and official course structure.",
      },
      {
        question: "Do students need a separate account?",
        answer:
          "The product is designed around Canvas course access, so students should not need to manage a separate social workspace for each class.",
      },
    ],
  },
  {
    title: "For instructors",
    icon: MessageSquare,
    questions: [
      {
        question: "How do instructors add EdStream to a course?",
        answer:
          "The intended workflow is to add EdStream as a Canvas course tool, confirm the course roster and roles, then create the channels that match the course structure.",
      },
      {
        question: "Can I control who posts in a channel?",
        answer:
          "Yes. EdStream is designed for role-aware channels, such as announcement spaces where only instructors or TAs post and group spaces where students can collaborate.",
      },
      {
        question: "How do student requests work?",
        answer:
          "Students can submit common course requests from a structured form. Instructors review the request, choose a response, and keep the status visible instead of relying on scattered email threads.",
      },
    ],
  },
  {
    title: "For students",
    icon: Users,
    questions: [
      {
        question: "What can students do in EdStream?",
        answer:
          "Students can ask questions in course channels, coordinate with classmates, review shared files, and submit requests such as extensions or regrade questions when enabled by the course team.",
      },
      {
        question: "Does EdStream have mobile apps?",
        answer:
          "Yes. EdStream has iOS and Android app listings so students can stay connected from mobile devices as well as the web experience.",
      },
      {
        question: "Can students find files after a chat moves on?",
        answer:
          "The media and file areas are designed to collect shared materials from a channel so students can revisit handouts, photos, and other course resources.",
      },
    ],
  },
  {
    title: "Security and rollout",
    icon: LockKeyhole,
    questions: [
      {
        question: "How should institutions think about privacy?",
        answer:
          "EdStream should be reviewed through the same institutional privacy and security process used for other Canvas tools. The website avoids making certification claims until they are formally verified.",
      },
      {
        question: "How is EdStream priced?",
        answer:
          "Pricing and pilot details should be discussed directly with the EdStream team because needs vary by institution, course size, and rollout scope.",
      },
      {
        question: "Where should I start?",
        answer:
          "Start with the guides page. It gives instructors a simple setup path and gives students a short primer on the core workflows.",
      },
    ],
  },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <HelpCircle className="mr-2 h-5 w-5 text-white" />
            <span className="font-bold text-white">Frequently asked questions</span>
          </div>
          <h1 className="text-4xl font-black leading-tight text-white lg:text-6xl">
            Clear answers for
            <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
              a simple pilot
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            These answers keep the public website accurate and avoid promises that should be confirmed during an
            institutional review.
          </p>
        </div>
      </section>

      <section className="-mt-10 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="border-0 bg-white/90 shadow-xl backdrop-blur dark:bg-gray-800/90">
                  <CardContent className="p-6 lg:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${sectionIndex % 2 === 0 ? "bg-orange-500" : "bg-blue-600"}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white">{section.title}</h2>
                        <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3">
                      {section.questions.map((faq, questionIndex) => (
                        <AccordionItem
                          key={faq.question}
                          value={`${sectionIndex}-${questionIndex}`}
                          className="rounded-xl border border-gray-200 bg-white/70 px-5 dark:border-gray-700 dark:bg-gray-900/40"
                        >
                          <AccordionTrigger className="text-left text-base font-bold text-gray-800 hover:text-blue-600 hover:no-underline dark:text-gray-100 dark:hover:text-blue-300">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="leading-7 text-gray-600 dark:text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Smartphone className="mx-auto mb-5 h-10 w-10 text-orange-500" />
          <h2 className="text-3xl font-black text-blue-600 dark:text-blue-300 lg:text-4xl">
            Want the practical walkthrough?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The guides page breaks the product into instructor and student workflows.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-bold text-white hover:from-orange-600 hover:to-orange-700">
              <Link to="/guides">Open guides</Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-200 px-8 py-6 text-base font-bold text-blue-600 hover:bg-blue-50">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
