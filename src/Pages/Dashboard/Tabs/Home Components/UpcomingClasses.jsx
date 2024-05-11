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
    <div className='w-[500px]'>
        <div className="head text-xl font-semibold">
            Upcoming Classes
        </div>
        <div className="body">
            <ul className="list flex flex-col gap-2 py-4">
                {classesData.map((item, index) => (
                    <li key={index} className='flex justify-between items-center border-b-[1px] border-gray-300 py-3'>
                        <img src={user} alt="" />
                        <div className="flex flex-col">
                            <p className='font-semibold'>{item.subject}</p>
                            <p className='font-semibold text-sm'>{item.date}</p>
                        </div>
                        <div className="time text-gray-600 text-sm mb-[-30px]">{item.time}</div>
                        <p className='bg-[#e9e7e7] px-3 py-2 text-sm rounded-2xl flex items-center gap-3'>
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