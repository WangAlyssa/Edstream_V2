import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Users, Code, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    document.title = "EdStream Guides - EdStream";
  }, []);

  const featuredPost = {
    title: "Building Stronger Student Communities in Large Enrollment Courses",
    excerpt: "Large enrollment courses present unique challenges for fostering student connections and building academic communities. In this comprehensive guide, we explore practical strategies for using integrated communication tools to create meaningful relationships even in courses with thousands of students.",
    date: "June 2025",
    author: "EdStream Team",
    readTime: "8 min read",
    category: "Best Practices"
  };

  const recentPosts = [
    {
      title: "The Future of Course Communication: Beyond Email and Discussion Boards",
      excerpt: "Traditional course communication methods are showing their age. This article explores how modern educational institutions are evolving beyond fragmented email chains and isolated discussion boards toward integrated communication ecosystems.",
      date: "May 2025",
      author: "Dr. Sarah Chen",
      readTime: "6 min read",
      category: "Educational Technology Trends",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Implementation Success Story: How UF Transformed Course Communication",
      excerpt: "Take a deep dive into our partnership with the University of Florida and how their strategic approach to implementing integrated course communication has improved outcomes for over 5,000 students.",
      date: "May 2025",
      author: "EdStream Team",
      readTime: "7 min read",
      category: "Success Stories",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Best Practices for Managing Student Extension Requests",
      excerpt: "Extension requests can consume hours of faculty time each week. Learn how automated workflows and intelligent routing can streamline this process while maintaining fairness and compliance with institutional policies.",
      date: "April 2025",
      author: "Prof. Michael Rodriguez",
      readTime: "5 min read",
      category: "Faculty Resources",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Canvas LTI Integration: What Instructors Need to Know",
      excerpt: "Understanding Learning Tools Interoperability (LTI) helps instructors make the most of integrated educational technology. This technical overview explains how LTI enhances the Canvas experience without compromising security or usability.",
      date: "April 2025",
      author: "EdStream Technical Team",
      readTime: "4 min read",
      category: "Technical Insights",
      icon: <Code className="h-5 w-5" />
    }
  ];

  const categories = [
    { name: "Implementation Guides", description: "Step-by-step resources for setting up and optimizing EdStream at your institution.", icon: <BookOpen className="h-6 w-6" /> },
    { name: "Success Stories", description: "Real-world examples of how EdStream is transforming course communication and community building.", icon: <Award className="h-6 w-6" /> },
    { name: "Educational Technology Trends", description: "Analysis of emerging trends in educational technology and their impact on teaching and learning.", icon: <TrendingUp className="h-6 w-6" /> },
    { name: "Faculty Resources", description: "Practical tips and best practices for instructors using integrated communication tools.", icon: <Users className="h-6 w-6" /> },
    { name: "Student Experience", description: "Insights into how modern students prefer to communicate and collaborate in academic settings.", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Technical Insights", description: "Deep dives into the technology that powers modern educational communication platforms.", icon: <Code className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
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
              Educational technology insights, implementation guides, and success stories from the EdStream community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 -mt-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue mb-4">Featured Guide</h2>
          </div>
          
          <Card className="mb-12 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-orange">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-orange text-white px-3 py-1 text-sm font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue mb-4 hover:text-orange transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-blue mx-auto mb-4" />
                    <p className="text-blue font-semibold">Community Building in Large Courses</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue mb-4">Recent Guides</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center text-white">
                      {post.icon}
                    </div>
                    <span className="bg-blue text-white px-3 py-1 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue mb-3 hover:text-orange transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" className="text-blue hover:text-orange p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue mb-6">Browse by Category</h2>
            <p className="text-xl text-gray-600">Explore content tailored to your role and interests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-blue rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue mb-3">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest EdStream insights, feature announcements, and educational technology trends delivered to your inbox.
          </p>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
                />
                <Button className="w-full gradient-orange text-white font-semibold py-3">
                  Subscribe to Updates
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Weekly digest • Feature updates • Case studies
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Contributions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue mb-4">Share Your Story</h3>
                <p className="text-gray-600 mb-6">
                  Are you using EdStream at your institution? We'd love to feature your success story, implementation tips, or student feedback in our guides.
                </p>
                <Button className="border-blue text-blue hover:bg-blue hover:text-white" variant="outline">
                  Contribute Content
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue mb-4">Request Topics</h3>
                <p className="text-gray-600 mb-6">
                  Have a specific topic you'd like us to cover? Suggest guide topics that would be valuable for the EdStream community.
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
