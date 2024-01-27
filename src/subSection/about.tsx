import SectionHeading from "../components/section-heading";
import { VscPerson } from 'react-icons/vsc';

const About = () => {
    return (
        <div className='mb-10 aboutContainer' id="about">
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
    )
}

export default About;