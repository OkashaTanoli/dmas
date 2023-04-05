import React from 'react';
import Card1 from '@/public/images/card1.png'
import Card2 from '@/public/images/card2.png'
import Card3 from '@/public/images/card3.png'
import Card4 from '@/public/images/card4.png'
import Card5 from '@/public/images/card5.png'
import Image, { StaticImageData } from 'next/image';
function MainCards() {

    interface IData {
        text: string;
        img: StaticImageData;
    }

    let data: IData[] = [
        {
            text: 'Despite receiving associate engineering education from government institutes, employment opportunities are limited.',
            img: Card1
        },
        {
            text: 'Lack of knowledge in his/her mother tongue or national language.',
            img: Card2
        },
        {
            text: 'Despite having received vocational training from government and private institutes, the corporate sector has completely ignored them.',
            img: Card3
        },
        {
            text: 'The success rate of new businessmen and women is 8.2% and moving at a snail’s pace.',
            img: Card4
        },
        {
            text: 'Housewives continue to make a small contribution to Pakistan’s economy.',
            img: Card5
        },

    ]
    return (
        <div className='w-[1400px] 2xl:w-[90%] m-auto grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-16'>
            {
                data.map((val: IData, index) => {
                    return (
                        <div key={index} className='bg-light-gray-2 flex flex-col'>
                            <div className='flex-grow'>
                                <div className='bg-cyan w-12 rounded-r-full flex justify-end p-1 mt-5'>
                                    <div className='w-8 h-8 rounded-full bg-dark-blue text-2xl font-semibold text-white flex justify-center items-center'>{index + 1}</div>
                                </div>
                                <p className='text-medium-gray text-sm p-5 leading-loose header:leading-normal'>{val.text}</p>
                            </div>
                            <div className='flex justify-center pb-5'>
                                <Image src={val.img} alt={val.text} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MainCards;