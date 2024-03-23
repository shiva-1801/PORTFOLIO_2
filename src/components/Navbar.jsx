import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className='w-full h-16 flex justify-between items-center px-5 md:px-28 pt-10 fixed z-999 sm:z-auto'>
      <div className="logo">
        <Link to="/" className='font-semibold text-lg text-[#001c55]'>Shiwalik</Link>
      </div>
      <div className='hidden md:flex gap-6 text-[#001c55]'>
        <Link to="/" className="hover:text-gray-600" onClick={handleMenuItemClick}>Home</Link>
        <Link to="/about" className="hover:text-gray-600" onClick={handleMenuItemClick}>About</Link>
        <Link to="/contact" className="hover:text-gray-600" onClick={handleMenuItemClick}>Contact</Link>
        <a href="https://drive.google.com/file/d/1WRh3gyjPAhdVlEwtojUdpxhvMlpaYLXo/view?usp=sharing" className="hover:text-gray-600" onClick={handleMenuItemClick}>Resume</a>
      </div>

      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {showMenu ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      {showMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white z-10">
          <div className="flex flex-col items-center py-4">
            <Link to="/" className="mb-4 hover:text-gray-600" onClick={handleMenuItemClick}>Home</Link>
            <Link to="/about" className="mb-4 hover:text-gray-600" onClick={handleMenuItemClick}>About</Link>
            <Link to="/contact" className="mb-4 hover:text-gray-600" onClick={handleMenuItemClick}>Contact</Link>
            <a href="https://drive.google.com/file/d/1WRh3gyjPAhdVlEwtojUdpxhvMlpaYLXo/view?usp=sharing" className="hover:text-gray-600" onClick={handleMenuItemClick}>Resume</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
