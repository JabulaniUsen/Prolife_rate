import React, {useState, } from 'react'
import Header from '../Components/Header'
import studentImg from '../Assets/student.png'
import college from '../Assets/college.png'
import school from '../Assets/school.png'
import google from '../Assets/Google.jpg'
import facebook from '../Assets/facebook.png'
import {Link, useNavigate} from 'react-router-dom'


function Register() {  
    const navigate=useNavigate()
    const [student, setStudent]=useState(true)
    const [tutor, setTutor]=useState(true)



    const handleNavigateStudent=() => {
        setStudent("omor")
        navigate('/signup', {state: {student}});
    }

    const handleNavigateTutor=() => {
        setTutor("omor")
        navigate('/signupastutor', {state: {tutor}})
    }

    return (
        <div className="">
            <Header />
            <div className=' poppins px-10 lg:px-28 py-7 '>

                <div className="text-center my-10">
                    <h1 className='text-[#186BAD] text-3xl font-bold'>Register with us</h1>
                </div>

                <div className=" flex lg:flex-row flex-col gap-2 justify-around items-center my-9">
                    <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg lg:w-[400px] w-[300px]">
                        <h3 className='text-lg font-bold'>Students</h3>
                        <img src={studentImg} alt="" />
                        <button onClick={handleNavigateStudent} className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'>
                            <span>Sign Up</span>
                        </button>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-4 border-[1px] border-[#646464] rounded-lg lg:w-[400px] w-[300px]">
                        <h3 className='text-lg font-bold'>Tutor</h3>
                        <img src={college} alt="" />
                        <button className='bg-[#186BAD] rounded-2xl text-2xl py-3 px-7 text-white font-semibold'><Link to='/signupastutor'>Sign Up</Link></button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-7 my-11">
                    <p className='text-[#898A8B]'>Already have an account? <span className='text-[#186BAD] ml-2'>Sign in</span></p>
                    <div className="">
                        <p className='text-[#898A8B] flex'><span className='mr-6 lg:block hidden'>--------------------</span> or sign in with   <span className='ml-6 lg:block hidden'>--------------------</span></p>
                    </div>
                    <div className="socials flex gap-5">
                        <img src={google} className='border-[1px] rounded-full p-4 border-[#8888] cursor-pointer' alt="" />
                        <img src={facebook} className='border-[1px] rounded-full p-4 border-[#8888] cursor-pointer' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register