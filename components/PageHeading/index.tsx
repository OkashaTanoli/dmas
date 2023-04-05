import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa'
import { MdDoubleArrow } from 'react-icons/md'

function PageHeading({ text }: { text: string }) {
    return (
        <div className='w-fit m-auto my-14'>
            <h1 className='text-2xl text-dark-blue font-extrabold text-center'>{text}</h1>
            <div className='text-dark-blue flex gap-5 mt-5'>
                <div className='flex gap-3 items-center'>
                    <FaHome size={16} />
                    <Link href={'/'}><p className='text-sm font-bold'>Home</p></Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <MdDoubleArrow size={16} />
                    <p className='text-sm font-bold'>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default PageHeading;