import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <div className='px-10 lg:px-28 flex my-28 justify-around flex-wrap'>
        <Link to='/paymentpage'>
        <div className='inter flex flex-col justify-between p-8 shadow-md w-[350px]'>
            <div className="price-header">
                <div className="">
                    <h2 className='text-[#186BAD]'>👥 Individual Plan: One Child</h2>
                </div>
                <h2 className='text-sm font-semibold mt-5'>
                    <span className='font-bold text-5xl'>$5</span> / hr
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Personalized tutoring
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Subject-specific support
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Homework assistance
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Test prep materials
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Get Started</button>
        </div>
        </Link>

        <Link to='/paymentpage'>
        <div className='inter flex flex-col justify-between shadow-md p-10 w-[350px]'>
            <div className="price-header">
                <div className="flex justify-between">
                    <h2 className='text-[#186BAD]'>👤 Family Plan: Multiple Children</h2>
                    {/* <p className='border-[1px] p-[5px] px-5 text-xs rounded-full border-[#8a8a8a]'>BEST!</p> */}
                </div>
                <h2 className='text-sm font-semibold mt-5'>
                    <span className='font-bold text-5xl'>$10</span> / hr
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Individual tutoring for all kids
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Subject-specific support
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Homework assistance
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#d02c23] text-white p-2 rounded-full'/>
                        Test prep materials
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Start Family Learning</button>
        </div>
        </Link>

        <Link to='/paymentpage'>
        <div className='inter flex flex-col justify-between p-8 shadow-md w-[350px]'>
            <div className="price-header">
                <div className="">
                    <h2 className='text-[#186BAD]'>🏫 Classroom Plan: Teachers & Students</h2>
                </div>
                <h2 className='text-sm font-semibold  mt-5'>
                    <span className='font-bold text-xl'>Contact us for details </span>
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Access for a single classroom
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Subject-specific support
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Group tutoring options
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Special pricing for educators
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Connect with Us</button>
        </div>
        </Link>

        <Link to='/paymentpage'>
        <div className='inter my-10 flex flex-col justify-between p-8 shadow-md w-[350px]'>
            <div className="price-header">
                <div className="">
                    <h2 className='text-[#186BAD]'>🏫 School Plan: Educational Institutions</h2>
                </div>
                <h2 className='text-sm font-semibold  mt-5'>
                    <span className='font-bold text-xl'>Contact us for details </span>
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Full school access
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Multiple classrooms and subjects
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Specialized support
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Teacher training
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Request a Quote</button>
        </div>
        </Link>
        <Link to='/paymentpage'>
        <div className='inter my-10 flex flex-col justify-between p-8 shadow-md w-[350px]'>
            <div className="price-header">
                <div className="">
                    <h2 className='text-[#186BAD]'>🏫 District Plan: District-Wide Learning</h2>
                </div>
                <h2 className='text-sm font-semibold  mt-5'>
                    <span className='font-bold text-xl'>Contact us for details </span>
                </h2>
            </div>
            <div className="feature">
                <ul className='flex flex-col gap-4 my-7'>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Access for an entire school district
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Comprehensive support
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Administrative features
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faCheck} className='bg-[#90b8d8] text-white p-2 rounded-full'/>
                        Custom pricing based on district size
                    </li>
                </ul>
            </div>
            <button className='border-2 rounded-xl text-[#186BAD] hover:bg-[#186BAD] hover:text-white font-bold p-4'>Get Custom Quote</button>
        </div>
        </Link>
        
    </div>
  )
}

export default Plans