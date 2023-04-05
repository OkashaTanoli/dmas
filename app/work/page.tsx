import { PageHeading } from '@/components';
import React from 'react';

function Work() {

    interface IData {
        title: string;
        text: string;
    }

    let data: IData[] = [
        {
            title: 'Title',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil officiis quos sit tenetur iure harum, nam dignissimos natus, quaerat, debitis reprehenderit soluta quam nostrum odio voluptates aperiam numquam aliquam ratione?'
        },
        {
            title: 'Title',
            text: 'Nihil officiis quosit amet consectetur, Lorem ipsum dolor. adipisicing elits sit tenetur iure harum, nam dignissimos natus, quaerat, debitis reprehenderit soluta quam nostrum odio voluptates aperiam numquam aliquam ratione?'
        },
        {
            title: 'Title',
            text: 'Consectetur, Ni psum dolor sit amet consectetur, hil officiis quosorem ipsum dolor sit amet  sit tenetur iure harum adipisicing elit. Nihil officiis quos sit tenetur iure harum, nam dignissimos natus, quaerat, debitis reprehenderit soluta quam nostrum odio voluptates aperiam numquam aliquam ratione?'
        },
    ]
    return (
        <div>
            <PageHeading text='Our Work' />
            <div className='w-[1100px] xl-lg:w-[90%] m-auto my-20 flex flex-col gap-7'>
                {
                    data.map((val: IData, index: number) => {
                        return (
                            <div key={index}>
                                <h1 className='text-3xl text-zinc-700 font-bold'>{val.title}</h1>
                                <p className='text-sm text-zinc-700 font-semibold mt-3'>{val.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Work;