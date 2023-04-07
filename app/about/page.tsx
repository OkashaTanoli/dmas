import { PageHeading } from '@/components';
import React from 'react';

function About() {
    interface IData {
        icon: string;
        text: string;
    }
    let data: IData[] = [
        {
            icon: 'ICON',
            text: 'Become a Volunteer'
        },
        {
            icon: 'ICON',
            text: 'Quick Fundrais'
        },
        {
            icon: 'ICON',
            text: 'Give Donation'
        },
        {
            icon: 'ICON',
            text: 'Help Someone'
        },

    ]
    return (
        <div>
            <PageHeading text='About US' />
            <div className='py-20 bg-gray-200'>
                <div className='w-[1100px] xl-lg:w-[90%] m-auto flex lg-md:flex-col gap-10'>
                    <div className='w-1/2 lg-md:w-full'>
                        <h1 className='text-3xl font-bold text-zinc-700'>About US</h1>
                        {/* <p className='text-sm font-semibold leading-loose text-zinc-600 mt-5 indent-4'> */}
                            <ul className="ulList list-disc text-sm font-semibold leading-loose text-zinc-600 mt-5">

                                <li>Provide education and information on Mental Health</li>
                                <li>Offer participants information and other resources they need to understand the causes,symptoms and possible treatments options of a disorder.</li>
                                <li>Therapeutic interaction with focus on development of skills</li>
                                <li>Empowering participants to identify daily emotions and unhelpful thoughts.</li>
                                <li>Identifying support safety networks.</li>
                                <li>Natural coping mechanisms on demands of everyday life.</li>

                            </ul>
                        {/* </p> */}
                    </div>
                    <div className='w-1/2 lg-md:w-full grid grid-cols-2 sm:grid-cols-1 gap-7'>
                        {
                            data.map((val: IData, index: number) => {
                                return (
                                    <div key={index} className='h-[200px] flex flex-col rounded-2xl justify-evenly items-center bg-white'>
                                        <h1 className='text-5xl font-bold'>{val.icon}</h1>
                                        <h1 className='text-xl text-zinc-600 text-center'>{val.text}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;