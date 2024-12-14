import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="about" className="container mx-auto pt-32 pb-16 px-4 text-center">
      {/* About Title */}
      <h2
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mb-8"
        data-aos="zoom-in-up"
      >
        About Me
      </h2>

      {/* About Description */}
      <p className="text-white text-lg md:text-xl mb-8" data-aos="fade-up">
        I am a student at GIAIC and PIAIC, pursuing a course in Artificial
        Intelligence, Web 3.0, & Metaverse, and I am a Certified Cloud Applied
        Generative AI Engineer. Passionate about technology and constantly
        learning new skills to stay up-to-date with the latest innovations.
      </p>

      {/* Download CV Section */}
      <div className="mt-10" data-aos="fade-up">
        <a
          href=" https://milestone-cv.vercel.app"
          download
          className="inline-block px-6 py-3 bg-teal-500 text-white font-medium rounded-md shadow-lg hover:bg-teal-600 transition"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default About;
