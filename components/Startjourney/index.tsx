import Image from 'next/image';
import React from 'react';
import Heading from '../Heading';
import Journey from '@/public/images/journey.png'
import Icon1 from '@/public/images/icons/icon1.png'
import Icon2 from '@/public/images/icons/icon2.png'
import Icon3 from '@/public/images/icons/icon3.png'
import Icon4 from '@/public/images/icons/icon4.png'

function StartJourney() {

    return (
        <div className='bg-light-gray py-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto'>
                <Heading shortText='Start To Success' text='Start your journey & Achieve your goal' />
                <div className='flex lg-md:flex-col-reverse justify-between items-center gap-10 mt-14'>
                    <div className='w-1/2 lg-md:w-full grid grid-cols-2 xs:grid-cols-1 gap-7 lg:gap-3 xs:gap-7'>
                        <div className='bg-white h-24 xs:h-20 p-4 flex gap-5 items-center'>
                            <div className='h-[100px] xs:h-[85px] -mt-9 w-[70px] flex justify-center items-center rounded-lg gradient1'>
                                <Image src={Icon1} alt='icon1' className='w-7' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold flex-shrink-0'>56,892</h1>
                                <h1 className='text-sm text-medium-gray'>Student enrolled</h1>
                            </div>
                        </div>
                        <div className='bg-white h-24 xs:h-20 p-4 flex gap-5 items-center'>
                            <div className='h-[100px] xs:h-[85px] -mt-9 w-[70px] flex justify-center items-center rounded-lg gradient2'>
                                <Image src={Icon2} alt='icon1' className='w-7' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold flex-shrink-0'>24,053</h1>
                                <h1 className='text-sm text-medium-gray'>Classes completed</h1>
                            </div>
                        </div>
                        <div className='bg-white h-24 xs:h-20 p-4 flex gap-5 items-center mt-5 xs:mt-0'>
                            <div className='h-[100px] xs:h-[85px] -mt-9 w-[70px] flex justify-center items-center rounded-lg gradient3'>
                                <Image src={Icon3} alt='icon1' className='w-6' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold flex-shrink-0'>92%</h1>
                                <h1 className='text-sm text-medium-gray'>Learners report</h1>
                            </div>
                        </div>
                        <div className='bg-white h-24 xs:h-20 p-4 flex gap-5 items-center mt-5 xs:mt-0'>
                            <div className='h-[100px] xs:h-[85px] -mt-9 w-[70px] flex justify-center items-center rounded-lg gradient4'>
                                <Image src={Icon4} alt='icon1' className='w-6' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-bold flex-shrink-0'>3,098</h1>
                                <h1 className='text-sm text-medium-gray'>Top instructors</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 lg-md:w-full flex justify-center'>
                        <Image src={Journey} alt='journey' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartJourney;