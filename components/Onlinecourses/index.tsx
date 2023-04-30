import React from 'react';
import { TbChecks } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineHome } from 'react-icons/hi'
import Book from '@/public/images/book.png'
import Vase from '@/public/images/vase.png'
import Image from 'next/image';
import UnderLine from '@/public/images/underline.png'


function OnlineCourses() {
    return (
        <div className='bg-white'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto py-20 relative flex lg-md:block justify-between items-center'>
                <Image src={Vase} alt='vase' className='absolute -top-10 right-0' />
                <div className='w-[40%] lg-md:w-full'>
                    <p className='text-xs font-semibold text-cyan md:text-center'>Over 5500+ courses available</p>
                    <div className='text-3xl md:text-2xl w-fit md:m-auto md:mb-10 text-dark-pirple font-extrabold mt-5 relative'>
                        <h1 className='lg-md:hidden'>Affordable online courses &</h1>
                        <h1 className='lg-md:hidden'>learning opportunities</h1>
                        <h1 className='hidden lg-md:block md:text-center'>Affordable online courses & learning opportunities</h1>
                        <Image src={UnderLine} alt='underline' className='sm:hidden md:w-20 absolute bottom-[30%] md:-bottom-5 -right-10 md:right-10' />
                    </div>
                    <p className='text-medium-gray leading-loose text-sm mt-5'>Break into a new field like information technology o data science. No prior experience necessary to get started. Break a new field like information technology.</p>
                    <div className='mt-3'>
                        <div className='flex gap-2'>
                            <div className='w-5'>
                                <TbChecks size={18} className='text-cyan' />
                            </div>
                            <p className='text-sm text-dark-pirple font-normal'>Lifetime access with expert trainers</p>
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <div className='w-5'>
                                <TbChecks size={18} className='text-cyan' />
                            </div>
                            <p className='text-sm text-dark-pirple font-normal'>Remote learning & self development</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] lg-md:w-full lg-md:mt-10 flex xs:block items-start gap-5 relative'>
                    <Image src={Book} alt='book' className='xs:hidden absolute -bottom-10 -left-20 lg-md:left-0' />
                    <div className='w-40 h-40 bg-black opacity-10 rounded-full blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                    <div className='p-7 bg-white flex flex-col items-center light_shadow z-10'>
                        <div className='w-14 h-14 flex justify-center items-center bg-light-cyan rounded-md'>
                            <AiOutlineSetting size={25} className='text-dark-blue' />
                        </div>
                        <div className='mt-3'>
                            <h1 className='text-xl text-dark-pirple font-bold text-center'>Learn the essential skills</h1>
                            <p className='text-sm text-medium-gray leading-loose mt-2 text-center'>This hybrid training programme teaches Digital Marketing Architecture System Programme from scratch. Experts instruct the hands-on DMAS programme. Learn in-depth information about automated marketing, social media, email, affiliate marketing, and SEO/SEM.</p>
                        </div>
                    </div>
                    <div className='p-7 bg-white flex flex-col items-center light_shadow z-10 mt-20 xs:mt-5'>
                        <div className='w-14 h-14 flex justify-center items-center bg-light-cyan rounded-md'>
                            <HiOutlineHome size={25} className='text-dark-blue' />
                        </div>
                        <div className='mt-3'>
                            <h1 className='text-xl text-dark-pirple font-bold text-center'>Learn in your own place</h1>
                            <p className='text-sm text-medium-gray leading-loose mt-2 text-center'>Home study delivers numerous advantages considering it&#39;s a relaxing, stress-free setting. It might be challenging to study at home for a few reasons, including the numerous temptations that make it simple to put off starting and make it simple to get sidetracked once you do.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineCourses;