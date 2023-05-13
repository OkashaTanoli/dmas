import Image from 'next/image';
import React from 'react';
import Heading from '../Heading';
import Marketing1 from '@/public/images/marketing1.png'
import Marketing2 from '@/public/images/marketing2.png'
import Marketing3 from '@/public/images/marketing3.png'
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import Link from 'next/link';

function Marketing() {
    return (
        <div className='bg-light-gray my-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto py-20'>
                <Heading shortText='Popular Courses' text='How does one develop into a digital marketing expert?' />
                <div className='grid grid-cols-3 lg-md:grid-cols-2 sm:grid-cols-1 gap-5 mt-14'>
                    <div className='bg-white p-5 min-h-[450px] sm:min-h-0 flex flex-col'>
                        <div className='flex-grow'>
                            <div className='flex justify-center mb-2'>
                                <Image src={Marketing1} alt='marketing' className='w-[85%] sm:w-[90%]' />
                            </div>
                            <hr />
                            <p className='text-medium-gray text-sm leading-loose mt-5'>DMAS&apos;s program is an excellent stepping stone for uneducated people looking to broaden and deepen their knowledge of digital marketing.</p>
                        </div>
                        <Link href={'/addmember'}><button className='py-6 px-5 text-dark-pirple text-xs mt-3 font-bold flex items-center gap-1'>Start Now <HiOutlineArrowSmRight size={18} /></button></Link>
                    </div>
                    <div className='bg-white p-5 min-h-[450px] sm:min-h-0 flex flex-col'>
                        <div className='flex-grow'>
                            <div className='flex justify-center mb-2'>
                                <Image src={Marketing2} alt='marketing' className='w-[85%] sm:w-[90%]' />
                            </div>
                            <hr />
                            <p className='text-medium-gray text-sm leading-loose mt-5'>This hybrid certification program covers advanced digital marketing concepts in a broad range of industries and provides hands-on learning to facilitate learners in developing the skills necessary to thrive in today&apos;s changing marketplace.</p>
                        </div>
                        <Link href={'/addmember'}><button className='py-6 px-5 text-dark-pirple text-xs mt-3 font-bold flex items-center gap-1'>Start Now <HiOutlineArrowSmRight size={18} /></button></Link>
                    </div>
                    <div className='bg-white p-5 min-h-[450px] sm:min-h-0 flex flex-col'>
                        <div className='flex-grow'>
                            <div className='flex justify-center mb-2'>
                                <Image src={Marketing3} alt='marketing' className='w-[85%] sm:w-[90%]' />
                            </div>
                            <hr />
                            <p className='text-medium-gray text-sm leading-loose mt-5'>To become a digital marketing expert, simply follow these three simple steps:</p>
                            <ul className='list-disc ml-5 text-medium-gray text-sm leading-loose'>
                                <li>To become a digital marketing expert, simply follow these three simple steps:</li>
                                <li>Learn essential digital marketing techniques.</li>
                                <li>Presume concerning training and certification, bootcamps, and courses.</li>
                                <li>Get your next start-up through digital marketing technology.</li>
                            </ul>
                        </div>
                        <Link href={'/addmember'}><button className='py-6 px-5 text-dark-pirple text-xs mt-3 font-bold flex items-center gap-1'>Start Now <HiOutlineArrowSmRight size={18} /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Marketing