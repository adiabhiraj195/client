import SectionHeading from "../components/section-heading";
import { HiOutlineDocumentText, HiOutlineMailOpen } from 'react-icons/hi';


const Contact = () => {
    return (
        <div className='mb-10'>
            <SectionHeading heading='CONTACT' Icon={HiOutlineMailOpen} />

            <div className='pl-2'>
                <h1 className='text-white text-4xl mb-6'>Let's Work <span className='text-[#28e98c]'>Together!</span></h1>
                <p className='text-gray-300 text-2xl font-light mb-6'>adiabhiraj141@gmail.com</p>

                <div>
                    <div className='flex w-full mb-3'>
                        <div className='flex flex-col text-white w-1/2'>
                            <label htmlFor='fullname-input'>Full Name</label>
                            <input type='text' id='fullname-input' placeholder='Your full name' className='bg-transparent outline-none border-none pt-1' />
                        </div>
                        <div className='flex flex-col text-white w-1/2'>
                            <label htmlFor='email-input'>Email</label>
                            <input type='email' id='email-input' placeholder='Your Email' className='bg-transparent outline-none border-none pt-1' />
                        </div>
                    </div>

                    <div className='flex flex-col text-white'>
                        <label htmlFor='textarea'>Message</label>
                        <textarea rows={4} id='textarea' placeholder='Want to say something' className='bg-transparent outline-none border-none pt-1' />
                    </div>

                    <input type='button' value="Submit" className='text-black w-fit p-10 pt-2 pb-2 border-2 border-[#28e98c] rounded-3xl bg-[#28e98c] text-lg font-medium mt-5 hover:text-[#28e98c] hover:bg-black transition-colors cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Contact;