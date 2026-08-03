import React from 'react';
import { BookIcon, CodeIcon, FileTextIcon, TerminalIcon, DatabaseIcon, Settings01Icon, BookOpen01Icon, FileCodeIcon, LightningIcon, Shield01Icon, GlobeIcon } from 'hugeicons-react';

// Documentation sections data
export const DOCUMENTATION_SECTIONS = [
  { id: 'getting-started', title: 'Getting Started', icon: <BookIcon className="w-5 h-5" /> },
  { id: 'authentication', title: 'Authentication', icon: <Shield01Icon className="w-5 h-5" /> },
  { id: 'messaging', title: 'Messaging', icon: <FileTextIcon className="w-5 h-5" /> },
  { id: 'webhooks', title: 'Webhooks', icon: <LightningIcon className="w-5 h-5" /> },
  { id: 'analytics', title: 'Analytics', icon: <DatabaseIcon className="w-5 h-5" /> },
  { id: 'sdk', title: 'SDKs & Libraries', icon: <CodeIcon className="w-5 h-5" /> },
  { id: 'api-reference', title: 'API Reference', icon: <TerminalIcon className="w-5 h-5" /> },
  { id: 'configuration', title: 'Configuration', icon: <Settings01Icon className="w-5 h-5" /> }
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
    icon: <BookOpen01Icon className="w-6 h-6" />,
    title: "API Reference",
    description: "Comprehensive documentation for all API endpoints",
    color: "blue",
    link: "/api-reference"
  },
  {
    icon: <FileCodeIcon className="w-6 h-6" />,
    title: "Code Examples",
    description: "Ready-to-use code examples in multiple languages",
    color: "purple",
    link: "/docs/examples"
  },
  {
    icon: <GlobeIcon className="w-6 h-6" />,
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