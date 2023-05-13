import React from 'react';
import Heading from '../Heading';
import Skill1 from '@/public/images/skill1.png'
import Skill2 from '@/public/images/skill2.png'
import Skill3 from '@/public/images/skill3.png'
import Skill4 from '@/public/images/skill4.png'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface IData {
    students: number;
    date: string;
    img: StaticImageData;
    title: string;
    text: string;
}

function EnhanceSkills() {
    let data: IData[] = [
        {
            students: 1,
            date: '21/01/23',
            img: Skill1,
            title: 'Emotional intelligence at work: Learn art and emotions',
            text: 'Break into a new field like information technology or data science No prior experience necessary'
        },
        {
            students: 1,
            date: '21/01/23',
            img: Skill2,
            title: 'Learn how to start an amazon FBA store & analysis',
            text: 'Break into a new field like information technology or data science No prior experience necessary'
        },
        {
            students: 1,
            date: '21/01/23',
            img: Skill3,
            title: 'Cinematography Course: Shoot Better Video',
            text: 'Break into a new field like information technology or data science No prior experience necessary'
        },
        {
            students: 1,
            date: '21/01/23',
            img: Skill4,
            title: 'SQL-Data Analysis: Crash Course demand career',
            text: 'Break into a new field like information technology or data science No prior experience necessary'
        },
    ]
    return (
        <div className='py-20'>
            <div className='w-[1100px] xl-lg:w-[90%] m-auto'>
                <Heading shortText='Popular Courses' text='Enhance your skills with best Online courses' />
                <div className='grid grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 gap-5 mt-14'>
                    {
                        data.map((val: IData, index) => {
                            return (
                                <div key={index} className='box_shadow flex flex-col'>
                                    <div>
                                        <Image src={val.img} alt={val.text} className='w-full' />
                                    </div>
                                    <div className='p-5 flex-grow flex flex-col justify-between'>
                                        <div className='flex-grow'>
                                            <div className='flex justify-between text-sm text-medium-gray px-5'>
                                                <p>{val.students} Students</p>
                                                <p>{val.date}</p>
                                            </div>
                                            <h1 className='text-lg text-dark-pirple font-bold mt-3'>{val.title}</h1>
                                        </div>
                                        <p className='text-sm text-medium-gray leading-relaxed mt-3'>{val.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className='w-[70%] m-auto mt-10 text-center text-sm text-medium-gray'>Career & we will guide you through that. <Link href={'/addmember'} className='text-cyan font-semibold'>Register Free Now!</Link></p>
            </div>
        </div>
    );
}

export default EnhanceSkills;