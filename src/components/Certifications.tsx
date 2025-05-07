import React from 'react';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "ORACLE JAVA SE 11 DEVELOPER",
    organization: "Oracle",
    date: "2025",
    link: "https://drive.google.com/file/d/1X0cYQkvr9OGhMWxWPbbE_30DSyIqDbIx/view"
  },
  {
    id: 2,
    name: "ORACLE CLOUD INFRASTRUCTURE",
    organization: "Orcale",
    date: "2025",
    link: "https://drive.google.com/file/d/1RUngTyQhGS3bZ2rdG5on-voE0-LYvMI6/view"
  },
  {
    id: 3,
    name: "SERVICE NOW CERTIFIED SYSTEM ADMINISTRATOR",
    organization: "Service Now",
    date: "2025",
    link: "https://drive.google.com/file/d/1OOhmKcVEkKye04U00eXuq8zGF-52SrkB/view?usp=sharing"
  },
  // {
  //   id: 4,
  //   name: "Microsoft Certified: Azure Solutions Architect Expert",
  //   organization: "Microsoft",
  //   date: "2021",
  //   link: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/"
  // },
  // {
  //   id: 5,
  //   name: "Oracle Certified Professional, Java SE 11 Developer",
  //   organization: "Oracle",
  //   date: "2021",
  //   link: "https://education.oracle.com/oracle-certified-professional-java-se-11-developer"
  // }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Professional certifications that validate my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.organization}</p>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;