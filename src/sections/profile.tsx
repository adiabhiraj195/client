import React from 'react'
import profileImage from '../utilities/p2.png';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import {FaMailchimp} from 'react-icons/fa6';

const Profile = () => {
    return (
        <div className='border-2 rounded-md align-middle text-center'>
            {/* profile heading */}
            <div className='flex justify-between align-middle'>
                <h1 className='text-green-500 font-bold text-3xl '>A_Raj</h1>
                <h3 className='text-white font-bold'>web Programmer</h3>
            </div>

            <div>
                <img src={profileImage} alt='Profile Image'></img>
            </div>

            <div>
                <h3 className='text-white'>adiabhiraj141@gmail.com</h3>
            </div>

            <div>
                <h3 className='text-white'>Based in Haryana, <span>INDIA</span></h3>
            </div>

            <div>
                <p className='text-white'>© 2021 adii. All Rights Reserved</p>
            </div>

            <div className='flex justify-center'>
                <a href='https://twitter.com/adiraj195' target='_blank' className='text-white'>
                    <IoLogoTwitter />
                </a>
                <a href='https://www.linkedin.com/in/aditya-raj-127670220/' target='_blank' className='text-white'>
                    <IoLogoLinkedin />
                </a>
                <a href='https://github.com/adiabhiraj195' target='_blank' className='text-white'>
                    <IoLogoGithub />
                </a>
            </div>

            {/* <div className='text-center align-middle flex'> */}
                <a href="#contactContainer" ><button className='text-white flex align-middle text-center'><FaMailchimp className='btn-icon' /> HIRE ME!</button></a>
            {/* </div> */}
        </div>
    )
}

export default Profile;