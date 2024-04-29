import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'

const ForgottenPw = () => {
  return (
    <div>
      <Header />
      <h2 className='text-center lg:text-2xl font-bold my-10'>Forgot Password</h2>
      <div className="lg:w-[80%] lg:m-auto mx-5 border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins">
        <h2 className='text-center font-bold mb-5'>Instructions:</h2>
        <h2 className='text-center lg:w-[500px] m-auto mb-16'>Enter the email address associated with your account. We'll send you a link to reset your password.</h2>
        <form className=' m-auto'>
          <div className="flex flex-col">
            <label className='text-base font-semibold'>Email Address:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg lg:w-[500px]">
              <input type="email" name="email" className='w-full' required placeholder='Enter your Email Address' />
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-end justify-end lg:w-[80%] lg:m-auto mx-5 border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 mb-11 poppins">
        <Link to='/reset_password'><button className='bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded'>Next</button></Link>
      </div>
    </div>
  )
}

export default ForgottenPw
