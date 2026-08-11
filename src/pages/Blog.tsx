import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { guideSections, type GuideRole } from "@/content/guides";
import EdStreamLogo from "@/components/EdStreamLogo";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

const Blog = () => {
  const [activeRole, setActiveRole] = useState<GuideRole>("instructor");

  useEffect(() => {
    document.title = "EdStream Guides";
  }, []);

  const visibleGuides = useMemo(
    () => guideSections.filter((guide) => guide.role === activeRole),
    [activeRole],
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <EdStreamLogo className="h-9 w-auto" />
          <div>
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">EdStream Guides</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Step-by-step guides for instructors and students
            </p>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 grid max-w-md grid-cols-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
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
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            {visibleGuides.map((guide, index) => (
              <Link key={guide.id} to={`/guides/${guide.id}`} className="group block no-underline">
                <div className="flex min-h-[88px] items-center gap-5 rounded-2xl border border-gray-100 bg-white px-5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:gap-8 sm:px-8">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white sm:h-11 sm:w-11">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-blue-600 transition-colors group-hover:text-orange-500 dark:text-blue-300 sm:text-xl">
                      {guide.title}
                    </h2>
                    <p className="mt-1 truncate text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                      {guide.description}
                    </p>
                  </div>
                  <div className="hidden flex-shrink-0 text-sm text-gray-400 dark:text-gray-500 sm:block">
                    {guide.steps.length} steps
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
