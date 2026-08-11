import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreBadges from "@/components/StoreBadges";
import FeatureDemo, { features } from "@/components/FeatureDemo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Users,
  CheckCircle,
  Star,
  Smartphone,
  MessageSquare,
  Settings,
  Zap,
  BarChart3,
  Shield,
  Target,
  Lightbulb,
  Heart,
  HelpCircle,
  ChevronDown,
  Mail,
  Clock,
  Phone,
} from "lucide-react";

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

const implementationPhases = [
  {
    phase: "Phase 1: Setup & Configuration",
    description:
      "IT administrator configuration (1-2 hours), Canvas integration activation, initial instructor training and onboarding",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    phase: "Phase 2: Course Integration",
    description:
      "Individual course setup and customization, student notification and introduction, communication workflow establishment",
    icon: <Users className="h-5 w-5" />,
  },
  {
    phase: "Phase 3: Community Building",
    description:
      "Group and collaboration feature activation, advanced feature training for power users, analytics and reporting setup",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    phase: "Phase 4: Optimization",
    description:
      "Usage analytics review, workflow optimization based on patterns, advanced feature rollout and training",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const aboutValues = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Student-Centered Design",
    description: "Every feature is designed with student success and engagement as the primary focus.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Educational Excellence",
    description: "We believe technology should enhance learning, not complicate it.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation in Education",
    description: "Pushing the boundaries of what's possible in educational technology.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Community Building",
    description: "Fostering meaningful connections that extend beyond the classroom.",
  },
];

const faqSections = [
  {
    title: "Getting Started",
    icon: <HelpCircle className="h-6 w-6" />,
    questions: [
      {
        question: "What is EdStream?",
        answer:
          "EdStream is an integrated messaging and collaboration tool designed specifically for educational institutions using Canvas LMS. It centralizes all course-related communications, streamlines administrative tasks like extension requests and accommodations management, and provides tools for building stronger academic communities.",
      },
      {
        question: "How does EdStream integrate with Canvas?",
        answer:
          "EdStream uses the Learning Tools Interoperability (LTI) protocol to integrate seamlessly with Canvas. This means it appears as a native Canvas tool, requires no separate login, and maintains all Canvas security and privacy standards. Students and instructors access EdStream directly through their Canvas course navigation.",
      },
      {
        question: "Do I need separate accounts for EdStream?",
        answer:
          "No. EdStream uses your existing Canvas authentication, so there's no need to create separate accounts or remember additional passwords. If you can access Canvas, you can access EdStream.",
      },
      {
        question: "Is EdStream available on mobile devices?",
        answer:
          "Yes! EdStream offers native iOS and Android applications with full functionality. You can send messages, manage communications, and access all features from your mobile device with push notifications for important updates.",
      },
    ],
  },
  {
    title: "Implementation & Setup",
    icon: <MessageSquare className="h-6 w-6" />,
    questions: [
      {
        question: "How long does it take to set up EdStream?",
        answer:
          "Initial setup typically takes 1-2 hours for IT administrators to configure the Canvas integration. Individual course setup takes about 15-30 minutes per course, depending on customization needs.",
      },
      {
        question: "What technical requirements does EdStream have?",
        answer:
          "EdStream requires Canvas LMS with LTI integration capabilities. No additional software installation is needed on user devices, as EdStream works through web browsers and mobile apps. It's compatible with all modern browsers and devices.",
      },
      {
        question: "Can EdStream be used with large enrollment courses?",
        answer:
          "Absolutely! EdStream is specifically designed to handle large enrollment courses efficiently. Our pilot program currently supports over 5,000 students, and the platform can scale to accommodate courses of any size.",
      },
      {
        question: "How does EdStream handle student privacy and data security?",
        answer:
          "EdStream is fully compliant with FERPA and institutional privacy requirements. All communications are encrypted, access is role-based, and audit trails are maintained. Student data remains within institutional control and follows all Canvas security protocols.",
      },
    ],
  },
  {
    title: "Features & Functionality",
    icon: <Smartphone className="h-6 w-6" />,
    questions: [
      {
        question: "What types of communications can EdStream handle?",
        answer:
          "EdStream manages all course-related communications including general student questions and support requests, extension and accommodation requests, group project coordination, office hours scheduling, peer-to-peer academic discussions, and administrative announcements.",
      },
      {
        question: "How does the automated extension request system work?",
        answer:
          "When students submit extension requests through EdStream, the system can automatically route them based on predefined criteria, suggest responses based on institutional policies, and track approval/denial decisions. Instructors maintain full control over all decisions while reducing administrative overhead.",
      },
      {
        question: "Can students use EdStream to communicate with each other?",
        answer:
          "Yes! EdStream includes community building features that allow students to form study groups, collaborate on projects, and build peer networks. All peer communication happens within the secure, monitored environment of the course.",
      },
      {
        question: "What analytics and reporting does EdStream provide?",
        answer:
          "EdStream offers insights into communication patterns, response times, student engagement levels, and community participation. These analytics help instructors understand course communication health and identify students who might need additional support.",
      },
    ],
  },
  {
    title: "Support & Training",
    icon: <Shield className="h-6 w-6" />,
    questions: [
      {
        question: "What kind of training is provided?",
        answer:
          "EdStream provides comprehensive training resources including video tutorial libraries for instructors and students, live training sessions and webinars, quick-start guides and documentation, 24/7 technical support, and best practices sharing from other institutions.",
      },
      {
        question: "How do students learn to use EdStream?",
        answer:
          "Students receive in-app guidance, quick-start tutorials, and access to peer support communities. The interface is designed to be intuitive, and most students become comfortable with basic features within minutes of first use.",
      },
      {
        question: "What support is available during implementation?",
        answer:
          "Our team provides full implementation support including planning assistance, technical integration help, user training, and ongoing optimization based on usage patterns and feedback.",
      },
    ],
  },
];

const sectionClass = "scroll-mt-24";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "EdStream - Cultivating Campus Communities";
  }, []);

  useEffect(() => {
    const hash = (location.hash || window.location.hash).replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* #home — Hero */}
      <section
        id="home"
        className={`${sectionClass} relative bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 lg:py-28`}
      >
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

      {/* #challenge */}
      <section id="challenge" className={`${sectionClass} py-24 bg-gray-50 dark:bg-gray-800`}>
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

      {/* #intro */}
      <section id="intro" className={`${sectionClass} py-24 bg-white dark:bg-gray-900`}>
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

      {/* #workflow */}
      <section id="workflow" className={`${sectionClass} py-24 bg-gray-50 dark:bg-gray-800`}>
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

      {/* #features — Core Workflows + demos */}
      <section id="features" className={`${sectionClass} py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              Core Workflows
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Five EdStream workflows with interactive demos — each using sample course data while matching the real app layout.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={feature.id} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-300">{feature.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                        <span className="text-lg">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <FeatureDemo id={feature.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ background: "linear-gradient(135deg, #0021A5 0%, #003DD6 100%)" }}
                >
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">Security & Privacy</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                  <li>• Full compliance with FERPA and institutional privacy requirements</li>
                  <li>• End-to-end encryption for sensitive communications</li>
                  <li>• Role-based access controls</li>
                  <li>• Audit trails for all communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ background: "linear-gradient(135deg, #FA4616 0%, #FF6B3D 100%)" }}
                >
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">Scalability</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                  <li>• Supports courses from 10 to 10,000+ students</li>
                  <li>• Cloud-based infrastructure with 99.9% uptime</li>
                  <li>• Real-time messaging with minimal latency</li>
                  <li>• Automatic scaling during peak usage periods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ background: "linear-gradient(135deg, #0021A5 0%, #003DD6 100%)" }}
                >
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">Integration Capabilities</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
                  <li>• Native Canvas LTI integration</li>
                  <li>• API access for custom institutional tools</li>
                  <li>• Single Sign-On (SSO) compatibility</li>
                  <li>• Export capabilities for institutional records</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-8">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A structured approach to getting EdStream up and running at your institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationPhases.map((phase, index) => (
              <Card
                key={phase.phase}
                className="relative hover:shadow-xl transition-shadow duration-300 shadow-xl border-0 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 rounded-full flex items-center justify-center text-white font-bold mb-6 shadow-lg">
                    {React.cloneElement(phase.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-300 mb-4">{phase.phase}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* #about */}
      <section id="about" className={`${sectionClass} py-20 bg-white dark:bg-gray-900`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm mb-20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                To streamline educational communication and foster stronger academic communities through innovative technology solutions that integrate seamlessly with existing learning management systems.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  EdStream was born from a real need identified within the University of Florida's academic environment. As course enrollments grew and communication became increasingly complex, instructors found themselves overwhelmed with managing student communications across multiple platforms.
                </p>
                <p>
                  What started as a research project to improve course communication efficiency has evolved into a comprehensive platform that serves thousands of students and dozens of instructors across multiple institutions.
                </p>
                <p>
                  With backing from the University of Florida Research Foundation and partnerships with leading educational institutions, EdStream represents the future of integrated educational communication.
                </p>
              </div>
            </div>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">2023: Project Launch</div>
                      <div className="text-gray-600 dark:text-gray-300">Initial research and development at University of Florida</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">2024: Pilot Program</div>
                      <div className="text-gray-600 dark:text-gray-300">Successful pilot with 5,000+ students across multiple courses</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">2024: Platform Launch</div>
                      <div className="text-gray-600 dark:text-gray-300">Full platform release with Canvas LTI integration</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">2025: Expansion</div>
                      <div className="text-gray-600 dark:text-gray-300">Growing network of partner institutions nationwide</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-8">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutValues.map((value, index) => (
              <Card key={value.title} className="shadow-xl border-0 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          index % 2 === 0
                            ? "linear-gradient(135deg, #FA4616 0%, #FF6B3D 100%)"
                            : "linear-gradient(135deg, #0021A5 0%, #003DD6 100%)",
                      }}
                    >
                      {React.cloneElement(value.icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-2">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Mobile */}
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

      {/* #faq */}
      <section id="faq" className={`${sectionClass} py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about EdStream implementation, features, and benefits.
            </p>
          </div>

          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <Card
                key={section.title}
                className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white mr-6 shadow-lg"
                      style={{
                        background:
                          sectionIndex % 2 === 0
                            ? "linear-gradient(135deg, #FA4616 0%, #FF6B3D 100%)"
                            : "linear-gradient(135deg, #0021A5 0%, #003DD6 100%)",
                      }}
                    >
                      {React.cloneElement(section.icon, { className: "h-7 w-7 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{section.title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mt-2" />
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {section.questions.map((faq, questionIndex) => (
                      <AccordionItem
                        key={faq.question}
                        value={`${sectionIndex}-${questionIndex}`}
                        className="border border-gray-200 dark:border-gray-600 rounded-xl px-5 py-2 bg-white/60 dark:bg-gray-700/80 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-4 hover:no-underline group-hover:translate-x-1 [&>svg]:hidden">
                          <div className="flex items-center justify-between w-full">
                            <span className="pr-4">{faq.question}</span>
                            <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600 dark:group-data-[state=open]:text-blue-400" />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-2 pb-4 leading-relaxed text-lg">
                          <div className="pl-2 border-l-4 border-blue-100 dark:border-blue-800">
                            <p className="pl-6">{faq.answer}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">$</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Costs & Licensing</h3>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem
                    value="pricing"
                    className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 py-3 group-hover:translate-x-1 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">How is EdStream priced?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-green-100 dark:border-green-800">
                        <p className="pl-4">
                          Pricing information is available upon request and varies based on institution size, number of courses, and specific feature requirements. We work with each institution to develop pricing that fits their budget and needs.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="trial"
                    className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 py-3 group-hover:translate-x-1 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">Is there a free trial available?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-green-100 dark:border-green-800">
                        <p className="pl-4">
                          Yes! We offer pilot programs that allow institutions to test EdStream with selected courses before making larger commitments. Contact us to discuss trial options for your institution.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="ongoing-costs"
                    className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 py-3 group-hover:translate-x-1 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">What ongoing costs should we expect?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-green-100 dark:border-green-800">
                        <p className="pl-4">
                          EdStream operates on a subscription model with transparent pricing. Costs include platform access, technical support, training resources, and regular feature updates. No hidden fees or surprise charges.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Partnerships</h3>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem
                    value="uf-partnership"
                    className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 py-3 group-hover:translate-x-1 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">How does the University of Florida partnership work?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-purple-100 dark:border-purple-800">
                        <p className="pl-4">
                          UF IT has provided strategic partnership support including pilot program funding, access to large enrollment courses for testing, and institutional validation. This partnership helps EdStream develop as a proven solution for major research universities.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="partnerships"
                    className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 py-3 group-hover:translate-x-1 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">Can other institutions become partners?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-purple-100 dark:border-purple-800">
                        <p className="pl-4">
                          We're actively seeking partnerships with educational institutions interested in improving course communication and community building. Partnership opportunities range from pilot programs to strategic development collaborations.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="different"
                    className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 py-3 group-hover:translate-x-1 [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">What makes EdStream different?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-purple-100 dark:border-purple-800">
                        <p className="pl-4">
                          EdStream is purpose-built for education, integrates natively with Canvas, focuses specifically on course-related communication, and provides community building tools that generic messaging platforms lack. It's designed by educators for educators.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* #contact */}
      <section id="contact" className={`${sectionClass} py-20 bg-white dark:bg-gray-900`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Get in Touch With Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform course communication at your institution? We're here to help you get started.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100 dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full text-white mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Get EdStream</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Interested in bringing EdStream to your institution? Fill out our form and our team will contact you within 24 hours.
                  </p>
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-semibold py-3 text-lg"
                  asChild
                >
                  <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                    Get EdStream
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100 dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full text-white mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Schedule a Demo</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Want to see how EdStream works? Schedule a personalized 30-minute demonstration to explore features and ask questions.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white font-semibold py-3 text-lg"
                  asChild
                >
                  <a href="mailto:info@edstream.io?subject=Demo Request">Schedule Demo</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions or need support? Reach out to us for general inquiries, technical support, or any other assistance.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-blue-100 dark:border-gray-700 dark:bg-gray-900">
              <CardContent className="p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full text-white mb-8">
                  <Mail className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">Get In Touch</h3>

                <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
                  <a
                    href="mailto:info@edstream.io"
                    className="text-3xl font-bold text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 inline-flex items-center justify-center group no-underline"
                  >
                    <Mail className="h-8 w-8 mr-4 group-hover:scale-110 transition-transform duration-300" />
                    info@edstream.io
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
                    For all inquiries including general questions, technical support, and partnership opportunities
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-blue-100 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg text-white mb-2">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">General Inquiries</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Response within 24 hours</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-orange-100 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg text-white mb-2">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="font-semibold text-orange-500 dark:text-orange-400 mb-1">Technical Support</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">24/7 support for partners</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA — once */}
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
