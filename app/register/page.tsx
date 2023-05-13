'use client'

import { Loader, PageHeading } from '@/components';
import React, { useState, FormEvent } from 'react';
import { app } from '@/utils/firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from 'next/image';

function Register() {


    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let minDate = tomorrow.toISOString().split('T')[0];

    var minTodayDate = new Date().toISOString().split('T')[0];




    // SQL Query

    // CREATE TABLE register (
    //     id VARCHAR(255),
    //     firstName VARCHAR(255),
    //     lastName VARCHAR(255),
    //     dob VARCHAR(255),
    //     email VARCHAR(255),
    //     image VARCHAR(255),
    //     qualification VARCHAR(255),
    //     phoneNumber VARCHAR(255),
    //     occupation VARCHAR(255),
    //     businessName VARCHAR(255),
    //     organization VARCHAR(255),
    //     attendedTrainBefore VARCHAR(255),
    //     attendedTrainWhen VARCHAR(255),
    //     attendedTrainReason VARCHAR(255),
    //     streetAddress VARCHAR(255),
    //     streetAddress2 VARCHAR(255),
    //     city VARCHAR(255),
    //     province VARCHAR(255),
    //     zipCode VARCHAR(255),
    //     appointmentDate VARCHAR(255),
    //     appointmentTime VARCHAR(255),
    //     role VARCHAR(255),
    //     trainingName VARCHAR(255),
    //     trainingCourseName VARCHAR(255),
    //     preferredDate VARCHAR(255),
    //     preferredDate2 VARCHAR(255),
    //     location VARCHAR(255),
    //     trainingOption VARCHAR(255)
    //   );


    const [loading, setLoading] = useState(false)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    let [data, setData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        image: '',
        qualification: '',
        phoneNumber: '',
        occupation: '',
        businessName: '',
        organization: '',
        attendedTrainBefore: false,
        attendedTrainWhen: '',
        attendedTrainReason: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        province: '',
        zipCode: '',
        appointmentDate: '',
        appointmentTime: '',
        role: '',
        trainingName: '',
        trainingCourseName: '',
        preferredDate: '',
        preferredDate2: '',
        location: '',
        trainingOption: ''
    })


    const handleImageChange = async (e: any) => {
        const file = e.target.files[0]
        // console.log(file)
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
                    setData((prev) => ({
                        ...prev,
                        image: downloadURL
                    }))
                    setUploadingImage(false)
                });
            }
        );

    }

    let notEmpty = data.firstName && data.lastName && data.qualification && data.email && data.image &&
        data.phoneNumber && data.occupation && data.businessName &&
        (data.attendedTrainBefore ? (data.attendedTrainWhen && data.attendedTrainReason) : true) &&
        data.appointmentDate && data.appointmentTime && data.role &&
        (data.role === 'trainee' ? (data.trainingName && data.trainingCourseName && data.preferredDate && data.location && data.trainingOption) : true)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!notEmpty) {
            alert('Please fill all required fields')
            return
        }

        setLoading(true)
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                dob: data.dob,
                email: data.email,
                image: data.image,
                qualification: data.qualification,
                phoneNumber: data.phoneNumber,
                occupation: data.occupation,
                businessName: data.businessName,
                organization: data.organization,
                attendedTrainBefore: data.attendedTrainBefore,
                attendedTrainWhen: data.attendedTrainBefore ? data.attendedTrainWhen : '-',
                attendedTrainReason: data.attendedTrainBefore ? data.attendedTrainReason : '-',
                streetAddress: data.streetAddress,
                streetAddress2: data.streetAddress2,
                city: data.city,
                province: data.province,
                zipCode: data.zipCode,
                appointmentDate: data.appointmentDate,
                appointmentTime: data.appointmentTime,
                role: data.role,
                trainingName: data.role === 'trainee' ? data.trainingName : '-',
                trainingCourseName: data.role === 'trainee' ? data.trainingCourseName : '-',
                preferredDate: data.role === 'trainee' ? data.preferredDate : '-',
                preferredDate2: data.role === 'trainee' ? data.preferredDate2 : '-',
                location: data.role === 'trainee' ? data.location : '-',
                trainingOption: data.role === 'trainee' ? data.trainingOption : '-'
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
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
                console.log('error')
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
            <PageHeading text='Register' />
            <form onSubmit={handleSubmit} className='w-[900px] lg-md:w-[95%] m-auto mt-20 mb-20 box_shadow'>
                <h1 className='text-zinc-800 text-3xl font-extrabold p-8 border-b border-zinc-300'>Training Registration</h1>
                <div className='p-8'>
                    <div>
                        <h1 className='text-zinc-800 text-xl font-bold pb-3 border-b border-zinc-300'>Contact Information</h1>
                        <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="firstName" className='text-zinc-500 font-semibold'>First Name <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='firstName' onChange={(e) => setData({ ...data, firstName: e.target.value })} id='firstName' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="lastName" className='text-zinc-500 font-semibold'>Last Name <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='lastName' onChange={(e) => setData({ ...data, lastName: e.target.value })} id='lastName' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="birthDate" className='text-zinc-500 font-semibold'>Birth Date</label>
                                <input type="date" name='birthDate' max={new Date().toISOString().split('T')[0]} onChange={(e) => setData({ ...data, dob: e.target.value })} id='birthDate' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="email" className='text-zinc-500 font-semibold'>Email Address  <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='email' onChange={(e) => setData({ ...data, email: e.target.value })} id='email' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="qualification" className='text-zinc-500 font-semibold'>Qualification <span className='text-base text-red-600 ml-2'>*</span></label>
                                {/* <input type="text" name='qualification' onChange={(e) => setData({ ...data, qualification: e.target.value })} id='qualification' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' /> */}
                                <select required name="qualification" defaultValue={''} onChange={(e) => setData({ ...data, qualification: e.target.value })} id="qualification" className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none'>
                                    <option value="" disabled></option>
                                    <option value="Matric">Matric</option>
                                    <option value="Inter">Inter</option>
                                    <option value="DAE">DAE</option>
                                    <option value="DIT">DIT</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Masters">Masters</option>
                                    <option value="MPhil">MPhil</option>
                                    <option value="PhD">PhD</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="phoneNumber" className='text-zinc-500 font-semibold'>Phone Number <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='phoneNumber' onChange={(e) => setData({ ...data, phoneNumber: e.target.value })} id='phoneNumber' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="occupation" className='text-zinc-500 font-semibold'>Occupation <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='occupation' onChange={(e) => setData({ ...data, occupation: e.target.value })} id='occupation' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="businessName" className='text-zinc-500 font-semibold'>Business Name <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='businessName' onChange={(e) => setData({ ...data, businessName: e.target.value })} id='businessName' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="occupation" className='text-zinc-500 font-semibold'>Organization / Memberships <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="text" required name='occupation' onChange={(e) => setData({ ...data, organization: e.target.value })} id='occupation' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="" className='text-zinc-500 font-semibold'>Have you attended this training before? (select one)</label>
                                <div className='flex gap-5'>
                                    <div onClick={() => setData({ ...data, attendedTrainBefore: true })} className={`${data.attendedTrainBefore && 'bg-[#0000002d]'} w-[70px] h-[40px] cursor-pointer flex justify-center items-center border border-zinc-300 rounded-md`}>Yes</div>
                                    <div onClick={() => setData({ ...data, attendedTrainBefore: false })} className={`${!data.attendedTrainBefore && 'bg-[#0000002d]'} w-[70px] h-[40px] cursor-pointer flex justify-center items-center border border-zinc-300 rounded-md`}>No</div>
                                </div>
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 xs:block mt-7 xs:mt-0 ${!data.attendedTrainBefore && 'opacity-30'}`}>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="trainWhen" className='text-zinc-500 font-semibold'>If yes, when {data.attendedTrainBefore && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                <input type="text" required={data.attendedTrainBefore} disabled={!data.attendedTrainBefore} name='trainWhen' onChange={(e) => setData({ ...data, attendedTrainWhen: e.target.value })} id='trainWhen' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className={`grid grid-cols-1 xs:block mt-7 xs:mt-0 ${!data.attendedTrainBefore && 'opacity-30'}`}>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="reason" className='text-zinc-500 font-semibold'>Reason(s) for attending this training {data.attendedTrainBefore && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                <textarea required={data.attendedTrainBefore} name='reason' disabled={!data.attendedTrainBefore} onChange={(e) => setData({ ...data, attendedTrainReason: e.target.value })} id='reason' rows={4} className='resize-none w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className={`grid grid-cols-1 xs:block mt-7 xs:mt-0`}>
                            <div className='my-5'>
                                <label htmlFor="image" className='m-auto w-full h-[80px] border-2 border-dashed border-zinc-300 flex justify-center items-center text-zinc-800 text-center text-lg font-extrabold'>{uploadingImage ? <Loader width='w-4' height='h-4' /> : <p>Upload Image <span className='text-base text-red-600 ml-2'>*</span></p>}</label>
                                <input type="file" required onChange={handleImageChange} disabled={uploadingImage} hidden name="image" id="image" />
                            </div>
                        </div>
                        {
                            data.image &&
                            <div className='h-[130px] bg-zinc-100 mb-3 flex justify-center items-center'>
                                <Image src={data.image} alt='image' className='h-full w-auto' width={700} height={700} />
                            </div>
                        }

                    </div>

                    <div className='mt-10'>
                        <h1 className='text-zinc-800 text-xl font-bold pb-3 border-b border-zinc-300'>Address Information</h1>
                        <div className='grid grid-cols-1 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="address" className='text-zinc-500 font-semibold'>Address <span className='text-xs text-zinc-400'>(Street Address)</span></label>
                                <input type="text" name='address' onChange={(e) => setData({ ...data, streetAddress: e.target.value })} id='address' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="address2" className='text-zinc-500 font-semibold'>Address <span className='text-xs text-zinc-400'>(Street Address Line 2)</span></label>
                                <input type="text" name='address2' onChange={(e) => setData({ ...data, streetAddress2: e.target.value })} id='address2' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="city" className='text-zinc-500 font-semibold'>City</label>
                                <input type="text" name='city' onChange={(e) => setData({ ...data, city: e.target.value })} id='city' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="province" className='text-zinc-500 font-semibold'>Province</label>
                                <input type="text" name='province' onChange={(e) => setData({ ...data, province: e.target.value })} id='province' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="postalCode" className='text-zinc-500 font-semibold'>Postal / Zip Code</label>
                                <input type="text" name='postalCode' onChange={(e) => setData({ ...data, zipCode: e.target.value })} id='postalCode' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h1 className='text-zinc-800 text-xl font-bold pb-3 border-b border-zinc-300'>Appointment</h1>
                        <div className='grid grid-cols-2 gap-5  xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="appointmentDate" className='text-zinc-500 font-semibold'>Select Date <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="date" required min={minDate} name='appointmentDate' onChange={(e) => setData({ ...data, appointmentDate: e.target.value })} id='appointmentDate' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="appointmentTime" className='text-zinc-500 font-semibold'>Select Time <span className='text-base text-red-600 ml-2'>*</span></label>
                                <input type="time" required name='appointmentTime' onChange={(e) => setData({ ...data, appointmentTime: e.target.value })} id='appointmentTime' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 xs:block mt-7 xs:mt-0'>
                            <div className='flex flex-col gap-2 xs:mt-7'>
                                <label htmlFor="" className='text-zinc-500 font-semibold'>Are you joining as : (select one)</label>
                                <div className='flex gap-5'>
                                    <div onClick={() => setData({ ...data, role: 'trainer' })} className={`${data.role === 'trainer' && 'bg-[#0000002d]'} w-[100px] cursor-pointer h-[40px] flex justify-center items-center border border-zinc-300 rounded-md`}>Trainer</div>
                                    <div onClick={() => setData({ ...data, role: 'trainee' })} className={`${data.role === 'trainee' && 'bg-[#0000002d]'} w-[100px] cursor-pointer h-[40px] flex justify-center items-center border border-zinc-300 rounded-md`}>Trainee</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        data.role === 'trainee' &&

                        <div className='mt-10'>
                            <h1 className='text-zinc-800 text-xl font-bold pb-3 border-b border-zinc-300'>Training Sign-up and Selection</h1>
                            <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                                <div className='flex flex-col gap-2 xs:mt-7'>
                                    <label htmlFor="trainingName" className='text-zinc-500 font-semibold'>Training Name {data.role === 'trainee' && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                    <input type="text" required name='trainingName' onChange={(e) => setData({ ...data, trainingName: e.target.value })} id='trainingName' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                                </div>
                                <div className='flex flex-col gap-2 xs:mt-7'>
                                    <label htmlFor="trainingCourseName" className='text-zinc-500 font-semibold'>Training Course Name {data.role === 'trainee' && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                    <input type="text" required name='trainingCourseName' onChange={(e) => setData({ ...data, trainingCourseName: e.target.value })} id='trainingCourseName' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                                <div className='flex flex-col gap-2 xs:mt-7'>
                                    <label htmlFor="preferredDate" className='text-zinc-500 font-semibold'>Preferred Date {data.role === 'trainee' && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                    <input type="date" required min={minTodayDate} name='preferredDate' onChange={(e) => setData({ ...data, preferredDate: e.target.value })} id='preferredDate' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                                </div>
                                <div className='flex flex-col gap-2 xs:mt-7'>
                                    <label htmlFor="preferredDate2" className='text-zinc-500 font-semibold'>Preferred Date (2nd choice)</label>
                                    <input type="date" min={minTodayDate} name='preferredDate2' onChange={(e) => setData({ ...data, preferredDate2: e.target.value })} id='preferredDate2' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 xs:block mt-7 xs:mt-0'>
                                <div className='flex flex-col gap-2 xs:mt-7'>
                                    <label htmlFor="location" className='text-zinc-500 font-semibold'>Location {data.role === 'trainee' && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                    <input type="text" required name='location' onChange={(e) => setData({ ...data, location: e.target.value })} id='location' className='w-full py-3 px-5 bg-transparent border border-zinc-300 rounded-md text-sm text-zinc-800 focus:outline-none' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 xs:block mt-7 xs:mt-0'>
                                <div className='flex flex-col gap-2 xs:mt-7'>
                                    <label htmlFor="" className='text-zinc-500 font-semibold'>Training Options {data.role === 'trainee' && <span className='text-base text-red-600 ml-2'>*</span>}</label>
                                    <div className='flex gap-5'>
                                        <div onClick={() => setData({ ...data, trainingOption: 'half day' })} className={`${data.trainingOption === 'half day' && 'bg-[#0000002d]'} w-[100px] cursor-pointer h-[40px] flex justify-center items-center border border-zinc-300 rounded-md`}>Full Day</div>
                                        <div onClick={() => setData({ ...data, trainingOption: 'full day' })} className={`${data.trainingOption === 'full day' && 'bg-[#0000002d]'} w-[100px] cursor-pointer h-[40px] flex justify-center items-center border border-zinc-300 rounded-md`}>Half Day</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                    <div className='mt-10 flex justify-center pt-8 border-t border-zinc-300'>
                        {
                            notEmpty ?
                                <button type='submit' className='w-[170px] h-[50px] flex justify-center items-center font-bold bg-green-500 text-white'>{loading ? <Loader width='w-4' height='h-4' /> : 'Submit'}</button>
                                :
                                <button type='button' className='w-[170px] h-[50px] cursor-not-allowed flex justify-center items-center font-bold bg-gray-500 text-white'>Submit</button>
                        }
                    </div>
                    {
                        success &&
                        <p className='text-green-600 font-semibold text-sm text-center mt-2'>Registration done successfully</p>
                    }
                    {
                        error &&
                        <p className='text-red-600 font-semibold text-sm text-center mt-2'>Something went wrong</p>
                    }
                </div>
            </form>
        </div>
    );
}

export default Register;