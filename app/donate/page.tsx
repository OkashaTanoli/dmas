'use client'

import React, { FormEvent } from 'react';
import { PageHeading } from '@/components';
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaMoneyBill } from 'react-icons/fa'

function Donate() {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className=''>
            <PageHeading text='Donate Now' />
            <div className='w-[600px] md:w-[90%] h-[450px] _3d_container m-auto my-32'>
                <div className='_3d_form shadow-[0_0_10px_rgba(0,0,0,0.3)] p-10 sm:p-5 ml-5'>

                    <h1 className='text-2xl font-semibold text-zinc-600 text-center'>Donate Now</h1>
                    <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5'>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <RiAccountCircleFill size={26} className='text-white' />
                            </div>
                            <input type="text" name='Name' required placeholder='Name' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <IoMdCall size={26} className='text-white' />
                            </div>
                            <input type="text" name='Phone Number' required placeholder='Phone' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <MdEmail size={26} className='text-white' />
                            </div>
                            <input type="email" name='Email' required placeholder='Email Address' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <FaMoneyBill size={26} className='text-white' />
                            </div>
                            <input type="number" name='Payment' required placeholder='Donation Total' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <button type='submit' className='py-3 text-white tracking-wide bg-dark-blue'>DONATE NOW</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Donate;