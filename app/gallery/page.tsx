import React from 'react';
import { PageHeading } from '@/components';
import Img from '@/public/images/course2.png'
import Img2 from '@/public/images/slide2.png'
import Img3 from '@/public/images/skill3.png'
import Img4 from '@/public/images/course3.png'
import Image, { StaticImageData } from 'next/image';

function Gallery() {
    let data = [
        Img3,
        Img4,
        Img,
        Img,
        Img2,
        Img2,
        Img,
        Img
    ]
    return (
        <div>
            <PageHeading text='Our Gallery' />
            <div className='w-[1100px] xl-lg:w-[90%] m-auto grid grid-cols-4 xl-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-20'>
                {
                    data.map((img: StaticImageData, index: number) => {
                        return (
                            <div key={index} className='h-[200px] sm:h-[300px] xs:h-[200px] flex justify-center items-center overflow-hidden'>
                                <Image src={img} alt='image' className='w-full h-auto ' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Gallery;