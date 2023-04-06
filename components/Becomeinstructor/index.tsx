import Image from 'next/image';
import React from 'react';
import Instructor from '@/public/images/instructor.png'
import InstructorSub from '@/public/images/instructor-sub.png'
import UnderLine from '@/public/images/underline.png'

function BecomeInstructor() {
    return (
        <div className='py-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto flex lg-md:flex-col-reverse justify-between items-center gap-20 lg:gap-5 bg-light-gray px-10 lg-md:px-5'>
                <div className='w-1/2 lg-md:w-full lg-md:py-5 flex items-center justify-between gap-20 relative'>
                    <Image src={Instructor} alt='Instructor' className='w-[70%] lg:w-[80%] lg-md:w-[60%] md:w-[70%]' />
                    <Image src={InstructorSub} alt='InstructorSub' className='absolute bottom-20 right-0 lg-md:right-[20%] md:right-[10%] sm:right-[5%] lg:w-14 lg-md:w-20 xs:w-16' />
                </div>
                <div className='w-1/2 lg-md:w-full py-5 pr-5'>
                    <p className='text-xs font-semibold text-cyan md:text-center'>Over 25+ courses available</p>
                    <div className='text-3xl md:text-2xl w-fit md:m-auto md:mb-10 text-dark-pirple font-extrabold mt-5 relative'>
                        <h1 className='md:text-center'>Become an Instructor Join the millions learning</h1>
                        {/* <h1 className=''>the millions learning</h1> */}
                        <Image src={UnderLine} alt='underline' className='w-24 sm:hidden md:w-20 absolute bottom-[30%] md:-bottom-5 -right-10 md:right-10' />
                    </div>
                    <div className='flex md:justify-center'>
                        <button className='py-3 px-7 bg-dark-blue text-sm font-semibold text-white mt-7 md:m-auto'>Start Teaching Today</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomeInstructor;