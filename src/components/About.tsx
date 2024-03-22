import React from 'react'
import Image from 'next/image';

import computerPng from './../../assets/computer.png';

const About = () => {
  return (
    <section id='about' className='w-[90%] mx-auto rounded-md p-5 my-8'>
      <p className='text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-cornsilk from-30% to-verdigirls to-60% text-transparent bg-clip-text mb-6'>About Me</p>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='w-full lg:col-span-1 flex justify-center md:items-center lg:items-start'>
          <Image src={computerPng} className='h-[210px] w-[200px] md:w-[350px] md:h-[400px] object-cover' alt='computer'/>
        </div>
        <div className='lg:col-span-2 xl:px-20 py-8 md:py-16 leading-10 text-lg'>
            <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam eius maxime alias sit accusamus ab tempora labore veniam illum tenetur placeat incidunt magnam necessitatibus minima ratione perspiciatis, architecto temporibus similique consequuntur harum quo! Iste modi veniam nostrum adipisci eos odio iusto dolores tempora, quis illum quo consequatur blanditiis eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsum consectetur officia ad earum adipisci distinctio tempore atque unde similique.</p>
        </div>
      </div>
    </section>
  )
}

export default About