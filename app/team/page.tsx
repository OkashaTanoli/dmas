import React from 'react';
import { PageHeading } from '@/components';
import Image from 'next/image';
// import Img from '@/public/images/man.png'
import Team1 from '@/public/images/team1.jpg'
import Team2 from '@/public/images/team2.jpg'
import Team3 from '@/public/images/team3.jpg'
import Team4 from '@/public/images/team4.jpg'
import Team5 from '@/public/images/team5.jpg'

function Team() {

    const data = [
        { color: 'bg-[#ff5869]', image: Team1, title: 'Chief Executive Officer', sub_title: 'CEO', list: ['Clinical Psychologist', 'Transformation Coach', 'Entrepreneur', 'Author', 'Motivational Speaker', 'IT Engineer', 'Director of IIRDC'] },
        { color: 'bg-[#52cabe]', image: Team2, title: 'Chief Tenchnology Officer', sub_title: 'CTO', list: ['Serial Entrepreneur', 'Enabler', 'Career Counselor', 'Technology Consultant', 'IT Engineer', 'Co-Founder & Director of DIA'] },
        { color: 'bg-[#fec631]', image: Team2, title: 'Chief Operating Officer', sub_title: 'COO', list: ['Industry Consultant', 'Professional Expertise in Startups, Value Creation', 'Career Counselor', 'Technology Consultant', 'IT Engineer', 'HEC official Resource Person for FDP'] },
    ]

    const data2 = [
        { color: 'bg-[#ff5869]', image: Team3, title: 'Syed Ehtisham Uddin', sub_title: 'Sr. Web Developer' },
        { color: 'bg-[#52cabe]', image: Team4, title: 'Muhammad Zubair Ilyas', sub_title: 'Sr. Graphic Designer' },
        { color: 'bg-[#fec631]', image: Team5, title: 'Huzaifa Ahmed Siddiqui', sub_title: 'Sr. Web Developer' },
    ]

    return (
        <div>
            <PageHeading text='Our Team' />
            <div className='w-[1100px] xl-lg:w-[90%] m-auto mt-20 mb-20'>
                <h1 className='text-3xl text-zinc-800 font-bold text-center mb-10'>DMAS Team <span className='text-sm'>(Co-Founders)</span></h1>
                <div className='grid grid-cols-3 lg-md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {
                        data.map((val, index) => {
                            return (
                                <div key={index} className='shadow-2xl rounded-3xl overflow-hidden flex flex-col'>
                                    <div className={`text-white font-bold py-5 text-center relative ${val.color}`}>
                                        <p className='text-xl relative z-20'>{val.title}</p>
                                        <div className={`w-[150px] h-[150px] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[60px] ${val.color}`}><p className='absolute left-1/2 -translate-x-1/2 bottom-[20px] text-3xl'>{val.sub_title}</p></div>
                                    </div>
                                    <div className='pt-14 bg-[#F8F8F8] flex-grow flex flex-col'>
                                        <ul className='list-outside ml-5 list-disc p-7'>
                                            {
                                                val.list.map((item, index2) => {
                                                    return (
                                                        <li key={index2} className='text-zinc-800 font-semibold'>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className='flex-grow flex items-end justify-center'>
                                            <Image src={val.image} alt='img' className='w-[80%]' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className='w-[1100px] xl-lg:w-[90%] m-auto mt-20 mb-20'>
                <h1 className='text-3xl text-zinc-800 font-bold text-center mb-10'>DMAS Team <span className='text-sm'>(GD/VE & UI/UX)</span></h1>
                <div className='grid grid-cols-3 lg-md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {
                        data2.map((val, index) => {
                            return (
                                <div key={index} className='shadow-2xl rounded-3xl overflow-hidden flex flex-col bg-[#F8F8F8]'>
                                    <div className={`text-white font-bold py-5 text-center relative ${val.color}`}>
                                        <p className='text-2xl relative z-20'>{val.title}</p>
                                        <div className={`w-[150px] h-[150px] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[60px] ${val.color}`}><p className='absolute left-1/2 -translate-x-1/2 bottom-[20px] text-sm'>{val.sub_title}</p></div>
                                    </div>
                                    <div className='mt-20 flex justify-center'>
                                        <Image src={val.image} alt='img' className='w-[80%]' />
                                    </div>

                                    {/* social handlers */}
                                    {/* <div className='self-end mt-5'>
                                        
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Team;