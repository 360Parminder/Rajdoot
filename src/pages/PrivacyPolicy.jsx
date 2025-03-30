import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#18181a] p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-200 mb-6 text-center">Privacy Policy</h1>
                
                <p className="text-gray-400 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-8">
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Introduction</h2>
                        <p className="text-gray-300">
                            Welcome to Rajdoot. This Privacy Policy explains how we collect, use, disclose, and 
                            safeguard your information when you use our services. We respect your privacy and are 
                            committed to protecting your personal data. Please read this privacy policy carefully.
                        </p>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Information We Collect</h2>
                        <p className="text-gray-300 mb-4">We may collect information that you provide directly to us, including:</p>
                        <ul className="list-disc ml-6 mb-6 text-gray-300 space-y-2">
                            <li>Personal information (name, email address, phone number)</li>
                            <li>Account information</li>
                            <li>Transaction information</li>
                            <li>User content you provide through our services</li>
                        </ul>
                        
                        <p className="text-gray-300 mb-4">Additionally, we may automatically collect certain information when you use our services:</p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-2">
                            <li>Device information (IP address, browser type, operating system)</li>
                            <li>Usage data</li>
                            <li>Cookies and similar technologies</li>
                        </ul>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-300 mb-4">We may use the information we collect for various purposes, including to:</p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-2">
                            <li>Provide and maintain our services</li>
                            <li>Improve our services and develop new features</li>
                            <li>Process transactions</li>
                            <li>Send notifications and updates</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Monitor and analyze usage patterns</li>
                            <li>Protect against fraudulent or illegal activity</li>
                        </ul>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Sharing Your Information</h2>
                        <p className="text-gray-300 mb-4">We may share your information with:</p>
                        <ul className="list-disc ml-6 text-gray-300 space-y-2">
                            <li>Service providers who perform services on our behalf</li>
                            <li>Business partners with your consent</li>
                            <li>Legal authorities when required by law</li>
                            <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                        </ul>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Data Security</h2>
                        <p className="text-gray-300">
                            We implement appropriate security measures to protect your personal information. 
                            However, no method of transmission over the Internet or electronic storage is 100% 
                            secure, and we cannot guarantee absolute security.
                        </p>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Your Rights</h2>
                        <p className="text-gray-300">
                            Depending on your location, you may have certain rights regarding your personal 
                            information, such as the right to access, correct, delete, or restrict processing 
                            of your data. To exercise these rights, please contact us.
                        </p>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-300">
                            We may update our Privacy Policy from time to time. We will notify you of any changes 
                            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>
                    
                    <section className="bg-[#282729] rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Contact Information</h2>
                        <p className="text-gray-300 mb-4">
                            If you have questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <div className="text-gray-300 space-y-2">
                            <p>Email: <a href="mailto:360.parminder@gmail.com" className="text-blue-400 hover:text-blue-300">360.parminder@gmail.com</a></p>
                            <p>Rajdoot</p>
                            <p>Owner: Parminder Singh</p>
                            <p>Developer: Parminder Singh</p>
                            <p>Alwar, Rajasthan, India</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
