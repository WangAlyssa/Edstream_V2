import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </div>
          <h1 className="text-5xl font-black text-blue-700 lg:text-6xl">Talk with the EdStream team</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Ask about a pilot, request a walkthrough, or share what your course communication workflow needs.
          </p>
        </div>
      </section>

      <section className="-mt-8 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h2 className="mb-4 text-3xl font-black text-blue-700">Start a pilot conversation</h2>
                <p className="mb-8 text-lg leading-8 text-gray-600">
                  The fastest next step is to share your course context and what you want EdStream to support. We can
                  discuss channels, requests, files, guides, and rollout scope.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button asChild className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-6 font-bold text-white hover:from-orange-600 hover:to-orange-700">
                    <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                      Get EdStream <Send className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl border-blue-200 px-6 py-6 font-bold text-blue-700 hover:bg-blue-50">
                    <a href="mailto:info@edstream.io?subject=EdStream Demo Request">Schedule Demo</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-orange-200">
                  <Mail className="h-8 w-8" />
                </div>
                <h2 className="mb-5 text-3xl font-black">Contact information</h2>
                <a
                  href="mailto:info@edstream.io"
                  className="mb-6 inline-flex items-center text-2xl font-black text-white transition hover:text-orange-200"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  info@edstream.io
                </a>
                <p className="mb-8 leading-7 text-blue-100">
                  For general questions, technical questions, pilot planning, and partnership conversations.
                </p>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <Clock className="mb-3 h-6 w-6 text-orange-200" />
                    <h3 className="font-black">General inquiries</h3>
                    <p className="mt-1 text-sm text-blue-100">Response timing depends on pilot scope and team availability.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <MessageSquare className="mb-3 h-6 w-6 text-orange-200" />
                    <h3 className="font-black">What to include</h3>
                    <p className="mt-1 text-sm text-blue-100">Course type, expected users, Canvas setup, and the workflows you want to test.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
