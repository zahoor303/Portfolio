import React, { useEffect } from 'react';
import Heading from './heading';
import Card from './card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const data = [
  {
    id: 0,
    title: "Calculator",
    desc: "A Next.js and TypeScript-powered website to track time with an interactive countdown feature.",
    img: "./image1.png",
    tags: ["javascript", "TypeScript"],
    liveDemo: "https://",
    github: "https://github.com/zahoor303/Calculators.git",
  },
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A responsive personal portfolio website built using React, showcasing my projects and skills.",
    img: "/image2.png",
    tags: ["React", "CSS", "HTML", "JavaScript"],
    liveDemo: "https://simple-website-five-iota.vercel.app",
    github: "https://github.com/zahoor303/simple-website.git",
  },
  {
    id: 2,
    title: "Figma Design",
    desc: "A pixel-perfect Figma design recreated using React, Next.js, and Tailwind CSS.",
    img: "/image.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveDemo: " https://my-2g49p5tgn-zahoor-fatima-butts-projects.vercel.app",
    github: "https://",
  },
  // Add more projects here...
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div id="projects" className="container mx-auto pt-32 pb-16 px-4 bg-black text-purple-500">
      {/* Section Heading */}
      <div className='bg-black text-purple-500'></div>
      <Heading title="My Projects" />

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((project) => (
          <div
            key={project.id}
            className="max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            {/* Project Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-500">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.desc}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium text-white bg-blue-400 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow hover:bg-blue-400"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md shadow hover:bg-gray-600"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
