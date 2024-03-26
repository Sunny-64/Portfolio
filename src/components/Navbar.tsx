'use client';

import React, { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

import {
  GITHUB_URL, 
  LINKEDIN_URL, 
  TWITTER_URL,
} from '@/constants/contact'; 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="w-[90%] py-3 px-5 mx-auto my-5 rounded-md flex justify-between shadow-md items-center realtive ">
      <div className='sm:flex gap-4 hidden'>
        <a href="#about" className='font-medium'>About</a>
        <a href="#projects" className='font-medium'>Projects</a>
        <a href="#timeline" className='font-medium'>Timeline</a>
      </div>
      <p className="sm:hidden text-xl font-bold bg-gradient-to-r from-verdigirls to-cerulean text-transparent bg-clip-text">B Sunny</p>

      <div className='flex gap-4 '>
        <div className='flex gap-4 items-center'>
          <a href={LINKEDIN_URL} target='_blank' className='hidden border-[2px] border-verdigirls p-2 rounded-full sm:flex items-center justify-center hvr-radial-in'><FaLinkedin size={20} /></a>
          <a href={TWITTER_URL} target='_blank' className='hidden border-[2px] border-verdigirls p-2 rounded-full sm:flex items-center justify-center hvr-radial-in'><FaTwitter size={20} /></a>
          <a href={GITHUB_URL} target='_blank' className='hidden border-[2px] border-verdigirls p-2 rounded-full sm:flex items-center justify-center hvr-radial-in'><FaGithub size={20} /></a>
        </div>

        <a href='#contact' className='hidden sm:flex border-[2px] border-verdigirls rounded-md hvr-bounce-to-left px-4 py-1'>Contact</a>

        <div className='sm:hidden w-[24px] flex flex-col gap-1 relative' onClick={() => setToggleMenu(!toggleMenu)}>
          <span className={`line w-[24px] bg-gradient-to-r from-cerulean to-verdigirls h-[3px] transition-all ease-out duration-700 ${toggleMenu && 'rotate-45 absolute top-[2px]'}`}></span>
          <span className={`line  bg-gradient-to-r from-cerulean to-verdigirls h-[3px] transition-all ease-out duration-500 ${toggleMenu ? 'w-0' : 'w-[24px]'}`}></span>
          <span className={`line w-[24px] bg-gradient-to-r from-cerulean to-verdigirls h-[3px] transition-all ease-out duration-700 ${toggleMenu && '-rotate-45 absolute top-[2px]'}`}></span>
        </div>

      </div>
      <div className={`absolute flex flex-col gap-4 items-left sm:hidden top-[60px] transition-all ease-out duration-700 ${toggleMenu ? 'right-[12%]' : 'right-full'} bg-gradient-to-br from-rich-black to-cerulean rounded-md p-4 font-medium`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#timeline">Timeline</a>
        <a href='#contact'  className='sm:flex border-[2px] border-verdigirls rounded-md px-4 py-1 hvr-bounce-to-left'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar