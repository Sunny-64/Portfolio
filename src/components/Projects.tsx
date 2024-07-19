'use client'
import Image from 'next/image'
import React, {useEffect, useState } from 'react'
import {FaGithub} from 'react-icons/fa'

import { PROJECTS } from '@/constants/constants';
import { IProject } from '@/types';
import { PAGINATION_ITEMS_PER_PAGE, paginationList } from '@/utils';
import PlaceHolder from '@/utils/PlaceHolder';

const Projects = () => {
  const [sliceTracker, setSliceTracker] = useState<number []>([0, 3])
  const [projectsList, setProjectsList] = useState<IProject[]>(PROJECTS.slice(sliceTracker[0],sliceTracker[1])); 
  const [activePage, setActivePage] = useState<number>(1)

  useEffect(() => {
    setProjectsList(() => PROJECTS.slice(sliceTracker[0], sliceTracker[1]))
  }, [sliceTracker])

  const handleUpdatePagination = (val:number) => {
      setSliceTracker(() => [PAGINATION_ITEMS_PER_PAGE * val, PAGINATION_ITEMS_PER_PAGE * (val + 1) > PROJECTS.length ? PROJECTS.length : PAGINATION_ITEMS_PER_PAGE * (val + 1)]); 
      setActivePage(val); 
  } 

  return (
    <section id='projects' className='bg-gradient-to-br from-[rgba(11,32,39,0.4)] to-[rgba(64,121,140,0.4)] p-5 mb-8 pb-12'>
      <p className='text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text py-3'>Projects</p>

      <div className="projects flex flex-col gap-8 items-center mt-8">

        {projectsList?.map((item: IProject, index: number) => (
          index % 2 === 0 ? (
            <div key={index} className="md:w-3/4 xl:w-1/2 border-[3px] border-verdigirls sm:grid sm:grid-cols-3 rounded-lg min-h-[300px] transition-all duration-1000 ease-in-out">
              <div className='md:col-span-1'>
                <Image height={500} width={500} className='h-full w-full object-cover rounded-l-lg' src={item?.imageUrl} alt='img' />
              </div>
              <div className='col-span-2 p-5'>
                <p className="text-3xl font-semibold mb-3">{item?.name}</p>
                <p className='mb-1 leading-8'>{item?.description}</p>
                <p className='mb-3 font-medium opacity-70'>{item?.techStack}</p>
                <div className='flex justify-between'>
                  <a href={item?.url} className='rounded-full border-[2px] border-verdigirls px-4 py-1 flex justify-center items-center hvr-wobble-bottom cursor-pointer'>Demo</a>
                  <a href={item?.github}><FaGithub size={30} /> </a>
                </div>
              </div>
            </div>
          )
            :
            (
              <div key={index} className="md:w-3/4 xl:w-1/2 border-[3px] flex flex-col-reverse border-verdigirls sm:grid sm:grid-cols-3 rounded-lg min-h-[300px]">
                <div className='sm:col-span-2 p-5'>
                  <p className="text-3xl font-semibold mb-3">{item?.name}</p>
                  <p className='mb-2 leading-8'>{item?.description}</p>
                  <p className='mb-3 font-medium opacity-70'>{item?.techStack}</p>

                  <div className='flex justify-between'>
                    <a href={item?.url} className='rounded-full border-[2px] border-verdigirls px-4 py-1 flex justify-center items-center cursor-pointer hvr-wobble-bottom'>Demo</a>
                    <a href={item?.github}><FaGithub size={30} /></a>
                  </div>
                </div>
                <div className='sm:col-span-1'>
                  <Image height={500} width={500} className='h-full w-full object-cover rounded-r-lg' src={item?.imageUrl} alt='img' />
                </div>
              </div>
            )
        ))}
        {Array.from(Array(PAGINATION_ITEMS_PER_PAGE - projectsList.length), (e, i) => <PlaceHolder key={i} styles='md:w-3/4 xl:w-1/2 border-[3px]  border-transparent rounded-lg min-h-[300px]'/>)}
      </div>
      <div className='mt-12 flex gap-4 justify-center'> 
          {PROJECTS.length > PAGINATION_ITEMS_PER_PAGE && paginationList(PROJECTS.length)?.map((val:number) => (
            <p key={val} className={` ${activePage === val ? ' bg-verdigirls' : 'bg-cerulean'} rounded-sm min-w-7 py-1 text-center px-1 hover:cursor-pointer font-medium`} onClick={() => handleUpdatePagination(val)}>{val + 1}</p>
          ))}
      </div>
    </section>
  )
}

export default Projects