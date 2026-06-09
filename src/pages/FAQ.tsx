import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Mail, Search } from "lucide-react";

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
    category: "Accounts",
    question: "Do students need a separate account?",
    answer:
      "The product is designed around Canvas course access, so students should not need to manage a separate social workspace for each class.",
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
  {
    category: "Privacy",
    question: "How should institutions think about privacy?",
    answer:
      "EdStream should be reviewed through the same institutional privacy and security process used for other Canvas tools. Public marketing copy should avoid certification claims until they are formally verified.",
  },
];

const FAQ = () => {
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
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help Center
          </div>
          <h1 className="text-5xl font-black text-blue-700 lg:text-6xl">Search answers quickly</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Search by topic, role, or workflow. The answers stay grounded in the current Canvas-first product story.
          </p>
        </div>
      </section>

      <section className="-mt-8 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-6 lg:p-8">
              <div className="relative mx-auto mb-8 max-w-2xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search FAQ: channels, requests, files, students..."
                  className="w-full rounded-xl border border-blue-100 bg-blue-50/40 py-4 pl-12 pr-4 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mx-auto max-w-3xl space-y-5">
                {filteredFaq.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                    <span className="mb-4 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-orange-600">
                      {item.category}
                    </span>
                    <h2 className="mb-3 text-xl font-black text-blue-700">{item.question}</h2>
                    <p className="leading-7 text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>

              {filteredFaq.length === 0 && (
                <div className="rounded-2xl bg-blue-50 p-8 text-center text-gray-600">
                  No FAQ matches that keyword yet. Try another term or contact us.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Mail className="mx-auto mb-5 h-9 w-9 text-orange-300" />
          <h2 className="text-3xl font-black">Troubleshooting</h2>
          <p className="mt-4 leading-8 text-blue-100">
            If you cannot find an answer, contact the EdStream team with your course name, role, Canvas context, and the
            workflow you are trying to complete.
          </p>
          <a
            href="mailto:info@edstream.io"
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-black text-white shadow-lg transition hover:from-orange-600 hover:to-orange-700"
          >
            info@edstream.io
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
