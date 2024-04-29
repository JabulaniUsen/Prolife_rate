import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords must match");
        } else {
            setError('');
            toast.success('Password changed successfully');
            navigate('/signin')
        }
    };

    return (
        <div className='poppins'>
            <Header />
            <ToastContainer />
            <h2 className='text-center lg:text-2xl font-bold mt-10'>Change Password</h2>
            <div className="lg:w-[80%] mt-5 m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins">
                <h2 className='text-center font-bold'>Instructions:</h2>
                <h2 className='text-center lg:w-[500px] m-auto mb-16'>Enter your current password and create a new password to update your account password.</h2>
                <form className='grid grid-cols-1 place-items-center gap-14 gap-x-10 ' onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label className='text-base font-semibold'>New Password:</label>
                        <div className="border border-gray-300 bg-white flex items-center rounded-lg pr-3 lg:w-[600px]">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className='flex-1 p-3 focus:outline-none'
                                required
                                placeholder='Enter your Password'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="cursor-pointer"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className='text-base font-semibold'>Confirm New Password:</label>
                        <div className="border border-gray-300 bg-white flex items-center rounded-lg pr-3 lg:w-[600px]">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                className='flex-1 p-3 focus:outline-none'
                                required
                                placeholder='Enter your Password'
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="cursor-pointer"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <div className="flex items-end justify-end lg:w-[80%] m-auto border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 poppins">
                        <button type="submit" className='bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded' disabled={!password || !confirmPassword}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;
