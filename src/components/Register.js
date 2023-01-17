import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png'
import styles from '../styles/UserName.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/Validate'

const Register = () => {

    const [file, setFile] = useState()

    const formik = useFormik({
        initialValues: {
            email: '',
            userName: '',
            password: ''
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: async values => {
            console.log(values)
        }

    });

    const onUpload = async e => {
        const base64 = ''
        setFile(base64)
    }


    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{ width: '45%', height: '85%' }}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'>Register</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Happy to join you!</span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className='py-1'>
                        <div className='profile flex justify-center py-4'>
                            <label htmlFor="profile">
                                <img src={avatar} className={styles.profile_img} alt="avatar" />
                            </label>
                            <input type="file" id="profile" name='profile' />
                        </div>
                        <div className='textbox flex flex-col items-center gap-6'>
                            <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Enter your email*' />
                            <input {...formik.getFieldProps('userName')} className={styles.textbox} type="text" placeholder='Enter your user name*' />
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Enter your password*' />
                            <button className={styles.btn} type='submit'>Register</button>
                        </div>
                        <div className='text-center py-4'>
                            <span className='text-gray-500'>Already have an account? <Link to='/' className='text-red-500'>Login Now</Link> </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;