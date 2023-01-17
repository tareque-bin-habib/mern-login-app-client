import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png'
import styles from '../styles/UserName.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/Validate'

const Reset = () => {

    const formik = useFormik({
        initialValues: {
            password: '',
            confirm_password: ''
        },
        validate: resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: async values => {
            console.log(values)
        }

    });


    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{ width: '50%' }}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-5xl font-bold'>Reset</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Enter new password</span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className='py-20'>
                        <div className='textbox flex flex-col items-center gap-6'>
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New password' />
                            <input {...formik.getFieldProps('confirm_password')} className={styles.textbox} type="password" placeholder='Confirm password' />
                            <button className={styles.btn} type='submit'>Sign in</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset;