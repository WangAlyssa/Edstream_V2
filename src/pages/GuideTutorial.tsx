import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { findGuideById, guideSections, type GuideHighlight } from "@/content/guides";
import { ArrowLeft, ArrowRight, CheckCircle, Plus } from "lucide-react";

const FakeAppScreenshot = ({ highlights }: { highlights: GuideHighlight[] }) => (
  <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl">
    <div className="flex h-11 items-center bg-blue-700 px-4 text-white">
      <div className="mr-4 h-5 w-5 rounded border border-white/70" />
      <div className="mx-auto h-7 w-full max-w-xs rounded-full bg-white/15 px-4 pt-1 text-xs text-blue-100">
        Search course
      </div>
    </div>
    <div className="grid h-[330px] grid-cols-[150px_1fr]">
      <aside className="relative bg-blue-800 p-4 text-white">
        <div className="mb-4 flex items-center justify-between text-xs font-bold">
          <span># Channels</span>
          <Plus className="h-4 w-4" />
        </div>
        {["# General", "# Peer Mentors", "# Project Q&A"].map((item, index) => (
          <div key={item} className={`mb-2 rounded px-3 py-2 text-xs ${index === 0 ? "bg-white/15" : "text-blue-100"}`}>
            {item}
          </div>
        ))}
        <div className="mt-6 text-xs font-bold">Direct messages</div>
        <div className="mt-2 rounded bg-white/15 px-3 py-2 text-xs">Prof. Rivera</div>
        <div className="absolute bottom-0 left-0 grid w-[150px] grid-cols-3 gap-1 bg-blue-950 p-2 text-[9px] text-blue-100">
          <span className="rounded bg-white/10 px-1 py-2 text-center">Courses</span>
          <span className="rounded px-1 py-2 text-center">Communities</span>
          <span className="rounded px-1 py-2 text-center">DMs</span>
        </div>
      </aside>
      <main className="p-5">
        <div className="mb-5 border-b pb-3">
          <h3 className="text-xl font-black text-blue-700"># General</h3>
          <p className="text-xs text-gray-400">Demo Course • 7 members</p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-blue-50 p-4 text-sm text-gray-700">
            <b>Prof. Rivera:</b> Welcome! Use this channel for general course questions.
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-sm text-gray-700">
            <b>Student Lee:</b> Where should I submit an extension request?
          </div>
          <div className="mt-8 rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-400">
            Type your message here...
          </div>
        </div>
      </main>
    </div>
    {highlights.map((highlight) => (
      <div key={highlight.label} className={`demo-highlight-pulse absolute rounded-full border-4 border-orange-500 bg-orange-400/10 ${highlight.className}`}>
        <span className="absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 rounded-lg bg-orange-500 px-3 py-2 text-center text-xs font-bold text-white shadow-lg">
          {highlight.label}
        </span>
      </div>
    ))}
  </div>
);

const GuideTutorial = () => {
  const { guideId } = useParams();
  const guide = findGuideById(guideId);

  useEffect(() => {
    document.title = guide ? `${guide.title} - EdStream Guides` : "Guide Not Found - EdStream";
  }, [guide]);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const sameRoleGuides = guideSections.filter((item) => item.role === guide.role);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="bg-gradient-to-br from-blue-700 to-blue-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="mb-8 border-white/40 bg-transparent text-white hover:bg-white hover:text-blue-700">
            <Link to="/guides">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Guides
            </Link>
          </Button>
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
              {guide.role === "instructor" ? "For Instructor" : "For Student"}
            </span>
            <h1 className="text-4xl font-black lg:text-5xl">{guide.title}</h1>
            <p className="mt-4 text-base leading-7 text-blue-100">{guide.overview}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.25fr] lg:px-8">
          <div className="space-y-6">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="mb-5 text-2xl font-black text-blue-700">Step-by-step tutorial</h2>
                <ol className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-gray-700">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <span className="leading-7">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-sm font-black uppercase tracking-wide text-blue-700">Click target</h3>
                  <p className="leading-7 text-gray-700">{guide.clickTarget}</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-sm font-black uppercase tracking-wide text-orange-600">Check result</h3>
                  <p className="leading-7 text-gray-700">{guide.checkResult}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <FakeAppScreenshot highlights={guide.highlights} />
            <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-5 text-sm leading-7 text-gray-600 shadow-sm">
              This mock screenshot uses fake course data and fake user names. The orange circles show the parts of the
              interface referenced by the tutorial steps.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-blue-700">More {guide.role === "instructor" ? "instructor" : "student"} guides</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sameRoleGuides
              .filter((item) => item.id !== guide.id)
              .map((item) => (
                <Link key={item.id} to={`/guides/${item.id}`} className="group rounded-2xl border border-blue-100 bg-blue-50/40 p-5 transition hover:bg-blue-50">
                  <h3 className="font-black text-blue-700">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-black text-orange-600">
                    Open guide <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuideTutorial;
