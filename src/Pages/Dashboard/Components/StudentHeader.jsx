import React from 'react'
import logo from '../../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faGear, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'


const StudentHeader = () => {
  return (
    <div className='py-10 px-10 flex justify-between'>
        <div className="">
            <img src={logo} className='w-[150px]' alt="" />
        </div>
        <div className="flex items-center gap-10">
            <div className="border border-gray-400 rounded-full w-[350px] p-2 flex items-center gap-3">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-400'/>
                <input type="text" className='outline-none w-full' placeholder='Search' />
            </div>
            <div className="icons flex items-center gap-10">
                <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative">
                    <FontAwesomeIcon icon={faBell} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative">
                    <FontAwesomeIcon icon={faGear} className='text-lg text-[#242f48]' />
                </div>
                <div className="relative">
                    <FontAwesomeIcon icon={faMessage} className='text-lg text-[#242f48]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentHeader