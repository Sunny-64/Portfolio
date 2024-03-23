import React from 'react'
import Image from 'next/image';

import computerPng from './../../assets/computer.png';

const About = () => {
  return (
    <section id='about' className='min-h-screen py-5 flex items-center'>
      <div className='w-[90%] h-full mx-auto rounded-md p-5 bg-gradient-to-br from-cerulean to-rich-black shadow-lg'>
        <p className='text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-cornsilk from-30% to-verdigirls to-60% text-transparent bg-clip-text mb-6'>About Me</p>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='w-full lg:col-span-1 flex justify-center md:items-center lg:items-start'>
            <Image src={computerPng} className='h-[210px] w-[200px] md:w-[350px] md:h-[400px] object-cover' alt='computer' />
          </div>
          <div className='lg:col-span-2 xl:px-20 py-8 md:py-6 leading-10 text-lg'>
            <p className='text-justify'>
              Hey there! I'm B Sunny, a second-year student studying Computer Science and Engineering. Before this, I did a diploma in the same field and landed an internship at Qservices, where I worked with Node.js and Blockchain.

              I'm really into web stuff, you know? Recently, I've been learning about web3 and getting better at full-stack development. Since I'm studying remotely, I'm always looking for ways to get hands-on experience.

              I'm a full-stack developer, which means I work on both front and back ends of websites. I love learning about new tech stuff. When I'm not coding, I enjoy reading or playing chess to keep my brain active.

              And I'm a big fan of traveling, especially to the mountains. There's just something about them that I find irresistible!
              </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About