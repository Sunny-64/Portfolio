import Image from 'next/image'
import React from 'react'
import {
  FaGithub,
} from 'react-icons/fa'

import zeroPng from './../../assets/zero.jpg'
import { PROJECTS } from '@/constants/constants';
import { IProject } from '@/types';

const Projects = () => {

  return (
    <section id='projects' className='bg-gradient-to-br from-[rgba(11,32,39,0.4)] to-[rgba(64,121,140,0.4)] min-h-screen p-5 mb-8'>
      <p className='text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text py-3'>Projects</p>

      <div className="projects flex flex-col gap-8 items-center mt-8">

        {PROJECTS?.map((item: IProject, index: number) => (
          index % 2 === 0 ? (
            <div key={index} className="md:w-3/4 xl:w-1/2 border-[3px] border-verdigirls sm:grid sm:grid-cols-3 rounded-lg">
              <div className='md:col-span-1'>
                <Image className='h-full w-full object-cover rounded-l-lg' src={zeroPng} alt='img' />
              </div>
              <div className='col-span-2 p-5'>
                <p className="text-3xl font-semibold mb-3">{item?.name}</p>
                <p className='mb-1 leading-8'>description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, quo provident omnis accusantium a corrupti similique fuga commodi velit maxime.</p>
                <p className='mb-3 font-medium opacity-70'>{item?.techStack}</p>
                <div className='flex justify-between'>
                  <a className='rounded-full border-[2px] border-verdigirls px-4 py-1 flex justify-center items-center hvr-wobble-bottom cursor-pointer'>Demo</a>
                  <a href=""><FaGithub size={30} /> </a>
                </div>
              </div>
            </div>
          )
            :
            (
              <div key={index} className="md:w-3/4 xl:w-1/2 border-[3px] flex flex-col-reverse border-verdigirls sm:grid sm:grid-cols-3 rounded-lg">
                <div className='sm:col-span-2 p-5'>
                  <p className="text-3xl font-semibold mb-3">{item?.name}</p>
                  <p className='mb-2 leading-8'>description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, quo provident omnis accusantium a corrupti similique fuga commodi velit maxime.</p>
                  <p className='mb-3 font-medium opacity-70'>{item?.techStack}</p>

                  <div className='flex justify-between'>
                    <button className='rounded-full border-[2px] border-verdigirls px-4 py-1 flex justify-center items-center cursor-pointer hvr-wobble-bottom'>Demo</button>
                    <a href=""><FaGithub size={30} /></a>
                  </div>
                </div>
                <div className='sm:col-span-1'>
                  <Image className='h-full w-full object-cover rounded-l-lg' src={zeroPng} alt='img' />
                </div>
              </div>
            )
        ))}
      </div>
    </section>
  )
}

export default Projects