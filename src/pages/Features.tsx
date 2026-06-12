import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureDemo, { features } from "@/components/FeatureDemo";
import { MOCK_ORGANIZATIONS } from "@/components/mockup/mockup-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Settings, Users, Zap, BarChart3, Shield, CheckCircle } from "lucide-react";

const Features = () => {
  useEffect(() => {
    document.title = "Features - EdStream";
  }, []);

  const beforeAfter = {
    before: [
      "Fragmented Communication: Multiple platforms and inboxes",
      "Manual Processes: Time-intensive extension and accommodation handling",
      "Limited Collaboration: Difficulty connecting students outside class",
      "Administrative Burden: Hours spent managing communication logistics"
    ],
    after: [
      "Unified Platform: Single interface for all course communication",
      "Automated Workflows: Smart handling of routine requests",
      "Enhanced Community: Tools for building lasting academic relationships",
      "Efficient Management: Streamlined processes save hours weekly"
    ]
  };

  const implementationPhases = [
    {
      phase: "Phase 1: Setup & Configuration",
      description: "IT administrator configuration (1-2 hours), Canvas integration activation, initial instructor training and onboarding",
      icon: <Settings className="h-5 w-5" />
    },
    {
      phase: "Phase 2: Course Integration",
      description: "Individual course setup and customization, student notification and introduction, communication workflow establishment",
      icon: <Users className="h-5 w-5" />
    },
    {
      phase: "Phase 3: Community Building",
      description: "Group and collaboration feature activation, advanced feature training for power users, analytics and reporting setup",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      phase: "Phase 4: Optimization",
      description: "Usage analytics review, workflow optimization based on patterns, advanced feature rollout and training",
      icon: <BarChart3 className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Zap className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Powerful Features</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Course
              <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                Communication
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Interactive demos and step-by-step guides that mirror the Ed Stream Chat design — built with fictional course data from {MOCK_ORGANIZATIONS.institution}.
            </p>
          </div>
        </div>
      </section>

      {/* Core Workflows */}
      <section className="py-20 -mt-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              Core Workflows
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Five core workflows with animated demos. Each example uses fictional names — Maya Chen, Ethan Brooks, Sofia Patel — in a {MOCK_ORGANIZATIONS.workspace} course ({MOCK_ORGANIZATIONS.institution}).
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={feature.id} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-300">{feature.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{feature.description}</p>
                  <p className="mb-4 text-sm italic leading-relaxed text-gray-500 dark:text-gray-400">{feature.scenario}</p>
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

      {/* Before vs After */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Transform Your Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-orange-500 dark:border-l-orange-400 shadow-xl bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400 mb-6">Before EdStream</h3>
                <ul className="space-y-4">
                  {beforeAfter.before.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 dark:border-l-green-400 shadow-xl bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">With EdStream</h3>
                <ul className="space-y-4">
                  {beforeAfter.after.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4" style={{ background: 'linear-gradient(135deg, #0021A5 0%, #003DD6 100%)' }}>
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
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4" style={{ background: 'linear-gradient(135deg, #FA4616 0%, #FF6B3D 100%)' }}>
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
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4" style={{ background: 'linear-gradient(135deg, #0021A5 0%, #003DD6 100%)' }}>
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
              <Card key={index} className="relative hover:shadow-xl transition-shadow duration-300 shadow-xl border-0 bg-white dark:bg-gray-800">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            See how EdStream can transform communication and community building at your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 text-white font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-48"
              asChild
            >
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                Get EdStream
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-48"
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

export default Features;
