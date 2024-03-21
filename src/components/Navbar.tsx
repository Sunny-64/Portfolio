'use client';

import React, { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="w-[90%] py-3 px-5 mx-auto my-5 rounded-md flex justify-between shadow-md items-center realtive ">
      <div className='sm:flex gap-4 hidden'>
        <a href="" className='font-medium'>About</a>
        <a href="" className='font-medium'>Projects</a>
        <a href="" className='font-medium'>Timeline</a>
      </div>
      <p className="sm:hidden text-xl font-bold bg-gradient-to-r from-verdigirls to-cerulean text-transparent bg-clip-text">B Sunny</p>

      <div className='flex gap-4 '>
        <div className='flex gap-4 items-center'>
          <a href="" className='hidden border border-verdigirls p-2 rounded-full sm:flex items-center justify-center'><FaLinkedin size={20} /></a>
          <a href="" className='hidden border border-verdigirls p-2 rounded-full sm:flex items-center justify-center'><FaTwitter size={20} /></a>
          <a href="" className='hidden border border-verdigirls p-2 rounded-full sm:flex items-center justify-center'><FaGithub size={20} /></a>
        </div>

        <button className='hidden sm:flex gradient-bordered-btn px-4 py-1'>Contact</button>

        <div className='sm:hidden w-[24px] flex flex-col gap-1 relative' onClick={() => setToggleMenu(!toggleMenu)}>
          <span className={`line w-[24px] bg-gradient-to-r from-cerulean to-verdigirls h-[3px] transition-all ease-out duration-700 ${toggleMenu && 'rotate-45 absolute top-[2px]'}`}></span>
          <span className={`line  bg-gradient-to-r from-cerulean to-verdigirls h-[3px] transition-all ease-out duration-500 ${toggleMenu ? 'w-0' : 'w-[24px]'}`}></span>
          <span className={`line w-[24px] bg-gradient-to-r from-cerulean to-verdigirls h-[3px] transition-all ease-out duration-700 ${toggleMenu && '-rotate-45 absolute top-[2px]'}`}></span>
        </div>

      </div>
      <div className={`absolute flex flex-col gap-4 items-left sm:hidden top-[60px] transition-all ease-out duration-700 ${toggleMenu ? 'right-[12%]' : 'right-full'} bg-gradient-to-br from-rich-black to-cerulean rounded-md p-4 font-medium`}>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Timeline</a>
        <button className='sm:flex gradient-bordered-btn px-4 py-1'>Contact</button>
      </div>

    </nav>
  )
}

export default Navbar