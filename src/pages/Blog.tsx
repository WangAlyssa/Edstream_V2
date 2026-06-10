import { useEffect, useMemo } from "react";
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
  useEffect(() => {
    document.title = "EdStream Guides - EdStream";
  }, []);

  const featuredGuide = guideSections[0];
  const recentGuides = guideSections.slice(1);

  const categories = useMemo(
    () => [
      {
        name: "Instructor Guides",
        description: "Step-by-step walkthroughs for setting up channels, files, requests, and Canvas navigation.",
        icon: <GraduationCap className="h-6 w-6" />,
        count: guideSections.filter((guide) => guide.role === "instructor").length,
      },
      {
        name: "Student Guides",
        description: "Quick-start resources for asking questions, finding files, and using course requests.",
        icon: <Users className="h-6 w-6" />,
        count: guideSections.filter((guide) => guide.role === "student").length,
      },
      {
        name: "Canvas Setup",
        description: "Add EdStream to course navigation and confirm visibility for each role.",
        icon: <BookOpen className="h-6 w-6" />,
        count: 1,
      },
    ],
    [],
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

          <Card className="mb-12 hover:shadow-lg transition-shadow border-l-4 border-l-orange">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue mb-4">Recent Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentGuides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center text-white">
                      {guide.role === "instructor" ? (
                        <GraduationCap className="h-5 w-5" />
                      ) : (
                        <Users className="h-5 w-5" />
                      )}
                    </div>
                    <span className="bg-blue text-white px-3 py-1 text-sm font-semibold rounded-full">
                      {roleLabel[guide.role]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-blue mb-3 hover:text-orange transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{guide.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {guide.steps.length} steps
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        EdStream Team
                      </div>
                    </div>
                    <span>{readTime(guide.steps.length)}</span>
                  </div>

                  <Button asChild variant="ghost" className="text-blue hover:text-orange p-0">
                    <Link to={`/guides/${guide.id}`}>
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue mb-6">Browse by Category</h2>
            <p className="text-xl text-gray-600">Explore guides tailored to your role and setup needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue mb-3">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <p className="text-sm font-semibold text-orange">{category.count} guides</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue mb-4">All Step-by-Step Guides</h3>
                <p className="text-gray-600 mb-6">
                  Open any guide below for screenshot-based walkthroughs covering instructor setup, student onboarding, and Canvas integration.
                </p>
                <div className="space-y-3">
                  {guideSections.map((guide) => (
                    <Link
                      key={guide.id}
                      to={`/guides/${guide.id}`}
                      className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-blue hover:border-orange hover:text-orange transition-colors"
                    >
                      <span className="font-semibold">{guide.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue mb-4">Request Topics</h3>
                <p className="text-gray-600 mb-6">
                  Have a specific topic you would like covered? Suggest guide topics that would be valuable for the EdStream community.
                </p>
                <Button className="border-orange text-orange hover:bg-orange hover:text-white" variant="outline" asChild>
                  <Link to="/contact">Suggest Topics</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
