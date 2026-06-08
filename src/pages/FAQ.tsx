import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, MessageSquare, Shield, Smartphone, ChevronDown } from "lucide-react";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - EdStream";
  }, []);

  const faqSections = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          question: "What is EdStream?",
          answer: "EdStream is an integrated messaging and collaboration tool designed specifically for educational institutions using Canvas LMS. It centralizes all course-related communications, streamlines administrative tasks like extension requests and accommodations management, and provides tools for building stronger academic communities."
        },
        {
          question: "How does EdStream integrate with Canvas?",
          answer: "EdStream uses the Learning Tools Interoperability (LTI) protocol to integrate seamlessly with Canvas. This means it appears as a native Canvas tool, requires no separate login, and maintains all Canvas security and privacy standards. Students and instructors access EdStream directly through their Canvas course navigation."
        },
        {
          question: "Do I need separate accounts for EdStream?",
          answer: "No. EdStream uses your existing Canvas authentication, so there's no need to create separate accounts or remember additional passwords. If you can access Canvas, you can access EdStream."
        },
        {
          question: "Is EdStream available on mobile devices?",
          answer: "Yes! EdStream offers native iOS and Android applications with full functionality. You can send messages, manage communications, and access all features from your mobile device with push notifications for important updates."
        }
      ]
    },
    {
      title: "Implementation & Setup",
      icon: <MessageSquare className="h-6 w-6" />,
      questions: [
        {
          question: "How long does it take to set up EdStream?",
          answer: "Initial setup typically takes 1-2 hours for IT administrators to configure the Canvas integration. Individual course setup takes about 15-30 minutes per course, depending on customization needs."
        },
        {
          question: "What technical requirements does EdStream have?",
          answer: "EdStream requires Canvas LMS with LTI integration capabilities. No additional software installation is needed on user devices, as EdStream works through web browsers and mobile apps. It's compatible with all modern browsers and devices."
        },
        {
          question: "Can EdStream be used with large enrollment courses?",
          answer: "Absolutely! EdStream is specifically designed to handle large enrollment courses efficiently. Our pilot program currently supports over 5,000 students, and the platform can scale to accommodate courses of any size."
        },
        {
          question: "How does EdStream handle student privacy and data security?",
          answer: "EdStream is fully compliant with FERPA and institutional privacy requirements. All communications are encrypted, access is role-based, and audit trails are maintained. Student data remains within institutional control and follows all Canvas security protocols."
        }
      ]
    },
    {
      title: "Features & Functionality",
      icon: <Smartphone className="h-6 w-6" />,
      questions: [
        {
          question: "What types of communications can EdStream handle?",
          answer: "EdStream manages all course-related communications including general student questions and support requests, extension and accommodation requests, group project coordination, office hours scheduling, peer-to-peer academic discussions, and administrative announcements."
        },
        {
          question: "How does the automated extension request system work?",
          answer: "When students submit extension requests through EdStream, the system can automatically route them based on predefined criteria, suggest responses based on institutional policies, and track approval/denial decisions. Instructors maintain full control over all decisions while reducing administrative overhead."
        },
        {
          question: "Can students use EdStream to communicate with each other?",
          answer: "Yes! EdStream includes community building features that allow students to form study groups, collaborate on projects, and build peer networks. All peer communication happens within the secure, monitored environment of the course."
        },
        {
          question: "What analytics and reporting does EdStream provide?",
          answer: "EdStream offers insights into communication patterns, response times, student engagement levels, and community participation. These analytics help instructors understand course communication health and identify students who might need additional support."
        }
      ]
    },
    {
      title: "Support & Training",
      icon: <Shield className="h-6 w-6" />,
      questions: [
        {
          question: "What kind of training is provided?",
          answer: "EdStream provides comprehensive training resources including video tutorial libraries for instructors and students, live training sessions and webinars, quick-start guides and documentation, 24/7 technical support, and best practices sharing from other institutions."
        },
        {
          question: "How do students learn to use EdStream?",
          answer: "Students receive in-app guidance, quick-start tutorials, and access to peer support communities. The interface is designed to be intuitive, and most students become comfortable with basic features within minutes of first use."
        },
        {
          question: "What support is available during implementation?",
          answer: "Our team provides full implementation support including planning assistance, technical integration help, user training, and ongoing optimization based on usage patterns and feedback."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-gray-800 dark:via-gray-900 dark:to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <HelpCircle className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about EdStream implementation, features, and benefits.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 -mt-10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white mr-6 shadow-lg"
                      style={{
                        background: sectionIndex % 2 === 0
                          ? 'linear-gradient(135deg, #FA4616 0%, #FF6B3D 100%)'
                          : 'linear-gradient(135deg, #0021A5 0%, #003DD6 100%)'
                      }}
                    >
                      {React.cloneElement(section.icon, { className: "h-7 w-7 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{section.title}</h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {section.questions.map((faq, questionIndex) => (
                      <AccordionItem 
                        key={questionIndex} 
                        value={`${sectionIndex}-${questionIndex}`}
                        className="border border-gray-200 dark:border-gray-600 rounded-xl px-5 py-2 bg-white/60 dark:bg-gray-700/80 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-4 hover:no-underline group-hover:translate-x-1">
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
        </div>
      </section>

      {/* Additional FAQ Sections */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">$</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Costs & Licensing</h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem value="pricing" className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group">
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 py-3 group-hover:translate-x-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">How is EdStream priced?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-green-100 dark:border-green-800">
                        <p className="pl-4">Pricing information is available upon request and varies based on institution size, number of courses, and specific feature requirements. We work with each institution to develop pricing that fits their budget and needs.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="trial" className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group">
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 py-3 group-hover:translate-x-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">Is there a free trial available?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-green-100 dark:border-green-800">
                        <p className="pl-4">Yes! We offer pilot programs that allow institutions to test EdStream with selected courses before making larger commitments. Contact us to discuss trial options for your institution.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="ongoing-costs" className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group">
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 py-3 group-hover:translate-x-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">What ongoing costs should we expect?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-green-600 dark:group-data-[state=open]:text-green-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-green-100 dark:border-green-800">
                        <p className="pl-4">EdStream operates on a subscription model with transparent pricing. Costs include platform access, technical support, training resources, and regular feature updates. No hidden fees or surprise charges.</p>
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
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Partnerships</h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem value="uf-partnership" className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group">
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 py-3 group-hover:translate-x-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">How does the University of Florida partnership work?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-purple-100 dark:border-purple-800">
                        <p className="pl-4">UF IT has provided strategic partnership support including pilot program funding, access to large enrollment courses for testing, and institutional validation. This partnership helps EdStream develop as a proven solution for major research universities.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="partnerships" className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group">
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 py-3 group-hover:translate-x-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">Can other institutions become partners?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-purple-100 dark:border-purple-800">
                        <p className="pl-4">We're actively seeking partnerships with educational institutions interested in improving course communication and community building. Partnership opportunities range from pilot programs to strategic development collaborations.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="different" className="border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-md transition-all duration-300 group">
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 py-3 group-hover:translate-x-1">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">What makes EdStream different?</span>
                        <ChevronDown className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 pt-1 pb-3 text-lg">
                      <div className="pl-2 border-l-4 border-purple-100 dark:border-purple-800">
                        <p className="pl-4">EdStream is purpose-built for education, integrates natively with Canvas, focuses specifically on course-related communication, and provides community building tools that generic messaging platforms lack. It's designed by educators for educators.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-10 leading-relaxed">
            Contact our team directly—we're here to help make your course communication more effective and your academic communities stronger.
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
              className="border-2 border-white dark:border-gray-400 bg-transparent text-white dark:text-gray-200 hover:bg-white hover:text-blue-600 dark:hover:bg-gray-200 dark:hover:text-gray-900 font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-48"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
