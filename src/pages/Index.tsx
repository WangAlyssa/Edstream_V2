import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppStoreBadge from "@/components/AppStoreBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, Star, Smartphone } from "lucide-react";

const Index = () => {
  const benefits = [
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      title: "Streamlined Communication",
      description: "Manage thousands of student interactions efficiently with intelligent routing and automated workflows."
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Enhanced Collaboration", 
      description: "Build meaningful learning communities within courses and facilitate peer-to-peer support."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      title: "Experiential Learning",
      description: "Connect classroom learning with real-world applications and foster long-term academic relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-300 mb-6 leading-tight">
                Cultivating Campus Communities
              </h1>
              <p className="text-2xl lg:text-3xl text-orange-500 dark:text-orange-400 mb-6 font-medium">
                Connect. Communicate. Collaborate. <br />
                All within Canvas.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                EdStream is an integrated messaging and collaboration tool that transforms how educational communities interact within Canvas LMS. Streamline course communications, enhance student engagement, and build stronger academic connections—all from one unified platform.
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

              {/* Mobile App Downloads */}
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://apps.apple.com/us/app/edstream/id6736952355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  <AppStoreBadge />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.edstreamchat.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-105"
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-[78px] w-[260px] object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Students collaborating on campus"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500 dark:bg-orange-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
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
            {[
              "Canvas inbox messages scattered across courses",
              "Separate discussion boards for each class",
              "Email threads for extension requests and accommodations",
              "Independent systems for office hours scheduling",
              "Disconnected platforms for student support",
              "Administrative burden for both instructors and students"
            ].map((challenge, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500 dark:border-l-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-white dark:bg-gray-700 hover:border-l-orange-600 dark:hover:border-l-orange-300">
                <CardContent className="p-8">
                  <p className="text-gray-700 dark:text-gray-200 font-medium text-xl leading-relaxed">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-8">
              Introducing EdStream
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              One Platform. Seamless Communication. Stronger Communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-10">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-600 dark:to-gray-700 p-4 flex items-center justify-center group-hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Transform Your Educational Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-white dark:border-gray-600 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-6">For Large Enrollment Courses</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Manage thousands of student interactions efficiently</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Reduce administrative overhead with automated workflows</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Ensure no student request goes unnoticed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-white dark:border-gray-600 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-6">Enhanced Collaboration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Build meaningful learning communities within courses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Facilitate peer-to-peer support and mentorship</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Create structured spaces for academic collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-white dark:border-gray-600 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-6">Experiential Learning</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Connect classroom learning with real-world applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Support project-based and collaborative learning initiatives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-lg">Foster long-term academic relationships beyond single courses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Trusted by Leading Educational Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">UF IT Partnership</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Strategic partnership with the University of Florida IT department, supporting homegrown educational technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">5,000+ Students</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Currently supporting over 5,000 students across multiple large enrollment courses in our fall pilot program.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4">Institution-Ready</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Approved for university-wide rollout and positioned to become the go-to platform for course communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 rounded-full text-white mb-6 shadow-lg">
              <Smartphone className="h-10 w-10" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-6">
              Stay Connected On-the-Go
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Access EdStream's full functionality from your mobile device. Send messages, manage communications, and stay connected with your educational community wherever you are.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/us/app/edstream/id6736952355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105"
            >
              <AppStoreBadge />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.edstreamchat.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-[78px] w-[260px] object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Course Communication?
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-10 leading-relaxed">
            Join the growing community of educators and students who are revolutionizing how academic communities connect and collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-48 border-2 border-transparent dark:border-orange-400/30"
              asChild
            >
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                Get EdStream
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white dark:border-gray-400 text-white dark:text-gray-200 hover:bg-white hover:text-blue-600 dark:hover:bg-gray-200 dark:hover:text-gray-900 font-semibold px-8 py-6 text-lg bg-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-48"
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
