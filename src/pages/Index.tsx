import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Zap, CheckCircle, Smartphone, ArrowRight, Clock, Shield } from "lucide-react";

const ChannelCreationMockup = () => {
  const [step, setStep] = useState(0);
  const [channels, setChannels] = useState(["# Announcements", "# Final Review"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === 4) {
          setChannels(["# Announcements", "# Final Review"]);
          return 0;
        }
        if (prev === 2) {
          setChannels(["# Announcements", "# Final Review", "# project-group-01 🟢"]);
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#1e1e2d] text-gray-300 rounded-xl shadow-2xl p-4 font-mono text-xs overflow-hidden border border-gray-700 relative h-64 flex">
      <div className="w-1/3 border-r border-gray-700 pr-3 flex flex-col justify-between">
        <div>
          <div className="text-white font-bold mb-4 flex items-center gap-1.5 text-[11px] text-orange-400">
            <MessageSquare className="h-3 w-3" /> EdStream Hub
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Canvas Course Channels</div>
          <div className="space-y-1.5">
            {channels.map((ch, idx) => (
              <div key={idx} className={`px-2 py-1 rounded transition-all duration-300 ${idx === channels.length - 1 && step >= 3 ? "bg-blue-600/30 text-white font-semibold" : "text-gray-400"}`}>
                {ch}
              </div>
            ))}
          </div>
        </div>
        <button className={`w-full py-1 text-center border rounded border-dashed text-[10px] transition-all flex items-center justify-center gap-1 ${step === 1 ? "bg-orange-500 text-white border-transparent scale-105" : "border-gray-600 text-gray-500"}`}>
          <span>+ Create New Channel</span>
        </button>
      </div>

      <div className="w-2/3 pl-3 flex flex-col justify-between relative">
        <div className="border-b border-gray-800 pb-2 mb-2 flex items-center justify-between">
          <span className="text-white font-bold">{step >= 3 ? "# project-group-01" : "# Announcements"}</span>
          <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">Canvas Synced</span>
        </div>

        <div className="flex-1 flex items-center justify-center text-center px-4">
          {step === 0 && <p className="text-gray-500 italic animate-pulse">Ready: instructors manage channels in one click...</p>}
          {step === 1 && <p className="text-orange-400 font-semibold animate-bounce">1. Triggering Canvas API to create channel...</p>}
          {step === 2 && <p className="text-blue-400 font-semibold">2. Entering channel name: "project-group-01"</p>}
          {step === 3 && <p className="text-green-400 font-semibold animate-pulse">3. 🎉 Channel created! Class connected seamlessly</p>}
          {step === 4 && <p className="text-gray-400">Syncing Canvas roster permissions...</p>}
        </div>

        <div
          className="absolute w-3 h-3 bg-white rounded-full border border-black pointer-events-none transition-all duration-1000 shadow-lg"
          style={{
            left: step === 1 ? "25%" : step === 2 ? "50%" : "85%",
            top: step === 1 ? "85%" : step === 2 ? "60%" : "20%",
            opacity: step === 4 ? 0 : 0.8,
            transform: step === 1 ? "scale(0.8)" : "scale(1)"
          }}
        />
      </div>
    </div>
  );
};

const ExtensionApprovalMockup = () => {
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsApproved((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-64 [perspective:1000px] font-sans">
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isApproved ? "[transform:rotateY(180deg)]" : ""}`}>

        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-xl p-5 border-2 border-orange-200 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full flex items-center gap-1">
                <Clock className="h-3 w-3" /> Pending Request
              </span>
              <span className="text-xs text-gray-400">Assignment 3 Extension</span>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base">Student: Alex Chen (ID: 20260824)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 bg-gray-50 dark:bg-gray-700/50 p-2 rounded border border-gray-100 italic">
              "Hi Professor, due to a medical emergency I am requesting a 24-hour extension on Assignment 3. Medical documentation attached..."
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              Deny Request
            </button>
            <button className="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-xs font-bold shadow-md transform scale-105 animate-pulse">
              Approve Instantly ⚡
            </button>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-xl [transform:rotateY(180deg)] flex flex-col justify-between items-center text-center">
          <div className="my-auto space-y-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-xl">Approval Delivered!</h4>
            <p className="text-sm text-blue-100 max-w-xs">
              Canvas due date updated automatically. Student notified via push notification in real time.
            </p>
          </div>
          <div className="text-[10px] text-blue-200/60 uppercase tracking-wider">
            Compliance audit log generated • 100% instructor controlled
          </div>
        </div>

      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-500 selection:text-white">
      <Header />

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="text-left space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold tracking-wide">
                Integrated messaging and collaboration for Canvas LMS
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-blue-600 dark:text-blue-300 leading-tight">
                Cultivating Campus <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Communities
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Connect · Communicate · Collaborate. <br />
                All seamlessly built into Canvas.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                EdStream is an integrated messaging and collaboration tool designed specifically for educational institutions using Canvas LMS. It centralizes course-related communications, streamlines administrative tasks, and provides tools for building stronger academic communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all w-full sm:w-52"
                  asChild
                >
                  <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Get EdStream <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-6 opacity-85 hover:opacity-100 transition-opacity">
                <a href="https://apps.apple.com/us/app/edstream/id6736952355" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 object-contain" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.edstreamchat.app" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform">
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-14 object-contain -my-2" />
                </a>
              </div>
            </div>

            <div className="relative space-y-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-orange-400/10 rounded-2xl blur-3xl -z-10" />
              <ChannelCreationMockup />
              <ExtensionApprovalMockup />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Why Is Campus Communication So Fragmented?</h2>
            <p className="text-gray-500 text-base">Common challenges instructors and students face with traditional Canvas workflows:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Canvas inbox and course tools feel disconnected, making it easy to miss important notices",
              "Discussion boards become noisy threads where real-time Q&A is hard to sustain",
              "Extension and accommodation requests get buried in scattered email chains",
              "No unified place for office hours, peer collaboration, and course-wide Q&A",
              "Students form off-platform group chats that raise privacy and compliance risks",
              "Instructors and TAs spend hours manually tracking communication and admin requests"
            ].map((challenge, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500 bg-white dark:bg-gray-800 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-4">Core Modules, Unified in One Place</h2>
            <p className="text-gray-500 text-base">No bloated add-ons—only the features modern higher-ed teaching actually needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-300">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Real-Time Course Communication</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Students access dedicated channels directly from Canvas—no third-party apps required. Share files, code snippets, and assignment threads in one place.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Zap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Automated Extension & Accommodation Workflows</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Extension and accommodation requests are submitted through structured forms. Instructors approve with one click and Canvas updates automatically.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-300">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Canvas LTI Deep Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Built on standard LTI authentication. No separate accounts or passwords—roster sync and role-based access stay within your course boundaries.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Smartphone className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Native iOS & Android Apps</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Full mobile support with secure push notifications so instructors and students never miss critical course updates on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300">Secure, Compliant, and Institution-Ready</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-2">
              <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              <h4 className="font-bold text-base">FERPA-Aligned Privacy Standards</h4>
              <p className="text-xs text-gray-500">Student records, chat files, and approval data are encrypted and kept within institutional control.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-2">
              <CheckCircle className="h-8 w-8 text-orange-500 mx-auto" />
              <h4 className="font-bold text-base">Full Instructor Control</h4>
              <p className="text-xs text-gray-500">Complete audit trails and the ability to open or close channels as needed—always in service of the course.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Bring Real-Time Communication to Your Courses</h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            Join institutions rethinking academic communication—boost student engagement and instructor efficiency at the same time.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all"
              asChild
            >
              <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                Apply for a Pilot Program
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
