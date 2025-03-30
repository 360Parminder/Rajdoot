import React from 'react';
import { Code2, GraduationCap, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    'React.js',
    'JavaScript',
    'Node.js',
    'Python',
    'Java',
    'SQL',
    'Git',
    'REST APIs'
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Developer-First Approach",
      description: "Creating tools and solutions that make developers' lives easier and more productive."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "As a BTech CSE student, I'm constantly learning and applying new technologies to solve real-world problems."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Developing innovative solutions that address common challenges in software development."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Future-Ready",
      description: "Building scalable and maintainable solutions that can grow with the evolving tech landscape."
    }
  ];

  return (
    <div className="min-h-screen bg-[#18181a] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">About Me</h1>
          <p className="text-xl text-gray-400">
            A passionate developer crafting solutions for developers
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Introduction */}
          <div className="bg-[#282729] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I am a BTech CSE student from Rajasthan, India, with a passion for creating innovative solutions
              that empower developers. My journey in technology is driven by the desire to build tools and
              platforms that make software development more efficient and enjoyable.
            </p>
            <p className="text-gray-300">
              Currently pursuing my degree, I combine academic knowledge with practical experience to develop
              projects that address real-world challenges in the developer community. My focus is on creating
              scalable, maintainable, and user-friendly solutions that can make a difference.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-[#282729] rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#18181a] text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#282729] rounded-lg p-6">
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-[#282729] rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">My Vision</h2>
          <p className="text-gray-300">
            As a developer and student, I believe in the power of technology to transform lives and businesses.
            My goal is to contribute to the developer community by creating tools and solutions that make
            software development more accessible, efficient, and enjoyable. Through continuous learning and
            innovation, I aim to build a portfolio of projects that demonstrate the potential of technology
            to solve real-world problems.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Interested in collaborating or learning more about my projects?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 