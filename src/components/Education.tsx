import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string[];
}

const educations: Education[] = [
  {
    id: 1,
    institution: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    degree: "B.Tech in Computer Science and Engineering with Specialization in Information Technology ",
    duration: "2022 - 2026",
    location: "Kaatankulathur, Chennai",
    description: [
      "CGPA: 8.50",
      // "Specialization in Artificial Intelligence and Machine Learning",
      // "Member of Technical Club",
      // "Participated in various hackathons and coding competitions"
    ]
  },
  {
    id: 2,
    institution: "VELAMMAL INTERNATIONAL SCHOOL",
    degree: "Higher Secondary Education (12th)",
    duration: "2020 - 2022",
    location: "Chennai, Tamil Nadu",
    description: [
      "Percentage: 80.2%",
      // "Stream: Science (PCM)",
      // "School Captain",
      // "Participated in inter-school science competitions"
    ]
  },
  {
    id: 3,
    institution: "DIVINE CHILD SCHOOL",
    degree: "Secondary Education (10th)",
    duration: "2020",
    location: "Mehsana, Gujarat",
    description: [
      "Percentage: 81.4",
      // "Topper in Mathematics",
      // "Active in school clubs and activities",
      // "Recipient of academic excellence award"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educations.map((edu) => (
            <div 
              key={edu.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{edu.institution}</h4>

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{edu.duration}</span>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{edu.location}</span>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {edu.description.map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;