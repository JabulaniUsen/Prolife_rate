import React from 'react'
import user from '../../../../Assets/user.png'

const MyTutor = () => {
    const tutorData = [
        {img: user, tutorName: 'Guy Hawkins',},
        {img: user, tutorName: 'Guy Hawkins',},
        {img: user, tutorName: 'Guy Hawkins',},
        {img: user, tutorName: 'Guy Hawkins',},
    ]
  return (
    <div className=' w-[100%] lg:w-fit'>
        <div className="flex justify-between items-center mb-7">
            <p className='head text-xl font-semibold'>Assignments</p>
            <p className='text-blue-700 cursor-pointer'>See all</p>
        </div>
        <div className="body">
            <ul className="space-y-2">
                {tutorData.map((item, index) => (
                    <li key={index} className='flex justify-between gap-8 items-center border-b-[1px] border-gray-300 py-3'>
                        <div className="flex items-center gap-5">
                            <span className='w-5 h-5 border-2 border-gray-400 rounded-md'></span>
                            <img src={item.img} alt="" />
                            <p>{item.tutorName}</p>
                        </div>
                        <p className='bg-[#D4F8D3] px-4 py-2 rounded-2xl text-[#1c7a19]'>Active</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default MyTutor