import React from 'react'

function ClasseAttendant() {
    
    const attendantData = [
        {subject: 'Mathematics', value: 25},
        {subject: 'English', value: 30},
        {subject: 'Science', value: 70},
        {subject: 'Mathematics', value: 47},
    ]

  return (
    <div>
        <div className="head text-xl font-semibold mb-7">
            Monthly Class Attendance
        </div>
        <div className="body flex flex-col gap-6">
            {attendantData.map((item, index) => (
            <div className=""  key={index}>
                <div className="flex justify-between items-center">
                    <p className='text-sm'>{item.subject}</p>
                    <p className='text-gray-400 text-sm'>{item.value}</p>
                </div>
                <div className="attendance">
                    <input type="range" name="" id="" value={item.value} readOnly className='h-[5px] w-full' />
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ClasseAttendant