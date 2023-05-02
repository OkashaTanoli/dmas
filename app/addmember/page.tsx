import { PageHeading } from '@/components';
import React from 'react';

function AddMember() {
    return (
        <div>
            <PageHeading text='Add Member' />
            <div className='w-[1100px] xl-lg:w-[90%] m-auto mb-20'>
                <div className='w-[500px] sm:w-full m-auto box_shadow'>
                    <h1 className='text-xl text-zinc-800 font-bold py-3 px-5 border-b border-zinc-300'>Add Member</h1>
                    <div className='mt-5 px-5 pb-5'>
                        <input type="text" placeholder='Enter Your Name' className='py-2 px-5 text-sm mb-3 text-zinc-800 border border-zinc-300 w-full rounded-lg bg-zinc-50' id="" />
                        <input type="text" placeholder='Enter Your Number' className='py-2 px-5 text-sm text-zinc-800 border border-zinc-300 w-full rounded-lg bg-zinc-50' id="" />
                        <h1 className='text-xl text-zinc-800 font-bold mt-5'>What Your Work</h1>
                        <textarea className='resize-none py-2 px-5 text-sm text-zinc-800 border border-zinc-300 w-full rounded-lg bg-zinc-50' rows={3}></textarea>
                        <button className='text-white w-full mt-3 bg-green-500 font-bold flex justify-center items-center h-[40px]'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMember;