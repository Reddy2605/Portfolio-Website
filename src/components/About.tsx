import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          {/* <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Software developer with expertise in building responsive web applications and solving complex problems.
          </p> */}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <img 
              src="/picture.jpg" 
              alt="Your Name"
              className="w-full h-full object-cover rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-2xl"
            />
          </div>
          
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hi There!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a full-stack developer specializing in PHP, Python, Java, and AIoT. I build practical solutions like the Employee Email Database System used by Tamil Nadu's government.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            Currently pursuing B.Tech in CS (IT) at SRM IST, I bridge academic knowledge with hands-on development experience across entire tech stacks.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
            {/* Beyond coursework, I actively contribute to <span className="font-medium">technical clubs and hackathons</span>, 
            where I thrive on transforming ideas into functional applications.  */}
            {/* Beyond coursework,I thrive on transforming ideas into functional applications.
            Whether developing government-scale systems or experimenting with new frameworks, I'm driven by the challenge of creating <span className="font-medium">efficient, impactful solutions</span>. */}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
            When not coding, you'll find me exploring emerging technologies, listening music , exploring city or simply reading books. 
            I'm always eager to collaborate on innovative solutions that push technological boundaries.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;