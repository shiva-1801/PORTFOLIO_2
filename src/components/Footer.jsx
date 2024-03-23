import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 hidden sm:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/3 pl-3">
          <p className="text-sm text-gray-400">Copyright 2024</p>
        </div>
        <nav className="w-1/3 text-center">
          <ul className="flex justify-center">
            <li className="mx-2"><Link to="/" className="hover:underline">Home</Link></li>
            <li className="mx-2"><Link to="/about" className="hover:underline">About</Link></li>
            {/* <li className="mx-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mx-2"><a href="#" className="hover:underline">Lab</a></li>
            <li className="mx-2"><a href="#" className="hover:underline">Newsroom</a></li> */}
            <li className="mx-2"><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <div className="w-1/3 flex justify-end">
          <ul className="flex justify-end">
            <li className="mx-2 text-2xl"><a href='https://github.com/shiva-1801" className="hover:underline'><FaGithub /></a></li> 
            <li className="mx-2 text-2xl"><a href='https://www.linkedin.com/in/shiwalik-srivastava-3953b720b/' className="hover:underline"><FaLinkedin /></a></li>
            {/* <li className="mx-2"><a href="#" className="hover:underline"><FaMediumM /></a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
