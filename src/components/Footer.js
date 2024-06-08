import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="py-5 bg-zinc-950 flex flex-col md:flex-row justify-between text-white pb-0 text-md z-50 backdrop-blur-xl">
        <div className="text-center md:text-left md:space-x-10 mt-5 md:mt-0 px-10 py-3">
          <p className=''>
            Designed and Developed by&nbsp;
            <Link to='/' className='text-purple-600'>Aaditya Pathak</Link>
            {/* Copyright © Pathak Aaditya */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            Copyright © 2024&nbsp;
            <Link to='/' className='text-purple-600'>AP</Link>
          </p>
        </div>

        <div className="flex flex-wrap space-x-5 md:space-x-6 mt-5 md:mt-0 px-10 py-3">
          <Link to="/" className='hover:text-purple-600'>Home</Link>
          <Link to="/About" className='hover:text-purple-600'>About</Link>
          <Link to="/Project" className='hover:text-purple-600'>Project</Link>
          <Link to="/Skill" className='hover:text-purple-600'>Skill</Link>
          <Link to="/Contact" className='hover:text-purple-600'>Contact</Link>
        </div>
      </div>
    </>
  );
}