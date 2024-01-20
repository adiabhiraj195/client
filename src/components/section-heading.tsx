import React from 'react'

interface Section {
    heading: string;
}
const SectionHeading = ({heading}:Section) => {
  return (
    <div className='w-full bg-green-300 flex justify-start'>
        <h2 className='text-white border p-2 rounded-3xl'>
            {heading}
        </h2>
    </div>
  )
}

export default SectionHeading;