import React from 'react'
import book from '../Icons/Book (1).png'
import { Link } from 'react-router-dom'

const ExploreMore = () => {
  return (
    <div className='poppins flex flex-col gap-2'>
        <div className="bg-[#F2F1F1] p-10 flex gap-[3rem] flex-col rounded-xl">
            <div className="flex flex-col gap-5 justify-center items-center text-center">
                <img src={book} alt="" />
                <h3 className='text-[#186BAD] font-bold text-3xl'>Explore more <br /> of our subjects</h3>
            </div>

            <button className='text-[#186BAD] bg-transparent border-[1px] border-[#186BAD] transition-all hover:bg-[#186BAD] hover:text-white rounded-full px-20 py-1 text-lg'>Explore</button>
        </div>
        <button className='bg-[#186BAD] p-2 text-lg text-white transition-all hover:bg-[#125185] rounded-lg'>
            <Link to='/tutor'>
                Find a tutor
            </Link>
        </button>
    </div>
  )
}

export default ExploreMore