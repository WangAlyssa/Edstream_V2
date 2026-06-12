
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent dark:from-orange-400/20 dark:to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Mail className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get in Touch
              <span className="block bg-gradient-to-r from-orange-300 to-orange-100 dark:from-orange-200 dark:to-orange-100 bg-clip-text text-transparent">
                With Our Team
              </span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform course communication at your institution? We're here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 -mt-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get EdStream */}
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

            {/* Schedule Demo */}
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
                  <a href="mailto:info@edstream.io?subject=Demo Request">
                    Schedule Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Contact Information
            </h2>
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
                    className="text-3xl font-bold text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 inline-flex items-center justify-center group"
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

      <Footer />
    </div>
  );
};

export default Contact;
