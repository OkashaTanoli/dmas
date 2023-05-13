'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Loader, PageHeading } from '@/components';
import { RiAccountCircleFill } from 'react-icons/ri'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaMoneyBill } from 'react-icons/fa'

function Donate() {
    const [data, setData] = useState({
        name: '',
        number: '',
        email: '',
        donation: ''
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    let notEmpty = data.name && data.number && data.email && data.donation

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        fetch('/api/donate', {
            method: 'POST',
            body: JSON.stringify({ name: data.name, number: data.number, email: data.email, donation: data.donation })
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
        <div className=''>
            <PageHeading text='Donate Now' />
            <div className='w-[600px] md:w-[90%] h-[450px] _3d_container m-auto my-32'>
                <div className='_3d_form shadow-[0_0_10px_rgba(0,0,0,0.3)] p-10 sm:p-5 ml-5'>

                    <h1 className='text-2xl font-semibold text-zinc-600 text-center'>Donate Now</h1>
                    <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5'>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <RiAccountCircleFill size={26} className='text-white' />
                            </div>
                            <input onChange={handleDataChange} type="text" name='name' required placeholder='Name' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <IoMdCall size={26} className='text-white' />
                            </div>
                            <input onChange={handleDataChange} type="text" name='number' required placeholder='Phone' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <MdEmail size={26} className='text-white' />
                            </div>
                            <input onChange={handleDataChange} type="email" name='email' required placeholder='Email Address' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        <div className='flex'>
                            <div className='w-12 h-14 flex justify-center items-center bg-[#9b8900] flex-shrink-0'>
                                <FaMoneyBill size={26} className='text-white' />
                            </div>
                            <input onChange={handleDataChange} type="number" name='donation' required placeholder='Donation Total' className='flex-grow border-y-2 border-r-2 px-5 focus:outline-none bg-light-gray-2' />
                        </div>
                        {
                            notEmpty ?
                                <button type='submit' className='h-[50px] text-white tracking-wide bg-dark-blue'>{loading ? <Loader width='w-4' height='h-4' /> : 'DONATE NOW'}</button>
                                :
                                <button type='button' className='h-[50px] cursor-not-allowed text-white tracking-wide bg-gray-500'>DONATE NOW</button>
                        }
                    </form>
                    {
                        success &&
                        <p className='text-green-600 font-semibold text-sm text-center mt-2'>Donation message sent successfully</p>
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

export default Donate;