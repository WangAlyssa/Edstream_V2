import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h2 className="mb-4 text-3xl font-black text-blue-700">Let's talk about EdStream.</h2>
                <p className="mb-8 text-lg leading-8 text-gray-600">
                  Ready to transform communication in your department? Whether you are ready to pilot or just have a few
                  questions, we are here to help.
                </p>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                    <Mail className="mb-3 h-6 w-6 text-blue-700" />
                    <h3 className="font-black text-blue-700">General inquiries</h3>
                    <a href="mailto:info@edstream.io" className="mt-1 inline-block font-bold text-orange-500 hover:text-orange-600">
                      info@edstream.io
                    </a>
                  </div>
                  <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
                    <h3 className="font-black text-blue-700">Helpful details to include</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Course size, Canvas setup, user roles, and the communication workflows you want to test.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                <h2 className="mb-2 text-3xl font-black text-blue-700">Get EdStream</h2>
                <p className="mb-8 leading-7 text-gray-600">
                  Fill out the form below and send it to the EdStream team.
                </p>
                <form action="mailto:info@edstream.io" method="post" encType="text/plain" className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">First name</span>
                      <input name="First name" placeholder="Jane" className="w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">Last name</span>
                      <input name="Last name" placeholder="Doe" className="w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">Institutional email</span>
                    <input name="Institutional email" type="email" placeholder="jane@university.edu" className="w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">Institution / school</span>
                    <input name="Institution" placeholder="University of Florida" className="w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">Role</span>
                    <select name="Role" className="w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                      <option>Instructor / Professor</option>
                      <option>TA / Course staff</option>
                      <option>IT / Administrator</option>
                      <option>Student</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">How can we help?</span>
                    <textarea name="Message" placeholder="Tell us about your course size and needs..." rows={5} className="w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" />
                  </label>
                  <Button type="submit" className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-6 font-bold text-white hover:from-orange-600 hover:to-orange-700">
                    Send to EdStream <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
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
