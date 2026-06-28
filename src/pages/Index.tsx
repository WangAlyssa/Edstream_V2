import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, Star, Smartphone } from "lucide-react";

const painPoints = [
  "Canvas inbox messages scattered across courses",
  "Separate discussion boards for each class",
  "Email threads for extension requests and accommodations",
  "Independent systems for office hours scheduling",
  "Disconnected platforms for student support",
  "Administrative burden for both instructors and students",
];

const beforeItems = [
  "Fragmented communication across multiple platforms and inboxes",
  "Manual, time-intensive extension and accommodation handling",
  "Limited collaboration — students struggle to connect outside class",
  "Hours lost each week managing communication logistics",
];

const withItems = [
  "Unified platform — one interface for all course communication",
  "Automated workflows for routine student requests",
  "Built-in tools for lasting academic relationships",
  "Streamlined processes that save hours every week",
];

const benefits = [
  {
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
    title: "Streamlined Communication",
    tagline: "Built for large-enrollment courses",
    description:
      "Consolidate high-volume course messaging into workflows your team can actually manage.",
    details: [
      "Keep pace with thousands of interactions without adding headcount",
      "Let automation handle repetitive requests and routing rules",
      "Give instructors a clear queue so every student gets a timely reply",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Enhanced Collaboration",
    tagline: "Community inside every course",
    description:
      "Turn enrollment lists into communities where peers help each other learn.",
    details: [
      "Create dedicated spaces for study groups and project teams",
      "Encourage mentorship between students in the same course",
      "Keep academic dialogue organized instead of scattered across tools",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Experiential Learning",
    tagline: "Relationships that outlast a single term",
    description:
      "Extend learning beyond the lecture hall with connections that continue after grades are posted.",
    details: [
      "Tie project work and field experiences back to course channels",
      "Support long-running collaborations across assignments and semesters",
      "Help students build networks that carry into future coursework",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-300 mb-6 leading-tight">
                Cultivating Campus Communities
              </h1>
              <p className="text-2xl lg:text-3xl text-orange-500 dark:text-orange-400 mb-6 font-medium">
                Connect. Communicate. Collaborate. <br />
                All within Canvas.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                EdStream is an integrated messaging and collaboration tool for Canvas LMS — one place for course conversations, student requests, and academic community building.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 text-white font-bold px-12 py-8 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 w-60 rounded-xl border-2 border-transparent dark:border-orange-400/30"
                  asChild
                >
                  <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                    Get EdStream
                  </a>
                </Button>
              </div>

              <StoreBadges />
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Students collaborating on campus"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500 dark:bg-orange-600 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain points — specific friction institutions face today */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-8">
              The Communication Challenge
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Educational institutions currently juggle multiple fragmented communication channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((challenge) => (
              <Card
                key={challenge}
                className="border-l-4 border-l-orange-500 bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl dark:border-l-orange-400 dark:bg-gray-700 hover:border-l-orange-600 dark:hover:border-l-orange-300"
              >
                <CardContent className="p-8">
                  <p className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-200">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Introducing EdStream — feature overview with hover details */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-8">
              Introducing EdStream
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              One Platform. Seamless Communication. Stronger Communities.
            </p>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Hover a card to explore what each pillar delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="group text-center border-2 border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
              >
                <CardContent className="p-10">
                  <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 p-4 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl dark:from-gray-600 dark:to-gray-700">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500 dark:text-orange-400">
                    {benefit.tagline}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-orange-500 dark:text-blue-300 dark:group-hover:text-orange-400">
                    {benefit.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{benefit.description}</p>

                  <ul className="mt-5 space-y-3 border-t border-gray-100 pt-5 text-left transition-all duration-300 dark:border-gray-700 max-md:opacity-100 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-56 md:group-hover:opacity-100">
                    {benefit.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
                        <span className="text-base text-gray-700 dark:text-gray-200">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Workflow — before / after contrast */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Transform Your Workflow
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              EdStream replaces scattered tools with one Canvas-native workflow — from inbox overload to organized course communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-orange-500 shadow-xl bg-white dark:border-l-orange-400 dark:bg-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400 mb-6">Before EdStream</h3>
                <ul className="space-y-4">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500 dark:bg-orange-400" />
                      <span className="text-lg text-gray-700 dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 shadow-xl bg-white dark:border-l-green-400 dark:bg-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">With EdStream</h3>
                <ul className="space-y-4">
                  {withItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
                      <span className="text-lg text-gray-700 dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Trusted by Leading Educational Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 border-white bg-white transition-shadow duration-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg dark:from-blue-500 dark:to-blue-600">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">UF IT Partnership</h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Developed in close collaboration with University of Florida IT — purpose-built for higher-ed environments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-white bg-white transition-shadow duration-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg dark:from-orange-500 dark:to-orange-600">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">5,000+ Students</h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Powering live communication across large-enrollment courses in our fall pilot cohort.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-white bg-white transition-shadow duration-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg dark:from-blue-500 dark:to-blue-600">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">Institution-Ready</h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Cleared for university-wide rollout with the security and scale large campuses require.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg dark:from-orange-500 dark:to-orange-600">
              <Smartphone className="h-10 w-10" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Stay Connected On-the-Go
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Reply to messages, review requests, and follow course channels from iOS and Android — the same experience as desktop, in your pocket.
            </p>
          </div>

          <StoreBadges className="justify-center" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Unify Your Course Communication?
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-10 leading-relaxed">
            See how EdStream helps educators and students connect inside Canvas — without adding another platform to manage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="w-48 border-2 border-transparent bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl dark:border-orange-400/30 dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-400 dark:hover:to-orange-500"
              asChild
            >
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                Get EdStream
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-48 border-2 border-white bg-transparent px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-600 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
              asChild
            >
              <a href="https://mintlify.com" target="_blank" rel="noopener noreferrer">
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
