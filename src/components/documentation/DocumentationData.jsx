import React from 'react';
import { 
  Book, 
  Code, 
  FileText, 
  Terminal, 
  Database, 
  Settings,
  BookOpen,
  FileCode,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

// Documentation sections data
export const DOCUMENTATION_SECTIONS = [
  { id: 'getting-started', title: 'Getting Started', icon: <Book className="w-5 h-5" /> },
  { id: 'authentication', title: 'Authentication', icon: <Shield className="w-5 h-5" /> },
  { id: 'messaging', title: 'Messaging', icon: <FileText className="w-5 h-5" /> },
  { id: 'webhooks', title: 'Webhooks', icon: <Zap className="w-5 h-5" /> },
  { id: 'analytics', title: 'Analytics', icon: <Database className="w-5 h-5" /> },
  { id: 'sdk', title: 'SDKs & Libraries', icon: <Code className="w-5 h-5" /> },
  { id: 'api-reference', title: 'API Reference', icon: <Terminal className="w-5 h-5" /> },
  { id: 'configuration', title: 'Configuration', icon: <Settings className="w-5 h-5" /> }
];

// Quick start guide data
export const QUICK_START_GUIDE = [
  {
    title: "Installation",
    description: "Install the Rajdoot SDK using npm or yarn",
    code: "npm install @rajdoot/sdk",
    color: "blue"
  },
  {
    title: "Authentication",
    description: "Set up your API key for authentication",
    code: "const raj = new Rajdoot({ apiKey: 'your_api_key' })",
    color: "purple"
  },
  {
    title: "Send a Message",
    description: "Send your first message using the API",
    code: "await raj.messages.send({ to: '+1234567890', text: 'Hello from Rajdoot!' })",
    color: "green"
  }
];

// Resources data
export const RESOURCES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "API Reference",
    description: "Comprehensive documentation for all API endpoints",
    color: "blue",
    link: "/api-reference"
  },
  {
    icon: <FileCode className="w-6 h-6" />,
    title: "Code Examples",
    description: "Ready-to-use code examples in multiple languages",
    color: "purple",
    link: "/docs/examples"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages",
    color: "green",
    link: "/docs/sdk"
  }
];

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}; 