import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='container mx-auto pt-32 pb-16 px-4'>
      {/* Heading and Description */}
      <div className='grid md:grid-cols-2 gap-10 items-start'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl font-bold text-purple-600 mb-4'>
            Technologies I Work With
          </h2>
          <p className='text-white'>
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
            My experience extends to using frameworks like React and Next.js to create dynamic and 
            user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and 
            design. With a passion for learning, I stay updated on the latest technologies to enhance my 
            skill set and contribute effectively to projects.
          </p>
        </div>
        
        {/* Skill Set Display */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center'>
          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Git','Python'].map((skill, index) => (
            <div 
              key={index} 
              className='text-lg sm:text-xl font-medium text-gray-800 bg-purple-100 rounded-lg p-4 shadow-md hover:bg-purple-200 transition-colors duration-200'
              data-aos="fade-up" 
              data-aos-delay={index * 100} // Delay each skill item for a staggered animation effect
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
