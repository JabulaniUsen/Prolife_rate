import React from 'react'
import Header from '../Components/Header'

const CheckMail = () => {
  return (
    <div className='poppins'>
      <Header />
      <div className="">
        <h2 className='text-center lg:w-[700px] m-auto my-5 mt-16 text-lg font-bold'>Email Confirmation Success</h2>
        <div className='lg:w-[80%] m-auto border flex flex-col items-center border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins'>
          <h2 className='text-center lg:w-[700px] m-auto mb-10 text-xl font-semibold'>Congratulations</h2>
          <div className="terms-and-conditions lg:w-[900px] m-auto mb-8">
            <h5 className='lg:text-3xl text-center'>Your email has been successfully confirmed. You can now access your account.</h5>
          </div>
          <button className='bg-[#1f70b2] text-white font-semibold px-10 py-2  max-w-[300px] rounded'>Proceed to Dashboard</button>
        </div>
      </div>
    </div>
  )
}

export default CheckMail