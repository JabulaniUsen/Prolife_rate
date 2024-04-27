import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function WaitingRoom() {
    
    const activities = [
        { senderName: 'Adepoju Ademola', message: 'Hello, Mr John  i am yet to get your class b res...', time: '10:25 am'},
        { senderName: 'Jabulani Usen', message: 'Please schedule your class test.', time: '12:35 pm', },
        { senderName: 'Odumayo Akindele', message: 'Please resend last session statistic', time: '04:30 pm', },
    ];

    return (
        <div className='relative my-6 mx-2 rounded-2xl shadow-lg border p-5'>
            {activities.length === 0 && (
            <div className="absolute top-[7rem] right-[8rem]">
                <p className='jost text-[#9e9e9e]'>No messages yet</p>
            </div>
            )}
            <div className="">
                <div className="flex justify-between">
                    <h2 className='text-lg jost font-semibold ml-3'>All classes I attend</h2>
                    {/* <h2 className=' jost font-semibold cursor-pointer text-[#186bad]'>See all</h2> */}
                </div>
                <div className="waitingRoom overflow-y-scroll h-[320px]">
                    {activities.map((item, index) => (
                        <div className="class flex justify-between gap-5 border-[#d3d3d3] border-b m-2 py-5 cursor-pointer" key={index}>

                            <p className="num text-[#186bad] bg-[#f0f7ff] p-3 flex items-center justify-center rounded-lg jost w-[2.5rem] h-[2.5rem] m-auto">
                                <FontAwesomeIcon icon={faMessage} />
                            </p>

                            <div className="jost w-[150px]">
                                <h3 className='name font-bold'>
                                    {item.senderName}
                                </h3>
                                <p className='text-gray-500 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    {item.message}
                                </p>
                            </div>

                            <div className="time jost w-[60px]">
                                <p className='text-[#8A8A8A] text-xs'>{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WaitingRoom;


