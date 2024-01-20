import React from 'react'
import SectionHeading from '../components/section-heading';

const Base = () => {
  return (
    <div className='w-full'>
      <div>
        <SectionHeading heading='Introduction'/>
        <h1 className='text-white text-7xl font-normal'>
          Say Hi from
          <br />
          <span className='text-[#28e98c]'>Aditya Raj</span>,
          <br />
          Webflow Developer
        </h1>

      </div>
    </div>
  )
}
export default Base;