import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { guideSections, type GuideRole } from "@/content/guides";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

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
          <h1 className="text-4xl font-black lg:text-5xl">Step-by-step visual guides</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100">
            Choose a tutorial below. Each guide opens as its own page with step-by-step screenshots and short
            instructions.
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

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {visibleGuides.map((guide, index) => (
              <Link key={guide.id} to={`/guides/${guide.id}`} className="group block">
                <div
                  className="flex aspect-[16/3] items-center gap-5 rounded-2xl border border-gray-100 bg-white px-5 shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-2xl sm:gap-8 sm:px-8"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white sm:h-11 sm:w-11">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-black text-blue-700 sm:text-xl">{guide.title}</h2>
                    <p className="mt-1 truncate text-sm text-gray-600 sm:text-base">{guide.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-blue-700 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
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
