import React from 'react';
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

interface ProjectInterface {
    Title: string;
    Image: string;
    About: string;
    KeyTec: string;
    liveLink?: string;
    repositore: string;
}

const ProjectCard = ({
    Title,
    Image,
    About,
    KeyTec,
    liveLink,
    repositore
}: ProjectInterface) => {
    return (
        <div className='flex mb-10 border border-transparent rounded-xl transition p-2 hover:border-[#28e98c] '>
            <div className='relative overflow-hidden rounded-xl h-48 opacity-90'>
                <img src={Image} alt='site ss'></img>
                <div className='absolute top-0 bg-[#000000d8] opacity-0 h-full hover:opacity-100 transition cursor-pointer text-center p-4 items-center flex'>
                    <p className='text-gray-300 text-xl font-light'>{About}</p>
                </div>
            </div>
            <div className='text-white text-center pl-2 pr-2 flex flex-col justify-between'>
                <h2 className='text-xl f text-gray-200'>{Title}</h2>

                <p className='text-gray-300 text-sm'>{KeyTec}</p>

                <div className='flex flex-col '>
                    <a href={liveLink} target='_blank' className='flex items-center justify-center mb-1 hover:underline hover:text-blue-400'><HiOutlineStatusOnline />live </a>
                    <a href={repositore} target='_blank' className='flex items-center justify-center mb-2 hover:underline hover:text-blue-400'><AiFillGithub /> repositorie</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;