import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-8">
            <div className=" mx-auto px-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
                    
                    <p className="mb-6">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>
                    
                    <h2 className="text-xl font-semibold mt-8 mb-3">What are cookies?</h2>
                    <p className="mb-4">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                    </p>
                    
                    <h2 className="text-xl font-semibold mt-8 mb-3">How we use cookies</h2>
                    <p className="mb-2">
                        We use cookies for several reasons, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">
                            Essential cookies: These cookies are necessary for the website to function properly.
                        </li>
                        <li className="mb-2">
                            Preference cookies: These cookies remember your preferences and settings.
                        </li>
                        <li className="mb-2">
                            Analytics cookies: These cookies help us understand how visitors interact with our website.
                        </li>
                        <li className="mb-2">
                            Marketing cookies: These cookies are used to track visitors across websites to display relevant advertisements.
                        </li>
                    </ul>
                    
                    <h2 className="text-xl font-semibold mt-8 mb-3">Types of cookies we use</h2>
                    <p className="mb-2">
                        <strong>First-party cookies:</strong> These are cookies that are set by our website.
                    </p>
                    <p className="mb-4">
                        <strong>Third-party cookies:</strong> These are cookies set by someone other than us when you visit our website.
                    </p>
                    
                    <h2 className="text-xl font-semibold mt-8 mb-3">Managing cookies</h2>
                    <p className="mb-2">
                        Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The following links show how to adjust cookie settings in some popular browsers:
                    </p>
                    <ul className="mb-4">
                        <li className="mb-1">
                            <a href="https://support.google.com/chrome/answer/95647" className="text-blue-300 hover:text-blue-400">Google Chrome</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-300 hover:text-blue-400">Mozilla Firefox</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-blue-300 hover:text-blue-400">Microsoft Edge</a>
                        </li>
                        <li className="mb-1">
                            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-300 hover:text-blue-400">Apple Safari</a>
                        </li>
                    </ul>
                    
                    <h2 className="text-xl font-semibold mt-8 mb-3">Changes to our Cookie Policy</h2>
                    <p className="mb-4">
                        We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
                    </p>
                    
                    <h2 className="text-xl font-semibold mt-8 mb-3">Contact us</h2>
                    <p className="mb-2">
                        If you have any questions about our Cookie Policy, please contact us at:
                    </p>
                    <p className="mb-4">
                        Email: 360.parminder@gmail.com<br />
                        Address: Rajdoot, Alwar, Rajasthan, India
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
