import React from 'react'
import logo from '../../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell, faEnvelope, faGear, faMagnifyingGlass, faMessage, faUserAlt } from '@fortawesome/free-solid-svg-icons'


const StudentHeader = () => {
  return (
    <div className='py-5 lg:px-10 px-5 flex justify-between items-center shadow-lg'>
        <div className="">
            <img src={logo} className='w-[120px] ml-10 lg:ml-0' alt="" />
        </div>
        <div className="flex items-center gap-10">
            <div className="border border-gray-400 rounded-full lg:w-[350px] md:w-[200px] hidden p-2 flex items-center gap-3">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-400'/>
                <input type="text" className='outline-none w-full' placeholder='Search' />
            </div>
            <div className="icons flex items-center gap-10">
                <div className="relative cursor-pointer lg:block hidden">
                    <FontAwesomeIcon icon={faEnvelope} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative cursor-pointer lg:block hidden">
                    <FontAwesomeIcon icon={faBell} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative cursor-pointer lg:block hidden">
                    <FontAwesomeIcon icon={faGear} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative cursor-pointer lg:block hidden">
                    <FontAwesomeIcon icon={faMessage} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative cursor-pointer flex items-center gap-3">
                    <FontAwesomeIcon icon={faUserAlt} className='text-sm p-2 border rounded-full text-[#242f48]' />
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentHeader