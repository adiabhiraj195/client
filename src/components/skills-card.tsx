interface SkillsInterface {
    skillName: string;
    Icon: React.ComponentType;
}

const SkillsCard = ({
    skillName,
    Icon
}: SkillsInterface) => {
    return (
        <div className='flex text-white align-middle items-center mb-6'>
            <div className='h-px bg-gray-500 w-14'></div>
            <div className='text-5xl'>
                <Icon />
            </div>
            <div className='h-px bg-gray-500 w-full'></div>
            <p className='text-xl font-light '>{skillName}</p>
            <div className='h-px bg-gray-500 w-10 mr-52'></div>
        </div>
    )
}

export default SkillsCard;