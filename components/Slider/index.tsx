'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '@/public/images/slideimg.png'
import Slider2 from '@/public/images/slide2.png'
import Slider3 from '@/public/images/slide3.png'
import Slider4 from '@/public/images/slide4.png'
import Bulb from '@/public/images/bulb.png'
import Smallbook from '@/public/images/smallbook.png'
import Largebook from '@/public/images/largebook.png'
import Image, { StaticImageData } from 'next/image';


function HeroSlider() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const settings = {
        dotsClass: 'slick-dots line-indicator',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false

        // customPaging: (i: number) => (
        //     <div className='-mt-2 text-xs opacity-0'>{i}</div>
        // ),
    };

    return (
        <div className=''>
            <Slider {...settings} asNavFor={nav2} ref={(slider1: any) => setNav1(slider1)}>

                <div className='flex_important sm:flex-col-reverse justify-between gap-10 md:gap-0 items-center h-[100vh] header:h-[90vh] lg:h-[80vh] md:h-[70vh] sm:h-[550px] xs:h-[500px] bg-light-gray'>
                    <div className='w-[600px] header:w-[450px] sm:w-full sm:mb-10 pl-20 lg-md:pl-10 sm:pl-0'>
                        <h1 className='text-6xl header:text-5xl md:text-3xl text-cyan font-extrabold sm:text-center'>AI-Powered</h1>
                        <h1 className={`text-5xl header:text-4xl md:text-2xl sm:text-xl text-dark-blue font-extrabold capitalize mt-5 sm:mt-2 sm:text-center  leading-tight sm:leading-none`}>digital marketing architecture system</h1>
                    </div>
                    <div className='w-[65%] sm:w-full h-full flex justify-end sm:justify-center items-center relative'>
                        <Image src={Bulb} alt='bulb' className='absolute left-[25%] top-0 w-36 lg:w-32 sm:w-0' />
                        <Image src={Largebook} alt='book' className='absolute sm:w-0 left-10 top-[40%] sm:h-full w-[20%]' />
                        <Image src={Smallbook} alt='book' className='absolute sm:w-0 left-0 bottom-32 w-[14%]' />
                        <Image src={Slider1} alt='slider image' className='w-[80%] sm:w-[90%] xs:w-full sm:h-auto' />
                    </div>
                </div>

                <div className='flex_important sm:flex-col-reverse justify-between gap-10 md:gap-0 items-center h-[100vh] header:h-[90vh] lg:h-[80vh] md:h-[70vh] sm:h-[550px] xs:h-[500px] bg-light-gray'>
                    <div className='w-[600px] header:w-[450px] sm:w-full sm:mb-10 pl-20 lg-md:pl-10 sm:pl-0'>
                        <h1 className='text-6xl header:text-5xl md:text-3xl text-cyan font-extrabold sm:text-center'>AI-Powered</h1>
                        <h1 className={`text-5xl header:text-4xl md:text-2xl sm:text-xl text-dark-blue font-extrabold capitalize mt-5 sm:mt-2 sm:text-center leading-tight sm:leading-none`}>digital marketing architecture system</h1>
                    </div>
                    <div className='w-[65%] sm:w-full h-full flex justify-end sm:justify-center items-center relative'>
                        <Image src={Bulb} alt='bulb' className='absolute left-[25%] top-0 w-36 lg:w-32 sm:w-0' />
                        <Image src={Slider2} alt='slider image' className='w-[90%] lg:w-[100%] sm:w-[90%] xs:w-full sm:h-auto' />
                    </div>
                </div>

                <div className='flex_important sm:flex-col-reverse justify-between gap-10 md:gap-0 items-center h-[100vh] header:h-[90vh] lg:h-[80vh] md:h-[70vh] sm:h-[550px] xs:h-[500px] bg-light-gray'>
                    <div className='w-[600px] header:w-[450px] sm:w-full sm:mb-10 pl-20 lg-md:pl-10 sm:pl-0'>
                        <h1 className='text-6xl header:text-5xl md:text-3xl text-cyan font-extrabold sm:text-center'>AI-Powered</h1>
                        <h1 className={`text-5xl header:text-4xl md:text-2xl sm:text-xl text-dark-blue font-extrabold capitalize mt-5 sm:mt-2 sm:text-center leading-tight sm:leading-none`}>digital marketing architecture system</h1>
                    </div>
                    <div className='w-[65%] sm:w-full h-full flex justify-end sm:justify-center items-center relative'>
                        <Image src={Bulb} alt='bulb' className='absolute left-[30%] top-0 w-36 lg:w-32 sm:w-0' />
                        <Image src={Slider3} alt='slider image' className='w-[80%] lg:w-[90%] sm:w-[90%] xs:w-full sm:h-auto' />
                    </div>
                </div>
                <div className='flex_important sm:flex-col-reverse justify-between gap-10 md:gap-0 items-center h-[100vh] header:h-[90vh] lg:h-[80vh] md:h-[70vh] sm:h-[550px] xs:h-[500px] bg-light-gray'>
                    <div className='w-[600px] header:w-[450px] sm:w-full sm:mb-10 pl-20 lg-md:pl-10 sm:pl-0'>
                        <h1 className='text-6xl header:text-5xl md:text-3xl text-cyan font-extrabold sm:text-center'>Certified</h1>
                        <h1 className={`text-[70px] header:text-[45px] md:text-[35px] text-dark-blue font-extrabold capitalize mt-5 sm:mt-2 sm:text-center leading-tight sm:leading-none`}>DMAS Expert</h1>
                    </div>
                    <div className='w-[65%] sm:w-full h-full flex justify-end sm:justify-center items-center relative'>
                        <Image src={Bulb} alt='bulb' className='absolute left-[25%] top-0 w-36 lg:w-32 sm:w-0' />
                        <Image src={Slider4} alt='slider image' className='w-[90%] lg:w-[100%] sm:w-[90%] xs:w-full sm:h-auto' />
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default HeroSlider;