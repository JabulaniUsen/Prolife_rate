import React from 'react'
import { Link } from 'react-router-dom'

function College() {
  return (
    <div className='college2 poppins lg:mx-28 my-5 lg:h-[100vh] py-10 flex items-center bg-[#ede9f2] rounded-3xl'>
        <div className="slide w-[100%] px-5 lg:w-[50%] lg:p-10">
            {/* <h2 className='text-[#186bad] font-bold my-8 bg-[#e4e2f4] p-2 rounded-lg w-[125px]'>College Level</h2> */}
            <h1 className='font-bold lg:text-4xl text-2xl leading-snug my-2 text-[#186bad]'>Learn Anywhere, Anytime
                with our Expert Tutors 
                at Your Fingertips
            </h1>
           
            <p className=' lg:w-[500px] text-[#5d5a6f] '>
                Access to top-quality education is just a click 
                away. Our platform connects you with expert 
                tutors who are passionate about sharing their 
                knowledge.
            </p>
            
            <Link to='/signup'>
              <button className='signup rounded-xl mt-8 p-4 bg-[#186bad] text-white font-semibold'>Sign up as Student</button>
            </Link>
            
          </div>
    </div>
  )
}

export default College