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


    const data2 = [
        { color: 'bg-[#ff5869]', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi perspiciatis tempora mollitia laborum dolores quam, nulla ratione iure unde illum ab nemo culpa praesentium reprehenderit commodi! Facere, deserunt eos!' },
        { color: 'bg-[#52cabe]', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi perspiciatis tempora mollitia laborum dolores quam, nulla ratione iure unde illum ab nemo culpa praesentium reprehenderit commodi! Facere, deserunt eos!' },
        { color: 'bg-[#fec631]', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi perspiciatis tempora mollitia laborum dolores quam, nulla ratione iure unde illum ab nemo culpa praesentium reprehenderit commodi! Facere, deserunt eos!' },
    ]


    const data3 = [
        { id: 'A', element: <p className='text-white text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, modi veniam. Voluptatibus labore expedita nisi obcaecati, laboriosam dicta consequuntur hic quas ullam modi autem perspiciatis eos cumque iusto rem voluptate.</p> },
        { id: 'B', element: <p className='text-white text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, modi veniam. Voluptatibus labore expedita nisi obcaecati, laboriosam dicta consequuntur hic quas ullam modi autem perspiciatis eos cumque iusto rem voluptate.</p> },
        { id: 'C', element: <p className='text-white text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, modi veniam. Voluptatibus labore expedita nisi obcaecati, laboriosam dicta consequuntur hic quas ullam modi autem perspiciatis eos cumque iusto rem voluptate.</p> },

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

            <div className='w-[1100px] xl-lg:w-[90%] m-auto mt-20 mb-20'>
                <h1 className='text-xl text-zinc-800 font-semibold text-center mb-10'>What will you be capable of accomplishing after finishing the DMAS Program</h1>
                <div className='grid grid-cols-3 lg-md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {
                        data2.map((val, index) => {
                            return (
                                <div key={index} className='shadow-2xl rounded-3xl overflow-hidden'>
                                    <div className={`text-3xl text-white font-bold py-5 text-center relative ${val.color}`}>
                                        <p className='relative z-20'>Statement</p>
                                        <div className={`w-[150px] h-[150px] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[60px] ${val.color}`}><p className='absolute left-1/2 -translate-x-1/2 bottom-[20px] text-6xl'>{index + 1}</p></div>
                                    </div>
                                    <p className='text-xl text-center p-5 text-zinc-800 mt-16'>{val.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='w-[1100px] xl-lg:w-[90%] m-auto mt-20 mb-20'>
                <h1 className='text-xl text-zinc-800 font-semibold text-center mb-10'>How does one develop into a digital marketing expert?</h1>
                <div className='grid grid-cols-3 lg-md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {
                        data3.map((val, index) => {
                            return (
                                <div key={index} className='bg-[#7e9dde] py-7 px-5'>
                                    <h1 className='text-[70px] font-bold outline-title leading-none mb-5'>{val.id}</h1>
                                    {val.element}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default About;