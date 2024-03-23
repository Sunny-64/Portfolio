"use client";
import React, { useState } from 'react'
import { EDUCATION, EXPERIENCE } from '@/constants/constants';

const RenderTimelineData = ({data} : {data : any}) => {
  return (
      data?.map((item:any, index:number) => (
        <div key={index} className="flex flex-row w-full">
          {index % 2 === 0 ? (
            <>
              <div className="w-2/5 md:px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-verdigirls px-2 sm:px-4 py-5">
                  <div className="text-cornsilk mb-2">
                    <div className="font-bold text-md">{item?.graduatedFrom ?? item?.company}</div>
                    <div className='font-medium text-gray-300 text-sm tracking-wider'>{item?.course}</div>
                  </div>
                  <div className="text-cornsilk">{item?.description}</div>
                </div>
              </div>

              <div className="w-1/5 flex justify-center">
                <div className="relative flex h-full w-1 bg-verdigirls items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-16 w-16 sm:h-24 sm:w-24 rounded-full  leading-none text-center z-10 bg-rich-black font-thin">
                    <div className='font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80'>{item?.startDate}</div>
                    <div className='font-medium my-1 text-[12px] sm:text-sm text-gray-300 opacity-80'>|</div>
                    <div className='font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80'>{item?.endDate}</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-2/5 px-2 py-10"></div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-verdigirls items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full  leading-none text-center z-10 bg-rich-black font-thin">
                    <div className='font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80'>{item?.startDate}</div>
                    <div className='font-medium my-1 text-[12px] sm:text-sm text-gray-300 opacity-80'>|</div>
                    <div className='font-semibold text-[12px] sm:text-sm text-gray-300 opacity-80'>{item?.endDate}</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow border-[3px] border-verdigirls px-4 py-5">
                  <div className="text-cornsilk mb-2">
                    <div className="font-bold text-md">{item?.graduatedFrom}</div>
                    <div className='font-medium text-gray-300 text-sm tracking-wider'>{item?.course}</div>
                  </div>
                  <div className="text-cornsilk">{item?.description}</div>
                </div>
              </div>
            </>
          )}
        </div>
      ))
  )
}

const Timeline = () => {
  const [activeButton, setActiveButton] = useState<string>('EDUCATION');
  return (
    <section id='timeline' className='px-2 sm:p-5 mt-16 min-h-screen'>
      <div className='flex justify-center gap-6 mb-16'>
        <button
          className={`text-lg w-32 ${activeButton === 'EDUCATION' ? 'bg-gradient-to-br from-verdigirls from-30% to-cerulean to-70%' : 'border-[2px] border-verdigirls'} px-5 py-2 rounded-md shadow-sm`}
          onClick={() => setActiveButton('EDUCATION')}
        >
          Education
        </button>
        <button
          className={`text-lg w-32 ${activeButton === 'EXPERIENCE' ? 'bg-gradient-to-br from-verdigirls from-30% to-cerulean to-70%' : 'border-[2px] border-verdigirls'} px-5 py-2 rounded-md shadow-sm`}
          onClick={() => setActiveButton('EXPERIENCE')}
        >
          Experience
        </button>
      </div>

      <div className="min-h-screen">
        <div className="min-h-screen flex justify-center">
          <div className="lg:w-2/3 w-full mx-auto">
              {activeButton === 'EDUCATION' ? 
              <RenderTimelineData data={EDUCATION}/>  
              : 
              <RenderTimelineData data={EXPERIENCE}/>  
            }
          </div>
        </div>
      </div>
    </section>


  )
}

export default Timeline