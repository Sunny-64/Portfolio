import React from 'react'
import Image from 'next/image';
import skillsPng from './../../assets/skills.png';

const Hero = () => {
  return (
    <section id='hero' className='w-[90%] mx-auto p-5 md:grid md:grid-cols-2 gap-4'>
      <div className='col-span-1 self-center lg:pr-8'>
        <div className='mb-3'>
          <h2 className='font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:mb-2'>Hi, I&prime;m <span className='font-bold bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text'>Sunny</span></h2>
          <p className='text-sm font-medium opacity-80'>A Full stack Developer</p>
        </div>
        <div className='mb-3 leading-8 md:pr-12'>
          <p>I&prime;m skilled at making websites look awesome and ensuring they run smoothly, both on the surface and behind the scenes.</p>
        </div>
        <div className='flex gap-4 mt-8'>
          <button className='bg-gradient-to-br from-cerulean to-verdigirls px-4 py-2 rounded-sm shadow-sm font-medium'>Resume</button>
          <button className='border-[2px] border-cerulean px-4 py-2 rounded-sm font-medium hvr-bounce-to-right'>Resume</button>
        </div> 
      </div>
      <div className='col-span-1 place-self-end xl:mt-12 my-8 md:mt-0'>
        {/* <Skills /> */}
        <Image className='md:h-[full] w-full object-cover ' src={skillsPng} priority alt='skills' />
      </div>
    </section>
  )
}

export default Hero