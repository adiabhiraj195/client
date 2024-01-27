import SectionHeading from "../components/section-heading";
import { HiOutlineMailOpen } from 'react-icons/hi';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef<any>(null);

    const sendMail = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        emailjs.sendForm('service_xxoow7k', 'template_4oywqhd', form.current, 'iTP3-vlfih7v-Kr9q')
            .then((result: { text: any; }) => {
                console.log(result.text);
                setName("");
                setMail("");
                setMessage("");
            }, (error: { text: any; }) => {
                console.log(error.text);
            });
    }
    return (
        <div className='mb-10 ' id="contact">
            <SectionHeading heading='CONTACT' Icon={HiOutlineMailOpen} />

            <div className='pl-2'>
                <h1 className='text-white text-4xl mb-6'>Let's Work <span className='text-[#28e98c]'>Together!</span></h1>
                <p className='text-gray-300 text-2xl font-light mb-6'>adiabhiraj141@gmail.com</p>

                <div>
                    <form ref={form} onSubmit={sendMail}>
                        <div className='flex w-full mb-3'>
                            <div className='flex flex-col text-white w-1/2'>
                                <label htmlFor='fullname-input'>Full Name</label>
                                <input name="from_name" value={name} onInput={(e) => setName((e.target as HTMLInputElement).value)} type='text' id='fullname-input' placeholder='Your full name' className='bg-transparent outline-none border-none pt-1' />
                            </div>
                            <div className='flex flex-col text-white w-1/2'>
                                <label htmlFor='email-input'>Email</label>
                                <input name="email" value={mail} onInput={(e) => setMail((e.target as HTMLInputElement).value)} type='email' id='email-input' placeholder='Your Email' className='bg-transparent outline-none border-none pt-1' />
                            </div>
                        </div>

                        <div className='flex flex-col text-white'>
                            <label htmlFor='textarea'>Message</label>
                            <textarea name="message" value={message} onInput={(e) => setMessage((e.target as HTMLInputElement).value)} rows={4} id='textarea' placeholder='Want to say something' className='bg-transparent outline-none border-none pt-1' />
                        </div>

                        <input onClick={sendMail} type='button' value="submit" className='text-black w-fit p-10 pt-2 pb-2 border-2 border-[#28e98c] rounded-3xl bg-[#28e98c] text-lg font-medium mt-5 hover:text-[#28e98c] hover:bg-black transition-colors cursor-pointer' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;