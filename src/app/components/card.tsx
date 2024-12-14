import React from 'react';
interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[]
}


// const Card = ({ title, desc, img, tags }) => {
  const Card:React.FC<propsType> = ({ title, desc, img, tags, }) => {
  return (
    <div 
      data-aos="fade-up" 
      className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out'
    >
      {/* Project Image */}
      {/* <img src={img} alt={title} className='w-full h-48 object-cover' /> */}

      {/* Card Content */}
      <div className='p-5 bg-white'>
        {/* Project Title */}
        <h3 className='text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600 transition-colors duration-200'>{title}</h3>
        
        {/* Project Description */}
        <p className='text-gray-600 text-sm mb-4'>{desc}</p>
        
        {/* Project Tags */}
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='text-xs font-medium px-2 py-1 bg-purple-200 text-purple-700 rounded-full hover:bg-purple-300 transition-colors duration-200'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

