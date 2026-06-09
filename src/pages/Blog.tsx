import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { guideSections, type GuideRole } from "@/content/guides";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

const Blog = () => {
  const [activeRole, setActiveRole] = useState<GuideRole>("instructor");

  useEffect(() => {
    document.title = "Guides - EdStream";
  }, []);

  const visibleGuides = useMemo(
    () => guideSections.filter((guide) => guide.role === activeRole),
    [activeRole],
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="bg-gradient-to-br from-blue-700 to-blue-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
            <BookOpen className="mr-2 h-4 w-4" />
            Guides
          </div>
          <h1 className="text-4xl font-black lg:text-5xl">Step-by-step visual guides</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100">
            Choose a tutorial below. Each guide opens as its own page with screenshots, steps, click targets, and
            expected results.
          </p>

          <div className="mx-auto mt-7 grid max-w-md grid-cols-2 rounded-2xl bg-white/10 p-2 shadow-lg backdrop-blur">
            {[
              { value: "instructor" as const, label: "For Instructor", icon: GraduationCap },
              { value: "student" as const, label: "For Student", icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeRole === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveRole(tab.value)}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition-all duration-300 ${
                    active ? "bg-white text-blue-700 shadow-md" : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {visibleGuides.map((guide, index) => (
              <Link
                key={guide.id}
                to={`/guides/${guide.id}`}
                className="group block"
              >
                <Card className="h-full border-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white">
                        {index + 1}
                      </span>
                      <ArrowRight className="h-5 w-5 text-blue-700 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <h2 className="mb-3 text-2xl font-black text-blue-700">{guide.title}</h2>
                    <p className="mb-5 leading-7 text-gray-600">{guide.description}</p>
                    <div className="rounded-2xl bg-blue-50 p-4 text-sm font-bold text-blue-700">
                      Open full tutorial page
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
