import React from 'react'
import SectionHeading from '../components/section-heading';
import { BiHome, BiDownArrowAlt } from 'react-icons/bi';
import roundText from "../utilities/round-text.png";
import { VscPerson } from 'react-icons/vsc';
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineDocumentText, HiOutlineMailOpen } from 'react-icons/hi';
import ProjectCard from '../components/project-card';

const Base = () => {

  return (
    <div className='w-full pt-10 h-screen overflow-y-scroll no-scrollbar p-6'>
      {/* Introduction section */}
      <div className='relative mb-10'>
        <SectionHeading heading='INTRODUCTION' Icon={BiHome} />

        <h1 className='text-white text-8xl font-normal mb-10'>
          Say Hi from
          {/* <br /> */}
          <h1 className='text-[#28e98c] mb-2 mt-2'>Aditya Raj,</h1>
          {/* <br /> */}
          Webflow Developer
        </h1>

        <p className='text-gray-400 font-light text-xl ml-2 mb-12'>I code beautifully simple things and i love what i do. Just simple like that!</p>

        <div className='flex justify-center items-center max-w-fit border rounded-full p-2 border-gray-500 cursor-pointer realative right-1/4'>
          <BiDownArrowAlt className='absolute text-white font-bold text-2xl' />
          <img src={roundText}></img>
        </div>
      </div>

      {/* About Section  */}
      <div className='mb-10'>
        <SectionHeading heading='ABOUT' Icon={VscPerson} />

        <div className='pl-2'>
          <h1 className='text-white text-4xl mb-10'>
            Every great developer begin with an even <h1 className='text-[#28e98c]'>better story</h1>
          </h1>

          <p className='text-gray-300 font-light text-xl '>
            I am a MERN Stack Web Developer with a passion for creating efficient and
            visually appealing web applications. Proficient in both front-end and
            back-end technologie. I have the ability to write clean and maintainable code
            (MVC architecture), and a continuous drive to learn new web tech make me
            a valuable asset to any development team.
          </p>

        </div>
      </div>

      {/* Projects section  */}
      <div>
        <SectionHeading heading='PROJECTS' Icon={TiDocumentText} />

        <div>
          <ProjectCard />
        </div>
      </div>

      {/* Contact Form  */}
      <div className='mb-10'>
        <SectionHeading heading='CONTACT' Icon={HiOutlineMailOpen} />

        <div className='pl-2'>
          <h1 className='text-white text-4xl mb-6'>Let's Work <span className='text-[#28e98c]'>Together!</span></h1>
          <p className='text-gray-300 text-2xl font-light mb-6'>adiabhiraj141@gmail.com</p>

          <div>
            <div className='flex w-full mb-3'>
              <div className='flex flex-col text-white w-1/2'>
                <label htmlFor='fullname-input'>Full Name</label>
                <input type='text' id='fullname-input' placeholder='Your full name' className='bg-transparent outline-none border-none pt-1' />
              </div>
              <div className='flex flex-col text-white w-1/2'>
                <label htmlFor='email-input'>Email</label>
                <input type='email' id='email-input' placeholder='Your Email' className='bg-transparent outline-none border-none pt-1' />
              </div>
            </div>

            <div className='flex flex-col text-white'>
              <label htmlFor='textarea'>Message</label>
              <textarea rows={4} id='textarea' placeholder='Want to say something' className='bg-transparent outline-none border-none pt-1' />
            </div>

            <input type='button' value="Submit" className='text-black w-fit p-10 pt-2 pb-2 border-2 border-[#28e98c] rounded-3xl bg-[#28e98c] text-lg font-medium mt-5 hover:text-[#28e98c] hover:bg-black transition-colors cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Base;