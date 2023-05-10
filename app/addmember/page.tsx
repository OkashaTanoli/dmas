'use client'

import { Loader, PageHeading } from '@/components';
import React, { ChangeEvent, FormEvent, useState } from 'react';

function AddMember() {
    const [data, setData] = useState({
        name: '',
        number: '',
        work: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        fetch('/api/addmember', {
            method: 'POST',
            body: JSON.stringify({ name: data.name, number: data.number, work: data.work })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    setSuccess(true)
                }
                else {
                    setError(true)
                }
                setTimeout(() => {
                    setSuccess(false)
                    setError(false)
                }, 3000)
            })
            .catch(() => {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div>
            <PageHeading text='Add Member' />
            <div className='w-[1100px] xl-lg:w-[90%] m-auto mb-20'>
                <div className='w-[500px] sm:w-full m-auto box_shadow pb-5'>
                    <h1 className='text-xl text-zinc-800 font-bold py-3 px-5 border-b border-zinc-300'>Add Member</h1>
                    <form className='mt-5 px-5' onSubmit={handleSubmit}>
                        <input onChange={handleDataChange} required type="text" name='name' placeholder='Enter Your Name' className='py-2 px-5 text-sm mb-3 text-zinc-800 border border-zinc-300 w-full rounded-lg bg-zinc-50' id="" />
                        <input onChange={handleDataChange} required type="text" name='number' placeholder='Enter Your Number' className='py-2 px-5 text-sm text-zinc-800 border border-zinc-300 w-full rounded-lg bg-zinc-50' id="" />
                        <h1 className='text-xl text-zinc-800 font-bold mt-5'>What Your Work</h1>
                        <textarea onChange={handleDataChange} required name='work' className='resize-none py-2 px-5 text-sm text-zinc-800 border border-zinc-300 w-full rounded-lg bg-zinc-50' rows={3}></textarea>
                        <button className='text-white w-full mt-3 bg-green-500 font-bold flex justify-center items-center h-[40px]'>{loading ? <Loader width='w-4' height='h-4' /> : 'Submit'}</button>
                    </form>
                    {
                        success &&
                        <p className='text-green-600 font-semibold text-sm text-center mt-2'>Member added successfully</p>
                    }
                    {
                        error &&
                        <p className='text-red-600 font-semibold text-sm text-center mt-2'>Something went wrong</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default AddMember;