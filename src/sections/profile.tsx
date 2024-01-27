import profileImage from '../utilities/p2.png';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { FaMailchimp } from 'react-icons/fa6';

const Profile = () => {
    return (
        // <div className='border border-t-0 border-b-0 border-gray-400 rounded-xl p-4 pl-6 pr-6 flex flex-col items-center min-h-screen max-h-screen top-0 fixed left-0 ml-7 w-fit'>
        <div className='border border-t-0 border-b-0 border-gray-400 rounded-xl p-4 pl-6 pr-6 flex flex-col justify-between items-center  ml-7 w-fit h-full'>
            {/* profile heading */}
            <div className='flex justify-between w-full items-center'>
                <h1 className='text-[#28e98c] font-bold text-4xl '>A_Raj</h1>
                <h3 className='text-white font-light align-middle'>Web Programmer</h3>
            </div>

            <div className='w-60 justify-center flex'>  
                <img src={profileImage} alt='Profile Image' className='w-full' />
            </div>

            <div className='items-center flex-col flex'>
                <h3 className='text-white font-normal text-2xl mb-2'>adiabhiraj141@gmail.com</h3>
                <h3 className='text-white font-normal text-2xl mb-2'>Based in Haryana, <span className='text-[#28e98c]'>INDIA</span></h3>
            </div>

            <p className='text-gray-500 text-sm font-extralight m-7 flex justify-center'>© 2021 adii. All Rights Reserved</p>

            <div className='flex justify-center'>
                <a href='https://twitter.com/adiraj195' target='_blank' className='text-white border-gray-500 border-2 p-2 rounded-full text-xl ml-1 mr-1 hover:border-[#28e98c] transition-colors'>
                    <IoLogoTwitter />
                </a>
                <a href='https://www.linkedin.com/in/aditya-raj-127670220/' target='_blank' className='text-white border-gray-500 border-2 p-2 rounded-full text-xl ml-1 mr-1 hover:border-[#28e98c] transition-colors'>
                    <IoLogoLinkedin />
                </a>
                <a href='https://github.com/adiabhiraj195' target='_blank' className='text-white border-gray-500 border-2 p-2 rounded-full text-xl ml-1 mr-1 hover:border-[#28e98c] transition-colors'>
                    <IoLogoGithub />
                </a>
            </div>

            {/* <div className='text-center align-middle flex'> */}
            <a href="#contactContainer" className='flex items-center justify-center text-black w-full pt-2 pb-2 border-2 border-[#28e98c] rounded-3xl bg-[#28e98c] text-lg font-medium mt-5 hover:text-[#28e98c] hover:bg-black transition-colors'>
                <FaMailchimp className='' /> HIRE ME!
            </a>
            {/* <a href="#contactContainer" className='w-full flex justify-center align-middle items-center p'>
                <button className='flex items-center text-black w-full pt-3 pb-3 border-2 border-[#28e98c] rounded-3xl bg-[#28e98c] text-lg font-extralight mt-5'><FaMailchimp className='' /> HIRE ME!</button>
            </a> */}
            {/* </div> */}
        </div>
    )
}

export default Profile;