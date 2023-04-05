import Image from 'next/image';
import React from 'react';
import SubscribeImg from '@/public/images/subscribe.png'
import UnderLine from '@/public/images/underline.png'


function Subscribe() {
    return (
        <div className='py-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto subscribe_gradient flex md:block justify-between items-center'>
                <div className='w-1/2 flex justify-center lg:w-[40%] md:w-full -ml-10 md:ml-0'>
                    <Image src={SubscribeImg} alt='subscribe' />
                </div>
                <div className='w-1/2 lg:w-[65%] flex flex-col md:items-center md:w-full py-5 md:px-5'>
                    <div className='text-3xl text-white font-extrabold mt-5 w-fit relative'>
                        <h1 className=''>Subscribe to our Newsletter</h1>
                        <Image src={UnderLine} alt='underline' className='w-24 absolute -bottom-3 right-0' />
                    </div>
                    <p className='text-sm text-white mt-7'>Break into a new field like information technology or data science.</p>
                    <div className='flex xs flex-col gap-5 xs:gap-2 mt-7 w-[85%] md:w-full'>
                        <input type="text" className='border-0 tsxt-sm py-3 xs:py-2 px-5 xs:px-3 flex-grow  bg-white' />
                        <button className='text-white text-sm font-bold bg-cyan py-3 xs:py-2 px-7 xs:px-4'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;