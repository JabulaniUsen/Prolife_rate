import React from 'react'
import user from '../../../../Assets/user.png'
import back from '../../../../Assets/back.svg'

const UpcomingClasses = () => {
    const classesData = [
        {subject: 'Mathematics', date: 'Monday, April 10th', time: '3:00 PM - 4:30 PM', daysLeft: '10days' },
        {subject: 'Mathematics', date: 'Monday, April 10th', time: '3:00 PM - 4:30 PM', daysLeft: '10days' },
        {subject: 'Mathematics', date: 'Monday, April 10th', time: '3:00 PM - 4:30 PM', daysLeft: '10days' },
        {subject: 'Mathematics', date: 'Monday, April 10th', time: '3:00 PM - 4:30 PM', daysLeft: '10days' },
    ]
  return (
    <div className='lg:w-[500px] w-[100%]'>
        <div className="head text-xl font-semibold">
            Upcoming Classes
        </div>
        <div className="body">
            <ul className="list flex flex-col gap-2 py-4">
                {classesData.map((item, index) => (
                    <li key={index} className='flex justify-between items-center flex-wrap border-b-[1px] border-gray-300 py-3 gap-y-2'>
                        <img src={user} alt="" />
                        <div className="flex flex-col">
                            <p className='font-semibold'>{item.subject}</p>
                            <p className='font-semibold lg:text-sm text-xs'>{item.date}</p>
                        </div>
                        <div className="time text-gray-600 lg:text-sm text-xs lg:mb-[-25px] mb-[-20px]">{item.time}</div>
                        <p className='bg-[#e9e7e7] lg:px-3 px-2 lg:py-2 py-[0.3rem] text-xs lg:rounded-2xl rounded-lg flex items-center lg:gap-3 gap-1'>
                            <p>{item.daysLeft}</p>
                            <img src={back} alt="" />
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default UpcomingClasses