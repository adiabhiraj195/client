import SectionHeading from "../components/section-heading";
import { BsGear } from 'react-icons/bs';
import SkillsCard from '../components/skills-card';
import { DiJavascript1, DiJava, DiReact } from 'react-icons/di';
import { FaCss3Alt,FaNodeJs } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
    return (
        <div className='mb-10' id="skill">
            <SectionHeading heading='SKILLS' Icon={BsGear} />

            <div className='p-2'>
                <SkillsCard skillName='JavaScript' Icon={DiJavascript1} />
                <SkillsCard skillName='TypeScript' Icon={TbBrandTypescript} />
                <SkillsCard skillName='ReactJs' Icon={DiReact} />
                <SkillsCard skillName='NodeJs' Icon={FaNodeJs} />
                <SkillsCard skillName='Tailwind' Icon={FaCss3Alt} />
                <SkillsCard skillName='Express' Icon={SiExpress} />
                <SkillsCard skillName='MongoDB' Icon={SiMongodb} />
            </div>
        </div>
    )
}

export default Skills;