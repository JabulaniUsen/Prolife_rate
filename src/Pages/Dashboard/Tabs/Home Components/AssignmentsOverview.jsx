import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AssignmentsOverview = () => {
    const assignmentData = [
        {subject: 'Science', topic: 'Biological Benefits', date: '04 May, 09:20 AM'},
        {subject: 'Science', topic: 'Biological Benefits', date: '04 May, 09:20 AM'},
        {subject: 'Science', topic: 'Biological Benefits', date: '04 May, 09:20 AM'},
        {subject: 'Science', topic: 'Biological Benefits', date: '04 May, 09:20 AM'},
    ]
  return (
    <div className='lg:mr-[100px] w-[100%] lg:w-fit'>
        <div className="flex justify-between items-center mb-5">
            <p className='head text-xl font-semibold'>Assignments</p>
            <p className='text-blue-700 cursor-pointer'>See all</p>
        </div>
        <div className="body">
            <ul className="space-y-2">
                {assignmentData.map((item, index) => (
                    <li key={index} className='flex  gap-8 items-center border-b-[1px] border-gray-300 py-3'>
                        <FontAwesomeIcon icon={faFile} className='text-[#0052B4]' />
                        <div className="flex flex-col">
                            <p>{item.subject} | {item.topic}</p>
                            <p className='text-gray-400 text-sm'>{item.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default AssignmentsOverview