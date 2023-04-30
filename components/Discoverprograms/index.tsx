import React from 'react';
import Course1 from '@/public/images/course1.png'
import Course2 from '@/public/images/course2.png'
import Course3 from '@/public/images/course3.png'
import Plant from '@/public/images/plant.png'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import Image, { StaticImageData } from 'next/image';
import Heading from '../Heading';

function DiscoverPrograms() {

    interface IData {
        title: string;
        text: string;
        img: StaticImageData;
        link: string
    }

    let data: IData[] = [
        {
            title: 'Facebook blueprint certification',
            text: 'Break into a new field like information technology or data science No prior experience necessary',
            img: Course1,
            link: 'https://blog.hootsuite.com/facebook-blueprint/'
        },
        {
            title: 'Start dropshipping  today',
            text: 'With dropshipping apps, products ship directly from the supplier to your customer',
            img: Course2,
            link: 'https://www.shopify.com/blog/dropshipping-guide'
        },
        {
            title: 'Google Ads certified Professional',
            text: 'Break into a new field like information technology or data science No prior experience necessary',
            img: Course3,
            link: 'https://support.google.com/google-ads/answer/9702955?hl=en'
        },
    ]
    return (
        <div className='bg-light-gray mt-20 py-20 relative'>
            <Image src={Plant} alt='plant' className='absolute left-10 -top-32' />
            <div className='w-[1100px] xl-lg:w-[90%] m-auto'>
                <Heading shortText='Popular Courses' text='Discover Your Perfect Program In Our Our Courses' />
                <div className='grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-5 mt-14'>
                    {
                        data.map((val: IData, index) => {
                            return (
                                <div key={index} className='bg-white'>
                                    <Image src={val.img} alt={val.title} className='w-full' />
                                    <div className='p-4'>
                                        <div className='box_shadow h-32 flex items-center px-3 text-xl text-dark-pirple bg-white font-bold -mt-10 relative z-20'>
                                            {val.title}
                                        </div>
                                        <p className='text-sm text-medium-gray mt-7'>{val.text}</p>
                                        <a href={val.link} target='_blank'><button className='py-3 px-5 text-dark-pirple text-xs mt-3 font-bold bg-light-gray flex items-center gap-1'>Start Now <HiOutlineArrowSmRight size={18} /></button></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className='text-medium-gray text-sm w-[60%] text-center m-auto mt-10'>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. <span className='text-cyan font-semibold'>Register Free Now!</span></p>
            </div>
        </div>
    );
}

export default DiscoverPrograms;