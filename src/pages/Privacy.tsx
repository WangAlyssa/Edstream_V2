
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Your privacy and data security are fundamental to everything we do at EdStream.
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: August 27, 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <p className="text-gray-600 mb-6">
              Thank you for choosing to be part of our community at EdStream ("we," "us," or "our"). This privacy policy describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Visit our website at edstream.io, or any website of ours that links to this Privacy Notice</li>
              <li>Download and use our mobile application (EdStream), or any other application of ours that links to this Privacy Notice</li>
              <li>Use EdStream. EdStream is a communication and collaboration application used for educational contexts.</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p className="text-gray-600">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@edstream.io" className="text-blue hover:text-orange transition-colors">info@edstream.io</a>.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue mb-6">Table of Contents</h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li><a href="#section-1" className="text-blue hover:text-orange transition-colors">What Information Do We Collect?</a></li>
              <li><a href="#section-2" className="text-blue hover:text-orange transition-colors">How Do We Process Your Information?</a></li>
              <li><a href="#section-3" className="text-blue hover:text-orange transition-colors">When and with Whom Do We Share Your Personal Information?</a></li>
              <li><a href="#section-4" className="text-blue hover:text-orange transition-colors">Do We Offer Artificial Intelligence-Based Products?</a></li>
              <li><a href="#section-5" className="text-blue hover:text-orange transition-colors">How Long Do We Keep Your Information?</a></li>
              <li><a href="#section-6" className="text-blue hover:text-orange transition-colors">How Do We Keep Your Information Safe?</a></li>
              <li><a href="#section-7" className="text-blue hover:text-orange transition-colors">What Are Your Privacy Rights?</a></li>
              <li><a href="#section-8" className="text-blue hover:text-orange transition-colors">Controls for Do-Not-Track Features</a></li>
              <li><a href="#section-9" className="text-blue hover:text-orange transition-colors">Do United States Residents Have Specific Privacy Rights?</a></li>
              <li><a href="#section-10" className="text-blue hover:text-orange transition-colors">Do We Make Updates to This Notice?</a></li>
              <li><a href="#section-11" className="text-blue hover:text-orange transition-colors">How Can You Contact Us About This Notice?</a></li>
              <li><a href="#section-12" className="text-blue hover:text-orange transition-colors">How Can You Review, Update, or Delete the Data We Collect from You?</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-1" className="text-2xl font-bold text-blue mb-6">1. What Information Do We Collect?</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Personal information you disclose to us</h3>
              <p className="text-gray-600 mb-4"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
              <p className="text-gray-600 mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-gray-600 mb-2"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>names</li>
                <li>email addresses</li>
              </ul>
              <p className="text-gray-600 mb-2"><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>student data</li>
              </ul>
              <p className="text-gray-600 mb-2"><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
              </p>
              <p className="text-gray-600">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">Information automatically collected</h3>
              <p className="text-gray-600 mb-4"><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p className="text-gray-600 mb-2">The information we collect includes:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-2" className="text-2xl font-bold text-blue mb-6">2. How Do We Process Your Information?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
            <p className="text-gray-600 mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
              <li><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-3" className="text-2xl font-bold text-blue mb-6">3. When And With Whom Do We Share Your Personal Information?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
            <p className="text-gray-600 mb-4">
              <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
            </p>
            <p className="text-gray-600 mb-2">We also may need to share your personal information in the following situations:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Other Users.</strong> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-4" className="text-2xl font-bold text-blue mb-6">4. Do We Offer Artificial Intelligence-Based Products?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
            <p className="text-gray-600 mb-6">
              As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Use of AI Technologies</h3>
              <p className="text-gray-600">
                We provide the AI Products through third-party service providers ("AI Service Providers"), including NVIDIA AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Our AI Products</h3>
              <p className="text-gray-600 mb-2">Our AI Products are designed for the following functions:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>AI search</li>
                <li>AI applications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">How We Process Your Data Using AI</h3>
              <p className="text-gray-600">
                All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-5" className="text-2xl font-bold text-blue mb-6">5. How Long Do We Keep Your Information?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
            <p className="text-gray-600 mb-4">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
            </p>
            <p className="text-gray-600">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-6" className="text-2xl font-bold text-blue mb-6">6. How Do We Keep Your Information Safe?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
            <p className="text-gray-600">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-7" className="text-2xl font-bold text-blue mb-6">7. What Are Your Privacy Rights?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
            <p className="text-gray-600 mb-4">
              <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
            </p>
            <p className="text-gray-600 mb-4">
              However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
            </p>
            <p className="text-gray-600">
              If you have questions or comments about your privacy rights, you may email us at <a href="mailto:info@edstream.io" className="text-blue hover:text-orange transition-colors">info@edstream.io</a>.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-8" className="text-2xl font-bold text-blue mb-6">8. Controls For Do-Not-Track Features</h2>
            <p className="text-gray-600 mb-4">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
            </p>
            <p className="text-gray-600">
              California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-9" className="text-2xl font-bold text-blue mb-6">9. Do United States Residents Have Specific Privacy Rights?</h2>
            <p className="text-gray-600 mb-6"><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-4">Categories of Personal Information We Collect</h3>
              <p className="text-gray-600 mb-4">We have collected the following categories of personal information in the past twelve (12) months:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Examples</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">A. Identifiers</td>
                      <td className="border border-gray-300 p-3">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">B. Personal information as defined in the California Customer Records statute</td>
                      <td className="border border-gray-300 p-3">Name, contact information, education, employment, employment history, and financial information</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">C. Protected classification characteristics under state or federal law</td>
                      <td className="border border-gray-300 p-3">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">D. Commercial information</td>
                      <td className="border border-gray-300 p-3">Transaction information, purchase history, financial details, and payment information</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">E. Biometric information</td>
                      <td className="border border-gray-300 p-3">Fingerprints and voiceprints</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">F. Internet or other similar network activity</td>
                      <td className="border border-gray-300 p-3">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">G. Geolocation data</td>
                      <td className="border border-gray-300 p-3">Device location</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">H. Audio, electronic, sensory, or similar information</td>
                      <td className="border border-gray-300 p-3">Images and audio, video or call recordings created in connection with our business activities</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">I. Professional or employment-related information</td>
                      <td className="border border-gray-300 p-3">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">J. Education Information</td>
                      <td className="border border-gray-300 p-3">Student records and directory information</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">YES</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">K. Inferences drawn from collected personal information</td>
                      <td className="border border-gray-300 p-3">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">NO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">L. Sensitive personal Information</td>
                      <td className="border border-gray-300 p-3">Account login information</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">YES</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-600 mt-4 mb-4">
                We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.
              </p>
              
              <p className="text-gray-600 mb-2">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
              
              <p className="text-gray-600 mb-2">We will use and retain the collected personal information as needed to provide the Services or for:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Category A - As long as the user has an account with us</li>
                <li>Category B - As long as the user has an account with us</li>
                <li>Category F - As long as the user has an account with us</li>
                <li>Category H - As long as the user has an account with us</li>
                <li>Category J - As long as the user has an account with us</li>
                <li>Category L - As long as the user has an account with us</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Sources of Personal Information</h3>
              <p className="text-gray-600">Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">How We Use and Share Personal Information</h3>
              <p className="text-gray-600">Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Will your information be shared with anyone else?</h3>
              <p className="text-gray-600 mb-4">
                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
              </p>
              <p className="text-gray-600 mb-4">
                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
              </p>
              <p className="text-gray-600">
                We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months: The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Your Rights</h3>
              <p className="text-gray-600 mb-4">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Right to know whether or not we are processing your personal data</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request the deletion of your personal data</li>
                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                <li>Right to non-discrimination for exercising your rights</li>
                <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
              </ul>
              <p className="text-gray-600 mb-2">Depending upon the state where you live, you may also have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</li>
                <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Oregon's privacy law)</li>
                <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California's privacy law)</li>
                <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida's privacy law)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">How to Exercise Your Rights</h3>
              <p className="text-gray-600 mb-4">
                To exercise these rights, you can contact us by emailing us at <a href="mailto:info@edstream.io" className="text-blue hover:text-orange transition-colors">info@edstream.io</a>, or by referring to the contact details at the bottom of this document.
              </p>
              <p className="text-gray-600">
                Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue mb-3">Request Verification</h3>
              <p className="text-gray-600 mb-4">
                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
              </p>
              <p className="text-gray-600">
                If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue mb-3">California "Shine The Light" Law</h3>
              <p className="text-gray-600">
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-10" className="text-2xl font-bold text-blue mb-6">10. Do We Make Updates To This Notice?</h2>
            <p className="text-gray-600 mb-4"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p className="text-gray-600">
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 id="section-11" className="text-2xl font-bold text-blue mb-6">11. How Can You Contact Us About This Notice?</h2>
            <p className="text-gray-600">
              If you have questions or comments about this notice, you may email us at <a href="mailto:info@edstream.io" className="text-blue hover:text-orange transition-colors">info@edstream.io</a>.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 id="section-12" className="text-2xl font-bold text-blue mb-6">12. How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
            <p className="text-gray-600">
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request on the above contact email. We will respond to your request within 30 days.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
