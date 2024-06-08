import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-5 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-md">
        
        <div className="text-center md:text-left mb-5 md:mb-0">
          <p className="mb-2 md:mb-0">
            Designed and Developed by&nbsp;
            <Link to='/' className='text-purple-500 hover:underline'>Aaditya Pathak</Link>
          </p>
        </div>

        <p className="text-center md:text-center mb-5 md:mb-0">
          Copyright &copy; 2024&nbsp;
          <Link to='/' className='text-purple-500 hover:underline'>AP</Link>
        </p>
        
        <nav className="flex flex-wrap justify-center md:justify-end space-x-5 md:space-x-6">
          <Link to="/" className='hover:text-purple-500'>Home</Link>
          <Link to="/About" className='hover:text-purple-500'>About</Link>
          <Link to="/Project" className='hover:text-purple-500'>Project</Link>
          <Link to="/Skill" className='hover:text-purple-500'>Skill</Link>
          <Link to="/Contact" className='hover:text-purple-500'>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
