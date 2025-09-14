import React, { useState, useContext } from 'react';
import { Copy, Send, Terminal, Code, Smartphone, ChevronDown, Check, Key } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../Card/MessageCard';
import { motion, AnimatePresence } from 'framer-motion';
import useApi from '../../hooks/useApi';

const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' }
];

const OTPVerification = () => {
    const { value } = useContext(ApiContext);
    const { post, loading } = useApi();
    const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();
    const [activeLanguage, setActiveLanguage] = useState('javascript');
    const [activeTab, setActiveTab] = useState('code');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [copied, setCopied] = useState(null);
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
        showMessage("Copied", `${type} copied to clipboard`, "success");
    };

    const handleNoCodeTest = () => {
        showMessage("Coming Soon", "No-Code testing feature will be available soon!", "info");
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setIsCountryDropdownOpen(false);
        if (country.code !== '+91') {
            showMessage(
                "Service Limited",
                "Currently, our service is only available in India. Please select India (+91) to continue.",
                "warning"
            );
            setTimeout(() => {
                setSelectedCountry(countryCodes[0]);
            }, 1000);
        }
    };

    const handleSendOTP = async () => {
        if (!phoneNumber.trim()) {
            showMessage("Info", "Please enter a phone number", "info");
            return;
        }

        try {
            const { data } = await post('/messages/send-otp', {
                recipient: `${phoneNumber}`,
                otp_length: 6,
            },
                {
                    headers: {
                        'x-api-id': value?.apis[0]?.keyId,
                        'x-api-key': value?.apis[0]?.secretKey,
                    }
                }
            );

            if (data.error) {
                showMessage("Error", data.error.message, "error");
                return;
            }
            if (data.status !== 'success') {
                showMessage("Error", "Failed to send OTP", "error");
                return;
            }
            showMessage("Success", "OTP sent successfully!", "success");
            setShowOtpInput(true);
        } catch (error) {
            console.error("Error sending OTP:", error);
            showMessage("Error", "Failed to send OTP", "error");
            if (error.response) {
                showMessage("Error", error.response.data.message, "error");
            } else {
                showMessage("Error", "Network error", "error");
            }
        }
    };

    const handleVerifyOTP = async () => {
        if (!otp.trim()) {
            showMessage("Info", "Please enter the OTP", "info");
            return;
        }

        try {
            const { data } = await post('/messages/verify-otp', {
                recipient: `${phoneNumber}`,
                otp: otp,
            },
                {
                    headers: {
                        'x-api-id': value?.apis[0]?.keyId,
                        'x-api-key': value?.apis[0]?.secretKey,
                    }
                }
            );

            if (data.error) {
                showMessage("Error", data.error.message, "error");
                return;
            }
            if (data.status !== 'success') {
                showMessage("Error", "Failed to verify OTP", "error");
                return;
            }
            showMessage("Success", "OTP verified successfully!", "success");
            setOtp('');
            setShowOtpInput(false);
        } catch (error) {
            console.error("Error verifying OTP:", error);
            showMessage("Error", "Failed to verify OTP", "error");
            if (error.response) {
                showMessage("Error", error.response.data.message, "error");
            } else {
                showMessage("Error", "Network error", "error");
            }
        }
    };

    const codeSamples = {
        javascript: `const axios = require('axios');

const apiKey = "${value?.apis[0]?.secretKey || 'YOUR_API_KEY'}";

async function sendOTP() {
  try {
    const response = await axios.post(
      'https://api.rajdoot.wtf/api/v1/messages/sendOtp',
      {
        recipient: "${phoneNumber}",
        otp_length: 6
      },
      {
        headers: {
          'x-api-id': '${value?.apis[0]?.keyId}',
          'x-api-key': '${value?.apis[0]?.secretKey}',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('OTP sent:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

async function verifyOTP() {
  try {
    const response = await axios.post(
      'https://api.rajdoot.wtf/api/v1/messages/verifyOtp',
      {
        recipient: "${phoneNumber}",
        otp: "${otp}"
      },
      {
        headers: {
          'x-api-id': '${value?.apis[0]?.keyId}',
          'x-api-key': '${value?.apis[0]?.secretKey}',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('OTP verified:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}`,

        python: `import requests

api_key = "${value?.apis[0]?.secretKey || 'YOUR_API_KEY'}"

def send_otp():
    try:
        response = requests.post(
            'https://api.example.com/messages/sendOtp',
            json={
                'recipient': "${phoneNumber}",
                'otp_length': 6
            },
            headers={
                'x-api-id': '${value?.apis[0]?.keyId}',
                'x-api-key': '${value?.apis[0]?.secretKey}',
                'Content-Type': 'application/json'
            }
        )
        print('OTP sent:', response.json())
    except Exception as e:
        print('Error:', str(e))

def verify_otp():
    try:
        response = requests.post(
            'https://api.example.com/otp/verify',
            json={
                'recipient': "${phoneNumber}",
                'otp': "${otp}"
            },
            headers={
                'x-api-id': '${value?.apis[0]?.keyId}',
                'x-api-key': '${value?.apis[0]?.secretKey}',
                'Content-Type': 'application/json'
            }
        )
        print('OTP verified:', response.json())
    except Exception as e:
        print('Error:', str(e))`,

        curl: `# Send OTP
curl -X POST \\
  'https://api.example.com/otp/send' \\
  -H 'x-api-id: ${value?.apis[0]?.keyId}' \\
  -H 'x-api-key: ${value?.apis[0]?.secretKey || 'YOUR_API_KEY'}' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "phoneNumber": "${selectedCountry.code}${phoneNumber}"
  }'

# Verify OTP
curl -X POST \\
  'https://api.example.com/otp/verify' \\
  -H 'x-api-id: ${value?.apis[0]?.keyId}' \\
  -H 'x-api-key: ${value?.apis[0]?.secretKey || 'YOUR_API_KEY'}' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "phoneNumber": "${selectedCountry.code}${phoneNumber}",
    "otp": "${otp}"
  }'`,

        java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class OTPVerification {
    private static final String API_KEY = "${value?.apis[0]?.secretKey || 'YOUR_API_KEY'}";
    private static final String API_ID = "${value?.apis[0]?.keyId}";

    public static void sendOTP() {
        String jsonBody = String.format(
            "{\\"phoneNumber\\":\\"%s\\"}",
            "${selectedCountry.code}${phoneNumber}"
        );

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/otp/send"))
            .header("x-api-id", API_ID)
            .header("x-api-key", API_KEY)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();

        try {
            HttpResponse<String> response = client.send(
                request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Response: " + response.body());
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    public static void verifyOTP() {
        String jsonBody = String.format(
            "{\\"phoneNumber\\":\\"%s\\",\\"otp\\":\\"%s\\"}",
            "${selectedCountry.code}${phoneNumber}",
            "${otp}"
        );

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/otp/verify"))
            .header("x-api-id", API_ID)
            .header("x-api-key", API_KEY)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();

        try {
            HttpResponse<String> response = client.send(
                request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Response: " + response.body());
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}`
    };

    return (
        <div className="p-6 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen">
            <AnimatePresence>
                {messageCard && (
                    <MessageCard
                        title={messageCard.title}
                        message={messageCard.message}
                        type={messageCard.type}
                        onClose={() => setMessageState(null)}
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                    OTP Verification Console
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
                    Test our OTP verification API with real requests and get sample code for your integration.
                </p>
            </motion.div>

            {/* API Key Selection */}
            <div className="bg-white dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
                    <Key className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    Select API Key
                </h2>
                <select
                    className="w-full bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2.5 px-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
                >
                    {value?.apis?.length > 0 ? (
                        value.apis.map((item, index) => (
                            <option key={index} value={item.keyId}>
                                {item.name || 'Unnamed API'} - {item.keyId}
                            </option>
                        ))
                    ) : (
                        <option value="" disabled>No API keys available</option>
                    )}
                </select>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Side - Test Panel */}
                <div className="bg-white dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
                    <div className="flex border-b border-neutral-200 dark:border-neutral-700 mb-6">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'code' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
                            onClick={() => setActiveTab('code')}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Code className="w-5 h-5" />
                                <span>Code Testing</span>
                            </div>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'nocode' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
                            onClick={handleNoCodeTest}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Smartphone className="w-5 h-5" />
                                <span>No-Code Test</span>
                            </div>
                        </motion.button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                                Phone Number
                            </label>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <button
                                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                        className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2.5 px-4 text-neutral-900 dark:text-neutral-100 w-32"
                                    >
                                        <span>{selectedCountry.flag}</span>
                                        <span>{selectedCountry.code}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isCountryDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute z-10 mt-1 w-full bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-lg overflow-hidden"
                                            >
                                                {countryCodes.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        onClick={() => handleCountryChange(country)}
                                                        className={`w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors flex items-center gap-2 ${selectedCountry.code === country.code ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-neutral-800 dark:text-neutral-300'
                                                            }`}
                                                    >
                                                        <span>{country.flag}</span>
                                                        <span className="flex-1">{country.country}</span>
                                                        <span>{country.code}</span>
                                                        {selectedCountry.code === country.code && (
                                                            <Check className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <input
                                    type="tel"
                                    className="flex-1 bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2.5 px-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                />
                            </div>
                        </div>

                        {showOtpInput && (
                            <div>
                                <label className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-2">
                                    OTP
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg py-2.5 px-4 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                />
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={showOtpInput ? handleVerifyOTP : handleSendOTP}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all"
                        >
                            <Send className="w-5 h-5" />
                            <span>{showOtpInput ? 'Verify OTP' : 'Send OTP'}</span>
                        </motion.button>
                    </div>
                </div>

                {/* Right Side - Code Samples */}
                <div className="bg-white dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                            Code Samples
                        </h2>
                        <div className="flex gap-1">
                            {['javascript', 'python', 'curl', 'java'].map((lang) => (
                                <motion.button
                                    key={lang}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveLanguage(lang)}
                                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeLanguage === lang
                                        ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700'
                                        : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                                        }`}
                                >
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Code Display */}
                    <div className="bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-neutral-200 dark:bg-neutral-700 border-b border-neutral-300 dark:border-neutral-600">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-xs text-neutral-600 dark:text-neutral-400 ml-2">
                                    sample.{activeLanguage === 'javascript' ? 'js' : activeLanguage === 'python' ? 'py' : activeLanguage === 'java' ? 'java' : 'sh'}
                                </span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleCopy(codeSamples[activeLanguage], 'Code sample')}
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 p-1 rounded"
                                aria-label="Copy code"
                            >
                                <Copy className="w-4 h-4" />
                            </motion.button>
                        </div>
                        <pre className="p-4 overflow-auto max-h-80 text-neutral-900 dark:text-neutral-100 font-mono text-sm bg-white dark:bg-neutral-800">
                            {codeSamples[activeLanguage]}
                        </pre>
                    </div>

                    {/* Response Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">Expected Response</h3>
                        <div className="bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-300 dark:border-neutral-600 rounded-lg overflow-hidden">
                            <div className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 border-b border-neutral-300 dark:border-neutral-600 text-sm text-neutral-600 dark:text-neutral-400">
                                Response
                            </div>
                            <pre className="p-4 overflow-auto max-h-40 text-neutral-900 dark:text-neutral-100 font-mono text-sm bg-white dark:bg-neutral-800">
                                {`{
    "status": "success",
    "message": "OTP sent successfully",
    "data": {
        "user": "67f24dee1a02d058c655ac88",
        "phoneNumber": "+9194614868xx",
        "apiId": "d8b570ed27f87a4208ae1bbf58cc7906",
        "expiresAt": "2025-04-27T12:47:18.749Z"
    }
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;