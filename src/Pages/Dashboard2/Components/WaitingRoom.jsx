import React, {useState} from 'react';

function WaitingRoom({handleSeeAllClick}) {

    const studentData = [
        { initials: 'AA', name: 'Adepoju Ademola', message: 'Hello, Mr John, I am yet to get your class b result. What is going on? I am loosing patience', time: '03:23am'},
        { initials: 'JU', name: 'Jabulani Usen', message: 'Please schedule your class test', time: '10:25am', },
        { initials: 'OA', name: 'Odumayo Akindele', message: 'Please resend last session', time: '12:25am', },
        { initials: 'GM', name: 'Goodness Mbakara', message: 'Send Document via email', time: '04:30am', },
        { initials: 'BP', name: 'Badiru Pomile', message: 'Hello, Mr John, I am yet to get your class b result. What is going on? I am loosing patience', time: '01:14pm'},
        { initials: 'EJ', name: 'Emmanuel John', message: 'Please schedule your class test', time: '10:25am', },
        { initials: 'AO', name: 'Akindele Odumayo', message: 'Please resend last session', time: '12:25am', },
        { initials: 'GE', name: 'Goodness Emmanuel', message: 'Send Document via email', time: '04:30am', },
    ];

    return (
        <div className='waitingRoom overflow-y-scroll relative lg:w-[350px] w-[400px] lg:h-[330px] h-[400px] my-6 mx-2 shadow-xl rounded-2xl p-5 lg:p-0'>
            {studentData.length === 0 && (
            <div className="absolute top-[7rem] right-[8rem]">
                <p className='jost text-[#9e9e9e]'>No progress yet</p>
            </div>
            )}
            <div className="m-3">
                <div className="flex justify-between pb-6">
                    <h2 className='text-lg jost font-semibold'>Waiting Room</h2>
                    <h2 className=' jost font-semibold cursor-pointer text-[#186bad]' onClick={handleSeeAllClick}>See all</h2>
                </div>
                {studentData.map((item, index) => (
                    <div className="class flex gap-3 border-t-2 py-5" key={index}>

                        <p className="num text-[#186bad] bg-[#f0f7ff] flex items-center justify-center rounded-xl jost w-[3rem] h-[3rem] text-xl">
                            </p>

                        <div className="jost w-[170px]">
                            <h3 className='name font-bold ' title={item.name}>
                                {item.name}
                            </h3>
                            <p className='text-gray-500 text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                {item.message}
                            </p>
                        </div>

                        <div className="time jost">
                            <div className="">
                                <p className='text-[#8A8A8A] text-xs'>{item.time}</p>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default WaitingRoom;


