import React from 'react';
import Partner1 from '@/public/images/partner1.png'
import Partner2 from '@/public/images/partner2.png'
import Partner3 from '@/public/images/partner3.png'
import Partner4 from '@/public/images/partner4.png'
import Partner5 from '@/public/images/partner5.png'
import Partner6 from '@/public/images/partner6.png'
import Image from 'next/image';

function Partners() {
    return (
        <div className='w-[900px] lg:w-[90%] m-auto'>
            <div className='w-full grid grid-cols-6 md:grid-cols-3 justify-items-center items-center gap-5 my-10 mt-20'>
                <Image src={Partner1} alt='partner' />
                <Image src={Partner2} alt='partner' />
                <Image src={Partner3} alt='partner' />
                <Image src={Partner4} alt='partner' />
                <Image src={Partner5} alt='partner' />
                <Image src={Partner6} alt='partner' />
            </div>
            <p className='text-sm text-medium-gray w-3/5 md:w-3/4 xs:w-full m-auto text-center'>Access 5,000+ courses, 100+ SkillSets and 1,900+ Guided Projects from top universities and companies.</p>
        </div>
    );
}

export default Partners;