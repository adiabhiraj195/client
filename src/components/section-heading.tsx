import React from 'react';

interface Section {
    heading: string;
    // Icon: React.ReactNode;
    Icon: React.ComponentType<{
      className?: string; 
    }>;
}
const SectionHeading = ({heading, Icon}:Section) => {
  return (
    <div className='w-full flex justify-between items-center mb-10'>
      <div className='h-2 w-2 bg-gray-500 rounded-full'></div>
      <div className='h-px bg-gray-500 w-3'></div>
        <h2 className='text-white border p-1 pl-4 pr-4 rounded-3xl font-light text-sm border-gray-500 flex justify-between items-center mr-1 ml-1'>
            <Icon className='mr-1' />
            {heading}
        </h2>
        <div className='h-px bg-gray-500 w-full mr-10'></div>
    </div>
  )
}

export default SectionHeading;