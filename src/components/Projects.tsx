import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Doctor on Board",
    description: "Doctor-on-board is a Java-based application designed to provide healthcare solutions. This project aims to streamline access to medical information and services, ensuring users can get immediate assistance and resources when needed.",
    image: "/doctor.jpeg",
    tags: ["Java"],
    githubLink: "https://github.com/Reddy2605/Doctor-on-board",
    // liveLink: "#"
  },
  {
    id: 2,
    title: " TANGEDCO Employee Email Database Management System",
    description: "The Employee Email Database Management System was developed and deployed for Tamil Nadu Generation and Distribution Corporation (TANGEDCO) under the Tamil Nadu Electricity Board (TNEB) to streamline and enhance the management of employee email records.",
    image: "/tangedco.jpg",
    tags: ["PHP", "SQL","RBAC","Encryption"],
    githubLink: "https://drive.google.com/file/d/12mQbsE6_noDfkMcKDHVhnoFBEMH5j-5E/view",
    // liveLink: "#"
  },
  {
    id: 3,
    title: "Simon Say Game",
    description: " The Simon Say Game is a classic memory-based game where players need to replicate a sequence of colors or sounds shown by the computer. With each successful round, the sequence becomes increasingly challenging, testing the player's memory and reflexes.",
    image: "/simon.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Reddy2605/Simon-Say-Game/tree/main",
    // liveLink: "#"
  },
  {
    id: 4,
    title: "Image Quilting",
    description: "Image quilting is a computer vision technique that involves generating a new image by combining patches from a set of source images. This technique is often used in image editing and computer graphics to create new images or modify existing ones.",
    image: "/imagess.jpeg",
    tags: ["Python","Node.js","HTML","CSS","JWT","MongoDB","Git","Javascript","Hugging Face API"],
    githubLink: "https://github.com/Reddy2605/Image-Quilting",
    // liveLink: "#"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter)) 
    : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filter === null 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:transform hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      Code
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;