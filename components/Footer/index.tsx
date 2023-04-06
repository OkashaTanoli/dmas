import React from 'react';
import Image from 'next/image';
import Logo from '@/public/images/footerlogo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-light-gray-2'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto grid grid-cols-4 md:justify-items-center md:grid-cols-2 xs:grid-cols-1 gap-10 justify-between py-20'>
                <div className='flex flex-col items-center'>
                    <Image src={Logo} alt='logo' className='mix-blend-darken' />
                    <div className='mt-5'>
                        <p className='text-sm text-dark-pirple leading-loose'>Location : <span className='text-medium-gray'>Pakistan</span></p>
                        <p className='text-sm text-dark-pirple leading-loose'>Phone : <span className='text-medium-gray'>+92 300 230 2648</span></p>
                        <p className='text-sm text-dark-pirple leading-loose'>Email : <span className='text-medium-gray'>info@dmas.pk</span></p>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div className='w-9 h-9 flex justify-center items-center rounded-md bg-[#1977F2]'><FaFacebookF size={20} className='text-white' /></div>
                        <div className='w-9 h-9 flex justify-center items-center rounded-md bg-[#00A7E6]'><FaTwitter size={20} className='text-white' /></div>
                        <div className='w-9 h-9 flex justify-center items-center rounded-md bg-[#0077B5]'><FaLinkedinIn size={20} className='text-white' /></div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-dark-pirple'>Our Company</p>
                    <div className='text-sm text-medium-gray flex flex-col gap-5 md:items-center mt-10'>
                        <p>Home</p>
                        <p>Courses</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-dark-pirple'>Popular Courses</p>
                    <div className='text-sm text-medium-gray flex flex-col gap-5 md:items-center mt-10'>
                        <p>HTML</p>
                        <p>Design</p>
                        <p>Javascript</p>
                        <p>Development</p>
                        <p>Art & Design</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-dark-pirple'>Tracks</p>
                    <div className='text-sm text-medium-gray flex flex-col gap-5 md:items-center mt-10'>
                        <p>Web Development</p>
                        <p>Web Design</p>
                        <p>Life Skills</p>
                        <p>Health & Food</p>
                        <p>Business</p>
                    </div>
                </div>
            </div>
            <p className='w-[1100px] xl-lg:w-[90%] m-auto text-sm text-medium-gray text-center pb-5'>© <span className='text-dark-pirple'>DMAS</span> All Rights Reserved by <span className='text-cyan'>SayPak DMAS Innovation (Pvt.) Ltd.</span></p>
        </div>
    );
}

export default Footer;