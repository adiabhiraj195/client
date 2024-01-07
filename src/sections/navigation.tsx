import {BiHome} from 'react-icons/bi';
import {VscPerson} from 'react-icons/vsc';
import {HiOutlineDocumentText, HiOutlineMailOpen} from 'react-icons/hi';
import {TiDocumentText} from 'react-icons/ti';
import {BsGear} from 'react-icons/bs';

const Navigation = () => {
    return (
        <div>
            <div className='border border-gray-400 rounded-xl text-white flex flex-col'>
                <a href='#home' className='navBar-link'>
                    <span className='hidden'>Home</span>
                    <BiHome className='nav-icon' />
                </a>

                <a href='#aboutContainer' className='navBar-link'>
                    <span className='nav-span hidden'>About</span>
                    <VscPerson className='nav-icon' />
                </a>

                <a href='#resumeContainer' className='navBar-link'>
                    <span className='nav-span hidden'>Resume</span>
                    <HiOutlineDocumentText className='nav-icon' />
                </a>

                <a href='#skillContainer' className='navBar-link'>
                    <span className='nav-span hidden'>Skills</span>
                    <BsGear className='nav-icon' />
                </a>

                <a href='#portfolioContainer' className='navBar-link'>
                    <span className='nav-span hidden'>Portfolio</span>
                    <TiDocumentText className='nav-icon' />
                </a>

                <a href='#contactContainer' className='navBar-link'>
                    <span className='nav-span hidden'>Contact</span>
                    <HiOutlineMailOpen className='nav-icon' />
                </a>
            </div>
        </div>
    )
}

export default Navigation;