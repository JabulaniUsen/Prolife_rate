import React from 'react'
import student from '../../../Assets/student.png'
import college from '../../../Assets/college.png'
import school from '../../../Assets/school.png'
import { Link } from 'react-router-dom'

function Benefits() {
  return (
    <div className='poppins px-5 lg:px-28 '>
        <div className="header">
            <h1 className='text-[#186BAD] font-semibold lg:text-3xl text-2xl'>Who Can Benefit from Our Program?</h1>
            <p className='my-5'>Proliferate.ai's program is designed for a broad spectrum of students and learners, including:</p>
        </div>

        <div className=" flex lg:flex-row flex-col gap-2 justify-around items-center my-9">
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg lg:w-[400px] w-[300px]">
                <h3 className='text-lg font-bold'>Student</h3>
                <img src={student} alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg lg:w-[400px] w-[300px]">
                <h3 className='text-lg font-bold'>Tutor</h3>
                <img src={college} alt="" />
                <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signup'>Sign Up</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Benefits