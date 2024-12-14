import React, { useEffect } from 'react';
import Navbar from './navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-back', // Smooth easing effect
    });
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen bg-black bg-no-repeat bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/background-image.jpg')", // Add a background image for a better visual effect
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4 sm:px-8 md:px-16 relative z-10">
        {/* Left Side - Animated Cartoon */}
        <div className="flex justify-center items-center">
          <div
            data-aos="fade-right"
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-contain bg-no-repeat"
            style={{
              backgroundImage: "url('/cartoon-illustration.png')", // Placeholder for cartoon illustration
            }}
          />
        </div>

        {/* Right Side - Text and Introduction */}
        <div className="text-right text-white space-y-6 flex justify-center lg:justify-end flex-col">
          <div data-aos="fade-up">
            <p className="text-3xl sm:text-4xl font-light text-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-[#ab7fc1] to-[#8d3ee1]">
              Hello, I am
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-[80px] sm:text-[100px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ab7fc1] to-[#b257c4]"
          >
            Zahoor
          </div>

          <div
            data-aos="zoom-in-up"
            className="text-[50px] sm:text-[60px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#eb8cc0] to-[#f8f8f8]"
          >
            Fatima
          </div>

          <div data-aos="fade-up" className="mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-[#ab7fc1] to-[#8d3ee1] text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Optional Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
};

export default Hero;
