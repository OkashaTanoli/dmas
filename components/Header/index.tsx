// @ts-header-check

'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/images/logo.png'
import { BsBasket2Fill } from 'react-icons/bs'
import { IoIosMenu } from 'react-icons/io'
import { MdOutlineCall } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Script from 'next/script';
import Link from 'next/link';


function Header() {

    const [open, setOpen] = useState(false)
    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    const googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        },
            'google_translate_element');

    }

    return (
        <>
            <div className={`fixed top-0 left-0 w-screen ${open ? 'h-screen' : 'h-0'} overflow-hidden transition-all bg-[rgba(0,0,0,0.94)] z-50 flex justify-center items-center`}>
                <div className=''>
                    <div onClick={() => setOpen(false)} className='absolute top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex justify-center items-center rounded-full bg-gray-700'>
                        <RxCross2 size={35} className='text-white' />
                    </div>
                    <ul className='text-xl text-white font-semibold flex flex-col gap-3 text-center'>
                        <li className='cursor-pointer'>Home</li>
                        <Link href={'/about'}><li className='cursor-pointer'>About</li></Link>
                        <Link href={'/gallery'}><li className='cursor-pointer'>Gallery</li></Link>
                        <Link href={'/work'}><li className='cursor-pointer'>Our Work</li></Link>
                        <li className='cursor-pointer'>Add Member</li>
                        <Link href={'/donate'}><li className='cursor-pointer'>Donate</li></Link>
                        <Link href={'/contact'}><li className='cursor-pointer'>Contact</li></Link>
                    </ul>
                </div>
            </div>
            <div className='border-b overflow-hidden'>
                <div className='w-[1300px] xl:w-[90%] sm:w-[95%] m-auto flex items-center justify-between'>
                    <div className='flex gap-5 items-center lg:hidden'>
                        <div className='flex gap-3 items-center'>
                            <HiOutlineMail size={16} className='text-medium-gray' />
                            <p className='text-sm text-zinc-600 font-semibold'>m786pkus@dmas.pk</p>
                        </div>
                        <div className='w-[2px] h-5 bg-zinc-600'></div>
                        <div className='flex gap-3 items-center'>
                            <MdOutlineCall size={16} className='text-medium-gray' />
                            <p className='text-sm text-zinc-600 font-semibold'>+923368351269, +923352235929</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center text-zinc-600 lg:hidden'>
                        <p className='text-sm font-semibold'>Follow Us :</p>
                        <div className='flex gap-5 items-center'>
                            <FaFacebookF size={15} />
                            <FaTwitter size={15} />
                            <FaLinkedinIn size={15} />
                        </div>
                    </div>
                    <div id="google_translate_element" className='h-[2.3rem]'> </div>
                </div>
            </div>
            <div className='sticky top-0 left-0 w-full z-30 bg-white shadow-md'>
                <div className='w-[1300px] xl:w-[90%] sm:w-[95%] h-[70px] sm:h-[55px] m-auto flex items-center justify-between'>
                    <Image src={Logo} alt='logo' className='w-36 sm:w-32' />
                    <ul className='flex header:hidden gap-7 text-sm font-bold text-dark-pirple'>
                        <li className='cursor-pointer'>Home</li>
                        <Link href={'/about'}><li className='cursor-pointer'>About</li></Link>
                        <Link href={'/gallery'}><li className='cursor-pointer'>Gallery</li></Link>
                        <Link href={'/work'}><li className='cursor-pointer'>Our Work</li></Link>
                        <li className='cursor-pointer'>Add Member</li>
                        <Link href={'/donate'}><li className='cursor-pointer'>Donate</li></Link>
                        <Link href={'/contact'}><li className='cursor-pointer'>Contact</li></Link>
                    </ul>
                    <div className='flex gap-5 items-center'>
                        <button className='text-xs xs:hidden font-semibold bg-dark-blue text-white py-3 px-7'>Get Started</button>
                        <div className='w-8 h-8 relative flex justify-center items-center border border-dark-blue rounded-full'>
                            <BsBasket2Fill className='text-dark-blue' size={18} />
                            <div className=' w-4 h-4 flex justify-center items-center bg-[#F95265] text-white text-xs font-semibold absolute -bottom-1 -right-1 rounded-full'>2</div>
                        </div>
                        <IoIosMenu onClick={() => setOpen(true)} size={30} className='hidden header:block text-dark-blue' />
                    </div>
                </div>
            </div >
        </>
    );
}

export default Header;