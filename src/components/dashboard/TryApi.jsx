import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import ApiContext from '../../context/apiContext';
import { useContext } from 'react';
import useMessageCard from '../../hooks/useMessageCard';
import MessageCard from '../Card/MessageCard';

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

const TryApi = () => {
  const { value } = useContext(ApiContext);
  const { message: messageCard, showMessage, setMessage: setMessageState } = useMessageCard();
  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const [activeTab, setActiveTab] = useState('code');
  const [messageText, setMessageText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showMessage("Copied", "Code copied to clipboard", "success");
  };

  const handleNoCodeTest = () => {
    showMessage("Coming Soon", "No-Code testing feature will be available soon!", "info");
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    if (country.code !== '+91') {
      showMessage(
        "Service Limited", 
        "Currently, our service is only available in India. Please select India (+91) to continue.", 
        "warning"
      );
      // Reset to India after showing warning
      setTimeout(() => {
        setSelectedCountry(countryCodes[0]);
      }, 1000);
    } else {
      showMessage(
        "Country Selected", 
        "India (+91) selected. You can proceed with sending messages.", 
        "success"
      );
    }
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) {
      showMessage("Error", "Please enter a message", "error");
      return;
    }
    if (!phoneNumber.trim()) {
      showMessage("Error", "Please enter a phone number", "error");
      return;
    }
    showMessage("Success", "Message sent successfully!", "success");
    setMessageText('');
    setPhoneNumber('');
  };

  const codeSamples = {
    javascript: `const axios = require('axios');

// Your API key
const apiKey = "YOUR_API_KEY";

// Send message
async function sendMessage(message, phoneNumber) {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://api.example.com/messages',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
      },
      data: {
        message: "${messageText}",
        phoneNumber: "${selectedCountry.code}${phoneNumber}"
      }
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Example usage
sendMessage("Hello, this is a test message!", "${phoneNumber}");`,

    python: `import requests

# Your API key
api_key = "YOUR_API_KEY"

# Send message
def send_message(message, phone_number):
    try:
        response = requests.post(
            'https://api.example.com/messages',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json'
            },
            json={
                'message': "${messageText}",
                'phoneNumber': "${selectedCountry.code}${phoneNumber}"
            }
        )
        
        print('Response:', response.json())
    except Exception as e:
        print('Error:', str(e))

# Example usage
send_message("Hello, this is a test message!", "${phoneNumber}")`,

    curl: `curl -X POST \\
  'https://api.example.com/messages' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{"message": "${messageText}", "phoneNumber": "${selectedCountry.code}${phoneNumber}"}'`,

    java: `import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.net.http.HttpRequest.BodyPublishers;
import com.google.gson.Gson;

public class ApiClient {
    private static final String API_KEY = "YOUR_API_KEY";
    private static final Gson gson = new Gson();
    
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        // Create message object
        Message message = new Message("${messageText}", "${selectedCountry.code}${phoneNumber}");
        String jsonBody = gson.toJson(message);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/messages"))
            .header("Authorization", "Bearer " + API_KEY)
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(jsonBody))
            .build();
            
        try {
            HttpResponse<String> response = client.send(request, 
                HttpResponse.BodyHandlers.ofString());
            System.out.println("Response: " + response.body());
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}

class Message {
    private String message;
    private String phoneNumber;
    
    public Message(String message, String phoneNumber) {
        this.message = message;
        this.phoneNumber = phoneNumber;
    }
}`
  };

  return (
    <div className="p-6">
      {messageCard && (
        <MessageCard
          title={messageCard.title}
          message={messageCard.message}
          type={messageCard.type}
          onClose={() => setMessageState(null)}
        />
      )}
      
      <h1 className="text-2xl font-bold mb-4 text-gray-200">Try API</h1>
      <p className="mb-4 text-gray-300">Test our message sending API with sample requests.</p>
      
      {/* API Key Selection */}
      <div className="bg-[#282729] p-4 rounded mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">Select API Key</h2>
        <select className="w-full p-2 border rounded text-gray-200 bg-[#18181a] border-[#7170709a]">
          {value?.apis.map((item, index) => (
            <option key={index} value={item.keyId}>
              {item.keyId} - {item.secretKey.substring(0, 8)}...
            </option>
          ))}
        </select>
      </div>

      {/* Test Options and Code Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side - Test Options */}
        <div>
          <div className="bg-[#282729] p-4 rounded mb-4">
            <div className="flex border-b border-[#7170709a] mb-4">
              <button 
                className={`py-2 px-4 ${activeTab === 'code' ? 'text-white bg-[#18181a]' : 'text-gray-400 hover:text-white'} rounded-t`}
                onClick={() => setActiveTab('code')}
              >
                Test with Code
              </button>
              <button 
                className={`py-2 px-4 ${activeTab === 'nocode' ? 'text-white bg-[#18181a]' : 'text-gray-400 hover:text-white'} rounded-t`}
                onClick={handleNoCodeTest}
              >
                No-Code Test
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-300">Phone Number</label>
              <div className="flex gap-2">
                <select 
                  className="w-24 p-2 border rounded text-gray-200 bg-[#18181a] border-[#7170709a]"
                  value={selectedCountry.code}
                  onChange={(e) => handleCountryChange(countryCodes.find(c => c.code === e.target.value))}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  className="flex-1 p-2 border rounded text-gray-200 bg-[#18181a] border-[#7170709a]"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
              <textarea
                className="w-full h-40 p-2 border rounded font-mono text-sm bg-[#18181a] text-gray-200 border-[#7170709a]"
                placeholder="Enter your message here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
            </div>
            
            <button 
              className="bg-[#18181a] hover:bg-[#7170709a] text-white px-4 py-2 rounded"
              onClick={handleSendMessage}
            >
              Send Message
            </button>
          </div>
        </div>
        
        {/* Right Side - Code Samples */}
        <div>
          <div className="bg-[#282729] p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-2">
                <button 
                  className={`${activeLanguage === 'javascript' ? 'bg-[#18181a] text-white' : 'text-gray-400 hover:text-white'} px-3 py-1 rounded text-sm`}
                  onClick={() => setActiveLanguage('javascript')}
                >
                  JavaScript
                </button>
                <button 
                  className={`${activeLanguage === 'python' ? 'bg-[#18181a] text-white' : 'text-gray-400 hover:text-white'} px-3 py-1 rounded text-sm`}
                  onClick={() => setActiveLanguage('python')}
                >
                  Python
                </button>
                <button 
                  className={`${activeLanguage === 'curl' ? 'bg-[#18181a] text-white' : 'text-gray-400 hover:text-white'} px-3 py-1 rounded text-sm`}
                  onClick={() => setActiveLanguage('curl')}
                >
                  cURL
                </button>
                <button 
                  className={`${activeLanguage === 'java' ? 'bg-[#18181a] text-white' : 'text-gray-400 hover:text-white'} px-3 py-1 rounded text-sm`}
                  onClick={() => setActiveLanguage('java')}
                >
                  Java
                </button>
              </div>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={() => handleCopy(codeSamples[activeLanguage])}
              >
                <Copy size={16} />
              </button>
            </div>
            
            {/* Terminal-like code display */}
            <div className="bg-[#18181a] rounded-lg p-2 border border-[#7170709a]">
              <div className="flex items-center p-2 border-b border-[#7170709a] mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-400 text-sm">sample-code.{activeLanguage === 'javascript' ? 'js' : activeLanguage === 'python' ? 'py' : activeLanguage === 'java' ? 'java' : 'sh'}</span>
              </div>
              <pre className="text-gray-200 font-mono text-sm overflow-auto p-2 h-56">
                {codeSamples[activeLanguage]}
              </pre>
            </div>
            
            {/* Response Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Response</h3>
              <div className="bg-[#18181a] p-3 rounded border border-[#7170709a] h-40 overflow-auto">
                <pre className="text-gray-200 font-mono text-sm">
                  {`{
  "status": 200,
  "message": "Message sent successfully",
  "data": {
    "id": "msg_123",
    "content": "${messageText}",
    "phoneNumber": "${selectedCountry.code}${phoneNumber}",
    "timestamp": "2024-03-21T10:30:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryApi; 