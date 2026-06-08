import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award, CheckCircle, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - EdStream";
  }, []);

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former education technology researcher with 10+ years of experience in learning management systems and student engagement platforms.",
      image: "/lovable-uploads/placeholder-team-1.jpg"
    },
    {
      name: "Sarah Martinez",
      role: "Head of Product",
      bio: "UX designer and product strategist who has worked with major educational institutions to improve digital learning experiences.",
      image: "/lovable-uploads/placeholder-team-2.jpg"
    },
    {
      name: "Dr. Michael Thompson",
      role: "Chief Technology Officer",
      bio: "Software architect with expertise in scalable educational platforms and Canvas LTI integrations.",
      image: "/lovable-uploads/placeholder-team-3.jpg"
    }
  ];

  const impactStats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "5,000+",
      label: "Students Served",
      description: "Active users across multiple pilot programs"
    },
    {
      icon: <Target className="h-8 w-8" />,
      label: "Response Time",
      number: "75%",
      description: "Faster instructor response to student inquiries"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      number: "90%",
      label: "Satisfaction Rate",
      description: "Instructor satisfaction with communication efficiency"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Partner Institutions",
      description: "Universities and colleges in our pilot program"
    }
  ];

  const values = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Student-Centered Design",
      description: "Every feature is designed with student success and engagement as the primary focus."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Educational Excellence",
      description: "We believe technology should enhance learning, not complicate it."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation in Education",
      description: "Pushing the boundaries of what's possible in educational technology."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community Building",
      description: "Fostering meaningful connections that extend beyond the classroom."
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
              <Users className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">About EdStream</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Education
              <span className="block bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                Communication
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Born from the University of Florida, EdStream is revolutionizing how educational institutions manage course communication and build academic communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 -mt-10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                To streamline educational communication and foster stronger academic communities through innovative technology solutions that integrate seamlessly with existing learning management systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-300 mb-8">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: index % 2 === 0
                          ? 'linear-gradient(135deg, #FA4616 0%, #FF6B3D 100%)'
                          : 'linear-gradient(135deg, #0021A5 0%, #003DD6 100%)'
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

      <Footer />
    </div>
  );
};

export default About;
