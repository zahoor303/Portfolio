import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-black text-white shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-4 pt-6 pb-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='text-2xl font-bold text-yellow-400'>
            <a href='#hero' className='hover:text-yellow-500 transition duration-200'>
  
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex gap-10 lg:gap-16'>
            <li className='menuLink'>
              <a href='#hero' className='text-white hover:text-blue-400 transition duration-200'>
                Home
              </a>
            </li>
            <li className='menuLink'>
              <a href='#about' className='text-white hover:text-yellow-400 transition duration-200'>
                About
              </a>
            </li>
            <li className='menuLink'>
              <a href='#projects' className='text-white hover:text-purple-400 transition duration-200'>
                Projects
              </a>
            </li>
            <li className='menuLink'>
              <a href='#skills' className='text-white hover:text-pink-400 transition duration-200'>
                Skills
              </a>
            </li>
            <li className='menuLink'>
              <a href='#contact' className='text-white hover:text-blue-900 transition duration-200'>
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className='md:hidden text-yellow-400 cursor-pointer' onClick={toggleMenu}>
            {menuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-gray-900 text-white py-6 px-4`}>
          <ul className='flex flex-col gap-6'>
            <li>
              <a href='#hero' className='text-white hover:text-yellow-400 transition duration-200'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='text-white hover:text-yellow-400 transition duration-200'>
                About
              </a>
            </li>
            <li>
              <a href='#projects' className='text-white hover:text-yellow-400 transition duration-200'>
                Projects
              </a>
            </li>
            <li>
              <a href='#skills' className='text-white hover:text-yellow-400 transition duration-200'>
                Skills
              </a>
            </li>
            <li>
              <a href='#contact' className='text-white hover:text-yellow-400 transition duration-200'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
