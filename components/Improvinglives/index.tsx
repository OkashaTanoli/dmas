import React from 'react';
import Heading from '../Heading';
import Lives1 from '@/public/images/lives1.png'
import Lives2 from '@/public/images/lives2.png'
import Lives3 from '@/public/images/lives3.png'
import Image, { StaticImageData } from 'next/image';


interface IData {
    title: string;
    text: string;
    icon: StaticImageData;
}

function ImprovingLives() {

    let data: IData[] = [
        {
            title: 'Earn certificates and degrees',
            text: 'Break into a new field like format technology or data science get started.',
            icon: Lives1
        },
        {
            title: 'Learn anything together',
            text: 'Break into a new field like format technology or data science get started.',
            icon: Lives2
        },
        {
            title: 'Learn with experts',
            text: 'Break into a new field like format technology or data science get started.',
            icon: Lives3
        },
    ]

    return (
        <div className='py-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto'>
                <Heading shortText='Transform Your Life' text='Improving lives through learning' />
                <div className='mt-14 grid grid-cols-3 sm:grid-cols-1 gap-10'>
                    {
                        data.map((val: IData, index) => {
                            return (
                                <div key={index}>
                                    <Image src={val.icon} alt={val.title} />
                                    <h1 className='text-xl text-dark-pirple font-bold mt-5'>{val.title}</h1>
                                    <p className='text-sm text-medium-gray leading-loose mt-5'>{val.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ImprovingLives;