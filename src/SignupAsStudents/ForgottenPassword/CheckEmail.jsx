import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'

const CheckEmail = () => {
  return (
    <div className='poppins'>
      <Header />
      <div className="">
        <h2 className='text-center lg:w-[700px] m-auto my-5 mt-16 text-lg font-bold'>Reset Password</h2>
        <div className='lg:w-[80%] m-auto border flex flex-col items-center border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins'>
          <div className="terms-and-conditions lg:w-[900px] m-auto mb-8">
            <h5 className='lg:text-3xl text-center'>Check your mail and follow the instructions on how to reset your password</h5>
          </div>
          <Link to='/change_password'>
            <button className='bg-[#1f70b2] text-white font-semibold px-10 py-2  max-w-[300px] rounded'>View Email</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckEmail