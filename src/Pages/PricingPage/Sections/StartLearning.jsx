import React from 'react'
import { Link } from 'react-router-dom'

function StartLearning() {
  return (
    <div className='poppins bg-[#186BAD] p-10 w-[70%] m-auto rounded-[30px] flex flex-col gap-7 justify-center items-center text-center'>
        <h1 className='text-2xl font-semibold text-white'>Proliferate is affordable  for all child!</h1>
        <p className='text-white w-[70%]'>
          Have a question or need a custom solution? Reach out to our team for assistance
        </p>
        <Link to='/contact'><button className='py-4 w-[250px] bg-white font-bold rounded-xl'>Contact Us</button></Link>
    </div>
  )
}

export default StartLearning