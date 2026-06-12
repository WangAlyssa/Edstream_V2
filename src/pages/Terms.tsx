import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, FileText, Shield, AlertTriangle, CheckCircle, XCircle, Building, Users } from "lucide-react";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service - EdStream";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-900 dark:to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-blue-100 max-w-3xl mx-auto mb-4">
              Please read these terms carefully before using EdStream services.
            </p>
            <p className="text-lg text-gray-500 dark:text-blue-200">
              Last Updated: June 14, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-orange mr-4" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">Agreement to Terms</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  By accessing or using EdStream, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use EdStream services.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  These terms apply to all users of EdStream, including students, instructors, administrators, and other authorized users within participating educational institutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  EdStream is developed and operated by the University of Florida Research Foundation, Inc., and all services are subject to University of Florida Research Foundation policies and procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue mr-4" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">Description of Service</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">EdStream Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                      EdStream is an integrated messaging and collaboration platform designed for educational institutions using Canvas LMS, developed by the University of Florida Research Foundation, Inc. Our services include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Unified course communication tools</li>
                      <li>Student-instructor messaging capabilities</li>
                      <li>Community building and collaboration features</li>
                      <li>Extension and accommodation request management</li>
                      <li>Mobile applications for iOS and Android</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Educational Purpose</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      EdStream is designed exclusively for educational purposes and may only be used in connection with legitimate academic activities at participating institutions. All usage must comply with University of Florida policies and educational best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-gator mr-4" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">User Accounts and Access</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Account Creation</h3>
                    <p className="text-gray-600 dark:text-gray-300">EdStream accounts are created through Canvas LMS integration. Users access EdStream using their existing Canvas credentials and do not need separate account registration.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Authorized Use</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">EdStream access is limited to:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Students enrolled in courses using EdStream</li>
                      <li>Instructors teaching courses with EdStream integration</li>
                      <li>Authorized institutional administrators</li>
                      <li>Support staff as designated by participating institutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-gator mr-4" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">Acceptable Use Policy</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Permitted Uses</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">EdStream may be used for:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Course-related communications and discussions</li>
                      <li>Academic collaboration and group work</li>
                      <li>Extension and accommodation requests</li>
                      <li>Building educational communities</li>
                      <li>Legitimate educational support activities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Academic Integrity</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Users must comply with their institution's academic integrity policies and University of Florida standards when using EdStream, including respecting course collaboration guidelines and following University of Florida Research Foundation ethical guidelines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="h-8 w-8 text-orange mr-4" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">Prohibited Activities</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Users may not use EdStream to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Share inappropriate, offensive, or harmful content</li>
                  <li>Harass, threaten, or intimidate other users</li>
                  <li>Violate intellectual property rights</li>
                  <li>Share personal information of other users without consent</li>
                  <li>Attempt to circumvent security measures</li>
                  <li>Use the platform for commercial or non-educational purposes</li>
                  <li>Distribute malware, viruses, or harmful code</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue mr-4" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">Privacy and Data Protection</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Data Collection and Use</h3>
                    <p className="text-gray-600 dark:text-gray-300">EdStream collects and uses data as described in our Privacy Policy, which is incorporated into these Terms of Service by reference.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">FERPA Compliance</h3>
                    <p className="text-gray-600 dark:text-gray-300">EdStream complies with the Family Educational Rights and Privacy Act (FERPA) and treats student data as educational records subject to institutional privacy policies.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Institutional Access</h3>
                    <p className="text-gray-600 dark:text-gray-300">Participating educational institutions and the University of Florida Research Foundation may access user data and communications as permitted by institutional policies, University of Florida policies, and applicable laws.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue dark:text-blue-300 mb-6">Service Availability</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Platform Availability</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">EdStream strives to maintain 99.9% uptime but does not guarantee uninterrupted service. Planned maintenance will be announced in advance when possible.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Service Modifications</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">EdStream reserves the right to modify features and functionality with appropriate notice, update terms of service, and implement new security measures.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Technical Support</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">EdStream provides technical support to participating institutions and their users according to service level agreements with each institution.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">User License</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">The University of Florida Research Foundation grants users a limited, non-exclusive, non-transferable license to use the platform solely for educational purposes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue dark:text-blue-300 mb-6">Intellectual Property</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  The EdStream platform, including all software, designs, text, graphics, and other content, is owned by the University of Florida Research Foundation, Inc. and protected by intellectual property laws.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Users may provide feedback and suggestions for improving EdStream. Such feedback may be used by the University of Florida Research Foundation without compensation or attribution obligations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue dark:text-blue-300 mb-6">Limitation of Liability</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  EdStream is provided "as is" without warranties of any kind. To the maximum extent permitted by law, the University of Florida Research Foundation's liability is limited to the amount paid by the user's institution for EdStream services.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The University of Florida Research Foundation is not liable for indirect, incidental, or consequential damages, loss of data or communications, academic or professional consequences of service interruptions, or actions of other users or third parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building className="h-8 w-8 text-blue mr-3" />
                  <h2 className="text-2xl font-bold text-blue dark:text-blue-300">Compliance and Regulatory Matters</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">University of Florida Compliance</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">As a University of Florida Research Foundation project, EdStream adheres to all University of Florida compliance requirements, including:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      <li>Data governance policies</li>
                      <li>Research ethics standards</li>
                      <li>Educational technology guidelines</li>
                      <li>Student privacy protections</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-2">Educational Regulations</h3>
                    <p className="text-gray-600 dark:text-gray-300">EdStream complies with applicable educational regulations including FERPA, Section 504, ADA, University of Florida policies, and institutional policies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-orange mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-blue dark:text-blue-300 mb-4">Contact Information</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
                      <h2 className="text-2xl font-bold text-blue dark:text-blue-300 mb-6">Contact Information</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-4">Terms Questions</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">For questions about these Terms of Service, contact:</p>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Email:</strong> <a href="mailto:legal@edstream.io" className="text-blue dark:text-blue-300 hover:text-orange dark:hover:text-orange-400 transition-colors">legal@edstream.io</a>
                          </p>
                          <p className="text-gray-700 dark:text-gray-300">
                            <strong>Address:</strong> University of Florida Research Foundation, Inc., EdStream Legal Department, Gainesville, FL
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-blue dark:text-blue-300 mb-4">Reporting Violations</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">To report violations of these terms:</p>
                          <p className="text-gray-700 dark:text-gray-300">
                            <strong>Email:</strong> <a href="mailto:violations@edstream.io" className="text-blue dark:text-blue-300 hover:text-orange dark:hover:text-orange-400 transition-colors">violations@edstream.io</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue dark:bg-blue-800 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-blue-100 mb-4">
                  The University of Florida Research Foundation may update these Terms of Service periodically. Users will be notified of significant changes through email notifications, in-platform announcements, and posted notices on our website.
                </p>
                <p className="text-blue-100">
                  Continued use of EdStream after term updates constitutes acceptance of the new terms. These Terms of Service are effective as of June 14, 2025, and govern all use of EdStream services from this date forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
