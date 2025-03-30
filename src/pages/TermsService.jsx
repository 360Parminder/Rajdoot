import React from 'react';
// import ScrollToTop from '../components/Common/ScrollToTop';

const TermsService = () => {
    return (
        <div className="min-h-screen bg-[#18181a] p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-200 mb-6 text-center">Terms of Service</h1>
                
                <p className="text-gray-400 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">1. Introduction</h2>
                        <p className="text-gray-300">
                            Welcome to Rajdoot ("Company", "we", "our", "us"). By accessing or using our website, 
                            services, applications, or any other content provided by Rajdoot (collectively, the "Services"), 
                            you agree to be bound by these Terms of Service.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">2. Acceptance of Terms</h2>
                        <p className="text-gray-300">
                            By accessing or using our Services, you agree to these Terms of Service and our Privacy Policy. 
                            If you do not agree to these Terms, you may not access or use our Services.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">3. Changes to Terms</h2>
                        <p className="text-gray-300">
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                            upon posting on our website. Your continued use of our Services after any changes indicates 
                            your acceptance of the modified Terms.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">4. User Accounts</h2>
                        <p className="text-gray-300">
                            Some features of our Services may require registration. You agree to provide accurate 
                            information and to keep it updated. You are responsible for maintaining the confidentiality 
                            of your account credentials and for all activities under your account.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">5. Intellectual Property</h2>
                        <p className="text-gray-300">
                            Our Services and all content, including but not limited to text, graphics, logos, icons, 
                            images, audio clips, software, and other materials are owned by Rajdoot and protected by 
                            copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">6. User Content</h2>
                        <p className="text-gray-300">
                            By submitting content to our Services, you grant us a worldwide, non-exclusive, 
                            royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute 
                            your content in any media. You represent that you have all rights necessary to grant these permissions.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">7. Prohibited Conduct</h2>
                        <p className="text-gray-300">
                            You agree not to: (a) violate any laws; (b) post unauthorized content; (c) use our Services 
                            for illegal purposes; (d) interfere with or disrupt our Services; (e) attempt to access 
                            unauthorized areas; (f) impersonate others; or (g) use our Services for unauthorized advertising.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">8. Termination</h2>
                        <p className="text-gray-300">
                            We may terminate or suspend your access to our Services immediately, without prior notice, 
                            for conduct that we believe violates these Terms or is harmful to other users, us, or 
                            third parties, or for any other reason at our discretion.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">9. Disclaimer of Warranties</h2>
                        <p className="text-gray-300">
                            Our Services are provided "as is" without warranties of any kind, either express or implied. 
                            We do not warrant that our Services will be uninterrupted or error-free.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">10. Limitation of Liability</h2>
                        <p className="text-gray-300">
                            To the maximum extent permitted by law, Rajdoot shall not be liable for any indirect, 
                            incidental, special, consequential, or punitive damages resulting from your use of or 
                            inability to use our Services.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">11. Governing Law</h2>
                        <p className="text-gray-300">
                            These Terms shall be governed by the laws of India, without regard to its conflict of law 
                            principles. Any disputes arising under these Terms shall be resolved in the courts located 
                            in Alwar, Rajasthan, India.
                        </p>
                    </section>

                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">12. Contact Information</h2>
                        <p className="text-gray-300 mb-4">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="text-gray-300 space-y-2">
                            <p>Rajdoot</p>
                            <p>Attn: Parminder Singh</p>
                            <p>Alwar, Rajasthan, India</p>
                            <p>Email: <a href="mailto:360.parminder@gmail.com" className="text-blue-400 hover:text-blue-300">360.parminder@gmail.com</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsService;
