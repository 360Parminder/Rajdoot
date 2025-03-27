import React from 'react';
// import ScrollToTop from '../components/Common/ScrollToTop';

const TermsService = () => {
    return (
        <>
            {/* <ScrollToTop /> */}

            <div className="container mx-auto py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Terms of Service</h2>
                        <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h3>
                        <p className="text-gray-700 mb-6">Welcome to Rajdoot ("Company", "we", "our", "us"). By accessing or using our website, services, applications, or any other content provided by Rajdoot (collectively, the "Services"), you agree to be bound by these Terms of Service.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Acceptance of Terms</h3>
                        <p className="text-gray-700 mb-6">By accessing or using our Services, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Changes to Terms</h3>
                        <p className="text-gray-700 mb-6">We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our Services after any changes indicates your acceptance of the modified Terms.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. User Accounts</h3>
                        <p className="text-gray-700 mb-6">Some features of our Services may require registration. You agree to provide accurate information and to keep it updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Intellectual Property</h3>
                        <p className="text-gray-700 mb-6">Our Services and all content, including but not limited to text, graphics, logos, icons, images, audio clips, software, and other materials are owned by Rajdoot and protected by copyright, trademark, and other intellectual property laws.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. User Content</h3>
                        <p className="text-gray-700 mb-6">By submitting content to our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any media. You represent that you have all rights necessary to grant these permissions.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Prohibited Conduct</h3>
                        <p className="text-gray-700 mb-6">You agree not to: (a) violate any laws; (b) post unauthorized content; (c) use our Services for illegal purposes; (d) interfere with or disrupt our Services; (e) attempt to access unauthorized areas; (f) impersonate others; or (g) use our Services for unauthorized advertising.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Termination</h3>
                        <p className="text-gray-700 mb-6">We may terminate or suspend your access to our Services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our discretion.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Disclaimer of Warranties</h3>
                        <p className="text-gray-700 mb-6">Our Services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our Services will be uninterrupted or error-free.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Limitation of Liability</h3>
                        <p className="text-gray-700 mb-6">To the maximum extent permitted by law, Rajdoot shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Services.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. Governing Law</h3>
                        <p className="text-gray-700 mb-6">These Terms shall be governed by the laws of India, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts located in Alwar, Rajasthan, India.</p>

                        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">12. Contact Information</h3>
                        <p className="text-gray-700 mb-2">If you have any questions about these Terms of Service, please contact us at:</p>
                        <div className="text-gray-700 ml-4">
                            <p>Rajdoot</p>
                            <p>Attn: Parminder Singh</p>
                            <p>Alwar, Rajasthan, India</p>
                            <p>Email: 360.parminder@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsService;
