import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png'
import styles from '../styles/UserName.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/Validate'
import convertToBase64 from '../helper/Convert'


const Profile = () => {

    const [file, setFile] = useState()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: ''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: async values => {
            values = await Object.assign(values, { profile: file || '' })
            console.log(values)
        }

    });

    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64)
    }


    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{ width: '45%', height: '85%' }}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'>Profile</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>You can update the details</span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className='py-1'>
                        <div className='profile flex justify-center py-4'>
                            <label htmlFor="profile">
                                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name='profile' />
                        </div>
                        <div className='textbox flex flex-col items-center gap-6'>
                            <div className='name flex w-3/4 gap-10'>
                                <input {...formik.getFieldProps('firstName')} className={styles.textbox} type="text" placeholder='First name' />
                                <input {...formik.getFieldProps('lastName')} className={styles.textbox} type="text" placeholder='Last name' />
                            </div>
                            <div className='name flex w-3/4 gap-10'>
                                <input {...formik.getFieldProps('mobile')} className={styles.textbox} type="text" placeholder='Mobile Number' />
                                <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Enter your email' />
                            </div>

                            <input {...formik.getFieldProps('address')} className={styles.textbox} type="text" placeholder='Address' />
                            <button className={styles.btn} type='submit'>Update</button>



                        </div>
                        <div className='text-center py-4'>
                            <span className='text-gray-500'>Come back later? <Link to='/' className='text-red-500'>Log out</Link> </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;