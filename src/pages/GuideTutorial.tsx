import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import GuideMockup from "@/components/GuideMockup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { findGuideById, guideSections } from "@/content/guides";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="outline"
            className="mb-4 border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <Link to="/guides" className="no-underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Guides
            </Link>
          </Button>
          <h1 className="text-3xl font-black text-blue-700 dark:text-blue-300 lg:text-4xl">{guide.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">{guide.overview}</p>
        </div>
      </div>

      <section className="py-10">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {guide.steps.map((step, index) => (
            <Card key={step.instruction} className="border-0 shadow-xl dark:bg-gray-800">
              <CardContent className="p-5 lg:p-6">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:items-start">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-base font-black text-white">
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-black text-blue-700 dark:text-blue-300">Step {index + 1}</h2>
                    </div>
                    <p className="text-base font-bold leading-7 text-gray-900 dark:text-gray-100">{step.instruction}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{step.detail}</p>
                  </div>
                  <GuideMockup scene={step.scene} highlight={step.highlight} highlightLabel={step.highlightLabel} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-12 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-black text-blue-700 dark:text-blue-300">
            More {guide.role === "instructor" ? "instructor" : "student"} guides
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sameRoleGuides
              .filter((item) => item.id !== guide.id)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/guides/${item.id}`}
                  className="group rounded-2xl border border-blue-100 bg-blue-50/40 p-5 no-underline transition hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-700"
                >
                  <h3 className="font-black text-blue-700 dark:text-blue-300">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-black text-orange-600">
                    Open guide <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideTutorial;
