import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideMockup from "@/components/GuideMockup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { guideSections, type GuideRole } from "@/content/guides";
import { ArrowRight, BookOpen, Calendar, GraduationCap, User, Users } from "lucide-react";
import { Link } from "react-router-dom";

const roleLabel: Record<GuideRole, string> = {
  instructor: "For Instructor",
  student: "For Student",
};

const readTime = (steps: number) => `${Math.max(steps * 2, 5)} min read`;

const Blog = () => {
  const [activeRole, setActiveRole] = useState<GuideRole>("instructor");

  useEffect(() => {
    document.title = "EdStream Guides - EdStream";
  }, []);

  const featuredGuide = guideSections[0];

  const visibleGuides = useMemo(
    () => guideSections.filter((guide) => guide.role === activeRole),
    [activeRole],
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <BookOpen className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">EdStream Guides</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Educational Technology
              <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                Insights & Guides
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Step-by-step visual guides for instructors and students using EdStream inside Canvas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue mb-4">Featured Guide</h2>
          </div>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-orange text-white px-3 py-1 text-sm font-semibold rounded-full">
                      {roleLabel[featuredGuide.role]}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredGuide.steps.length} steps
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue mb-4 hover:text-orange transition-colors">
                    {featuredGuide.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredGuide.overview}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        EdStream Team
                      </div>
                      <span>{readTime(featuredGuide.steps.length)}</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-orange text-orange hover:bg-orange hover:text-white"
                    >
                      <Link to={`/guides/${featuredGuide.id}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <GuideMockup
                    scene={featuredGuide.steps[0].scene}
                    highlight={featuredGuide.steps[0].highlight}
                    highlightLabel={featuredGuide.steps[0].highlightLabel}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue mb-4">Step-by-Step Guides</h2>
            <p className="text-gray-600">
              Choose your role to see the guides that apply to you. Each opens as its own page with screenshots and short instructions.
            </p>
          </div>

          <div className="mx-auto mb-10 grid max-w-md grid-cols-2 rounded-2xl bg-white p-2 shadow-lg border border-gray-100">
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
                      : "text-gray-600 hover:bg-gray-50"
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
              <Link key={guide.id} to={`/guides/${guide.id}`} className="group block">
                <div className="flex aspect-[16/3] min-h-[88px] items-center gap-5 rounded-2xl border border-gray-100 bg-white px-5 shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-2xl sm:gap-8 sm:px-8">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-black text-white sm:h-11 sm:w-11">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-blue sm:text-xl group-hover:text-orange transition-colors">
                      {guide.title}
                    </h3>
                    <p className="mt-1 truncate text-sm text-gray-600 sm:text-base">{guide.description}</p>
                  </div>
                  <div className="hidden flex-shrink-0 text-sm text-gray-400 sm:block">
                    {guide.steps.length} steps
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-blue transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange" />
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
