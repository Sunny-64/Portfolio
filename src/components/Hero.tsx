import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className='w-[90%] mx-auto p-5 grid grid-cols-2 gap-4'>
      <div className='col-span-1'>
        <div>
          <h2>Hi, I'm <span>Sunny</span></h2>
          <p>A Full stack Developer</p>
        </div>
        <div>
          <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, asperiores?</p>
        </div>
        <div>
          <button>Resume</button>
          <button>Resume</button>
        </div>
      </div>
      <div className='col-span-1'>
          skills
      </div>
    </section>
  )
}

export default Hero