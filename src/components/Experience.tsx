import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "TANGEDCO(TamilNadu Generation And Distribution Corporation Limited)",
    position: "Sofware Engineer Intern",
    duration: "Full Time",
    location: "Chennai, Tamil Nadu",
    description: [
      "Developed a comprehensive Employee Email Database Management System for the Tamil Nadu Electricity Board (TNEB).",
      "Designed and implemented an SQL-based database to securely store and manage employee email information.",
      "Ensured data integrity and security through encryption protocols and access control mechanisms.",
      "Created a user-friendly interface to facilitate efcient data entry and retrieval.",
      "Streamlined internal communication processes by automating notifcations and updates to employees.",
      "Collaborated closely with stakeholders to gather requirements and identify key features for the system."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            My professional journey in the world of software development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{exp.duration}</span>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{exp.location}</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;