import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Category1 from '@/public/images/categories/category1.png'
import Category2 from '@/public/images/categories/category2.png'
import Category3 from '@/public/images/categories/category3.png'
import Category4 from '@/public/images/categories/category4.png'
import Category5 from '@/public/images/categories/category5.png'
import Category6 from '@/public/images/categories/category6.png'
import Category7 from '@/public/images/categories/category7.png'
import Category8 from '@/public/images/categories/category8.png'
import Category9 from '@/public/images/categories/category9.png'
import Category10 from '@/public/images/categories/category10.png'
import Category11 from '@/public/images/categories/category11.png'
import Category12 from '@/public/images/categories/category12.png'
import Category13 from '@/public/images/categories/category13.png'
import Category14 from '@/public/images/categories/category14.png'
import Category15 from '@/public/images/categories/category15.png'
import Category16 from '@/public/images/categories/category16.png'
import Heading from '../Heading';


interface IData {
    title: string;
    img: StaticImageData;
}

function Categories() {

    let data: IData[] = [
        { title: 'Digital Marketing Overview', img: Category1 },
        { title: 'Website Creation and Planing', img: Category2 },
        { title: 'Search Engine Optimization', img: Category3 },
        { title: 'PPC Traffic & Adwords', img: Category4 },
        { title: 'Social Media Marketing', img: Category5 },
        { title: 'Mobile Marketing', img: Category6 },
        { title: 'Display Advertising', img: Category7 },
        { title: 'Email Marketing', img: Category8 },
        { title: 'Ecommerce Marketing', img: Category9 },
        { title: 'Lead Generation    ', img: Category10 },
        { title: 'Content Markeeting', img: Category11 },
        { title: 'Reputation Management', img: Category12 },
        { title: 'Google Analytics', img: Category13 },
        { title: 'Blogging', img: Category14 },
        { title: 'Advertising Strategy', img: Category15 },
        { title: 'Freelancing', img: Category16 },
    ]

    return (
        <div className='bg-light-gray py-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto'>
                <Heading shortText='Top Categories' text='Top Categories you want to learn' />
                <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-5 xs:gap-3 mt-14'>
                    {
                        data.map((val: IData, index) => {
                            return (
                                <div key={index} className='p-5 flex items-center gap-3 bg-white'>
                                    <Image src={val.img} alt={val.title} className='w-10' />
                                    <p className='text-dark-pirple leading-5 text-sm'>{val.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Categories;