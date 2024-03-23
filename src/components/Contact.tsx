import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact' className='p-5 min-h-screen'>
      <p className='text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cerulean to-verdigirls text-transparent bg-clip-text'>Contact</p>
      <div className='md:grid md:grid-cols-2 mt-4 md:mt-12'>
        <form action="" className='md:w-full flex flex-col gap-4 md:p-2 lg:p-5'>
          <input className='py-3 px-4 rounded-md focus:outline-none' type="text" name='fullName' placeholder='Full Name' />
          <textarea className='py-3 px-4 rounded-md focus:outline-none' name="message" id="message" cols={30} rows={8} placeholder='Message...'></textarea>
          <button type="submit" className='bg-gradient-to-r from-cerulean to-verdigirls font-medium w-32 py-2 rounded-sm'>Send</button>
        </form>

        <div className='md:w-[85%] justify-self-end mt-8 md:mt-0'>
            <div className='flex gap-4'>
                <a className='rounded-full w-16 h-16 border-[2px] border-verdigirls hvr-radial-in flex justify-center items-center' href=""><FaGithub size={30}/></a>
                <a className='rounded-full w-16 h-16 border-[2px] border-verdigirls hvr-radial-in flex justify-center items-center' href=""><FaLinkedin size={30}/></a>
                <a className='rounded-full w-16 h-16 border-[2px] border-verdigirls hvr-radial-in flex justify-center items-center' href=""><FaTwitter size={30}/></a>
            </div>
            <div className='flex flex-col gap-2 mt-8'>
                <p>sunny6464n@gmail.com</p>
                <p>+91 7973699425</p>
            </div>
            <div className='mt-8'>
              <p className='font-bold text-2xl'>News Letter</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error reiciendis. Sed molestias recusandae ullam?</p>
              <div className='mt-4 w-full flex '>
                <input type="text" name='newsLetter' placeholder='Enter your Email' className='py-3 px-4 rounded-l-sm focus:outline-none w-[80%]' />
                <button className='bg-gradient-to-r from-cerulean to-verdigirls py-3 px-2 rounded-r-sm'>Subscribe</button>
              </div>
            </div>
        </div>

      </div>

      <div className='flex justify-center flex-col items-center'>
        <hr className='mt-24 border-[1px] w-2/3 text-c border-verdigirls ' />
        <p className='mt-8'>Portfolio &copy;reated by Sunny</p>
      </div>
    </section>
  )
}

export default Contact