import React from 'react';
import { ChevronDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">
          Manjunadha Reddy
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-400 animate-fade-in-delayed">
        Welcome to my portfolio website! I'm a passionate developer .
        </h2>
        {/* <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 animate-fade-in-delayed-more">
          Passionate about creating elegant solutions to complex problems. Specializing in web development and cloud technologies.
        </p> */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View My Work
          </button>
          <a 
            href="/MR_RESUME.pdf" 
            download
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
