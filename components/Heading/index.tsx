import Image from 'next/image';
import React from 'react';
import UnderLine from '@/public/images/underline.png'

function Heading({ shortText, text }: { shortText: string, text: string }) {
    return (
        <div className='relative w-fit m-auto'>
            <p className='text-xs font-semibold text-cyan text-center'>{shortText}</p>
            <h1 className='text-3xl md:text-2xl text-dark-pirple font-extrabold text-center' >{text}</h1>
            <Image src={UnderLine} alt='underline' className='absolute md:w-20 sm:hidden -bottom-5 right-14' />
        </div>
    );
}

export default Heading;