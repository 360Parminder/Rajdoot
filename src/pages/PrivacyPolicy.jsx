import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                    <h1 className="text-center text-3xl font-bold mb-6">Privacy Policy</h1>
                    
                    <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
                        <p>
                            Welcome to Rajdoot. This Privacy Policy explains how we collect, use, disclose, and 
                            safeguard your information when you use our services. We respect your privacy and are 
                            committed to protecting your personal data. Please read this privacy policy carefully.
                        </p>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                        <p className="mb-2">We may collect information that you provide directly to us, including:</p>
                        <ul className="list-disc ml-6 mb-4">
                            <li>Personal information (name, email address, phone number)</li>
                            <li>Account information</li>
                            <li>Transaction information</li>
                            <li>User content you provide through our services</li>
                        </ul>
                        
                        <p className="mb-2">Additionally, we may automatically collect certain information when you use our services:</p>
                        <ul className="list-disc ml-6">
                            <li>Device information (IP address, browser type, operating system)</li>
                            <li>Usage data</li>
                            <li>Cookies and similar technologies</li>
                        </ul>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
                        <p className="mb-2">We may use the information we collect for various purposes, including to:</p>
                        <ul className="list-disc ml-6">
                            <li>Provide and maintain our services</li>
                            <li>Improve our services and develop new features</li>
                            <li>Process transactions</li>
                            <li>Send notifications and updates</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Monitor and analyze usage patterns</li>
                            <li>Protect against fraudulent or illegal activity</li>
                        </ul>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Sharing Your Information</h2>
                        <p className="mb-2">We may share your information with:</p>
                        <ul className="list-disc ml-6">
                            <li>Service providers who perform services on our behalf</li>
                            <li>Business partners with your consent</li>
                            <li>Legal authorities when required by law</li>
                            <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                        </ul>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information. 
                            However, no method of transmission over the Internet or electronic storage is 100% 
                            secure, and we cannot guarantee absolute security.
                        </p>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal 
                            information, such as the right to access, correct, delete, or restrict processing 
                            of your data. To exercise these rights, please contact us.
                        </p>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes 
                            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>
                    
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p className="mb-2">
                            If you have questions or concerns about this Privacy Policy, please contact us at:
                        </p>
                        <p>
                            Email: 360.parminder@gmail.com<br />
                            Rajdoot<br />
                            Owner: Parminder Singh<br />
                            Developer: Parminder Singh<br />
                            Alwar, Rajasthan, India
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
