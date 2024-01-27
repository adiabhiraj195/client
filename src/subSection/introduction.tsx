import SectionHeading from '../components/section-heading';
import roundText from "../utilities/round-text.png";
import { BiHome, BiDownArrowAlt } from 'react-icons/bi';

const Introduction = () => {
    return (
        <div className='relative mb-10' id='home'>
            <SectionHeading heading='INTRODUCTION' Icon={BiHome} />

            <h1 className='text-white text-8xl font-normal mb-10'>
                Say Hi from
                {/* <br /> */}
                <h1 className='text-[#28e98c] mb-2 mt-2'>Aditya Raj,</h1>
                {/* <br /> */}
                Webflow Developer
            </h1>

            <p className='text-gray-400 font-light text-xl ml-2 mb-12'>I code beautifully simple things and i love what i do. Just simple like that!</p>

            <a href='#projects'>
                <div className='flex justify-center items-center max-w-fit border rounded-full p-2 border-gray-500 cursor-pointer realative right-1/4'>
                    <BiDownArrowAlt className='absolute text-white font-bold text-2xl' />
                    <img src={roundText}></img>
                </div>
            </a>
        </div>
    )
}

export default Introduction;