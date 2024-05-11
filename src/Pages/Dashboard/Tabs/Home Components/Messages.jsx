import React from 'react'

const Messages = () => {
    const messageData = [
        {messageName: 'Guy Hawkins', initial: 'GH', message: 'Hello, Mr John I am yet to get your class b report form', time: '10:25am'},
        {messageName: 'Guy Hawkins', initial: 'GH', message: 'Hello, Mr John I am yet to get your class b report form', time: '10:25am'},
        {messageName: 'Guy Hawkins', initial: 'GH', message: 'Hello, Mr John I am yet to get your class b report form', time: '10:25am'},
        {messageName: 'Guy Hawkins', initial: 'GH', message: 'Hello, Mr John I am yet to get your class b report form', time: '10:25am'},
    ]
  return (
    <div className=''>
        <div className="flex justify-between items-center mb-7">
            <p className='head text-xl font-semibold'>Assignments</p>
            <p className='text-blue-700 cursor-pointer'>See all</p>
        </div>
        <div className="body">
            <ul className="space-y-2">
                {messageData.map((item, index) => (
                    <li key={index} className='flex justify-between gap-2  border-b-[1px] border-gray-300 py-3'>
                        <div className="flex items-center gap-3">
                            <span className='p-3 bg-[#F0F7FF] rounded-xl text-[#0052ba] font-semibold'>{item.initial}</span>
                            <div className="flex flex-col">
                                <p>{item.messageName}</p>
                                <p className='mainMessage text-sm text-gray-400 w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis'>{item.message}</p>
                            </div>
                        </div>
                        <p className='text-sm text-gray-700'>{item.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Messages