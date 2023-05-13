'use client'

import { Loader, PageHeading } from '@/components';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { app } from '@/utils/firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from 'next/image';



function AddMember() {
    const [data, setData] = useState({
        name: '',
        number: '',
        work: '',
        image: ''
    })
    const [loading, setLoading] = useState(false)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = async (e: any) => {
        const file = e.target.files[0]
        console.log(file)
        if (!file) {
            return
        }
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            return alert("Select Only PNG, JPEG or JPG")
        }
        setUploadingImage(true)
        const storage = getStorage(app);
        const storageRef = ref(storage, `images/${Date.now().toString()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => { },
            (error) => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData({
                        ...data,
                        image: downloadURL
                    })
                    setUploadingImage(false)
                });
            }
        );

    }


    let notEmpty = data.name && data.number && data.work && data.image

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        fetch('/api/addmember', {
            method: 'POST',
            body: JSON.stringify({ name: data.name, number: data.number, work: data.work, image: data.image })
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
                        <div className='my-5'>
                            <label htmlFor="image" className='m-auto w-full h-[80px] border border-dashed border-zinc-300 flex justify-center items-center text-zinc-800 text-center text-lg font-extrabold'>{uploadingImage ? <Loader width='w-4' height='h-4' /> : 'Upload Image'}</label>
                            <input type="file" onChange={handleImageChange} disabled={uploadingImage} hidden name="image" id="image" />
                        </div>
                        {
                            data.image &&
                            <div className='h-[130px] my-3 flex justify-center items-center'>
                                <Image src={data.image} alt='image' className='h-full w-auto' width={700} height={700} />
                            </div>
                        }
                        {
                            notEmpty ? 
                            <button className='text-white w-full mt-3 bg-green-500 font-bold flex justify-center items-center h-[40px]'>{loading ? <Loader width='w-4' height='h-4' /> : 'Submit'}</button>
                            :
                            <button type='button' className='text-white w-full cursor-not-allowed mt-3 bg-gray-500 font-bold flex justify-center items-center h-[40px]'>Submit</button>
                        }
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