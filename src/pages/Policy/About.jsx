import React from 'react';
import { Code2, GraduationCap, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../../components/ui/AnimatedBackground';

const About = () => {
  const skills = [
    'React.js',
    'JavaScript',
    'Node.js',
    'Python',
    'Java',
    'SQL',
    'Git',
    'REST APIs',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Next.js'
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
      title: "Developer-First Approach",
      description: "Creating tools and solutions that make developers' lives easier and more productive."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
      title: "Continuous Learning",
      description: "As a BTech CSE student, I'm constantly learning and applying new technologies to solve real-world problems."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
      title: "Innovation Focus",
      description: "Developing innovative solutions that address common challenges in software development."
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
      title: "Future-Ready",
      description: "Building scalable and maintainable solutions that can grow with the evolving tech landscape."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">
            About Me
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A passionate developer crafting solutions for developers
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
          >
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Who I Am</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
              I am a BTech CSE student from Rajasthan, India, with a passion for creating innovative solutions
              that empower developers. My journey in technology is driven by the desire to build tools and
              platforms that make software development more efficient and enjoyable.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Currently pursuing my degree, I combine academic knowledge with practical experience to develop
              projects that address real-world challenges in the developer community.
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
          >
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700/50 text-neutral-800 dark:text-neutral-300 rounded-full text-sm border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -5 }}
          className="bg-neutral-100 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all mb-16"
        >
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">My Vision</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            As a developer and student, I believe in the power of technology to transform lives and businesses.
            My goal is to contribute to the developer community by creating tools and solutions that make
            software development more accessible, efficient, and enjoyable. Through continuous learning and
            innovation, I aim to build a portfolio of projects that demonstrate the potential of technology
            to solve real-world problems.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-lg">
            Interested in collaborating or learning more about my projects?
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;